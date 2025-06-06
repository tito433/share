(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Ns=[],bn=()=>{},A1=()=>!1,sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hu=t=>t.startsWith("onUpdate:"),ct=Object.assign,zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},b1=Object.prototype.hasOwnProperty,Ne=(t,e)=>b1.call(t,e),fe=Array.isArray,Os=t=>il(t)==="[object Map]",ig=t=>il(t)==="[object Set]",_e=t=>typeof t=="function",Ke=t=>typeof t=="string",tr=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",og=t=>(je(t)||_e(t))&&_e(t.then)&&_e(t.catch),ag=Object.prototype.toString,il=t=>ag.call(t),R1=t=>il(t).slice(8,-1),lg=t=>il(t)==="[object Object]",Gu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},C1=/-(\w)/g,on=ol(t=>t.replace(C1,(e,n)=>n?n.toUpperCase():"")),S1=/\B([A-Z])/g,as=ol(t=>t.replace(S1,"-$1").toLowerCase()),al=ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=ol(t=>t?`on${al(t)}`:""),Ir=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},P1=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let pf;const ll=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?N1(r):cl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||je(t))return t}const k1=/;(?![^(]*\))/g,x1=/:([^]+)/,D1=/\/\*[^]*?\*\//g;function N1(t){const e={};return t.replace(D1,"").split(k1).forEach(n=>{if(n){const r=n.split(x1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xn(t){let e="";if(Ke(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=xn(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",V1=qu(O1);function ug(t){return!!t||t===""}const hg=t=>!!(t&&t.__v_isRef===!0),Yt=t=>Ke(t)?t:t==null?"":fe(t)||je(t)&&(t.toString===ag||!_e(t.toString))?hg(t)?Yt(t.value):JSON.stringify(t,dg,2):String(t),dg=(t,e)=>hg(e)?dg(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dc(r,i)+" =>"]=s,n),{})}:ig(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dc(n))}:tr(e)?dc(e):je(e)&&!fe(e)&&!lg(e)?String(e):e,dc=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class M1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function L1(){return $t}let Ue;const fc=new WeakSet;class fg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mf(this),gg(this);const e=Ue,n=dn;Ue=this,dn=!0;try{return this.fn()}finally{_g(this),Ue=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qu(e);this.deps=this.depsTail=void 0,mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let pg=0,Ni,Oi;function mg(t,e=!1){if(t.flags|=8,e){t.next=Oi,Oi=t;return}t.next=Ni,Ni=t}function Wu(){pg++}function Ku(){if(--pg>0)return;if(Oi){let e=Oi;for(Oi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ni;){let e=Ni;for(Ni=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _g(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qu(r),U1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wi)||(t.globalVersion=Wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=dn;Ue=t,dn=!0;try{gg(t);const s=t.fn(t._value);(e.version===0||Ir(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,dn=r,_g(t),t.flags&=-3}}function Qu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function U1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const vg=[];function Gn(){vg.push(dn),dn=!1}function Wn(){const t=vg.pop();dn=t===void 0?!0:t}function mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Wi=0;class F1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!dn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new F1(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,wg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Wi++,this.notify(e)}notify(e){Wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ku()}}}function wg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hc=new WeakMap,Yr=Symbol(""),zc=Symbol(""),Ki=Symbol("");function Pt(t,e,n){if(dn&&Ue){let r=Hc.get(t);r||Hc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xu),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=Hc.get(t);if(!o){Wi++;return}const l=c=>{c&&c.trigger()};if(Wu(),e==="clear")o.forEach(l);else{const c=fe(t),u=c&&Gu(n);if(c&&n==="length"){const d=Number(r);o.forEach((f,m)=>{(m==="length"||m===Ki||!tr(m)&&m>=d)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ki)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Yr)),Os(t)&&l(o.get(zc)));break;case"delete":c||(l(o.get(Yr)),Os(t)&&l(o.get(zc)));break;case"set":Os(t)&&l(o.get(Yr));break}}Ku()}function ys(t){const e=xe(t);return e===t?e:(Pt(e,"iterate",Ki),sn(t)?e:e.map(yt))}function ul(t){return Pt(t=xe(t),"iterate",Ki),t}const $1={__proto__:null,[Symbol.iterator](){return pc(this,Symbol.iterator,yt)},concat(...t){return ys(this).concat(...t.map(e=>fe(e)?ys(e):e))},entries(){return pc(this,"entries",t=>(t[1]=yt(t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(yt),arguments)},find(t,e){return Un(this,"find",t,e,yt,arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,yt,arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return mc(this,"includes",t)},indexOf(...t){return mc(this,"indexOf",t)},join(t){return ys(this).join(t)},lastIndexOf(...t){return mc(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return Ii(this,"pop")},push(...t){return Ii(this,"push",t)},reduce(t,...e){return gf(this,"reduce",t,e)},reduceRight(t,...e){return gf(this,"reduceRight",t,e)},shift(){return Ii(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return Ii(this,"splice",t)},toReversed(){return ys(this).toReversed()},toSorted(t){return ys(this).toSorted(t)},toSpliced(...t){return ys(this).toSpliced(...t)},unshift(...t){return Ii(this,"unshift",t)},values(){return pc(this,"values",yt)}};function pc(t,e,n){const r=ul(t),s=r[e]();return r!==t&&!sn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const B1=Array.prototype;function Un(t,e,n,r,s,i){const o=ul(t),l=o!==t&&!sn(t),c=o[e];if(c!==B1[e]){const f=c.apply(t,i);return l?yt(f):f}let u=n;o!==t&&(l?u=function(f,m){return n.call(this,yt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function gf(t,e,n,r){const s=ul(t);let i=n;return s!==t&&(sn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,yt(l),c,t)}),s[e](i,...r)}function mc(t,e,n){const r=xe(t);Pt(r,"iterate",Ki);const s=r[e](...n);return(s===-1||s===!1)&&Zu(n[0])?(n[0]=xe(n[0]),r[e](...n)):s}function Ii(t,e,n=[]){Gn(),Wu();const r=xe(t)[e].apply(t,n);return Ku(),Wn(),r}const j1=qu("__proto__,__v_isRef,__isVue"),Tg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr));function q1(t){tr(t)||(t=String(t));const e=xe(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Eg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Z1:Rg:i?bg:Ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=$1[n]))return c;if(n==="hasOwnProperty")return q1}const l=Reflect.get(e,n,kt(e)?e:r);return(tr(n)?Tg.has(n):j1(n))||(s||Pt(e,"get",n),i)?l:kt(l)?o&&Gu(n)?l:l.value:je(l)?s?Sg(l):ti(l):l}}class Ig extends Eg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=kr(i);if(!sn(r)&&!kr(r)&&(i=xe(i),r=xe(r)),!fe(e)&&kt(i)&&!kt(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&Gu(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,kt(e)?e:s);return e===xe(s)&&(o?Ir(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!Tg.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",fe(e)?"length":Yr),Reflect.ownKeys(e)}}class H1 extends Eg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const z1=new Ig,G1=new H1,W1=new Ig(!0);const Gc=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function K1(t,e,n){return function(...r){const s=this.__v_raw,i=xe(s),o=Os(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Gc:e?Pa:yt;return!e&&Pt(i,"iterate",c?zc:Yr),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:l?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function Yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Q1(t,e){const n={get(s){const i=this.__v_raw,o=xe(i),l=xe(s);t||(Ir(s,l)&&Pt(o,"get",s),Pt(o,"get",l));const{has:c}=Xo(o),u=e?Gc:t?Pa:yt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(xe(s),"iterate",Yr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=xe(i),l=xe(s);return t||(Ir(s,l)&&Pt(o,"has",s),Pt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=xe(l),u=e?Gc:t?Pa:yt;return!t&&Pt(c,"iterate",Yr),l.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return ct(n,t?{add:Yo("add"),set:Yo("set"),delete:Yo("delete"),clear:Yo("clear")}:{add(s){!e&&!sn(s)&&!kr(s)&&(s=xe(s));const i=xe(this);return Xo(i).has.call(i,s)||(i.add(s),Bn(i,"add",s,s)),this},set(s,i){!e&&!sn(i)&&!kr(i)&&(i=xe(i));const o=xe(this),{has:l,get:c}=Xo(o);let u=l.call(o,s);u||(s=xe(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?Ir(i,d)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=xe(this),{has:o,get:l}=Xo(i);let c=o.call(i,s);c||(s=xe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Bn(i,"delete",s,void 0),u},clear(){const s=xe(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=K1(s,t,e)}),n}function Yu(t,e){const n=Q1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const X1={get:Yu(!1,!1)},Y1={get:Yu(!1,!0)},J1={get:Yu(!0,!1)};const Ag=new WeakMap,bg=new WeakMap,Rg=new WeakMap,Z1=new WeakMap;function ew(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tw(t){return t.__v_skip||!Object.isExtensible(t)?0:ew(R1(t))}function ti(t){return kr(t)?t:Ju(t,!1,z1,X1,Ag)}function Cg(t){return Ju(t,!1,W1,Y1,bg)}function Sg(t){return Ju(t,!0,G1,J1,Rg)}function Ju(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=tw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Vs(t){return kr(t)?Vs(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function Zu(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function nw(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&cg(t,"__v_skip",!0),t}const yt=t=>je(t)?ti(t):t,Pa=t=>je(t)?Sg(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function we(t){return Pg(t,!1)}function rw(t){return Pg(t,!0)}function Pg(t,e){return kt(t)?t:new sw(t,e)}class sw{constructor(e,n){this.dep=new Xu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||sn(e)||kr(e);e=r?e:xe(e),Ir(e,n)&&(this._rawValue=e,this._value=r?e:yt(e),this.dep.trigger())}}function se(t){return kt(t)?t.value:t}const iw={get:(t,e,n)=>e==="__v_raw"?t:se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kg(t){return Vs(t)?t:new Proxy(t,iw)}class ow{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return mg(this,!0),!0}get value(){const e=this.dep.track();return yg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function aw(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new ow(r,s,n)}const Jo={},ka=new WeakMap;let Kr;function lw(t,e=!1,n=Kr){if(n){let r=ka.get(n);r||ka.set(n,r=[]),r.push(t)}}function cw(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:sn(U)||s===!1||s===0?jn(U,1):jn(U);let d,f,m,g,C=!1,P=!1;if(kt(t)?(f=()=>t.value,C=sn(t)):Vs(t)?(f=()=>u(t),C=!0):fe(t)?(P=!0,C=t.some(U=>Vs(U)||sn(U)),f=()=>t.map(U=>{if(kt(U))return U.value;if(Vs(U))return u(U);if(_e(U))return c?c(U,2):U()})):_e(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Gn();try{m()}finally{Wn()}}const U=Kr;Kr=d;try{return c?c(t,3,[g]):t(g)}finally{Kr=U}}:f=bn,e&&s){const U=f,ie=s===!0?1/0:s;f=()=>jn(U(),ie)}const A=L1(),O=()=>{d.stop(),A&&A.active&&zu(A.effects,d)};if(i&&e){const U=e;e=(...ie)=>{U(...ie),O()}}let V=P?new Array(t.length).fill(Jo):Jo;const L=U=>{if(!(!(d.flags&1)||!d.dirty&&!U))if(e){const ie=d.run();if(s||C||(P?ie.some((te,R)=>Ir(te,V[R])):Ir(ie,V))){m&&m();const te=Kr;Kr=d;try{const R=[ie,V===Jo?void 0:P&&V[0]===Jo?[]:V,g];V=ie,c?c(e,3,R):e(...R)}finally{Kr=te}}}else d.run()};return l&&l(L),d=new fg(f),d.scheduler=o?()=>o(L,!1):L,g=U=>lw(U,!1,d),m=d.onStop=()=>{const U=ka.get(d);if(U){if(c)c(U,4);else for(const ie of U)ie();ka.delete(d)}},e?r?L(!0):V=d.run():o?o(L.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function jn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))jn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(ig(t)||Os(t))t.forEach(r=>{jn(r,e,n)});else if(lg(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(t,e,n,r){try{return r?t(...r):t()}catch(s){hl(s,e,n)}}function mn(t,e,n,r){if(_e(t)){const s=yo(t,e,n,r);return s&&og(s)&&s.catch(i=>{hl(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function hl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,c,u)===!1)return}l=l.parent}if(i){Gn(),yo(i,null,10,[t,c,u]),Wn();return}}uw(t,n,s,r,o)}function uw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Mt=[];let Tn=-1;const Ms=[];let fr=null,Ts=0;const xg=Promise.resolve();let xa=null;function dl(t){const e=xa||xg;return t?e.then(this?t.bind(this):t):e}function hw(t){let e=Tn+1,n=Mt.length;for(;e<n;){const r=e+n>>>1,s=Mt[r],i=Qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function eh(t){if(!(t.flags&1)){const e=Qi(t),n=Mt[Mt.length-1];!n||!(t.flags&2)&&e>=Qi(n)?Mt.push(t):Mt.splice(hw(e),0,t),t.flags|=1,Dg()}}function Dg(){xa||(xa=xg.then(Og))}function dw(t){fe(t)?Ms.push(...t):fr&&t.id===-1?fr.splice(Ts+1,0,t):t.flags&1||(Ms.push(t),t.flags|=1),Dg()}function _f(t,e,n=Tn+1){for(;n<Mt.length;n++){const r=Mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ng(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>Qi(n)-Qi(r));if(Ms.length=0,fr){fr.push(...e);return}for(fr=e,Ts=0;Ts<fr.length;Ts++){const n=fr[Ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fr=null,Ts=0}}const Qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(Tn=0;Tn<Mt.length;Tn++){const e=Mt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Mt.length;Tn++){const e=Mt[Tn];e&&(e.flags&=-2)}Tn=-1,Mt.length=0,Ng(),xa=null,(Mt.length||Ms.length)&&Og()}}let dt=null,Vg=null;function Da(t){const e=dt;return dt=t,Vg=t&&t.type.__scopeId||null,e}function Ut(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&kf(-1);const i=Da(e);let o;try{o=t(...s)}finally{Da(i),r._d&&kf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mg(t,e){if(dt===null)return t;const n=_l(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function zr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Gn(),mn(c,n,8,[t.el,l,t,e]),Wn())}}const Lg=Symbol("_vte"),fw=t=>t.__isTeleport,Vi=t=>t&&(t.disabled||t.disabled===""),yf=t=>t&&(t.defer||t.defer===""),vf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,wf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Wc=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},Ug={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:d,pc:f,pbc:m,o:{insert:g,querySelector:C,createText:P,createComment:A}}=u,O=Vi(e.props);let{shapeFlag:V,children:L,dynamicChildren:U}=e;if(t==null){const ie=e.el=P(""),te=e.anchor=P("");g(ie,n,r),g(te,n,r);const R=(y,I)=>{V&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),d(L,y,I,s,i,o,l,c))},v=()=>{const y=e.target=Wc(e.props,C),I=$g(y,e,P,g);y&&(o!=="svg"&&vf(y)?o="svg":o!=="mathml"&&wf(y)&&(o="mathml"),O||(R(y,I),da(e,!1)))};O&&(R(n,te),da(e,!0)),yf(e.props)?(e.el.__isMounted=!1,Vt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(yf(e.props)&&t.el.__isMounted===!1){Vt(()=>{Ug.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ie=e.anchor=t.anchor,te=e.target=t.target,R=e.targetAnchor=t.targetAnchor,v=Vi(t.props),y=v?n:te,I=v?ie:R;if(o==="svg"||vf(te)?o="svg":(o==="mathml"||wf(te))&&(o="mathml"),U?(m(t.dynamicChildren,U,y,s,i,o,l),sh(t,e,!0)):c||f(t,e,y,I,s,i,o,l,!1),O)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Zo(e,n,ie,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const S=e.target=Wc(e.props,C);S&&Zo(e,S,null,u,0)}else v&&Zo(e,te,R,u,1);da(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:d,target:f,props:m}=t;if(f&&(s(u),s(d)),i&&s(c),o&16){const g=i||!Vi(m);for(let C=0;C<l.length;C++){const P=l[C];r(P,e,n,g,!!P.dynamicChildren)}}},move:Zo,hydrate:pw};function Zo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:d}=t,f=i===2;if(f&&r(o,e,n),(!f||Vi(d))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);f&&r(l,e,n)}function pw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:d}},f){const m=e.target=Wc(e.props,c);if(m){const g=Vi(e.props),C=m._lpa||m.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,l(t),n,r,s,i),e.targetStart=C,e.targetAnchor=C&&o(C);else{e.anchor=o(t);let P=C;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")e.targetStart=P;else if(P.data==="teleport anchor"){e.targetAnchor=P,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}P=o(P)}e.targetAnchor||$g(m,e,d,u),f(C&&o(C),e,m,n,r,s,i)}da(e,g)}return e.anchor&&o(e.anchor)}const Fg=Ug;function da(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function $g(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Lg]=i,t&&(r(s,t),r(i,t)),i}const vs=Symbol("_leaveCb"),ea=Symbol("_enterCb");function mw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ur(()=>{t.isMounted=!0}),th(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],gw={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn};function _w(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Kc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:A,onAppear:O,onAfterAppear:V,onAppearCancelled:L}=e,U=String(t.key),ie=_w(n,t),te=(y,I)=>{y&&mn(y,r,9,I)},R=(y,I)=>{const S=I[1];te(y,I),fe(y)?y.every(b=>b.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=A||c;else return;y[vs]&&y[vs](!0);const S=ie[U];S&&Es(t,S)&&S.el[vs]&&S.el[vs](),te(I,[y])},enter(y){let I=u,S=d,b=f;if(!n.isMounted)if(i)I=O||u,S=V||d,b=L||f;else return;let w=!1;const Oe=y[ea]=st=>{w||(w=!0,st?te(b,[y]):te(S,[y]),v.delayedLeave&&v.delayedLeave(),y[ea]=void 0)};I?R(I,[y,Oe]):Oe()},leave(y,I){const S=String(t.key);if(y[ea]&&y[ea](!0),n.isUnmounting)return I();te(m,[y]);let b=!1;const w=y[vs]=Oe=>{b||(b=!0,I(),Oe?te(P,[y]):te(C,[y]),y[vs]=void 0,ie[S]===t&&delete ie[S])};ie[S]=t,g?R(g,[y,w]):w()},clone(y){return Kc(y,e,n,r)}};return v}function Xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ie?(o.patchFlag&128&&s++,r=r.concat(Bg(o.children,e,l))):(e||o.type!==Dn)&&r.push(l!=null?Zr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ze(t,e){return _e(t)?ct({name:t.name},e,{setup:t}):t}function jg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Na(t,e,n,r,s=!1){if(fe(t)){t.forEach((C,P)=>Na(C,e&&(fe(e)?e[P]:e),n,r,s));return}if(Ls(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Na(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?_l(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,f=l.setupState,m=xe(f),g=f===Le?()=>!1:C=>Ne(m,C);if(u!=null&&u!==c&&(Ke(u)?(d[u]=null,g(u)&&(f[u]=null)):kt(u)&&(u.value=null)),_e(c))yo(c,l,12,[o,d]);else{const C=Ke(c),P=kt(c);if(C||P){const A=()=>{if(t.f){const O=C?g(c)?f[c]:d[c]:c.value;s?fe(O)&&zu(O,i):fe(O)?O.includes(i)||O.push(i):C?(d[c]=[i],g(c)&&(f[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,g(c)&&(f[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};o?(A.id=-1,Vt(A,n)):A()}}}ll().requestIdleCallback;ll().cancelIdleCallback;const Ls=t=>!!t.type.__asyncLoader,qg=t=>t.type.__isKeepAlive;function yw(t,e){Hg(t,"a",e)}function vw(t,e){Hg(t,"da",e)}function Hg(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qg(s.parent.vnode)&&ww(r,e,n,s),s=s.parent}}function ww(t,e,n,r){const s=fl(e,t,r,!0);Gg(()=>{zu(r[e],s)},n)}function fl(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gn();const l=wo(n),c=mn(e,n,t,o);return l(),Wn(),c});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=vt)=>{(!eo||t==="sp")&&fl(t,(...r)=>e(...r),n)},Tw=nr("bm"),Ur=nr("m"),Ew=nr("bu"),zg=nr("u"),th=nr("bum"),Gg=nr("um"),Iw=nr("sp"),Aw=nr("rtg"),bw=nr("rtc");function Rw(t,e=vt){fl("ec",t,e)}const Wg="components";function vo(t,e){return Xg(Wg,t,!0,e)||t}const Kg=Symbol.for("v-ndc");function Qg(t){return Ke(t)?Xg(Wg,t,!1)||t:t||Kg}function Xg(t,e,n=!0,r=!1){const s=dt||vt;if(s){const i=s.type;{const l=fT(i,!1);if(l&&(l===e||l===on(e)||l===al(on(e))))return i}const o=Tf(s[t]||i[t],e)||Tf(s.appContext[t],e);return!o&&r?i:o}}function Tf(t,e){return t&&(t[e]||t[on(e)]||t[al(on(e))])}function Kn(t,e,n,r){let s;const i=n,o=fe(t);if(o||Ke(t)){const l=o&&Vs(t);let c=!1,u=!1;l&&(c=!sn(t),u=kr(t),t=ul(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(c?u?Pa(yt(t[d])):yt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Yi(t,e,n={},r,s){if(dt.ce||dt.parent&&Ls(dt.parent)&&dt.parent.ce)return e!=="default"&&(n.name=e),H(),Je(Ie,null,[Z("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),H();const o=i&&Yg(i(n)),l=n.key||o&&o.key,c=Je(Ie,{key:(l&&!tr(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Yg(t){return t.some(e=>Zi(e)?!(e.type===Dn||e.type===Ie&&!Yg(e.children)):!0)?t:null}const Qc=t=>t?g_(t)?_l(t):Qc(t.parent):null,Mi=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zg(t),$forceUpdate:t=>t.f||(t.f=()=>{eh(t.update)}),$nextTick:t=>t.n||(t.n=dl.bind(t.proxy)),$watch:t=>Ww.bind(t)}),gc=(t,e)=>t!==Le&&!t.__isScriptSetup&&Ne(t,e),Cw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gc(r,e))return o[e]=1,r[e];if(s!==Le&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Le&&Ne(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const d=Mi[e];let f,m;if(d)return e==="$attrs"&&Pt(t.attrs,"get",""),d(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Le&&Ne(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gc(s,e)?(s[e]=n,!0):r!==Le&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&Ne(t,o)||gc(e,o)||(l=i[0])&&Ne(l,o)||Ne(r,o)||Ne(Mi,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ef(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function Sw(t){const e=Zg(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&If(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:g,updated:C,activated:P,deactivated:A,beforeDestroy:O,beforeUnmount:V,destroyed:L,unmounted:U,render:ie,renderTracked:te,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:S,components:b,directives:w,filters:Oe}=e;if(u&&Pw(u,r,null),o)for(const be in o){const Te=o[be];_e(Te)&&(r[be]=Te.bind(n))}if(s){const be=s.call(n,n);je(be)&&(t.data=ti(be))}if(Xc=!0,i)for(const be in i){const Te=i[be],Gt=_e(Te)?Te.bind(n,n):_e(Te.get)?Te.get.bind(n,n):bn,an=!_e(Te)&&_e(Te.set)?Te.set.bind(n):bn,Zt=$e({get:Gt,set:an});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ge=>Zt.value=Ge})}if(l)for(const be in l)Jg(l[be],r,n,be);if(c){const be=_e(c)?c.call(n):c;Reflect.ownKeys(be).forEach(Te=>{fa(Te,be[Te])})}d&&If(d,t,"c");function ze(be,Te){fe(Te)?Te.forEach(Gt=>be(Gt.bind(n))):Te&&be(Te.bind(n))}if(ze(Tw,f),ze(Ur,m),ze(Ew,g),ze(zg,C),ze(yw,P),ze(vw,A),ze(Rw,v),ze(bw,te),ze(Aw,R),ze(th,V),ze(Gg,U),ze(Iw,y),fe(I))if(I.length){const be=t.exposed||(t.exposed={});I.forEach(Te=>{Object.defineProperty(be,Te,{get:()=>n[Te],set:Gt=>n[Te]=Gt})})}else t.exposed||(t.exposed={});ie&&t.render===bn&&(t.render=ie),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),w&&(t.directives=w),y&&jg(t)}function Pw(t,e,n=bn){fe(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),kt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function If(t,e,n){mn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jg(t,e,n,r){let s=r.includes(".")?h_(n,r):()=>n[r];if(Ke(t)){const i=e[t];_e(i)&&Ar(s,i)}else if(_e(t))Ar(s,t.bind(n));else if(je(t))if(fe(t))t.forEach(i=>Jg(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Ar(s,i,t)}}function Zg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Oa(c,u,o,!0)),Oa(c,e,o)),je(e)&&i.set(e,c),c}function Oa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oa(t,i,n,!0),s&&s.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=kw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kw={data:Af,props:bf,emits:bf,methods:Ci,computed:Ci,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ci,directives:Ci,watch:Dw,provide:Af,inject:xw};function Af(t,e){return e?t?function(){return ct(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function xw(t,e){return Ci(Yc(t),Yc(e))}function Yc(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ci(t,e){return t?ct(Object.create(null),t,e):e}function bf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ct(Object.create(null),Ef(t),Ef(e??{})):e}function Dw(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function e_(){return{app:null,config:{isNativeTag:A1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nw=0;function Ow(t,e){return function(r,s=null){_e(r)||(r=ct({},r)),s!=null&&!je(s)&&(s=null);const i=e_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Nw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mT,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...f)):_e(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,m){if(!c){const g=u._ceVNode||Z(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,_l(g.component)}},onUnmount(d){l.push(d)},unmount(){c&&(mn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=Us;Us=u;try{return d()}finally{Us=f}}};return u}}let Us=null;function fa(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=vt||dt;if(r||Us){let s=Us?Us._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const t_={},n_=()=>Object.create(t_),r_=t=>Object.getPrototypeOf(t)===t_;function Vw(t,e,n,r=!1){const s={},i=n_();t.propsDefaults=Object.create(null),s_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=xe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(pl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Ne(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const C=on(m);s[C]=Jc(c,l,C,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{s_(t,e,s,i)&&(u=!0);let d;for(const f in l)(!e||!Ne(e,f)&&((d=as(f))===f||!Ne(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Jc(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!Ne(e,f))&&(delete i[f],u=!0)}u&&Bn(t.attrs,"set","")}function s_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Di(c))continue;const u=e[c];let d;s&&Ne(s,d=on(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:pl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=xe(n),u=l||Le;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Jc(s,c,f,u[f],t,!Ne(u,f))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=wo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===as(n))&&(r=!0))}return r}const Lw=new WeakMap;function i_(t,e,n=!1){const r=n?Lw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=f=>{c=!0;const[m,g]=i_(f,e,!0);ct(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return je(t)&&r.set(t,Ns),Ns;if(fe(i))for(let d=0;d<i.length;d++){const f=on(i[d]);Rf(f)&&(o[f]=Le)}else if(i)for(const d in i){const f=on(d);if(Rf(f)){const m=i[d],g=o[f]=fe(m)||_e(m)?{type:m}:ct({},m),C=g.type;let P=!1,A=!0;if(fe(C))for(let O=0;O<C.length;++O){const V=C[O],L=_e(V)&&V.name;if(L==="Boolean"){P=!0;break}else L==="String"&&(A=!1)}else P=_e(C)&&C.name==="Boolean";g[0]=P,g[1]=A,(P||Ne(g,"default"))&&l.push(f)}}const u=[o,l];return je(t)&&r.set(t,u),u}function Rf(t){return t[0]!=="$"&&!Di(t)}const nh=t=>t[0]==="_"||t==="$stable",rh=t=>fe(t)?t.map(In):[In(t)],Uw=(t,e,n)=>{if(e._n)return e;const r=Ut((...s)=>rh(e(...s)),n);return r._c=!1,r},o_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(nh(s))continue;const i=t[s];if(_e(i))e[s]=Uw(s,i,r);else if(i!=null){const o=rh(i);e[s]=()=>o}}},a_=(t,e)=>{const n=rh(e);t.slots.default=()=>n},l_=(t,e,n)=>{for(const r in e)(n||!nh(r))&&(t[r]=e[r])},Fw=(t,e,n)=>{const r=t.slots=n_();if(t.vnode.shapeFlag&32){const s=e._;s?(l_(r,e,n),n&&cg(r,"_",s,!0)):o_(e,r)}else e&&a_(t,e)},$w=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:l_(s,e,n):(i=!e.$stable,o_(e,s)),o=e}else e&&(a_(t,e),o={default:1});if(i)for(const l in s)!nh(l)&&o[l]==null&&delete s[l]},Vt=eT;function Bw(t){return jw(t)}function jw(t,e){const n=ll();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=bn,insertStaticContent:C}=t,P=(T,E,k,$=null,q=null,B=null,J=void 0,W=null,G=!!E.dynamicChildren)=>{if(T===E)return;T&&!Es(T,E)&&($=F(T),Ge(T,q,B,!0),T=null),E.patchFlag===-2&&(G=!1,E.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:Y}=E;switch(z){case ml:A(T,E,k,$);break;case Dn:O(T,E,k,$);break;case pa:T==null&&V(E,k,$,J);break;case Ie:b(T,E,k,$,q,B,J,W,G);break;default:Y&1?ie(T,E,k,$,q,B,J,W,G):Y&6?w(T,E,k,$,q,B,J,W,G):(Y&64||Y&128)&&z.process(T,E,k,$,q,B,J,W,G,oe)}ce!=null&&q&&Na(ce,T&&T.ref,B,E||T,!E)},A=(T,E,k,$)=>{if(T==null)r(E.el=l(E.children),k,$);else{const q=E.el=T.el;E.children!==T.children&&u(q,E.children)}},O=(T,E,k,$)=>{T==null?r(E.el=c(E.children||""),k,$):E.el=T.el},V=(T,E,k,$)=>{[T.el,T.anchor]=C(T.children,E,k,$,T.el,T.anchor)},L=({el:T,anchor:E},k,$)=>{let q;for(;T&&T!==E;)q=m(T),r(T,k,$),T=q;r(E,k,$)},U=({el:T,anchor:E})=>{let k;for(;T&&T!==E;)k=m(T),s(T),T=k;s(E)},ie=(T,E,k,$,q,B,J,W,G)=>{E.type==="svg"?J="svg":E.type==="math"&&(J="mathml"),T==null?te(E,k,$,q,B,J,W,G):y(T,E,q,B,J,W,G)},te=(T,E,k,$,q,B,J,W)=>{let G,z;const{props:ce,shapeFlag:Y,transition:ae,dirs:pe}=T;if(G=T.el=o(T.type,B,ce&&ce.is,ce),Y&8?d(G,T.children):Y&16&&v(T.children,G,null,$,q,_c(T,B),J,W),pe&&zr(T,null,$,"created"),R(G,T,T.scopeId,J,$),ce){for(const ye in ce)ye!=="value"&&!Di(ye)&&i(G,ye,null,ce[ye],B,$);"value"in ce&&i(G,"value",null,ce.value,B),(z=ce.onVnodeBeforeMount)&&vn(z,$,T)}pe&&zr(T,null,$,"beforeMount");const he=qw(q,ae);he&&ae.beforeEnter(G),r(G,E,k),((z=ce&&ce.onVnodeMounted)||he||pe)&&Vt(()=>{z&&vn(z,$,T),he&&ae.enter(G),pe&&zr(T,null,$,"mounted")},q)},R=(T,E,k,$,q)=>{if(k&&g(T,k),$)for(let B=0;B<$.length;B++)g(T,$[B]);if(q){let B=q.subTree;if(E===B||f_(B.type)&&(B.ssContent===E||B.ssFallback===E)){const J=q.vnode;R(T,J,J.scopeId,J.slotScopeIds,q.parent)}}},v=(T,E,k,$,q,B,J,W,G=0)=>{for(let z=G;z<T.length;z++){const ce=T[z]=W?pr(T[z]):In(T[z]);P(null,ce,E,k,$,q,B,J,W)}},y=(T,E,k,$,q,B,J)=>{const W=E.el=T.el;let{patchFlag:G,dynamicChildren:z,dirs:ce}=E;G|=T.patchFlag&16;const Y=T.props||Le,ae=E.props||Le;let pe;if(k&&Gr(k,!1),(pe=ae.onVnodeBeforeUpdate)&&vn(pe,k,E,T),ce&&zr(E,T,k,"beforeUpdate"),k&&Gr(k,!0),(Y.innerHTML&&ae.innerHTML==null||Y.textContent&&ae.textContent==null)&&d(W,""),z?I(T.dynamicChildren,z,W,k,$,_c(E,q),B):J||Te(T,E,W,null,k,$,_c(E,q),B,!1),G>0){if(G&16)S(W,Y,ae,k,q);else if(G&2&&Y.class!==ae.class&&i(W,"class",null,ae.class,q),G&4&&i(W,"style",Y.style,ae.style,q),G&8){const he=E.dynamicProps;for(let ye=0;ye<he.length;ye++){const Re=he[ye],It=Y[Re],ft=ae[Re];(ft!==It||Re==="value")&&i(W,Re,It,ft,q,k)}}G&1&&T.children!==E.children&&d(W,E.children)}else!J&&z==null&&S(W,Y,ae,k,q);((pe=ae.onVnodeUpdated)||ce)&&Vt(()=>{pe&&vn(pe,k,E,T),ce&&zr(E,T,k,"updated")},$)},I=(T,E,k,$,q,B,J)=>{for(let W=0;W<E.length;W++){const G=T[W],z=E[W],ce=G.el&&(G.type===Ie||!Es(G,z)||G.shapeFlag&198)?f(G.el):k;P(G,z,ce,null,$,q,B,J,!0)}},S=(T,E,k,$,q)=>{if(E!==k){if(E!==Le)for(const B in E)!Di(B)&&!(B in k)&&i(T,B,E[B],null,q,$);for(const B in k){if(Di(B))continue;const J=k[B],W=E[B];J!==W&&B!=="value"&&i(T,B,W,J,q,$)}"value"in k&&i(T,"value",E.value,k.value,q)}},b=(T,E,k,$,q,B,J,W,G)=>{const z=E.el=T?T.el:l(""),ce=E.anchor=T?T.anchor:l("");let{patchFlag:Y,dynamicChildren:ae,slotScopeIds:pe}=E;pe&&(W=W?W.concat(pe):pe),T==null?(r(z,k,$),r(ce,k,$),v(E.children||[],k,ce,q,B,J,W,G)):Y>0&&Y&64&&ae&&T.dynamicChildren?(I(T.dynamicChildren,ae,k,q,B,J,W),(E.key!=null||q&&E===q.subTree)&&sh(T,E,!0)):Te(T,E,k,ce,q,B,J,W,G)},w=(T,E,k,$,q,B,J,W,G)=>{E.slotScopeIds=W,T==null?E.shapeFlag&512?q.ctx.activate(E,k,$,J,G):Oe(E,k,$,q,B,J,G):st(T,E,G)},Oe=(T,E,k,$,q,B,J)=>{const W=T.component=aT(T,$,q);if(qg(T)&&(W.ctx.renderer=oe),cT(W,!1,J),W.asyncDep){if(q&&q.registerDep(W,ze,J),!T.el){const G=W.subTree=Z(Dn);O(null,G,E,k)}}else ze(W,T,E,k,q,B,J)},st=(T,E,k)=>{const $=E.component=T.component;if(Jw(T,E,k))if($.asyncDep&&!$.asyncResolved){be($,E,k);return}else $.next=E,$.update();else E.el=T.el,$.vnode=E},ze=(T,E,k,$,q,B,J)=>{const W=()=>{if(T.isMounted){let{next:Y,bu:ae,u:pe,parent:he,vnode:ye}=T;{const At=c_(T);if(At){Y&&(Y.el=ye.el,be(T,Y,J)),At.asyncDep.then(()=>{T.isUnmounted||W()});return}}let Re=Y,It;Gr(T,!1),Y?(Y.el=ye.el,be(T,Y,J)):Y=ye,ae&&ha(ae),(It=Y.props&&Y.props.onVnodeBeforeUpdate)&&vn(It,he,Y,ye),Gr(T,!0);const ft=Sf(T),en=T.subTree;T.subTree=ft,P(en,ft,f(en.el),F(en),T,q,B),Y.el=ft.el,Re===null&&Zw(T,ft.el),pe&&Vt(pe,q),(It=Y.props&&Y.props.onVnodeUpdated)&&Vt(()=>vn(It,he,Y,ye),q)}else{let Y;const{el:ae,props:pe}=E,{bm:he,m:ye,parent:Re,root:It,type:ft}=T,en=Ls(E);Gr(T,!1),he&&ha(he),!en&&(Y=pe&&pe.onVnodeBeforeMount)&&vn(Y,Re,E),Gr(T,!0);{It.ce&&It.ce._injectChildStyle(ft);const At=T.subTree=Sf(T);P(null,At,k,$,T,q,B),E.el=At.el}if(ye&&Vt(ye,q),!en&&(Y=pe&&pe.onVnodeMounted)){const At=E;Vt(()=>vn(Y,Re,At),q)}(E.shapeFlag&256||Re&&Ls(Re.vnode)&&Re.vnode.shapeFlag&256)&&T.a&&Vt(T.a,q),T.isMounted=!0,E=k=$=null}};T.scope.on();const G=T.effect=new fg(W);T.scope.off();const z=T.update=G.run.bind(G),ce=T.job=G.runIfDirty.bind(G);ce.i=T,ce.id=T.uid,G.scheduler=()=>eh(ce),Gr(T,!0),z()},be=(T,E,k)=>{E.component=T;const $=T.vnode.props;T.vnode=E,T.next=null,Mw(T,E.props,$,k),$w(T,E.children,k),Gn(),_f(T),Wn()},Te=(T,E,k,$,q,B,J,W,G=!1)=>{const z=T&&T.children,ce=T?T.shapeFlag:0,Y=E.children,{patchFlag:ae,shapeFlag:pe}=E;if(ae>0){if(ae&128){an(z,Y,k,$,q,B,J,W,G);return}else if(ae&256){Gt(z,Y,k,$,q,B,J,W,G);return}}pe&8?(ce&16&&Ft(z,q,B),Y!==z&&d(k,Y)):ce&16?pe&16?an(z,Y,k,$,q,B,J,W,G):Ft(z,q,B,!0):(ce&8&&d(k,""),pe&16&&v(Y,k,$,q,B,J,W,G))},Gt=(T,E,k,$,q,B,J,W,G)=>{T=T||Ns,E=E||Ns;const z=T.length,ce=E.length,Y=Math.min(z,ce);let ae;for(ae=0;ae<Y;ae++){const pe=E[ae]=G?pr(E[ae]):In(E[ae]);P(T[ae],pe,k,null,q,B,J,W,G)}z>ce?Ft(T,q,B,!0,!1,Y):v(E,k,$,q,B,J,W,G,Y)},an=(T,E,k,$,q,B,J,W,G)=>{let z=0;const ce=E.length;let Y=T.length-1,ae=ce-1;for(;z<=Y&&z<=ae;){const pe=T[z],he=E[z]=G?pr(E[z]):In(E[z]);if(Es(pe,he))P(pe,he,k,null,q,B,J,W,G);else break;z++}for(;z<=Y&&z<=ae;){const pe=T[Y],he=E[ae]=G?pr(E[ae]):In(E[ae]);if(Es(pe,he))P(pe,he,k,null,q,B,J,W,G);else break;Y--,ae--}if(z>Y){if(z<=ae){const pe=ae+1,he=pe<ce?E[pe].el:$;for(;z<=ae;)P(null,E[z]=G?pr(E[z]):In(E[z]),k,he,q,B,J,W,G),z++}}else if(z>ae)for(;z<=Y;)Ge(T[z],q,B,!0),z++;else{const pe=z,he=z,ye=new Map;for(z=he;z<=ae;z++){const pt=E[z]=G?pr(E[z]):In(E[z]);pt.key!=null&&ye.set(pt.key,z)}let Re,It=0;const ft=ae-he+1;let en=!1,At=0;const ir=new Array(ft);for(z=0;z<ft;z++)ir[z]=0;for(z=pe;z<=Y;z++){const pt=T[z];if(It>=ft){Ge(pt,q,B,!0);continue}let tn;if(pt.key!=null)tn=ye.get(pt.key);else for(Re=he;Re<=ae;Re++)if(ir[Re-he]===0&&Es(pt,E[Re])){tn=Re;break}tn===void 0?Ge(pt,q,B,!0):(ir[tn-he]=z+1,tn>=At?At=tn:en=!0,P(pt,E[tn],k,null,q,B,J,W,G),It++)}const ui=en?Hw(ir):Ns;for(Re=ui.length-1,z=ft-1;z>=0;z--){const pt=he+z,tn=E[pt],Oo=pt+1<ce?E[pt+1].el:$;ir[z]===0?P(null,tn,k,Oo,q,B,J,W,G):en&&(Re<0||z!==ui[Re]?Zt(tn,k,Oo,2):Re--)}}},Zt=(T,E,k,$,q=null)=>{const{el:B,type:J,transition:W,children:G,shapeFlag:z}=T;if(z&6){Zt(T.component.subTree,E,k,$);return}if(z&128){T.suspense.move(E,k,$);return}if(z&64){J.move(T,E,k,oe);return}if(J===Ie){r(B,E,k);for(let Y=0;Y<G.length;Y++)Zt(G[Y],E,k,$);r(T.anchor,E,k);return}if(J===pa){L(T,E,k);return}if($!==2&&z&1&&W)if($===0)W.beforeEnter(B),r(B,E,k),Vt(()=>W.enter(B),q);else{const{leave:Y,delayLeave:ae,afterLeave:pe}=W,he=()=>{T.ctx.isUnmounted?s(B):r(B,E,k)},ye=()=>{Y(B,()=>{he(),pe&&pe()})};ae?ae(B,he,ye):ye()}else r(B,E,k)},Ge=(T,E,k,$=!1,q=!1)=>{const{type:B,props:J,ref:W,children:G,dynamicChildren:z,shapeFlag:ce,patchFlag:Y,dirs:ae,cacheIndex:pe}=T;if(Y===-2&&(q=!1),W!=null&&(Gn(),Na(W,null,k,T,!0),Wn()),pe!=null&&(E.renderCache[pe]=void 0),ce&256){E.ctx.deactivate(T);return}const he=ce&1&&ae,ye=!Ls(T);let Re;if(ye&&(Re=J&&J.onVnodeBeforeUnmount)&&vn(Re,E,T),ce&6)yn(T.component,k,$);else{if(ce&128){T.suspense.unmount(k,$);return}he&&zr(T,null,E,"beforeUnmount"),ce&64?T.type.remove(T,E,k,oe,$):z&&!z.hasOnce&&(B!==Ie||Y>0&&Y&64)?Ft(z,E,k,!1,!0):(B===Ie&&Y&384||!q&&ce&16)&&Ft(G,E,k),$&&We(T)}(ye&&(Re=J&&J.onVnodeUnmounted)||he)&&Vt(()=>{Re&&vn(Re,E,T),he&&zr(T,null,E,"unmounted")},k)},We=T=>{const{type:E,el:k,anchor:$,transition:q}=T;if(E===Ie){sr(k,$);return}if(E===pa){U(T);return}const B=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:J,delayLeave:W}=q,G=()=>J(k,B);W?W(T.el,B,G):G()}else B()},sr=(T,E)=>{let k;for(;T!==E;)k=m(T),s(T),T=k;s(E)},yn=(T,E,k)=>{const{bum:$,scope:q,job:B,subTree:J,um:W,m:G,a:z,parent:ce,slots:{__:Y}}=T;Cf(G),Cf(z),$&&ha($),ce&&fe(Y)&&Y.forEach(ae=>{ce.renderCache[ae]=void 0}),q.stop(),B&&(B.flags|=8,Ge(J,T,E,k)),W&&Vt(W,E),Vt(()=>{T.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ft=(T,E,k,$=!1,q=!1,B=0)=>{for(let J=B;J<T.length;J++)Ge(T[J],E,k,$,q)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const E=m(T.anchor||T.el),k=E&&E[Lg];return k?m(k):E};let ne=!1;const ee=(T,E,k)=>{T==null?E._vnode&&Ge(E._vnode,null,null,!0):P(E._vnode||null,T,E,null,null,null,k),E._vnode=T,ne||(ne=!0,_f(),Ng(),ne=!1)},oe={p:P,um:Ge,m:Zt,r:We,mt:Oe,mc:v,pc:Te,pbc:I,n:F,o:t};return{render:ee,hydrate:void 0,createApp:Ow(ee)}}function _c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sh(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&sh(o,l)),l.type===ml&&(l.el=o.el),l.type===Dn&&!l.el&&(l.el=o.el)}}function Hw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function c_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:c_(e)}function Cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zw=Symbol.for("v-scx"),Gw=()=>fn(zw);function Ar(t,e,n){return u_(t,e,n)}function u_(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=ct({},n),c=e&&r||!e&&i!=="post";let u;if(eo){if(i==="sync"){const g=Gw();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=bn,g.resume=bn,g.pause=bn,g}}const d=vt;l.call=(g,C,P)=>mn(g,d,C,P);let f=!1;i==="post"?l.scheduler=g=>{Vt(g,d&&d.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(g,C)=>{C?g():eh(g)}),l.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=cw(t,e,l);return eo&&(u?u.push(m):c&&m()),m}function Ww(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?h_(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=wo(this),l=u_(s,i.bind(r),n);return o(),l}function h_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Kw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${as(e)}Modifiers`];function Qw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&Kw(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ke(d)?d.trim():d)),o.number&&(s=n.map(jc)));let l,c=r[l=hc(e)]||r[l=hc(on(e))];!c&&i&&(c=r[l=hc(as(e))]),c&&mn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,mn(u,t,6,s)}}function d_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=d_(u,e,!0);d&&(l=!0,ct(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(je(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):ct(o,i),je(t)&&r.set(t,o),o)}function pl(t,e){return!t||!sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,as(e))||Ne(t,e))}function Sf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:f,data:m,setupState:g,ctx:C,inheritAttrs:P}=t,A=Da(t);let O,V;try{if(n.shapeFlag&4){const U=s||r,ie=U;O=In(u.call(ie,U,d,f,g,m,C)),V=l}else{const U=e;O=In(U.length>1?U(f,{attrs:l,slots:o,emit:c}):U(f,null)),V=e.props?l:Xw(l)}}catch(U){Li.length=0,hl(U,t,1),O=Z(Dn)}let L=O;if(V&&P!==!1){const U=Object.keys(V),{shapeFlag:ie}=L;U.length&&ie&7&&(i&&U.some(Hu)&&(V=Yw(V,i)),L=Zr(L,V,!1,!0))}return n.dirs&&(L=Zr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Xi(L,n.transition),O=L,Da(A),O}const Xw=t=>{let e;for(const n in t)(n==="class"||n==="style"||sl(n))&&((e||(e={}))[n]=t[n]);return e},Yw=(t,e)=>{const n={};for(const r in t)(!Hu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Pf(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==r[m]&&!pl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Pf(r,o,u):!0:!!o;return!1}function Pf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pl(n,i))return!0}return!1}function Zw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const f_=t=>t.__isSuspense;function eT(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):dw(t)}const Ie=Symbol.for("v-fgt"),ml=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),Li=[];let Kt=null;function H(t=!1){Li.push(Kt=t?null:[])}function tT(){Li.pop(),Kt=Li[Li.length-1]||null}let Ji=1;function kf(t,e=!1){Ji+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function p_(t){return t.dynamicChildren=Ji>0?Kt||Ns:null,tT(),Ji>0&&Kt&&Kt.push(t),t}function X(t,e,n,r,s,i){return p_(D(t,e,n,r,s,i,!0))}function Je(t,e,n,r,s){return p_(Z(t,e,n,r,s,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const m_=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||kt(t)||_e(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Ie?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&m_(e),ref:e&&ma(e),scopeId:Vg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return l?(ih(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Ji>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const Z=nT;function nT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kg)&&(t=Dn),Zi(t)){const l=Zr(t,e,!0);return n&&ih(l,n),Ji>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(pT(t)&&(t=t.__vccOpts),e){e=rT(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=xn(l)),je(c)&&(Zu(c)&&!fe(c)&&(c=ct({},c)),e.style=cl(c))}const o=Ke(t)?1:f_(t)?128:fw(t)?64:je(t)?4:_e(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function rT(t){return t?Zu(t)||r_(t)?ct({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?sT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&m_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(ma(e)):[i,ma(e)]:ma(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Xi(d,c.clone(d)),d}function Fe(t=" ",e=0){return Z(ml,null,t,e)}function gl(t,e){const n=Z(pa,null,t);return n.staticCount=e,n}function Tt(t="",e=!1){return e?(H(),Je(Dn,null,t)):Z(Dn,null,t)}function In(t){return t==null||typeof t=="boolean"?Z(Dn):fe(t)?Z(Ie,null,t.slice()):Zi(t)?pr(t):Z(ml,null,String(t))}function pr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function ih(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ih(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!r_(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[Fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function sT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xn([e.class,r.class]));else if(s==="style")e.style=cl([e.style,r.style]);else if(sl(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vn(t,e,n,r=null){mn(t,e,7,[n,r])}const iT=e_();let oT=0;function aT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iT,i={uid:oT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new M1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:i_(r,s),emitsOptions:d_(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qw.bind(null,i),t.ce&&t.ce(i),i}let vt=null;const lT=()=>vt||dt;let Va,Zc;{const t=ll(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Va=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),Zc=e("__VUE_SSR_SETTERS__",n=>eo=n)}const wo=t=>{const e=vt;return Va(t),t.scope.on(),()=>{t.scope.off(),Va(e)}},xf=()=>{vt&&vt.scope.off(),Va(null)};function g_(t){return t.vnode.shapeFlag&4}let eo=!1;function cT(t,e=!1,n=!1){e&&Zc(e);const{props:r,children:s}=t.vnode,i=g_(t);Vw(t,r,i,e),Fw(t,s,n||e);const o=i?uT(t,e):void 0;return e&&Zc(!1),o}function uT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cw);const{setup:r}=n;if(r){Gn();const s=t.setupContext=r.length>1?dT(t):null,i=wo(t),o=yo(r,t,0,[t.props,s]),l=og(o);if(Wn(),i(),(l||t.sp)&&!Ls(t)&&jg(t),l){if(o.then(xf,xf),e)return o.then(c=>{Df(t,c)}).catch(c=>{hl(c,t,0)});t.asyncDep=o}else Df(t,o)}else __(t)}function Df(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=kg(e)),__(t)}function __(t,e,n){const r=t.type;t.render||(t.render=r.render||bn);{const s=wo(t);Gn();try{Sw(t)}finally{Wn(),s()}}}const hT={get(t,e){return Pt(t,"get",""),t[e]}};function dT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hT),slots:t.slots,emit:t.emit,expose:e}}function _l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kg(nw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mi)return Mi[n](t)},has(e,n){return n in e||n in Mi}})):t.proxy}function fT(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function pT(t){return _e(t)&&"__vccOpts"in t}const $e=(t,e)=>aw(t,e,eo);function y_(t,e,n){const r=arguments.length;return r===2?je(e)&&!fe(e)?Zi(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zi(n)&&(n=[n]),Z(t,e,n))}const mT="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eu;const Nf=typeof window<"u"&&window.trustedTypes;if(Nf)try{eu=Nf.createPolicy("vue",{createHTML:t=>t})}catch{}const v_=eu?t=>eu.createHTML(t):t=>t,gT="http://www.w3.org/2000/svg",_T="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,Of=$n&&$n.createElement("template"),yT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?$n.createElementNS(gT,t):e==="mathml"?$n.createElementNS(_T,t):n?$n.createElement(t,{is:n}):$n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Of.innerHTML=v_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Of.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cr="transition",Ai="animation",Hs=Symbol("_vtc"),w_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vT=ct({},gw,w_),Wr=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function wT(t){const e={};for(const b in t)b in w_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,C=TT(s),P=C&&C[0],A=C&&C[1],{onBeforeEnter:O,onEnter:V,onEnterCancelled:L,onLeave:U,onLeaveCancelled:ie,onBeforeAppear:te=O,onAppear:R=V,onAppearCancelled:v=L}=e,y=(b,w,Oe,st)=>{b._enterCancelled=st,dr(b,w?d:l),dr(b,w?u:o),Oe&&Oe()},I=(b,w)=>{b._isLeaving=!1,dr(b,f),dr(b,g),dr(b,m),w&&w()},S=b=>(w,Oe)=>{const st=b?R:V,ze=()=>y(w,b,Oe);Wr(st,[w,ze]),Mf(()=>{dr(w,b?c:i),wn(w,b?d:l),Vf(st)||Lf(w,r,P,ze)})};return ct(e,{onBeforeEnter(b){Wr(O,[b]),wn(b,i),wn(b,o)},onBeforeAppear(b){Wr(te,[b]),wn(b,c),wn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,w){b._isLeaving=!0;const Oe=()=>I(b,w);wn(b,f),b._enterCancelled?(wn(b,m),tu()):(tu(),wn(b,m)),Mf(()=>{b._isLeaving&&(dr(b,f),wn(b,g),Vf(U)||Lf(b,r,A,Oe))}),Wr(U,[b,Oe])},onEnterCancelled(b){y(b,!1,void 0,!0),Wr(L,[b])},onAppearCancelled(b){y(b,!0,void 0,!0),Wr(v,[b])},onLeaveCancelled(b){I(b),Wr(ie,[b])}})}function TT(t){if(t==null)return null;if(je(t))return[yc(t.enter),yc(t.leave)];{const e=yc(t);return[e,e]}}function yc(t){return P1(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Hs]||(t[Hs]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Hs];n&&(n.delete(e),n.size||(t[Hs]=void 0))}function Mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ET=0;function Lf(t,e,n,r){const s=t._endId=++ET,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=T_(t,e);if(!o)return r();const u=o+"end";let d=0;const f=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),t.addEventListener(u,m)}function T_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${cr}Delay`),i=r(`${cr}Duration`),o=Uf(s,i),l=r(`${Ai}Delay`),c=r(`${Ai}Duration`),u=Uf(l,c);let d=null,f=0,m=0;e===cr?o>0&&(d=cr,f=o,m=i.length):e===Ai?u>0&&(d=Ai,f=u,m=c.length):(f=Math.max(o,u),d=f>0?o>u?cr:Ai:null,m=d?d===cr?i.length:c.length:0);const g=d===cr&&/\b(transform|all)(,|$)/.test(r(`${cr}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:g}}function Uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ff(n)+Ff(t[r])))}function Ff(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tu(){return document.body.offsetHeight}function IT(t,e,n){const r=t[Hs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $f=Symbol("_vod"),AT=Symbol("_vsh"),bT=Symbol(""),RT=/(^|;)\s*display\s*:/;function CT(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ga(r,l,"")}else for(const o in e)n[o]==null&&ga(r,o,"");for(const o in n)o==="display"&&(i=!0),ga(r,o,n[o])}else if(s){if(e!==n){const o=r[bT];o&&(n+=";"+o),r.cssText=n,i=RT.test(n)}}else e&&t.removeAttribute("style");$f in t&&(t[$f]=i?r.display:"",t[AT]&&(r.display="none"))}const Bf=/\s*!important$/;function ga(t,e,n){if(fe(n))n.forEach(r=>ga(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ST(t,e);Bf.test(n)?t.setProperty(as(r),n.replace(Bf,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],vc={};function ST(t,e){const n=vc[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return vc[e]=r;r=al(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return vc[e]=i}return e}const qf="http://www.w3.org/1999/xlink";function Hf(t,e,n,r,s,i=V1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n):n==null||i&&!ug(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function zf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?v_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ug(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Is(t,e,n,r){t.addEventListener(e,n,r)}function PT(t,e,n,r){t.removeEventListener(e,n,r)}const Gf=Symbol("_vei");function kT(t,e,n,r,s=null){const i=t[Gf]||(t[Gf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=xT(e);if(r){const u=i[e]=OT(r,s);Is(t,l,u,c)}else o&&(PT(t,l,o,c),i[e]=void 0)}}const Wf=/(?:Once|Passive|Capture)$/;function xT(t){let e;if(Wf.test(t)){e={};let r;for(;r=t.match(Wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let wc=0;const DT=Promise.resolve(),NT=()=>wc||(DT.then(()=>wc=0),wc=Date.now());function OT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(VT(r,n.value),e,5,[r])};return n.value=t,n.attached=NT(),n}function VT(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,MT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?IT(t,r,o):e==="style"?CT(t,n,r):sl(e)?Hu(e)||kT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LT(t,e,r,o))?(zf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?zf(t,on(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hf(t,e,r,o))};function LT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Ke(n)?!1:e in t}const E_=new WeakMap,I_=new WeakMap,Ma=Symbol("_moveCb"),Qf=Symbol("_enterCb"),UT=t=>(delete t.props.mode,t),FT=UT({name:"TransitionGroup",props:ct({},vT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=lT(),r=mw();let s,i;return zg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!HT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(BT),s.forEach(jT);const l=s.filter(qT);tu(),l.forEach(c=>{const u=c.el,d=u.style;wn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Ma]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",f),u[Ma]=null,dr(u,o))};u.addEventListener("transitionend",f)}),s=[]}),()=>{const o=xe(t),l=wT(o);let c=o.tag||Ie;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Xi(d,Kc(d,l,r,n)),E_.set(d,d.el.getBoundingClientRect()))}i=e.default?Bg(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Xi(d,Kc(d,l,r,n))}return Z(c,null,i)}}}),$T=FT;function BT(t){const e=t.el;e[Ma]&&e[Ma](),e[Qf]&&e[Qf]()}function jT(t){I_.set(t,t.el.getBoundingClientRect())}function qT(t){const e=E_.get(t),n=I_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function HT(t,e,n){const r=t.cloneNode(),s=t[Hs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=T_(r);return i.removeChild(r),o}const Xf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>ha(e,n):e};function zT(t){t.target.composing=!0}function Yf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tc=Symbol("_assign"),A_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Tc]=Xf(s);const i=r||s.props&&s.props.type==="number";Is(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=jc(l)),t[Tc](l)}),n&&Is(t,"change",()=>{t.value=t.value.trim()}),e||(Is(t,"compositionstart",zT),Is(t,"compositionend",Yf),Is(t,"change",Yf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Tc]=Xf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?jc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},GT=ct({patchProp:MT},yT);let Jf;function WT(){return Jf||(Jf=Bw(GT))}const b_=(...t)=>{const e=WT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,KT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function QT(t){return Ke(t)?document.querySelector(t):t}const et=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},XT={};function YT(t,e){const n=vo("router-view");return H(),Je(n)}const JT=et(XT,[["render",YT]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function R_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&R_(t.default)}const De=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=gn(s)?s.map(t):t(s)}return n}const Ui=()=>{},gn=Array.isArray,C_=/#/g,eE=/&/g,tE=/\//g,nE=/=/g,rE=/\?/g,S_=/\+/g,sE=/%5B/g,iE=/%5D/g,P_=/%5E/g,oE=/%60/g,k_=/%7B/g,aE=/%7C/g,x_=/%7D/g,lE=/%20/g;function oh(t){return encodeURI(""+t).replace(aE,"|").replace(sE,"[").replace(iE,"]")}function cE(t){return oh(t).replace(k_,"{").replace(x_,"}").replace(P_,"^")}function nu(t){return oh(t).replace(S_,"%2B").replace(lE,"+").replace(C_,"%23").replace(eE,"%26").replace(oE,"`").replace(k_,"{").replace(x_,"}").replace(P_,"^")}function uE(t){return nu(t).replace(nE,"%3D")}function hE(t){return oh(t).replace(C_,"%23").replace(rE,"%3F")}function dE(t){return t==null?"":hE(t).replace(tE,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fE=/\/$/,pE=t=>t.replace(fE,"");function Ic(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=yE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function mE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zs(e.matched[r],n.matched[s])&&D_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function D_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_E(t[n],e[n]))return!1;return!0}function _E(t,e){return gn(t)?ep(t,e):gn(e)?ep(e,t):t===e}function ep(t,e){return gn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ur={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var Fi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fi||(Fi={}));function vE(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pE(t)}const wE=/^[^#]+#/;function TE(t,e){return t.replace(wE,"#")+e}function EE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yl=()=>({left:window.scrollX,top:window.scrollY});function IE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=EE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tp(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function AE(t,e){ru.set(t,e)}function bE(t){const e=ru.get(t);return ru.delete(t),e}let RE=()=>location.protocol+"//"+location.host;function N_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Zf(c,"")}return Zf(n,t)+r+s}function CE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=N_(t,location),C=n.value,P=e.value;let A=0;if(m){if(n.value=g,e.value=m,o&&o===C){o=null;return}A=P?m.position-P.position:0}else r(g);s.forEach(O=>{O(n.value,C,{delta:A,type:no.pop,direction:A?A>0?Fi.forward:Fi.back:Fi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:yl()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function np(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?yl():null}}function SE(t){const{history:e,location:n}=window,r={value:N_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:RE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,np(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:yl()});i(d.current,d,!0);const f=De({},np(r.value,c,null),{position:d.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function PE(t){t=vE(t);const e=SE(t),n=CE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:TE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kE(t){return typeof t=="string"||t&&typeof t=="object"}function O_(t){return typeof t=="string"||typeof t=="symbol"}const V_=Symbol("");var rp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rp||(rp={}));function Gs(t,e){return De(new Error,{type:t,[V_]:!0},e)}function Fn(t,e){return t instanceof Error&&V_ in t&&(e==null||!!(t.type&e))}const sp="[^/]+?",xE={sensitive:!1,strict:!1,start:!0,end:!0},DE=/[.+*?^${}()[\]/\\]/g;function NE(t,e){const n=De({},xE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(DE,"\\$&"),g+=40;else if(m.type===1){const{value:C,repeatable:P,optional:A,regexp:O}=m;i.push({name:C,repeatable:P,optional:A});const V=O||sp;if(V!==sp){g+=10;try{new RegExp(`(${V})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${C}" (${V}): `+U.message)}}let L=P?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;f||(L=A&&u.length<2?`(?:/${L})`:"/"+L),A&&(L+="?"),s+=L,g+=20,A&&(g+=-8),P&&(g+=-20),V===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",C=i[m-1];f[C.name]=g&&C.repeatable?g.split("/"):g}return f}function c(u){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:C,repeatable:P,optional:A}=g,O=C in u?u[C]:"";if(gn(O)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const V=gn(O)?O.join("/"):O;if(!V)if(A)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);d+=V}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function OE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function M_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ip(r))return 1;if(ip(s))return-1}return s.length-r.length}function ip(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VE={type:0,value:""},ME=/[a-zA-Z0-9_]/;function LE(t){if(!t)return[[]];if(t==="/")return[[VE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:ME.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function UE(t,e,n){const r=NE(LE(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FE(t,e){const n=[],r=new Map;e=cp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,g){const C=!g,P=ap(f);P.aliasOf=g&&g.record;const A=cp(e,f),O=[P];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const ie of U)O.push(ap(De({},P,{components:g?g.record.components:P.components,path:ie,aliasOf:g?g.record:P})))}let V,L;for(const U of O){const{path:ie}=U;if(m&&ie[0]!=="/"){const te=m.record.path,R=te[te.length-1]==="/"?"":"/";U.path=m.record.path+(ie&&R+ie)}if(V=UE(U,m,A),g?g.alias.push(V):(L=L||V,L!==V&&L.alias.push(V),C&&f.name&&!lp(V)&&o(f.name)),L_(V)&&c(V),P.children){const te=P.children;for(let R=0;R<te.length;R++)i(te[R],V,g&&g.children[R])}g=g||V}return L?()=>{o(L)}:Ui}function o(f){if(O_(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const m=jE(f,n);n.splice(m,0,f),f.record.name&&!lp(f)&&r.set(f.record.name,f)}function u(f,m){let g,C={},P,A;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Gs(1,{location:f});A=g.record.name,C=De(op(m.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&op(f.params,g.keys.map(L=>L.name))),P=g.stringify(C)}else if(f.path!=null)P=f.path,g=n.find(L=>L.re.test(P)),g&&(C=g.parse(P),A=g.record.name);else{if(g=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!g)throw Gs(1,{location:f,currentLocation:m});A=g.record.name,C=De({},m.params,f.params),P=g.stringify(C)}const O=[];let V=g;for(;V;)O.unshift(V.record),V=V.parent;return{name:A,path:P,params:C,matched:O,meta:BE(O)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function op(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ap(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$E(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $E(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BE(t){return t.reduce((e,n)=>De(e,n.meta),{})}function cp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function jE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;M_(t,e[i])<0?r=i:n=i+1}const s=qE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function qE(t){let e=t;for(;e=e.parent;)if(L_(e)&&M_(t,e)===0)return e}function L_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function HE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(S_," "),o=i.indexOf("="),l=to(o<0?i:i.slice(0,o)),c=o<0?null:to(i.slice(o+1));if(l in e){let u=e[l];gn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function up(t){let e="";for(let n in t){const r=t[n];if(n=uE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=gn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GE=Symbol(""),hp=Symbol(""),vl=Symbol(""),ah=Symbol(""),su=Symbol("");function bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Gs(4,{from:n,to:e})):m instanceof Error?c(m):kE(m)?c(Gs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Ac(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(R_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(mr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=ZT(d)?d.default:d;o.mods[l]=d,o.components[l]=f;const g=(f.__vccOpts||f)[e];return g&&mr(g,n,r,o,l,s)()}))}}return i}function dp(t){const e=fn(vl),n=fn(ah),r=$e(()=>{const c=se(t.to);return e.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(zs.bind(null,d));if(m>-1)return m;const g=fp(c[u-2]);return u>1&&fp(d)===g&&f[f.length-1].path!==g?f.findIndex(zs.bind(null,c[u-2])):m}),i=$e(()=>s.value>-1&&YE(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&D_(n.params,r.value.params));function l(c={}){if(XE(c)){const u=e[se(t.replace)?"replace":"push"](se(t.to)).catch(Ui);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function WE(t){return t.length===1?t[0]:t}const KE=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:dp,setup(t,{slots:e}){const n=ti(dp(t)),{options:r}=fn(vl),s=$e(()=>({[pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WE(e.default(n));return t.custom?i:y_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),QE=KE;function XE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!gn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pp=(t,e,n)=>t??e??n,JE=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=fn(su),s=$e(()=>t.route||r.value),i=fn(hp,0),o=$e(()=>{let u=se(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=$e(()=>s.value.matched[o.value]);fa(hp,$e(()=>o.value+1)),fa(GE,l),fa(su,s);const c=we();return Ar(()=>[c.value,l.value,t.name],([u,d,f],[m,g,C])=>{d&&(d.instances[f]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!zs(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=l.value,m=f&&f.components[d];if(!m)return mp(n.default,{Component:m,route:u});const g=f.props[d],C=g?g===!0?u.params:typeof g=="function"?g(u):g:null,A=y_(m,De({},C,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return mp(n.default,{Component:A,route:u})||A}}});function mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZE=JE;function eI(t){const e=FE(t.routes,t),n=t.parseQuery||HE,r=t.stringifyQuery||up,s=t.history,i=bi(),o=bi(),l=bi(),c=rw(ur);let u=ur;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ec.bind(null,F=>""+F),f=Ec.bind(null,dE),m=Ec.bind(null,to);function g(F,ne){let ee,oe;return O_(F)?(ee=e.getRecordMatcher(F),oe=ne):oe=F,e.addRoute(oe,ee)}function C(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function P(){return e.getRoutes().map(F=>F.record)}function A(F){return!!e.getRecordMatcher(F)}function O(F,ne){if(ne=De({},ne||c.value),typeof F=="string"){const k=Ic(n,F,ne.path),$=e.resolve({path:k.path},ne),q=s.createHref(k.fullPath);return De(k,$,{params:m($.params),hash:to(k.hash),redirectedFrom:void 0,href:q})}let ee;if(F.path!=null)ee=De({},F,{path:Ic(n,F.path,ne.path).path});else{const k=De({},F.params);for(const $ in k)k[$]==null&&delete k[$];ee=De({},F,{params:f(k)}),ne.params=f(ne.params)}const oe=e.resolve(ee,ne),Pe=F.hash||"";oe.params=d(m(oe.params));const T=mE(r,De({},F,{hash:cE(Pe),path:oe.path})),E=s.createHref(T);return De({fullPath:T,hash:Pe,query:r===up?zE(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:E})}function V(F){return typeof F=="string"?Ic(n,F,c.value.path):De({},F)}function L(F,ne){if(u!==F)return Gs(8,{from:ne,to:F})}function U(F){return R(F)}function ie(F){return U(De(V(F),{replace:!0}))}function te(F){const ne=F.matched[F.matched.length-1];if(ne&&ne.redirect){const{redirect:ee}=ne;let oe=typeof ee=="function"?ee(F):ee;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=V(oe):{path:oe},oe.params={}),De({query:F.query,hash:F.hash,params:oe.path!=null?{}:F.params},oe)}}function R(F,ne){const ee=u=O(F),oe=c.value,Pe=F.state,T=F.force,E=F.replace===!0,k=te(ee);if(k)return R(De(V(k),{state:typeof k=="object"?De({},Pe,k.state):Pe,force:T,replace:E}),ne||ee);const $=ee;$.redirectedFrom=ne;let q;return!T&&gE(r,oe,ee)&&(q=Gs(16,{to:$,from:oe}),Zt(oe,oe,!0,!1)),(q?Promise.resolve(q):I($,oe)).catch(B=>Fn(B)?Fn(B,2)?B:an(B):Te(B,$,oe)).then(B=>{if(B){if(Fn(B,2))return R(De({replace:E},V(B.to),{state:typeof B.to=="object"?De({},Pe,B.to.state):Pe,force:T}),ne||$)}else B=b($,oe,!0,E,Pe);return S($,oe,B),B})}function v(F,ne){const ee=L(F,ne);return ee?Promise.reject(ee):Promise.resolve()}function y(F){const ne=sr.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function I(F,ne){let ee;const[oe,Pe,T]=tI(F,ne);ee=Ac(oe.reverse(),"beforeRouteLeave",F,ne);for(const k of oe)k.leaveGuards.forEach($=>{ee.push(mr($,F,ne))});const E=v.bind(null,F,ne);return ee.push(E),Ft(ee).then(()=>{ee=[];for(const k of i.list())ee.push(mr(k,F,ne));return ee.push(E),Ft(ee)}).then(()=>{ee=Ac(Pe,"beforeRouteUpdate",F,ne);for(const k of Pe)k.updateGuards.forEach($=>{ee.push(mr($,F,ne))});return ee.push(E),Ft(ee)}).then(()=>{ee=[];for(const k of T)if(k.beforeEnter)if(gn(k.beforeEnter))for(const $ of k.beforeEnter)ee.push(mr($,F,ne));else ee.push(mr(k.beforeEnter,F,ne));return ee.push(E),Ft(ee)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),ee=Ac(T,"beforeRouteEnter",F,ne,y),ee.push(E),Ft(ee))).then(()=>{ee=[];for(const k of o.list())ee.push(mr(k,F,ne));return ee.push(E),Ft(ee)}).catch(k=>Fn(k,8)?k:Promise.reject(k))}function S(F,ne,ee){l.list().forEach(oe=>y(()=>oe(F,ne,ee)))}function b(F,ne,ee,oe,Pe){const T=L(F,ne);if(T)return T;const E=ne===ur,k=As?history.state:{};ee&&(oe||E?s.replace(F.fullPath,De({scroll:E&&k&&k.scroll},Pe)):s.push(F.fullPath,Pe)),c.value=F,Zt(F,ne,ee,E),an()}let w;function Oe(){w||(w=s.listen((F,ne,ee)=>{if(!yn.listening)return;const oe=O(F),Pe=te(oe);if(Pe){R(De(Pe,{replace:!0,force:!0}),oe).catch(Ui);return}u=oe;const T=c.value;As&&AE(tp(T.fullPath,ee.delta),yl()),I(oe,T).catch(E=>Fn(E,12)?E:Fn(E,2)?(R(De(V(E.to),{force:!0}),oe).then(k=>{Fn(k,20)&&!ee.delta&&ee.type===no.pop&&s.go(-1,!1)}).catch(Ui),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),Te(E,oe,T))).then(E=>{E=E||b(oe,T,!1),E&&(ee.delta&&!Fn(E,8)?s.go(-ee.delta,!1):ee.type===no.pop&&Fn(E,20)&&s.go(-1,!1)),S(oe,T,E)}).catch(Ui)}))}let st=bi(),ze=bi(),be;function Te(F,ne,ee){an(F);const oe=ze.list();return oe.length?oe.forEach(Pe=>Pe(F,ne,ee)):console.error(F),Promise.reject(F)}function Gt(){return be&&c.value!==ur?Promise.resolve():new Promise((F,ne)=>{st.add([F,ne])})}function an(F){return be||(be=!F,Oe(),st.list().forEach(([ne,ee])=>F?ee(F):ne()),st.reset()),F}function Zt(F,ne,ee,oe){const{scrollBehavior:Pe}=t;if(!As||!Pe)return Promise.resolve();const T=!ee&&bE(tp(F.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return dl().then(()=>Pe(F,ne,T)).then(E=>E&&IE(E)).catch(E=>Te(E,F,ne))}const Ge=F=>s.go(F);let We;const sr=new Set,yn={currentRoute:c,listening:!0,addRoute:g,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:A,getRoutes:P,resolve:O,options:t,push:U,replace:ie,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:Gt,install(F){const ne=this;F.component("RouterLink",QE),F.component("RouterView",ZE),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>se(c)}),As&&!We&&c.value===ur&&(We=!0,U(s.location).catch(Pe=>{}));const ee={};for(const Pe in ur)Object.defineProperty(ee,Pe,{get:()=>c.value[Pe],enumerable:!0});F.provide(vl,ne),F.provide(ah,Cg(ee)),F.provide(su,c);const oe=F.unmount;sr.add(F),F.unmount=function(){sr.delete(F),sr.size<1&&(u=ur,w&&w(),w=null,c.value=ur,We=!1,be=!1),oe()}}};function Ft(F){return F.reduce((ne,ee)=>ne.then(()=>y(ee)),Promise.resolve())}return yn}function tI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>zs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>zs(u,c))||s.push(c))}return[n,r,s]}function U_(){return fn(vl)}function F_(t){return fn(ah)}const nI=()=>{};var gp={};/**
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
 */const $_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new sI;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const C=u<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(t){const e=$_(t);return lh.encodeByteArray(e,!0)},La=function(t){return iI(t).replace(/\./g,"")},B_=function(t){try{return lh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>j_().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof gp>"u")return;const t=gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&B_(t[1]);return e&&JSON.parse(e)},wl=()=>{try{return nI()||oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q_=t=>{var e,n;return(n=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H_=t=>{const e=q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z_=()=>{var t;return(t=wl())===null||t===void 0?void 0:t.config},G_=t=>{var e;return(e=wl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ro{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ls(t){return t.endsWith(".cloudworkstations.dev")}async function ch(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function W_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[La(JSON.stringify(n)),La(JSON.stringify(o)),""].join(".")}const $i={};function cI(){const t={prod:[],emulator:[]};for(const e of Object.keys($i))$i[e]?t.emulator.push(e):t.prod.push(e);return t}function uI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _p=!1;function uh(t,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||$i[t]===e||$i[t]||_p)return;$i[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=cI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_p=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=uI(r),g=n("text"),C=document.getElementById(g)||document.createElement("span"),P=n("learnmore"),A=document.getElementById(P)||document.createElement("a"),O=n("preprendIcon"),V=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const L=m.element;l(L),d(A,P);const U=u();c(V,O),L.append(V,C,A,U),document.body.appendChild(L)}i?(C.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function dI(){var t;const e=(t=wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _I(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hh(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vI="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function wI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yp(i)&&yp(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
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
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function II(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */const RI=1e3,CI=2,SI=4*60*60*1e3,PI=.5;function kI(t,e=RI,n=CI){const r=e*Math.pow(n,t),s=Math.round(PI*r*(Math.random()-.5)*2);return Math.min(SI,r+s)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class xI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ro;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NI(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DI(t){return t===Qr?void 0:t}function NI(t){return t.instantiationMode==="EAGER"}/**
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
 */class OI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const VI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},MI=Ee.INFO,LI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const FI=(t,e)=>e.some(n=>t instanceof n);let vp,wp;function $I(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K_=new WeakMap,iu=new WeakMap,Q_=new WeakMap,Rc=new WeakMap,dh=new WeakMap;function jI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K_.set(n,t)}).catch(()=>{}),dh.set(e,t),e}function qI(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HI(t){ou=t(ou)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return Q_.set(r,e.sort?e.sort():[e]),br(r)}:BI().includes(t)?function(...e){return t.apply(Cc(this),e),br(K_.get(this))}:function(...e){return br(t.apply(Cc(this),e))}}function GI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&qI(t),FI(t,$I())?new Proxy(t,ou):t)}function br(t){if(t instanceof IDBRequest)return jI(t);if(Rc.has(t))return Rc.get(t);const e=GI(t);return e!==t&&(Rc.set(t,e),dh.set(e,t)),e}const Cc=t=>dh.get(t);function WI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",c=>{r(br(o.result),c.oldVersion,c.newVersion,br(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const KI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],Sc=new Map;function Tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Sc.set(e,i),i}HI(t=>({...t,get:(e,n,r)=>Tp(e,n)||t.get(e,n,r),has:(e,n)=>!!Tp(e,n)||t.has(e,n)}));/**
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
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",Ep="0.13.0";/**
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
 */const Qn=new Tl("@firebase/app"),JI="@firebase/app-compat",ZI="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",sA="@firebase/auth-compat",iA="@firebase/database",oA="@firebase/data-connect",aA="@firebase/database-compat",lA="@firebase/functions",cA="@firebase/functions-compat",uA="@firebase/installations",hA="@firebase/installations-compat",dA="@firebase/messaging",fA="@firebase/messaging-compat",pA="@firebase/performance",mA="@firebase/performance-compat",gA="@firebase/remote-config",_A="@firebase/remote-config-compat",yA="@firebase/storage",vA="@firebase/storage-compat",wA="@firebase/firestore",TA="@firebase/ai",EA="@firebase/firestore-compat",IA="firebase",AA="11.8.0";/**
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
 */const lu="[DEFAULT]",bA={[au]:"fire-core",[JI]:"fire-core-compat",[eA]:"fire-analytics",[ZI]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[sA]:"fire-auth-compat",[iA]:"fire-rtdb",[oA]:"fire-data-connect",[aA]:"fire-rtdb-compat",[lA]:"fire-fn",[cA]:"fire-fn-compat",[uA]:"fire-iid",[hA]:"fire-iid-compat",[dA]:"fire-fcm",[fA]:"fire-fcm-compat",[pA]:"fire-perf",[mA]:"fire-perf-compat",[gA]:"fire-rc",[_A]:"fire-rc-compat",[yA]:"fire-gcs",[vA]:"fire-gcs-compat",[wA]:"fire-fst",[EA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const Ua=new Map,RA=new Map,cu=new Map;function Ip(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(cu.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of Ua.values())Ip(n,t);for(const n of RA.values())Ip(n,t);return!0}function ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const CA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new ni("app","Firebase",CA);/**
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
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=AA;function X_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Rr.create("bad-app-name",{appName:String(s)});if(n||(n=z_()),!n)throw Rr.create("no-options");const i=Ua.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw Rr.create("duplicate-app",{appName:s})}const o=new OI(s);for(const c of cu.values())o.addComponent(c);const l=new SA(n,r,o);return Ua.set(s,l),l}function El(t=lu){const e=Ua.get(t);if(!e&&t===lu&&z_())return X_();if(!e)throw Rr.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let s=(r=bA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}Xn(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const PA="firebase-heartbeat-database",kA=1,so="firebase-heartbeat-store";let Pc=null;function Y_(){return Pc||(Pc=WI(PA,kA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function xA(t){try{const n=(await Y_()).transaction(so),r=await n.objectStore(so).get(J_(t));return await n.done,r}catch(e){if(e instanceof Vn)Qn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Ap(t,e){try{const r=(await Y_()).transaction(so,"readwrite");await r.objectStore(so).put(e,J_(t)),await r.done}catch(n){if(n instanceof Vn)Qn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DA=1024,NA=30;class OA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>NA){const o=LA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:r,unsentEntries:s}=VA(this._heartbeatsCache.heartbeats),i=La(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function bp(){return new Date().toISOString().substring(0,10)}function VA(t,e=DA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hh()?yI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}function LA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UA(t){Xn(new Nn("platform-logger",e=>new XI(e),"PRIVATE")),Xn(new Nn("heartbeat",e=>new OA(e),"PRIVATE")),pn(au,Ep,t),pn(au,Ep,"esm2017"),pn("fire-js","")}UA("");var FA="firebase",$A="11.8.1";/**
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
 */pn(FA,$A,"app");function fh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=Z_,ey=new ni("auth","Firebase",Z_());/**
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
 */const Fa=new Tl("@firebase/auth");function jA(t,...e){Fa.logLevel<=Ee.WARN&&Fa.warn(`Auth (${cs}): ${t}`,...e)}function _a(t,...e){Fa.logLevel<=Ee.ERROR&&Fa.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function Yn(t,...e){throw ph(t,...e)}function Rn(t,...e){return ph(t,...e)}function ty(t,e,n){const r=Object.assign(Object.assign({},BA()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ey.create(t,...e)}function me(t,e,...n){if(!t)throw ph(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function Jn(t,e){t||qn(e)}/**
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
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qA(){return Cp()==="http:"||Cp()==="https:"}function Cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qA()||pI()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||mI()}get(){return HA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mh(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ny{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KA=new Eo(3e4,6e4);function Il(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,s={}){return ry(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=To(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return fI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ls(t.emulatorConfig.host)&&(u.credentials="include"),ny.fetch()(await iy(t,t.config.apiHost,n,l),u)})}async function ry(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new QA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ta(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ty(t,d,u);Yn(t,d)}}catch(s){if(s instanceof Vn)throw s;Yn(t,"network-request-failed",{message:String(s)})}}async function sy(t,e,n,r,s={}){const i=await si(t,e,n,r,s);return"mfaPendingCredential"in i&&Yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function iy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mh(t.config,s):`${t.config.apiScheme}://${s}`;return WA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class QA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),KA.get())})}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function XA(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function $a(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=gh(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bi(kc(s.auth_time)),issuedAtTime:Bi(kc(s.iat)),expirationTime:Bi(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function gh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=B_(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sp(t){const e=gh(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),s=await io(t,$a(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oy(i.providerUserInfo):[],l=tb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new hu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function eb(t){const e=He(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oy(t){return t.map(e=>{var{providerId:n}=e,r=fh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nb(t,e){const n=await ry(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await iy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ny.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rb(t,e){return si(t,"POST","/v2/accounts:revokeToken",Il(t,e))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fs;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
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
 */function hr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return eb(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await io(this,XA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:U,isAnonymous:ie,providerData:te,stsTokenManager:R}=n;me(L&&R,e,"internal-error");const v=Fs.fromJSON(this.name,R);me(typeof L=="string",e,"internal-error"),hr(f,e.name),hr(m,e.name),me(typeof U=="boolean",e,"internal-error"),me(typeof ie=="boolean",e,"internal-error"),hr(g,e.name),hr(C,e.name),hr(P,e.name),hr(A,e.name),hr(O,e.name),hr(V,e.name);const y=new un({uid:L,auth:e,email:m,emailVerified:U,displayName:f,isAnonymous:ie,photoURL:C,phoneNumber:g,tenantId:P,stsTokenManager:v,createdAt:O,lastLoginAt:V});return te&&Array.isArray(te)&&(y.providerData=te.map(I=>Object.assign({},I))),A&&(y._redirectEventId=A),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fs;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Fs;l.updateFromIdToken(r);const c=new un({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Pp=new Map;function Hn(t){Jn(t instanceof Function,"Expected a class definition");let e=Pp.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pp.set(t,e),e)}/**
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
 */class ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ay.type="NONE";const kp=ay;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $a(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(Hn(kp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Hn(kp);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await $a(e,{idToken:d}).catch(()=>{});if(!m)break;f=await un._fromGetAccountInfoResponse(e,m,d)}else f=un._fromJSON(e,d);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $s(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $s(i,e,r))}}/**
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
 */function xp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fy(e))return"Blackberry";if(py(e))return"Webos";if(cy(e))return"Safari";if((e.includes("chrome/")||uy(e))&&!e.includes("edge/"))return"Chrome";if(dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ly(t=xt()){return/firefox\//i.test(t)}function cy(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uy(t=xt()){return/crios\//i.test(t)}function hy(t=xt()){return/iemobile/i.test(t)}function dy(t=xt()){return/android/i.test(t)}function fy(t=xt()){return/blackberry/i.test(t)}function py(t=xt()){return/webos/i.test(t)}function _h(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sb(t=xt()){var e;return _h(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ib(){return gI()&&document.documentMode===10}function my(t=xt()){return _h(t)||dy(t)||py(t)||fy(t)||/windows phone/i.test(t)||hy(t)}/**
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
 */function gy(t,e=[]){let n;switch(t){case"Browser":n=xp(xt());break;case"Worker":n=`${xp(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class ob{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ab(t,e={}){return si(t,"GET","/v2/passwordPolicy",Il(t,e))}/**
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
 */const lb=6;class cb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ub{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new ob(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $a(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Cr(this));const n=e?He(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ab(this),n=new cb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Al(t){return He(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hb(t){yh=t}function db(t){return yh.loadJS(t)}function fb(){return yh.gapiScript}function pb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mb(t,e){const n=ri(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;Yn(s,"already-initialized")}return n.initialize({options:e})}function gb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _b(t,e,n){const r=Al(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_y(e),{host:o,port:l}=yb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(es(u,r.config.emulator)&&es(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(o)?(ch(`${i}//${o}${c}`),uh("Auth",!0)):vb()}function _y(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yb(t){const e=_y(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Np(o)}}}function Np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
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
 */async function Bs(t,e){return sy(t,"POST","/v1/accounts:signInWithIdp",Il(t,e))}/**
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
 */const wb="http://localhost";class ts extends yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */class vy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends vy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends Io{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class _r extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class yr extends Io{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
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
 */class vr extends Io{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
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
 */async function Tb(t,e){return sy(t,"POST","/v1/accounts:signUp",Il(t,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),o=Op(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Op(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Op(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function wy(t){var e;if(rn(t.app))return Promise.reject(Cr(t));const n=Al(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Tb(n,{returnSecureToken:!0}),s=await xr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class ja extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ja(e,n,r,s)}}function Ty(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(t,i,e,r):i})}async function Eb(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
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
 */async function Ib(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Cr(r));const s="reauthenticate";try{const i=await io(t,Ty(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=gh(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yn(r,"user-mismatch"),i}}/**
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
 */async function Ab(t,e,n=!1){if(rn(t.app))return Promise.reject(Cr(t));const r="signIn",s=await Ty(t,r,e),i=await xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function bb(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function Rb(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function Cb(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function Sb(t){return He(t).signOut()}const qa="__sak";/**
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
 */class Ey{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pb=1e3,kb=10;class Iy extends Ey{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=my(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iy.type="LOCAL";const xb=Iy;/**
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
 */class Ay extends Ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ay.type="SESSION";const by=Ay;/**
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
 */function Db(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Db(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
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
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=vh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function Ob(t){Cn().location.href=t}/**
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
 */function Ry(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lb(){return Ry()?self:null}/**
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
 */const Cy="firebaseLocalStorageDb",Ub=1,Ha="firebaseLocalStorage",Sy="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rl(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function Fb(){const t=indexedDB.deleteDatabase(Cy);return new Ao(t).toPromise()}function du(){const t=indexedDB.open(Cy,Ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:Sy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await Fb(),e(await du()))})})}async function Vp(t,e,n){const r=Rl(t,!0).put({[Sy]:e,value:n});return new Ao(r).toPromise()}async function $b(t,e){const n=Rl(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function Mp(t,e){const n=Rl(t,!0).delete(e);return new Ao(n).toPromise()}const Bb=800,jb=3;class Py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vb(),!this.activeServiceWorker)return;this.sender=new Nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Vp(e,qa,"1"),await Mp(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$b(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rl(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Py.type="LOCAL";const qb=Py;new Eo(3e4,6e4);/**
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
 */function Hb(t,e){return e?Hn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zb(t){return Ab(t.auth,new wh(t),t.bypassAuthState)}function Gb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Ib(n,new wh(t),t.bypassAuthState)}async function Wb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Eb(n,new wh(t),t.bypassAuthState)}/**
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
 */class ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zb;case"linkViaPopup":case"linkViaRedirect":return Wb;case"reauthViaPopup":case"reauthViaRedirect":return Gb;default:Yn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kb=new Eo(2e3,1e4);class ks extends ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kb.get())};e()}}ks.currentPopupAction=null;/**
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
 */const Qb="pendingRedirect",va=new Map;class Xb extends ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(t,e){const n=e2(e),r=Zb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jb(t,e){va.set(t._key(),e)}function Zb(t){return Hn(t._redirectPersistence)}function e2(t){return ya(Qb,t.config.apiKey,t.name)}async function t2(t,e,n=!1){if(rn(t.app))return Promise.reject(Cr(t));const r=Al(t),s=Hb(r,e),o=await new Xb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const n2=10*60*1e3;class r2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}}function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xy(t);default:return!1}}/**
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
 */async function i2(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const o2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a2=/^https?/;async function l2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i2(t);for(const n of e)try{if(c2(n))return}catch{}Yn(t,"unauthorized-domain")}function c2(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a2.test(n))return!1;if(o2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const u2=new Eo(3e4,6e4);function Up(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h2(t){return new Promise((e,n)=>{var r,s,i;function o(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(Rn(t,"network-request-failed"))},timeout:u2.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=pb("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},db(`${fb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wa=null,e})}let wa=null;function d2(t){return wa=wa||h2(t),wa}/**
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
 */const f2=new Eo(5e3,15e3),p2="__/auth/iframe",m2="emulator/auth/iframe",g2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y2(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mh(e,m2):`https://${t.config.authDomain}/${p2}`,r={apiKey:e.apiKey,appName:t.name,v:cs},s=_2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${To(r).slice(1)}`}async function v2(t){const e=await d2(t),n=Cn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:y2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},f2.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const w2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T2=500,E2=600,I2="_blank",A2="http://localhost";class Fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(t,e,n,r=T2,s=E2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},w2),{width:r.toString(),height:s.toString(),top:i,left:o}),u=xt().toLowerCase();n&&(l=uy(u)?I2:n),ly(u)&&(e=e||A2,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,C])=>`${m}${g}=${C},`,"");if(sb(u)&&l!=="_self")return R2(e||"",l),new Fp(null);const f=window.open(e||"",l,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Fp(f)}function R2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const C2="__/auth/handler",S2="emulator/auth/handler",P2=encodeURIComponent("fac");async function $p(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(e instanceof vy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Io){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${P2}=${encodeURIComponent(c)}`:"";return`${k2(t)}?${To(l).slice(1)}${u}`}function k2({config:t}){return t.emulator?mh(t,S2):`https://${t.authDomain}/${C2}`}/**
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
 */const xc="webStorageSupport";class x2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=by,this._completeRedirectFn=t2,this._overrideRedirectResult=Jb}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $p(e,n,r,uu(),s);return b2(e,o,vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $p(e,n,r,uu(),s);return Ob(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v2(e),r=new r2(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return my()||cy()||_h()}}const D2=x2;var Bp="@firebase/auth",jp="1.10.6";/**
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
 */class N2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function O2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V2(t){Xn(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gy(t)},u=new ub(r,s,i,c);return gb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new Nn("auth-internal",e=>{const n=Al(e.getProvider("auth").getImmediate());return(r=>new N2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(Bp,jp,O2(t)),pn(Bp,jp,"esm2017")}/**
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
 */const M2=5*60,L2=G_("authIdTokenMaxAge")||M2;let qp=null;const U2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>L2)return;const s=n==null?void 0:n.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function F2(t=El()){const e=ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mb(t,{popupRedirectResolver:D2,persistence:[qb,xb,by]}),r=G_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=U2(i.toString());Rb(n,o,()=>o(n.currentUser)),bb(n,l=>o(l))}}const s=q_("auth");return s&&_b(n,`http://${s}`),n}function $2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V2("Browser");var Hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,Dy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(I,S,b){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return v.prototype[S].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)I[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],S=R.g[2];var b=R.g[3],w=v+(b^y&(S^b))+I[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=b+(S^v&(y^S))+I[1]+3905402710&4294967295,b=v+(w<<12&4294967295|w>>>20),w=S+(y^b&(v^y))+I[2]+606105819&4294967295,S=b+(w<<17&4294967295|w>>>15),w=y+(v^S&(b^v))+I[3]+3250441966&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(b^y&(S^b))+I[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(S^v&(y^S))+I[5]+1200080426&4294967295,b=v+(w<<12&4294967295|w>>>20),w=S+(y^b&(v^y))+I[6]+2821735955&4294967295,S=b+(w<<17&4294967295|w>>>15),w=y+(v^S&(b^v))+I[7]+4249261313&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(b^y&(S^b))+I[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(S^v&(y^S))+I[9]+2336552879&4294967295,b=v+(w<<12&4294967295|w>>>20),w=S+(y^b&(v^y))+I[10]+4294925233&4294967295,S=b+(w<<17&4294967295|w>>>15),w=y+(v^S&(b^v))+I[11]+2304563134&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(b^y&(S^b))+I[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(S^v&(y^S))+I[13]+4254626195&4294967295,b=v+(w<<12&4294967295|w>>>20),w=S+(y^b&(v^y))+I[14]+2792965006&4294967295,S=b+(w<<17&4294967295|w>>>15),w=y+(v^S&(b^v))+I[15]+1236535329&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(S^b&(y^S))+I[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^S&(v^y))+I[6]+3225465664&4294967295,b=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(b^v))+I[11]+643717713&4294967295,S=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(S^b))+I[0]+3921069994&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^b&(y^S))+I[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^S&(v^y))+I[10]+38016083&4294967295,b=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(b^v))+I[15]+3634488961&4294967295,S=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(S^b))+I[4]+3889429448&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^b&(y^S))+I[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^S&(v^y))+I[14]+3275163606&4294967295,b=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(b^v))+I[3]+4107603335&4294967295,S=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(S^b))+I[8]+1163531501&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^b&(y^S))+I[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^S&(v^y))+I[2]+4243563512&4294967295,b=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(b^v))+I[7]+1735328473&4294967295,S=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(S^b))+I[12]+2368359562&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(y^S^b)+I[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^S)+I[8]+2272392833&4294967295,b=v+(w<<11&4294967295|w>>>21),w=S+(b^v^y)+I[11]+1839030562&4294967295,S=b+(w<<16&4294967295|w>>>16),w=y+(S^b^v)+I[14]+4259657740&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^b)+I[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^S)+I[4]+1272893353&4294967295,b=v+(w<<11&4294967295|w>>>21),w=S+(b^v^y)+I[7]+4139469664&4294967295,S=b+(w<<16&4294967295|w>>>16),w=y+(S^b^v)+I[10]+3200236656&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^b)+I[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^S)+I[0]+3936430074&4294967295,b=v+(w<<11&4294967295|w>>>21),w=S+(b^v^y)+I[3]+3572445317&4294967295,S=b+(w<<16&4294967295|w>>>16),w=y+(S^b^v)+I[6]+76029189&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^b)+I[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^S)+I[12]+3873151461&4294967295,b=v+(w<<11&4294967295|w>>>21),w=S+(b^v^y)+I[15]+530742520&4294967295,S=b+(w<<16&4294967295|w>>>16),w=y+(S^b^v)+I[2]+3299628645&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(S^(y|~b))+I[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~S))+I[7]+1126891415&4294967295,b=v+(w<<10&4294967295|w>>>22),w=S+(v^(b|~y))+I[14]+2878612391&4294967295,S=b+(w<<15&4294967295|w>>>17),w=y+(b^(S|~v))+I[5]+4237533241&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~b))+I[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~S))+I[3]+2399980690&4294967295,b=v+(w<<10&4294967295|w>>>22),w=S+(v^(b|~y))+I[10]+4293915773&4294967295,S=b+(w<<15&4294967295|w>>>17),w=y+(b^(S|~v))+I[1]+2240044497&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~b))+I[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~S))+I[15]+4264355552&4294967295,b=v+(w<<10&4294967295|w>>>22),w=S+(v^(b|~y))+I[6]+2734768916&4294967295,S=b+(w<<15&4294967295|w>>>17),w=y+(b^(S|~v))+I[13]+1309151649&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~b))+I[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~S))+I[11]+3174756917&4294967295,b=v+(w<<10&4294967295|w>>>22),w=S+(v^(b|~y))+I[2]+718787259&4294967295,S=b+(w<<15&4294967295|w>>>17),w=y+(b^(S|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,I=this.B,S=this.h,b=0;b<v;){if(S==0)for(;b<=y;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<v;)if(I[S++]=R.charCodeAt(b++),S==this.blockSize){s(this,I),S=0;break}}else for(;b<v;)if(I[S++]=R[b++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)R[y++]=this.g[v]>>>I&255;return R};function i(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],I=!0,S=R.length-1;0<=S;S--){var b=R[S]|0;I&&b==v||(y[S]=b,I=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return A(u(-R));for(var v=[],y=1,I=0;R>=y;I++)v[I]=R/y|0,y*=4294967296;return new o(v,0)}function d(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return A(d(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=f,S=0;S<R.length;S+=8){var b=Math.min(8,R.length-S),w=parseInt(R.substring(S,S+b),v);8>b?(b=u(Math.pow(v,b)),I=I.j(b).add(u(w))):(I=I.j(y),I=I.add(u(w)))}return I}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-A(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(P(this))return"-"+A(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,I="";;){var S=U(y,v).g;y=O(y,S.j(v));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=S,C(y))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function P(R){return R.h==-1}t.l=function(R){return R=O(this,R),P(R)?-1:C(R)?0:1};function A(R){for(var v=R.g.length,y=[],I=0;I<v;I++)y[I]=~R.g[I];return new o(y,~R.h).add(m)}t.abs=function(){return P(this)?A(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0,S=0;S<=v;S++){var b=I+(this.i(S)&65535)+(R.i(S)&65535),w=(b>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);I=w>>>16,b&=65535,w&=65535,y[S]=w<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function O(R,v){return R.add(A(v))}t.j=function(R){if(C(this)||C(R))return f;if(P(this))return P(R)?A(this).j(A(R)):A(A(this).j(R));if(P(R))return A(this.j(A(R)));if(0>this.l(g)&&0>R.l(g))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<R.g.length;S++){var b=this.i(I)>>>16,w=this.i(I)&65535,Oe=R.i(S)>>>16,st=R.i(S)&65535;y[2*I+2*S]+=w*st,V(y,2*I+2*S),y[2*I+2*S+1]+=b*st,V(y,2*I+2*S+1),y[2*I+2*S+1]+=w*Oe,V(y,2*I+2*S+1),y[2*I+2*S+2]+=b*Oe,V(y,2*I+2*S+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function V(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function L(R,v){this.g=R,this.h=v}function U(R,v){if(C(v))throw Error("division by zero");if(C(R))return new L(f,f);if(P(R))return v=U(A(R),v),new L(A(v.g),A(v.h));if(P(v))return v=U(R,A(v)),new L(A(v.g),v.h);if(30<R.g.length){if(P(R)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;0>=I.l(R);)y=ie(y),I=ie(I);var S=te(y,1),b=te(I,1);for(I=te(I,2),y=te(y,2);!C(I);){var w=b.add(I);0>=w.l(R)&&(S=S.add(y),b=w),I=te(I,1),y=te(y,1)}return v=O(R,S.j(v)),new L(S,v)}for(S=f;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(y),w=b.j(v);P(w)||0<w.l(R);)y-=I,b=u(y),w=b.j(v);C(b)&&(b=m),S=S.add(b),R=O(R,w)}return new L(S,R)}t.A=function(R){return U(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&R.i(I);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|R.i(I);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^R.i(I);return new o(y,this.h^R.h)};function ie(R){for(var v=R.g.length+1,y=[],I=0;I<v;I++)y[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(y,R.h)}function te(R,v){var y=v>>5;v%=32;for(var I=R.g.length-y,S=[],b=0;b<I;b++)S[b]=0<v?R.i(b+y)>>>v|R.i(b+y+1)<<32-v:R.i(b+y);return new o(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Dy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Sr=o}).apply(typeof Hp<"u"?Hp:typeof self<"u"?self:typeof window<"u"?window:{});var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ny,Si,Oy,Ta,fu,Vy,My,Ly;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof na=="object"&&na];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var x=a[_];if(!(x in p))break e;p=p[x]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,x={next:function(){if(!_&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,x,N){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return h.prototype[x].apply(_,K)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function A(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const x=a.length||0,N=_.length||0;a.length=x+N;for(let K=0;K<N;K++)a[x+K]=_[K]}else a.push(_)}}class O{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var ie=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function te(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function R(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(p in _)a[p]=_[p];for(let N=0;N<y.length;N++)p=y[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function S(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Gt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Oe{constructor(){this.h=this.g=null}add(h,p){const _=st.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var st=new O(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,Gt=new Oe,an=()=>{const a=l.Promise.resolve(void 0);be=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){b(p)}var h=st;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var sr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function yn(a,h){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{U(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}C(yn,We);var Ft={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ee(a,h,p,_,x){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=x,this.key=++ne,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,h,p,_,x){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=E(a,h,_,x);return-1<K?(h=a[K],p||(h.fa=!1)):(h=new ee(h,this.src,N,!!_,x),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var _=a.g[p],x=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=x)&&Array.prototype.splice.call(_,x,1),N&&(oe(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function E(a,h,p,_){for(var x=0;x<a.length;++x){var N=a[x];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==_)return x}return-1}var k="closure_lm_"+(1e6*Math.random()|0),$={};function q(a,h,p,_,x){if(Array.isArray(h)){for(var N=0;N<h.length;N++)q(a,h[N],p,_,x);return null}return p=pe(p),a&&a[F]?a.K(h,p,u(_)?!!_.capture:!1,x):B(a,h,p,!1,_,x)}function B(a,h,p,_,x,N){if(!h)throw Error("Invalid event type");var K=u(x)?!!x.capture:!!x,Me=Y(a);if(Me||(a[k]=Me=new Pe(a)),p=Me.add(h,p,_,K,N),p.proxy)return p;if(_=J(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)sr||(x=K),x===void 0&&(x=!1),a.addEventListener(h.toString(),_,x);else if(a.attachEvent)a.attachEvent(z(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function J(){function a(p){return h.call(a.src,a.listener,p)}const h=ce;return a}function W(a,h,p,_,x){if(Array.isArray(h))for(var N=0;N<h.length;N++)W(a,h[N],p,_,x);else _=u(_)?!!_.capture:!!_,p=pe(p),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=E(N,p,_,x),-1<p&&(oe(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,p,_,x)),(p=-1<a?h[a]:null)&&G(p))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])T(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(z(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Y(h))?(T(p,a),p.h==0&&(p.src=null,h[k]=null)):oe(a)}}}function z(a){return a in $?$[a]:$[a]="on"+a}function ce(a,h){if(a.da)a=!0;else{h=new yn(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&G(a),a=p.call(_,h)}return a}function Y(a){return a=a[k],a instanceof Pe?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function he(){Ge.call(this),this.i=new Pe(this),this.M=this,this.F=null}C(he,Ge),he.prototype[F]=!0,he.prototype.removeEventListener=function(a,h,p,_){W(this,a,h,p,_)};function ye(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new We(h,a);else if(h instanceof We)h.target=h.target||a;else{var x=h;h=new We(_,a),I(h,x)}if(x=!0,p)for(var N=p.length-1;0<=N;N--){var K=h.g=p[N];x=Re(K,_,!0,h)&&x}if(K=h.g=a,x=Re(K,_,!0,h)&&x,x=Re(K,_,!1,h)&&x,p)for(N=0;N<p.length;N++)K=h.g=p[N],x=Re(K,_,!1,h)&&x}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)oe(p[_]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},he.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Re(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,N=0;N<h.length;++N){var K=h[N];if(K&&!K.da&&K.capture==p){var Me=K.listener,mt=K.ha||K.src;K.fa&&T(a.i,K),x=Me.call(mt,_)!==!1&&x}}return x&&!_.defaultPrevented}function It(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ft(a){a.g=It(()=>{a.g=null,a.i&&(a.i=!1,ft(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class en extends Ge{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){Ge.call(this),this.h=a,this.g={}}C(At,Ge);var ir=[];function ui(a){te(a.g,function(h,p){this.g.hasOwnProperty(p)&&G(h)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),ui(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pt=l.JSON.stringify,tn=l.JSON.parse,Oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xl(){}Xl.prototype.h=null;function Ed(a){return a.h||(a.h=a.i())}function Id(){}var hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yl(){We.call(this,"d")}C(Yl,We);function Jl(){We.call(this,"c")}C(Jl,We);var Br={},Ad=null;function Vo(){return Ad=Ad||new he}Br.La="serverreachability";function bd(a){We.call(this,Br.La,a)}C(bd,We);function di(a){const h=Vo();ye(h,new bd(h))}Br.STAT_EVENT="statevent";function Rd(a,h){We.call(this,Br.STAT_EVENT,a),this.stat=h}C(Rd,We);function Dt(a){const h=Vo();ye(h,new Rd(h,a))}Br.Ma="timingevent";function Cd(a,h){We.call(this,Br.Ma,a),this.size=h}C(Cd,We);function fi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function t1(a,h,p,_,x,N){a.info(function(){if(a.g)if(N)for(var K="",Me=N.split("&"),mt=0;mt<Me.length;mt++){var ke=Me[mt].split("=");if(1<ke.length){var bt=ke[0];ke=ke[1];var Rt=bt.split("_");K=2<=Rt.length&&Rt[1]=="type"?K+(bt+"="+ke+"&"):K+(bt+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+h+`
`+p+`
`+K})}function n1(a,h,p,_,x,N,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+h+`
`+p+`
`+N+" "+K})}function ps(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+s1(a,p)+(_?" "+_:"")})}function r1(a,h){a.info(function(){return"TIMEOUT: "+h})}pi.prototype.info=function(){};function s1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var N=x[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<x.length;K++)x[K]=""}}}}return pt(p)}catch{return h}}var Mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zl;function Lo(){}C(Lo,Xl),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Zl=new Lo;function or(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pd}function Pd(){this.i=null,this.g="",this.h=!1}var kd={},ec={};function tc(a,h,p){a.L=1,a.v=Bo(Mn(h)),a.m=p,a.P=!0,xd(a,null)}function xd(a,h){a.F=Date.now(),Uo(a),a.A=Mn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),zd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Pd,a.g=uf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new en(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(ir[0]=x.toString()),x=ir);for(var N=0;N<x.length;N++){var K=q(p,x[N],_||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),di(),t1(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const Rt=Ln(this.g);var h=this.g.Ba();const _s=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Jd(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=_s?di(3):di(2)),nc(this);var p=this.g.Z();this.X=p;t:if(Dd(this)){var _=Jd(this.g);a="";var x=_.length,N=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),mi(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==x-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,n1(this.i,this.u,this.A,this.l,this.R,Rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,mt=this.g;if((Me=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Me)){var ke=Me;break t}}ke=null}if(p=ke)ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,p);else{this.o=!1,this.s=3,Dt(12),jr(this),mi(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=i1(this,K),ln==ec){Rt==4&&(this.s=4,Dt(14),p=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==kd){this.s=4,Dt(15),ps(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else ps(this.i,this.l,ln,null),rc(this,ln);if(Dd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||K.length!=0||this.h.h||(this.s=1,Dt(16),p=!1),this.o=this.o&&p,!p)ps(this.i,this.l,K,"[Invalid Chunked Response]"),jr(this),mi(this);else if(0<K.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),cc(bt),bt.M=!0,Dt(11))}}else ps(this.i,this.l,K,null),rc(this,K);Rt==4&&jr(this),this.o&&!this.J&&(Rt==4?of(this.j,this):(this.o=!1,Uo(this)))}else E1(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),jr(this),mi(this)}}}catch{}finally{}};function Dd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function i1(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?ec:(p=Number(h.substring(p,_)),isNaN(p)?kd:(_+=1,_+p>h.length?ec:(h=h.slice(_,_+p),a.C=_+p,h)))}or.prototype.cancel=function(){this.J=!0,jr(this)};function Uo(a){a.S=Date.now()+a.I,Nd(a,a.I)}function Nd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(m(a.ba,a),h)}function nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(r1(this.i,this.A),this.L!=2&&(di(),Dt(17)),jr(this),this.s=2,mi(this)):Nd(this,this.S-a)};function mi(a){a.j.G==0||a.J||of(a.j,a)}function jr(a){nc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ui(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function rc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||sc(p.h,a))){if(!a.K&&sc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Wo(p),zo(p);else break e;lc(p),Dt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=fi(m(p.Za,p),6e3));if(1>=Md(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hr(p,11)}else if((a.K||p.g==a)&&Wo(p),!V(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let ke=x[h];if(p.T=ke[0],ke=ke[1],p.G==2)if(ke[0]=="c"){p.K=ke[1],p.ia=ke[2];const bt=ke[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const Rt=ke[4];Rt!=null&&(p.Aa=Rt,p.j.info("SVER="+p.Aa));const _s=ke[5];_s!=null&&typeof _s=="number"&&0<_s&&(_=1.5*_s,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ln=a.g;if(ln){const Qo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var N=_.h;N.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ic(N,N.h),N.h=null))}if(_.D){const uc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(_.ya=uc,Be(_.I,_.D,uc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=cf(_,_.J?_.ia:null,_.W),K.K){Ld(_.h,K);var Me=K,mt=_.L;mt&&(Me.I=mt),Me.B&&(nc(Me),Uo(Me)),_.g=K}else rf(_);0<p.i.length&&Go(p)}else ke[0]!="stop"&&ke[0]!="close"||Hr(p,7);else p.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Hr(p,7):ac(p):ke[0]!="noop"&&p.l&&p.l.ta(ke),p.v=0)}}di(4)}catch{}}var o1=class{constructor(a,h){this.g=a,this.map=h}};function Od(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Md(a){return a.h?1:a.g?a.g.size:0}function sc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ic(a,h){a.g?a.g.add(h):a.h=h}function Ld(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Od.prototype.cancel=function(){if(this.i=Ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ud(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function a1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function l1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Fd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=l1(a),_=a1(a),x=_.length,N=0;N<x;N++)h.call(void 0,_[N],p&&p[N],a)}var $d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),x=null;if(0<=_){var N=a[p].substring(0,_);x=a[p].substring(_+1)}else N=a[p];h(N,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Fo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var h=a.i,p=new yi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Bd(this,p),this.m=a.m}else a&&(h=String(a).match($d))?(this.h=!1,Fo(this,h[1]||"",!0),this.o=gi(h[2]||""),this.g=gi(h[3]||"",!0),$o(this,h[4]),this.l=gi(h[5]||"",!0),Bd(this,h[6]||"",!0),this.m=gi(h[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(_i(h,jd,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(_i(h,jd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(_i(p,p.charAt(0)=="/"?d1:h1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",_i(p,p1)),a.join("")};function Mn(a){return new qr(a)}function Fo(a,h,p){a.j=p?gi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Bd(a,h,p){h instanceof yi?(a.i=h,m1(a.i,a.h)):(p||(h=_i(h,f1)),a.i=new yi(h,a.h))}function Be(a,h,p){a.i.set(h,p)}function Bo(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _i(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,u1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function u1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jd=/[#\/\?@]/g,h1=/[#\?:]/g,d1=/[#\?]/g,f1=/[#\?@]/g,p1=/#/g;function yi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&c1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=yi.prototype,t.add=function(a,h){ar(this),this.i=null,a=ms(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function qd(a,h){ar(a),h=ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Hd(a,h){return ar(a),h=ms(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(p,_){p.forEach(function(x){a.call(h,x,_,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const x=a[_];for(let N=0;N<x.length;N++)p.push(h[_])}return p},t.V=function(a){ar(this);let h=[];if(typeof a=="string")Hd(this,a)&&(h=h.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return ar(this),this.i=null,a=ms(this,a),Hd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function zd(a,h,p){qd(a,h),0<p.length&&(a.i=null,a.g.set(ms(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const N=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var x=N;K[_]!==""&&(x+="="+encodeURIComponent(String(K[_]))),a.push(x)}}return this.i=a.join("&")};function ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function m1(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(p,_){var x=_.toLowerCase();_!=x&&(qd(this,_),zd(this,x,p))},a)),a.j=h}function g1(a,h){const p=new pi;if(l.Image){const _=new Image;_.onload=g(lr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=g(lr,p,"TestLoadImage: error",!1,h,_),_.onabort=g(lr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(lr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function _1(a,h){const p=new pi,_=new AbortController,x=setTimeout(()=>{_.abort(),lr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(x),N.ok?lr(p,"TestPingServer: ok",!0,h):lr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),lr(p,"TestPingServer: error",!1,h)})}function lr(a,h,p,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(p)}catch{}}function y1(){this.g=new Oo}function v1(a,h,p){const _=p||"";try{Fd(a,function(x,N){let K=x;u(x)&&(K=pt(x)),h.push(_+N+"="+encodeURIComponent(K))})}catch(x){throw h.push(_+"type="+encodeURIComponent("_badmap")),x}}function jo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(jo,Xl),jo.prototype.g=function(){return new qo(this.l,this.j)},jo.prototype.i=function(a){return function(){return a}}({});function qo(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qo,he),t=qo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vi(this):wi(this),this.readyState==3&&Gd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,vi(this))},t.Qa=function(a){this.g&&(this.response=a,vi(this))},t.ga=function(){this.g&&vi(this)};function vi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wd(a){let h="";return te(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function oc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Wd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Be(a,h,p))}function Ye(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ye,he);var w1=/^https?$/i,T1=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zl.g(),this.v=this.o?Ed(this.o):Ed(Zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Kd(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)p.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(T1,h,void 0))||_||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of p)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Kd(this,N)}};function Kd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Qd(a),Ho(a)}function Qd(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xd(this):this.bb())},t.bb=function(){Xd(this)};function Xd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)It(a.Ea,0,a);else if(ye(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=K===0){var x=String(a.D).match($d)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),_=!w1.test(x?x.toLowerCase():"")}p=_}if(p)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var N=2<Ln(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Qd(a)}}finally{Ho(a)}}}}function Ho(a,h){if(a.g){Yd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{p.onreadystatechange=_}catch{}}}function Yd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tn(h)}};function Jd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function E1(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(V(a[_]))continue;var p=S(a[_]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[x]||[];h[x]=N,N.push(p)}R(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Zd(a){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,a),this.cb=Ti("retryDelaySeedMs",1e4,a),this.Wa=Ti("forwardChannelMaxRetries",2,a),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Od(a&&a.concurrentRequestLimit),this.Da=new y1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zd.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){Dt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=cf(this,null,this.W),Go(this)};function ac(a){if(ef(a),a.G==3){var h=a.U++,p=Mn(a.I);if(Be(p,"SID",a.K),Be(p,"RID",h),Be(p,"TYPE","terminate"),Ei(a,p),h=new or(a,a.j,h),h.L=2,h.v=Bo(Mn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=uf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Uo(h)}lf(a)}function zo(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function ef(a){zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Vd(a.h)&&!a.s){a.s=!0;var h=a.Ga;be||an(),Te||(be(),Te=!0),Gt.add(h,a),a.B=0}}function I1(a,h){return Md(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(m(a.Ga,a,h),af(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new or(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(x.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=nf(this,x,h),p=Mn(this.I),Be(p,"RID",a),Be(p,"CVER",22),this.D&&Be(p,"X-HTTP-Session-Id",this.D),Ei(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Wd(N)))+"&"+h:this.m&&oc(p,this.m,N)),ic(this.h,x),this.Ua&&Be(p,"TYPE","init"),this.P?(Be(p,"$req",h),Be(p,"SID","null"),x.T=!0,tc(x,p,null)):tc(x,p,h),this.G=2}}else this.G==3&&(a?tf(this,a):this.i.length==0||Vd(this.h)||tf(this))};function tf(a,h){var p;h?p=h.l:p=a.U++;const _=Mn(a.I);Be(_,"SID",a.K),Be(_,"RID",p),Be(_,"AID",a.T),Ei(a,_),a.m&&a.o&&oc(_,a.m,a.o),p=new or(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=nf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,p),tc(p,_,h)}function Ei(a,h){a.H&&te(a.H,function(p,_){Be(h,_,p)}),a.l&&Fd({},function(p,_){Be(h,_,p)})}function nf(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let N=-1;for(;;){const K=["count="+p];N==-1?0<p?(N=x[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Me=!0;for(let mt=0;mt<p;mt++){let ke=x[mt].g;const bt=x[mt].map;if(ke-=N,0>ke)N=Math.max(0,x[mt].g-100),Me=!1;else try{v1(bt,K,"req"+ke+"_")}catch{_&&_(bt)}}if(Me){_=K.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function rf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;be||an(),Te||(be(),Te=!0),Gt.add(h,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(m(a.Fa,a),af(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),zo(this),sf(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sf(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);Be(h,"RID","rpc"),Be(h,"SID",a.K),Be(h,"AID",a.T),Be(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(h,"TO",a.ja),Be(h,"TYPE","xmlhttp"),Ei(a,h),a.m&&a.o&&oc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Bo(Mn(h)),p.m=null,p.P=!0,xd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,zo(this),lc(this),Dt(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function of(a,h){var p=null;if(a.g==h){Wo(a),cc(a),a.g=null;var _=2}else if(sc(a.h,h))p=h.D,Ld(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;_=Vo(),ye(_,new Cd(_,p)),Go(a)}else rf(a);else if(x=h.s,x==3||x==0&&0<h.X||!(_==1&&I1(a,h)||_==2&&lc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),x){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function af(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const x=!_;_=new qr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(_,"https"),Bo(_),x?g1(_.toString(),p):_1(_.toString(),p)}else Dt(2);a.G=0,a.l&&a.l.sa(h),lf(a),ef(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function lf(a){if(a.G=0,a.ka=[],a.l){const h=Ud(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function cf(a,h,p){var _=p instanceof qr?Mn(p):new qr(p);if(_.g!="")h&&(_.g=h+"."+_.g),$o(_,_.s);else{var x=l.location;_=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var N=new qr(null);_&&Fo(N,_),h&&(N.g=h),x&&$o(N,x),p&&(N.l=p),_=N}return p=a.D,h=a.ya,p&&h&&Be(_,p,h),Be(_,"VER",a.la),Ei(a,_),_}function uf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ye(new jo({eb:p})):new Ye(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hf(){}t=hf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ko(){}Ko.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){he.call(this),this.g=new Zd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new gs(this)}C(Wt,he),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){ac(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=pt(a),a=p);h.i.push(new o1(h.Ya++,a)),h.G==3&&Go(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Wt.aa.N.call(this)};function df(a){Yl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(df,Yl);function ff(){Jl.call(this),this.status=1}C(ff,Jl);function gs(a){this.g=a}C(gs,hf),gs.prototype.ua=function(){ye(this.g,"a")},gs.prototype.ta=function(a){ye(this.g,new df(a))},gs.prototype.sa=function(a){ye(this.g,new ff)},gs.prototype.ra=function(){ye(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Ly=function(){return new Ko},My=function(){return Vo()},Vy=Br,fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,Ta=Mo,Sd.COMPLETE="complete",Oy=Sd,Id.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",he.prototype.listen=he.prototype.K,Si=Id,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Ny=Ye}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});const zp="@firebase/firestore",Gp="4.7.16";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let ii="11.8.1";/**
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
 */const ns=new Tl("@firebase/firestore");function bs(){return ns.logLevel}function re(t,...e){if(ns.logLevel<=Ee.DEBUG){const n=e.map(Th);ns.debug(`Firestore (${ii}): ${t}`,...n)}}function Zn(t,...e){if(ns.logLevel<=Ee.ERROR){const n=e.map(Th);ns.error(`Firestore (${ii}): ${t}`,...n)}}function Ws(t,...e){if(ns.logLevel<=Ee.WARN){const n=e.map(Th);ns.warn(`Firestore (${ii}): ${t}`,...n)}}function Th(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Uy(t,r,n)}function Uy(t,e,n){let r=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Uy(e,s,r)}function ge(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Fy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class j2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q2{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Fy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class H2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class z2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new H2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function W2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function $y(){return new TextEncoder}/**
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
 */class By{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=W2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function pu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=$y(),o=K2(i.encode(Kp(t,n)),i.encode(Kp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Kp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function K2(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Qp=-62135596800,Xp=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xp);return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qp)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Qp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new ot(0,0))}static max(){return new de(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yp="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=En.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),s=En.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?En.extractNumericId(e).compare(En.extractNumericId(n)):pu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class Ve extends En{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends En{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return Q2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yp}static keyField(){return new wt([Yp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ve.fromString(e))}static fromName(e){return new le(Ve.fromString(e).popFirst(5))}static empty(){return new le(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ve(e.slice()))}}/**
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
 */const oo=-1;function X2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Dr(s,le.empty(),e)}function Y2(t){return new Dr(t.readTime,t.key,oo)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(de.min(),le.empty(),oo)}static max(){return new Dr(de.max(),le.empty(),oo)}}function J2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const Z2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function oi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Z2)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Cl.le=-1;/**
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
 */const Eh=-1;function bo(t){return t==null}function za(t){return t===0&&1/t==-1/0}function nR(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const jy="";function rR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jp(e)),e=sR(t.get(n),e);return Jp(e)}function sR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case jy:n+="";break;default:n+=i}}return n}function Jp(t){return t+jy+""}/**
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
 */function Zp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ra(this.root,e,this.comparator,!0)}}class ra{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new em(this.data.getIterator())}getIteratorFrom(e){return new em(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class em{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new at(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hy("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=iR.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */const zy="server_timestamp",Gy="__type__",Wy="__previous_value__",Ky="__local_write_time__";function Sl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gy])===null||n===void 0?void 0:n.stringValue)===zy}function Pl(t){const e=t.mapValue.fields[Wy];return Sl(e)?Pl(e):e}function ao(t){const e=Nr(t.mapValue.fields[Ky].timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class oR{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const mu="(default)";class lo{constructor(e,n){this.projectId=e,this.database=n||mu}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database===mu}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qy="__type__",aR="__max__",sa={mapValue:{}},Xy="__vector__",Ga="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sl(t)?4:cR(t)?9007199254740991:lR(t)?10:11:ue(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),l=Nr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),l=tt(i.doubleValue);return o===l?za(o)===za(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zp(o)!==Zp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!On(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function co(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=tt(i.integerValue||i.doubleValue),c=tt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return tm(t.timestampValue,e.timestampValue);case 4:return tm(ao(t),ao(e));case 5:return pu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Or(i),c=Or(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ve(l[u],c[u]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(tt(i.latitude),tt(o.latitude));return l!==0?l:ve(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return nm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const f=i.fields||{},m=o.fields||{},g=(l=f[Ga])===null||l===void 0?void 0:l.arrayValue,C=(c=m[Ga])===null||c===void 0?void 0:c.arrayValue,P=ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:nm(g,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===sa.mapValue&&o===sa.mapValue)return 0;if(i===sa.mapValue)return 1;if(o===sa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=pu(c[f],d[f]);if(m!==0)return m;const g=Qs(l[c[f]],u[d[f]]);if(g!==0)return g}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function tm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Nr(t),r=Nr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function nm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Xs(t){return gu(t)}function gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function Ea(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pl(t);return e?16+Ea(e):16;case 5:return 2*t.stringValue.length;case 6:return Or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ea(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Fr(r.fields,(i,o)=>{s+=i.length+Ea(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function Wa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _u(t){return!!t&&"integerValue"in t}function Ih(t){return!!t&&"arrayValue"in t}function rm(t){return!!t&&"nullValue"in t}function sm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ia(t){return!!t&&"mapValue"in t}function lR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qy])===null||n===void 0?void 0:n.stringValue)===Xy}function ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ji(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aR}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ji(n)}setAll(e){let n=wt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ji(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(ji(this.value))}}function Yy(t){const e=[];return Fr(t.fields,(n,r)=>{const s=new wt([n]);if(Ia(r)){const i=Yy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,de.min(),de.min(),de.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,de.min(),de.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,de.min(),de.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ys{constructor(e,n){this.position=e,this.inclusive=n}}function im(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uo{constructor(e,n="asc"){this.field=e,this.dir=n}}function uR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jy{}class rt extends Jy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dR(e,n,r):n==="array-contains"?new mR(e,r):n==="in"?new gR(e,r):n==="not-in"?new _R(e,r):n==="array-contains-any"?new yR(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fR(e,r):new pR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qs(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends Jy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new _n(e,n)}matches(e){return Zy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Zy(t){return t.op==="and"}function ev(t){return hR(t)&&Zy(t)}function hR(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function yu(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(ev(t))return t.filters.map(e=>yu(e)).join(",");{const e=t.filters.map(n=>yu(n)).join(",");return`${t.op}(${e})`}}function tv(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&On(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&tv(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function nv(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(nv).join(" ,")+"}"}(t):"Filter"}class dR extends rt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class fR extends rt{constructor(e,n){super(e,"in",n),this.keys=rv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pR extends rt{constructor(e,n){super(e,"not-in",n),this.keys=rv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class mR extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ih(n)&&co(n.arrayValue,this.value)}}class gR extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class _R extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!co(this.value.arrayValue,n)}}class yR extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ih(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
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
 */class vR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function am(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vR(t,e,n,r,s,i,o)}function Ah(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.Ie=n}return e.Ie}function bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!om(t.startAt,e.startAt)&&om(t.endAt,e.endAt)}function vu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class us{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function wR(t,e,n,r,s,i,o,l){return new us(t,e,n,r,s,i,o,l)}function Rh(t){return new us(t)}function lm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ch(t){return t.collectionGroup!==null}function js(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new uo(i,r))}),n.has(wt.keyField().canonicalString())||e.Ee.push(new uo(wt.keyField(),r))}return e.Ee}function Pn(t){const e=ge(t);return e.de||(e.de=TR(e,js(t))),e.de}function TR(t,e){if(t.limitType==="F")return am(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new uo(s.field,i)});const n=t.endAt?new Ys(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ys(t.startAt.position,t.startAt.inclusive):null;return am(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wu(t,e){const n=t.filters.concat([e]);return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ka(t,e,n){return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kl(t,e){return bh(Pn(t),Pn(e))&&t.limitType===e.limitType}function sv(t){return`${Ah(Pn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>nv(s)).join(", ")}]`),bo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xs(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=im(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,js(r),s)||r.endAt&&!function(o,l,c){const u=im(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,js(r),s))}(t,e)}function ER(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iv(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=IR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IR(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qs(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qy(this.inner)}size(){return this.innerSize}}/**
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
 */const AR=new Qe(le.comparator);function er(){return AR}const ov=new Qe(le.comparator);function Pi(...t){let e=ov;for(const n of t)e=e.insert(n.key,n);return e}function av(t){let e=ov;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return qi()}function lv(){return qi()}function qi(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const bR=new Qe(le.comparator),RR=new at(le.comparator);function Ae(...t){let e=RR;for(const n of t)e=e.add(n);return e}const CR=new at(ve);function SR(){return CR}/**
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
 */function Sh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function cv(t){return{integerValue:""+t}}function uv(t,e){return nR(e)?cv(e):Sh(t,e)}/**
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
 */class Dl{constructor(){this._=void 0}}function PR(t,e,n){return t instanceof Qa?function(s,i){const o={fields:{[Gy]:{stringValue:zy},[Ky]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=Pl(i)),i&&(o.fields[Wy]=i),{mapValue:o}}(n,e):t instanceof ho?dv(t,e):t instanceof fo?fv(t,e):function(s,i){const o=hv(s,i),l=cm(o)+cm(s.Re);return _u(o)&&_u(s.Re)?cv(l):Sh(s.serializer,l)}(t,e)}function kR(t,e,n){return t instanceof ho?dv(t,e):t instanceof fo?fv(t,e):n}function hv(t,e){return t instanceof po?function(r){return _u(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qa extends Dl{}class ho extends Dl{constructor(e){super(),this.elements=e}}function dv(t,e){const n=pv(e);for(const r of t.elements)n.some(s=>On(s,r))||n.push(r);return{arrayValue:{values:n}}}class fo extends Dl{constructor(e){super(),this.elements=e}}function fv(t,e){let n=pv(e);for(const r of t.elements)n=n.filter(s=>!On(s,r));return{arrayValue:{values:n}}}class po extends Dl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function cm(t){return tt(t.integerValue||t.doubleValue)}function pv(t){return Ih(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class xR{constructor(e,n){this.field=e,this.transform=n}}function DR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ho&&s instanceof ho||r instanceof fo&&s instanceof fo?Ks(r.elements,s.elements,On):r instanceof po&&s instanceof po?On(r.Re,s.Re):r instanceof Qa&&s instanceof Qa}(t.transform,e.transform)}class NR{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nl{}function mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ph(t.key,qt.none()):new Ro(t.key,t.data,qt.none());{const n=t.data,r=Lt.empty();let s=new at(wt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new Qt(s.toArray()),qt.none())}}function OR(t,e,n){t instanceof Ro?function(s,i,o){const l=s.value.clone(),c=hm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!Aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=hm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hi(t,e,n,r){return t instanceof Ro?function(i,o,l,c){if(!Aa(i.precondition,o))return l;const u=i.value.clone(),d=dm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,l,c){if(!Aa(i.precondition,o))return l;const u=dm(i.fieldTransforms,c,o),d=o.data;return d.setAll(gv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return Aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hv(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function um(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>DR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Nl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends Nl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hm(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,kR(o,l,n[s]))}return r}function dm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PR(i,o,e))}return r}class Ph extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _v extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=mv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>um(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>um(n,r))}}class kh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return bR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kh(e,n,r,s)}}/**
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
 */class LR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class UR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,Ce;function yv(t){switch(t){case M.OK:return ue(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function vv(t){if(t===void 0)return Zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case nt.OK:return M.OK;case nt.CANCELLED:return M.CANCELLED;case nt.UNKNOWN:return M.UNKNOWN;case nt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case nt.INTERNAL:return M.INTERNAL;case nt.UNAVAILABLE:return M.UNAVAILABLE;case nt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case nt.NOT_FOUND:return M.NOT_FOUND;case nt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case nt.ABORTED:return M.ABORTED;case nt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case nt.DATA_LOSS:return M.DATA_LOSS;default:return ue(39323,{code:t})}}(Ce=nt||(nt={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const FR=new Sr([4294967295,4294967295],0);function fm(t){const e=$y().encode(t),n=new Dy;return n.update(e),new Uint8Array(n.digest())}function pm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class xh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Sr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(FR)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=fm(e),[r,s]=pm(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=fm(e),[r,s]=pm(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ol(de.min(),s,new Qe(ve),er(),Ae())}}class Co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,Ae(),Ae(),Ae())}}/**
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
 */class ba{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class wv{constructor(e,n){this.targetId=e,this.Ce=n}}class Tv{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mm{constructor(){this.Fe=0,this.Me=gm(),this.xe=Et.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ae(),n=Ae(),r=Ae();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new Co(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=gm()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $R{constructor(e){this.ze=e,this.je=new Map,this.He=er(),this.Je=ia(),this.Ye=ia(),this.Ze=new Qe(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(vu(i))if(r===0){const o=new le(i.path);this.tt(n,o,ht.newNoDocument(o,de.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(c){if(c instanceof Hy)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xh(o,s,i)}catch(c){return Ws(c instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&vu(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ht.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Ae();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ol(e,n,this.Ze,this.He,r);return this.He=er(),this.Je=ia(),this.Ye=ia(),this.Ze=new Qe(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new mm,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new at(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new at(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new mm),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ia(){return new Qe(le.comparator)}function gm(){return new Qe(le.comparator)}const BR={asc:"ASCENDING",desc:"DESCENDING"},jR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qR={and:"AND",or:"OR"};class HR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tu(t,e){return t.useProto3Json||bo(e)?e:{value:e}}function Xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ev(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zR(t,e){return Xa(t,e.toTimestamp())}function Jt(t){return Se(!!t,49232),de.fromTimestamp(function(n){const r=Nr(n);return new ot(r.seconds,r.nanos)}(t))}function Dh(t,e){return Eu(t,e).canonicalString()}function Eu(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Iv(t){const e=Ve.fromString(t);return Se(Pv(e),10190,{key:e.toString()}),e}function Ya(t,e){return Dh(t.databaseId,e.path)}function zi(t,e){const n=Iv(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(bv(n))}function Av(t,e){return Dh(t.databaseId,e)}function GR(t){const e=Iv(t);return e.length===4?Ve.emptyPath():bv(e)}function Iu(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bv(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function _m(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function WR(t,e){return"found"in e?function(r,s){Se(!!s.found,43571),s.found.name,s.found.updateTime;const i=zi(r,s.found.name),o=Jt(s.found.updateTime),l=s.found.createTime?Jt(s.found.createTime):de.min(),c=new Lt({mapValue:{fields:s.found.fields}});return ht.newFoundDocument(i,o,l,c)}(t,e):"missing"in e?function(r,s){Se(!!s.missing,3894),Se(!!s.readTime,22933);const i=zi(r,s.missing),o=Jt(s.readTime);return ht.newNoDocument(i,o)}(t,e):ue(7234,{result:e})}function KR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Se(d===void 0||typeof d=="string",58123),Et.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?M.UNKNOWN:vv(u.code);return new Q(d,u.message||"")}(o);n=new Tv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zi(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):de.min(),l=new Lt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ba(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zi(t,r.document),i=r.readTime?Jt(r.readTime):de.min(),o=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zi(t,r.document),i=r.removedTargetIds||[];n=new ba([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new UR(s,i),l=r.targetId;n=new wv(l,o)}}return n}function Rv(t,e){let n;if(e instanceof Ro)n={update:_m(t,e.key,e.value)};else if(e instanceof Ph)n={delete:Ya(t,e.key)};else if(e instanceof $r)n={update:_m(t,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof _v))return ue(16599,{ft:e.type});n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function QR(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(de.min())&&(o=Jt(i)),new NR(o,s.transformResults||[])}(n,e))):[]}function XR(t,e){return{documents:[Av(t,e.path)]}}function YR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Av(t,s);const i=function(u){if(u.length!==0)return Sv(_n.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Cs(m.field),direction:eC(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function JR(t){let e=GR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=Cv(f);return m instanceof _n&&ev(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(C){return new uo(Ss(C.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,bo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Ys(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Ys(g,m)}(n.endAt)),wR(e,s,o,i,l,"F",c,u)}function ZR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ss(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ss(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>Cv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function eC(t){return BR[t]}function tC(t){return jR[t]}function nC(t){return qR[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ss(t){return wt.fromServerFormat(t.fieldPath)}function Sv(t){return t instanceof rt?function(n){if(n.op==="=="){if(sm(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(rm(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sm(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(rm(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:tC(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>Sv(s));return r.length===1?r[0]:{compositeFilter:{op:nC(n.op),filters:r}}}(t):ue(54877,{filter:t})}function rC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Tr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sC{constructor(e){this.wt=e}}function iC(t){const e=JR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
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
 */class oC{constructor(){this.Cn=new aC}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Dr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ve.comparator)).toArray()}}/**
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
 */const ym={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kv=41943040;class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(kv,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
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
 */class Js{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Js(0)}static lr(){return new Js(-1)}}/**
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
 */const vm="LruGarbageCollector",lC=1048576;function wm([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class cC{constructor(e){this.Er=e,this.buffer=new at(wm),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){re(vm,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ai(n)?re(vm,"Ignoring IndexedDB error during garbage collection: ",n):await oi(n)}await this.mr(3e5)})}}class hC{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Cl.le);const r=new cC(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(ym)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ym):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),bs()<=Ee.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function dC(t,e){return new hC(t,e)}/**
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
 */class fC{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hi(r.mutation,s,Qt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Pi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=er();const o=qi(),l=function(){return qi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof $r)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Hi(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return l.set(u,new pC(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qi();let s=new Qe((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Qt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=lv();d.forEach(m=>{if(!i.has(m)){const g=mv(n.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ch(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Xr());let l=oo,c=i;return o.next(u=>j.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(d=>({batchId:l,changes:av(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Pi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(f,m){return new us(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let l=Pi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Hi(d.mutation,u,Qt.empty(),ot.now()),xl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class gC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:iC(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),j.resolve()}}/**
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
 */class _C{constructor(){this.overlays=new Qe(le.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Xr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Xr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return j.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LR(n,r));let i=this.Qr.get(n);i===void 0&&(i=Ae(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class yC{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Nh{constructor(){this.$r=new at(ut.Ur),this.Kr=new at(ut.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ut(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ut(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1);let i=Ae();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
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
 */class vC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new at(ut.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Eh:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(ve);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let l=new at(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),j.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wC{constructor(e){this.ii=e,this.docs=function(){return new Qe(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||J2(Y2(d),r)<=0||(s.has(d.key)||xl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TC(this)}getSize(e){return j.resolve(this.size)}}class TC extends fC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class EC{constructor(e){this.persistence=e,this.oi=new hs(n=>Ah(n),bh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Nh,this.targetCount=0,this.ui=Js.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Js(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class xv{constructor(e,n){this.ci={},this.overlays={},this.li=new Cl(0),this.hi=!1,this.hi=!0,this.Pi=new yC,this.referenceDelegate=e(this),this.Ti=new EC(this),this.indexManager=new oC,this.remoteDocumentCache=function(s){return new wC(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new sC(n),this.Ei=new gC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new vC(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new IC(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class IC extends eR{constructor(e){super(),this.currentSequenceNumber=e}}class Oh{constructor(e){this.persistence=e,this.Vi=new Nh,this.mi=null}static fi(e){return new Oh(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Ja{constructor(e,n){this.persistence=e,this.yi=new hs(r=>rR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dC(this,n)}static fi(e,n){return new Ja(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ea(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vh(e,n.fromCache,r,s)}}/**
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
 */class AC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return _I()?8:tR(xt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AC;return this.bs(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(bs()<=Ee.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(bs()<=Ee.DEBUG&&re("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(bs()<=Ee.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):j.resolve())}ws(e,n){if(lm(n))return j.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ka(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Ka(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return lm(n)||s.isEqual(de.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(bs()<=Ee.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.Fs(e,o,n,X2(s,oo)).next(l=>l))})}vs(e,n){let r=new at(iv(e));return n.forEach((s,i)=>{xl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return bs()<=Ee.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ys.getDocumentsMatchingQuery(e,n,Dr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Mh="LocalStore",RC=3e8;class CC{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Qe(ve),this.Os=new hs(i=>Ah(i),bh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function SC(t,e,n,r){return new CC(t,e,n,r)}async function Dv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function PC(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,m=f.keys();let g=j.resolve();return m.forEach(C=>{g=g.next(()=>d.getEntry(c,C)).next(P=>{const A=u.docVersions.get(C);Se(A!==null,48541),P.version.compareTo(A)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Nv(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function kC(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Et.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(f,g),function(P,A,O){return P.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=RC?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,g,d)&&l.push(n.Ti.updateTargetData(i,g))});let c=er(),u=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(xC(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(de.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(f=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function xC(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=er();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):re(Mh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function DC(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Eh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NC(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Au(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ai(o))throw o;re(Mh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Tm(t,e,n){const r=ge(t);let s=de.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ge(c),m=f.Os.get(d);return m!==void 0?j.resolve(f.xs.get(m)):f.Ti.getTargetData(u,d)}(r,o,Pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ae())).next(l=>(OC(r,ER(e),l),{documents:l,$s:i})))}function OC(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Em{constructor(){this.activeTargetIds=SR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.xo=new Em,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Em,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MC{No(e){}shutdown(){}}/**
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
 */const Im="ConnectivityMonitor";class Am{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){re(Im,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){re(Im,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oa=null;function bu(){return oa===null?oa=function(){return 268435456+Math.round(2147483648*Math.random())}():oa++,"0x"+oa.toString(16)}/**
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
 */const Dc="RestConnection",LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===mu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=bu(),l=this.jo(e,n.toUriEncodedString());re(Dc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=ls(u);return this.Jo(e,l,c,r,d).then(f=>(re(Dc,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ws(Dc,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=LC[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class FC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ct="WebChannelConnection";class $C extends UC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=bu();return new Promise((l,c)=>{const u=new Ny;u.setWithCredentials(!0),u.listenOnce(Oy.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ta.NO_ERROR:const f=u.getResponseJson();re(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Ta.TIMEOUT:re(Ct,`RPC '${e}' ${o} timed out`),c(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ta.HTTP_ERROR:const m=u.getStatus();if(re(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const C=g==null?void 0:g.error;if(C&&C.status&&C.message){const P=function(O){const V=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(V)>=0?V:M.UNKNOWN}(C.status);c(new Q(P,C.message))}else c(new Q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Q(M.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{re(Ct,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);re(Ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=bu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ly(),l=My(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(Ct,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let m=!1,g=!1;const C=new FC({Zo:A=>{g?re(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||(re(Ct,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),re(Ct,`RPC '${e}' stream ${s} sending:`,A),f.send(A))},Xo:()=>f.close()}),P=(A,O,V)=>{A.listen(O,L=>{try{V(L)}catch(U){setTimeout(()=>{throw U},0)}})};return P(f,Si.EventType.OPEN,()=>{g||(re(Ct,`RPC '${e}' stream ${s} transport opened.`),C.__())}),P(f,Si.EventType.CLOSE,()=>{g||(g=!0,re(Ct,`RPC '${e}' stream ${s} transport closed`),C.u_())}),P(f,Si.EventType.ERROR,A=>{g||(g=!0,Ws(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),C.u_(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),P(f,Si.EventType.MESSAGE,A=>{var O;if(!g){const V=A.data[0];Se(!!V,16349);const L=V,U=(L==null?void 0:L.error)||((O=L[0])===null||O===void 0?void 0:O.error);if(U){re(Ct,`RPC '${e}' stream ${s} received error:`,U);const ie=U.status;let te=function(y){const I=nt[y];if(I!==void 0)return vv(I)}(ie),R=U.message;te===void 0&&(te=M.INTERNAL,R="Unknown error status: "+ie+" with message "+U.message),g=!0,C.u_(new Q(te,R)),f.close()}else re(Ct,`RPC '${e}' stream ${s} received:`,V),C.c_(V)}}),P(l,Vy.STAT_EVENT,A=>{A.stat===fu.PROXY?re(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===fu.NOPROXY&&re(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}}function Nc(){return typeof document<"u"?document:null}/**
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
 */function Vl(t){return new HR(t,!0)}/**
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
 */class Lh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const bm="PersistentStream";class Ov{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Lh(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return re(bm,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(re(bm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BC extends Ov{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=KR(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Jt(o.readTime):de.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=Iu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=vu(c)?{documents:XR(i,c)}:{query:YR(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ev(i,o.resumeToken);const u=Tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Xa(i,o.snapshotVersion.toTimestamp());const u=Tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=ZR(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=Iu(this.serializer),n.removeTarget=e,this.L_(n)}}class jC extends Ov{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=QR(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=Iu(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rv(this.serializer,r))};this.L_(n)}}/**
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
 */class qC{}class HC extends qC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Eu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Eu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class zC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Zn(n),this.oa=!1):re("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const rs="RemoteStore";class GC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{ds(this)&&(re(rs,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.Ta.add(4),await So(u),u.da.set("Unknown"),u.Ta.delete(4),await Ml(u)}(this))})}),this.da=new zC(r,s)}}async function Ml(t){if(ds(t))for(const e of t.Ia)await e(!0)}async function So(t){for(const e of t.Ia)await e(!1)}function Vv(t,e){const n=ge(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Bh(n)?$h(n):li(n).M_()&&Fh(n,e))}function Uh(t,e){const n=ge(t),r=li(n);n.Pa.delete(e),r.M_()&&Mv(n,e),n.Pa.size===0&&(r.M_()?r.N_():ds(n)&&n.da.set("Unknown"))}function Fh(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}li(t).H_(e)}function Mv(t,e){t.Aa.Ke(e),li(t).J_(e)}function $h(t){t.Aa=new $R({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),li(t).start(),t.da._a()}function Bh(t){return ds(t)&&!li(t).F_()&&t.Pa.size>0}function ds(t){return ge(t).Ta.size===0}function Lv(t){t.Aa=void 0}async function WC(t){t.da.set("Online")}async function KC(t){t.Pa.forEach((e,n)=>{Fh(t,e)})}async function QC(t,e){Lv(t),Bh(t)?(t.da.ca(e),$h(t)):t.da.set("Unknown")}async function XC(t,e,n){if(t.da.set("Online"),e instanceof Tv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(t,e)}catch(r){re(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Za(t,r)}else if(e instanceof ba?t.Aa.Xe(e):e instanceof wv?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(de.min()))try{const r=await Nv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),Mv(i,c);const f=new Tr(d.target,c,u,d.sequenceNumber);Fh(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){re(rs,"Failed to raise snapshot:",r),await Za(t,r)}}async function Za(t,e,n){if(!ai(e))throw e;t.Ta.add(1),await So(t),t.da.set("Offline"),n||(n=()=>Nv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re(rs,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Ml(t)})}function Uv(t,e){return e().catch(n=>Za(t,n,e))}async function Ll(t){const e=ge(t),n=Mr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Eh;for(;YC(e);)try{const s=await DC(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,JC(e,s)}catch(s){await Za(e,s)}Fv(e)&&$v(e)}function YC(t){return ds(t)&&t.ha.length<10}function JC(t,e){t.ha.push(e);const n=Mr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Fv(t){return ds(t)&&!Mr(t).F_()&&t.ha.length>0}function $v(t){Mr(t).start()}async function ZC(t){Mr(t).ta()}async function eS(t){const e=Mr(t);for(const n of t.ha)e.Z_(n.mutations)}async function tS(t,e,n){const r=t.ha.shift(),s=kh.from(r,e,n);await Uv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ll(t)}async function nS(t,e){e&&Mr(t).Y_&&await async function(r,s){if(function(o){return yv(o)&&o!==M.ABORTED}(s.code)){const i=r.ha.shift();Mr(r).O_(),await Uv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ll(r)}}(t,e),Fv(t)&&$v(t)}async function Rm(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),re(rs,"RemoteStore received new credentials");const r=ds(n);n.Ta.add(3),await So(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Ml(n)}async function rS(t,e){const n=ge(t);e?(n.Ta.delete(2),await Ml(n)):e||(n.Ta.add(2),await So(n),n.da.set("Unknown"))}function li(t){return t.Ra||(t.Ra=function(n,r,s){const i=ge(n);return i.ra(),new BC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:WC.bind(null,t),n_:KC.bind(null,t),i_:QC.bind(null,t),j_:XC.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Bh(t)?$h(t):t.da.set("Unknown")):(await t.Ra.stop(),Lv(t))})),t.Ra}function Mr(t){return t.Va||(t.Va=function(n,r,s){const i=ge(n);return i.ra(),new jC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:ZC.bind(null,t),i_:nS.bind(null,t),X_:eS.bind(null,t),ea:tS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Ll(t)):(await t.Va.stop(),t.ha.length>0&&(re(rs,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class jh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new jh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qh(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ai(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{static emptySet(e){return new qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Pi(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cm{constructor(){this.ma=new Qe(le.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zs(e,n,qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sS{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class iS{constructor(){this.queries=Sm(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Sm(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function Sm(){return new hs(t=>sv(t),kl)}async function Bv(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new sS,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=qh(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&Hh(n)}async function jv(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&Hh(n)}function aS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function Hh(t){t.ba.forEach(e=>{e.next()})}var Ru,Pm;(Pm=Ru||(Ru={})).Ca="default",Pm.Cache="cache";class qv{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Ru.Cache}}/**
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
 */class Hv{constructor(e){this.key=e}}class zv{constructor(e){this.key=e}}class lS{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ae(),this.mutatedKeys=Ae(),this.Ha=iv(e),this.Ja=new qs(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new Cm,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),g=xl(this.query,f)?f:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;m&&g?m.data.isEqual(g.data)?C!==P&&(r.track({type:3,doc:g}),A=!0):this.eu(m,g)||(r.track({type:2,doc:g}),A=!0,(c&&this.Ha(g,c)>0||u&&this.Ha(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),A=!0):m&&!g&&(r.track({type:1,doc:m}),A=!0,(c||u)&&(l=!0)),A&&(g?(o=o.add(g),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,f)=>function(g,C){const P=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:A})}};return P(g)-P(C)}(d.type,f.type)||this.Ha(d.doc,f.doc)),this.tu(r),s=s!=null&&s;const l=n&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Zs(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Cm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ae(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new zv(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new Hv(r))}),n}su(e){this.Ga=e.$s,this.ja=Ae();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Zs.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const zh="SyncEngine";class cS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uS{constructor(e){this.key=e,this._u=!1}}class hS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new hs(l=>sv(l),kl),this.cu=new Map,this.lu=new Set,this.hu=new Qe(le.comparator),this.Pu=new Map,this.Tu=new Nh,this.Iu={},this.Eu=new Map,this.du=Js.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function dS(t,e,n=!0){const r=Yv(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Gv(r,e,n,!0),s}async function fS(t,e){const n=Yv(t);await Gv(n,e,!0,!1)}async function Gv(t,e,n,r){const s=await NC(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await pS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Vv(t.remoteStore,s),l}async function pS(t,e,n,r,s){t.Ru=(f,m,g)=>async function(P,A,O,V){let L=A.view.Za(O);L.Cs&&(L=await Tm(P.localStore,A.query,!1).then(({documents:R})=>A.view.Za(R,L)));const U=V&&V.targetChanges.get(A.targetId),ie=V&&V.targetMismatches.get(A.targetId)!=null,te=A.view.applyChanges(L,P.isPrimaryClient,U,ie);return xm(P,A.targetId,te.ru),te.snapshot}(t,f,m,g);const i=await Tm(t.localStore,e,!0),o=new lS(e,i.$s),l=o.Za(i.documents),c=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);xm(t,n,u.ru);const d=new cS(e,n,o);return t.uu.set(e,d),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),u.snapshot}async function mS(t,e,n){const r=ge(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!kl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Au(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uh(r.remoteStore,s.targetId),Cu(r,s.targetId)}).catch(oi)):(Cu(r,s.targetId),await Au(r.localStore,s.targetId,!0))}async function gS(t,e){const n=ge(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uh(n.remoteStore,r.targetId))}async function _S(t,e,n){const r=AS(t);try{const s=await function(o,l){const c=ge(o),u=ot.now(),d=l.reduce((g,C)=>g.add(C.key),Ae());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let C=er(),P=Ae();return c.Bs.getEntries(g,d).next(A=>{C=A,C.forEach((O,V)=>{V.isValidDocument()||(P=P.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,C)).next(A=>{f=A;const O=[];for(const V of l){const L=VR(V,f.get(V.key).overlayedDocument);L!=null&&O.push(new $r(V.key,L,Yy(L.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,l)}).next(A=>{m=A;const O=A.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(g,A.batchId,O)})}).then(()=>({batchId:m.batchId,changes:av(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Qe(ve)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Po(r,s.changes),await Ll(r.remoteStore)}catch(s){const i=qh(s,"Failed to persist write");n.reject(i)}}async function Wv(t,e){const n=ge(t);try{const r=await kC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Se(o._u,14607):s.removedDocuments.size>0&&(Se(o._u,42227),o._u=!1))}),await Po(n,r,e)}catch(r){await oi(r)}}function km(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.ya)m.Da(l)&&(u=!0)}),u&&Hh(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Qe(le.comparator);o=o.insert(i,ht.newNoDocument(i,de.min()));const l=Ae().add(i),c=new Ol(de.min(),new Map,new Qe(ve),o,l);await Wv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Gh(r)}else await Au(r.localStore,e,!1).then(()=>Cu(r,e,n)).catch(oi)}async function vS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await PC(n.localStore,e);Qv(n,r,null),Kv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,s)}catch(s){await oi(s)}}async function wS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Se(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Qv(r,e,n),Kv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,s)}catch(s){await oi(s)}}function Kv(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Qv(t,e,n){const r=ge(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Cu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||Xv(t,r)})}function Xv(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Uh(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Gh(t))}function xm(t,e,n){for(const r of n)r instanceof Hv?(t.Tu.addReference(r.key,e),TS(t,r)):r instanceof zv?(re(zh,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||Xv(t,r.key)):ue(19791,{mu:r})}function TS(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(re(zh,"New document in limbo: "+n),t.lu.add(r),Gh(t))}function Gh(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new le(Ve.fromString(e)),r=t.du.next();t.Pu.set(r,new uS(n)),t.hu=t.hu.insert(n,r),Vv(t.remoteStore,new Tr(Pn(Rh(n.path)),r,"TargetPurposeLimboResolution",Cl.le))}}async function Po(t,e,n){const r=ge(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Vh.Rs(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,m=>j.forEach(m.ds,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>j.forEach(m.As,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!ai(f))throw f;re(Mh,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.xs.get(m),C=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(C);d.xs=d.xs.insert(m,P)}}}(r.localStore,i))}async function ES(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){re(zh,"User change. New user:",e.toKey());const r=await Dv(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Q(M.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Po(n,r.ks)}}function IS(t,e){const n=ge(t),r=n.Pu.get(e);if(r&&r._u)return Ae().add(r.key);{let s=Ae();const i=n.cu.get(e);if(!i)return s;for(const o of i){const l=n.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Yv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yS.bind(null,e),e.au.j_=oS.bind(null,e.eventManager),e.au.Vu=aS.bind(null,e.eventManager),e}function AS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wS.bind(null,e),e}class el{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return SC(this.persistence,new bC,e.initialUser,this.serializer)}yu(e){return new xv(Oh.fi,this.serializer)}pu(e){return new VC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}el.provider={build:()=>new el};class bS extends el{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Se(this.persistence.referenceDelegate instanceof Ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uC(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new xv(r=>Ja.fi(r,n),this.serializer)}}class Su{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iS}()}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),r=function(i){return new $C(i)}(e.databaseInfo);return function(i,o,l,c){return new HC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new GC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>km(this.syncEngine,n,0),function(){return Am.C()?new Am:new MC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const f=new hS(s,i,o,l,c,u);return d&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);re(rs,"RemoteStore shutting down."),i.Ta.add(5),await So(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Su.provider={build:()=>new Su};/**
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
 */class Jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Q(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=ge(s),l={documents:i.map(f=>Ya(o.serializer,f))},c=await o.Yo("BatchGetDocuments",o.serializer.databaseId,Ve.emptyPath(),l,i.length),u=new Map;c.forEach(f=>{const m=WR(o.serializer,f);u.set(m.key.toString(),m)});const d=[];return i.forEach(f=>{const m=u.get(f.toString());Se(!!m,55234,{key:f}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ph(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=le.fromPath(r);this.mutations.push(new _v(s,this.precondition(s)))}),await async function(r,s){const i=ge(r),o={writes:s.map(l=>Rv(i.serializer,l))};await i.zo("Commit",i.serializer.databaseId,Ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ue(50498,{qu:e.constructor.name});n=de.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Q(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(de.min())?qt.exists(!1):qt.updateTime(n):qt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(de.min()))throw new Q(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return qt.updateTime(n)}return qt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class CS{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new Lh(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new RS(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!bo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!yv(n)}return!1}}/**
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
 */const Lr="FirestoreClient";class SS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=By.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re(Lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re(Lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(t,e){t.asyncQueue.verifyOperationInProgress(),re(Lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PS(t);re(Lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Rm(e.remoteStore,s)),t._onlineComponents=e}async function PS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re(Lr,"Using user provided OfflineComponentProvider");try{await Oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Oc(t,new el)}}else re(Lr,"Using default OfflineComponentProvider"),await Oc(t,new bS(void 0));return t._offlineComponents}async function Wh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re(Lr,"Using user provided OnlineComponentProvider"),await Dm(t,t._uninitializedComponentsProvider._online)):(re(Lr,"Using default OnlineComponentProvider"),await Dm(t,new Su))),t._onlineComponents}function kS(t){return Wh(t).then(e=>e.syncEngine)}function xS(t){return Wh(t).then(e=>e.datastore)}async function Zv(t){const e=await Wh(t),n=e.eventManager;return n.onListen=dS.bind(null,e.syncEngine),n.onUnlisten=mS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gS.bind(null,e.syncEngine),n}function DS(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Jv({next:m=>{d.Cu(),o.enqueueAndForget(()=>jv(i,f));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new Q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new qv(Rh(l.path),d,{includeMetadataChanges:!0,La:!0});return Bv(i,f)}(await Zv(t),t.asyncQueue,e,n,r)),r.promise}function NS(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Jv({next:m=>{d.Cu(),o.enqueueAndForget(()=>jv(i,f)),m.fromCache&&c.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new qv(l,d,{includeMetadataChanges:!0,La:!0});return Bv(i,f)}(await Zv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function e0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */function t0(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OS(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Om(t){if(!le.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vm(t){if(le.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ul(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const n0="firestore.googleapis.com",Mm=!0;class Lm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n0,this.ssl=Mm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Mm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lC)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=e0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new B2;switch(r.type){case"firstParty":return new z2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nm.get(n);r&&(re("ComponentProvider","Removing Datastore"),Nm.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;t=ss(t,Fl);const i=ls(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(ch(`https://${c}`),uh("Firestore",!0)),o.host!==n0&&o.host!==c&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!es(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=St.MOCK_USER;else{d=W_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new St(m)}t._authCredentials=new j2(new Fy(d,f))}}/**
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
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Pr extends rr{constructor(e,n,r){super(e,n,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new le(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function ei(t,e,...n){if(t=He(t),t0("collection","path",e),t instanceof Fl){const r=Ve.fromString(e,...n);return Vm(r),new Pr(t,null,r)}{if(!(t instanceof zt||t instanceof Pr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Vm(r),new Pr(t.firestore,null,r)}}function tl(t,e,...n){if(t=He(t),arguments.length===1&&(e=By.newId()),t0("doc","path",e),t instanceof Fl){const r=Ve.fromString(e,...n);return Om(r),new zt(t,null,new le(r))}{if(!(t instanceof zt||t instanceof Pr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Om(r),new zt(t.firestore,t instanceof Pr?t.converter:null,new le(r))}}/**
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
 */const Um="AsyncQueue";class Fm{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Lh(this,"async_queue_retry"),this.ec=()=>{const r=Nc();r&&re(Um,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Sn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ai(e))throw e;re(Um,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Zn("INTERNAL UNHANDLED ERROR: ",$m(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=jh.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ue(47125,{_c:$m(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function $m(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ko extends Fl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Fm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fm(e),this._firestoreClient=void 0,await e}}}function MS(t,e){const n=typeof t=="object"?t:El(),r=typeof t=="string"?t:e,s=ri(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=H_("firestore");i&&VS(s,...i)}return s}function $l(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LS(t),t._firestoreClient}function LS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new oR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,e0(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new SS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(Et.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jl{constructor(e){this._methodName=e}}/**
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
 */class Kh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Qh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const US=/^__.*__$/;class FS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class r0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function s0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{hc:t})}}class Xh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return nl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(s0(this.hc)&&US.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class $S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vl(e)}gc(e,n,r,s=!1){return new Xh({hc:e,methodName:n,fc:r,path:wt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ql(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new $S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function i0(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);Jh("Data must be an object, but it was:",o,r);const l=a0(r,o);let c,u;if(i.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=Pu(e,f,n);if(!o.contains(m))throw new Q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);c0(d,m)||d.push(m)}c=new Qt(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new FS(new Lt(l),c,u)}class Hl extends jl{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}class Yh extends jl{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new po(e.serializer,uv(e.serializer,this.wc));return new xR(e.path,n)}isEqual(e){return e instanceof Yh&&this.wc===e.wc}}function BS(t,e,n,r){const s=t.gc(1,e,n);Jh("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();Fr(r,(c,u)=>{const d=Zh(e,c,n);u=He(u);const f=s.Ac(d);if(u instanceof Hl)i.push(d);else{const m=xo(u,f);m!=null&&(i.push(d),o.set(d,m))}});const l=new Qt(i);return new r0(o,l,s.fieldTransforms)}function jS(t,e,n,r,s,i){const o=t.gc(1,e,n),l=[Pu(e,r,n)],c=[s];if(i.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Pu(e,i[m])),c.push(i[m+1]);const u=[],d=Lt.empty();for(let m=l.length-1;m>=0;--m)if(!c0(u,l[m])){const g=l[m];let C=c[m];C=He(C);const P=o.Ac(g);if(C instanceof Hl)u.push(g);else{const A=xo(C,P);A!=null&&(u.push(g),d.set(g,A))}}const f=new Qt(u);return new r0(d,f,o.fieldTransforms)}function o0(t,e,n,r=!1){return xo(n,t.gc(r?4:3,e))}function xo(t,e){if(l0(t=He(t)))return Jh("Unsupported field value:",e,t),a0(t,e);if(t instanceof jl)return function(r,s){if(!s0(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=xo(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Xa(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xa(s.serializer,i)}}if(r instanceof Kh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:Ev(s.serializer,r._byteString)};if(r instanceof zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qh)return function(o,l){return{mapValue:{fields:{[Qy]:{stringValue:Xy},[Ga]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Sh(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Ul(r)}`)}(t,e)}function a0(t,e){const n={};return qy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,s)=>{const i=xo(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function l0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Kh||t instanceof is||t instanceof zt||t instanceof jl||t instanceof Qh)}function Jh(t,e,n){if(!l0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ul(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function Pu(t,e,n){if((e=He(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return Zh(t,e);throw nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const qS=new RegExp("[~\\*/\\[\\]]");function Zh(t,e,n){if(e.search(qS)>=0)throw nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch{throw nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(M.INVALID_ARGUMENT,l+t+c)}function c0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mo{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HS extends mo{data(){return super.data()}}function ed(t,e){return typeof e=="string"?Zh(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}/**
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
 */function zS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class td{}class zl extends td{}function ku(t,e,...n){let r=[];e instanceof td&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof rd).length,l=i.filter(c=>c instanceof nd).length;if(o>1||o>0&&l>0)throw new Q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class nd extends zl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nd(e,n,r)}_apply(e){const n=this._parse(e);return u0(e._query,n),new rr(e.firestore,e.converter,wu(e._query,n))}_parse(e){const n=ql(e.firestore);return function(i,o,l,c,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){qm(f,d);const C=[];for(const P of f)C.push(jm(c,i,P));m={arrayValue:{values:C}}}else m=jm(c,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||qm(f,d),m=o0(l,o,f,d==="in"||d==="not-in");return rt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class rd extends td{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)u0(o,c),o=wu(o,c)}(e._query,n),new rr(e.firestore,e.converter,wu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sd extends zl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uo(i,o)}(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new us(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function xu(t,e="asc"){const n=e,r=ed("orderBy",t);return sd._create(r,n)}class id extends zl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new id(e,n,r)}_apply(e){return new rr(e.firestore,e.converter,Ka(e._query,this._limit,this._limitType))}}function Bm(t){return id._create("limit",t,"F")}class od extends zl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new od(e,n,r)}_apply(e){const n=WS(e,this.type,this._docOrFields,this._inclusive);return new rr(e.firestore,e.converter,function(s,i){return new us(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function GS(...t){return od._create("startAfter",t,!1)}function WS(t,e,n,r){if(n[0]=He(n[0]),n[0]instanceof mo)return function(i,o,l,c,u){if(!c)throw new Q(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const f of js(i))if(f.field.isKeyField())d.push(Wa(o,c.key));else{const m=c.data.field(f.field);if(Sl(m))throw new Q(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new Q(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ys(d,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=ql(t.firestore);return function(o,l,c,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new Q(M.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let C=0;C<d.length;C++){const P=d[C];if(m[C].field.isKeyField()){if(typeof P!="string")throw new Q(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof P}`);if(!Ch(o)&&P.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${P}' contains a slash.`);const A=o.path.child(Ve.fromString(P));if(!le.isDocumentKey(A))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${A}' is not because it contains an odd number of segments.`);const O=new le(A);g.push(Wa(l,O))}else{const A=o0(c,u,P);g.push(A)}}return new Ys(g,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function jm(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ch(e)&&n.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!le.isDocumentKey(r))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wa(t,new le(r))}if(n instanceof zt)return Wa(t,n._key);throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ul(n)}.`)}function qm(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function u0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class h0{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ga].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new Qh(i)}convertGeoPoint(e){return new Kh(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Se(Pv(r),9688,{name:e});const s=new lo(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function d0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class KS extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}/**
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
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ad extends mo{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ed("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ra extends ad{data(e={}){return super.data(e)}}class QS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ra(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ra(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ra(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:XS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
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
 */function YS(t){t=ss(t,zt);const e=ss(t.firestore,ko);return DS($l(e),t._key).then(n=>ZS(e,t,n))}class ld extends h0{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function cd(t){t=ss(t,rr);const e=ss(t.firestore,ko),n=$l(e),r=new ld(e);return zS(t._query),NS(n,t._query).then(s=>new QS(e,r,t,s))}function f0(t,e){const n=ss(t.firestore,ko),r=tl(t),s=d0(t.converter,e);return JS(n,[i0(ql(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function JS(t,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>_S(await kS(r),s,i)),i.promise}($l(t),e)}function ZS(t,e,n){const r=n.docs.get(e._key),s=new ld(t);return new ad(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const eP={maxAttempts:5};function xi(t,e){if((t=He(t)).firestore!==e)throw new Q(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class tP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ql(e)}get(e){const n=xi(e,this._firestore),r=new KS(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return ue(24041);const i=s[0];if(i.isFoundDocument())return new mo(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new mo(this._firestore,r,n._key,null,n.converter);throw ue(18433,{doc:i})})}set(e,n,r){const s=xi(e,this._firestore),i=d0(s.converter,n,r),o=i0(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=xi(e,this._firestore);let o;return o=typeof(n=He(n))=="string"||n instanceof Bl?jS(this._dataReader,"Transaction.update",i._key,n,r,s):BS(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=xi(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class nP extends tP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=xi(e,this._firestore),r=new ld(this._firestore);return super.get(e).then(s=>new ad(this._firestore,r,n._key,s._document,new xs(!1,!1),n.converter))}}function rP(t,e,n){t=ss(t,ko);const r=Object.assign(Object.assign({},eP),n);return function(i){if(i.maxAttempts<1)throw new Q(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,l){const c=new Sn;return i.asyncQueue.enqueueAndForget(async()=>{const u=await xS(i);new CS(i.asyncQueue,u,l,o,c).$u()}),c.promise}($l(t),s=>e(new nP(t,s)),r)}function Hm(t){return new Yh("increment",t)}(function(e,n=!0){(function(s){ii=s})(cs),Xn(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ko(new q2(r.getProvider("auth-internal")),new G2(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pn(zp,Gp,e),pn(zp,Gp,"esm2017")})();/**
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
 */const p0="firebasestorage.googleapis.com",m0="storageBucket",sP=2*60*1e3,iP=10*60*1e3,oP=1e3;/**
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
 */class Xe extends Vn{constructor(e,n,r=0){super(Vc(e),`Firebase Storage: ${n} (${Vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Vc(t){return"storage/"+t}function ud(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(qe.UNKNOWN,t)}function aP(t){return new Xe(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lP(t){return new Xe(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(qe.UNAUTHENTICATED,t)}function uP(){return new Xe(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hP(t){return new Xe(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function g0(){return new Xe(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _0(){return new Xe(qe.CANCELED,"User canceled the upload/download.")}function dP(t){return new Xe(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function fP(t){return new Xe(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pP(){return new Xe(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+m0+"' property when initializing the app?")}function y0(){return new Xe(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mP(){return new Xe(qe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function gP(){return new Xe(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _P(t){return new Xe(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Du(t){return new Xe(qe.INVALID_ARGUMENT,t)}function v0(){return new Xe(qe.APP_DELETED,"The Firebase app was deleted.")}function yP(t){return new Xe(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(t,e){return new Xe(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ri(t){throw new Xe(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw fP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},P=n===p0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",O=new RegExp(`^https?://${P}/${s}/${A}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:g,indices:C,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<L.length;U++){const ie=L[U],te=ie.regex.exec(e);if(te){const R=te[ie.indices.bucket];let v=te[ie.indices.path];v||(v=""),r=new Xt(R,v),ie.postModify(r);break}}if(r==null)throw dP(e);return r}}class vP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...A){u||(u=!0,e.apply(null,A))}function f(A){s=setTimeout(()=>{s=null,t(g,c())},A)}function m(){i&&clearTimeout(i)}function g(A,...O){if(u){m();return}if(A){m(),d.call(null,A,...O);return}if(c()||o){m(),d.call(null,A,...O);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,f(L)}let C=!1;function P(A){C||(C=!0,m(),!u&&(s!==null?(A||(l=2),clearTimeout(s),f(0)):A||(l=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function TP(t){t(!1)}/**
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
 */function EP(t){return t!==void 0}function IP(t){return typeof t=="function"}function AP(t){return typeof t=="object"&&!Array.isArray(t)}function Gl(t){return typeof t=="string"||t instanceof String}function zm(t){return hd()&&t instanceof Blob}function hd(){return typeof Blob<"u"}function Gm(t,e,n,r){if(r<e)throw Du(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Du(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Do(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function w0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
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
 */function T0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class bP{constructor(e,n,r,s,i,o,l,c,u,d,f,m=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new aa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Jr.NO_ERROR,c=i.getStatus();if(!l||T0(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Jr.ABORT;r(!1,new aa(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new aa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());EP(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=ud();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?v0():_0();o(c)}else{const c=g0();o(c)}};this.canceled_?n(!1,new aa(!1,null,!0)):this.backoffId_=wP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class aa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function RP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kP(t,e,n,r,s,i,o=!0,l=!1){const c=w0(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return SP(d,e),RP(d,n),CP(d,i),PP(d,r),new bP(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function xP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DP(...t){const e=xP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hd())return new Blob(t);throw new Xe(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function NP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function OP(t){if(typeof atob>"u")throw _P("base-64");return atob(t)}/**
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
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mc{constructor(e,n){this.data=e,this.contentType=n||null}}function VP(t,e){switch(t){case An.RAW:return new Mc(E0(e));case An.BASE64:case An.BASE64URL:return new Mc(I0(t,e));case An.DATA_URL:return new Mc(LP(e),UP(e))}throw ud()}function E0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function MP(t){let e;try{e=decodeURIComponent(t)}catch{throw Gi(An.DATA_URL,"Malformed data URL.")}return E0(e)}function I0(t,e){switch(t){case An.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Gi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Gi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OP(e)}catch(s){throw s.message.includes("polyfill")?s:Gi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class A0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gi(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=FP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function LP(t){const e=new A0(t);return e.base64?I0(An.BASE64,e.rest):MP(e.rest)}function UP(t){return new A0(t).contentType}function FP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class wr{constructor(e,n){let r=0,s="";zm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(zm(this.data_)){const r=this.data_,s=NP(r,e,n);return s===null?null:new wr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wr(r,!0)}}static getBlob(...e){if(hd()){const n=e.map(r=>r instanceof wr?r.data_:r);return new wr(DP.apply(null,n))}else{const n=e.map(o=>Gl(o)?VP(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new wr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function b0(t){let e;try{e=JSON.parse(t)}catch{return null}return AP(e)?e:null}/**
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
 */function $P(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function R0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function jP(t,e){return e}class Nt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||jP}}let la=null;function qP(t){return!Gl(t)||t.length<2?t:R0(t)}function C0(){if(la)return la;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(i,o){return qP(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Nt("size");return s.xform=r,t.push(s),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),la=t,la}function HP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return HP(r,t),r}function S0(t,e,n){const r=b0(e);return r===null?null:zP(t,r,n)}function GP(t,e,n,r){const s=b0(e);if(s===null||!Gl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=Do(m,n,r),C=w0({alt:"media",token:u});return g+C})[0]}function P0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ci{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function zn(t){if(!t)throw ud()}function dd(t,e){function n(r,s){const i=S0(t,s,e);return zn(i!==null),i}return n}function WP(t,e){function n(r,s){const i=S0(t,s,e);return zn(i!==null),GP(i,s,t.host,t._protocol)}return n}function No(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=uP():s=cP():n.getStatus()===402?s=lP(t.bucket):n.getStatus()===403?s=hP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function k0(t){const e=No(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aP(t.path)),i.serverResponse=s.serverResponse,i}return n}function KP(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ci(s,i,dd(t,n),o);return l.errorHandler=k0(e),l}function QP(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ci(s,i,WP(t,n),o);return l.errorHandler=k0(e),l}function XP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function x0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=XP(null,e)),r}function YP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let U=0;U<2;U++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=x0(e,r,s),d=P0(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=wr.getBlob(f,r,m);if(g===null)throw y0();const C={name:u.fullPath},P=Do(i,t.host,t._protocol),A="POST",O=t.maxUploadRetryTime,V=new ci(P,A,dd(t,n),O);return V.urlParams=C,V.headers=o,V.body=g.uploadData(),V.errorHandler=No(e),V}class rl{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function fd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function JP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=x0(e,r,s),l={name:o.fullPath},c=Do(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=P0(o,n),m=t.maxUploadRetryTime;function g(P){fd(P);let A;try{A=P.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(Gl(A)),A}const C=new ci(c,u,g,m);return C.urlParams=l,C.headers=d,C.body=f,C.errorHandler=No(e),C}function ZP(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=fd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}f||zn(!1);const m=Number(f);return zn(!isNaN(m)),new rl(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,c=new ci(n,o,i,l);return c.headers=s,c.errorHandler=No(e),c}const Wm=256*1024;function e4(t,e,n,r,s,i,o,l){const c=new rl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw mP();const u=c.total-c.current;let d=u;s>0&&(d=Math.min(d,s));const f=c.current,m=f+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const C={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},P=r.slice(f,m);if(P===null)throw y0();function A(U,ie){const te=fd(U,["active","final"]),R=c.current+d,v=r.size();let y;return te==="final"?y=dd(e,i)(U,ie):y=null,new rl(R,v,te==="final",y)}const O="POST",V=e.maxUploadRetryTime,L=new ci(n,O,A,V);return L.headers=C,L.body=P.uploadData(),L.progressCallback=l||null,L.errorHandler=No(t),L}const jt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Lc(t){switch(t){case"running":case"pausing":case"canceling":return jt.RUNNING;case"paused":return jt.PAUSED;case"success":return jt.SUCCESS;case"canceled":return jt.CANCELED;case"error":return jt.ERROR;default:return jt.ERROR}}/**
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
 */class t4{constructor(e,n,r){if(IP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function ws(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class n4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ri("cannot .send() more than once");if(ls(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class r4 extends n4{initXhr(){this.xhr_.responseType="text"}}function Ps(){return new r4}/**
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
 */class s4{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=C0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(qe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(T0(s.status,[]))if(i)s=g0();else{this.sleepTime=Math.max(this.sleepTime*2,oP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(qe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=JP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ps,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=ZP(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ps,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Wm*this._chunkMultiplier,n=new rl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=e4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ps,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Wm*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=KP(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ps,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=YP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ps,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Lc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new t4(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Lc(this._state)){case jt.SUCCESS:ws(this._resolve.bind(null,this.snapshot))();break;case jt.CANCELED:case jt.ERROR:const n=this._reject;ws(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Lc(this._state)){case jt.RUNNING:case jt.PAUSED:e.next&&ws(e.next.bind(e,this.snapshot))();break;case jt.SUCCESS:e.complete&&ws(e.complete.bind(e))();break;case jt.CANCELED:case jt.ERROR:e.error&&ws(e.error.bind(e,this._error))();break;default:e.error&&ws(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class os{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return R0(this._location.path)}get storage(){return this._service}get parent(){const e=$P(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yP(e)}}function i4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new s4(t,new wr(e),n)}function o4(t){t._throwIfRoot("getDownloadURL");const e=QP(t.storage,t._location,C0());return t.storage.makeRequestWithTokens(e,Ps).then(n=>{if(n===null)throw gP();return n})}function a4(t,e){const n=BP(t._location.path,e),r=new Xt(t._location.bucket,n);return new os(t.storage,r)}/**
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
 */function l4(t){return/^[A-Za-z]+:\/\//.test(t)}function c4(t,e){return new os(t,e)}function D0(t,e){if(t instanceof pd){const n=t;if(n._bucket==null)throw pP();const r=new os(n,n._bucket);return e!=null?D0(r,e):r}else return e!==void 0?a4(t,e):t}function u4(t,e){if(e&&l4(e)){if(t instanceof pd)return c4(t,e);throw Du("To use ref(service, url), the first argument must be a Storage instance.")}else return D0(t,e)}function Km(t,e){const n=e==null?void 0:e[m0];return n==null?null:Xt.makeFromBucketSpec(n,t)}function h4(t,e,n,r={}){t.host=`${e}:${n}`;const s=ls(e);s&&(ch(`https://${t.host}`),uh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:W_(i,t.app.options.projectId))}class pd{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=p0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sP,this._maxUploadRetryTime=iP,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=Km(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=Km(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new vP(v0());{const o=kP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Qm="@firebase/storage",Xm="0.13.12";/**
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
 */const N0="storage";function d4(t,e,n){return t=He(t),i4(t,e,n)}function f4(t){return t=He(t),o4(t)}function p4(t,e){return t=He(t),u4(t,e)}function m4(t=El(),e){t=He(t);const r=ri(t,N0).getImmediate({identifier:e}),s=H_("storage");return s&&g4(r,...s),r}function g4(t,e,n,r={}){h4(t,e,n,r)}function _4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new pd(n,r,s,e,cs)}function y4(){Xn(new Nn(N0,_4,"PUBLIC").setMultipleInstances(!0)),pn(Qm,Xm,""),pn(Qm,Xm,"esm2017")}y4();/**
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
 */const Nu=new Map,O0={activated:!1,tokenObservers:[]},v4={initialized:!1,enabled:!1};function lt(t){return Nu.get(t)||Object.assign({},O0)}function w4(t,e){return Nu.set(t,e),Nu.get(t)}function Wl(){return v4}/**
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
 */const V0="https://content-firebaseappcheck.googleapis.com/v1",T4="exchangeRecaptchaV3Token",E4="exchangeDebugToken",Ym={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},I4=24*60*60*1e3;/**
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
 */class A4{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ro,this.pending.promise.catch(n=>{}),await b4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ro,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function b4(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const R4={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ht=new ni("appCheck","AppCheck",R4);/**
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
 */function Jm(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function md(t){if(!lt(t).activated)throw Ht.create("use-before-activation",{appName:t.name})}function M0(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=ca(n)+"d:"),r&&(o+=ca(r)+"h:"),o+=ca(s)+"m:"+ca(i)+"s",o}function ca(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function gd({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(f){throw Ht.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw Ht.create("fetch-status-error",{httpStatus:o.status});let l;try{l=await o.json()}catch(f){throw Ht.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const c=l.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Ht.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const u=Number(c[1])*1e3,d=Date.now();return{token:l.token,expireTimeMillis:d+u,issuedAtTimeMillis:d}}function C4(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${V0}/projects/${n}/apps/${r}:${T4}?key=${s}`,body:{recaptcha_v3_token:e}}}function L0(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${V0}/projects/${n}/apps/${r}:${E4}?key=${s}`,body:{debug_token:e}}}/**
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
 */const S4="firebase-app-check-database",P4=1,go="firebase-app-check-store",U0="debug-token";let ua=null;function F0(){return ua||(ua=new Promise((t,e)=>{try{const n=indexedDB.open(S4,P4);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ht.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(go,{keyPath:"compositeKey"})}}}catch(n){e(Ht.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ua)}function k4(t){return B0(j0(t))}function x4(t,e){return $0(j0(t),e)}function D4(t){return $0(U0,t)}function N4(){return B0(U0)}async function $0(t,e){const r=(await F0()).transaction(go,"readwrite"),i=r.objectStore(go).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(Ht.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function B0(t){const n=(await F0()).transaction(go,"readonly"),s=n.objectStore(go).get(t);return new Promise((i,o)=>{s.onsuccess=l=>{const c=l.target.result;i(c?c.value:void 0)},n.onerror=l=>{var c;o(Ht.create("storage-get",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function j0(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Er=new Tl("@firebase/app-check");/**
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
 */async function O4(t){if(hh()){let e;try{e=await k4(t)}catch(n){Er.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Uc(t,e){return hh()?x4(t,e).catch(n=>{Er.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function V4(){let t;try{t=await N4()}catch{}if(t)return t;{const e=crypto.randomUUID();return D4(e).catch(n=>Er.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function _d(){return Wl().enabled}async function yd(){const t=Wl();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function M4(){const t=j_(),e=Wl();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new ro;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(V4())}/**
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
 */const L4={error:"UNKNOWN_ERROR"};function U4(t){return lh.encodeString(JSON.stringify(t),!1)}async function Ou(t,e=!1,n=!1){const r=t.app;md(r);const s=lt(r);let i=s.token,o;if(i&&!Ds(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Ds(u)?i=u:await Uc(r,void 0))}if(!e&&i&&Ds(i))return{token:i.token};let l=!1;if(_d())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=gd(L0(r,await yd()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),l=!0);const u=await s.exchangeTokenPromise;return await Uc(r,u),s.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Er.warn(u.message):n&&Er.error(u),Fc(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await lt(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Er.warn(u.message):n&&Er.error(u),o=u}let c;return i?o?Ds(i)?c={token:i.token,internalError:o}:c=Fc(o):(c={token:i.token},s.token=i,await Uc(r,i)):c=Fc(o),l&&z0(r,c),c}async function F4(t){const e=t.app;md(e);const{provider:n}=lt(e);if(_d()){const r=await yd(),{token:s}=await gd(L0(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function q0(t,e,n,r){const{app:s}=t,i=lt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ds(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Zm(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Zm(t))}function H0(t,e){const n=lt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Zm(t){const{app:e}=t,n=lt(e);let r=n.tokenRefresher;r||(r=$4(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function $4(t){const{app:e}=t;return new A4(async()=>{const n=lt(e);let r;if(n.token?r=await Ou(t,!0):r=await Ou(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=lt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Ym.RETRIAL_MIN_WAIT,Ym.RETRIAL_MAX_WAIT)}function z0(t,e){const n=lt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ds(t){return t.expireTimeMillis-Date.now()>0}function Fc(t){return{token:U4(L4),error:t}}/**
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
 */class B4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=lt(this.app);for(const n of e)H0(this.app,n.next);return Promise.resolve()}}function j4(t,e){return new B4(t,e)}function q4(t){return{getToken:e=>Ou(t,e),getLimitedUseToken:()=>F4(t),addTokenListener:e=>q0(t,"INTERNAL",e),removeTokenListener:e=>H0(t.app,e)}}const H4="@firebase/app-check",z4="0.10.0";/**
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
 */const G4="https://www.google.com/recaptcha/api.js";function W4(t,e){const n=new ro,r=lt(t);r.reCAPTCHAState={initialized:n};const s=K4(t),i=Jm(!1);return i?eg(t,e,i,s,n):Y4(()=>{const o=Jm(!1);if(!o)throw new Error("no recaptcha");eg(t,e,o,s,n)}),n.promise}function eg(t,e,n,r,s){n.ready(()=>{X4(t,e,n,r),s.resolve(n)})}function K4(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Q4(t){md(t);const n=await lt(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=lt(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function X4(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{lt(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{lt(t).reCAPTCHAState.succeeded=!1}}),i=lt(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function Y4(t){const e=document.createElement("script");e.src=G4,e.onload=t,document.head.appendChild(e)}/**
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
 */class vd{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;Z4(this._throttleData);const s=await Q4(this._app).catch(o=>{throw Ht.create("recaptcha-error")});if(!(!((e=lt(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Ht.create("recaptcha-error");let i;try{i=await gd(C4(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=J4(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Ht.create("initial-throttle",{time:M0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=ri(e,"heartbeat"),W4(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof vd?this._siteKey===e._siteKey:!1}}function J4(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+I4,httpStatus:t};{const n=e?e.backoffCount:0,r=kI(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Z4(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Ht.create("throttled",{time:M0(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function e6(t=El(),e){t=He(t);const n=ri(t,"app-check");if(Wl().initialized||M4(),_d()&&yd().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw Ht.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return t6(t,e.provider,e.isTokenAutoRefreshEnabled),lt(t).isTokenAutoRefreshEnabled&&q0(r,"INTERNAL",()=>{}),r}function t6(t,e,n=!1){const r=w4(t,Object.assign({},O0));r.activated=!0,r.provider=e,r.cachedTokenPromise=O4(t).then(s=>(s&&Ds(s)&&(r.token=s,z0(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&Er.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const n6="app-check",tg="app-check-internal";function r6(){Xn(new Nn(n6,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return j4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(tg).initialize()})),Xn(new Nn(tg,t=>{const e=t.getProvider("app-check").getImmediate();return q4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),pn(H4,z4)}r6();const s6={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},Kl=X_(s6),kn=MS(Kl,"bha-brother-shout-433"),_o=F2(Kl),i6=m4(Kl);e6(Kl,{provider:new vd("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const wd=we(null),G0=$e(()=>{var t;return(t=wd.value)==null?void 0:t.uid}),o6=$e(()=>W0(G0.value)),W0=t=>t?"Bhai "+t.slice(-3):"Bhai Anon";Cb(_o,t=>{wd.value=t});function fs(){return{userId:G0,currentUser:wd,userName:o6,getUserName:W0,signInAnonymously:()=>wy(_o),logout:()=>Sb(_o)}}const Vu=we(0),Ca=ti([]);let a6=0;function hn(t,e="info",n=5e3){const r=a6++;Ca.push({id:r,message:t,type:e}),n&&setTimeout(()=>{const s=Ca.findIndex(i=>i.id===r);s!==-1&&Ca.splice(s,1)},n)}const l6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function c6(t,e){return H(),X("svg",l6,e[0]||(e[0]=[D("path",{d:"M3 20v-6l8-2-8-2V4l19 8z"},null,-1)]))}const K0={render:c6},gt=[];for(let t=0;t<256;++t)gt.push((t+256).toString(16).slice(1));function u6(t,e=0){return(gt[t[e+0]]+gt[t[e+1]]+gt[t[e+2]]+gt[t[e+3]]+"-"+gt[t[e+4]]+gt[t[e+5]]+"-"+gt[t[e+6]]+gt[t[e+7]]+"-"+gt[t[e+8]]+gt[t[e+9]]+"-"+gt[t[e+10]]+gt[t[e+11]]+gt[t[e+12]]+gt[t[e+13]]+gt[t[e+14]]+gt[t[e+15]]).toLowerCase()}let $c;const h6=new Uint8Array(16);function d6(){if(!$c){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");$c=crypto.getRandomValues.bind(crypto)}return $c(h6)}const f6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ng={randomUUID:f6};function p6(t,e,n){var s;if(ng.randomUUID&&!t)return ng.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??d6();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,u6(r)}const m6={class:"photo-gallery"},g6={class:"photo-gallery__photos"},_6={class:"photo-gallery__photos__item add-image"},y6={class:"aspect-wide"},v6={class:"aspect-wide__wrap flex"},w6={class:"uploader"},T6={class:"aspect-wide"},E6=["progress"],I6=["src"],A6=Ze({__name:"PhotoUploader",emits:["change"],setup(t,{emit:e}){const n=e,{currentUser:r,signInAnonymously:s}=fs(),i=we(4),o=we([]),l=$e(()=>o.value.slice(0,i.value-1)),c=$e(()=>o.value.length>l.value.length),u=async f=>{var C;if(!r.value)try{await s()}catch(P){console.error(P),hn("Can not get private ID","error")}if(!r.value){hn("Please sign in to upload files","error");return}const m=((C=r.value)==null?void 0:C.uid)||"anonymous",g=f.target.files;g&&Array.from(g).forEach(P=>{const A=ti({progress:0,url:null});o.value.push(A);const O=p6(),V=p4(i6,`userId/${m}/${O}_${P.name}`),L=d4(V,P);L.on("state_changed",U=>{A.progress=Math.round(U.bytesTransferred/U.totalBytes*100)},U=>{hn(`Upload failed for ${P.name}:`,"error")},async()=>{A.url=await f4(L.snapshot.ref),n("change",o.value.map(U=>U.url))})})},d=()=>{c.value=!0,hn("Preview opened","info")};return(f,m)=>(H(),X("div",m6,[D("div",g6,[D("div",_6,[D("div",y6,[D("div",v6,[D("label",w6,[m[0]||(m[0]=D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24"},[D("path",{fill:"currentColor",d:"m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"}),D("path",{fill:"currentColor",d:"M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"}),D("path",{fill:"currentColor",d:"m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"})],-1)),m[1]||(m[1]=Fe(" যোগ করুন ")),D("input",{type:"file",multiple:"",onChange:u},null,32)])])])]),(H(!0),X(Ie,null,Kn(l.value,(g,C)=>(H(),X("div",{key:C,class:"photo-gallery__photos__item"},[D("div",T6,[D("div",{class:xn(["aspect-wide__wrap",{skeleton:g.progress<100}]),progress:g.progress},[g.url?(H(),X("img",{key:0,src:g.url,alt:"Uploaded file",class:"photo-image"},null,8,I6)):Tt("",!0),c.value&&l.value.length-1==C?(H(),X("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:d},[D("i",null,"+"+Yt(o.value.length-l.value.length+1),1)])):Tt("",!0)],10,E6)])]))),128))])]))}}),b6=et(A6,[["__scopeId","data-v-9b912d5d"]]),R6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function C6(t,e){return H(),X("svg",R6,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8",opacity:".5"},null,-1),D("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8"},[D("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))}const S6={render:C6},Q0=Ze({__name:"Btn",props:{disabled:{type:Boolean},loading:{type:Boolean}},setup(t){return(e,n)=>(H(),X("button",null,[e.loading?(H(),Je(se(S6),{key:0,width:"24",height:"24"})):Yi(e.$slots,"default",{key:1})]))}}),P6={class:"post-add flex flex-col flex-center"},k6={key:0,class:"post-add__form flex flex-col"},x6={class:"header"},D6={class:"body flex flex-col flex-grow"},N6={class:"post-add__ctrl flex-center"},O6=Ze({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=fs(),r=we(!1),s=we(!1),i=we([]),o=we(""),l=$e(()=>!s.value&&(o.value.trim()!==""||i.value.length>0)),c=async()=>{await d(o.value.trim())},u=()=>{r.value=!1,o.value="",s.value=!1},d=async m=>{if(s.value=!0,!e.value)try{await n()}catch(g){console.error(g),hn("Can not get private ID","error")}f0(ei(kn,"shouts"),{text:m,timestamp:new Date,userId:e.value.uid,files:i.value}),u(),Vu.value=Vu.value+1},f=m=>{i.value=[...m]};return(m,g)=>(H(),X("section",P6,[r.value?(H(),X("div",k6,[D("div",x6,[D("div",{class:"flex flex-center gap-1"},[D("button",{class:"btn",onClick:u},g[2]||(g[2]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[D("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),g[3]||(g[3]=D("h2",null,"নতুন পোস্ট",-1))]),Z(Q0,{onClick:c,loading:s.value,class:"btn btn__primary",disabled:!l.value},{default:Ut(()=>[Z(se(K0),{width:"24",height:"24"})]),_:1},8,["loading","disabled"])]),D("div",D6,[Mg(D("textarea",{autofocus:"",tabindex:"0","onUpdate:modelValue":g[0]||(g[0]=C=>o.value=C),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[A_,o.value]]),Z(b6,{onChange:f})])])):Tt("",!0),D("div",N6,[D("button",{class:"btn btn__primary",onClick:g[1]||(g[1]=C=>r.value=!0)},g[4]||(g[4]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[D("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),V6={class:"right flex flex-center gap-1"},M6=Ze({__name:"AppHeader",setup(t){return(e,n)=>{const r=vo("router-link");return H(),X("header",null,[Z(r,{class:"brand",to:{name:"home"}},{default:Ut(()=>n[0]||(n[0]=[D("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[D("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),D("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),D("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),D("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),D("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),D("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),D("div",V6,[Z(O6)])])}}}),L6=et(M6,[["__scopeId","data-v-98e63b3d"]]),U6={};function F6(t,e){const n=vo("RouterLink");return H(),X("footer",null,[Z(n,{to:"/terms"},{default:Ut(()=>e[0]||(e[0]=[Fe("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=Fe(" | ")),Z(n,{to:"/privacy"},{default:Ut(()=>e[1]||(e[1]=[Fe("Privacy Policy")])),_:1,__:[1]})])}const $6=et(U6,[["render",F6],["__scopeId","data-v-9677e4fd"]]),B6={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=vo("router-view");return H(),X(Ie,null,[Z(L6),D("main",null,[Z(r)]),Z($6)],64)}}},j6=et(B6,[["__scopeId","data-v-b21eda16"]]),q6={};function H6(t,e){return H(),X("section",null,e[0]||(e[0]=[D("h2",null,"About",-1),D("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const z6=et(q6,[["render",H6]]),G6={key:0,class:"modal fixed inset-0 z-50 flex items-center justify-center"},X0={__name:"modal",props:{show:Boolean},emits:["close"],setup(t,{emit:e}){const n=e,r=we(null),s=()=>n("close"),i=l=>{r.value&&!r.value.contains(l.target)&&s()},o=l=>{l.key==="Escape"&&s()};return Ur(()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",o)}),th(()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",o)}),(l,c)=>(H(),Je(Fg,{to:"body"},[t.show?(H(),X("div",G6,[D("div",{class:"absolute backrdop w-full h-full",onClick:s}),D("button",{onClick:s,class:"absolute btn-close"},c[0]||(c[0]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[D("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),D("div",{ref_key:"modalRef",ref:r,class:"relative z-10 max-w-md w-full"},[Yi(l.$slots,"default")],512)])):Tt("",!0)]))}},W6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function K6(t,e){return H(),X("svg",W6,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"},null,-1)]))}const Q6={render:K6},X6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function Y6(t,e){return H(),X("svg",X6,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M13.794 2.642c4.68.9 7.86 4.954 7.7 9.773-.147 4.444-3.742 8.318-8.27 8.873a9.55 9.55 0 0 1-5.318-.86 1.37 1.37 0 0 0-.84-.082c-1.356.325-2.701.694-4.05 1.045-.148.038-.3.064-.516.109.405-1.482.783-2.904 1.187-4.32.103-.358.074-.644-.091-.995-1.575-3.345-1.438-6.627.708-9.66 2.151-3.042 5.187-4.34 8.92-3.96.176.017.351.042.57.077m5.914 11.004c.268-1.096.3-2.207.038-3.298-.788-3.288-2.834-5.419-6.16-6.093-3.263-.66-6.003.44-7.936 3.138-1.936 2.702-1.978 5.6-.38 8.503.205.373.26.68.135 1.078-.228.728-.405 1.472-.628 2.298.925-.24 1.736-.47 2.558-.65.233-.051.538-.024.742.088 4.696 2.585 10.277.2 11.63-5.064"},null,-1),D("path",{fill:"currentColor",d:"M9.745 8.158c.179.427.3.84.51 1.203.3.518.209.953-.205 1.318-.445.392-.379.725-.06 1.175.735 1.036 1.658 1.813 2.823 2.322.32.14.563.164.77-.157.086-.132.206-.24.306-.364.583-.726.4-.72 1.324-.319.291.127.582.262.851.428.27.165.68.335.732.57.118.52-.048 1.048-.482 1.434-.8.712-1.72.83-2.725.552-2.174-.6-3.846-1.904-5.127-3.71-.452-.637-.856-1.344-1.11-2.078-.308-.894-.09-1.756.546-2.513.375-.445.83-.545 1.325-.426.199.048.338.344.522.565"},null,-1)]))}const J6={render:Y6},Z6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function ek(t,e){return H(),X("svg",Z6,e[0]||(e[0]=[D("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98-3.552.23-6.771-1.959-8.633-4.875-1.236 4.197-.09 9.251 3.013 12.366 0 1.176-3 1.878-4.5 2.029",color:"currentColor"},null,-1)]))}const tk={render:ek},nk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function rk(t,e){return H(),X("svg",nk,e[0]||(e[0]=[D("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m15.988 13 3.902-3.902c1.437-1.437 1.485-3.718.107-5.095-1.377-1.378-3.658-1.33-5.095.107L11 8.012m2 7.95-3.892 3.88c-1.432 1.43-3.64 1.615-5.082.107-1.442-1.507-1.326-3.639.107-5.068L8.025 11M9 15l6-6"},null,-1)]))}const sk={render:rk},ik={class:"share"},ok={class:"share-content rounded-lg shadow-lg w-80 p-4 relative bg-2"},ak={class:"flex flex-col"},lk={class:"list-style-none flex flex-col gap-1 m-0 p-0"},ck=Ze({__name:"BtnShare",props:{postId:{}},setup(t){const e=t,n=$e(()=>encodeURIComponent(`${window.location.origin}/story/${e.postId}`)),r=we(!1),s=encodeURIComponent(document.title||"Check this out!");function i(o){let l="";switch(o){case"facebook":l=`https://www.facebook.com/sharer/sharer.php?u=${n.value}`;break;case"whatsapp":l=`https://wa.me/?text=${s}%20${n.value}`;break;case"twitter":l=`https://twitter.com/intent/tweet?text=${s}&url=${n.value}`;break;case"copy":navigator.clipboard.writeText(n.value).then(()=>hn("কপি করা হয়েছে।","info")).catch(()=>hn("সমস্যা হয়েছে","error"));return}l&&window.open(l,"_blank"),r.value=!1}return(o,l)=>(H(),X("div",ik,[D("button",{class:"opener",onClick:l[0]||(l[0]=c=>r.value=!0)},l[6]||(l[6]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[D("path",{d:"M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"})],-1),Fe(" Share ")])),Z(X0,{show:r.value,onClose:l[5]||(l[5]=c=>r.value=!1)},{default:Ut(()=>[D("div",ok,[D("div",ak,[l[11]||(l[11]=D("h2",{class:"m-0 text-center"},"Share to",-1)),l[12]||(l[12]=D("div",{class:"border-top mb-4"},null,-1)),D("ul",lk,[D("li",null,[D("button",{onClick:l[1]||(l[1]=c=>i("facebook")),class:"flex gap-1 w-full text-left"},[Z(se(Q6),{width:"1.5rem",height:"1.5rem"}),l[7]||(l[7]=Fe(" Facebook "))])]),D("li",null,[D("button",{onClick:l[2]||(l[2]=c=>i("whatsapp")),class:"w-full text-left"},[Z(se(J6),{width:"1.5rem",height:"1.5rem"}),l[8]||(l[8]=Fe(" WhatsApp "))])]),D("li",null,[D("button",{onClick:l[3]||(l[3]=c=>i("twitter")),class:"w-full text-left"},[Z(se(tk),{width:"1.5rem",height:"1.5rem"}),l[9]||(l[9]=Fe(" Twitter "))])]),D("li",null,[D("button",{onClick:l[4]||(l[4]=c=>i("copy")),class:"w-full text-left"},[Z(se(sk),{width:"1.5rem",height:"1.5rem"}),l[10]||(l[10]=Fe(" Copy Link "))])])])])])]),_:1},8,["show"])]))}}),uk=et(ck,[["__scopeId","data-v-063c3abd"]]),hk={class:"relative w-full h-full overflow-hidden"},dk={key:0,class:"absolute w-full h-full shimmer rounded"},fk=["src","alt"],Mu=Ze({__name:"ImageLoader",props:{src:{},alt:{}},setup(t){const e=t,n=we(!1);function r(){n.value=!0}return Ar(()=>e.src,(s,i)=>{s!==i&&(n.value=!1)}),(s,i)=>(H(),X("div",hk,[n.value?Tt("",!0):(H(),X("div",dk)),D("img",{src:s.src,alt:s.alt,onLoad:r,class:xn(["transition-opacity duration-700 ease-in-out w-full h-full object-cover",n.value?"opacity-100":"opacity-0"])},null,42,fk)]))}}),pk={class:"w-full relative"},mk={__name:"ImageSlider",props:{images:{type:Array,required:!0}},setup(t){const e=t,n=$e(()=>e.images.length>1&&s.value>0),r=$e(()=>e.images.length>1&&s.value<e.images.length-1),s=we(0),i=()=>{s.value=(s.value-1+e.images.length)%e.images.length},o=()=>{s.value=(s.value+1)%e.images.length};return(l,c)=>(H(),X("div",pk,[Z(Mu,{src:t.images[s.value],alt:"image",class:"w-full object-contain rounded"},null,8,["src"]),n.value?(H(),X("button",{key:0,onClick:i,class:"absolute rounded left"},c[0]||(c[0]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[D("path",{d:"m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"})],-1)]))):Tt("",!0),r.value?(H(),X("button",{key:1,onClick:o,class:"absolute rounded right"},c[1]||(c[1]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[D("path",{d:"M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"})],-1)]))):Tt("",!0)]))}},gk=et(mk,[["__scopeId","data-v-46569096"]]),_k={class:"photo-gallery"},yk={class:"photo-gallery__photos"},vk={class:"aspect-wide"},wk={class:"aspect-wide__wrap"},Tk={class:"aspect-wide"},Ek={class:"aspect-wide__wrap"},Ik=Ze({__name:"PhotoGallery",props:{files:{}},setup(t){const e=we(!1),n=t,r=we(4),s=$e(()=>{var l;return((l=n.files)==null?void 0:l.slice(0,r.value))??[]}),i=$e(()=>{var l;return((l=n.files)==null?void 0:l.length)>s.value.length}),o=()=>{hn("Preview opened","info")};return(l,c)=>(H(),X(Ie,null,[D("div",_k,[D("div",yk,[l.files.length===1?(H(),X("div",{key:0,onClick:c[0]||(c[0]=u=>e.value=!0),class:"photo-gallery__photos__item full-size"},[D("div",vk,[D("div",wk,[Z(Mu,{src:l.files[0],alt:"Picture"},null,8,["src"])])])])):(H(!0),X(Ie,{key:1},Kn(s.value,(u,d)=>(H(),X("div",{key:d,class:"photo-gallery__photos__item",onClick:c[1]||(c[1]=f=>e.value=!0)},[D("div",Tk,[D("div",Ek,[Z(Mu,{src:u,alt:"Picture"},null,8,["src"]),i.value&&s.value.length-1==d?(H(),X("div",{key:0,class:"photo-gallery__photos__blury__counter",onClick:o},[D("i",null,"+"+Yt(l.files.length-s.value.length+1),1)])):Tt("",!0)])])]))),128))])]),Z(X0,{show:e.value,onClose:c[2]||(c[2]=u=>e.value=!1)},{default:Ut(()=>[Z(gk,{images:n.files},null,8,["images"])]),_:1},8,["show"])],64))}}),Ak=et(Ik,[["__scopeId","data-v-7eeaa322"]]),bk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function Rk(t,e){return H(),X("svg",bk,e[0]||(e[0]=[D("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const Ql={render:Rk},Ck={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function Sk(t,e){return H(),X("svg",Ck,e[0]||(e[0]=[gl('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const Lu={render:Sk},Pk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function kk(t,e){return H(),X("svg",Pk,e[0]||(e[0]=[D("g",{fill:"none"},[D("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),D("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),D("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Uu={render:kk},xk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function Dk(t,e){return H(),X("svg",xk,e[0]||(e[0]=[D("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const Sa={render:Dk},Nk={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function Ok(t,e){return H(),X("svg",Nk,e[0]||(e[0]=[gl('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const Fu={render:Ok},Vk={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function Mk(t,e){return H(),X("svg",Vk,[(H(),Je(Qg("style"),null,{default:Ut(()=>e[0]||(e[0]=[Fe(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=gl('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const $u={render:Mk},Lk={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function Uk(t,e){return H(),X("svg",Lk,[(H(),Je(Qg("style"),null,{default:Ut(()=>e[0]||(e[0]=[Fe(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=gl('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Bu={render:Uk};var it=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(it||{});const Fk={key:0,class:"reaction-panel"},$k={class:"wrap flex flex-center"},Bk=Ze({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=fs(),s=we(!1),i=we(null),o=we(e.value||null),l=$e(()=>{var P;return(P=n.value)==null?void 0:P.uid}),c=()=>{g()||(s.value=!0)},u=()=>{s.value=!1},d=()=>{g()&&(i.value=setTimeout(()=>{s.value=!0},500))},f=()=>{clearTimeout(i.value)},m=async P=>{s.value=!1,o.value=P,await C(P)};function g(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const C=async P=>{const A=e.postId;l.value||await r();const O=tl(kn,"shouts",A),V=tl(kn,`shouts/${A}/reactions`,l.value);await rP(kn,async L=>{const U=await L.get(V),ie=await L.get(O);if(!ie.exists())throw new Error("Shout not found");ie.data().reactionSummary;let te=null;if(U.exists()&&(te=U.data().type),te===P)return;L.set(V,{type:P,timestamp:new Date});const R={[`reactionSummary.${P}`]:Hm(1)};te&&(R[`reactionSummary.${te}`]=Hm(-1)),L.update(O,R)})};return Ar(()=>e.value,P=>{o.value=P},{immediate:!0}),(P,A)=>(H(),X("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:c,onMouseleave:u,onTouchstart:d,onTouchend:f},[D("button",{onClick:A[0]||(A[0]=O=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===se(it).Like?(H(),X(Ie,{key:1},[Z(se(Sa),{width:"18",height:"20",fill:"#1E90FF"}),A[8]||(A[8]=D("span",{class:"color-blue"},"Like",-1))],64)):o.value===se(it).Haha?(H(),X(Ie,{key:2},[Z(se($u),{width:"22",height:"22"}),A[9]||(A[9]=D("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===se(it).Love?(H(),X(Ie,{key:3},[Z(se(Uu),{width:"22",height:"22"}),A[10]||(A[10]=Fe()),A[11]||(A[11]=D("span",{class:"color-red"},"Love",-1))],64)):o.value===se(it).Wow?(H(),X(Ie,{key:4},[Z(se(Bu),{width:"22",height:"22"}),A[12]||(A[12]=Fe()),A[13]||(A[13]=D("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===se(it).Sad?(H(),X(Ie,{key:5},[Z(se(Fu),{width:"22",height:"22"}),A[14]||(A[14]=Fe()),A[15]||(A[15]=D("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===se(it).Angry?(H(),X(Ie,{key:6},[Z(se(Lu),{width:"22",height:"22"}),A[16]||(A[16]=Fe()),A[17]||(A[17]=D("span",{class:"color-red"},"Angry",-1))],64)):Tt("",!0):(H(),X(Ie,{key:0},[Z(se(Sa),{width:"18",height:"18"}),A[7]||(A[7]=Fe(" Like "))],64))]),s.value?(H(),X("div",Fk,[D("div",$k,[D("button",{onClick:A[1]||(A[1]=O=>m(se(it).Like))},[Z(se(Sa),{width:"20",height:"20",fill:"#1E90FF"})]),D("button",{onClick:A[2]||(A[2]=O=>m(se(it).Haha))},[Z(se($u),{width:"24",height:"24"})]),D("button",{onClick:A[3]||(A[3]=O=>m(se(it).Love))},[Z(se(Uu),{width:"30",height:"30"})]),D("button",{onClick:A[4]||(A[4]=O=>m(se(it).Wow))},[Z(se(Bu),{width:"24",height:"24"})]),D("button",{onClick:A[5]||(A[5]=O=>m(se(it).Sad))},[Z(se(Fu),{width:"28",height:"28"})]),D("button",{onClick:A[6]||(A[6]=O=>m(se(it).Angry))},[Z(se(Lu),{width:"26",height:"26"})])])])):Tt("",!0)],32))}}),jk=et(Bk,[["__scopeId","data-v-1a711d4b"]]),qk={key:0,class:"reactions-count"},Hk=Ze({__name:"top",props:{totalReactions:{},topReactions:{}},setup(t){return(e,n)=>e.totalReactions>0?(H(),X("div",qk,[D("span",null,[(H(!0),X(Ie,null,Kn(e.topReactions,(r,s)=>(H(),X(Ie,{key:s},[r===se(it).Like?(H(),Je(se(Sa),{key:0,fill:"#1E90FF"})):r===se(it).Haha?(H(),Je(se($u),{key:1})):r===se(it).Love?(H(),Je(se(Uu),{key:2})):r===se(it).Wow?(H(),Je(se(Bu),{key:3})):r===se(it).Sad?(H(),Je(se(Fu),{key:4})):r===se(it).Angry?(H(),Je(se(Lu),{key:5})):Tt("",!0)],64))),128))]),Fe(" "+Yt(e.totalReactions),1)])):Tt("",!0)}}),zk=et(Hk,[["__scopeId","data-v-47ff09c1"]]),Gk=Ze({__name:"item",props:{variant:{},width:{},height:{},borderRadius:{}},setup(t){return(e,n)=>(H(),X("div",{class:xn(["shimmer",`skeleton-${e.variant}`]),style:cl({width:e.width,height:e.height,borderRadius:e.borderRadius})},null,6))}}),cn=et(Gk,[["__scopeId","data-v-ad2da975"]]),Wk={class:"skeleton"},Y0=Ze({__name:"index",props:{loading:{type:Boolean}},setup(t){return(e,n)=>(H(),X("div",Wk,[e.loading?Yi(e.$slots,"template",{key:0},()=>[(H(),X(Ie,null,Kn(3,r=>Z(cn,{key:r})),64))]):Yi(e.$slots,"default",{key:1})]))}}),Kk=Ze({__name:"TextTrim",props:{text:{},maxLength:{}},setup(t){const e=we(null),n=we(!1),r=we(!1),s=()=>{const o=e.value;o&&(n.value=o.scrollHeight>o.clientHeight)},i=()=>{r.value=!r.value};return Ur(()=>{dl(s),window.addEventListener("resize",s)}),(o,l)=>(H(),X(Ie,null,[D("div",{ref_key:"textRef",ref:e,class:xn(["overflow-hidden transition-all duration-300 whitespace-pre-line",[r.value?"overflow-visible":"line-clamp-6 overflow-hidden"]])},Yt(o.text),3),n.value&&!r.value?(H(),X("button",{key:0,onClick:i,class:"app-primary mt-2"}," আরও পড়ুন ")):Tt("",!0)],64))}});var Qk=["second","minute","hour","day","week","month","year"];function Xk(t,e){if(e===0)return["just now","right now"];var n=Qk[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var Yk=["秒","分钟","小时","天","周","个月","年"];function Jk(t,e){if(e===0)return["刚刚","片刻后"];var n=Yk[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var ju={},J0=function(t,e){ju[t]=e},Zk=function(t){return ju[t]||ju.en_US},Bc=[60,60,24,7,365/7/12,12];function rg(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function e3(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=Bc[s]&&s<Bc.length;s++)t/=Bc[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function t3(t,e){var n=e?rg(e):new Date;return(+n-+rg(t))/1e3}var Z0=function(t,e,n){var r=t3(t,n&&n.relativeDate);return e3(r,Zk(e))};J0("en_US",Xk);J0("zh_CN",Jk);const n3={class:"app-card flex flex-col gap-2"},r3={class:"flex gap-2"},s3={class:"flex flex-col gap-1"},i3={class:"text-lg font-medium"},o3={class:"text-xs"},a3={class:"flex flex-col gap-1"},l3={class:"flex flex-center gap-1"},c3={class:"flex justify-between"},e1=Ze({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=fs(),s=U_(),i=e.item.id,o=we([]),l=we(!1),c=$e(()=>{if(r.value&&o.value.length>0){const A=o.value.find(O=>O.id===r.value);if(A)return A.type}return null}),u=$e(()=>o.value.reduce((A,O)=>A+1,0)||0),d=$e(()=>{const A={like:0,haha:0,love:0,wow:0,sad:0,poop:0,angry:0};for(const{type:V}of o.value)A[V]++;const O=Math.max(...Object.values(A));return Object.entries(A).filter(([,V])=>V===O).map(([V])=>V)}),f=we(null),m=we(!1);we(!1);const g=()=>{const A=f.value;A&&(m.value=A.scrollHeight>A.clientHeight)},C=async()=>{l.value=!0;try{const A=await cd(ei(kn,"shouts",i,"reactions"));o.value=A.docs.map(O=>({id:O.id,...O.data()}))}catch(A){console.error("Error fetching reactions:",A)}l.value=!1};function P(){s.push("/story/"+i)}return Ur(()=>{C(),dl(g),window.addEventListener("resize",g)}),(A,O)=>(H(),X("div",n3,[D("div",r3,[Z(se(Ql),{width:"40",height:"40",class:"app-fill"}),D("div",s3,[D("span",i3,Yt(se(n)(A.item.userId)),1),D("i",o3,Yt(se(Z0)(new Date(A.item.timestamp.seconds*1e3))),1)])]),D("div",a3,[D("div",null,[Z(Kk,{text:A.item.text},null,8,["text"])]),A.item.files&&A.item.files.length>0?(H(),Je(Ak,{key:0,files:A.item.files},null,8,["files"])):Tt("",!0)]),D("div",l3,[Z(Y0,{loading:l.value},{template:Ut(()=>[Z(cn,{variant:"text",width:"2rem",height:"1.5rem"})]),default:Ut(()=>[Z(zk,{class:"flex flex-center","total-reactions":u.value,"top-reactions":d.value},null,8,["total-reactions","top-reactions"])]),_:1},8,["loading"])]),O[1]||(O[1]=D("div",{class:"border-top"},null,-1)),D("div",c3,[Z(jk,{"post-id":se(i),value:c.value},null,8,["post-id","value"]),D("button",{class:"flex app-primary",onClick:P},O[0]||(O[0]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[D("g",null,[D("g",null,[D("path",{d:"M1.98608 11.1034C1.98608 13.3236 2.78607 15.376 4.13153 16.9992C5.93153 19.238 8.78608 20.6746 11.9861 20.6746C11.9861 20.6746 15.5028 21.9659 17.8427 22.4553C18.6528 22.6248 19.5517 22.0692 19.5517 21.3173C19.5517 20.4026 17.9861 18.753 17.9861 18.753C19.1009 17.959 20.033 16.9462 20.7162 15.7808C21.526 14.3994 21.9861 12.8036 21.9861 11.1034C21.9861 9.39876 21.5255 7.7997 20.7162 6.41587C19.9666 5.13402 18.9178 4.03683 17.6588 3.21143C16.0406 2.12931 14.0952 1.51367 11.9861 1.51367C6.45881 1.51367 1.98608 5.80475 1.98608 11.1034Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])],-1),Fe(" Comment ")])),Z(uk,{"post-id":se(i)},null,8,["post-id"])]),Yi(A.$slots,"append")]))}}),u3={class:"flex flex-col gap-2"},h3={class:"flex gap-2"},d3={class:"flex flex-col flex-grow gap-1"},f3={class:"flex flex-col gap-3"},p3={class:"flex justify-between"},m3={class:"flex justify-between"},g3=Ze({__name:"PostSkeleton",setup(t){function e(r,s){return Math.floor(Math.random()*(s-r+1))+r}function n(){const r=["w-2/3","w-1/4","w-3/4","w-1/5","w-2/5","w-3/5","w-4/5","w-1/6","w-5/6"],s=Math.floor(Math.random()*r.length);return r[s]}return(r,s)=>(H(),Je(Y0,{loading:"",class:"app-card flex flex-col gap-1"},{template:Ut(()=>[D("div",u3,[D("div",h3,[Z(se(Ql),{width:"2.5rem",height:"2.5rem",class:"app-fill"}),D("div",d3,[Z(cn,{variant:"text",class:xn(n()),height:"1.25rem"},null,8,["class"]),Z(cn,{variant:"text",width:"5rem",height:".5rem"})])]),D("div",f3,[(H(!0),X(Ie,null,Kn(e(2,5),i=>(H(),Je(cn,{variant:"text",class:"w-full"}))),256)),Z(cn,{variant:"text",class:xn(n())},null,8,["class"])]),D("div",p3,[Z(cn,{variant:"text",width:"2.5rem"}),Z(cn,{variant:"text",width:"5rem"})]),s[0]||(s[0]=D("div",{class:"border-top"},null,-1)),D("div",m3,[Z(cn,{variant:"text",width:"5rem",height:"1.688rem"}),Z(cn,{variant:"text",width:"5rem",height:"1.688rem"}),Z(cn,{variant:"text",width:"5rem",height:"1.688rem"})])])]),_:1}))}}),_3={class:"masonry"},sg=10,y3=Ze({__name:"HomePage",setup(t){const e=F_(),n=we(!0),r=we([]),s=we(),i=async()=>{let l;n.value=!0,s.value?l=ku(ei(kn,"shouts"),xu("timestamp","desc"),GS(s.value),Bm(sg)):l=ku(ei(kn,"shouts"),xu("timestamp","desc"),Bm(sg));const c=await cd(l),u=[];for(const d of c.docs){const f=d.data();u.push({id:d.id,text:f.text,timestamp:f.timestamp,userId:f.userId,files:f.files||[]})}c.empty||(s.value=c.docs[c.docs.length-1]),r.value.push(...u),n.value=!1},o=async()=>{r.value=[],s.value=null,i()};return Ar(()=>e.fullPath,i),Ur(i),Ar(Vu,o),(l,c)=>(H(),X("div",_3,[n.value?(H(),X(Ie,{key:0},Kn(3,u=>Z(g3,{key:u,class:"masonry-item",loading:n.value},null,8,["loading"])),64)):(H(!0),X(Ie,{key:1},Kn(r.value,u=>(H(),Je(e1,{key:u.id,item:u,class:"app-card masonry-item"},null,8,["item"]))),128))]))}}),v3=et(y3,[["__scopeId","data-v-c628b3ae"]]),w3={};function T3(t,e){return H(),X("section",null,e[0]||(e[0]=[D("h2",null,"Privacy Policy",-1),D("p",null,"Privacy Policy content goes here...",-1)]))}const E3=et(w3,[["render",T3]]),I3={};function A3(t,e){return H(),X("section",null,e[0]||(e[0]=[D("h2",null,"Terms and Conditions",-1),D("p",null,"Terms and Conditions content goes here...",-1)]))}const b3=et(I3,[["render",A3]]),R3={class:"container"},C3={key:0,class:"identity"},S3={class:"signin"},P3=["disabled"],k3=["disabled"],x3=Ze({__name:"UserPage",setup(t){const e=U_(),{userId:n,userName:r}=fs(),s=we(!1),i=we(!1),o=async()=>{s.value=!0;try{const c=await wy(_o);s.value=!1}catch(c){console.error("Anonymous sign-in error:",c),alert("Failed to sign in: "+c.message)}},l=async()=>{i.value=!0;try{await _o.signOut(),i.value=!1,e.replace({name:"home"})}catch(c){console.error("Sign-out error:",c),alert("Failed to sign out: "+c.message)}};return(c,u)=>(H(),X("section",R3,[u[1]||(u[1]=D("h2",null,"About you",-1)),se(n)?(H(),X("div",C3,[Fe(Yt(se(r)),1),u[0]||(u[0]=D("br",null,null,-1)),Fe("ID: "+Yt(se(n)),1)])):Tt("",!0),u[2]||(u[2]=D("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),D("div",S3,[se(n)?(H(),X("button",{key:1,onClick:l,class:"btn btn__primary",disabled:i.value}," Sign out ",8,k3)):(H(),X("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,P3))])]))}}),D3=et(x3,[["__scopeId","data-v-922e1ab5"]]),N3={},O3={class:"loader"};function V3(t,e){return H(),X("div",O3)}const M3=et(N3,[["render",V3]]),L3={class:"comment-add flex gap-2 items-center"},U3={class:"flex flex-grow"},F3=Ze({__name:"Add",props:{postId:{},commentId:{}},emits:["add"],setup(t,{emit:e}){const n=t,r=e,{userId:s,signInAnonymously:i}=fs(),o=we(""),l=we(null),c=we(!1),u=$e(()=>!c.value&&o.value.trim()!==""),d=async()=>{const f=o.value.trim();if(f){if(c.value=!0,!s.value)try{await i()}catch(m){console.error(m),hn("Can not get private ID","error")}try{const m=ei(kn,"shouts",n.postId,"comments"),g={content:f,authorId:s.value,parentCommentId:l.value,timestamp:new Date},C=await f0(m,g);o.value="",r("add")}catch(m){console.error("Error comment:",m),hn("সমস্যা হয়েছে","error")}c.value=!1}};return(f,m)=>(H(),X("div",L3,[Z(se(Ql),{class:"user",width:"48",height:"48"}),D("div",U3,[Mg(D("textarea",{"onUpdate:modelValue":m[0]||(m[0]=g=>o.value=g),placeholder:"আপনার মন্তব্য লিখুন...",class:"comment-input flex-grow",rows:"1"},null,512),[[A_,o.value]]),Z(Q0,{disabled:!u.value,loading:c.value,onClick:d},{default:Ut(()=>[Z(se(K0),{width:"18",height:"18"})]),_:1},8,["disabled","loading"])])]))}}),$3=et(F3,[["__scopeId","data-v-8c04619b"]]),B3={class:"comment-list flex flex-col gap-1"},j3={key:0,class:"border-top"},q3={class:"comment-item-body bg-2 flex flex-col flex-grow"},H3={class:"comment-item-body-author flex justify-between"},z3={class:"author-name"},G3={class:"timestamp"},W3={class:"content"},K3={key:0,class:"replies"},Q3=Ze({__name:"List",props:{postId:{}},setup(t){const e=t,{getUserName:n}=fs(),r=we([]);return Ur(async()=>{const i=ei(kn,"shouts",e.postId,"comments"),o=ku(i,xu("timestamp","asc")),l=await cd(o),c=[],u={};l.forEach(f=>{const m=f.data(),g={id:f.id,content:m.content,authorId:m.authorId,parentCommentId:m.parentCommentId||null,timestamp:m.timestamp,replies:[]};c.push(g),u[g.id]=g});const d=[];c.forEach(f=>{if(f.parentCommentId){const m=u[f.parentCommentId];m?(m.replies=m.replies||[],m.replies.push(f)):d.push(f)}else d.push(f)}),r.value=d}),(i,o)=>{const l=vo("CommentList");return H(),X("div",B3,[r.value.length>0?(H(),X("div",j3)):Tt("",!0),(H(!0),X(Ie,null,Kn(r.value,c=>(H(),X("div",{key:c.id,class:"comment-item flex"},[Z(se(Ql),{class:"icon",width:"2.5rem",height:"2.5rem"}),D("div",q3,[D("div",H3,[D("span",z3,Yt(se(n)(c.authorId)),1),D("i",G3,Yt(se(Z0)(new Date(c.timestamp.seconds*1e3))),1)]),D("div",W3,Yt(c.content),1),c.replies.length>0?(H(),X("div",K3,[Z(l,{comments:c.replies},null,8,["comments"])])):Tt("",!0)])]))),128))])}}}),X3=et(Q3,[["__scopeId","data-v-2d8efeb1"]]),Y3={},J3={class:"app-card"};function Z3(t,e){return H(),X("div",J3,e[0]||(e[0]=[D("div",null,[D("pre",{class:"text-xs"},[Fe(`                           /~\\
                          |oo )    Oh Crap!
                          _\\=/_
          ___            /  _  \\
         / ()\\          //|/.\\|\\\\
       _|_____|_        \\\\ \\_/  ||
      | | === | |        \\|\\ /| ||
      |_|  O  |_|        # _ _/ #
       ||  O  ||          | | |
       ||__*__||          | | |
      |~ \\___/ ~|         []|[]
      /=\\ /=\\ /=\\         | | |
______[_]_[_]_[_]________/_]_[_\\_________`),D("p",null,[Fe("Yes, you are in the right place."),D("br"),Fe("We are not! We are trying to get there soon."),D("br"),D("br"),Fe("- Bhai brothers")]),Fe(`
    `)])],-1)]))}const e5=et(Y3,[["render",Z3]]),t5=Ze({__name:"StoryPage",setup(t){const n=F_().params.id,r=Array.isArray(n)?n[0]:n,s=we(!1),i=we(null);we(null);const o=we(0),l=async()=>{s.value=!0;try{const u=tl(kn,"shouts",r),d=await YS(u);if(d.exists()){const f=d.data();i.value={id:d.id,...f}}}catch{hn("পোস্ট পাওয়া যায় নি।","error")}s.value=!1},c=()=>{o.value++};return Ur(l),(u,d)=>s.value?(H(),Je(M3,{key:0})):(H(),X(Ie,{key:1},[i.value?(H(),X(Ie,{key:0},[Z(e1,{item:i.value},{append:Ut(()=>[(H(),Je(X3,{postId:i.value.id,key:o.value},null,8,["postId"]))]),_:1},8,["item"]),Z($3,{postId:i.value.id,onAdd:c,class:"post-add-comment z-10"},null,8,["postId"])],64)):(H(),Je(e5,{key:1}))],64))}}),n5=et(t5,[["__scopeId","data-v-d5347dfb"]]),r5=[{path:"/",component:j6,children:[{path:"",name:"home",component:v3},{path:"about",name:"about",component:z6},{path:"terms",name:"terms",component:b3},{path:"privacy",name:"privacy",component:E3},{path:"user",name:"UserPage",component:D3},{path:"/story/:id",component:n5}]}],s5=eI({history:PE("/"),routes:r5}),i5={class:"fixed bottom-4 left-4 space-y-2 z-max flex flex-col-reverse"},o5=Ze({__name:"Notifications",setup(t){const e={success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600",warning:"bg-yellow-500 text-black"};return(n,r)=>(H(),Je(Fg,{to:"body"},[D("div",i5,[Z($T,{name:"fade",tag:"div",class:"flex flex-col gap-1"},{default:Ut(()=>[(H(!0),X(Ie,null,Kn(se(Ca),s=>(H(),X("div",{key:s.id,class:xn(["min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left",e[s.type]])},Yt(s.message),3))),128))]),_:1})])]))}}),a5=et(o5,[["__scopeId","data-v-f244abdc"]]),l5={install(t){const e=document.createElement("div");document.body.appendChild(e),b_(a5).mount(e)}},Td=b_(JT);Td.use(s5);Td.use(l5);Td.mount("#app");
