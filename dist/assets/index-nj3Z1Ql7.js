(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Os=[],Cn=()=>{},S1=()=>!1,il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zu=t=>t.startsWith("onUpdate:"),lt=Object.assign,Gu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},P1=Object.prototype.hasOwnProperty,Ne=(t,e)=>P1.call(t,e),fe=Array.isArray,Vs=t=>ol(t)==="[object Map]",am=t=>ol(t)==="[object Set]",_e=t=>typeof t=="function",Ke=t=>typeof t=="string",tr=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",lm=t=>(je(t)||_e(t))&&_e(t.then)&&_e(t.catch),cm=Object.prototype.toString,ol=t=>cm.call(t),k1=t=>ol(t).slice(8,-1),um=t=>ol(t)==="[object Object]",Wu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},x1=/-(\w)/g,ln=al(t=>t.replace(x1,(e,n)=>n?n.toUpperCase():"")),D1=/\B([A-Z])/g,cs=al(t=>t.replace(D1,"-$1").toLowerCase()),ll=al(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=al(t=>t?`on${ll(t)}`:""),br=(t,e)=>!Object.is(t,e),da=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},N1=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let mf;const cl=()=>mf||(mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?L1(r):ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||je(t))return t}const O1=/;(?![^(]*\))/g,V1=/:([^]+)/,M1=/\/\*[^]*?\*\//g;function L1(t){const e={};return t.replace(M1,"").split(O1).forEach(n=>{if(n){const r=n.split(V1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function On(t){let e="";if(Ke(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=On(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const U1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F1=Hu(U1);function dm(t){return!!t||t===""}const fm=t=>!!(t&&t.__v_isRef===!0),Ft=t=>Ke(t)?t:t==null?"":fe(t)||je(t)&&(t.toString===cm||!_e(t.toString))?fm(t)?Ft(t.value):JSON.stringify(t,pm,2):String(t),pm=(t,e)=>fm(e)?pm(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dc(r,i)+" =>"]=s,n),{})}:am(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dc(n))}:tr(e)?dc(e):je(e)&&!fe(e)&&!um(e)?String(e):e,dc=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class $1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function B1(){return Bt}let Ue;const fc=new WeakSet;class gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_m(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),ym(this);const e=Ue,n=dn;Ue=this,dn=!0;try{return this.fn()}finally{vm(this),Ue=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xu(e);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let mm=0,Oi,Vi;function _m(t,e=!1){if(t.flags|=8,e){t.next=Vi,Vi=t;return}t.next=Oi,Oi=t}function Ku(){mm++}function Qu(){if(--mm>0)return;if(Vi){let e=Vi;for(Vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Oi;){let e=Oi;for(Oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ym(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xu(r),j1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ki)||(t.globalVersion=Ki,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=dn;Ue=t,dn=!0;try{ym(t);const s=t.fn(t._value);(e.version===0||br(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,dn=r,vm(t),t.flags&=-3}}function Xu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function j1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const Tm=[];function Gn(){Tm.push(dn),dn=!1}function Wn(){const t=Tm.pop();dn=t===void 0?!0:t}function _f(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Ki=0;class q1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!dn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new q1(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Em(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Ki++,this.notify(e)}notify(e){Ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qu()}}}function Em(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Em(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hc=new WeakMap,Zr=Symbol(""),zc=Symbol(""),Qi=Symbol("");function kt(t,e,n){if(dn&&Ue){let r=Hc.get(t);r||Hc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yu),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=Hc.get(t);if(!o){Ki++;return}const l=c=>{c&&c.trigger()};if(Ku(),e==="clear")o.forEach(l);else{const c=fe(t),u=c&&Wu(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,g)=>{(g==="length"||g===Qi||!tr(g)&&g>=h)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zr)),Vs(t)&&l(o.get(zc)));break;case"delete":c||(l(o.get(Zr)),Vs(t)&&l(o.get(zc)));break;case"set":Vs(t)&&l(o.get(Zr));break}}Qu()}function ws(t){const e=xe(t);return e===t?e:(kt(e,"iterate",Qi),an(t)?e:e.map(vt))}function hl(t){return kt(t=xe(t),"iterate",Qi),t}const H1={__proto__:null,[Symbol.iterator](){return pc(this,Symbol.iterator,vt)},concat(...t){return ws(this).concat(...t.map(e=>fe(e)?ws(e):e))},entries(){return pc(this,"entries",t=>(t[1]=vt(t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(vt),arguments)},find(t,e){return Un(this,"find",t,e,vt,arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,vt,arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return gc(this,"includes",t)},indexOf(...t){return gc(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return gc(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return Ai(this,"pop")},push(...t){return Ai(this,"push",t)},reduce(t,...e){return yf(this,"reduce",t,e)},reduceRight(t,...e){return yf(this,"reduceRight",t,e)},shift(){return Ai(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return Ai(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return Ai(this,"unshift",t)},values(){return pc(this,"values",vt)}};function pc(t,e,n){const r=hl(t),s=r[e]();return r!==t&&!an(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const z1=Array.prototype;function Un(t,e,n,r,s,i){const o=hl(t),l=o!==t&&!an(t),c=o[e];if(c!==z1[e]){const f=c.apply(t,i);return l?vt(f):f}let u=n;o!==t&&(l?u=function(f,g){return n.call(this,vt(f),g,t)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function yf(t,e,n,r){const s=hl(t);let i=n;return s!==t&&(an(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,vt(l),c,t)}),s[e](i,...r)}function gc(t,e,n){const r=xe(t);kt(r,"iterate",Qi);const s=r[e](...n);return(s===-1||s===!1)&&eh(n[0])?(n[0]=xe(n[0]),r[e](...n)):s}function Ai(t,e,n=[]){Gn(),Ku();const r=xe(t)[e].apply(t,n);return Qu(),Wn(),r}const G1=Hu("__proto__,__v_isRef,__isVue"),Im=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr));function W1(t){tr(t)||(t=String(t));const e=xe(this);return kt(e,"has",t),e.hasOwnProperty(t)}class Am{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rw:Sm:i?Cm:Rm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=H1[n]))return c;if(n==="hasOwnProperty")return W1}const l=Reflect.get(e,n,xt(e)?e:r);return(tr(n)?Im.has(n):G1(n))||(s||kt(e,"get",n),i)?l:xt(l)?o&&Wu(n)?l:l.value:je(l)?s?km(l):ti(l):l}}class bm extends Am{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Dr(i);if(!an(r)&&!Dr(r)&&(i=xe(i),r=xe(r)),!fe(e)&&xt(i)&&!xt(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&Wu(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,xt(e)?e:s);return e===xe(s)&&(o?br(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!Im.has(n))&&kt(e,"has",n),r}ownKeys(e){return kt(e,"iterate",fe(e)?"length":Zr),Reflect.ownKeys(e)}}class K1 extends Am{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Q1=new bm,X1=new K1,Y1=new bm(!0);const Gc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function J1(t,e,n){return function(...r){const s=this.__v_raw,i=xe(s),o=Vs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Gc:e?ka:vt;return!e&&kt(i,"iterate",c?zc:Zr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:l?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Z1(t,e){const n={get(s){const i=this.__v_raw,o=xe(i),l=xe(s);t||(br(s,l)&&kt(o,"get",s),kt(o,"get",l));const{has:c}=Yo(o),u=e?Gc:t?ka:vt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&kt(xe(s),"iterate",Zr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=xe(i),l=xe(s);return t||(br(s,l)&&kt(o,"has",s),kt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=xe(l),u=e?Gc:t?ka:vt;return!t&&kt(c,"iterate",Zr),l.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return lt(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!an(s)&&!Dr(s)&&(s=xe(s));const i=xe(this);return Yo(i).has.call(i,s)||(i.add(s),Bn(i,"add",s,s)),this},set(s,i){!e&&!an(i)&&!Dr(i)&&(i=xe(i));const o=xe(this),{has:l,get:c}=Yo(o);let u=l.call(o,s);u||(s=xe(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?br(i,h)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=xe(this),{has:o,get:l}=Yo(i);let c=o.call(i,s);c||(s=xe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Bn(i,"delete",s,void 0),u},clear(){const s=xe(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=J1(s,t,e)}),n}function Ju(t,e){const n=Z1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const ew={get:Ju(!1,!1)},tw={get:Ju(!1,!0)},nw={get:Ju(!0,!1)};const Rm=new WeakMap,Cm=new WeakMap,Sm=new WeakMap,rw=new WeakMap;function sw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iw(t){return t.__v_skip||!Object.isExtensible(t)?0:sw(k1(t))}function ti(t){return Dr(t)?t:Zu(t,!1,Q1,ew,Rm)}function Pm(t){return Zu(t,!1,Y1,tw,Cm)}function km(t){return Zu(t,!0,X1,nw,Sm)}function Zu(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=iw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ms(t){return Dr(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function an(t){return!!(t&&t.__v_isShallow)}function eh(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function ow(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&hm(t,"__v_skip",!0),t}const vt=t=>je(t)?ti(t):t,ka=t=>je(t)?km(t):t;function xt(t){return t?t.__v_isRef===!0:!1}function we(t){return xm(t,!1)}function aw(t){return xm(t,!0)}function xm(t,e){return xt(t)?t:new lw(t,e)}class lw{constructor(e,n){this.dep=new Yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||an(e)||Dr(e);e=r?e:xe(e),br(e,n)&&(this._rawValue=e,this._value=r?e:vt(e),this.dep.trigger())}}function se(t){return xt(t)?t.value:t}const cw={get:(t,e,n)=>e==="__v_raw"?t:se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dm(t){return Ms(t)?t:new Proxy(t,cw)}class uw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return _m(this,!0),!0}get value(){const e=this.dep.track();return wm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hw(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new uw(r,s,n)}const Zo={},xa=new WeakMap;let Xr;function dw(t,e=!1,n=Xr){if(n){let r=xa.get(n);r||xa.set(n,r=[]),r.push(t)}}function fw(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:an(U)||s===!1||s===0?jn(U,1):jn(U);let h,f,g,m,I=!1,A=!1;if(xt(t)?(f=()=>t.value,I=an(t)):Ms(t)?(f=()=>u(t),I=!0):fe(t)?(A=!0,I=t.some(U=>Ms(U)||an(U)),f=()=>t.map(U=>{if(xt(U))return U.value;if(Ms(U))return u(U);if(_e(U))return c?c(U,2):U()})):_e(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Gn();try{g()}finally{Wn()}}const U=Xr;Xr=h;try{return c?c(t,3,[m]):t(m)}finally{Xr=U}}:f=Cn,e&&s){const U=f,ie=s===!0?1/0:s;f=()=>jn(U(),ie)}const P=B1(),N=()=>{h.stop(),P&&P.active&&Gu(P.effects,h)};if(i&&e){const U=e;e=(...ie)=>{U(...ie),N()}}let V=A?new Array(t.length).fill(Zo):Zo;const M=U=>{if(!(!(h.flags&1)||!h.dirty&&!U))if(e){const ie=h.run();if(s||I||(A?ie.some((re,C)=>br(re,V[C])):br(ie,V))){g&&g();const re=Xr;Xr=h;try{const C=[ie,V===Zo?void 0:A&&V[0]===Zo?[]:V,m];V=ie,c?c(e,3,C):e(...C)}finally{Xr=re}}}else h.run()};return l&&l(M),h=new gm(f),h.scheduler=o?()=>o(M,!1):M,m=U=>dw(U,!1,h),g=h.onStop=()=>{const U=xa.get(h);if(U){if(c)c(U,4);else for(const ie of U)ie();xa.delete(h)}},e?r?M(!0):V=h.run():o?o(M.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function jn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xt(t))jn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(am(t)||Vs(t))t.forEach(r=>{jn(r,e,n)});else if(um(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vo(t,e,n,r){try{return r?t(...r):t()}catch(s){dl(s,e,n)}}function _n(t,e,n,r){if(_e(t)){const s=vo(t,e,n,r);return s&&lm(s)&&s.catch(i=>{dl(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function dl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}l=l.parent}if(i){Gn(),vo(i,null,10,[t,c,u]),Wn();return}}pw(t,n,s,r,o)}function pw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Lt=[];let In=-1;const Ls=[];let pr=null,Is=0;const Nm=Promise.resolve();let Da=null;function th(t){const e=Da||Nm;return t?e.then(this?t.bind(this):t):e}function gw(t){let e=In+1,n=Lt.length;for(;e<n;){const r=e+n>>>1,s=Lt[r],i=Xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nh(t){if(!(t.flags&1)){const e=Xi(t),n=Lt[Lt.length-1];!n||!(t.flags&2)&&e>=Xi(n)?Lt.push(t):Lt.splice(gw(e),0,t),t.flags|=1,Om()}}function Om(){Da||(Da=Nm.then(Mm))}function mw(t){fe(t)?Ls.push(...t):pr&&t.id===-1?pr.splice(Is+1,0,t):t.flags&1||(Ls.push(t),t.flags|=1),Om()}function vf(t,e,n=In+1){for(;n<Lt.length;n++){const r=Lt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Lt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vm(t){if(Ls.length){const e=[...new Set(Ls)].sort((n,r)=>Xi(n)-Xi(r));if(Ls.length=0,pr){pr.push(...e);return}for(pr=e,Is=0;Is<pr.length;Is++){const n=pr[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pr=null,Is=0}}const Xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mm(t){try{for(In=0;In<Lt.length;In++){const e=Lt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Lt.length;In++){const e=Lt[In];e&&(e.flags&=-2)}In=-1,Lt.length=0,Vm(),Da=null,(Lt.length||Ls.length)&&Mm()}}let dt=null,Lm=null;function Na(t){const e=dt;return dt=t,Lm=t&&t.type.__scopeId||null,e}function Et(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Df(-1);const i=Na(e);let o;try{o=t(...s)}finally{Na(i),r._d&&Df(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Um(t,e){if(dt===null)return t;const n=_l(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Gn(),_n(c,n,8,[t.el,l,t,e]),Wn())}}const Fm=Symbol("_vte"),_w=t=>t.__isTeleport,Mi=t=>t&&(t.disabled||t.disabled===""),wf=t=>t&&(t.defer||t.defer===""),Tf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ef=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Wc=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},$m={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:h,pc:f,pbc:g,o:{insert:m,querySelector:I,createText:A,createComment:P}}=u,N=Mi(e.props);let{shapeFlag:V,children:M,dynamicChildren:U}=e;if(t==null){const ie=e.el=A(""),re=e.anchor=A("");m(ie,n,r),m(re,n,r);const C=(y,b)=>{V&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),h(M,y,b,s,i,o,l,c))},v=()=>{const y=e.target=Wc(e.props,I),b=jm(y,e,A,m);y&&(o!=="svg"&&Tf(y)?o="svg":o!=="mathml"&&Ef(y)&&(o="mathml"),N||(C(y,b),fa(e,!1)))};N&&(C(n,re),fa(e,!0)),wf(e.props)?(e.el.__isMounted=!1,Mt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(wf(e.props)&&t.el.__isMounted===!1){Mt(()=>{$m.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ie=e.anchor=t.anchor,re=e.target=t.target,C=e.targetAnchor=t.targetAnchor,v=Mi(t.props),y=v?n:re,b=v?ie:C;if(o==="svg"||Tf(re)?o="svg":(o==="mathml"||Ef(re))&&(o="mathml"),U?(g(t.dynamicChildren,U,y,s,i,o,l),ah(t,e,!0)):c||f(t,e,y,b,s,i,o,l,!1),N)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ea(e,n,ie,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const S=e.target=Wc(e.props,I);S&&ea(e,S,null,u,0)}else v&&ea(e,re,C,u,1);fa(e,N)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:h,target:f,props:g}=t;if(f&&(s(u),s(h)),i&&s(c),o&16){const m=i||!Mi(g);for(let I=0;I<l.length;I++){const A=l[I];r(A,e,n,m,!!A.dynamicChildren)}}},move:ea,hydrate:yw};function ea(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:h}=t,f=i===2;if(f&&r(o,e,n),(!f||Mi(h))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);f&&r(l,e,n)}function yw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:h}},f){const g=e.target=Wc(e.props,c);if(g){const m=Mi(e.props),I=g._lpa||g.firstChild;if(e.shapeFlag&16)if(m)e.anchor=f(o(t),e,l(t),n,r,s,i),e.targetStart=I,e.targetAnchor=I&&o(I);else{e.anchor=o(t);let A=I;for(;A;){if(A&&A.nodeType===8){if(A.data==="teleport start anchor")e.targetStart=A;else if(A.data==="teleport anchor"){e.targetAnchor=A,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}A=o(A)}e.targetAnchor||jm(g,e,h,u),f(I&&o(I),e,g,n,r,s,i)}fa(e,m)}return e.anchor&&o(e.anchor)}const Bm=$m;function fa(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function jm(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Fm]=i,t&&(r(s,t),r(i,t)),i}const Ts=Symbol("_leaveCb"),ta=Symbol("_enterCb");function vw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rr(()=>{t.isMounted=!0}),rh(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],ww={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn};function Tw(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Kc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:g,onLeave:m,onAfterLeave:I,onLeaveCancelled:A,onBeforeAppear:P,onAppear:N,onAfterAppear:V,onAppearCancelled:M}=e,U=String(t.key),ie=Tw(n,t),re=(y,b)=>{y&&_n(y,r,9,b)},C=(y,b)=>{const S=b[1];re(y,b),fe(y)?y.every(R=>R.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:l,beforeEnter(y){let b=c;if(!n.isMounted)if(i)b=P||c;else return;y[Ts]&&y[Ts](!0);const S=ie[U];S&&As(t,S)&&S.el[Ts]&&S.el[Ts](),re(b,[y])},enter(y){let b=u,S=h,R=f;if(!n.isMounted)if(i)b=N||u,S=V||h,R=M||f;else return;let w=!1;const Oe=y[ta]=rt=>{w||(w=!0,rt?re(R,[y]):re(S,[y]),v.delayedLeave&&v.delayedLeave(),y[ta]=void 0)};b?C(b,[y,Oe]):Oe()},leave(y,b){const S=String(t.key);if(y[ta]&&y[ta](!0),n.isUnmounting)return b();re(g,[y]);let R=!1;const w=y[Ts]=Oe=>{R||(R=!0,b(),Oe?re(A,[y]):re(I,[y]),y[Ts]=void 0,ie[S]===t&&delete ie[S])};ie[S]=t,m?C(m,[y,w]):w()},clone(y){return Kc(y,e,n,r)}};return v}function Yi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ie?(o.patchFlag&128&&s++,r=r.concat(qm(o.children,e,l))):(e||o.type!==xn)&&r.push(l!=null?ts(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Je(t,e){return _e(t)?lt({name:t.name},e,{setup:t}):t}function Hm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oa(t,e,n,r,s=!1){if(fe(t)){t.forEach((I,A)=>Oa(I,e&&(fe(e)?e[A]:e),n,r,s));return}if(Us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Oa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?_l(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Le?l.refs={}:l.refs,f=l.setupState,g=xe(f),m=f===Le?()=>!1:I=>Ne(g,I);if(u!=null&&u!==c&&(Ke(u)?(h[u]=null,m(u)&&(f[u]=null)):xt(u)&&(u.value=null)),_e(c))vo(c,l,12,[o,h]);else{const I=Ke(c),A=xt(c);if(I||A){const P=()=>{if(t.f){const N=I?m(c)?f[c]:h[c]:c.value;s?fe(N)&&Gu(N,i):fe(N)?N.includes(i)||N.push(i):I?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else I?(h[c]=o,m(c)&&(f[c]=o)):A&&(c.value=o,t.k&&(h[t.k]=o))};o?(P.id=-1,Mt(P,n)):P()}}}cl().requestIdleCallback;cl().cancelIdleCallback;const Us=t=>!!t.type.__asyncLoader,zm=t=>t.type.__isKeepAlive;function Ew(t,e){Gm(t,"a",e)}function Iw(t,e){Gm(t,"da",e)}function Gm(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zm(s.parent.vnode)&&Aw(r,e,n,s),s=s.parent}}function Aw(t,e,n,r){const s=fl(e,t,r,!0);sh(()=>{Gu(r[e],s)},n)}function fl(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gn();const l=To(n),c=_n(e,n,t,o);return l(),Wn(),c});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=wt)=>{(!to||t==="sp")&&fl(t,(...r)=>e(...r),n)},bw=nr("bm"),rr=nr("m"),Rw=nr("bu"),Wm=nr("u"),rh=nr("bum"),sh=nr("um"),Cw=nr("sp"),Sw=nr("rtg"),Pw=nr("rtc");function kw(t,e=wt){fl("ec",t,e)}const Km="components";function wo(t,e){return Ym(Km,t,!0,e)||t}const Qm=Symbol.for("v-ndc");function Xm(t){return Ke(t)?Ym(Km,t,!1)||t:t||Qm}function Ym(t,e,n=!0,r=!1){const s=dt||wt;if(s){const i=s.type;{const l=_T(i,!1);if(l&&(l===e||l===ln(e)||l===ll(ln(e))))return i}const o=If(s[t]||i[t],e)||If(s.appContext[t],e);return!o&&r?i:o}}function If(t,e){return t&&(t[e]||t[ln(e)]||t[ll(ln(e))])}function Kn(t,e,n,r){let s;const i=n,o=fe(t);if(o||Ke(t)){const l=o&&Ms(t);let c=!1,u=!1;l&&(c=!an(t),u=Dr(t),t=hl(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?u?ka(vt(t[h])):vt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function Ji(t,e,n={},r,s){if(dt.ce||dt.parent&&Us(dt.parent)&&dt.parent.ce)return e!=="default"&&(n.name=e),H(),et(Ie,null,[X("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),H();const o=i&&Jm(i(n)),l=n.key||o&&o.key,c=et(Ie,{key:(l&&!tr(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Jm(t){return t.some(e=>eo(e)?!(e.type===xn||e.type===Ie&&!Jm(e.children)):!0)?t:null}const Qc=t=>t?__(t)?_l(t):Qc(t.parent):null,Li=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>e_(t),$forceUpdate:t=>t.f||(t.f=()=>{nh(t.update)}),$nextTick:t=>t.n||(t.n=th.bind(t.proxy)),$watch:t=>Yw.bind(t)}),mc=(t,e)=>t!==Le&&!t.__isScriptSetup&&Ne(t,e),xw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(mc(r,e))return o[e]=1,r[e];if(s!==Le&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Le&&Ne(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const h=Li[e];let f,g;if(h)return e==="$attrs"&&kt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Le&&Ne(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ne(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return mc(s,e)?(s[e]=n,!0):r!==Le&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&Ne(t,o)||mc(e,o)||(l=i[0])&&Ne(l,o)||Ne(r,o)||Ne(Li,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Af(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function Dw(t){const e=e_(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&bf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:I,activated:A,deactivated:P,beforeDestroy:N,beforeUnmount:V,destroyed:M,unmounted:U,render:ie,renderTracked:re,renderTriggered:C,errorCaptured:v,serverPrefetch:y,expose:b,inheritAttrs:S,components:R,directives:w,filters:Oe}=e;if(u&&Nw(u,r,null),o)for(const Re in o){const Te=o[Re];_e(Te)&&(r[Re]=Te.bind(n))}if(s){const Re=s.call(n,n);je(Re)&&(t.data=ti(Re))}if(Xc=!0,i)for(const Re in i){const Te=i[Re],Wt=_e(Te)?Te.bind(n,n):_e(Te.get)?Te.get.bind(n,n):Cn,cn=!_e(Te)&&_e(Te.set)?Te.set.bind(n):Cn,Zt=Be({get:Wt,set:cn});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ge=>Zt.value=Ge})}if(l)for(const Re in l)Zm(l[Re],r,n,Re);if(c){const Re=_e(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(Te=>{pa(Te,Re[Te])})}h&&bf(h,t,"c");function ze(Re,Te){fe(Te)?Te.forEach(Wt=>Re(Wt.bind(n))):Te&&Re(Te.bind(n))}if(ze(bw,f),ze(rr,g),ze(Rw,m),ze(Wm,I),ze(Ew,A),ze(Iw,P),ze(kw,v),ze(Pw,re),ze(Sw,C),ze(rh,V),ze(sh,U),ze(Cw,y),fe(b))if(b.length){const Re=t.exposed||(t.exposed={});b.forEach(Te=>{Object.defineProperty(Re,Te,{get:()=>n[Te],set:Wt=>n[Te]=Wt})})}else t.exposed||(t.exposed={});ie&&t.render===Cn&&(t.render=ie),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),w&&(t.directives=w),y&&Hm(t)}function Nw(t,e,n=Cn){fe(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),xt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bf(t,e,n){_n(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zm(t,e,n,r){let s=r.includes(".")?d_(n,r):()=>n[r];if(Ke(t)){const i=e[t];_e(i)&&Rr(s,i)}else if(_e(t))Rr(s,t.bind(n));else if(je(t))if(fe(t))t.forEach(i=>Zm(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Rr(s,i,t)}}function e_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Va(c,u,o,!0)),Va(c,e,o)),je(e)&&i.set(e,c),c}function Va(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Va(t,i,n,!0),s&&s.forEach(o=>Va(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Ow[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ow={data:Rf,props:Cf,emits:Cf,methods:Si,computed:Si,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Si,directives:Si,watch:Mw,provide:Rf,inject:Vw};function Rf(t,e){return e?t?function(){return lt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Vw(t,e){return Si(Yc(t),Yc(e))}function Yc(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?lt(Object.create(null),t,e):e}function Cf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:lt(Object.create(null),Af(t),Af(e??{})):e}function Mw(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function t_(){return{app:null,config:{isNativeTag:S1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lw=0;function Uw(t,e){return function(r,s=null){_e(r)||(r=lt({},r)),s!=null&&!je(s)&&(s=null);const i=t_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Lw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vT,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...f)):_e(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||X(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,h,g),c=!0,u._container=h,h.__vue_app__=u,_l(m.component)}},onUnmount(h){l.push(h)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Fs;Fs=u;try{return h()}finally{Fs=f}}};return u}}let Fs=null;function pa(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=wt||dt;if(r||Fs){let s=Fs?Fs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const n_={},r_=()=>Object.create(n_),s_=t=>Object.getPrototypeOf(t)===n_;function Fw(t,e,n,r=!1){const s={},i=r_();t.propsDefaults=Object.create(null),i_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $w(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=xe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(pl(t.emitsOptions,g))continue;const m=e[g];if(c)if(Ne(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const I=ln(g);s[I]=Jc(c,l,I,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{i_(t,e,s,i)&&(u=!0);let h;for(const f in l)(!e||!Ne(e,f)&&((h=cs(f))===f||!Ne(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Jc(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!Ne(e,f))&&(delete i[f],u=!0)}u&&Bn(t.attrs,"set","")}function i_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ni(c))continue;const u=e[c];let h;s&&Ne(s,h=ln(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:pl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=xe(n),u=l||Le;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Jc(s,c,f,u[f],t,!Ne(u,f))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=To(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const Bw=new WeakMap;function o_(t,e,n=!1){const r=n?Bw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const h=f=>{c=!0;const[g,m]=o_(f,e,!0);lt(o,g),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return je(t)&&r.set(t,Os),Os;if(fe(i))for(let h=0;h<i.length;h++){const f=ln(i[h]);Sf(f)&&(o[f]=Le)}else if(i)for(const h in i){const f=ln(h);if(Sf(f)){const g=i[h],m=o[f]=fe(g)||_e(g)?{type:g}:lt({},g),I=m.type;let A=!1,P=!0;if(fe(I))for(let N=0;N<I.length;++N){const V=I[N],M=_e(V)&&V.name;if(M==="Boolean"){A=!0;break}else M==="String"&&(P=!1)}else A=_e(I)&&I.name==="Boolean";m[0]=A,m[1]=P,(A||Ne(m,"default"))&&l.push(f)}}const u=[o,l];return je(t)&&r.set(t,u),u}function Sf(t){return t[0]!=="$"&&!Ni(t)}const ih=t=>t[0]==="_"||t==="$stable",oh=t=>fe(t)?t.map(bn):[bn(t)],jw=(t,e,n)=>{if(e._n)return e;const r=Et((...s)=>oh(e(...s)),n);return r._c=!1,r},a_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ih(s))continue;const i=t[s];if(_e(i))e[s]=jw(s,i,r);else if(i!=null){const o=oh(i);e[s]=()=>o}}},l_=(t,e)=>{const n=oh(e);t.slots.default=()=>n},c_=(t,e,n)=>{for(const r in e)(n||!ih(r))&&(t[r]=e[r])},qw=(t,e,n)=>{const r=t.slots=r_();if(t.vnode.shapeFlag&32){const s=e._;s?(c_(r,e,n),n&&hm(r,"_",s,!0)):a_(e,r)}else e&&l_(t,e)},Hw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:c_(s,e,n):(i=!e.$stable,a_(e,s)),o=e}else e&&(l_(t,e),o={default:1});if(i)for(const l in s)!ih(l)&&o[l]==null&&delete s[l]},Mt=sT;function zw(t){return Gw(t)}function Gw(t,e){const n=cl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=Cn,insertStaticContent:I}=t,A=(T,E,k,$=null,q=null,B=null,Z=void 0,W=null,G=!!E.dynamicChildren)=>{if(T===E)return;T&&!As(T,E)&&($=F(T),Ge(T,q,B,!0),T=null),E.patchFlag===-2&&(G=!1,E.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:J}=E;switch(z){case gl:P(T,E,k,$);break;case xn:N(T,E,k,$);break;case ga:T==null&&V(E,k,$,Z);break;case Ie:R(T,E,k,$,q,B,Z,W,G);break;default:J&1?ie(T,E,k,$,q,B,Z,W,G):J&6?w(T,E,k,$,q,B,Z,W,G):(J&64||J&128)&&z.process(T,E,k,$,q,B,Z,W,G,oe)}ce!=null&&q&&Oa(ce,T&&T.ref,B,E||T,!E)},P=(T,E,k,$)=>{if(T==null)r(E.el=l(E.children),k,$);else{const q=E.el=T.el;E.children!==T.children&&u(q,E.children)}},N=(T,E,k,$)=>{T==null?r(E.el=c(E.children||""),k,$):E.el=T.el},V=(T,E,k,$)=>{[T.el,T.anchor]=I(T.children,E,k,$,T.el,T.anchor)},M=({el:T,anchor:E},k,$)=>{let q;for(;T&&T!==E;)q=g(T),r(T,k,$),T=q;r(E,k,$)},U=({el:T,anchor:E})=>{let k;for(;T&&T!==E;)k=g(T),s(T),T=k;s(E)},ie=(T,E,k,$,q,B,Z,W,G)=>{E.type==="svg"?Z="svg":E.type==="math"&&(Z="mathml"),T==null?re(E,k,$,q,B,Z,W,G):y(T,E,q,B,Z,W,G)},re=(T,E,k,$,q,B,Z,W)=>{let G,z;const{props:ce,shapeFlag:J,transition:ae,dirs:pe}=T;if(G=T.el=o(T.type,B,ce&&ce.is,ce),J&8?h(G,T.children):J&16&&v(T.children,G,null,$,q,_c(T,B),Z,W),pe&&Wr(T,null,$,"created"),C(G,T,T.scopeId,Z,$),ce){for(const ye in ce)ye!=="value"&&!Ni(ye)&&i(G,ye,null,ce[ye],B,$);"value"in ce&&i(G,"value",null,ce.value,B),(z=ce.onVnodeBeforeMount)&&Tn(z,$,T)}pe&&Wr(T,null,$,"beforeMount");const he=Ww(q,ae);he&&ae.beforeEnter(G),r(G,E,k),((z=ce&&ce.onVnodeMounted)||he||pe)&&Mt(()=>{z&&Tn(z,$,T),he&&ae.enter(G),pe&&Wr(T,null,$,"mounted")},q)},C=(T,E,k,$,q)=>{if(k&&m(T,k),$)for(let B=0;B<$.length;B++)m(T,$[B]);if(q){let B=q.subTree;if(E===B||p_(B.type)&&(B.ssContent===E||B.ssFallback===E)){const Z=q.vnode;C(T,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},v=(T,E,k,$,q,B,Z,W,G=0)=>{for(let z=G;z<T.length;z++){const ce=T[z]=W?gr(T[z]):bn(T[z]);A(null,ce,E,k,$,q,B,Z,W)}},y=(T,E,k,$,q,B,Z)=>{const W=E.el=T.el;let{patchFlag:G,dynamicChildren:z,dirs:ce}=E;G|=T.patchFlag&16;const J=T.props||Le,ae=E.props||Le;let pe;if(k&&Kr(k,!1),(pe=ae.onVnodeBeforeUpdate)&&Tn(pe,k,E,T),ce&&Wr(E,T,k,"beforeUpdate"),k&&Kr(k,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&h(W,""),z?b(T.dynamicChildren,z,W,k,$,_c(E,q),B):Z||Te(T,E,W,null,k,$,_c(E,q),B,!1),G>0){if(G&16)S(W,J,ae,k,q);else if(G&2&&J.class!==ae.class&&i(W,"class",null,ae.class,q),G&4&&i(W,"style",J.style,ae.style,q),G&8){const he=E.dynamicProps;for(let ye=0;ye<he.length;ye++){const Ce=he[ye],At=J[Ce],pt=ae[Ce];(pt!==At||Ce==="value")&&i(W,Ce,At,pt,q,k)}}G&1&&T.children!==E.children&&h(W,E.children)}else!Z&&z==null&&S(W,J,ae,k,q);((pe=ae.onVnodeUpdated)||ce)&&Mt(()=>{pe&&Tn(pe,k,E,T),ce&&Wr(E,T,k,"updated")},$)},b=(T,E,k,$,q,B,Z)=>{for(let W=0;W<E.length;W++){const G=T[W],z=E[W],ce=G.el&&(G.type===Ie||!As(G,z)||G.shapeFlag&198)?f(G.el):k;A(G,z,ce,null,$,q,B,Z,!0)}},S=(T,E,k,$,q)=>{if(E!==k){if(E!==Le)for(const B in E)!Ni(B)&&!(B in k)&&i(T,B,E[B],null,q,$);for(const B in k){if(Ni(B))continue;const Z=k[B],W=E[B];Z!==W&&B!=="value"&&i(T,B,W,Z,q,$)}"value"in k&&i(T,"value",E.value,k.value,q)}},R=(T,E,k,$,q,B,Z,W,G)=>{const z=E.el=T?T.el:l(""),ce=E.anchor=T?T.anchor:l("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:pe}=E;pe&&(W=W?W.concat(pe):pe),T==null?(r(z,k,$),r(ce,k,$),v(E.children||[],k,ce,q,B,Z,W,G)):J>0&&J&64&&ae&&T.dynamicChildren?(b(T.dynamicChildren,ae,k,q,B,Z,W),(E.key!=null||q&&E===q.subTree)&&ah(T,E,!0)):Te(T,E,k,ce,q,B,Z,W,G)},w=(T,E,k,$,q,B,Z,W,G)=>{E.slotScopeIds=W,T==null?E.shapeFlag&512?q.ctx.activate(E,k,$,Z,G):Oe(E,k,$,q,B,Z,G):rt(T,E,G)},Oe=(T,E,k,$,q,B,Z)=>{const W=T.component=hT(T,$,q);if(zm(T)&&(W.ctx.renderer=oe),fT(W,!1,Z),W.asyncDep){if(q&&q.registerDep(W,ze,Z),!T.el){const G=W.subTree=X(xn);N(null,G,E,k)}}else ze(W,T,E,k,q,B,Z)},rt=(T,E,k)=>{const $=E.component=T.component;if(nT(T,E,k))if($.asyncDep&&!$.asyncResolved){Re($,E,k);return}else $.next=E,$.update();else E.el=T.el,$.vnode=E},ze=(T,E,k,$,q,B,Z)=>{const W=()=>{if(T.isMounted){let{next:J,bu:ae,u:pe,parent:he,vnode:ye}=T;{const bt=u_(T);if(bt){J&&(J.el=ye.el,Re(T,J,Z)),bt.asyncDep.then(()=>{T.isUnmounted||W()});return}}let Ce=J,At;Kr(T,!1),J?(J.el=ye.el,Re(T,J,Z)):J=ye,ae&&da(ae),(At=J.props&&J.props.onVnodeBeforeUpdate)&&Tn(At,he,J,ye),Kr(T,!0);const pt=kf(T),en=T.subTree;T.subTree=pt,A(en,pt,f(en.el),F(en),T,q,B),J.el=pt.el,Ce===null&&rT(T,pt.el),pe&&Mt(pe,q),(At=J.props&&J.props.onVnodeUpdated)&&Mt(()=>Tn(At,he,J,ye),q)}else{let J;const{el:ae,props:pe}=E,{bm:he,m:ye,parent:Ce,root:At,type:pt}=T,en=Us(E);Kr(T,!1),he&&da(he),!en&&(J=pe&&pe.onVnodeBeforeMount)&&Tn(J,Ce,E),Kr(T,!0);{At.ce&&At.ce._injectChildStyle(pt);const bt=T.subTree=kf(T);A(null,bt,k,$,T,q,B),E.el=bt.el}if(ye&&Mt(ye,q),!en&&(J=pe&&pe.onVnodeMounted)){const bt=E;Mt(()=>Tn(J,Ce,bt),q)}(E.shapeFlag&256||Ce&&Us(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&T.a&&Mt(T.a,q),T.isMounted=!0,E=k=$=null}};T.scope.on();const G=T.effect=new gm(W);T.scope.off();const z=T.update=G.run.bind(G),ce=T.job=G.runIfDirty.bind(G);ce.i=T,ce.id=T.uid,G.scheduler=()=>nh(ce),Kr(T,!0),z()},Re=(T,E,k)=>{E.component=T;const $=T.vnode.props;T.vnode=E,T.next=null,$w(T,E.props,$,k),Hw(T,E.children,k),Gn(),vf(T),Wn()},Te=(T,E,k,$,q,B,Z,W,G=!1)=>{const z=T&&T.children,ce=T?T.shapeFlag:0,J=E.children,{patchFlag:ae,shapeFlag:pe}=E;if(ae>0){if(ae&128){cn(z,J,k,$,q,B,Z,W,G);return}else if(ae&256){Wt(z,J,k,$,q,B,Z,W,G);return}}pe&8?(ce&16&&$t(z,q,B),J!==z&&h(k,J)):ce&16?pe&16?cn(z,J,k,$,q,B,Z,W,G):$t(z,q,B,!0):(ce&8&&h(k,""),pe&16&&v(J,k,$,q,B,Z,W,G))},Wt=(T,E,k,$,q,B,Z,W,G)=>{T=T||Os,E=E||Os;const z=T.length,ce=E.length,J=Math.min(z,ce);let ae;for(ae=0;ae<J;ae++){const pe=E[ae]=G?gr(E[ae]):bn(E[ae]);A(T[ae],pe,k,null,q,B,Z,W,G)}z>ce?$t(T,q,B,!0,!1,J):v(E,k,$,q,B,Z,W,G,J)},cn=(T,E,k,$,q,B,Z,W,G)=>{let z=0;const ce=E.length;let J=T.length-1,ae=ce-1;for(;z<=J&&z<=ae;){const pe=T[z],he=E[z]=G?gr(E[z]):bn(E[z]);if(As(pe,he))A(pe,he,k,null,q,B,Z,W,G);else break;z++}for(;z<=J&&z<=ae;){const pe=T[J],he=E[ae]=G?gr(E[ae]):bn(E[ae]);if(As(pe,he))A(pe,he,k,null,q,B,Z,W,G);else break;J--,ae--}if(z>J){if(z<=ae){const pe=ae+1,he=pe<ce?E[pe].el:$;for(;z<=ae;)A(null,E[z]=G?gr(E[z]):bn(E[z]),k,he,q,B,Z,W,G),z++}}else if(z>ae)for(;z<=J;)Ge(T[z],q,B,!0),z++;else{const pe=z,he=z,ye=new Map;for(z=he;z<=ae;z++){const gt=E[z]=G?gr(E[z]):bn(E[z]);gt.key!=null&&ye.set(gt.key,z)}let Ce,At=0;const pt=ae-he+1;let en=!1,bt=0;const or=new Array(pt);for(z=0;z<pt;z++)or[z]=0;for(z=pe;z<=J;z++){const gt=T[z];if(At>=pt){Ge(gt,q,B,!0);continue}let tn;if(gt.key!=null)tn=ye.get(gt.key);else for(Ce=he;Ce<=ae;Ce++)if(or[Ce-he]===0&&As(gt,E[Ce])){tn=Ce;break}tn===void 0?Ge(gt,q,B,!0):(or[tn-he]=z+1,tn>=bt?bt=tn:en=!0,A(gt,E[tn],k,null,q,B,Z,W,G),At++)}const hi=en?Kw(or):Os;for(Ce=hi.length-1,z=pt-1;z>=0;z--){const gt=he+z,tn=E[gt],Vo=gt+1<ce?E[gt+1].el:$;or[z]===0?A(null,tn,k,Vo,q,B,Z,W,G):en&&(Ce<0||z!==hi[Ce]?Zt(tn,k,Vo,2):Ce--)}}},Zt=(T,E,k,$,q=null)=>{const{el:B,type:Z,transition:W,children:G,shapeFlag:z}=T;if(z&6){Zt(T.component.subTree,E,k,$);return}if(z&128){T.suspense.move(E,k,$);return}if(z&64){Z.move(T,E,k,oe);return}if(Z===Ie){r(B,E,k);for(let J=0;J<G.length;J++)Zt(G[J],E,k,$);r(T.anchor,E,k);return}if(Z===ga){M(T,E,k);return}if($!==2&&z&1&&W)if($===0)W.beforeEnter(B),r(B,E,k),Mt(()=>W.enter(B),q);else{const{leave:J,delayLeave:ae,afterLeave:pe}=W,he=()=>{T.ctx.isUnmounted?s(B):r(B,E,k)},ye=()=>{J(B,()=>{he(),pe&&pe()})};ae?ae(B,he,ye):ye()}else r(B,E,k)},Ge=(T,E,k,$=!1,q=!1)=>{const{type:B,props:Z,ref:W,children:G,dynamicChildren:z,shapeFlag:ce,patchFlag:J,dirs:ae,cacheIndex:pe}=T;if(J===-2&&(q=!1),W!=null&&(Gn(),Oa(W,null,k,T,!0),Wn()),pe!=null&&(E.renderCache[pe]=void 0),ce&256){E.ctx.deactivate(T);return}const he=ce&1&&ae,ye=!Us(T);let Ce;if(ye&&(Ce=Z&&Z.onVnodeBeforeUnmount)&&Tn(Ce,E,T),ce&6)wn(T.component,k,$);else{if(ce&128){T.suspense.unmount(k,$);return}he&&Wr(T,null,E,"beforeUnmount"),ce&64?T.type.remove(T,E,k,oe,$):z&&!z.hasOnce&&(B!==Ie||J>0&&J&64)?$t(z,E,k,!1,!0):(B===Ie&&J&384||!q&&ce&16)&&$t(G,E,k),$&&We(T)}(ye&&(Ce=Z&&Z.onVnodeUnmounted)||he)&&Mt(()=>{Ce&&Tn(Ce,E,T),he&&Wr(T,null,E,"unmounted")},k)},We=T=>{const{type:E,el:k,anchor:$,transition:q}=T;if(E===Ie){ir(k,$);return}if(E===ga){U(T);return}const B=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:W}=q,G=()=>Z(k,B);W?W(T.el,B,G):G()}else B()},ir=(T,E)=>{let k;for(;T!==E;)k=g(T),s(T),T=k;s(E)},wn=(T,E,k)=>{const{bum:$,scope:q,job:B,subTree:Z,um:W,m:G,a:z,parent:ce,slots:{__:J}}=T;Pf(G),Pf(z),$&&da($),ce&&fe(J)&&J.forEach(ae=>{ce.renderCache[ae]=void 0}),q.stop(),B&&(B.flags|=8,Ge(Z,T,E,k)),W&&Mt(W,E),Mt(()=>{T.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},$t=(T,E,k,$=!1,q=!1,B=0)=>{for(let Z=B;Z<T.length;Z++)Ge(T[Z],E,k,$,q)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const E=g(T.anchor||T.el),k=E&&E[Fm];return k?g(k):E};let te=!1;const ee=(T,E,k)=>{T==null?E._vnode&&Ge(E._vnode,null,null,!0):A(E._vnode||null,T,E,null,null,null,k),E._vnode=T,te||(te=!0,vf(),Vm(),te=!1)},oe={p:A,um:Ge,m:Zt,r:We,mt:Oe,mc:v,pc:Te,pbc:b,n:F,o:t};return{render:ee,hydrate:void 0,createApp:Uw(ee)}}function _c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ww(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ah(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=gr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ah(o,l)),l.type===gl&&(l.el=o.el),l.type===xn&&!l.el&&(l.el=o.el)}}function Kw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function u_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:u_(e)}function Pf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qw=Symbol.for("v-scx"),Xw=()=>fn(Qw);function Rr(t,e,n){return h_(t,e,n)}function h_(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=lt({},n),c=e&&r||!e&&i!=="post";let u;if(to){if(i==="sync"){const m=Xw();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Cn,m.resume=Cn,m.pause=Cn,m}}const h=wt;l.call=(m,I,A)=>_n(m,h,I,A);let f=!1;i==="post"?l.scheduler=m=>{Mt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(m,I)=>{I?m():nh(m)}),l.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=fw(t,e,l);return to&&(u?u.push(g):c&&g()),g}function Yw(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?d_(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=To(this),l=h_(s,i.bind(r),n);return o(),l}function d_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Jw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function Zw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&Jw(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ke(h)?h.trim():h)),o.number&&(s=n.map(jc)));let l,c=r[l=hc(e)]||r[l=hc(ln(e))];!c&&i&&(c=r[l=hc(cs(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function f_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const h=f_(u,e,!0);h&&(l=!0,lt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(je(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):lt(o,i),je(t)&&r.set(t,o),o)}function pl(t,e){return!t||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,cs(e))||Ne(t,e))}function kf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:I,inheritAttrs:A}=t,P=Na(t);let N,V;try{if(n.shapeFlag&4){const U=s||r,ie=U;N=bn(u.call(ie,U,h,f,m,g,I)),V=l}else{const U=e;N=bn(U.length>1?U(f,{attrs:l,slots:o,emit:c}):U(f,null)),V=e.props?l:eT(l)}}catch(U){Ui.length=0,dl(U,t,1),N=X(xn)}let M=N;if(V&&A!==!1){const U=Object.keys(V),{shapeFlag:ie}=M;U.length&&ie&7&&(i&&U.some(zu)&&(V=tT(V,i)),M=ts(M,V,!1,!0))}return n.dirs&&(M=ts(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Yi(M,n.transition),N=M,Na(P),N}const eT=t=>{let e;for(const n in t)(n==="class"||n==="style"||il(n))&&((e||(e={}))[n]=t[n]);return e},tT=(t,e)=>{const n={};for(const r in t)(!zu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xf(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==r[g]&&!pl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?xf(r,o,u):!0:!!o;return!1}function xf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pl(n,i))return!0}return!1}function rT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const p_=t=>t.__isSuspense;function sT(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):mw(t)}const Ie=Symbol.for("v-fgt"),gl=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),Ui=[];let Qt=null;function H(t=!1){Ui.push(Qt=t?null:[])}function iT(){Ui.pop(),Qt=Ui[Ui.length-1]||null}let Zi=1;function Df(t,e=!1){Zi+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function g_(t){return t.dynamicChildren=Zi>0?Qt||Os:null,iT(),Zi>0&&Qt&&Qt.push(t),t}function Y(t,e,n,r,s,i){return g_(D(t,e,n,r,s,i,!0))}function et(t,e,n,r,s){return g_(X(t,e,n,r,s,!0))}function eo(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const m_=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||xt(t)||_e(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Ie?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&m_(e),ref:e&&ma(e),scopeId:Lm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return l?(lh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Zi>0&&!o&&Qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Qt.push(c),c}const X=oT;function oT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qm)&&(t=xn),eo(t)){const l=ts(t,e,!0);return n&&lh(l,n),Zi>0&&!i&&Qt&&(l.shapeFlag&6?Qt[Qt.indexOf(t)]=l:Qt.push(l)),l.patchFlag=-2,l}if(yT(t)&&(t=t.__vccOpts),e){e=aT(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=On(l)),je(c)&&(eh(c)&&!fe(c)&&(c=lt({},c)),e.style=ul(c))}const o=Ke(t)?1:p_(t)?128:_w(t)?64:je(t)?4:_e(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function aT(t){return t?eh(t)||s_(t)?lt({},t):t:null}function ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?lT(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&m_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(ma(e)):[i,ma(e)]:ma(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Yi(h,c.clone(h)),h}function $e(t=" ",e=0){return X(gl,null,t,e)}function ml(t,e){const n=X(ga,null,t);return n.staticCount=e,n}function ft(t="",e=!1){return e?(H(),et(xn,null,t)):X(xn,null,t)}function bn(t){return t==null||typeof t=="boolean"?X(xn):fe(t)?X(Ie,null,t.slice()):eo(t)?gr(t):X(gl,null,String(t))}function gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function lh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!s_(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[$e(e)]):n=8);t.children=e,t.shapeFlag|=n}function lT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=On([e.class,r.class]));else if(s==="style")e.style=ul([e.style,r.style]);else if(il(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Tn(t,e,n,r=null){_n(t,e,7,[n,r])}const cT=t_();let uT=0;function hT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cT,i={uid:uT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:o_(r,s),emitsOptions:f_(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zw.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const dT=()=>wt||dt;let Ma,Zc;{const t=cl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ma=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Zc=e("__VUE_SSR_SETTERS__",n=>to=n)}const To=t=>{const e=wt;return Ma(t),t.scope.on(),()=>{t.scope.off(),Ma(e)}},Nf=()=>{wt&&wt.scope.off(),Ma(null)};function __(t){return t.vnode.shapeFlag&4}let to=!1;function fT(t,e=!1,n=!1){e&&Zc(e);const{props:r,children:s}=t.vnode,i=__(t);Fw(t,r,i,e),qw(t,s,n||e);const o=i?pT(t,e):void 0;return e&&Zc(!1),o}function pT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xw);const{setup:r}=n;if(r){Gn();const s=t.setupContext=r.length>1?mT(t):null,i=To(t),o=vo(r,t,0,[t.props,s]),l=lm(o);if(Wn(),i(),(l||t.sp)&&!Us(t)&&Hm(t),l){if(o.then(Nf,Nf),e)return o.then(c=>{Of(t,c)}).catch(c=>{dl(c,t,0)});t.asyncDep=o}else Of(t,o)}else y_(t)}function Of(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Dm(e)),y_(t)}function y_(t,e,n){const r=t.type;t.render||(t.render=r.render||Cn);{const s=To(t);Gn();try{Dw(t)}finally{Wn(),s()}}}const gT={get(t,e){return kt(t,"get",""),t[e]}};function mT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gT),slots:t.slots,emit:t.emit,expose:e}}function _l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dm(ow(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}})):t.proxy}function _T(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function yT(t){return _e(t)&&"__vccOpts"in t}const Be=(t,e)=>hw(t,e,to);function v_(t,e,n){const r=arguments.length;return r===2?je(e)&&!fe(e)?eo(e)?X(t,null,[e]):X(t,e):X(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&eo(n)&&(n=[n]),X(t,e,n))}const vT="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eu;const Vf=typeof window<"u"&&window.trustedTypes;if(Vf)try{eu=Vf.createPolicy("vue",{createHTML:t=>t})}catch{}const w_=eu?t=>eu.createHTML(t):t=>t,wT="http://www.w3.org/2000/svg",TT="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,Mf=$n&&$n.createElement("template"),ET={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?$n.createElementNS(wT,t):e==="mathml"?$n.createElementNS(TT,t):n?$n.createElement(t,{is:n}):$n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mf.innerHTML=w_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Mf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ur="transition",bi="animation",zs=Symbol("_vtc"),T_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},IT=lt({},ww,T_),Qr=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lf=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function AT(t){const e={};for(const R in t)R in T_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=bT(s),A=I&&I[0],P=I&&I[1],{onBeforeEnter:N,onEnter:V,onEnterCancelled:M,onLeave:U,onLeaveCancelled:ie,onBeforeAppear:re=N,onAppear:C=V,onAppearCancelled:v=M}=e,y=(R,w,Oe,rt)=>{R._enterCancelled=rt,fr(R,w?h:l),fr(R,w?u:o),Oe&&Oe()},b=(R,w)=>{R._isLeaving=!1,fr(R,f),fr(R,m),fr(R,g),w&&w()},S=R=>(w,Oe)=>{const rt=R?C:V,ze=()=>y(w,R,Oe);Qr(rt,[w,ze]),Uf(()=>{fr(w,R?c:i),En(w,R?h:l),Lf(rt)||Ff(w,r,A,ze)})};return lt(e,{onBeforeEnter(R){Qr(N,[R]),En(R,i),En(R,o)},onBeforeAppear(R){Qr(re,[R]),En(R,c),En(R,u)},onEnter:S(!1),onAppear:S(!0),onLeave(R,w){R._isLeaving=!0;const Oe=()=>b(R,w);En(R,f),R._enterCancelled?(En(R,g),tu()):(tu(),En(R,g)),Uf(()=>{R._isLeaving&&(fr(R,f),En(R,m),Lf(U)||Ff(R,r,P,Oe))}),Qr(U,[R,Oe])},onEnterCancelled(R){y(R,!1,void 0,!0),Qr(M,[R])},onAppearCancelled(R){y(R,!0,void 0,!0),Qr(v,[R])},onLeaveCancelled(R){b(R),Qr(ie,[R])}})}function bT(t){if(t==null)return null;if(je(t))return[yc(t.enter),yc(t.leave)];{const e=yc(t);return[e,e]}}function yc(t){return N1(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[zs]||(t[zs]=new Set)).add(e)}function fr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[zs];n&&(n.delete(e),n.size||(t[zs]=void 0))}function Uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let RT=0;function Ff(t,e,n,r){const s=t._endId=++RT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=E_(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},l+1),t.addEventListener(u,g)}function E_(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${ur}Delay`),i=r(`${ur}Duration`),o=$f(s,i),l=r(`${bi}Delay`),c=r(`${bi}Duration`),u=$f(l,c);let h=null,f=0,g=0;e===ur?o>0&&(h=ur,f=o,g=i.length):e===bi?u>0&&(h=bi,f=u,g=c.length):(f=Math.max(o,u),h=f>0?o>u?ur:bi:null,g=h?h===ur?i.length:c.length:0);const m=h===ur&&/\b(transform|all)(,|$)/.test(r(`${ur}Property`).toString());return{type:h,timeout:f,propCount:g,hasTransform:m}}function $f(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Bf(n)+Bf(t[r])))}function Bf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tu(){return document.body.offsetHeight}function CT(t,e,n){const r=t[zs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jf=Symbol("_vod"),ST=Symbol("_vsh"),PT=Symbol(""),kT=/(^|;)\s*display\s*:/;function xT(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&_a(r,l,"")}else for(const o in e)n[o]==null&&_a(r,o,"");for(const o in n)o==="display"&&(i=!0),_a(r,o,n[o])}else if(s){if(e!==n){const o=r[PT];o&&(n+=";"+o),r.cssText=n,i=kT.test(n)}}else e&&t.removeAttribute("style");jf in t&&(t[jf]=i?r.display:"",t[ST]&&(r.display="none"))}const qf=/\s*!important$/;function _a(t,e,n){if(fe(n))n.forEach(r=>_a(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=DT(t,e);qf.test(n)?t.setProperty(cs(r),n.replace(qf,""),"important"):t[r]=n}}const Hf=["Webkit","Moz","ms"],vc={};function DT(t,e){const n=vc[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return vc[e]=r;r=ll(r);for(let s=0;s<Hf.length;s++){const i=Hf[s]+r;if(i in t)return vc[e]=i}return e}const zf="http://www.w3.org/1999/xlink";function Gf(t,e,n,r,s,i=F1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zf,e.slice(6,e.length)):t.setAttributeNS(zf,e,n):n==null||i&&!dm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function Wf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?w_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=dm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function bs(t,e,n,r){t.addEventListener(e,n,r)}function NT(t,e,n,r){t.removeEventListener(e,n,r)}const Kf=Symbol("_vei");function OT(t,e,n,r,s=null){const i=t[Kf]||(t[Kf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=VT(e);if(r){const u=i[e]=UT(r,s);bs(t,l,u,c)}else o&&(NT(t,l,o,c),i[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function VT(t){let e;if(Qf.test(t)){e={};let r;for(;r=t.match(Qf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let wc=0;const MT=Promise.resolve(),LT=()=>wc||(MT.then(()=>wc=0),wc=Date.now());function UT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(FT(r,n.value),e,5,[r])};return n.value=t,n.attached=LT(),n}function FT(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$T=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?CT(t,r,o):e==="style"?xT(t,n,r):il(e)?zu(e)||OT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BT(t,e,r,o))?(Wf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?Wf(t,ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gf(t,e,r,o))};function BT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xf(e)&&Ke(n)?!1:e in t}const I_=new WeakMap,A_=new WeakMap,La=Symbol("_moveCb"),Yf=Symbol("_enterCb"),jT=t=>(delete t.props.mode,t),qT=jT({name:"TransitionGroup",props:lt({},IT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=dT(),r=vw();let s,i;return Wm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!KT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(zT),s.forEach(GT);const l=s.filter(WT);tu(),l.forEach(c=>{const u=c.el,h=u.style;En(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[La]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",f),u[La]=null,fr(u,o))};u.addEventListener("transitionend",f)}),s=[]}),()=>{const o=xe(t),l=AT(o);let c=o.tag||Ie;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Yi(h,Kc(h,l,r,n)),I_.set(h,h.el.getBoundingClientRect()))}i=e.default?qm(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Yi(h,Kc(h,l,r,n))}return X(c,null,i)}}}),HT=qT;function zT(t){const e=t.el;e[La]&&e[La](),e[Yf]&&e[Yf]()}function GT(t){A_.set(t,t.el.getBoundingClientRect())}function WT(t){const e=I_.get(t),n=A_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function KT(t,e,n){const r=t.cloneNode(),s=t[zs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=E_(r);return i.removeChild(r),o}const Jf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>da(e,n):e};function QT(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tc=Symbol("_assign"),b_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Tc]=Jf(s);const i=r||s.props&&s.props.type==="number";bs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=jc(l)),t[Tc](l)}),n&&bs(t,"change",()=>{t.value=t.value.trim()}),e||(bs(t,"compositionstart",QT),bs(t,"compositionend",Zf),bs(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Tc]=Jf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?jc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},XT=lt({patchProp:$T},ET);let ep;function YT(){return ep||(ep=zw(XT))}const R_=(...t)=>{const e=YT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ZT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,JT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function JT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ZT(t){return Ke(t)?document.querySelector(t):t}const ct=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},eE={};function tE(t,e){const n=wo("router-view");return H(),et(n)}const nE=ct(eE,[["render",tE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof document<"u";function C_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&C_(t.default)}const De=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const Fi=()=>{},yn=Array.isArray,S_=/#/g,sE=/&/g,iE=/\//g,oE=/=/g,aE=/\?/g,P_=/\+/g,lE=/%5B/g,cE=/%5D/g,k_=/%5E/g,uE=/%60/g,x_=/%7B/g,hE=/%7C/g,D_=/%7D/g,dE=/%20/g;function ch(t){return encodeURI(""+t).replace(hE,"|").replace(lE,"[").replace(cE,"]")}function fE(t){return ch(t).replace(x_,"{").replace(D_,"}").replace(k_,"^")}function nu(t){return ch(t).replace(P_,"%2B").replace(dE,"+").replace(S_,"%23").replace(sE,"%26").replace(uE,"`").replace(x_,"{").replace(D_,"}").replace(k_,"^")}function pE(t){return nu(t).replace(oE,"%3D")}function gE(t){return ch(t).replace(S_,"%23").replace(aE,"%3F")}function mE(t){return t==null?"":gE(t).replace(iE,"%2F")}function no(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _E=/\/$/,yE=t=>t.replace(_E,"");function Ic(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=EE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:no(o)}}function vE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gs(e.matched[r],n.matched[s])&&N_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function N_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TE(t[n],e[n]))return!1;return!0}function TE(t,e){return yn(t)?np(t,e):yn(e)?np(e,t):t===e}function np(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function EE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ro;(function(t){t.pop="pop",t.push="push"})(ro||(ro={}));var $i;(function(t){t.back="back",t.forward="forward",t.unknown=""})($i||($i={}));function IE(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yE(t)}const AE=/^[^#]+#/;function bE(t,e){return t.replace(AE,"#")+e}function RE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yl=()=>({left:window.scrollX,top:window.scrollY});function CE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=RE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rp(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function SE(t,e){ru.set(t,e)}function PE(t){const e=ru.get(t);return ru.delete(t),e}let kE=()=>location.protocol+"//"+location.host;function O_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),tp(c,"")}return tp(n,t)+r+s}function xE(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const m=O_(t,location),I=n.value,A=e.value;let P=0;if(g){if(n.value=m,e.value=g,o&&o===I){o=null;return}P=A?g.position-A.position:0}else r(m);s.forEach(N=>{N(n.value,I,{delta:P,type:ro.pop,direction:P?P>0?$i.forward:$i.back:$i.unknown})})};function c(){o=n.value}function u(g){s.push(g);const m=()=>{const I=s.indexOf(g);I>-1&&s.splice(I,1)};return i.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(De({},g.state,{scroll:yl()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function sp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?yl():null}}function DE(t){const{history:e,location:n}=window,r={value:O_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:kE()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](g)}}function o(c,u){const h=De({},e.state,sp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=De({},s.value,e.state,{forward:c,scroll:yl()});i(h.current,h,!0);const f=De({},sp(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function NE(t){t=IE(t);const e=DE(t),n=xE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function OE(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const M_=Symbol("");var ip;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ip||(ip={}));function Ws(t,e){return De(new Error,{type:t,[M_]:!0},e)}function Fn(t,e){return t instanceof Error&&M_ in t&&(e==null||!!(t.type&e))}const op="[^/]+?",VE={sensitive:!1,strict:!1,start:!0,end:!0},ME=/[.+*?^${}()[\]/\\]/g;function LE(t,e){const n=De({},VE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(n.sensitive?.25:0);if(g.type===0)f||(s+="/"),s+=g.value.replace(ME,"\\$&"),m+=40;else if(g.type===1){const{value:I,repeatable:A,optional:P,regexp:N}=g;i.push({name:I,repeatable:A,optional:P});const V=N||op;if(V!==op){m+=10;try{new RegExp(`(${V})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${I}" (${V}): `+U.message)}}let M=A?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;f||(M=P&&u.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),s+=M,m+=20,P&&(m+=-8),A&&(m+=-20),V===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",I=i[g-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:I,repeatable:A,optional:P}=m,N=I in u?u[I]:"";if(yn(N)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const V=yn(N)?N.join("/"):N;if(!V)if(P)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);h+=V}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function UE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function L_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=UE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ap(r))return 1;if(ap(s))return-1}return s.length-r.length}function ap(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const FE={type:0,value:""},$E=/[a-zA-Z0-9_]/;function BE(t){if(!t)return[[]];if(t==="/")return[[FE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:$E.test(c)?g():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function jE(t,e,n){const r=LE(BE(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qE(t,e){const n=[],r=new Map;e=hp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,g,m){const I=!m,A=cp(f);A.aliasOf=m&&m.record;const P=hp(e,f),N=[A];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const ie of U)N.push(cp(De({},A,{components:m?m.record.components:A.components,path:ie,aliasOf:m?m.record:A})))}let V,M;for(const U of N){const{path:ie}=U;if(g&&ie[0]!=="/"){const re=g.record.path,C=re[re.length-1]==="/"?"":"/";U.path=g.record.path+(ie&&C+ie)}if(V=jE(U,g,P),m?m.alias.push(V):(M=M||V,M!==V&&M.alias.push(V),I&&f.name&&!up(V)&&o(f.name)),U_(V)&&c(V),A.children){const re=A.children;for(let C=0;C<re.length;C++)i(re[C],V,m&&m.children[C])}m=m||V}return M?()=>{o(M)}:Fi}function o(f){if(V_(f)){const g=r.get(f);g&&(r.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const g=GE(f,n);n.splice(g,0,f),f.record.name&&!up(f)&&r.set(f.record.name,f)}function u(f,g){let m,I={},A,P;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Ws(1,{location:f});P=m.record.name,I=De(lp(g.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&lp(f.params,m.keys.map(M=>M.name))),A=m.stringify(I)}else if(f.path!=null)A=f.path,m=n.find(M=>M.re.test(A)),m&&(I=m.parse(A),P=m.record.name);else{if(m=g.name?r.get(g.name):n.find(M=>M.re.test(g.path)),!m)throw Ws(1,{location:f,currentLocation:g});P=m.record.name,I=De({},g.params,f.params),A=m.stringify(I)}const N=[];let V=m;for(;V;)N.unshift(V.record),V=V.parent;return{name:P,path:A,params:I,matched:N,meta:zE(N)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function lp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:HE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function up(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zE(t){return t.reduce((e,n)=>De(e,n.meta),{})}function hp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function GE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;L_(t,e[i])<0?r=i:n=i+1}const s=WE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function WE(t){let e=t;for(;e=e.parent;)if(U_(e)&&L_(t,e)===0)return e}function U_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function KE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(P_," "),o=i.indexOf("="),l=no(o<0?i:i.slice(0,o)),c=o<0?null:no(i.slice(o+1));if(l in e){let u=e[l];yn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function dp(t){let e="";for(let n in t){const r=t[n];if(n=pE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function QE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const XE=Symbol(""),fp=Symbol(""),vl=Symbol(""),uh=Symbol(""),su=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ws(4,{from:n,to:e})):g instanceof Error?c(g):OE(g)?c(Ws(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Ac(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(C_(c)){const h=(c.__vccOpts||c)[e];h&&i.push(mr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=rE(h)?h.default:h;o.mods[l]=h,o.components[l]=f;const m=(f.__vccOpts||f)[e];return m&&mr(m,n,r,o,l,s)()}))}}return i}function pp(t){const e=fn(vl),n=fn(uh),r=Be(()=>{const c=se(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const g=f.findIndex(Gs.bind(null,h));if(g>-1)return g;const m=gp(c[u-2]);return u>1&&gp(h)===m&&f[f.length-1].path!==m?f.findIndex(Gs.bind(null,c[u-2])):g}),i=Be(()=>s.value>-1&&tI(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&N_(n.params,r.value.params));function l(c={}){if(eI(c)){const u=e[se(t.replace)?"replace":"push"](se(t.to)).catch(Fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function YE(t){return t.length===1?t[0]:t}const JE=Je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pp,setup(t,{slots:e}){const n=ti(pp(t)),{options:r}=fn(vl),s=Be(()=>({[mp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&YE(e.default(n));return t.custom?i:v_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZE=JE;function eI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function gp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mp=(t,e,n)=>t??e??n,nI=Je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=fn(su),s=Be(()=>t.route||r.value),i=fn(fp,0),o=Be(()=>{let u=se(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);pa(fp,Be(()=>o.value+1)),pa(XE,l),pa(su,s);const c=we();return Rr(()=>[c.value,l.value,t.name],([u,h,f],[g,m,I])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Gs(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=l.value,g=f&&f.components[h];if(!g)return _p(n.default,{Component:g,route:u});const m=f.props[h],I=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=v_(g,De({},I,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return _p(n.default,{Component:P,route:u})||P}}});function _p(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rI=nI;function sI(t){const e=qE(t.routes,t),n=t.parseQuery||KE,r=t.stringifyQuery||dp,s=t.history,i=Ri(),o=Ri(),l=Ri(),c=aw(hr);let u=hr;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ec.bind(null,F=>""+F),f=Ec.bind(null,mE),g=Ec.bind(null,no);function m(F,te){let ee,oe;return V_(F)?(ee=e.getRecordMatcher(F),oe=te):oe=F,e.addRoute(oe,ee)}function I(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function A(){return e.getRoutes().map(F=>F.record)}function P(F){return!!e.getRecordMatcher(F)}function N(F,te){if(te=De({},te||c.value),typeof F=="string"){const k=Ic(n,F,te.path),$=e.resolve({path:k.path},te),q=s.createHref(k.fullPath);return De(k,$,{params:g($.params),hash:no(k.hash),redirectedFrom:void 0,href:q})}let ee;if(F.path!=null)ee=De({},F,{path:Ic(n,F.path,te.path).path});else{const k=De({},F.params);for(const $ in k)k[$]==null&&delete k[$];ee=De({},F,{params:f(k)}),te.params=f(te.params)}const oe=e.resolve(ee,te),Pe=F.hash||"";oe.params=h(g(oe.params));const T=vE(r,De({},F,{hash:fE(Pe),path:oe.path})),E=s.createHref(T);return De({fullPath:T,hash:Pe,query:r===dp?QE(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:E})}function V(F){return typeof F=="string"?Ic(n,F,c.value.path):De({},F)}function M(F,te){if(u!==F)return Ws(8,{from:te,to:F})}function U(F){return C(F)}function ie(F){return U(De(V(F),{replace:!0}))}function re(F){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:ee}=te;let oe=typeof ee=="function"?ee(F):ee;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=V(oe):{path:oe},oe.params={}),De({query:F.query,hash:F.hash,params:oe.path!=null?{}:F.params},oe)}}function C(F,te){const ee=u=N(F),oe=c.value,Pe=F.state,T=F.force,E=F.replace===!0,k=re(ee);if(k)return C(De(V(k),{state:typeof k=="object"?De({},Pe,k.state):Pe,force:T,replace:E}),te||ee);const $=ee;$.redirectedFrom=te;let q;return!T&&wE(r,oe,ee)&&(q=Ws(16,{to:$,from:oe}),Zt(oe,oe,!0,!1)),(q?Promise.resolve(q):b($,oe)).catch(B=>Fn(B)?Fn(B,2)?B:cn(B):Te(B,$,oe)).then(B=>{if(B){if(Fn(B,2))return C(De({replace:E},V(B.to),{state:typeof B.to=="object"?De({},Pe,B.to.state):Pe,force:T}),te||$)}else B=R($,oe,!0,E,Pe);return S($,oe,B),B})}function v(F,te){const ee=M(F,te);return ee?Promise.reject(ee):Promise.resolve()}function y(F){const te=ir.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function b(F,te){let ee;const[oe,Pe,T]=iI(F,te);ee=Ac(oe.reverse(),"beforeRouteLeave",F,te);for(const k of oe)k.leaveGuards.forEach($=>{ee.push(mr($,F,te))});const E=v.bind(null,F,te);return ee.push(E),$t(ee).then(()=>{ee=[];for(const k of i.list())ee.push(mr(k,F,te));return ee.push(E),$t(ee)}).then(()=>{ee=Ac(Pe,"beforeRouteUpdate",F,te);for(const k of Pe)k.updateGuards.forEach($=>{ee.push(mr($,F,te))});return ee.push(E),$t(ee)}).then(()=>{ee=[];for(const k of T)if(k.beforeEnter)if(yn(k.beforeEnter))for(const $ of k.beforeEnter)ee.push(mr($,F,te));else ee.push(mr(k.beforeEnter,F,te));return ee.push(E),$t(ee)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),ee=Ac(T,"beforeRouteEnter",F,te,y),ee.push(E),$t(ee))).then(()=>{ee=[];for(const k of o.list())ee.push(mr(k,F,te));return ee.push(E),$t(ee)}).catch(k=>Fn(k,8)?k:Promise.reject(k))}function S(F,te,ee){l.list().forEach(oe=>y(()=>oe(F,te,ee)))}function R(F,te,ee,oe,Pe){const T=M(F,te);if(T)return T;const E=te===hr,k=Rs?history.state:{};ee&&(oe||E?s.replace(F.fullPath,De({scroll:E&&k&&k.scroll},Pe)):s.push(F.fullPath,Pe)),c.value=F,Zt(F,te,ee,E),cn()}let w;function Oe(){w||(w=s.listen((F,te,ee)=>{if(!wn.listening)return;const oe=N(F),Pe=re(oe);if(Pe){C(De(Pe,{replace:!0,force:!0}),oe).catch(Fi);return}u=oe;const T=c.value;Rs&&SE(rp(T.fullPath,ee.delta),yl()),b(oe,T).catch(E=>Fn(E,12)?E:Fn(E,2)?(C(De(V(E.to),{force:!0}),oe).then(k=>{Fn(k,20)&&!ee.delta&&ee.type===ro.pop&&s.go(-1,!1)}).catch(Fi),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),Te(E,oe,T))).then(E=>{E=E||R(oe,T,!1),E&&(ee.delta&&!Fn(E,8)?s.go(-ee.delta,!1):ee.type===ro.pop&&Fn(E,20)&&s.go(-1,!1)),S(oe,T,E)}).catch(Fi)}))}let rt=Ri(),ze=Ri(),Re;function Te(F,te,ee){cn(F);const oe=ze.list();return oe.length?oe.forEach(Pe=>Pe(F,te,ee)):console.error(F),Promise.reject(F)}function Wt(){return Re&&c.value!==hr?Promise.resolve():new Promise((F,te)=>{rt.add([F,te])})}function cn(F){return Re||(Re=!F,Oe(),rt.list().forEach(([te,ee])=>F?ee(F):te()),rt.reset()),F}function Zt(F,te,ee,oe){const{scrollBehavior:Pe}=t;if(!Rs||!Pe)return Promise.resolve();const T=!ee&&PE(rp(F.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return th().then(()=>Pe(F,te,T)).then(E=>E&&CE(E)).catch(E=>Te(E,F,te))}const Ge=F=>s.go(F);let We;const ir=new Set,wn={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:A,resolve:N,options:t,push:U,replace:ie,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:Wt,install(F){const te=this;F.component("RouterLink",ZE),F.component("RouterView",rI),F.config.globalProperties.$router=te,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>se(c)}),Rs&&!We&&c.value===hr&&(We=!0,U(s.location).catch(Pe=>{}));const ee={};for(const Pe in hr)Object.defineProperty(ee,Pe,{get:()=>c.value[Pe],enumerable:!0});F.provide(vl,te),F.provide(uh,Pm(ee)),F.provide(su,c);const oe=F.unmount;ir.add(F),F.unmount=function(){ir.delete(F),ir.size<1&&(u=hr,w&&w(),w=null,c.value=hr,We=!1,Re=!1),oe()}}};function $t(F){return F.reduce((te,ee)=>te.then(()=>y(ee)),Promise.resolve())}return wn}function iI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Gs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Gs(u,c))||s.push(c))}return[n,r,s]}function F_(){return fn(vl)}function $_(t){return fn(uh)}const oI=()=>{};var yp={};/**
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
 */const B_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),r.push(n[h],n[f],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new lI;const g=i<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),f!==64){const I=u<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(t){const e=B_(t);return hh.encodeByteArray(e,!0)},Ua=function(t){return cI(t).replace(/\./g,"")},j_=function(t){try{return hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>q_().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof yp>"u")return;const t=yp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&j_(t[1]);return e&&JSON.parse(e)},wl=()=>{try{return oI()||uI()||hI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H_=t=>{var e,n;return(n=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z_=t=>{const e=H_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>{var t;return(t=wl())===null||t===void 0?void 0:t.config},W_=t=>{var e;return(e=wl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function us(t){return t.endsWith(".cloudworkstations.dev")}async function dh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function K_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),""].join(".")}const Bi={};function fI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?t.emulator.push(e):t.prod.push(e);return t}function pI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vp=!1;function fh(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Bi[t]===e||Bi[t]||vp)return;Bi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=fI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vp=!0,o()},g}function h(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=pI(r),m=n("text"),I=document.getElementById(m)||document.createElement("span"),A=n("learnmore"),P=document.getElementById(A)||document.createElement("a"),N=n("preprendIcon"),V=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const M=g.element;l(M),h(P,A);const U=u();c(V,N),M.append(V,I,P,U),document.body.appendChild(M)}i?(I.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function mI(){var t;const e=(t=wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TI(){return!mI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ph(){try{return typeof indexedDB=="object"}catch{return!1}}function EI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const II="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=II,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?AI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function AI(t,e){return t.replace(bI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wp(i)&&wp(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wp(t){return t!==null&&typeof t=="object"}/**
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
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function CI(t,e){const n=new SI(t,e);return n.subscribe.bind(n)}class SI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */const kI=1e3,xI=2,DI=4*60*60*1e3,NI=.5;function OI(t,e=kI,n=xI){const r=e*Math.pow(n,t),s=Math.round(NI*r*(Math.random()-.5)*2);return Math.min(DI,r+s)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new so;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(t){return t===Yr?void 0:t}function LI(t){return t.instantiationMode==="EAGER"}/**
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
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const FI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},$I=Ee.INFO,BI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},jI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=BI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=jI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const qI=(t,e)=>e.some(n=>t instanceof n);let Tp,Ep;function HI(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zI(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,iu=new WeakMap,X_=new WeakMap,Rc=new WeakMap,gh=new WeakMap;function GI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q_.set(n,t)}).catch(()=>{}),gh.set(e,t),e}function WI(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KI(t){ou=t(ou)}function QI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return X_.set(r,e.sort?e.sort():[e]),Cr(r)}:zI().includes(t)?function(...e){return t.apply(Cc(this),e),Cr(Q_.get(this))}:function(...e){return Cr(t.apply(Cc(this),e))}}function XI(t){return typeof t=="function"?QI(t):(t instanceof IDBTransaction&&WI(t),qI(t,HI())?new Proxy(t,ou):t)}function Cr(t){if(t instanceof IDBRequest)return GI(t);if(Rc.has(t))return Rc.get(t);const e=XI(t);return e!==t&&(Rc.set(t,e),gh.set(e,t)),e}const Cc=t=>gh.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cr(o.result),c.oldVersion,c.newVersion,Cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const JI=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],Sc=new Map;function Ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Sc.set(e,i),i}KI(t=>({...t,get:(e,n,r)=>Ip(e,n)||t.get(e,n,r),has:(e,n)=>!!Ip(e,n)||t.has(e,n)}));/**
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
 */class eA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",Ap="0.13.0";/**
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
 */const Qn=new Tl("@firebase/app"),nA="@firebase/app-compat",rA="@firebase/analytics-compat",sA="@firebase/analytics",iA="@firebase/app-check-compat",oA="@firebase/app-check",aA="@firebase/auth",lA="@firebase/auth-compat",cA="@firebase/database",uA="@firebase/data-connect",hA="@firebase/database-compat",dA="@firebase/functions",fA="@firebase/functions-compat",pA="@firebase/installations",gA="@firebase/installations-compat",mA="@firebase/messaging",_A="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",wA="@firebase/remote-config",TA="@firebase/remote-config-compat",EA="@firebase/storage",IA="@firebase/storage-compat",AA="@firebase/firestore",bA="@firebase/ai",RA="@firebase/firestore-compat",CA="firebase",SA="11.8.0";/**
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
 */const lu="[DEFAULT]",PA={[au]:"fire-core",[nA]:"fire-core-compat",[sA]:"fire-analytics",[rA]:"fire-analytics-compat",[oA]:"fire-app-check",[iA]:"fire-app-check-compat",[aA]:"fire-auth",[lA]:"fire-auth-compat",[cA]:"fire-rtdb",[uA]:"fire-data-connect",[hA]:"fire-rtdb-compat",[dA]:"fire-fn",[fA]:"fire-fn-compat",[pA]:"fire-iid",[gA]:"fire-iid-compat",[mA]:"fire-fcm",[_A]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[wA]:"fire-rc",[TA]:"fire-rc-compat",[EA]:"fire-gcs",[IA]:"fire-gcs-compat",[AA]:"fire-fst",[RA]:"fire-fst-compat",[bA]:"fire-vertex","fire-js":"fire-js",[CA]:"fire-js-all"};/**
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
 */const Fa=new Map,kA=new Map,cu=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(cu.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of Fa.values())bp(n,t);for(const n of kA.values())bp(n,t);return!0}function ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const xA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new ni("app","Firebase",xA);/**
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
 */class DA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=SA;function Y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=G_()),!n)throw Sr.create("no-options");const i=Fa.get(s);if(i){if(ns(n,i.options)&&ns(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new UI(s);for(const c of cu.values())o.addComponent(c);const l=new DA(n,r,o);return Fa.set(s,l),l}function El(t=lu){const e=Fa.get(t);if(!e&&t===lu&&G_())return Y_();if(!e)throw Sr.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let s=(r=PA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}Xn(new Dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const NA="firebase-heartbeat-database",OA=1,io="firebase-heartbeat-store";let Pc=null;function J_(){return Pc||(Pc=YI(NA,OA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(io)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function VA(t){try{const n=(await J_()).transaction(io),r=await n.objectStore(io).get(Z_(t));return await n.done,r}catch(e){if(e instanceof Vn)Qn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Rp(t,e){try{const r=(await J_()).transaction(io,"readwrite");await r.objectStore(io).put(e,Z_(t)),await r.done}catch(n){if(n instanceof Vn)Qn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Z_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MA=1024,LA=30;class UA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LA){const o=BA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cp(),{heartbeatsToSend:r,unsentEntries:s}=FA(this._heartbeatsCache.heartbeats),i=Ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function Cp(){return new Date().toISOString().substring(0,10)}function FA(t,e=MA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?EI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}function BA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jA(t){Xn(new Dn("platform-logger",e=>new eA(e),"PRIVATE")),Xn(new Dn("heartbeat",e=>new UA(e),"PRIVATE")),pn(au,Ap,t),pn(au,Ap,"esm2017"),pn("fire-js","")}jA("");var qA="firebase",HA="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(qA,HA,"app");function mh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=ey,ty=new ni("auth","Firebase",ey());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Tl("@firebase/auth");function GA(t,...e){$a.logLevel<=Ee.WARN&&$a.warn(`Auth (${hs}): ${t}`,...e)}function ya(t,...e){$a.logLevel<=Ee.ERROR&&$a.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,...e){throw _h(t,...e)}function Sn(t,...e){return _h(t,...e)}function ny(t,e,n){const r=Object.assign(Object.assign({},zA()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Pr(t){return ny(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ty.create(t,...e)}function me(t,e,...n){if(!t)throw _h(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ya(e),new Error(e)}function Jn(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WA(){return Pp()==="http:"||Pp()==="https:"}function Pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WA()||yI()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=gI()||vI()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JA=new Io(3e4,6e4);function Il(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,s={}){return sy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return _I()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),ry.fetch()(await oy(t,t.config.apiHost,n,l),u)})}async function sy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XA),e);try{const s=new ZA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw na(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ny(t,h,u);Yn(t,h)}}catch(s){if(s instanceof Vn)throw s;Yn(t,"network-request-failed",{message:String(s)})}}async function iy(t,e,n,r,s={}){const i=await si(t,e,n,r,s);return"mfaPendingCredential"in i&&Yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function oy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?yh(t.config,s):`${t.config.apiScheme}://${s}`;return YA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ZA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),JA.get())})}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function Ba(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tb(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=vh(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ji(kc(s.auth_time)),issuedAtTime:ji(kc(s.iat)),expirationTime:ji(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function vh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ya("JWT malformed, contained fewer than 3 sections"),null;try{const s=j_(n);return s?JSON.parse(s):(ya("Failed to decode base64 JWT payload"),null)}catch(s){return ya("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kp(t){const e=vh(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&nb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oo(t,Ba(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ay(i.providerUserInfo):[],l=ib(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new hu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sb(t){const e=He(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ib(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ay(t){return t.map(e=>{var{providerId:n}=e,r=mh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){const n=await sy(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await oy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ry.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ab(t,e){return si(t,"POST","/v2/accounts:revokeToken",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=kp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ob(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tb(this,e)}reload(){return sb(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await oo(this,eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:U,isAnonymous:ie,providerData:re,stsTokenManager:C}=n;me(M&&C,e,"internal-error");const v=$s.fromJSON(this.name,C);me(typeof M=="string",e,"internal-error"),dr(f,e.name),dr(g,e.name),me(typeof U=="boolean",e,"internal-error"),me(typeof ie=="boolean",e,"internal-error"),dr(m,e.name),dr(I,e.name),dr(A,e.name),dr(P,e.name),dr(N,e.name),dr(V,e.name);const y=new hn({uid:M,auth:e,email:g,emailVerified:U,displayName:f,isAnonymous:ie,photoURL:I,phoneNumber:m,tenantId:A,stsTokenManager:v,createdAt:N,lastLoginAt:V});return re&&Array.isArray(re)&&(y.providerData=re.map(b=>Object.assign({},b))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ay(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $s;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;function Hn(t){Jn(t instanceof Function,"Expected a class definition");let e=xp.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xp.set(t,e),e)}/**
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
 */class ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ly.type="NONE";const Dp=ly;/**
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
 */function va(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=va(this.userKey,s.apiKey,i),this.fullPersistenceKey=va("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ba(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Hn(Dp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Hn(Dp);const o=va(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const g=await Ba(e,{idToken:h}).catch(()=>{});if(!g)break;f=await hn._fromGetAccountInfoResponse(e,g,h)}else f=hn._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(py(e))return"Blackberry";if(gy(e))return"Webos";if(uy(e))return"Safari";if((e.includes("chrome/")||hy(e))&&!e.includes("edge/"))return"Chrome";if(fy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cy(t=Dt()){return/firefox\//i.test(t)}function uy(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hy(t=Dt()){return/crios\//i.test(t)}function dy(t=Dt()){return/iemobile/i.test(t)}function fy(t=Dt()){return/android/i.test(t)}function py(t=Dt()){return/blackberry/i.test(t)}function gy(t=Dt()){return/webos/i.test(t)}function wh(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lb(t=Dt()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cb(){return wI()&&document.documentMode===10}function my(t=Dt()){return wh(t)||fy(t)||gy(t)||py(t)||/windows phone/i.test(t)||dy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e=[]){let n;switch(t){case"Browser":n=Np(Dt());break;case"Worker":n=`${Np(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hb(t,e={}){return si(t,"GET","/v2/passwordPolicy",Il(t,e))}/**
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
 */const db=6;class fb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:db,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ty,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ba(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Pr(this));const n=e?He(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hb(this),n=new fb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Al(t){return He(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=CI(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gb(t){Th=t}function mb(t){return Th.loadJS(t)}function _b(){return Th.gapiScript}function yb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e){const n=ri(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ns(i,e??{}))return s;Yn(s,"already-initialized")}return n.initialize({options:e})}function wb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tb(t,e,n){const r=Al(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yy(e),{host:o,port:l}=Eb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(ns(u,r.config.emulator)&&ns(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,us(o)?(dh(`${i}//${o}${c}`),fh("Auth",!0)):Ib()}function yy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=yy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ib(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return iy(t,"POST","/v1/accounts:signInWithIdp",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="http://localhost";class rs extends vy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:Ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ao extends wy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ao{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ao{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ao{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return iy(t,"POST","/v1/accounts:signUp",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=Mp(r);return new Nr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mp(r);return new Nr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t){var e;if(sn(t.app))return Promise.reject(Pr(t));const n=Al(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bb(n,{returnSecureToken:!0}),s=await Nr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qa(e,n,r,s)}}function Ey(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,i,e,r):i})}async function Rb(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
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
 */async function Cb(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Pr(r));const s="reauthenticate";try{const i=await oo(t,Ey(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=vh(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),Nr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e,n=!1){if(sn(t.app))return Promise.reject(Pr(t));const r="signIn",s=await Ey(t,r,e),i=await Nr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Pb(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function kb(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function xb(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function Db(t){return He(t).signOut()}const Ha="__sak";/**
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
 */class Iy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1e3,Ob=10;class Ay extends Iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=my(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ob):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ay.type="LOCAL";const Vb=Ay;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}by.type="SESSION";const Ry=by;/**
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
 */function Mb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Mb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Eh("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function Ub(t){Pn().location.href=t}/**
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
 */function Cy(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function Fb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $b(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bb(){return Cy()?self:null}/**
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
 */const Sy="firebaseLocalStorageDb",jb=1,za="firebaseLocalStorage",Py="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rl(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function qb(){const t=indexedDB.deleteDatabase(Sy);return new bo(t).toPromise()}function du(){const t=indexedDB.open(Sy,jb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:Py})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await qb(),e(await du()))})})}async function Lp(t,e,n){const r=Rl(t,!0).put({[Py]:e,value:n});return new bo(r).toPromise()}async function Hb(t,e){const n=Rl(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Up(t,e){const n=Rl(t,!0).delete(e);return new bo(n).toPromise()}const zb=800,Gb=3;class ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(Bb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fb(),!this.activeServiceWorker)return;this.sender=new Lb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Lp(e,Ha,"1"),await Up(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Up(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rl(s,!1).getAll();return new bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const Wb=ky;new Io(3e4,6e4);/**
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
 */function Kb(t,e){return e?Hn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ih extends vy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qb(t){return Sb(t.auth,new Ih(t),t.bypassAuthState)}function Xb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Cb(n,new Ih(t),t.bypassAuthState)}async function Yb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Rb(n,new Ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qb;case"linkViaPopup":case"linkViaRedirect":return Yb;case"reauthViaPopup":case"reauthViaRedirect":return Xb;default:Yn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Io(2e3,1e4);class xs extends xy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jb.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="pendingRedirect",wa=new Map;class e2 extends xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wa.get(this.auth._key());if(!e){try{const r=await t2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wa.set(this.auth._key(),e)}return this.bypassAuthState||wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t2(t,e){const n=s2(e),r=r2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function n2(t,e){wa.set(t._key(),e)}function r2(t){return Hn(t._redirectPersistence)}function s2(t){return va(Zb,t.config.apiKey,t.name)}async function i2(t,e,n=!1){if(sn(t.app))return Promise.reject(Pr(t));const r=Al(t),s=Kb(r,e),o=await new e2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=10*60*1e3;class a2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fp(e))}saveEventToCache(e){this.cachedEventUids.add(Fp(e)),this.lastProcessedEventTime=Date.now()}}function Fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(t,e={}){return si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h2=/^https?/;async function d2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await c2(t);for(const n of e)try{if(f2(n))return}catch{}Yn(t,"unauthorized-domain")}function f2(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h2.test(n))return!1;if(u2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const p2=new Io(3e4,6e4);function $p(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function g2(t){return new Promise((e,n)=>{var r,s,i;function o(){$p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$p(),n(Sn(t,"network-request-failed"))},timeout:p2.get()})}if(!((s=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pn().gapi)===null||i===void 0)&&i.load)o();else{const l=yb("iframefcb");return Pn()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},mb(`${_b()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ta=null,e})}let Ta=null;function m2(t){return Ta=Ta||g2(t),Ta}/**
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
 */const _2=new Io(5e3,15e3),y2="__/auth/iframe",v2="emulator/auth/iframe",w2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E2(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yh(e,v2):`https://${t.config.authDomain}/${y2}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=T2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Eo(r).slice(1)}`}async function I2(t){const e=await m2(t),n=Pn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:E2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=Pn().setTimeout(()=>{i(o)},_2.get());function c(){Pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const A2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b2=500,R2=600,C2="_blank",S2="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P2(t,e,n,r=b2,s=R2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},A2),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(l=hy(u)?C2:n),cy(u)&&(e=e||S2,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,I])=>`${g}${m}=${I},`,"");if(lb(u)&&l!=="_self")return k2(e||"",l),new Bp(null);const f=window.open(e||"",l,h);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Bp(f)}function k2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const x2="__/auth/handler",D2="emulator/auth/handler",N2=encodeURIComponent("fac");async function jp(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof wy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ao){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${N2}=${encodeURIComponent(c)}`:"";return`${O2(t)}?${Eo(l).slice(1)}${u}`}function O2({config:t}){return t.emulator?yh(t,D2):`https://${t.authDomain}/${x2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class V2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ry,this._completeRedirectFn=i2,this._overrideRedirectResult=n2}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jp(e,n,r,uu(),s);return P2(e,o,Eh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jp(e,n,r,uu(),s);return Ub(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await I2(e),r=new a2(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return my()||uy()||wh()}}const M2=V2;var qp="@firebase/auth",Hp="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F2(t){Xn(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_y(t)},u=new pb(r,s,i,c);return wb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new Dn("auth-internal",e=>{const n=Al(e.getProvider("auth").getImmediate());return(r=>new L2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(qp,Hp,U2(t)),pn(qp,Hp,"esm2017")}/**
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
 */const $2=5*60,B2=W_("authIdTokenMaxAge")||$2;let zp=null;const j2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B2)return;const s=n==null?void 0:n.token;zp!==s&&(zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q2(t=El()){const e=ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vb(t,{popupRedirectResolver:M2,persistence:[Wb,Vb,Ry]}),r=W_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=j2(i.toString());kb(n,o,()=>o(n.currentUser)),Pb(n,l=>o(l))}}const s=H_("auth");return s&&Tb(n,`http://${s}`),n}function H2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",H2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F2("Browser");var Gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,Ny;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function y(){}y.prototype=v.prototype,C.D=v.prototype,C.prototype=new y,C.prototype.constructor=C,C.C=function(b,S,R){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return v.prototype[S].apply(b,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,v,y){y||(y=0);var b=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)b[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)b[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=C.g[0],y=C.g[1],S=C.g[2];var R=C.g[3],w=v+(R^y&(S^R))+b[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=R+(S^v&(y^S))+b[1]+3905402710&4294967295,R=v+(w<<12&4294967295|w>>>20),w=S+(y^R&(v^y))+b[2]+606105819&4294967295,S=R+(w<<17&4294967295|w>>>15),w=y+(v^S&(R^v))+b[3]+3250441966&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(R^y&(S^R))+b[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=R+(S^v&(y^S))+b[5]+1200080426&4294967295,R=v+(w<<12&4294967295|w>>>20),w=S+(y^R&(v^y))+b[6]+2821735955&4294967295,S=R+(w<<17&4294967295|w>>>15),w=y+(v^S&(R^v))+b[7]+4249261313&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(R^y&(S^R))+b[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=R+(S^v&(y^S))+b[9]+2336552879&4294967295,R=v+(w<<12&4294967295|w>>>20),w=S+(y^R&(v^y))+b[10]+4294925233&4294967295,S=R+(w<<17&4294967295|w>>>15),w=y+(v^S&(R^v))+b[11]+2304563134&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(R^y&(S^R))+b[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=R+(S^v&(y^S))+b[13]+4254626195&4294967295,R=v+(w<<12&4294967295|w>>>20),w=S+(y^R&(v^y))+b[14]+2792965006&4294967295,S=R+(w<<17&4294967295|w>>>15),w=y+(v^S&(R^v))+b[15]+1236535329&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(S^R&(y^S))+b[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=R+(y^S&(v^y))+b[6]+3225465664&4294967295,R=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(R^v))+b[11]+643717713&4294967295,S=R+(w<<14&4294967295|w>>>18),w=y+(R^v&(S^R))+b[0]+3921069994&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^R&(y^S))+b[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=R+(y^S&(v^y))+b[10]+38016083&4294967295,R=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(R^v))+b[15]+3634488961&4294967295,S=R+(w<<14&4294967295|w>>>18),w=y+(R^v&(S^R))+b[4]+3889429448&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^R&(y^S))+b[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=R+(y^S&(v^y))+b[14]+3275163606&4294967295,R=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(R^v))+b[3]+4107603335&4294967295,S=R+(w<<14&4294967295|w>>>18),w=y+(R^v&(S^R))+b[8]+1163531501&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^R&(y^S))+b[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=R+(y^S&(v^y))+b[2]+4243563512&4294967295,R=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(R^v))+b[7]+1735328473&4294967295,S=R+(w<<14&4294967295|w>>>18),w=y+(R^v&(S^R))+b[12]+2368359562&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(y^S^R)+b[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=R+(v^y^S)+b[8]+2272392833&4294967295,R=v+(w<<11&4294967295|w>>>21),w=S+(R^v^y)+b[11]+1839030562&4294967295,S=R+(w<<16&4294967295|w>>>16),w=y+(S^R^v)+b[14]+4259657740&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^R)+b[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=R+(v^y^S)+b[4]+1272893353&4294967295,R=v+(w<<11&4294967295|w>>>21),w=S+(R^v^y)+b[7]+4139469664&4294967295,S=R+(w<<16&4294967295|w>>>16),w=y+(S^R^v)+b[10]+3200236656&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^R)+b[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=R+(v^y^S)+b[0]+3936430074&4294967295,R=v+(w<<11&4294967295|w>>>21),w=S+(R^v^y)+b[3]+3572445317&4294967295,S=R+(w<<16&4294967295|w>>>16),w=y+(S^R^v)+b[6]+76029189&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^R)+b[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=R+(v^y^S)+b[12]+3873151461&4294967295,R=v+(w<<11&4294967295|w>>>21),w=S+(R^v^y)+b[15]+530742520&4294967295,S=R+(w<<16&4294967295|w>>>16),w=y+(S^R^v)+b[2]+3299628645&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(S^(y|~R))+b[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=R+(y^(v|~S))+b[7]+1126891415&4294967295,R=v+(w<<10&4294967295|w>>>22),w=S+(v^(R|~y))+b[14]+2878612391&4294967295,S=R+(w<<15&4294967295|w>>>17),w=y+(R^(S|~v))+b[5]+4237533241&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~R))+b[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=R+(y^(v|~S))+b[3]+2399980690&4294967295,R=v+(w<<10&4294967295|w>>>22),w=S+(v^(R|~y))+b[10]+4293915773&4294967295,S=R+(w<<15&4294967295|w>>>17),w=y+(R^(S|~v))+b[1]+2240044497&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~R))+b[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=R+(y^(v|~S))+b[15]+4264355552&4294967295,R=v+(w<<10&4294967295|w>>>22),w=S+(v^(R|~y))+b[6]+2734768916&4294967295,S=R+(w<<15&4294967295|w>>>17),w=y+(R^(S|~v))+b[13]+1309151649&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~R))+b[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=R+(y^(v|~S))+b[11]+3174756917&4294967295,R=v+(w<<10&4294967295|w>>>22),w=S+(v^(R|~y))+b[2]+718787259&4294967295,S=R+(w<<15&4294967295|w>>>17),w=y+(R^(S|~v))+b[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+R&4294967295}r.prototype.u=function(C,v){v===void 0&&(v=C.length);for(var y=v-this.blockSize,b=this.B,S=this.h,R=0;R<v;){if(S==0)for(;R<=y;)s(this,C,R),R+=this.blockSize;if(typeof C=="string"){for(;R<v;)if(b[S++]=C.charCodeAt(R++),S==this.blockSize){s(this,b),S=0;break}}else for(;R<v;)if(b[S++]=C[R++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;var y=8*this.o;for(v=C.length-8;v<C.length;++v)C[v]=y&255,y/=256;for(this.u(C),C=Array(16),v=y=0;4>v;++v)for(var b=0;32>b;b+=8)C[y++]=this.g[v]>>>b&255;return C};function i(C,v){var y=l;return Object.prototype.hasOwnProperty.call(y,C)?y[C]:y[C]=v(C)}function o(C,v){this.h=v;for(var y=[],b=!0,S=C.length-1;0<=S;S--){var R=C[S]|0;b&&R==v||(y[S]=R,b=!1)}this.g=y}var l={};function c(C){return-128<=C&&128>C?i(C,function(v){return new o([v|0],0>v?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return P(u(-C));for(var v=[],y=1,b=0;C>=y;b++)v[b]=C/y|0,y*=4294967296;return new o(v,0)}function h(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return P(h(C.substring(1),v));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),b=f,S=0;S<C.length;S+=8){var R=Math.min(8,C.length-S),w=parseInt(C.substring(S,S+R),v);8>R?(R=u(Math.pow(v,R)),b=b.j(R).add(u(w))):(b=b.j(y),b=b.add(u(w)))}return b}var f=c(0),g=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var C=0,v=1,y=0;y<this.g.length;y++){var b=this.i(y);C+=(0<=b?b:4294967296+b)*v,v*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(I(this))return"0";if(A(this))return"-"+P(this).toString(C);for(var v=u(Math.pow(C,6)),y=this,b="";;){var S=U(y,v).g;y=N(y,S.j(v));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(C);if(y=S,I(y))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function I(C){if(C.h!=0)return!1;for(var v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function A(C){return C.h==-1}t.l=function(C){return C=N(this,C),A(C)?-1:I(C)?0:1};function P(C){for(var v=C.g.length,y=[],b=0;b<v;b++)y[b]=~C.g[b];return new o(y,~C.h).add(g)}t.abs=function(){return A(this)?P(this):this},t.add=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],b=0,S=0;S<=v;S++){var R=b+(this.i(S)&65535)+(C.i(S)&65535),w=(R>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);b=w>>>16,R&=65535,w&=65535,y[S]=w<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function N(C,v){return C.add(P(v))}t.j=function(C){if(I(this)||I(C))return f;if(A(this))return A(C)?P(this).j(P(C)):P(P(this).j(C));if(A(C))return P(this.j(P(C)));if(0>this.l(m)&&0>C.l(m))return u(this.m()*C.m());for(var v=this.g.length+C.g.length,y=[],b=0;b<2*v;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<C.g.length;S++){var R=this.i(b)>>>16,w=this.i(b)&65535,Oe=C.i(S)>>>16,rt=C.i(S)&65535;y[2*b+2*S]+=w*rt,V(y,2*b+2*S),y[2*b+2*S+1]+=R*rt,V(y,2*b+2*S+1),y[2*b+2*S+1]+=w*Oe,V(y,2*b+2*S+1),y[2*b+2*S+2]+=R*Oe,V(y,2*b+2*S+2)}for(b=0;b<v;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=v;b<2*v;b++)y[b]=0;return new o(y,0)};function V(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function M(C,v){this.g=C,this.h=v}function U(C,v){if(I(v))throw Error("division by zero");if(I(C))return new M(f,f);if(A(C))return v=U(P(C),v),new M(P(v.g),P(v.h));if(A(v))return v=U(C,P(v)),new M(P(v.g),v.h);if(30<C.g.length){if(A(C)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,b=v;0>=b.l(C);)y=ie(y),b=ie(b);var S=re(y,1),R=re(b,1);for(b=re(b,2),y=re(y,2);!I(b);){var w=R.add(b);0>=w.l(C)&&(S=S.add(y),R=w),b=re(b,1),y=re(y,1)}return v=N(C,S.j(v)),new M(S,v)}for(S=f;0<=C.l(v);){for(y=Math.max(1,Math.floor(C.m()/v.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=u(y),w=R.j(v);A(w)||0<w.l(C);)y-=b,R=u(y),w=R.j(v);I(R)&&(R=g),S=S.add(R),C=N(C,w)}return new M(S,C)}t.A=function(C){return U(this,C).h},t.and=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)&C.i(b);return new o(y,this.h&C.h)},t.or=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)|C.i(b);return new o(y,this.h|C.h)},t.xor=function(C){for(var v=Math.max(this.g.length,C.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)^C.i(b);return new o(y,this.h^C.h)};function ie(C){for(var v=C.g.length+1,y=[],b=0;b<v;b++)y[b]=C.i(b)<<1|C.i(b-1)>>>31;return new o(y,C.h)}function re(C,v){var y=v>>5;v%=32;for(var b=C.g.length-y,S=[],R=0;R<b;R++)S[R]=0<v?C.i(R+y)>>>v|C.i(R+y+1)<<32-v:C.i(R+y);return new o(S,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ny=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,kr=o}).apply(typeof Gp<"u"?Gp:typeof self<"u"?self:typeof window<"u"?window:{});var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oy,Pi,Vy,Ea,fu,My,Ly,Uy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ra=="object"&&ra];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var x=a[_];if(!(x in p))break e;p=p[x]}a=a[a.length-1],_=p[a],d=d(_),d!=_&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var p=0,_=!1,x={next:function(){if(!_&&p<a.length){var O=p++;return{value:d(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,p){return a.call.apply(a.bind,arguments)}function f(a,d,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),a.apply(d,x)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function I(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,x,O){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return d.prototype[x].apply(_,K)}}function A(a){const d=a.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=a[_];return p}return[]}function P(a,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const x=a.length||0,O=_.length||0;a.length=x+O;for(let K=0;K<O;K++)a[x+K]=_[K]}else a.push(_)}}class N{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var ie=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function re(a,d,p){for(const _ in a)d.call(p,a[_],_,a)}function C(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function v(a){const d={};for(const p in a)d[p]=a[p];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,d){let p,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(p in _)a[p]=_[p];for(let O=0;O<y.length;O++)p=y[O],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function S(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Wt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Oe{constructor(){this.h=this.g=null}add(d,p){const _=rt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var rt=new N(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Te=!1,Wt=new Oe,cn=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){R(p)}var d=rt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Te=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var ir=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function wn(a,d){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ie){e:{try{U(d.nodeName);var x=!0;break e}catch{}x=!1}x||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}I(wn,We);var $t={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),te=0;function ee(a,d,p,_,x){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=x,this.key=++te,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,d,p,_,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var K=E(a,d,_,x);return-1<K?(d=a[K],p||(d.fa=!1)):(d=new ee(d,this.src,O,!!_,x),d.fa=p,a.push(d)),d};function T(a,d){var p=d.type;if(p in a.g){var _=a.g[p],x=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=x)&&Array.prototype.splice.call(_,x,1),O&&(oe(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function E(a,d,p,_){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return x}return-1}var k="closure_lm_"+(1e6*Math.random()|0),$={};function q(a,d,p,_,x){if(Array.isArray(d)){for(var O=0;O<d.length;O++)q(a,d[O],p,_,x);return null}return p=pe(p),a&&a[F]?a.K(d,p,u(_)?!!_.capture:!1,x):B(a,d,p,!1,_,x)}function B(a,d,p,_,x,O){if(!d)throw Error("Invalid event type");var K=u(x)?!!x.capture:!!x,Me=J(a);if(Me||(a[k]=Me=new Pe(a)),p=Me.add(d,p,_,K,O),p.proxy)return p;if(_=Z(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)ir||(x=K),x===void 0&&(x=!1),a.addEventListener(d.toString(),_,x);else if(a.attachEvent)a.attachEvent(z(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Z(){function a(p){return d.call(a.src,a.listener,p)}const d=ce;return a}function W(a,d,p,_,x){if(Array.isArray(d))for(var O=0;O<d.length;O++)W(a,d[O],p,_,x);else _=u(_)?!!_.capture:!!_,p=pe(p),a&&a[F]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],p=E(O,p,_,x),-1<p&&(oe(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=J(a))&&(d=a.g[d.toString()],a=-1,d&&(a=E(d,p,_,x)),(p=-1<a?d[a]:null)&&G(p))}function G(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[F])T(d.i,a);else{var p=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(p,_,a.capture):d.detachEvent?d.detachEvent(z(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=J(d))?(T(p,a),p.h==0&&(p.src=null,d[k]=null)):oe(a)}}}function z(a){return a in $?$[a]:$[a]="on"+a}function ce(a,d){if(a.da)a=!0;else{d=new wn(d,this);var p=a.listener,_=a.ha||a.src;a.fa&&G(a),a=p.call(_,d)}return a}function J(a){return a=a[k],a instanceof Pe?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(d){return a.handleEvent(d)}),a[ae])}function he(){Ge.call(this),this.i=new Pe(this),this.M=this,this.F=null}I(he,Ge),he.prototype[F]=!0,he.prototype.removeEventListener=function(a,d,p,_){W(this,a,d,p,_)};function ye(a,d){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new We(d,a);else if(d instanceof We)d.target=d.target||a;else{var x=d;d=new We(_,a),b(d,x)}if(x=!0,p)for(var O=p.length-1;0<=O;O--){var K=d.g=p[O];x=Ce(K,_,!0,d)&&x}if(K=d.g=a,x=Ce(K,_,!0,d)&&x,x=Ce(K,_,!1,d)&&x,p)for(O=0;O<p.length;O++)K=d.g=p[O],x=Ce(K,_,!1,d)&&x}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],_=0;_<p.length;_++)oe(p[_]);delete a.g[d],a.h--}}this.F=null},he.prototype.K=function(a,d,p,_){return this.i.add(String(a),d,!1,p,_)},he.prototype.L=function(a,d,p,_){return this.i.add(String(a),d,!0,p,_)};function Ce(a,d,p,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,O=0;O<d.length;++O){var K=d[O];if(K&&!K.da&&K.capture==p){var Me=K.listener,mt=K.ha||K.src;K.fa&&T(a.i,K),x=Me.call(mt,_)!==!1&&x}}return x&&!_.defaultPrevented}function At(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function pt(a){a.g=At(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class en extends Ge{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(a){Ge.call(this),this.h=a,this.g={}}I(bt,Ge);var or=[];function hi(a){re(a.g,function(d,p){this.g.hasOwnProperty(p)&&G(d)},a),a.g={}}bt.prototype.N=function(){bt.aa.N.call(this),hi(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gt=l.JSON.stringify,tn=l.JSON.parse,Vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xl(){}Xl.prototype.h=null;function Ad(a){return a.h||(a.h=a.i())}function bd(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yl(){We.call(this,"d")}I(Yl,We);function Jl(){We.call(this,"c")}I(Jl,We);var qr={},Rd=null;function Mo(){return Rd=Rd||new he}qr.La="serverreachability";function Cd(a){We.call(this,qr.La,a)}I(Cd,We);function fi(a){const d=Mo();ye(d,new Cd(d))}qr.STAT_EVENT="statevent";function Sd(a,d){We.call(this,qr.STAT_EVENT,a),this.stat=d}I(Sd,We);function Nt(a){const d=Mo();ye(d,new Sd(d,a))}qr.Ma="timingevent";function Pd(a,d){We.call(this,qr.Ma,a),this.size=d}I(Pd,We);function pi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function i1(a,d,p,_,x,O){a.info(function(){if(a.g)if(O)for(var K="",Me=O.split("&"),mt=0;mt<Me.length;mt++){var ke=Me[mt].split("=");if(1<ke.length){var Rt=ke[0];ke=ke[1];var Ct=Rt.split("_");K=2<=Ct.length&&Ct[1]=="type"?K+(Rt+"="+ke+"&"):K+(Rt+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+d+`
`+p+`
`+K})}function o1(a,d,p,_,x,O,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+d+`
`+p+`
`+O+" "+K})}function ms(a,d,p,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+l1(a,p)+(_?" "+_:"")})}function a1(a,d){a.info(function(){return"TIMEOUT: "+d})}gi.prototype.info=function(){};function l1(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<x.length;K++)x[K]=""}}}}return gt(p)}catch{return d}}var Lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zl;function Uo(){}I(Uo,Xl),Uo.prototype.g=function(){return new XMLHttpRequest},Uo.prototype.i=function(){return{}},Zl=new Uo;function ar(a,d,p,_){this.j=a,this.i=d,this.l=p,this.R=_||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xd}function xd(){this.i=null,this.g="",this.h=!1}var Dd={},ec={};function tc(a,d,p){a.L=1,a.v=jo(Mn(d)),a.m=p,a.P=!0,Nd(a,null)}function Nd(a,d){a.F=Date.now(),Fo(a),a.A=Mn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Wd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new xd,a.g=df(a.j,p?d:null,!a.m),0<a.O&&(a.M=new en(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,_=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(or[0]=x.toString()),x=or);for(var O=0;O<x.length;O++){var K=q(p,x[O],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),fi(),i1(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ln(a)==3?d.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=Ln(this.g);var d=this.g.Ba();const vs=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||ef(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=vs?fi(3):fi(2)),nc(this);var p=this.g.Z();this.X=p;t:if(Od(this)){var _=ef(this.g);a="";var x=_.length,O=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),mi(this);var K="";break t}this.h.i=new l.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(O&&d==x-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,o1(this.i,this.u,this.A,this.l,this.R,Ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,mt=this.g;if((Me=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Me)){var ke=Me;break t}}ke=null}if(p=ke)ms(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,p);else{this.o=!1,this.s=3,Nt(12),Hr(this),mi(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<K.length;)if(un=c1(this,K),un==ec){Ct==4&&(this.s=4,Nt(14),p=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Dd){this.s=4,Nt(15),ms(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else ms(this.i,this.l,un,null),rc(this,un);if(Od(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||K.length!=0||this.h.h||(this.s=1,Nt(16),p=!1),this.o=this.o&&p,!p)ms(this.i,this.l,K,"[Invalid Chunked Response]"),Hr(this),mi(this);else if(0<K.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),cc(Rt),Rt.M=!0,Nt(11))}}else ms(this.i,this.l,K,null),rc(this,K);Ct==4&&Hr(this),this.o&&!this.J&&(Ct==4?lf(this.j,this):(this.o=!1,Fo(this)))}else R1(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Hr(this),mi(this)}}}catch{}finally{}};function Od(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function c1(a,d){var p=a.C,_=d.indexOf(`
`,p);return _==-1?ec:(p=Number(d.substring(p,_)),isNaN(p)?Dd:(_+=1,_+p>d.length?ec:(d=d.slice(_,_+p),a.C=_+p,d)))}ar.prototype.cancel=function(){this.J=!0,Hr(this)};function Fo(a){a.S=Date.now()+a.I,Vd(a,a.I)}function Vd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pi(g(a.ba,a),d)}function nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(a1(this.i,this.A),this.L!=2&&(fi(),Nt(17)),Hr(this),this.s=2,mi(this)):Vd(this,this.S-a)};function mi(a){a.j.G==0||a.J||lf(a.j,a)}function Hr(a){nc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,hi(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function rc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||sc(p.h,a))){if(!a.K&&sc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ko(p),Go(p);else break e;lc(p),Nt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=pi(g(p.Za,p),6e3));if(1>=Ud(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((a.K||p.g==a)&&Ko(p),!V(d))for(x=p.Da.g.parse(d),d=0;d<x.length;d++){let ke=x[d];if(p.T=ke[0],ke=ke[1],p.G==2)if(ke[0]=="c"){p.K=ke[1],p.ia=ke[2];const Rt=ke[3];Rt!=null&&(p.la=Rt,p.j.info("VER="+p.la));const Ct=ke[4];Ct!=null&&(p.Aa=Ct,p.j.info("SVER="+p.Aa));const vs=ke[5];vs!=null&&typeof vs=="number"&&0<vs&&(_=1.5*vs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=a.g;if(un){const Xo=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var O=_.h;O.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ic(O,O.h),O.h=null))}if(_.D){const uc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(_.ya=uc,Fe(_.I,_.D,uc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=hf(_,_.J?_.ia:null,_.W),K.K){Fd(_.h,K);var Me=K,mt=_.L;mt&&(Me.I=mt),Me.B&&(nc(Me),Fo(Me)),_.g=K}else of(_);0<p.i.length&&Wo(p)}else ke[0]!="stop"&&ke[0]!="close"||Gr(p,7);else p.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Gr(p,7):ac(p):ke[0]!="noop"&&p.l&&p.l.ta(ke),p.v=0)}}fi(4)}catch{}}var u1=class{constructor(a,d){this.g=a,this.map=d}};function Md(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ld(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ud(a){return a.h?1:a.g?a.g.size:0}function sc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ic(a,d){a.g?a.g.add(d):a.h=d}function Fd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Md.prototype.cancel=function(){if(this.i=$d(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $d(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return A(a.i)}function h1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],p=a.length,_=0;_<p;_++)d.push(a[_]);return d}d=[],p=0;for(_ in a)d[p++]=a[_];return d}function d1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const _ in a)d[p++]=_;return d}}}function Bd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=d1(a),_=h1(a),x=_.length,O=0;O<x;O++)d.call(void 0,_[O],p&&p[O],a)}var jd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f1(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),x=null;if(0<=_){var O=a[p].substring(0,_);x=a[p].substring(_+1)}else O=a[p];d(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,$o(this,a.j),this.o=a.o,this.g=a.g,Bo(this,a.s),this.l=a.l;var d=a.i,p=new vi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),qd(this,p),this.m=a.m}else a&&(d=String(a).match(jd))?(this.h=!1,$o(this,d[1]||"",!0),this.o=_i(d[2]||""),this.g=_i(d[3]||"",!0),Bo(this,d[4]),this.l=_i(d[5]||"",!0),qd(this,d[6]||"",!0),this.m=_i(d[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}zr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(yi(d,Hd,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(yi(d,Hd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(yi(p,p.charAt(0)=="/"?m1:g1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",yi(p,y1)),a.join("")};function Mn(a){return new zr(a)}function $o(a,d,p){a.j=p?_i(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Bo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function qd(a,d,p){d instanceof vi?(a.i=d,v1(a.i,a.h)):(p||(d=yi(d,_1)),a.i=new vi(d,a.h))}function Fe(a,d,p){a.i.set(d,p)}function jo(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,p1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function p1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hd=/[#\/\?@]/g,g1=/[#\?:]/g,m1=/[#\?]/g,_1=/[#\?@]/g,y1=/#/g;function vi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&f1(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=vi.prototype,t.add=function(a,d){lr(this),this.i=null,a=_s(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function zd(a,d){lr(a),d=_s(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Gd(a,d){return lr(a),d=_s(a,d),a.g.has(d)}t.forEach=function(a,d){lr(this),this.g.forEach(function(p,_){p.forEach(function(x){a.call(d,x,_,this)},this)},this)},t.na=function(){lr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const x=a[_];for(let O=0;O<x.length;O++)p.push(d[_])}return p},t.V=function(a){lr(this);let d=[];if(typeof a=="string")Gd(this,a)&&(d=d.concat(this.g.get(_s(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return lr(this),this.i=null,a=_s(this,a),Gd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Wd(a,d,p){zd(a,d),0<p.length&&(a.i=null,a.g.set(_s(a,d),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var x=O;K[_]!==""&&(x+="="+encodeURIComponent(String(K[_]))),a.push(x)}}return this.i=a.join("&")};function _s(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function v1(a,d){d&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(p,_){var x=_.toLowerCase();_!=x&&(zd(this,_),Wd(this,x,p))},a)),a.j=d}function w1(a,d){const p=new gi;if(l.Image){const _=new Image;_.onload=m(cr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(cr,p,"TestLoadImage: error",!1,d,_),_.onabort=m(cr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(cr,p,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function T1(a,d){const p=new gi,_=new AbortController,x=setTimeout(()=>{_.abort(),cr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(x),O.ok?cr(p,"TestPingServer: ok",!0,d):cr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),cr(p,"TestPingServer: error",!1,d)})}function cr(a,d,p,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(p)}catch{}}function E1(){this.g=new Vo}function I1(a,d,p){const _=p||"";try{Bd(a,function(x,O){let K=x;u(x)&&(K=gt(x)),d.push(_+O+"="+encodeURIComponent(K))})}catch(x){throw d.push(_+"type="+encodeURIComponent("_badmap")),x}}function qo(a){this.l=a.Ub||null,this.j=a.eb||!1}I(qo,Xl),qo.prototype.g=function(){return new Ho(this.l,this.j)},qo.prototype.i=function(a){return function(){return a}}({});function Ho(a,d){he.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ho,he),t=Ho.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ti(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?wi(this):Ti(this),this.readyState==3&&Kd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,wi(this))},t.Qa=function(a){this.g&&(this.response=a,wi(this))},t.ga=function(){this.g&&wi(this)};function wi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qd(a){let d="";return re(a,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function oc(a,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Qd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Fe(a,d,p))}function Ye(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,he);var A1=/^https?$/i,b1=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zl.g(),this.v=this.o?Ad(this.o):Ad(Zl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Xd(this,O);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)p.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(b1,d,void 0))||_||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of p)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zd(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Xd(this,O)}};function Xd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Yd(a),zo(a)}function Yd(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jd(this):this.bb())},t.bb=function(){Jd(this)};function Jd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)At(a.Ea,0,a);else if(ye(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=K===0){var x=String(a.D).match(jd)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),_=!A1.test(x?x.toLowerCase():"")}p=_}if(p)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var O=2<Ln(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Yd(a)}}finally{zo(a)}}}}function zo(a,d){if(a.g){Zd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ye(a,"ready");try{p.onreadystatechange=_}catch{}}}function Zd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),tn(d)}};function ef(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function R1(a){const d={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(V(a[_]))continue;var p=S(a[_]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[x]||[];d[x]=O,O.push(p)}C(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function tf(a){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Md(a&&a.concurrentRequestLimit),this.Da=new E1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tf.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,_){Nt(0),this.W=a,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=hf(this,null,this.W),Wo(this)};function ac(a){if(nf(a),a.G==3){var d=a.U++,p=Mn(a.I);if(Fe(p,"SID",a.K),Fe(p,"RID",d),Fe(p,"TYPE","terminate"),Ii(a,p),d=new ar(a,a.j,d),d.L=2,d.v=jo(Mn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=df(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fo(d)}uf(a)}function Go(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function nf(a){Go(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wo(a){if(!Ld(a.h)&&!a.s){a.s=!0;var d=a.Ga;Re||cn(),Te||(Re(),Te=!0),Wt.add(d,a),a.B=0}}function C1(a,d){return Ud(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pi(g(a.Ga,a,d),cf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new ar(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=sf(this,x,d),p=Mn(this.I),Fe(p,"RID",a),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),Ii(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(Qd(O)))+"&"+d:this.m&&oc(p,this.m,O)),ic(this.h,x),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",d),Fe(p,"SID","null"),x.T=!0,tc(x,p,null)):tc(x,p,d),this.G=2}}else this.G==3&&(a?rf(this,a):this.i.length==0||Ld(this.h)||rf(this))};function rf(a,d){var p;d?p=d.l:p=a.U++;const _=Mn(a.I);Fe(_,"SID",a.K),Fe(_,"RID",p),Fe(_,"AID",a.T),Ii(a,_),a.m&&a.o&&oc(_,a.m,a.o),p=new ar(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=sf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,p),tc(p,_,d)}function Ii(a,d){a.H&&re(a.H,function(p,_){Fe(d,_,p)}),a.l&&Bd({},function(p,_){Fe(d,_,p)})}function sf(a,d,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const K=["count="+p];O==-1?0<p?(O=x[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let Me=!0;for(let mt=0;mt<p;mt++){let ke=x[mt].g;const Rt=x[mt].map;if(ke-=O,0>ke)O=Math.max(0,x[mt].g-100),Me=!1;else try{I1(Rt,K,"req"+ke+"_")}catch{_&&_(Rt)}}if(Me){_=K.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,_}function of(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Re||cn(),Te||(Re(),Te=!0),Wt.add(d,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pi(g(a.Fa,a),cf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Go(this),af(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function af(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Mn(a.qa);Fe(d,"RID","rpc"),Fe(d,"SID",a.K),Fe(d,"AID",a.T),Fe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(d,"TO",a.ja),Fe(d,"TYPE","xmlhttp"),Ii(a,d),a.m&&a.o&&oc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=jo(Mn(d)),p.m=null,p.P=!0,Nd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Go(this),lc(this),Nt(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lf(a,d){var p=null;if(a.g==d){Ko(a),cc(a),a.g=null;var _=2}else if(sc(a.h,d))p=d.D,Fd(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var x=a.B;_=Mo(),ye(_,new Pd(_,p)),Wo(a)}else of(a);else if(x=d.s,x==3||x==0&&0<d.X||!(_==1&&C1(a,d)||_==2&&lc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),x){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function cf(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Gr(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),_=a.Xa;const x=!_;_=new zr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$o(_,"https"),jo(_),x?w1(_.toString(),p):T1(_.toString(),p)}else Nt(2);a.G=0,a.l&&a.l.sa(d),uf(a),nf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function uf(a){if(a.G=0,a.ka=[],a.l){const d=$d(a.h);(d.length!=0||a.i.length!=0)&&(P(a.ka,d),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function hf(a,d,p){var _=p instanceof zr?Mn(p):new zr(p);if(_.g!="")d&&(_.g=d+"."+_.g),Bo(_,_.s);else{var x=l.location;_=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var O=new zr(null);_&&$o(O,_),d&&(O.g=d),x&&Bo(O,x),p&&(O.l=p),_=O}return p=a.D,d=a.ya,p&&d&&Fe(_,p,d),Fe(_,"VER",a.la),Ii(a,_),_}function df(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ye(new qo({eb:p})):new Ye(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ff(){}t=ff.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qo(){}Qo.prototype.g=function(a,d){return new Kt(a,d)};function Kt(a,d){he.call(this),this.g=new tf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!V(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!V(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ys(this)}I(Kt,he),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){ac(this.g)},Kt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=gt(a),a=p);d.i.push(new u1(d.Ya++,a)),d.G==3&&Wo(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Kt.aa.N.call(this)};function pf(a){Yl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}I(pf,Yl);function gf(){Jl.call(this),this.status=1}I(gf,Jl);function ys(a){this.g=a}I(ys,ff),ys.prototype.ua=function(){ye(this.g,"a")},ys.prototype.ta=function(a){ye(this.g,new pf(a))},ys.prototype.sa=function(a){ye(this.g,new gf)},ys.prototype.ra=function(){ye(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Uy=function(){return new Qo},Ly=function(){return Mo()},My=qr,fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lo.NO_ERROR=0,Lo.TIMEOUT=8,Lo.HTTP_ERROR=6,Ea=Lo,kd.COMPLETE="complete",Vy=kd,bd.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",he.prototype.listen=he.prototype.K,Pi=bd,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Oy=Ye}).apply(typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{});const Wp="@firebase/firestore",Kp="4.7.16";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */const ss=new Tl("@firebase/firestore");function Cs(){return ss.logLevel}function ne(t,...e){if(ss.logLevel<=Ee.DEBUG){const n=e.map(Ah);ss.debug(`Firestore (${ii}): ${t}`,...n)}}function Zn(t,...e){if(ss.logLevel<=Ee.ERROR){const n=e.map(Ah);ss.error(`Firestore (${ii}): ${t}`,...n)}}function Ks(t,...e){if(ss.logLevel<=Ee.WARN){const n=e.map(Ah);ss.warn(`Firestore (${ii}): ${t}`,...n)}}function Ah(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Fy(t,r,n)}function Fy(t,e,n){let r=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Fy(e,s,r)}function ge(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $y{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class G2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class W2{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new $y(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Pt(e)}}class K2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Q2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new K2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function By(){return new TextEncoder}/**
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
 */class jy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Y2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function pu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=By(),o=J2(i.encode(Xp(t,n)),i.encode(Xp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Xp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function J2(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Yp=-62135596800,Jp=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Jp);return new it(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Yp)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Yp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new it(0,0))}static max(){return new de(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zp="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):pu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kr.fromString(e.substring(4,e.length-2))}}class Ve extends An{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends An{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return Z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zp}static keyField(){return new Tt([Zp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */const ao=-1;function eR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Or(s,le.empty(),e)}function tR(t){return new Or(t.readTime,t.key,ao)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(de.min(),le.empty(),ao)}static max(){return new Or(de.max(),le.empty(),ao)}}function nR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function oi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==rR)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const bh=-1;function Ro(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function oR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const qy="";function aR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=eg(e)),e=lR(t.get(n),e);return eg(e)}function lR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case qy:n+="";break;default:n+=i}}return n}function eg(t){return t+qy+""}/**
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
 */function tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cR(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function Hy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ot(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zy("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const uR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=uR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="server_timestamp",Wy="__type__",Ky="__previous_value__",Qy="__local_write_time__";function Sl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wy])===null||n===void 0?void 0:n.stringValue)===Gy}function Pl(t){const e=t.mapValue.fields[Ky];return Sl(e)?Pl(e):e}function lo(t){const e=Vr(t.mapValue.fields[Qy].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class hR{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const gu="(default)";class co{constructor(e,n){this.projectId=e,this.database=n||gu}static empty(){return new co("","")}get isDefaultDatabase(){return this.database===gu}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="__type__",dR="__max__",ia={mapValue:{}},Yy="__vector__",Wa="value";function Lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sl(t)?4:pR(t)?9007199254740991:fR(t)?10:11:ue(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Lr(t);if(n!==Lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vr(s.timestampValue),l=Vr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mr(s.bytesValue).isEqual(Mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?Ga(o)===Ga(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(tg(o)!==tg(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Nn(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function uo(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Lr(t),r=Lr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return rg(t.timestampValue,e.timestampValue);case 4:return rg(lo(t),lo(e));case 5:return pu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Mr(i),c=Mr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=ve(l[u],c[u]);if(h!==0)return h}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(Ze(i.latitude),Ze(o.latitude));return l!==0?l:ve(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const f=i.fields||{},g=o.fields||{},m=(l=f[Wa])===null||l===void 0?void 0:l.arrayValue,I=(c=g[Wa])===null||c===void 0?void 0:c.arrayValue,A=ve(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:sg(m,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ia.mapValue&&o===ia.mapValue)return 0;if(i===ia.mapValue)return 1;if(o===ia.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=pu(c[f],h[f]);if(g!==0)return g;const m=Xs(l[c[f]],u[h[f]]);if(m!==0)return m}return ve(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Vr(t),r=Vr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function sg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ys(t){return mu(t)}function mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=mu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${mu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function Ia(t){switch(Lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pl(t);return e?16+Ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ia(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+Ia(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function Ka(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _u(t){return!!t&&"integerValue"in t}function Rh(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function og(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Aa(t){return!!t&&"mapValue"in t}function fR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xy])===null||n===void 0?void 0:n.stringValue)===Yy}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===dR}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(qi(this.value))}}function Jy(t){const e=[];return Br(t.fields,(n,r)=>{const s=new Tt([n]);if(Aa(r)){const i=Jy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,de.min(),de.min(),de.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,de.min(),de.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,de.min(),de.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(e,n){this.position=e,this.inclusive=n}}function ag(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function gR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zy{}class nt extends Zy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _R(e,n,r):n==="array-contains"?new wR(e,r):n==="in"?new TR(e,r):n==="not-in"?new ER(e,r):n==="array-contains-any"?new IR(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yR(e,r):new vR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xs(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Zy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new vn(e,n)}matches(e){return ev(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ev(t){return t.op==="and"}function tv(t){return mR(t)&&ev(t)}function mR(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function yu(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(tv(t))return t.filters.map(e=>yu(e)).join(",");{const e=t.filters.map(n=>yu(n)).join(",");return`${t.op}(${e})`}}function nv(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&nv(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function rv(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ys(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(rv).join(" ,")+"}"}(t):"Filter"}class _R extends nt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class yR extends nt{constructor(e,n){super(e,"in",n),this.keys=sv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vR extends nt{constructor(e,n){super(e,"not-in",n),this.keys=sv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class wR extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rh(n)&&uo(n.arrayValue,this.value)}}class TR extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class ER extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!uo(this.value.arrayValue,n)}}class IR extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
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
 */class AR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function cg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new AR(t,e,n,r,s,i,o)}function Ch(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ro(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.Ie=n}return e.Ie}function Sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lg(t.startAt,e.startAt)&&lg(t.endAt,e.endAt)}function vu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ds{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function bR(t,e,n,r,s,i,o,l){return new ds(t,e,n,r,s,i,o,l)}function Ph(t){return new ds(t)}function ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kh(t){return t.collectionGroup!==null}function qs(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ho(i,r))}),n.has(Tt.keyField().canonicalString())||e.Ee.push(new ho(Tt.keyField(),r))}return e.Ee}function kn(t){const e=ge(t);return e.de||(e.de=iv(e,qs(t))),e.de}function RR(t){const e=ge(t);return e.Ae||(e.Ae=iv(e,t.explicitOrderBy)),e.Ae}function iv(t,e){if(t.limitType==="F")return cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ho(s.field,i)});const n=t.endAt?new Js(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Js(t.startAt.position,t.startAt.inclusive):null;return cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wu(t,e){const n=t.filters.concat([e]);return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qa(t,e,n){return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kl(t,e){return Sh(kn(t),kn(e))&&t.limitType===e.limitType}function ov(t){return`${Ch(kn(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rv(s)).join(", ")}]`),Ro(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ys(s)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=ag(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,qs(r),s)||r.endAt&&!function(o,l,c){const u=ag(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,qs(r),s))}(t,e)}function CR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function av(t){return(e,n)=>{let r=!1;for(const s of qs(t)){const i=SR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SR(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Xs(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hy(this.inner)}size(){return this.innerSize}}/**
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
 */const PR=new Qe(le.comparator);function er(){return PR}const lv=new Qe(le.comparator);function ki(...t){let e=lv;for(const n of t)e=e.insert(n.key,n);return e}function cv(t){let e=lv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return Hi()}function uv(){return Hi()}function Hi(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const kR=new Qe(le.comparator),xR=new ot(le.comparator);function Ae(...t){let e=xR;for(const n of t)e=e.add(n);return e}const DR=new ot(ve);function NR(){return DR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function hv(t){return{integerValue:""+t}}function dv(t,e){return oR(e)?hv(e):xh(t,e)}/**
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
 */class Dl{constructor(){this._=void 0}}function OR(t,e,n){return t instanceof Xa?function(s,i){const o={fields:{[Wy]:{stringValue:Gy},[Qy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=Pl(i)),i&&(o.fields[Ky]=i),{mapValue:o}}(n,e):t instanceof fo?pv(t,e):t instanceof po?gv(t,e):function(s,i){const o=fv(s,i),l=hg(o)+hg(s.Re);return _u(o)&&_u(s.Re)?hv(l):xh(s.serializer,l)}(t,e)}function VR(t,e,n){return t instanceof fo?pv(t,e):t instanceof po?gv(t,e):n}function fv(t,e){return t instanceof go?function(r){return _u(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xa extends Dl{}class fo extends Dl{constructor(e){super(),this.elements=e}}function pv(t,e){const n=mv(e);for(const r of t.elements)n.some(s=>Nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class po extends Dl{constructor(e){super(),this.elements=e}}function gv(t,e){let n=mv(e);for(const r of t.elements)n=n.filter(s=>!Nn(s,r));return{arrayValue:{values:n}}}class go extends Dl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function hg(t){return Ze(t.integerValue||t.doubleValue)}function mv(t){return Rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class MR{constructor(e,n){this.field=e,this.transform=n}}function LR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fo&&s instanceof fo||r instanceof po&&s instanceof po?Qs(r.elements,s.elements,Nn):r instanceof go&&s instanceof go?Nn(r.Re,s.Re):r instanceof Xa&&s instanceof Xa}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nl{}function _v(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dh(t.key,Ht.none()):new Co(t.key,t.data,Ht.none());{const n=t.data,r=Ut.empty();let s=new ot(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jr(t.key,r,new Xt(s.toArray()),Ht.none())}}function FR(t,e,n){t instanceof Co?function(s,i,o){const l=s.value.clone(),c=fg(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(s,i,o){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=fg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(yv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof Co?function(i,o,l,c){if(!ba(i.precondition,o))return l;const u=i.value.clone(),h=pg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,o,l,c){if(!ba(i.precondition,o))return l;const u=pg(i.fieldTransforms,c,o),h=o.data;return h.setAll(yv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $R(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fv(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,(i,o)=>LR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Nl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jr extends Nl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fg(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,VR(o,l,n[s]))}return r}function pg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OR(i,o,e))}return r}class Dh extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vv extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=_v(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>dg(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>dg(n,r))}}class Nh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return kR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nh(e,n,r,s)}}/**
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
 */class jR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class qR{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class HR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Se;function wv(t){switch(t){case L.OK:return ue(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function Tv(t){if(t===void 0)return Zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case tt.OK:return L.OK;case tt.CANCELLED:return L.CANCELLED;case tt.UNKNOWN:return L.UNKNOWN;case tt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case tt.INTERNAL:return L.INTERNAL;case tt.UNAVAILABLE:return L.UNAVAILABLE;case tt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case tt.NOT_FOUND:return L.NOT_FOUND;case tt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case tt.ABORTED:return L.ABORTED;case tt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case tt.DATA_LOSS:return L.DATA_LOSS;default:return ue(39323,{code:t})}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const zR=new kr([4294967295,4294967295],0);function gg(t){const e=By().encode(t),n=new Ny;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,r],0),new kr([s,i],0)]}class Oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xi(`Invalid padding: ${n}`);if(r<0)throw new xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=kr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(kr.fromNumber(r)));return s.compare(zR)===1&&(s=new kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=gg(e),[r,s]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=gg(e),[r,s]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ol(de.min(),s,new Qe(ve),er(),Ae())}}class So{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,Ae(),Ae(),Ae())}}/**
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
 */class Ra{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Ev{constructor(e,n){this.targetId=e,this.Ce=n}}class Iv{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _g{constructor(){this.Fe=0,this.Me=yg(),this.xe=It.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ae(),n=Ae(),r=Ae();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new So(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=yg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,be(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class GR{constructor(e){this.ze=e,this.je=new Map,this.He=er(),this.Je=oa(),this.Ye=oa(),this.Ze=new Qe(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(vu(i))if(r===0){const o=new le(i.path);this.tt(n,o,ht.newNoDocument(o,de.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(c){if(c instanceof zy)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Oh(o,s,i)}catch(c){return Ks(c instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&vu(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ht.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Ae();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ol(e,n,this.Ze,this.He,r);return this.He=er(),this.Je=oa(),this.Ye=oa(),this.Ze=new Qe(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new _g,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ot(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ot(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new _g),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function oa(){return new Qe(le.comparator)}function yg(){return new Qe(le.comparator)}const WR={asc:"ASCENDING",desc:"DESCENDING"},KR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QR={and:"AND",or:"OR"};class XR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tu(t,e){return t.useProto3Json||Ro(e)?e:{value:e}}function Ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Av(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YR(t,e){return Ya(t,e.toTimestamp())}function Jt(t){return be(!!t,49232),de.fromTimestamp(function(n){const r=Vr(n);return new it(r.seconds,r.nanos)}(t))}function Vh(t,e){return Eu(t,e).canonicalString()}function Eu(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bv(t){const e=Ve.fromString(t);return be(Dv(e),10190,{key:e.toString()}),e}function Ja(t,e){return Vh(t.databaseId,e.path)}function Gi(t,e){const n=bv(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Cv(n))}function Rv(t,e){return Vh(t.databaseId,e)}function JR(t){const e=bv(t);return e.length===4?Ve.emptyPath():Cv(e)}function Iu(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cv(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vg(t,e,n){return{name:Ja(t,e),fields:n.value.mapValue.fields}}function ZR(t,e){return"found"in e?function(r,s){be(!!s.found,43571),s.found.name,s.found.updateTime;const i=Gi(r,s.found.name),o=Jt(s.found.updateTime),l=s.found.createTime?Jt(s.found.createTime):de.min(),c=new Ut({mapValue:{fields:s.found.fields}});return ht.newFoundDocument(i,o,l,c)}(t,e):"missing"in e?function(r,s){be(!!s.missing,3894),be(!!s.readTime,22933);const i=Gi(r,s.missing),o=Jt(s.readTime);return ht.newNoDocument(i,o)}(t,e):ue(7234,{result:e})}function eC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(be(h===void 0||typeof h=="string",58123),It.fromBase64String(h||"")):(be(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?L.UNKNOWN:Tv(u.code);return new Q(h,u.message||"")}(o);n=new Iv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gi(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):de.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ra(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gi(t,r.document),i=r.readTime?Jt(r.readTime):de.min(),o=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ra([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gi(t,r.document),i=r.removedTargetIds||[];n=new Ra([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HR(s,i),l=r.targetId;n=new Ev(l,o)}}return n}function Sv(t,e){let n;if(e instanceof Co)n={update:vg(t,e.key,e.value)};else if(e instanceof Dh)n={delete:Ja(t,e.key)};else if(e instanceof jr)n={update:vg(t,e.key,e.data),updateMask:cC(e.fieldMask)};else{if(!(e instanceof vv))return ue(16599,{ft:e.type});n={verify:Ja(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof go)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function tC(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(de.min())&&(o=Jt(i)),new UR(o,s.transformResults||[])}(n,e))):[]}function nC(t,e){return{documents:[Rv(t,e.path)]}}function Pv(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rv(t,s);const i=function(u){if(u.length!==0)return xv(vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Tr(g.field),direction:oC(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function rC(t,e,n,r){const{gt:s,parent:i}=Pv(t,e),o={},l=[];let c=0;return n.forEach(u=>{const h="aggregate_"+c++;o[h]=u.alias,u.aggregateType==="count"?l.push({alias:h,count:{}}):u.aggregateType==="avg"?l.push({alias:h,avg:{field:Tr(u.fieldPath)}}):u.aggregateType==="sum"&&l.push({alias:h,sum:{field:Tr(u.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:s.structuredQuery},parent:s.parent},yt:o,parent:i}}function sC(t){let e=JR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const g=kv(f);return g instanceof vn&&tv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(I){return new ho(Ps(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(f){let g;return g=typeof f=="object"?f.value:f,Ro(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new Js(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Js(m,g)}(n.endAt)),bR(e,s,o,i,l,"F",c,u)}function iC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return nt.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>kv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function oC(t){return WR[t]}function aC(t){return KR[t]}function lC(t){return QR[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Ps(t){return Tt.fromServerFormat(t.fieldPath)}function xv(t){return t instanceof nt?function(n){if(n.op==="=="){if(og(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NAN"}};if(ig(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(og(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NAN"}};if(ig(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(n.field),op:aC(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>xv(s));return r.length===1?r[0]:{compositeFilter:{op:lC(n.op),filters:r}}}(t):ue(54877,{filter:t})}function cC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,s,i=de.min(),o=de.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uC{constructor(e){this.wt=e}}function hC(t){const e=sC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
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
 */class dC{constructor(){this.Cn=new fC}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Or.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class fC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ve.comparator)).toArray()}}/**
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
 */const wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nv=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(Nv,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
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
 */class Zs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Zs(0)}static lr(){return new Zs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="LruGarbageCollector",pC=1048576;function Eg([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class gC{constructor(e){this.Er=e,this.buffer=new ot(Eg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Eg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(Tg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ai(n)?ne(Tg,"Ignoring IndexedDB error during garbage collection: ",n):await oi(n)}await this.mr(3e5)})}}class _C{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Cl.le);const r=new gC(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(wg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wg):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Cs()<=Ee.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function yC(t,e){return new _C(t,e)}/**
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
 */class vC{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,Xt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ki();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=er();const o=Hi(),l=function(){return Hi()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),zi(h.mutation,u,h.mutation.getFieldMask(),it.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return l.set(u,new wC(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Hi();let s=new Qe((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Xt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const f=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=uv();h.forEach(g=>{if(!i.has(g)){const m=_v(n.get(g),r.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Jr());let l=ao,c=i;return o.next(u=>j.forEach(u,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(h=>({batchId:l,changes:cv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ki();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(f,g){return new ds(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let l=ki();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&zi(h.mutation,u,Xt.empty(),it.now()),xl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:hC(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),j.resolve()}}/**
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
 */class IC{constructor(){this.overlays=new Qe(le.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Jr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Jr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return j.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jR(n,r));let i=this.Qr.get(n);i===void 0&&(i=Ae(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class AC{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Mh{constructor(){this.$r=new ot(ut.Ur),this.Kr=new ot(ut.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ut(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ut(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1);let i=Ae();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
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
 */class bC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ot(ut.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?bh:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ve);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let l=new ot(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),j.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RC{constructor(e){this.ii=e,this.docs=function(){return new Qe(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nR(tR(h),r)<=0||(s.has(h.key)||xl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CC(this)}getSize(e){return j.resolve(this.size)}}class CC extends vC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class SC{constructor(e){this.persistence=e,this.oi=new fs(n=>Ch(n),Sh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Mh,this.targetCount=0,this.ui=Zs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class Ov{constructor(e,n){this.ci={},this.overlays={},this.li=new Cl(0),this.hi=!1,this.hi=!0,this.Pi=new AC,this.referenceDelegate=e(this),this.Ti=new SC(this),this.indexManager=new dC,this.remoteDocumentCache=function(s){return new RC(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new uC(n),this.Ei=new EC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new bC(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new PC(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class PC extends sR{constructor(e){super(),this.currentSequenceNumber=e}}class Lh{constructor(e){this.persistence=e,this.Vi=new Mh,this.mi=null}static fi(e){return new Lh(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Za{constructor(e,n){this.persistence=e,this.yi=new fs(r=>aR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=yC(this,n)}static fi(e,n){return new Za(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ia(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Uh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uh(e,n.fromCache,r,s)}}/**
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
 */class kC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return TI()?8:iR(Dt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new kC;return this.bs(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Cs()<=Ee.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(Cs()<=Ee.DEBUG&&ne("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Cs()<=Ee.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):j.resolve())}ws(e,n){if(ug(n))return j.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qa(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Qa(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return ug(n)||s.isEqual(de.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Cs()<=Ee.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.Fs(e,o,n,eR(s,ao)).next(l=>l))})}vs(e,n){let r=new ot(av(e));return n.forEach((s,i)=>{xl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Cs()<=Ee.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.ys.getDocumentsMatchingQuery(e,n,Or.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="LocalStore",DC=3e8;class NC{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Qe(ve),this.Os=new fs(i=>Ch(i),Sh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function OC(t,e,n,r){return new NC(t,e,n,r)}async function Vv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function VC(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const f=u.batch,g=f.keys();let m=j.resolve();return g.forEach(I=>{m=m.next(()=>h.getEntry(c,I)).next(A=>{const P=u.docVersions.get(I);be(P!==null,48541),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),m.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Mv(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function MC(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((h,f)=>{const g=s.get(f);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(i,h.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(It.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(f,m),function(A,P,N){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=DC?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,m,h)&&l.push(n.Ti.updateTargetData(i,m))});let c=er(),u=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(LC(i,o,e.documentUpdates).next(h=>{c=h.qs,u=h.Qs})),!r.isEqual(de.min())){const h=n.Ti.getLastRemoteSnapshotVersion(i).next(f=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function LC(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=er();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne(Fh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function UC(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FC(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Au(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ai(o))throw o;ne(Fh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Ig(t,e,n){const r=ge(t);let s=de.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=ge(c),g=f.Os.get(h);return g!==void 0?j.resolve(f.xs.get(g)):f.Ti.getTargetData(u,h)}(r,o,kn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ae())).next(l=>($C(r,CR(e),l),{documents:l,$s:i})))}function $C(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Ag{constructor(){this.activeTargetIds=NR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BC{constructor(){this.xo=new Ag,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jC{No(e){}shutdown(){}}/**
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
 */const bg="ConnectivityMonitor";class Rg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(bg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(bg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let aa=null;function bu(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="RestConnection",qC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===gu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=bu(),l=this.jo(e,n.toUriEncodedString());ne(Dc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),h=us(u);return this.Jo(e,l,c,r,h).then(f=>(ne(Dc,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ks(Dc,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=qC[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class zC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const St="WebChannelConnection";class GC extends HC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=bu();return new Promise((l,c)=>{const u=new Oy;u.setWithCredentials(!0),u.listenOnce(Vy.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ea.NO_ERROR:const f=u.getResponseJson();ne(St,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Ea.TIMEOUT:ne(St,`RPC '${e}' ${o} timed out`),c(new Q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const g=u.getStatus();if(ne(St,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const A=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(V)>=0?V:L.UNKNOWN}(I.status);c(new Q(A,I.message))}else c(new Q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Q(L.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(St,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ne(St,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=bu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Uy(),l=Ly(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ne(St,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const I=new zC({Zo:P=>{m?ne(St,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(ne(St,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),ne(St,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Xo:()=>f.close()}),A=(P,N,V)=>{P.listen(N,M=>{try{V(M)}catch(U){setTimeout(()=>{throw U},0)}})};return A(f,Pi.EventType.OPEN,()=>{m||(ne(St,`RPC '${e}' stream ${s} transport opened.`),I.__())}),A(f,Pi.EventType.CLOSE,()=>{m||(m=!0,ne(St,`RPC '${e}' stream ${s} transport closed`),I.u_())}),A(f,Pi.EventType.ERROR,P=>{m||(m=!0,Ks(St,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),I.u_(new Q(L.UNAVAILABLE,"The operation could not be completed")))}),A(f,Pi.EventType.MESSAGE,P=>{var N;if(!m){const V=P.data[0];be(!!V,16349);const M=V,U=(M==null?void 0:M.error)||((N=M[0])===null||N===void 0?void 0:N.error);if(U){ne(St,`RPC '${e}' stream ${s} received error:`,U);const ie=U.status;let re=function(y){const b=tt[y];if(b!==void 0)return Tv(b)}(ie),C=U.message;re===void 0&&(re=L.INTERNAL,C="Unknown error status: "+ie+" with message "+U.message),m=!0,I.u_(new Q(re,C)),f.close()}else ne(St,`RPC '${e}' stream ${s} received:`,V),I.c_(V)}}),A(l,My.STAT_EVENT,P=>{P.stat===fu.PROXY?ne(St,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===fu.NOPROXY&&ne(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}}function Nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return new XR(t,!0)}/**
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
 */class $h{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Cg="PersistentStream";class Lv{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new $h(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new Q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ne(Cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(ne(Cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WC extends Lv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=eC(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Jt(o.readTime):de.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=Iu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=vu(c)?{documents:nC(i,c)}:{query:Pv(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Av(i,o.resumeToken);const u=Tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ya(i,o.snapshotVersion.toTimestamp());const u=Tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=iC(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=Iu(this.serializer),n.removeTarget=e,this.L_(n)}}class KC extends Lv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=tC(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=Iu(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sv(this.serializer,r))};this.L_(n)}}/**
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
 */class QC{}class XC extends QC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Eu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(L.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Eu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(L.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class YC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Zn(n),this.oa=!1):ne("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const is="RemoteStore";class JC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{ps(this)&&(ne(is,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.Ta.add(4),await Po(u),u.da.set("Unknown"),u.Ta.delete(4),await Ml(u)}(this))})}),this.da=new YC(r,s)}}async function Ml(t){if(ps(t))for(const e of t.Ia)await e(!0)}async function Po(t){for(const e of t.Ia)await e(!1)}function Uv(t,e){const n=ge(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Hh(n)?qh(n):li(n).M_()&&jh(n,e))}function Bh(t,e){const n=ge(t),r=li(n);n.Pa.delete(e),r.M_()&&Fv(n,e),n.Pa.size===0&&(r.M_()?r.N_():ps(n)&&n.da.set("Unknown"))}function jh(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}li(t).H_(e)}function Fv(t,e){t.Aa.Ke(e),li(t).J_(e)}function qh(t){t.Aa=new GR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),li(t).start(),t.da._a()}function Hh(t){return ps(t)&&!li(t).F_()&&t.Pa.size>0}function ps(t){return ge(t).Ta.size===0}function $v(t){t.Aa=void 0}async function ZC(t){t.da.set("Online")}async function eS(t){t.Pa.forEach((e,n)=>{jh(t,e)})}async function tS(t,e){$v(t),Hh(t)?(t.da.ca(e),qh(t)):t.da.set("Unknown")}async function nS(t,e,n){if(t.da.set("Online"),e instanceof Iv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(t,e)}catch(r){ne(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await el(t,r)}else if(e instanceof Ra?t.Aa.Xe(e):e instanceof Ev?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(de.min()))try{const r=await Mv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Pa.get(u);h&&i.Pa.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Pa.get(c);if(!h)return;i.Pa.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),Fv(i,c);const f=new Ir(h.target,c,u,h.sequenceNumber);jh(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne(is,"Failed to raise snapshot:",r),await el(t,r)}}async function el(t,e,n){if(!ai(e))throw e;t.Ta.add(1),await Po(t),t.da.set("Offline"),n||(n=()=>Mv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne(is,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Ml(t)})}function Bv(t,e){return e().catch(n=>el(t,n,e))}async function Ll(t){const e=ge(t),n=Ur(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:bh;for(;rS(e);)try{const s=await UC(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,sS(e,s)}catch(s){await el(e,s)}jv(e)&&qv(e)}function rS(t){return ps(t)&&t.ha.length<10}function sS(t,e){t.ha.push(e);const n=Ur(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function jv(t){return ps(t)&&!Ur(t).F_()&&t.ha.length>0}function qv(t){Ur(t).start()}async function iS(t){Ur(t).ta()}async function oS(t){const e=Ur(t);for(const n of t.ha)e.Z_(n.mutations)}async function aS(t,e,n){const r=t.ha.shift(),s=Nh.from(r,e,n);await Bv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ll(t)}async function lS(t,e){e&&Ur(t).Y_&&await async function(r,s){if(function(o){return wv(o)&&o!==L.ABORTED}(s.code)){const i=r.ha.shift();Ur(r).O_(),await Bv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ll(r)}}(t,e),jv(t)&&qv(t)}async function Sg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ne(is,"RemoteStore received new credentials");const r=ps(n);n.Ta.add(3),await Po(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Ml(n)}async function cS(t,e){const n=ge(t);e?(n.Ta.delete(2),await Ml(n)):e||(n.Ta.add(2),await Po(n),n.da.set("Unknown"))}function li(t){return t.Ra||(t.Ra=function(n,r,s){const i=ge(n);return i.ra(),new WC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:ZC.bind(null,t),n_:eS.bind(null,t),i_:tS.bind(null,t),j_:nS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Hh(t)?qh(t):t.da.set("Unknown")):(await t.Ra.stop(),$v(t))})),t.Ra}function Ur(t){return t.Va||(t.Va=function(n,r,s){const i=ge(n);return i.ra(),new KC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:iS.bind(null,t),i_:lS.bind(null,t),X_:oS.bind(null,t),ea:aS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Ll(t)):(await t.Va.stop(),t.ha.length>0&&(ne(is,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class zh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new zh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gh(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ai(t))return new Q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{static emptySet(e){return new Hs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ki(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Pg{constructor(){this.ma=new Qe(le.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class ei{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ei(e,n,Hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class uS{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class hS{constructor(){this.queries=kg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=kg(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Q(L.ABORTED,"Firestore shutting down"))}}function kg(){return new fs(t=>ov(t),kl)}async function Hv(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new uS,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Gh(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&Wh(n)}async function zv(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&Wh(n)}function fS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function Wh(t){t.ba.forEach(e=>{e.next()})}var Ru,xg;(xg=Ru||(Ru={})).Ca="default",xg.Cache="cache";class Gv{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Ru.Cache}}/**
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
 */class Wv{constructor(e){this.key=e}}class Kv{constructor(e){this.key=e}}class pS{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ae(),this.mutatedKeys=Ae(),this.Ha=av(e),this.Ja=new Hs(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new Pg,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const g=s.get(h),m=xl(this.query,f)?f:null,I=!!g&&this.mutatedKeys.has(g.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;g&&m?g.data.isEqual(m.data)?I!==A&&(r.track({type:3,doc:m}),P=!0):this.eu(g,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.Ha(m,c)>0||u&&this.Ha(m,u)<0)&&(l=!0)):!g&&m?(r.track({type:0,doc:m}),P=!0):g&&!m&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(m?(o=o.add(m),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((h,f)=>function(m,I){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:P})}};return A(m)-A(I)}(h.type,f.type)||this.Ha(h.doc,f.doc)),this.tu(r),s=s!=null&&s;const l=n&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new ei(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Pg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ae(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new Kv(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new Wv(r))}),n}su(e){this.Ga=e.$s,this.ja=Ae();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return ei.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Kh="SyncEngine";class gS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mS{constructor(e){this.key=e,this._u=!1}}class _S{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new fs(l=>ov(l),kl),this.cu=new Map,this.lu=new Set,this.hu=new Qe(le.comparator),this.Pu=new Map,this.Tu=new Mh,this.Iu={},this.Eu=new Map,this.du=Zs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function yS(t,e,n=!0){const r=e0(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Qv(r,e,n,!0),s}async function vS(t,e){const n=e0(t);await Qv(n,e,!0,!1)}async function Qv(t,e,n,r){const s=await FC(t.localStore,kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await wS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Uv(t.remoteStore,s),l}async function wS(t,e,n,r,s){t.Ru=(f,g,m)=>async function(A,P,N,V){let M=P.view.Za(N);M.Cs&&(M=await Ig(A.localStore,P.query,!1).then(({documents:C})=>P.view.Za(C,M)));const U=V&&V.targetChanges.get(P.targetId),ie=V&&V.targetMismatches.get(P.targetId)!=null,re=P.view.applyChanges(M,A.isPrimaryClient,U,ie);return Ng(A,P.targetId,re.ru),re.snapshot}(t,f,g,m);const i=await Ig(t.localStore,e,!0),o=new pS(e,i.$s),l=o.Za(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Ng(t,n,u.ru);const h=new gS(e,n,o);return t.uu.set(e,h),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),u.snapshot}async function TS(t,e,n){const r=ge(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!kl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Au(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bh(r.remoteStore,s.targetId),Cu(r,s.targetId)}).catch(oi)):(Cu(r,s.targetId),await Au(r.localStore,s.targetId,!0))}async function ES(t,e){const n=ge(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bh(n.remoteStore,r.targetId))}async function IS(t,e,n){const r=kS(t);try{const s=await function(o,l){const c=ge(o),u=it.now(),h=l.reduce((m,I)=>m.add(I.key),Ae());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=er(),A=Ae();return c.Bs.getEntries(m,h).next(P=>{I=P,I.forEach((N,V)=>{V.isValidDocument()||(A=A.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,I)).next(P=>{f=P;const N=[];for(const V of l){const M=$R(V,f.get(V.key).overlayedDocument);M!=null&&N.push(new jr(V.key,M,Jy(M.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,N,l)}).next(P=>{g=P;const N=P.applyToLocalDocumentSet(f,A);return c.documentOverlayCache.saveOverlays(m,P.batchId,N)})}).then(()=>({batchId:g.batchId,changes:cv(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Qe(ve)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,n),await ko(r,s.changes),await Ll(r.remoteStore)}catch(s){const i=Gh(s,"Failed to persist write");n.reject(i)}}async function Xv(t,e){const n=ge(t);try{const r=await MC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?be(o._u,14607):s.removedDocuments.size>0&&(be(o._u,42227),o._u=!1))}),await ko(n,r,e)}catch(r){await oi(r)}}function Dg(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.ya)g.Da(l)&&(u=!0)}),u&&Wh(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Qe(le.comparator);o=o.insert(i,ht.newNoDocument(i,de.min()));const l=Ae().add(i),c=new Ol(de.min(),new Map,new Qe(ve),o,l);await Xv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Qh(r)}else await Au(r.localStore,e,!1).then(()=>Cu(r,e,n)).catch(oi)}async function bS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await VC(n.localStore,e);Jv(n,r,null),Yv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ko(n,s)}catch(s){await oi(s)}}async function RS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(be(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);Jv(r,e,n),Yv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ko(r,s)}catch(s){await oi(s)}}function Yv(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Jv(t,e,n){const r=ge(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Cu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||Zv(t,r)})}function Zv(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Bh(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Qh(t))}function Ng(t,e,n){for(const r of n)r instanceof Wv?(t.Tu.addReference(r.key,e),CS(t,r)):r instanceof Kv?(ne(Kh,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||Zv(t,r.key)):ue(19791,{mu:r})}function CS(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(ne(Kh,"New document in limbo: "+n),t.lu.add(r),Qh(t))}function Qh(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new le(Ve.fromString(e)),r=t.du.next();t.Pu.set(r,new mS(n)),t.hu=t.hu.insert(n,r),Uv(t.remoteStore,new Ir(kn(Ph(n.path)),r,"TargetPurposeLimboResolution",Cl.le))}}async function ko(t,e,n){const r=ge(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Uh.Rs(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const h=ge(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,g=>j.forEach(g.ds,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>j.forEach(g.As,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!ai(f))throw f;ne(Fh,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.xs.get(g),I=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(I);h.xs=h.xs.insert(g,A)}}}(r.localStore,i))}async function SS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ne(Kh,"User change. New user:",e.toKey());const r=await Vv(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Q(L.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ko(n,r.ks)}}function PS(t,e){const n=ge(t),r=n.Pu.get(e);if(r&&r._u)return Ae().add(r.key);{let s=Ae();const i=n.cu.get(e);if(!i)return s;for(const o of i){const l=n.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function e0(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AS.bind(null,e),e.au.j_=dS.bind(null,e.eventManager),e.au.Vu=fS.bind(null,e.eventManager),e}function kS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RS.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return OC(this.persistence,new xC,e.initialUser,this.serializer)}yu(e){return new Ov(Lh.fi,this.serializer)}pu(e){return new BC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class xS extends tl{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){be(this.persistence.referenceDelegate instanceof Za,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mC(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new Ov(r=>Za.fi(r,n),this.serializer)}}class Su{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SS.bind(null,this.syncEngine),await cS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hS}()}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),r=function(i){return new GC(i)}(e.databaseInfo);return function(i,o,l,c){return new XC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new JC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dg(this.syncEngine,n,0),function(){return Rg.C()?new Rg:new jC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const f=new _S(s,i,o,l,c,u);return h&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ne(is,"RemoteStore shutting down."),i.Ta.add(5),await Po(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Su.provider={build:()=>new Su};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class DS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Q(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=ge(s),l={documents:i.map(f=>Ja(o.serializer,f))},c=await o.Yo("BatchGetDocuments",o.serializer.databaseId,Ve.emptyPath(),l,i.length),u=new Map;c.forEach(f=>{const g=ZR(o.serializer,f);u.set(g.key.toString(),g)});const h=[];return i.forEach(f=>{const g=u.get(f.toString());be(!!g,55234,{key:f}),h.push(g)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Dh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=le.fromPath(r);this.mutations.push(new vv(s,this.precondition(s)))}),await async function(r,s){const i=ge(r),o={writes:s.map(l=>Sv(i.serializer,l))};await i.zo("Commit",i.serializer.databaseId,Ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ue(50498,{qu:e.constructor.name});n=de.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Q(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(de.min())?Ht.exists(!1):Ht.updateTime(n):Ht.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(de.min()))throw new Q(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ht.updateTime(n)}return Ht.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class NS{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new $h(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new DS(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!Ro(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!wv(n)}return!1}}/**
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
 */const Fr="FirestoreClient";class OS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=jy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne(Fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne(Fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(t,e){t.asyncQueue.verifyOperationInProgress(),ne(Fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VS(t);ne(Fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sg(e.remoteStore,s)),t._onlineComponents=e}async function VS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(Fr,"Using user provided OfflineComponentProvider");try{await Oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await Oc(t,new tl)}}else ne(Fr,"Using default OfflineComponentProvider"),await Oc(t,new xS(void 0));return t._offlineComponents}async function Xh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(Fr,"Using user provided OnlineComponentProvider"),await Og(t,t._uninitializedComponentsProvider._online)):(ne(Fr,"Using default OnlineComponentProvider"),await Og(t,new Su))),t._onlineComponents}function MS(t){return Xh(t).then(e=>e.syncEngine)}function n0(t){return Xh(t).then(e=>e.datastore)}async function r0(t){const e=await Xh(t),n=e.eventManager;return n.onListen=yS.bind(null,e.syncEngine),n.onUnlisten=TS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ES.bind(null,e.syncEngine),n}function LS(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new t0({next:g=>{h.Cu(),o.enqueueAndForget(()=>zv(i,f));const m=g.docs.has(l);!m&&g.fromCache?u.reject(new Q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&c&&c.source==="server"?u.reject(new Q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Gv(Ph(l.path),h,{includeMetadataChanges:!0,La:!0});return Hv(i,f)}(await r0(t),t.asyncQueue,e,n,r)),r.promise}function US(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new t0({next:g=>{h.Cu(),o.enqueueAndForget(()=>zv(i,f)),g.fromCache&&c.source==="server"?u.reject(new Q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Gv(l,h,{includeMetadataChanges:!0,La:!0});return Hv(i,f)}(await r0(t),t.asyncQueue,e,n,r)),r.promise}function FS(t,e,n){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await n0(t);r.resolve(async function(o,l,c){var u;const h=ge(o),{request:f,yt:g,parent:m}=rC(h.serializer,RR(l),c);h.connection.Uo||delete f.parent;const I=(await h.Yo("RunAggregationQuery",h.serializer.databaseId,m,f,1)).filter(P=>!!P.result);be(I.length===1,64727);const A=(u=I[0].result)===null||u===void 0?void 0:u.aggregateFields;return Object.keys(A).reduce((P,N)=>(P[g[N]]=A[N],P),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
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
 */function s0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;/**
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
 */function i0(t,e,n){if(!n)throw new Q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $S(t,e,n,r){if(e===!0&&r===!0)throw new Q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mg(t){if(!le.isDocumentKey(t))throw new Q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lg(t){if(le.isDocumentKey(t))throw new Q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function $r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ul(t);throw new Q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firestore.googleapis.com",Ug=!0;class Fg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o0,this.ssl=Ug}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ug;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pC)throw new Q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z2;switch(r.type){case"firstParty":return new Q2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vg.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Vg.delete(n),r.terminate())}(this),Promise.resolve()}}function BS(t,e,n,r={}){var s;t=$r(t,Fl);const i=us(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(dh(`https://${c}`),fh("Firestore",!0)),o.host!==o0&&o.host!==c&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!ns(u,l)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Pt.MOCK_USER;else{h=K_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Pt(g)}t._authCredentials=new G2(new $y(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class xr extends sr{constructor(e,n,r){super(e,n,Ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new le(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function os(t,e,...n){if(t=He(t),i0("collection","path",e),t instanceof Fl){const r=Ve.fromString(e,...n);return Lg(r),new xr(t,null,r)}{if(!(t instanceof Gt||t instanceof xr))throw new Q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Lg(r),new xr(t.firestore,null,r)}}function nl(t,e,...n){if(t=He(t),arguments.length===1&&(e=jy.newId()),i0("doc","path",e),t instanceof Fl){const r=Ve.fromString(e,...n);return Mg(r),new Gt(t,null,new le(r))}{if(!(t instanceof Gt||t instanceof xr))throw new Q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Mg(r),new Gt(t.firestore,t instanceof xr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="AsyncQueue";class Bg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new $h(this,"async_queue_retry"),this.ec=()=>{const r=Nc();r&&ne($g,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new gn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ai(e))throw e;ne($g,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Zn("INTERNAL UNHANDLED ERROR: ",jg(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=zh.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ue(47125,{_c:jg(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function jg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ci extends Fl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Bg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bg(e),this._firestoreClient=void 0,await e}}}function jS(t,e){const n=typeof t=="object"?t:El(),r=typeof t=="string"?t:e,s=ri(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=z_("firestore");i&&BS(s,...i)}return s}function xo(t){if(t._terminated)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qS(t),t._firestoreClient}function qS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,h){return new hR(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,s0(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new OS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HS{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class zS{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(It.fromBase64String(e))}catch(n){throw new Q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this._methodName=e}}/**
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
 */class Yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Jh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const GS=/^__.*__$/;class WS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class a0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function l0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{hc:t})}}class Zh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return rl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(l0(this.hc)&&GS.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class KS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vl(e)}gc(e,n,r,s=!1){return new Zh({hc:e,methodName:n,fc:r,path:Tt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jl(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new KS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function c0(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);td("Data must be an object, but it was:",o,r);const l=h0(r,o);let c,u;if(i.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Pu(e,f,n);if(!o.contains(g))throw new Q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);f0(h,g)||h.push(g)}c=new Xt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new WS(new Ut(l),c,u)}class ql extends Bl{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ql}}class ed extends Bl{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new go(e.serializer,dv(e.serializer,this.wc));return new MR(e.path,n)}isEqual(e){return e instanceof ed&&this.wc===e.wc}}function QS(t,e,n,r){const s=t.gc(1,e,n);td("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Br(r,(c,u)=>{const h=nd(e,c,n);u=He(u);const f=s.Ac(h);if(u instanceof ql)i.push(h);else{const g=Do(u,f);g!=null&&(i.push(h),o.set(h,g))}});const l=new Xt(i);return new a0(o,l,s.fieldTransforms)}function XS(t,e,n,r,s,i){const o=t.gc(1,e,n),l=[Pu(e,r,n)],c=[s];if(i.length%2!=0)throw new Q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Pu(e,i[g])),c.push(i[g+1]);const u=[],h=Ut.empty();for(let g=l.length-1;g>=0;--g)if(!f0(u,l[g])){const m=l[g];let I=c[g];I=He(I);const A=o.Ac(m);if(I instanceof ql)u.push(m);else{const P=Do(I,A);P!=null&&(u.push(m),h.set(m,P))}}const f=new Xt(u);return new a0(h,f,o.fieldTransforms)}function u0(t,e,n,r=!1){return Do(n,t.gc(r?4:3,e))}function Do(t,e){if(d0(t=He(t)))return td("Unsupported field value:",e,t),h0(t,e);if(t instanceof Bl)return function(r,s){if(!l0(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Do(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:Ya(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ya(s.serializer,i)}}if(r instanceof Yh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof as)return{bytesValue:Av(s.serializer,r._byteString)};if(r instanceof Gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jh)return function(o,l){return{mapValue:{fields:{[Xy]:{stringValue:Yy},[Wa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return xh(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Ul(r)}`)}(t,e)}function h0(t,e){const n={};return Hy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Do(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function d0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Yh||t instanceof as||t instanceof Gt||t instanceof Bl||t instanceof Jh)}function td(t,e,n){if(!d0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ul(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function Pu(t,e,n){if((e=He(e))instanceof $l)return e._internalPath;if(typeof e=="string")return nd(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const YS=new RegExp("[~\\*/\\[\\]]");function nd(t,e,n){if(e.search(YS)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(L.INVALID_ARGUMENT,l+t+c)}function f0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JS extends mo{data(){return super.data()}}function rd(t,e){return typeof e=="string"?nd(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sd{}class Hl extends sd{}function ku(t,e,...n){let r=[];e instanceof sd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof od).length,l=i.filter(c=>c instanceof id).length;if(o>1||o>0&&l>0)throw new Q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class id extends Hl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new id(e,n,r)}_apply(e){const n=this._parse(e);return p0(e._query,n),new sr(e.firestore,e.converter,wu(e._query,n))}_parse(e){const n=jl(e.firestore);return function(i,o,l,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){zg(f,h);const I=[];for(const A of f)I.push(Hg(c,i,A));g={arrayValue:{values:I}}}else g=Hg(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||zg(f,h),g=u0(l,o,f,h==="in"||h==="not-in");return nt.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class od extends sd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new od(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)p0(o,c),o=wu(o,c)}(e._query,n),new sr(e.firestore,e.converter,wu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ad extends Hl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ad(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ho(i,o)}(e._query,this._field,this._direction);return new sr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ds(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function xu(t,e="asc"){const n=e,r=rd("orderBy",t);return ad._create(r,n)}class ld extends Hl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ld(e,n,r)}_apply(e){return new sr(e.firestore,e.converter,Qa(e._query,this._limit,this._limitType))}}function qg(t){return ld._create("limit",t,"F")}class cd extends Hl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=tP(e,this.type,this._docOrFields,this._inclusive);return new sr(e.firestore,e.converter,function(s,i){return new ds(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function eP(...t){return cd._create("startAfter",t,!1)}function tP(t,e,n,r){if(n[0]=He(n[0]),n[0]instanceof mo)return function(i,o,l,c,u){if(!c)throw new Q(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const h=[];for(const f of qs(i))if(f.field.isKeyField())h.push(Ka(o,c.key));else{const g=c.data.field(f.field);if(Sl(g))throw new Q(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const m=f.field.canonicalString();throw new Q(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}h.push(g)}return new Js(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=jl(t.firestore);return function(o,l,c,u,h,f){const g=o.explicitOrderBy;if(h.length>g.length)throw new Q(L.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let I=0;I<h.length;I++){const A=h[I];if(g[I].field.isKeyField()){if(typeof A!="string")throw new Q(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof A}`);if(!kh(o)&&A.indexOf("/")!==-1)throw new Q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${A}' contains a slash.`);const P=o.path.child(Ve.fromString(A));if(!le.isDocumentKey(P))throw new Q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const N=new le(P);m.push(Ka(l,N))}else{const P=u0(c,u,A);m.push(P)}}return new Js(m,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Hg(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kh(e)&&n.indexOf("/")!==-1)throw new Q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!le.isDocumentKey(r))throw new Q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ka(t,new le(r))}if(n instanceof Gt)return Ka(t,n._key);throw new Q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ul(n)}.`)}function zg(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g0{convertValue(e,n="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Jh(i)}convertGeoPoint(e){return new Yh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);be(Dv(r),9688,{name:e});const s=new co(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class nP extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function rP(){return new HS("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ud extends mo{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ca extends ud{data(e={}){return super.data(e)}}class sP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ca(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:iP(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){t=$r(t,Gt);const e=$r(t.firestore,ci);return LS(xo(e),t._key).then(n=>lP(e,t,n))}class zl extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function hd(t){t=$r(t,sr);const e=$r(t.firestore,ci),n=xo(e),r=new zl(e);return ZS(t._query),US(n,t._query).then(s=>new sP(e,r,t,s))}function _0(t,e){const n=$r(t.firestore,ci),r=nl(t),s=m0(t.converter,e);return aP(n,[c0(jl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function aP(t,e){return function(r,s){const i=new gn;return r.asyncQueue.enqueueAndForget(async()=>IS(await MS(r),s,i)),i.promise}(xo(t),e)}function lP(t,e,n){const r=n.docs.get(e._key),s=new zl(t);return new ud(t,s,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function cP(t){return uP(t,{count:rP()})}function uP(t,e){const n=$r(t.firestore,ci),r=xo(n),s=cR(e,(i,o)=>new qR(o,i.aggregateType,i._internalFieldPath));return FS(r,t._query,s).then(i=>function(l,c,u){const h=new zl(l);return new zS(c,h,u)}(n,t,i))}/**
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
 */const hP={maxAttempts:5};function Di(t,e){if((t=He(t)).firestore!==e)throw new Q(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=jl(e)}get(e){const n=Di(e,this._firestore),r=new nP(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return ue(24041);const i=s[0];if(i.isFoundDocument())return new mo(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new mo(this._firestore,r,n._key,null,n.converter);throw ue(18433,{doc:i})})}set(e,n,r){const s=Di(e,this._firestore),i=m0(s.converter,n,r),o=c0(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Di(e,this._firestore);let o;return o=typeof(n=He(n))=="string"||n instanceof $l?XS(this._dataReader,"Transaction.update",i._key,n,r,s):QS(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Di(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends dP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Di(e,this._firestore),r=new zl(this._firestore);return super.get(e).then(s=>new ud(this._firestore,r,n._key,s._document,new Ds(!1,!1),n.converter))}}function pP(t,e,n){t=$r(t,ci);const r=Object.assign(Object.assign({},hP),n);return function(i){if(i.maxAttempts<1)throw new Q(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,l){const c=new gn;return i.asyncQueue.enqueueAndForget(async()=>{const u=await n0(i);new NS(i.asyncQueue,u,l,o,c).$u()}),c.promise}(xo(t),s=>e(new fP(t,s)),r)}function Gg(t){return new ed("increment",t)}(function(e,n=!0){(function(s){ii=s})(hs),Xn(new Dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ci(new W2(r.getProvider("auth-internal")),new X2(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pn(Wp,Kp,e),pn(Wp,Kp,"esm2017")})();/**
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
 */const y0="firebasestorage.googleapis.com",v0="storageBucket",gP=2*60*1e3,mP=10*60*1e3,_P=1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Vc(t){return"storage/"+t}function dd(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(qe.UNKNOWN,t)}function yP(t){return new Xe(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vP(t){return new Xe(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(qe.UNAUTHENTICATED,t)}function TP(){return new Xe(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EP(t){return new Xe(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w0(){return new Xe(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T0(){return new Xe(qe.CANCELED,"User canceled the upload/download.")}function IP(t){return new Xe(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function AP(t){return new Xe(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bP(){return new Xe(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+v0+"' property when initializing the app?")}function E0(){return new Xe(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RP(){return new Xe(qe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function CP(){return new Xe(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SP(t){return new Xe(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Du(t){return new Xe(qe.INVALID_ARGUMENT,t)}function I0(){return new Xe(qe.APP_DELETED,"The Firebase app was deleted.")}function PP(t){return new Xe(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wi(t,e){return new Xe(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ci(t){throw new Xe(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw AP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${s}/o${g}`,"i"),I={bucket:1,path:3},A=n===y0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",N=new RegExp(`^https?://${A}/${s}/${P}`,"i"),M=[{regex:l,indices:c,postModify:i},{regex:m,indices:I,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<M.length;U++){const ie=M[U],re=ie.regex.exec(e);if(re){const C=re[ie.indices.bucket];let v=re[ie.indices.path];v||(v=""),r=new Yt(C,v),ie.postModify(r);break}}if(r==null)throw IP(e);return r}}class kP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){s=setTimeout(()=>{s=null,t(m,c())},P)}function g(){i&&clearTimeout(i)}function m(P,...N){if(u){g();return}if(P){g(),h.call(null,P,...N);return}if(c()||o){g(),h.call(null,P,...N);return}r<64&&(r*=2);let M;l===1?(l=2,M=0):M=(r+Math.random())*1e3,f(M)}let I=!1;function A(P){I||(I=!0,g(),!u&&(s!==null?(P||(l=2),clearTimeout(s),f(0)):P||(l=1)))}return f(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function DP(t){t(!1)}/**
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
 */function NP(t){return t!==void 0}function OP(t){return typeof t=="function"}function VP(t){return typeof t=="object"&&!Array.isArray(t)}function Gl(t){return typeof t=="string"||t instanceof String}function Wg(t){return fd()&&t instanceof Blob}function fd(){return typeof Blob<"u"}function Kg(t,e,n,r){if(r<e)throw Du(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Du(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function No(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function A0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var es;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(es||(es={}));/**
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
 */function b0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class MP{constructor(e,n,r,s,i,o,l,c,u,h,f,g=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new la(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===es.NO_ERROR,c=i.getStatus();if(!l||b0(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===es.ABORT;r(!1,new la(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new la(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());NP(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=dd();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?I0():T0();o(c)}else{const c=w0();o(c)}};this.canceled_?n(!1,new la(!1,null,!0)):this.backoffId_=xP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class la{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $P(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BP(t,e,n,r,s,i,o=!0,l=!1){const c=A0(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return FP(h,e),LP(h,n),UP(h,i),$P(h,r),new MP(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function jP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qP(...t){const e=jP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fd())return new Blob(t);throw new Xe(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function zP(t){if(typeof atob>"u")throw SP("base-64");return atob(t)}/**
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
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mc{constructor(e,n){this.data=e,this.contentType=n||null}}function GP(t,e){switch(t){case Rn.RAW:return new Mc(R0(e));case Rn.BASE64:case Rn.BASE64URL:return new Mc(C0(t,e));case Rn.DATA_URL:return new Mc(KP(e),QP(e))}throw dd()}function R0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WP(t){let e;try{e=decodeURIComponent(t)}catch{throw Wi(Rn.DATA_URL,"Malformed data URL.")}return R0(e)}function C0(t,e){switch(t){case Rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Wi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Wi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zP(e)}catch(s){throw s.message.includes("polyfill")?s:Wi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class S0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wi(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KP(t){const e=new S0(t);return e.base64?C0(Rn.BASE64,e.rest):WP(e.rest)}function QP(t){return new S0(t).contentType}function XP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Er{constructor(e,n){let r=0,s="";Wg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wg(this.data_)){const r=this.data_,s=HP(r,e,n);return s===null?null:new Er(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Er(r,!0)}}static getBlob(...e){if(fd()){const n=e.map(r=>r instanceof Er?r.data_:r);return new Er(qP.apply(null,n))}else{const n=e.map(o=>Gl(o)?GP(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Er(s,!0)}}uploadData(){return this.data_}}/**
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
 */function P0(t){let e;try{e=JSON.parse(t)}catch{return null}return VP(e)?e:null}/**
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
 */function YP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function k0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ZP(t,e){return e}class Ot{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ZP}}let ca=null;function e4(t){return!Gl(t)||t.length<2?t:k0(t)}function x0(){if(ca)return ca;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(i,o){return e4(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ot("size");return s.xform=r,t.push(s),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),ca=t,ca}function t4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function n4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return t4(r,t),r}function D0(t,e,n){const r=P0(e);return r===null?null:n4(t,r,n)}function r4(t,e,n,r){const s=P0(e);if(s===null||!Gl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,g="/b/"+o(h)+"/o/"+o(f),m=No(g,n,r),I=A0({alt:"media",token:u});return m+I})[0]}function N0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ui{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function zn(t){if(!t)throw dd()}function pd(t,e){function n(r,s){const i=D0(t,s,e);return zn(i!==null),i}return n}function s4(t,e){function n(r,s){const i=D0(t,s,e);return zn(i!==null),r4(i,s,t.host,t._protocol)}return n}function Oo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TP():s=wP():n.getStatus()===402?s=vP(t.bucket):n.getStatus()===403?s=EP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function O0(t){const e=Oo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=yP(t.path)),i.serverResponse=s.serverResponse,i}return n}function i4(t,e,n){const r=e.fullServerUrl(),s=No(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ui(s,i,pd(t,n),o);return l.errorHandler=O0(e),l}function o4(t,e,n){const r=e.fullServerUrl(),s=No(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new ui(s,i,s4(t,n),o);return l.errorHandler=O0(e),l}function a4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function V0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=a4(null,e)),r}function l4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let M="";for(let U=0;U<2;U++)M=M+Math.random().toString().slice(2);return M}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=V0(e,r,s),h=N0(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",m=Er.getBlob(f,r,g);if(m===null)throw E0();const I={name:u.fullPath},A=No(i,t.host,t._protocol),P="POST",N=t.maxUploadRetryTime,V=new ui(A,P,pd(t,n),N);return V.urlParams=I,V.headers=o,V.body=m.uploadData(),V.errorHandler=Oo(e),V}class sl{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function gd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function c4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=V0(e,r,s),l={name:o.fullPath},c=No(i,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=N0(o,n),g=t.maxUploadRetryTime;function m(A){gd(A);let P;try{P=A.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(Gl(P)),P}const I=new ui(c,u,m,g);return I.urlParams=l,I.headers=h,I.body=f,I.errorHandler=Oo(e),I}function u4(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const h=gd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}f||zn(!1);const g=Number(f);return zn(!isNaN(g)),new sl(g,r.size(),h==="final")}const o="POST",l=t.maxUploadRetryTime,c=new ui(n,o,i,l);return c.headers=s,c.errorHandler=Oo(e),c}const Qg=256*1024;function h4(t,e,n,r,s,i,o,l){const c=new sl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw RP();const u=c.total-c.current;let h=u;s>0&&(h=Math.min(h,s));const f=c.current,g=f+h;let m="";h===0?m="finalize":u===h?m="upload, finalize":m="upload";const I={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},A=r.slice(f,g);if(A===null)throw E0();function P(U,ie){const re=gd(U,["active","final"]),C=c.current+h,v=r.size();let y;return re==="final"?y=pd(e,i)(U,ie):y=null,new sl(C,v,re==="final",y)}const N="POST",V=e.maxUploadRetryTime,M=new ui(n,N,P,V);return M.headers=I,M.body=A.uploadData(),M.progressCallback=l||null,M.errorHandler=Oo(t),M}const qt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Lc(t){switch(t){case"running":case"pausing":case"canceling":return qt.RUNNING;case"paused":return qt.PAUSED;case"success":return qt.SUCCESS;case"canceled":return qt.CANCELED;case"error":return qt.ERROR;default:return qt.ERROR}}/**
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
 */class d4{constructor(e,n,r){if(OP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Es(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class f4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ci("cannot .send() more than once");if(us(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ci("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ci("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ci("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ci("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class p4 extends f4{initXhr(){this.xhr_.responseType="text"}}function ks(){return new p4}/**
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
 */class g4{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=x0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(qe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(b0(s.status,[]))if(i)s=w0();else{this.sleepTime=Math.max(this.sleepTime*2,_P),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(qe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=c4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ks,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=u4(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ks,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qg*this._chunkMultiplier,n=new sl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=h4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,ks,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=i4(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ks,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=l4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ks,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=T0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Lc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new d4(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Lc(this._state)){case qt.SUCCESS:Es(this._resolve.bind(null,this.snapshot))();break;case qt.CANCELED:case qt.ERROR:const n=this._reject;Es(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Lc(this._state)){case qt.RUNNING:case qt.PAUSED:e.next&&Es(e.next.bind(e,this.snapshot))();break;case qt.SUCCESS:e.complete&&Es(e.complete.bind(e))();break;case qt.CANCELED:case qt.ERROR:e.error&&Es(e.error.bind(e,this._error))();break;default:e.error&&Es(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ls{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ls(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return k0(this._location.path)}get storage(){return this._service}get parent(){const e=YP(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PP(e)}}function m4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new g4(t,new Er(e),n)}function _4(t){t._throwIfRoot("getDownloadURL");const e=o4(t.storage,t._location,x0());return t.storage.makeRequestWithTokens(e,ks).then(n=>{if(n===null)throw CP();return n})}function y4(t,e){const n=JP(t._location.path,e),r=new Yt(t._location.bucket,n);return new ls(t.storage,r)}/**
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
 */function v4(t){return/^[A-Za-z]+:\/\//.test(t)}function w4(t,e){return new ls(t,e)}function M0(t,e){if(t instanceof md){const n=t;if(n._bucket==null)throw bP();const r=new ls(n,n._bucket);return e!=null?M0(r,e):r}else return e!==void 0?y4(t,e):t}function T4(t,e){if(e&&v4(e)){if(t instanceof md)return w4(t,e);throw Du("To use ref(service, url), the first argument must be a Storage instance.")}else return M0(t,e)}function Xg(t,e){const n=e==null?void 0:e[v0];return n==null?null:Yt.makeFromBucketSpec(n,t)}function E4(t,e,n,r={}){t.host=`${e}:${n}`;const s=us(e);s&&(dh(`https://${t.host}`),fh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:K_(i,t.app.options.projectId))}class md{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=y0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=mP,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=Xg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Xg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ls(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new kP(I0());{const o=BP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Yg="@firebase/storage",Jg="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="storage";function I4(t,e,n){return t=He(t),m4(t,e,n)}function A4(t){return t=He(t),_4(t)}function b4(t,e){return t=He(t),T4(t,e)}function R4(t=El(),e){t=He(t);const r=ri(t,L0).getImmediate({identifier:e}),s=z_("storage");return s&&C4(r,...s),r}function C4(t,e,n,r={}){E4(t,e,n,r)}function S4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new md(n,r,s,e,hs)}function P4(){Xn(new Dn(L0,S4,"PUBLIC").setMultipleInstances(!0)),pn(Yg,Jg,""),pn(Yg,Jg,"esm2017")}P4();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map,U0={activated:!1,tokenObservers:[]},k4={initialized:!1,enabled:!1};function at(t){return Nu.get(t)||Object.assign({},U0)}function x4(t,e){return Nu.set(t,e),Nu.get(t)}function Wl(){return k4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="https://content-firebaseappcheck.googleapis.com/v1",D4="exchangeRecaptchaV3Token",N4="exchangeDebugToken",Zg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},O4=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new so,this.pending.promise.catch(n=>{}),await M4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new so,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function M4(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},zt=new ni("appCheck","AppCheck",L4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function _d(t){if(!at(t).activated)throw zt.create("use-before-activation",{appName:t.name})}function $0(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=ua(n)+"d:"),r&&(o+=ua(r)+"h:"),o+=ua(s)+"m:"+ua(i)+"s",o}function ua(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(f){throw zt.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw zt.create("fetch-status-error",{httpStatus:o.status});let l;try{l=await o.json()}catch(f){throw zt.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const c=l.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw zt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const u=Number(c[1])*1e3,h=Date.now();return{token:l.token,expireTimeMillis:h+u,issuedAtTimeMillis:h}}function U4(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${F0}/projects/${n}/apps/${r}:${D4}?key=${s}`,body:{recaptcha_v3_token:e}}}function B0(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${F0}/projects/${n}/apps/${r}:${N4}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4="firebase-app-check-database",$4=1,_o="firebase-app-check-store",j0="debug-token";let ha=null;function q0(){return ha||(ha=new Promise((t,e)=>{try{const n=indexedDB.open(F4,$4);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(zt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(_o,{keyPath:"compositeKey"})}}}catch(n){e(zt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ha)}function B4(t){return z0(G0(t))}function j4(t,e){return H0(G0(t),e)}function q4(t){return H0(j0,t)}function H4(){return z0(j0)}async function H0(t,e){const r=(await q0()).transaction(_o,"readwrite"),i=r.objectStore(_o).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(zt.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function z0(t){const n=(await q0()).transaction(_o,"readonly"),s=n.objectStore(_o).get(t);return new Promise((i,o)=>{s.onsuccess=l=>{const c=l.target.result;i(c?c.value:void 0)},n.onerror=l=>{var c;o(zt.create("storage-get",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function G0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Tl("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z4(t){if(ph()){let e;try{e=await B4(t)}catch(n){Ar.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Uc(t,e){return ph()?j4(t,e).catch(n=>{Ar.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function G4(){let t;try{t=await H4()}catch{}if(t)return t;{const e=crypto.randomUUID();return q4(e).catch(n=>Ar.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return Wl().enabled}async function wd(){const t=Wl();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function W4(){const t=q_(),e=Wl();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new so;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(G4())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4={error:"UNKNOWN_ERROR"};function Q4(t){return hh.encodeString(JSON.stringify(t),!1)}async function Ou(t,e=!1,n=!1){const r=t.app;_d(r);const s=at(r);let i=s.token,o;if(i&&!Ns(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Ns(u)?i=u:await Uc(r,void 0))}if(!e&&i&&Ns(i))return{token:i.token};let l=!1;if(vd())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=yd(B0(r,await wd()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),l=!0);const u=await s.exchangeTokenPromise;return await Uc(r,u),s.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Ar.warn(u.message):n&&Ar.error(u),Fc(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await at(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Ar.warn(u.message):n&&Ar.error(u),o=u}let c;return i?o?Ns(i)?c={token:i.token,internalError:o}:c=Fc(o):(c={token:i.token},s.token=i,await Uc(r,i)):c=Fc(o),l&&Q0(r,c),c}async function X4(t){const e=t.app;_d(e);const{provider:n}=at(e);if(vd()){const r=await wd(),{token:s}=await yd(B0(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function W0(t,e,n,r){const{app:s}=t,i=at(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ns(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),tm(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>tm(t))}function K0(t,e){const n=at(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function tm(t){const{app:e}=t,n=at(e);let r=n.tokenRefresher;r||(r=Y4(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Y4(t){const{app:e}=t;return new V4(async()=>{const n=at(e);let r;if(n.token?r=await Ou(t,!0):r=await Ou(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=at(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Zg.RETRIAL_MIN_WAIT,Zg.RETRIAL_MAX_WAIT)}function Q0(t,e){const n=at(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ns(t){return t.expireTimeMillis-Date.now()>0}function Fc(t){return{token:Q4(K4),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=at(this.app);for(const n of e)K0(this.app,n.next);return Promise.resolve()}}function Z4(t,e){return new J4(t,e)}function e6(t){return{getToken:e=>Ou(t,e),getLimitedUseToken:()=>X4(t),addTokenListener:e=>W0(t,"INTERNAL",e),removeTokenListener:e=>K0(t.app,e)}}const t6="@firebase/app-check",n6="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6="https://www.google.com/recaptcha/api.js";function s6(t,e){const n=new so,r=at(t);r.reCAPTCHAState={initialized:n};const s=i6(t),i=em(!1);return i?nm(t,e,i,s,n):l6(()=>{const o=em(!1);if(!o)throw new Error("no recaptcha");nm(t,e,o,s,n)}),n.promise}function nm(t,e,n,r,s){n.ready(()=>{a6(t,e,n,r),s.resolve(n)})}function i6(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function o6(t){_d(t);const n=await at(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=at(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function a6(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{at(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{at(t).reCAPTCHAState.succeeded=!1}}),i=at(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function l6(t){const e=document.createElement("script");e.src=r6,e.onload=t,document.head.appendChild(e)}/**
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
 */class Td{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;u6(this._throttleData);const s=await o6(this._app).catch(o=>{throw zt.create("recaptcha-error")});if(!(!((e=at(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw zt.create("recaptcha-error");let i;try{i=await yd(U4(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=c6(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),zt.create("initial-throttle",{time:$0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=ri(e,"heartbeat"),s6(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Td?this._siteKey===e._siteKey:!1}}function c6(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+O4,httpStatus:t};{const n=e?e.backoffCount:0,r=OI(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function u6(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw zt.create("throttled",{time:$0(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t=El(),e){t=He(t);const n=ri(t,"app-check");if(Wl().initialized||W4(),vd()&&wd().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw zt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return d6(t,e.provider,e.isTokenAutoRefreshEnabled),at(t).isTokenAutoRefreshEnabled&&W0(r,"INTERNAL",()=>{}),r}function d6(t,e,n=!1){const r=x4(t,Object.assign({},U0));r.activated=!0,r.provider=e,r.cachedTokenPromise=z4(t).then(s=>(s&&Ns(s)&&(r.token=s,Q0(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&Ar.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const f6="app-check",rm="app-check-internal";function p6(){Xn(new Dn(f6,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Z4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rm).initialize()})),Xn(new Dn(rm,t=>{const e=t.getProvider("app-check").getImmediate();return e6(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),pn(t6,n6)}p6();const g6={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},Kl=Y_(g6),mn=jS(Kl,"bha-brother-shout-433"),yo=q2(Kl),m6=R4(Kl);h6(Kl,{provider:new Td("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const Ed=we(null),X0=Be(()=>{var t;return(t=Ed.value)==null?void 0:t.uid}),_6=Be(()=>Y0(X0.value)),Y0=t=>t?"Bhai "+t.slice(-3):"Bhai Anon";xb(yo,t=>{Ed.value=t});function gs(){return{userId:X0,currentUser:Ed,userName:_6,getUserName:Y0,signInAnonymously:()=>Ty(yo),logout:()=>Db(yo)}}const Vu=we(0),Sa=ti([]);let y6=0;function on(t,e="info",n=5e3){const r=y6++;Sa.push({id:r,message:t,type:e}),n&&setTimeout(()=>{const s=Sa.findIndex(i=>i.id===r);s!==-1&&Sa.splice(s,1)},n)}const v6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function w6(t,e){return H(),Y("svg",v6,e[0]||(e[0]=[D("path",{d:"M3 20v-6l8-2-8-2V4l19 8z"},null,-1)]))}const J0={render:w6},_t=[];for(let t=0;t<256;++t)_t.push((t+256).toString(16).slice(1));function T6(t,e=0){return(_t[t[e+0]]+_t[t[e+1]]+_t[t[e+2]]+_t[t[e+3]]+"-"+_t[t[e+4]]+_t[t[e+5]]+"-"+_t[t[e+6]]+_t[t[e+7]]+"-"+_t[t[e+8]]+_t[t[e+9]]+"-"+_t[t[e+10]]+_t[t[e+11]]+_t[t[e+12]]+_t[t[e+13]]+_t[t[e+14]]+_t[t[e+15]]).toLowerCase()}let $c;const E6=new Uint8Array(16);function I6(){if(!$c){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");$c=crypto.getRandomValues.bind(crypto)}return $c(E6)}const A6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),sm={randomUUID:A6};function b6(t,e,n){var s;if(sm.randomUUID&&!t)return sm.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??I6();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,T6(r)}const R6={class:"photo-gallery"},C6={class:"photo-gallery__photos"},S6={class:"photo-gallery__photos__item add-image"},P6={class:"aspect-wide"},k6={class:"aspect-wide__wrap flex"},x6={class:"uploader"},D6={class:"aspect-wide"},N6=["progress"],O6=["src"],V6=Je({__name:"PhotoUploader",emits:["change"],setup(t,{emit:e}){const n=e,{currentUser:r,signInAnonymously:s}=gs(),i=we(4),o=we([]),l=Be(()=>o.value.slice(0,i.value-1)),c=Be(()=>o.value.length>l.value.length),u=async f=>{var I;if(!r.value)try{await s()}catch(A){console.error(A),on("Can not get private ID","error")}if(!r.value){on("Please sign in to upload files","error");return}const g=((I=r.value)==null?void 0:I.uid)||"anonymous",m=f.target.files;m&&Array.from(m).forEach(A=>{const P=ti({progress:0,url:null});o.value.push(P);const N=b6(),V=b4(m6,`userId/${g}/${N}_${A.name}`),M=I4(V,A);M.on("state_changed",U=>{P.progress=Math.round(U.bytesTransferred/U.totalBytes*100)},U=>{on(`Upload failed for ${A.name}:`,"error")},async()=>{P.url=await A4(M.snapshot.ref),n("change",o.value.map(U=>U.url))})})},h=()=>{c.value=!0,on("Preview opened","info")};return(f,g)=>(H(),Y("div",R6,[D("div",C6,[D("div",S6,[D("div",P6,[D("div",k6,[D("label",x6,[g[0]||(g[0]=D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24"},[D("path",{fill:"currentColor",d:"m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"}),D("path",{fill:"currentColor",d:"M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"}),D("path",{fill:"currentColor",d:"m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"})],-1)),g[1]||(g[1]=$e(" যোগ করুন ")),D("input",{type:"file",multiple:"",onChange:u},null,32)])])])]),(H(!0),Y(Ie,null,Kn(l.value,(m,I)=>(H(),Y("div",{key:I,class:"photo-gallery__photos__item"},[D("div",D6,[D("div",{class:On(["aspect-wide__wrap",{skeleton:m.progress<100}]),progress:m.progress},[m.url?(H(),Y("img",{key:0,src:m.url,alt:"Uploaded file",class:"photo-image"},null,8,O6)):ft("",!0),c.value&&l.value.length-1==I?(H(),Y("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:h},[D("i",null,"+"+Ft(o.value.length-l.value.length+1),1)])):ft("",!0)],10,N6)])]))),128))])]))}}),M6=ct(V6,[["__scopeId","data-v-9b912d5d"]]),L6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function U6(t,e){return H(),Y("svg",L6,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8",opacity:".5"},null,-1),D("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8"},[D("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))}const F6={render:U6},$6=["disabled"],Z0=Je({__name:"Btn",props:{disabled:{type:Boolean},loading:{type:Boolean}},setup(t){return(e,n)=>(H(),Y("button",{disabled:e.disabled},[e.loading?(H(),et(se(F6),{key:0,width:"24",height:"24"})):Ji(e.$slots,"default",{key:1})],8,$6))}}),B6={class:"post-add flex flex-col items-center"},j6={key:0,class:"post-add__form flex flex-col"},q6={class:"header p-4 flex"},H6={class:"body flex flex-col flex-grow"},z6={class:"post-add__ctrl items-center"},G6=Je({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=gs(),r=we(!1),s=we(!1),i=we([]),o=we(""),l=Be(()=>!s.value&&(o.value.trim()!==""||i.value.length>0)),c=async()=>{await h(o.value.trim())},u=()=>{r.value=!1,o.value="",s.value=!1},h=async g=>{if(s.value=!0,!e.value)try{await n()}catch(m){console.error(m),on("Can not get private ID","error")}_0(os(mn,"shouts"),{text:g,timestamp:new Date,userId:e.value.uid,files:i.value}),u(),Vu.value=Vu.value+1},f=g=>{i.value=[...g]};return(g,m)=>(H(),Y("section",B6,[r.value?(H(),Y("div",j6,[D("div",q6,[D("div",{class:"flex flex-grow items-center gap-1"},[D("button",{class:"btn",onClick:u},m[2]||(m[2]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[D("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),m[3]||(m[3]=D("h1",{class:"text-lg"},"নতুন পোস্ট",-1))]),X(Z0,{onClick:c,loading:s.value,class:"btn btn__primary",disabled:!l.value},{default:Et(()=>[X(se(J0),{width:"24",height:"24"})]),_:1},8,["loading","disabled"])]),D("div",H6,[Um(D("textarea",{autofocus:"",tabindex:"0","onUpdate:modelValue":m[0]||(m[0]=I=>o.value=I),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[b_,o.value]]),X(M6,{onChange:f})])])):ft("",!0),D("div",z6,[D("button",{class:"btn btn__primary circle",onClick:m[1]||(m[1]=I=>r.value=!0)},m[4]||(m[4]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[D("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),W6={class:"right flex items-center gap-1"},K6=Je({__name:"AppHeader",setup(t){const e=we(!0);let n=window.scrollY;const r=()=>{const s=window.scrollY;s>n&&s>50?e.value=!1:s<n&&(e.value=!0),n=s};return rr(()=>{window.addEventListener("scroll",r,{passive:!0})}),sh(()=>{window.removeEventListener("scroll",r)}),(s,i)=>{const o=wo("router-link");return H(),Y("header",{class:On(["w-full bg-white shadow transition-transform duration-300 z-50",e.value?"fixed top-0 translate-y-0":"fixed -top-16 -translate-y-full"])},[X(o,{class:"brand",to:{name:"home"}},{default:Et(()=>i[0]||(i[0]=[D("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[D("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),D("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),D("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),D("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),D("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),D("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),D("div",W6,[X(G6)])],2)}}}),Q6=ct(K6,[["__scopeId","data-v-b0f2966a"]]),X6={};function Y6(t,e){const n=wo("RouterLink");return H(),Y("footer",null,[X(n,{to:"/terms"},{default:Et(()=>e[0]||(e[0]=[$e("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=$e(" | ")),X(n,{to:"/privacy"},{default:Et(()=>e[1]||(e[1]=[$e("Privacy Policy")])),_:1,__:[1]})])}const J6=ct(X6,[["render",Y6],["__scopeId","data-v-9677e4fd"]]),Z6={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=wo("router-view");return H(),Y(Ie,null,[X(Q6),D("main",null,[X(r)]),X(J6)],64)}}},ek=ct(Z6,[["__scopeId","data-v-060c1d85"]]),tk={};function nk(t,e){return H(),Y("section",null,e[0]||(e[0]=[D("h2",null,"About",-1),D("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const rk=ct(tk,[["render",nk]]),sk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function ik(t,e){return H(),Y("svg",sk,e[0]||(e[0]=[D("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const Ql={render:ik},ok={key:0,class:"modal fixed inset-0 z-30 flex items-center justify-center"},e1={__name:"modal",props:{show:Boolean},emits:["close"],setup(t,{emit:e}){const n=e,r=we(null),s=()=>n("close"),i=l=>{r.value&&!r.value.contains(l.target)&&s()},o=l=>{l.key==="Escape"&&s()};return rr(()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",o)}),rh(()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",o)}),(l,c)=>(H(),et(Bm,{to:"body"},[t.show?(H(),Y("div",ok,[D("div",{class:"absolute backrdop w-full h-full",onClick:s}),D("button",{onClick:s,class:"absolute btn-close"},c[0]||(c[0]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[D("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),D("div",{ref_key:"modalRef",ref:r,class:"relative z-10 max-w-md w-full"},[Ji(l.$slots,"default")],512)])):ft("",!0)]))}},ak={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function lk(t,e){return H(),Y("svg",ak,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"},null,-1)]))}const ck={render:lk},uk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function hk(t,e){return H(),Y("svg",uk,e[0]||(e[0]=[D("path",{fill:"currentColor",d:"M13.794 2.642c4.68.9 7.86 4.954 7.7 9.773-.147 4.444-3.742 8.318-8.27 8.873a9.55 9.55 0 0 1-5.318-.86 1.37 1.37 0 0 0-.84-.082c-1.356.325-2.701.694-4.05 1.045-.148.038-.3.064-.516.109.405-1.482.783-2.904 1.187-4.32.103-.358.074-.644-.091-.995-1.575-3.345-1.438-6.627.708-9.66 2.151-3.042 5.187-4.34 8.92-3.96.176.017.351.042.57.077m5.914 11.004c.268-1.096.3-2.207.038-3.298-.788-3.288-2.834-5.419-6.16-6.093-3.263-.66-6.003.44-7.936 3.138-1.936 2.702-1.978 5.6-.38 8.503.205.373.26.68.135 1.078-.228.728-.405 1.472-.628 2.298.925-.24 1.736-.47 2.558-.65.233-.051.538-.024.742.088 4.696 2.585 10.277.2 11.63-5.064"},null,-1),D("path",{fill:"currentColor",d:"M9.745 8.158c.179.427.3.84.51 1.203.3.518.209.953-.205 1.318-.445.392-.379.725-.06 1.175.735 1.036 1.658 1.813 2.823 2.322.32.14.563.164.77-.157.086-.132.206-.24.306-.364.583-.726.4-.72 1.324-.319.291.127.582.262.851.428.27.165.68.335.732.57.118.52-.048 1.048-.482 1.434-.8.712-1.72.83-2.725.552-2.174-.6-3.846-1.904-5.127-3.71-.452-.637-.856-1.344-1.11-2.078-.308-.894-.09-1.756.546-2.513.375-.445.83-.545 1.325-.426.199.048.338.344.522.565"},null,-1)]))}const dk={render:hk},fk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function pk(t,e){return H(),Y("svg",fk,e[0]||(e[0]=[D("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98-3.552.23-6.771-1.959-8.633-4.875-1.236 4.197-.09 9.251 3.013 12.366 0 1.176-3 1.878-4.5 2.029",color:"currentColor"},null,-1)]))}const gk={render:pk},mk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function _k(t,e){return H(),Y("svg",mk,e[0]||(e[0]=[D("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m15.988 13 3.902-3.902c1.437-1.437 1.485-3.718.107-5.095-1.377-1.378-3.658-1.33-5.095.107L11 8.012m2 7.95-3.892 3.88c-1.432 1.43-3.64 1.615-5.082.107-1.442-1.507-1.326-3.639.107-5.068L8.025 11M9 15l6-6"},null,-1)]))}const yk={render:_k},vk={class:"share"},wk={class:"rounded-lg shadow-lg w-full p-4 relative bg-2"},Tk={class:"flex flex-col gap-2"},Ek={class:"flex gap-4 text-base"},Ik={class:"flex gap-4"},Ak=Je({__name:"BtnShare",props:{postId:{}},setup(t){const e=t,n=Be(()=>`${window.location.origin}/story/${e.postId}`),r=we(!1),s=encodeURIComponent(document.title||"Check this out!");function i(o){let l="";const c=encodeURIComponent(n.value);switch(o){case"facebook":l=`https://www.facebook.com/sharer/sharer.php?u=${c}`;break;case"whatsapp":l=`https://wa.me/?text=${s}%20${c}`;break;case"twitter":l=`https://twitter.com/intent/tweet?text=${s}&url=${c}`;break;case"copy":navigator.clipboard.writeText(n.value).then(()=>on("কপি করা হয়েছে।","info")).catch(()=>on("সমস্যা হয়েছে","error"));return}l&&window.open(l,"_blank"),r.value=!1}return(o,l)=>(H(),Y("div",vk,[D("button",{class:"opener",onClick:l[0]||(l[0]=c=>r.value=!0)},l[6]||(l[6]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[D("path",{d:"M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"})],-1),$e(" Share ")])),X(e1,{show:r.value,onClose:l[5]||(l[5]=c=>r.value=!1)},{default:Et(()=>[D("div",wk,[D("div",Tk,[l[11]||(l[11]=D("h2",{class:"m-0 text-xl text-center"},"Share to",-1)),l[12]||(l[12]=D("div",{class:"border-top"},null,-1)),D("div",Ek,[D("button",{onClick:l[1]||(l[1]=c=>i("facebook")),class:"flex gap-2 w-full p-4"},[X(se(ck),{width:"1.5rem",height:"1.5rem"}),l[7]||(l[7]=$e(" Facebook "))]),D("button",{onClick:l[2]||(l[2]=c=>i("whatsapp")),class:"flex gap-2 w-full p-4"},[X(se(dk),{width:"1.5rem",height:"1.5rem"}),l[8]||(l[8]=$e(" WhatsApp "))])]),D("div",Ik,[D("button",{onClick:l[3]||(l[3]=c=>i("twitter")),class:"flex gap-2 w-full p-4"},[X(se(gk),{width:"1.5rem",height:"1.5rem"}),l[9]||(l[9]=$e(" Twitter "))]),D("button",{onClick:l[4]||(l[4]=c=>i("copy")),class:"flex gap-2 w-full p-4"},[X(se(yk),{width:"1.5rem",height:"1.5rem"}),l[10]||(l[10]=$e(" Copy Link "))])])])])]),_:1},8,["show"])]))}}),bk=ct(Ak,[["__scopeId","data-v-3d1543b5"]]),Rk={class:"relative w-full h-full overflow-hidden"},Ck={key:0,class:"absolute w-full h-full shimmer rounded"},Sk=["src","alt"],Mu=Je({__name:"ImageLoader",props:{src:{},alt:{}},setup(t){const e=t,n=we(!1);function r(){n.value=!0}return Rr(()=>e.src,(s,i)=>{s!==i&&(n.value=!1)}),(s,i)=>(H(),Y("div",Rk,[n.value?ft("",!0):(H(),Y("div",Ck)),D("img",{src:s.src,alt:s.alt,onLoad:r,class:On(["transition-opacity duration-700 ease-in-out w-full h-full object-cover",n.value?"opacity-100":"opacity-0"])},null,42,Sk)]))}}),Pk={class:"w-full relative"},kk={__name:"ImageSlider",props:{images:{type:Array,required:!0}},setup(t){const e=t,n=Be(()=>e.images.length>1&&s.value>0),r=Be(()=>e.images.length>1&&s.value<e.images.length-1),s=we(0),i=()=>{s.value=(s.value-1+e.images.length)%e.images.length},o=()=>{s.value=(s.value+1)%e.images.length};return(l,c)=>(H(),Y("div",Pk,[X(Mu,{src:t.images[s.value],alt:"image",class:"w-full object-contain rounded"},null,8,["src"]),n.value?(H(),Y("button",{key:0,onClick:i,class:"absolute rounded left"},c[0]||(c[0]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[D("path",{d:"m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"})],-1)]))):ft("",!0),r.value?(H(),Y("button",{key:1,onClick:o,class:"absolute rounded right"},c[1]||(c[1]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[D("path",{d:"M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"})],-1)]))):ft("",!0)]))}},xk=ct(kk,[["__scopeId","data-v-46569096"]]),Dk={class:"photo-gallery"},Nk={class:"photo-gallery__photos"},Ok={class:"aspect-wide"},Vk={class:"aspect-wide__wrap"},Mk={class:"aspect-wide"},Lk={class:"aspect-wide__wrap"},Uk=Je({__name:"PhotoGallery",props:{files:{}},setup(t){const e=we(!1),n=t,r=we(4),s=Be(()=>{var l;return((l=n.files)==null?void 0:l.slice(0,r.value))??[]}),i=Be(()=>{var l;return((l=n.files)==null?void 0:l.length)>s.value.length}),o=()=>{on("Preview opened","info")};return(l,c)=>(H(),Y(Ie,null,[D("div",Dk,[D("div",Nk,[l.files.length===1?(H(),Y("div",{key:0,onClick:c[0]||(c[0]=u=>e.value=!0),class:"photo-gallery__photos__item full-size"},[D("div",Ok,[D("div",Vk,[X(Mu,{src:l.files[0],alt:"Picture"},null,8,["src"])])])])):(H(!0),Y(Ie,{key:1},Kn(s.value,(u,h)=>(H(),Y("div",{key:h,class:"photo-gallery__photos__item",onClick:c[1]||(c[1]=f=>e.value=!0)},[D("div",Mk,[D("div",Lk,[X(Mu,{src:u,alt:"Picture"},null,8,["src"]),i.value&&s.value.length-1==h?(H(),Y("div",{key:0,class:"photo-gallery__photos__blury__counter",onClick:o},[D("i",null,"+"+Ft(l.files.length-s.value.length+1),1)])):ft("",!0)])])]))),128))])]),X(e1,{show:e.value,onClose:c[2]||(c[2]=u=>e.value=!1)},{default:Et(()=>[X(xk,{images:n.files},null,8,["images"])]),_:1},8,["show"])],64))}}),Fk=ct(Uk,[["__scopeId","data-v-9e55b34e"]]),$k=Je({__name:"TextTrim",props:{text:{},maxLength:{}},setup(t){const e=we(null),n=we(!1),r=we(!1),s=()=>{const o=e.value;o&&(n.value=o.scrollHeight>o.clientHeight)},i=()=>{r.value=!r.value};return rr(()=>{th(s),window.addEventListener("resize",s)}),(o,l)=>(H(),Y(Ie,null,[D("div",{ref_key:"textRef",ref:e,class:On(["overflow-hidden transition-all duration-300 whitespace-pre-line",[r.value?"overflow-visible":"line-clamp-6 overflow-hidden"]])},Ft(o.text),3),n.value&&!r.value?(H(),Y("button",{key:0,onClick:i,class:"app-primary mt-2"}," Read more ")):ft("",!0)],64))}}),Bk={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function jk(t,e){return H(),Y("svg",Bk,e[0]||(e[0]=[ml('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const Lu={render:jk},qk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function Hk(t,e){return H(),Y("svg",qk,e[0]||(e[0]=[D("g",{fill:"none"},[D("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),D("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),D("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Uu={render:Hk},zk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function Gk(t,e){return H(),Y("svg",zk,e[0]||(e[0]=[D("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const Pa={render:Gk},Wk={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function Kk(t,e){return H(),Y("svg",Wk,e[0]||(e[0]=[ml('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const Fu={render:Kk},Qk={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function Xk(t,e){return H(),Y("svg",Qk,[(H(),et(Xm("style"),null,{default:Et(()=>e[0]||(e[0]=[$e(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=ml('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const $u={render:Xk},Yk={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function Jk(t,e){return H(),Y("svg",Yk,[(H(),et(Xm("style"),null,{default:Et(()=>e[0]||(e[0]=[$e(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=ml('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Bu={render:Jk};var st=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(st||{});const Zk={key:0,class:"reaction-panel"},e3={class:"wrap flex items-center"},t3=Je({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=gs(),s=we(!1),i=we(null),o=we(e.value||null),l=()=>{g()||(s.value=!0)},c=()=>{s.value=!1},u=()=>{g()&&(i.value=setTimeout(()=>{s.value=!0},500))},h=()=>{clearTimeout(i.value)},f=async I=>{s.value=!1,o.value=I,await m(I)};function g(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const m=async I=>{const A=e.postId;if(n.value||await r(),!n.value){on("User not authenticated","error");return}const P=nl(mn,"shouts",A),N=nl(mn,`shouts/${A}/reactions`,n.value.uid);await pP(mn,async V=>{const M=await V.get(N),U=await V.get(P);if(!U.exists())throw new Error("Shout not found");U.data().reactionSummary;let ie=null;if(M.exists()&&(ie=M.data().type),ie===I)return;V.set(N,{type:I,timestamp:new Date});const re={[`reactionSummary.${I}`]:Gg(1)};ie&&(re[`reactionSummary.${ie}`]=Gg(-1)),V.update(P,re)})};return Rr(()=>e.value,I=>{I&&(o.value=I)},{immediate:!0}),(I,A)=>(H(),Y("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:l,onMouseleave:c,onTouchstart:u,onTouchend:h},[D("button",{onClick:A[0]||(A[0]=P=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===se(st).Like?(H(),Y(Ie,{key:1},[X(se(Pa),{width:"18",height:"20",fill:"#1E90FF"}),A[8]||(A[8]=D("span",{class:"color-blue"},"Like",-1))],64)):o.value===se(st).Haha?(H(),Y(Ie,{key:2},[X(se($u),{width:"22",height:"22"}),A[9]||(A[9]=D("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===se(st).Love?(H(),Y(Ie,{key:3},[X(se(Uu),{width:"22",height:"22"}),A[10]||(A[10]=$e()),A[11]||(A[11]=D("span",{class:"color-red"},"Love",-1))],64)):o.value===se(st).Wow?(H(),Y(Ie,{key:4},[X(se(Bu),{width:"22",height:"22"}),A[12]||(A[12]=$e()),A[13]||(A[13]=D("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===se(st).Sad?(H(),Y(Ie,{key:5},[X(se(Fu),{width:"22",height:"22"}),A[14]||(A[14]=$e()),A[15]||(A[15]=D("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===se(st).Angry?(H(),Y(Ie,{key:6},[X(se(Lu),{width:"22",height:"22"}),A[16]||(A[16]=$e()),A[17]||(A[17]=D("span",{class:"color-red"},"Angry",-1))],64)):ft("",!0):(H(),Y(Ie,{key:0},[X(se(Pa),{width:"18",height:"18"}),A[7]||(A[7]=$e(" Like "))],64))]),s.value?(H(),Y("div",Zk,[D("div",e3,[D("button",{onClick:A[1]||(A[1]=P=>f(se(st).Like))},[X(se(Pa),{width:"20",height:"20",fill:"#1E90FF"})]),D("button",{onClick:A[2]||(A[2]=P=>f(se(st).Haha))},[X(se($u),{width:"24",height:"24"})]),D("button",{onClick:A[3]||(A[3]=P=>f(se(st).Love))},[X(se(Uu),{width:"30",height:"30"})]),D("button",{onClick:A[4]||(A[4]=P=>f(se(st).Wow))},[X(se(Bu),{width:"24",height:"24"})]),D("button",{onClick:A[5]||(A[5]=P=>f(se(st).Sad))},[X(se(Fu),{width:"28",height:"28"})]),D("button",{onClick:A[6]||(A[6]=P=>f(se(st).Angry))},[X(se(Lu),{width:"26",height:"26"})])])])):ft("",!0)],32))}}),n3=ct(t3,[["__scopeId","data-v-fdf2030a"]]),r3={key:0,class:"flex gap-1 items-center"},s3={class:"ml-2 text-base"},i3=Je({__name:"top",props:{totalReactions:{},topReactions:{}},setup(t){return(e,n)=>e.totalReactions>0?(H(),Y("div",r3,[(H(!0),Y(Ie,null,Kn(e.topReactions,(r,s)=>(H(),Y(Ie,{key:s},[r===se(st).Like?(H(),et(se(Pa),{key:0,fill:"#1E90FF",width:"16",height:"16"})):r===se(st).Haha?(H(),et(se($u),{key:1,width:"16",height:"16"})):r===se(st).Love?(H(),et(se(Uu),{key:2,width:"16",height:"16"})):r===se(st).Wow?(H(),et(se(Bu),{key:3,width:"16",height:"16"})):r===se(st).Sad?(H(),et(se(Fu),{key:4,width:"16",height:"16"})):r===se(st).Angry?(H(),et(se(Lu),{key:5,width:"16",height:"16"})):ft("",!0)],64))),128)),D("span",s3,Ft(e.totalReactions),1)])):ft("",!0)}}),o3=Je({__name:"item",props:{variant:{},width:{},height:{},borderRadius:{}},setup(t){return(e,n)=>(H(),Y("div",{class:On(["shimmer",`skeleton-${e.variant}`]),style:ul({width:e.width,height:e.height,borderRadius:e.borderRadius})},null,6))}}),rn=ct(o3,[["__scopeId","data-v-ad2da975"]]),ju=Je({__name:"index",props:{loading:{type:Boolean}},setup(t){return(e,n)=>e.loading?Ji(e.$slots,"template",{key:0},()=>[(H(),Y(Ie,null,Kn(3,r=>X(rn,{key:r})),64))]):Ji(e.$slots,"default",{key:1})}});var a3=["second","minute","hour","day","week","month","year"];function l3(t,e){if(e===0)return["just now","right now"];var n=a3[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var c3=["秒","分钟","小时","天","周","个月","年"];function u3(t,e){if(e===0)return["刚刚","片刻后"];var n=c3[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var qu={},t1=function(t,e){qu[t]=e},h3=function(t){return qu[t]||qu.en_US},Bc=[60,60,24,7,365/7/12,12];function im(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function d3(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=Bc[s]&&s<Bc.length;s++)t/=Bc[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function f3(t,e){var n=e?im(e):new Date;return(+n-+im(t))/1e3}var n1=function(t,e,n){var r=f3(t,n&&n.relativeDate);return d3(r,h3(e))};t1("en_US",l3);t1("zh_CN",u3);const p3={class:"app-card flex flex-col gap-2"},g3={class:"flex gap-2"},m3={class:"flex flex-col"},_3={class:"text-lg font-medium"},y3={class:"text-xs"},v3={class:"flex flex-col gap-1"},w3={class:"flex items-center gap-2"},T3={key:0,class:"text-base ml-auto"},E3={class:"flex justify-between"},r1=Je({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=gs(),s=F_(),i=e.item.id,o=we([]),l=we(!1),c=we(!1),u=we(0),h=Be(()=>{if(r.value&&o.value.length>0){const N=o.value.find(V=>V.id===r.value);if(N)return N.type}return null}),f=Be(()=>o.value.reduce((N,V)=>N+1,0)||0),g=Be(()=>{const N={like:0,haha:0,love:0,wow:0,sad:0,poop:0,angry:0};for(const{type:M}of o.value)N[M]++;const V=Math.max(...Object.values(N));return Object.entries(N).filter(([,M])=>M===V).map(([M])=>M)}),m=async()=>{l.value=!0;try{const N=await hd(os(mn,"shouts",i,"reactions"));o.value=N.docs.map(V=>{const{type:M,timestamp:U}=V.data();return{type:M,timestamp:U}})}catch(N){console.error("Error fetching reactions:",N)}l.value=!1},I=async()=>{if(!i)return u.value=0,0;c.value=!0;const N=os(mn,"shouts",i,"comments"),V=await cP(N);u.value=V.data().count,c.value=!1};function A(){s.push("/story/"+i)}return rr(()=>{m(),I()}),(N,V)=>(H(),Y("div",p3,[D("div",g3,[X(se(Ql),{width:"40",height:"40",class:"app-fill"}),D("div",m3,[D("span",_3,Ft(se(n)(N.item.userId)),1),D("i",y3,Ft(se(n1)(new Date(N.item.timestamp.seconds*1e3))),1)])]),D("div",v3,[D("div",null,[X($k,{text:N.item.text},null,8,["text"])]),N.item.files&&N.item.files.length>0?(H(),et(Fk,{key:0,files:N.item.files},null,8,["files"])):ft("",!0)]),D("div",w3,[X(ju,{loading:l.value},{template:Et(()=>[X(rn,{variant:"text",width:"2rem",height:"1.5rem"})]),default:Et(()=>[X(i3,{class:"flex items-center text-base","total-reactions":f.value,"top-reactions":g.value},null,8,["total-reactions","top-reactions"])]),_:1},8,["loading"]),X(ju,{loading:c.value},{template:Et(()=>[X(rn,{variant:"text",width:"4rem"})]),default:Et(()=>[u.value>0?(H(),Y("div",T3,Ft(u.value)+" comment"+Ft(u.value>1?"s":""),1)):ft("",!0)]),_:1},8,["loading"])]),V[1]||(V[1]=D("div",{class:"border-top"},null,-1)),D("div",E3,[X(n3,{"post-id":se(i),value:h.value},null,8,["post-id","value"]),D("button",{class:"flex app-primary",onClick:A},V[0]||(V[0]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[D("g",null,[D("g",null,[D("path",{d:"M1.98608 11.1034C1.98608 13.3236 2.78607 15.376 4.13153 16.9992C5.93153 19.238 8.78608 20.6746 11.9861 20.6746C11.9861 20.6746 15.5028 21.9659 17.8427 22.4553C18.6528 22.6248 19.5517 22.0692 19.5517 21.3173C19.5517 20.4026 17.9861 18.753 17.9861 18.753C19.1009 17.959 20.033 16.9462 20.7162 15.7808C21.526 14.3994 21.9861 12.8036 21.9861 11.1034C21.9861 9.39876 21.5255 7.7997 20.7162 6.41587C19.9666 5.13402 18.9178 4.03683 17.6588 3.21143C16.0406 2.12931 14.0952 1.51367 11.9861 1.51367C6.45881 1.51367 1.98608 5.80475 1.98608 11.1034Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])],-1),$e(" Comment ")])),X(bk,{"post-id":se(i)},null,8,["post-id"])]),Ji(N.$slots,"append")]))}}),I3={class:"app-card flex flex-col flex-grow gap-1"},A3={class:"flex flex-col gap-2"},b3={class:"flex gap-2"},R3={class:"flex flex-col flex-grow gap-2"},C3={class:"flex flex-col gap-3"},S3={class:"flex justify-between"},P3={class:"flex justify-between"},s1=Je({__name:"PostSkeleton",setup(t){function e(r,s){return Math.floor(Math.random()*(s-r+1))+r}function n(){const r=["w-2/3","w-1/4","w-3/4","w-1/5","w-2/5","w-3/5","w-4/5","w-1/6","w-5/6"],s=Math.floor(Math.random()*r.length);return r[s]}return(r,s)=>(H(),Y("div",I3,[X(ju,{loading:""},{template:Et(()=>[D("div",A3,[D("div",b3,[X(se(Ql),{width:"2.5rem",height:"2.5rem",class:"app-fill"}),D("div",R3,[X(rn,{variant:"text",width:"4.5rem",height:"1.5rem"}),X(rn,{variant:"text",width:"4.5rem",height:".5rem"})])]),D("div",C3,[(H(!0),Y(Ie,null,Kn(e(2,5),i=>(H(),et(rn,{variant:"text",class:"w-full"}))),256)),X(rn,{variant:"text",class:On(n())},null,8,["class"])]),D("div",S3,[X(rn,{variant:"text",width:"2.5rem"}),X(rn,{variant:"text",width:"5rem"})]),s[0]||(s[0]=D("div",{class:"border-top"},null,-1)),D("div",P3,[X(rn,{variant:"text",width:"5rem",height:"1.688rem"}),X(rn,{variant:"text",width:"5rem",height:"1.688rem"}),X(rn,{variant:"text",width:"5rem",height:"1.688rem"})])])]),_:1})]))}}),k3={class:"flex flex-col gap-4 container"},om=10,x3=Je({__name:"HomePage",setup(t){const e=$_(),n=we(!0),r=we([]),s=we(),i=async()=>{let l;n.value=!0,s.value?l=ku(os(mn,"shouts"),xu("timestamp","desc"),eP(s.value),qg(om)):l=ku(os(mn,"shouts"),xu("timestamp","desc"),qg(om));const c=await hd(l),u=[];for(const h of c.docs){const f=h.data();u.push({id:h.id,text:f.text,timestamp:f.timestamp,userId:f.userId,files:f.files||[]})}c.empty||(s.value=c.docs[c.docs.length-1]),r.value.push(...u),n.value=!1},o=async()=>{r.value=[],s.value=null,i()};return Rr(()=>e.fullPath,i),rr(i),Rr(Vu,o),(l,c)=>(H(),Y("div",k3,[n.value?(H(),Y(Ie,{key:0},Kn(3,u=>X(s1,{key:u,loading:n.value},null,8,["loading"])),64)):(H(!0),Y(Ie,{key:1},Kn(r.value,u=>(H(),et(r1,{key:u.id,item:u,class:"app-card"},null,8,["item"]))),128))]))}}),D3={};function N3(t,e){return H(),Y("section",null,e[0]||(e[0]=[D("h2",null,"Privacy Policy",-1),D("p",null,"Privacy Policy content goes here...",-1)]))}const O3=ct(D3,[["render",N3]]),V3={};function M3(t,e){return H(),Y("section",null,e[0]||(e[0]=[D("h2",null,"Terms and Conditions",-1),D("p",null,"Terms and Conditions content goes here...",-1)]))}const L3=ct(V3,[["render",M3]]),U3={class:"container"},F3={key:0,class:"identity"},$3={class:"signin"},B3=["disabled"],j3=["disabled"],q3=Je({__name:"UserPage",setup(t){const e=F_(),{userId:n,userName:r}=gs(),s=we(!1),i=we(!1),o=async()=>{s.value=!0;try{const c=await Ty(yo);s.value=!1}catch(c){console.error("Anonymous sign-in error:",c),alert("Failed to sign in: "+c.message)}},l=async()=>{i.value=!0;try{await yo.signOut(),i.value=!1,e.replace({name:"home"})}catch(c){console.error("Sign-out error:",c),alert("Failed to sign out: "+c.message)}};return(c,u)=>(H(),Y("section",U3,[u[1]||(u[1]=D("h2",null,"About you",-1)),se(n)?(H(),Y("div",F3,[$e(Ft(se(r)),1),u[0]||(u[0]=D("br",null,null,-1)),$e("ID: "+Ft(se(n)),1)])):ft("",!0),u[2]||(u[2]=D("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),D("div",$3,[se(n)?(H(),Y("button",{key:1,onClick:l,class:"btn btn__primary",disabled:i.value}," Sign out ",8,j3)):(H(),Y("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,B3))])]))}}),H3=ct(q3,[["__scopeId","data-v-922e1ab5"]]),z3={class:"comment-add flex z-30 gap-2 items-center"},G3={class:"flex flex-grow"},W3=Je({__name:"Add",props:{postId:{},commentId:{}},emits:["add"],setup(t,{emit:e}){const n=t,r=e,{userId:s,signInAnonymously:i}=gs(),o=we(""),l=we(null),c=we(!1),u=Be(()=>!c.value&&o.value.trim()!==""),h=async()=>{const f=o.value.trim();if(f){if(c.value=!0,!s.value)try{await i()}catch(g){console.error(g),on("Can not get private ID","error")}try{const g=os(mn,"shouts",n.postId,"comments"),m={content:f,authorId:s.value,parentCommentId:l.value,timestamp:new Date},I=await _0(g,m);o.value="",r("add")}catch(g){console.error("Error comment:",g),on("সমস্যা হয়েছে","error")}c.value=!1}};return(f,g)=>(H(),Y("div",z3,[X(se(Ql),{class:"user",width:"48",height:"48"}),D("div",G3,[Um(D("textarea",{"onUpdate:modelValue":g[0]||(g[0]=m=>o.value=m),placeholder:"আপনার মন্তব্য লিখুন...",class:"comment-input flex-grow",rows:"1"},null,512),[[b_,o.value]]),X(Z0,{disabled:!u.value,loading:c.value,onClick:h},{default:Et(()=>[X(se(J0),{width:"18",height:"18"})]),_:1},8,["disabled","loading"])])]))}}),K3=ct(W3,[["__scopeId","data-v-55074756"]]),Q3={key:0,class:"comment-list flex flex-col gap-4"},X3={class:"comment-item-body bg-2 flex flex-col flex-grow"},Y3={class:"comment-item-body-author flex justify-between"},J3={class:"author-name"},Z3={class:"timestamp"},e5={class:"content"},t5={key:0,class:"replies"},n5=Je({__name:"List",props:{postId:{}},setup(t){const e=t,{getUserName:n}=gs(),r=we([]);return rr(async()=>{const i=os(mn,"shouts",e.postId,"comments"),o=ku(i,xu("timestamp","asc")),l=await hd(o),c=[],u={};l.forEach(f=>{const g=f.data(),m={id:f.id,content:g.content,authorId:g.authorId,parentCommentId:g.parentCommentId||null,timestamp:g.timestamp,replies:[]};c.push(m),u[m.id]=m});const h=[];c.forEach(f=>{if(f.parentCommentId){const g=u[f.parentCommentId];g?(g.replies=g.replies||[],g.replies.push(f)):h.push(f)}else h.push(f)}),r.value=h}),(i,o)=>{const l=wo("CommentList");return r.value.length>0?(H(),Y("div",Q3,[o[0]||(o[0]=D("div",{class:"border-top"},null,-1)),(H(!0),Y(Ie,null,Kn(r.value,c=>{var u;return H(),Y("div",{key:c.id,class:"comment-item items-center flex"},[X(se(Ql),{class:"icon",width:"2.5rem",height:"2.5rem"}),D("div",X3,[D("div",Y3,[D("span",J3,Ft(se(n)(c.authorId)),1),D("i",Z3,Ft(se(n1)(new Date(c.timestamp.seconds*1e3))),1)]),D("div",e5,Ft(c.content),1),((u=c==null?void 0:c.replies)==null?void 0:u.length)??!1?(H(),Y("div",t5,[X(l,{comments:c.replies},null,8,["comments"])])):ft("",!0)])])}),128))])):ft("",!0)}}}),r5=ct(n5,[["__scopeId","data-v-e4c5abf9"]]),s5={},i5={class:"app-card"};function o5(t,e){return H(),Y("div",i5,e[0]||(e[0]=[D("div",null,[D("pre",{class:"text-xs"},[$e(`                           /~\\
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
______[_]_[_]_[_]________/_]_[_\\_________`),D("p",null,[$e("Yes, you are in the right place."),D("br"),$e("We are not! We are trying to get there soon."),D("br"),D("br"),$e("- Bhai brothers")]),$e(`
    `)])],-1)]))}const a5=ct(s5,[["render",o5]]),l5={class:"container"},c5=Je({__name:"StoryPage",setup(t){const n=$_().params.id,r=Array.isArray(n)?n[0]:n,s=we(!1),i=we(null);we(null);const o=we(0),l=async()=>{s.value=!0;try{const u=nl(mn,"shouts",r),h=await oP(u);if(h.exists()){const f=h.data();i.value={id:h.id,...f}}}catch{on("পোস্ট পাওয়া যায় নি।","error")}s.value=!1},c=()=>{o.value++};return rr(l),(u,h)=>(H(),Y("div",l5,[s.value?(H(),et(s1,{key:0,loading:s.value},null,8,["loading"])):(H(),Y(Ie,{key:1},[i.value?(H(),Y(Ie,{key:0},[X(r1,{item:i.value,class:"mb-5"},{append:Et(()=>[(H(),et(r5,{postId:i.value.id,key:o.value},null,8,["postId"]))]),_:1},8,["item"]),X(K3,{postId:i.value.id,onAdd:c,class:"post-add-comment z-10"},null,8,["postId"])],64)):(H(),et(a5,{key:1}))],64))]))}}),u5=ct(c5,[["__scopeId","data-v-b95e7646"]]),h5=[{path:"/",component:ek,children:[{path:"",name:"home",component:x3},{path:"about",name:"about",component:rk},{path:"terms",name:"terms",component:L3},{path:"privacy",name:"privacy",component:O3},{path:"user",name:"UserPage",component:H3},{path:"/story/:id",component:u5}]}],d5=sI({history:NE("/"),routes:h5}),f5={class:"fixed bottom-4 left-4 space-y-2 z-50 flex flex-col-reverse"},p5=Je({__name:"Notifications",setup(t){const e={success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600",warning:"bg-yellow-500 text-black"};return(n,r)=>(H(),et(Bm,{to:"body"},[D("div",f5,[X(HT,{name:"fade",tag:"div",class:"flex flex-col gap-1"},{default:Et(()=>[(H(!0),Y(Ie,null,Kn(se(Sa),s=>(H(),Y("div",{key:s.id,class:On(["min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left",e[s.type]])},Ft(s.message),3))),128))]),_:1})])]))}}),g5=ct(p5,[["__scopeId","data-v-16f73697"]]),m5={install(t){const e=document.createElement("div");document.body.appendChild(e),R_(g5).mount(e)}},Id=R_(nE);Id.use(d5);Id.use(m5);Id.mount("#app");
