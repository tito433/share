(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $u(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},xs=[],An=()=>{},I1=()=>!1,rl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bu=t=>t.startsWith("onUpdate:"),ct=Object.assign,ju=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A1=Object.prototype.hasOwnProperty,Ne=(t,e)=>A1.call(t,e),fe=Array.isArray,Ns=t=>sl(t)==="[object Map]",sg=t=>sl(t)==="[object Set]",_e=t=>typeof t=="function",We=t=>typeof t=="string",Jn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",ig=t=>(Be(t)||_e(t))&&_e(t.then)&&_e(t.catch),og=Object.prototype.toString,sl=t=>og.call(t),b1=t=>sl(t).slice(8,-1),ag=t=>sl(t)==="[object Object]",qu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=$u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R1=/-(\w)/g,on=il(t=>t.replace(R1,(e,n)=>n?n.toUpperCase():"")),C1=/\B([A-Z])/g,ss=il(t=>t.replace(C1,"-$1").toLowerCase()),ol=il(t=>t.charAt(0).toUpperCase()+t.slice(1)),lc=il(t=>t?`on${ol(t)}`:""),wr=(t,e)=>!Object.is(t,e),ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},S1=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let ff;const al=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?x1(r):ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Be(t))return t}const P1=/;(?![^(]*\))/g,k1=/:([^]+)/,D1=/\/\*[^]*?\*\//g;function x1(t){const e={};return t.replace(D1,"").split(P1).forEach(n=>{if(n){const r=n.split(k1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Or(t){let e="";if(We(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Or(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O1=$u(N1);function cg(t){return!!t||t===""}const ug=t=>!!(t&&t.__v_isRef===!0),Yt=t=>We(t)?t:t==null?"":fe(t)||Be(t)&&(t.toString===og||!_e(t.toString))?ug(t)?Yt(t.value):JSON.stringify(t,hg,2):String(t),hg=(t,e)=>ug(e)?hg(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cc(r,i)+" =>"]=s,n),{})}:sg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cc(n))}:Jn(e)?cc(e):Be(e)&&!fe(e)&&!ag(e)?String(e):e,cc=(t,e="")=>{var n;return Jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class V1{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function M1(){return Ft}let Ue;const uc=new WeakSet;class dg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uc.has(this)&&(uc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pf(this),mg(this);const e=Ue,n=hn;Ue=this,hn=!0;try{return this.fn()}finally{gg(this),Ue=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gu(e);this.deps=this.depsTail=void 0,pf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let fg=0,xi,Ni;function pg(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=xi,xi=t}function Hu(){fg++}function zu(){if(--fg>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xi;){let e=xi;for(xi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function mg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gu(r),L1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function $c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gi)||(t.globalVersion=Gi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$c(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=hn;Ue=t,hn=!0;try{mg(t);const s=t.fn(t._value);(e.version===0||wr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,hn=r,gg(t),t.flags&=-3}}function Gu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function L1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const yg=[];function Hn(){yg.push(hn),hn=!1}function zn(){const t=yg.pop();hn=t===void 0?!0:t}function pf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Gi=0;class U1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!hn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new U1(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,vg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Gi++,this.notify(e)}notify(e){Hu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zu()}}}function vg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)vg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bc=new WeakMap,Wr=Symbol(""),jc=Symbol(""),Wi=Symbol("");function Pt(t,e,n){if(hn&&Ue){let r=Bc.get(t);r||Bc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Wu),s.map=r,s.key=n),s.track()}}function Fn(t,e,n,r,s,i){const o=Bc.get(t);if(!o){Gi++;return}const l=c=>{c&&c.trigger()};if(Hu(),e==="clear")o.forEach(l);else{const c=fe(t),u=c&&qu(n);if(c&&n==="length"){const d=Number(r);o.forEach((f,m)=>{(m==="length"||m===Wi||!Jn(m)&&m>=d)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Wi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Wr)),Ns(t)&&l(o.get(jc)));break;case"delete":c||(l(o.get(Wr)),Ns(t)&&l(o.get(jc)));break;case"set":Ns(t)&&l(o.get(Wr));break}}zu()}function _s(t){const e=De(t);return e===t?e:(Pt(e,"iterate",Wi),sn(t)?e:e.map(vt))}function cl(t){return Pt(t=De(t),"iterate",Wi),t}const F1={__proto__:null,[Symbol.iterator](){return hc(this,Symbol.iterator,vt)},concat(...t){return _s(this).concat(...t.map(e=>fe(e)?_s(e):e))},entries(){return hc(this,"entries",t=>(t[1]=vt(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(vt),arguments)},find(t,e){return Mn(this,"find",t,e,vt,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,vt,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return dc(this,"includes",t)},indexOf(...t){return dc(this,"indexOf",t)},join(t){return _s(this).join(t)},lastIndexOf(...t){return dc(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return mf(this,"reduce",t,e)},reduceRight(t,...e){return mf(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return _s(this).toReversed()},toSorted(t){return _s(this).toSorted(t)},toSpliced(...t){return _s(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return hc(this,"values",vt)}};function hc(t,e,n){const r=cl(t),s=r[e]();return r!==t&&!sn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const $1=Array.prototype;function Mn(t,e,n,r,s,i){const o=cl(t),l=o!==t&&!sn(t),c=o[e];if(c!==$1[e]){const f=c.apply(t,i);return l?vt(f):f}let u=n;o!==t&&(l?u=function(f,m){return n.call(this,vt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function mf(t,e,n,r){const s=cl(t);let i=n;return s!==t&&(sn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,vt(l),c,t)}),s[e](i,...r)}function dc(t,e,n){const r=De(t);Pt(r,"iterate",Wi);const s=r[e](...n);return(s===-1||s===!1)&&Xu(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Ei(t,e,n=[]){Hn(),Hu();const r=De(t)[e].apply(t,n);return zu(),zn(),r}const B1=$u("__proto__,__v_isRef,__isVue"),wg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jn));function j1(t){Jn(t)||(t=String(t));const e=De(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Tg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?J1:bg:i?Ag:Ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=F1[n]))return c;if(n==="hasOwnProperty")return j1}const l=Reflect.get(e,n,kt(e)?e:r);return(Jn(n)?wg.has(n):B1(n))||(s||Pt(e,"get",n),i)?l:kt(l)?o&&qu(n)?l:l.value:Be(l)?s?Cg(l):ei(l):l}}class Eg extends Tg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Rr(i);if(!sn(r)&&!Rr(r)&&(i=De(i),r=De(r)),!fe(e)&&kt(i)&&!kt(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&qu(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,kt(e)?e:s);return e===De(s)&&(o?wr(r,i)&&Fn(e,"set",n,r):Fn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jn(n)||!wg.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",fe(e)?"length":Wr),Reflect.ownKeys(e)}}class q1 extends Tg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const H1=new Eg,z1=new q1,G1=new Eg(!0);const qc=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function W1(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=Ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?qc:e?Sa:vt;return!e&&Pt(i,"iterate",c?jc:Wr),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:l?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function Xo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function K1(t,e){const n={get(s){const i=this.__v_raw,o=De(i),l=De(s);t||(wr(s,l)&&Pt(o,"get",s),Pt(o,"get",l));const{has:c}=Qo(o),u=e?qc:t?Sa:vt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(De(s),"iterate",Wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),l=De(s);return t||(wr(s,l)&&Pt(o,"has",s),Pt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=De(l),u=e?qc:t?Sa:vt;return!t&&Pt(c,"iterate",Wr),l.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return ct(n,t?{add:Xo("add"),set:Xo("set"),delete:Xo("delete"),clear:Xo("clear")}:{add(s){!e&&!sn(s)&&!Rr(s)&&(s=De(s));const i=De(this);return Qo(i).has.call(i,s)||(i.add(s),Fn(i,"add",s,s)),this},set(s,i){!e&&!sn(i)&&!Rr(i)&&(i=De(i));const o=De(this),{has:l,get:c}=Qo(o);let u=l.call(o,s);u||(s=De(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?wr(i,d)&&Fn(o,"set",s,i):Fn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:l}=Qo(i);let c=o.call(i,s);c||(s=De(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Fn(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&Fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=W1(s,t,e)}),n}function Ku(t,e){const n=K1(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const Q1={get:Ku(!1,!1)},X1={get:Ku(!1,!0)},Y1={get:Ku(!0,!1)};const Ig=new WeakMap,Ag=new WeakMap,bg=new WeakMap,J1=new WeakMap;function Z1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ew(t){return t.__v_skip||!Object.isExtensible(t)?0:Z1(b1(t))}function ei(t){return Rr(t)?t:Qu(t,!1,H1,Q1,Ig)}function Rg(t){return Qu(t,!1,G1,X1,Ag)}function Cg(t){return Qu(t,!0,z1,Y1,bg)}function Qu(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=ew(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Os(t){return Rr(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function Xu(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function tw(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&lg(t,"__v_skip",!0),t}const vt=t=>Be(t)?ei(t):t,Sa=t=>Be(t)?Cg(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function Ie(t){return Sg(t,!1)}function nw(t){return Sg(t,!0)}function Sg(t,e){return kt(t)?t:new rw(t,e)}class rw{constructor(e,n){this.dep=new Wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||sn(e)||Rr(e);e=r?e:De(e),wr(e,n)&&(this._rawValue=e,this._value=r?e:vt(e),this.dep.trigger())}}function se(t){return kt(t)?t.value:t}const sw={get:(t,e,n)=>e==="__v_raw"?t:se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pg(t){return Os(t)?t:new Proxy(t,sw)}class iw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return pg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ow(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new iw(r,s,n)}const Yo={},Pa=new WeakMap;let Hr;function aw(t,e=!1,n=Hr){if(n){let r=Pa.get(n);r||Pa.set(n,r=[]),r.push(t)}}function lw(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=L=>s?L:sn(L)||s===!1||s===0?$n(L,1):$n(L);let d,f,m,g,R=!1,P=!1;if(kt(t)?(f=()=>t.value,R=sn(t)):Os(t)?(f=()=>u(t),R=!0):fe(t)?(P=!0,R=t.some(L=>Os(L)||sn(L)),f=()=>t.map(L=>{if(kt(L))return L.value;if(Os(L))return u(L);if(_e(L))return c?c(L,2):L()})):_e(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Hn();try{m()}finally{zn()}}const L=Hr;Hr=d;try{return c?c(t,3,[g]):t(g)}finally{Hr=L}}:f=An,e&&s){const L=f,ie=s===!0?1/0:s;f=()=>$n(L(),ie)}const S=M1(),U=()=>{d.stop(),S&&S.active&&ju(S.effects,d)};if(i&&e){const L=e;e=(...ie)=>{L(...ie),U()}}let x=P?new Array(t.length).fill(Yo):Yo;const O=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const ie=d.run();if(s||R||(P?ie.some((ee,b)=>wr(ee,x[b])):wr(ie,x))){m&&m();const ee=Hr;Hr=d;try{const b=[ie,x===Yo?void 0:P&&x[0]===Yo?[]:x,g];x=ie,c?c(e,3,b):e(...b)}finally{Hr=ee}}}else d.run()};return l&&l(O),d=new dg(f),d.scheduler=o?()=>o(O,!1):O,g=L=>aw(L,!1,d),m=d.onStop=()=>{const L=Pa.get(d);if(L){if(c)c(L,4);else for(const ie of L)ie();Pa.delete(d)}},e?r?O(!0):x=d.run():o?o(O.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function $n(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))$n(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)$n(t[r],e,n);else if(sg(t)||Ns(t))t.forEach(r=>{$n(r,e,n)});else if(ag(t)){for(const r in t)$n(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&$n(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(t,e,n,r){try{return r?t(...r):t()}catch(s){ul(s,e,n)}}function pn(t,e,n,r){if(_e(t)){const s=_o(t,e,n,r);return s&&ig(s)&&s.catch(i=>{ul(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function ul(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,c,u)===!1)return}l=l.parent}if(i){Hn(),_o(i,null,10,[t,c,u]),zn();return}}cw(t,n,s,r,o)}function cw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Mt=[];let wn=-1;const Vs=[];let ur=null,ws=0;const kg=Promise.resolve();let ka=null;function Yu(t){const e=ka||kg;return t?e.then(this?t.bind(this):t):e}function uw(t){let e=wn+1,n=Mt.length;for(;e<n;){const r=e+n>>>1,s=Mt[r],i=Ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ju(t){if(!(t.flags&1)){const e=Ki(t),n=Mt[Mt.length-1];!n||!(t.flags&2)&&e>=Ki(n)?Mt.push(t):Mt.splice(uw(e),0,t),t.flags|=1,Dg()}}function Dg(){ka||(ka=kg.then(Ng))}function hw(t){fe(t)?Vs.push(...t):ur&&t.id===-1?ur.splice(ws+1,0,t):t.flags&1||(Vs.push(t),t.flags|=1),Dg()}function gf(t,e,n=wn+1){for(;n<Mt.length;n++){const r=Mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xg(t){if(Vs.length){const e=[...new Set(Vs)].sort((n,r)=>Ki(n)-Ki(r));if(Vs.length=0,ur){ur.push(...e);return}for(ur=e,ws=0;ws<ur.length;ws++){const n=ur[ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ur=null,ws=0}}const Ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ng(t){try{for(wn=0;wn<Mt.length;wn++){const e=Mt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Mt.length;wn++){const e=Mt[wn];e&&(e.flags&=-2)}wn=-1,Mt.length=0,xg(),ka=null,(Mt.length||Vs.length)&&Ng()}}let dt=null,Og=null;function Da(t){const e=dt;return dt=t,Og=t&&t.type.__scopeId||null,e}function zt(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pf(-1);const i=Da(e);let o;try{o=t(...s)}finally{Da(i),r._d&&Pf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vg(t,e){if(dt===null)return t;const n=ml(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&$n(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Hn(),pn(c,n,8,[t.el,l,t,e]),zn())}}const Mg=Symbol("_vte"),dw=t=>t.__isTeleport,Oi=t=>t&&(t.disabled||t.disabled===""),_f=t=>t&&(t.defer||t.defer===""),yf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Hc=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},Lg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:d,pc:f,pbc:m,o:{insert:g,querySelector:R,createText:P,createComment:S}}=u,U=Oi(e.props);let{shapeFlag:x,children:O,dynamicChildren:L}=e;if(t==null){const ie=e.el=P(""),ee=e.anchor=P("");g(ie,n,r),g(ee,n,r);const b=(y,I)=>{x&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),d(O,y,I,s,i,o,l,c))},v=()=>{const y=e.target=Hc(e.props,R),I=Fg(y,e,P,g);y&&(o!=="svg"&&yf(y)?o="svg":o!=="mathml"&&vf(y)&&(o="mathml"),U||(b(y,I),ha(e,!1)))};U&&(b(n,ee),ha(e,!0)),_f(e.props)?(e.el.__isMounted=!1,Vt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(_f(e.props)&&t.el.__isMounted===!1){Vt(()=>{Lg.process(t,e,n,r,s,i,o,l,c,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ie=e.anchor=t.anchor,ee=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=Oi(t.props),y=v?n:ee,I=v?ie:b;if(o==="svg"||yf(ee)?o="svg":(o==="mathml"||vf(ee))&&(o="mathml"),L?(m(t.dynamicChildren,L,y,s,i,o,l),nh(t,e,!0)):c||f(t,e,y,I,s,i,o,l,!1),U)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Jo(e,n,ie,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=Hc(e.props,R);C&&Jo(e,C,null,u,0)}else v&&Jo(e,ee,b,u,1);ha(e,U)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:d,target:f,props:m}=t;if(f&&(s(u),s(d)),i&&s(c),o&16){const g=i||!Oi(m);for(let R=0;R<l.length;R++){const P=l[R];r(P,e,n,g,!!P.dynamicChildren)}}},move:Jo,hydrate:fw};function Jo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:d}=t,f=i===2;if(f&&r(o,e,n),(!f||Oi(d))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);f&&r(l,e,n)}function fw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:d}},f){const m=e.target=Hc(e.props,c);if(m){const g=Oi(e.props),R=m._lpa||m.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,l(t),n,r,s,i),e.targetStart=R,e.targetAnchor=R&&o(R);else{e.anchor=o(t);let P=R;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")e.targetStart=P;else if(P.data==="teleport anchor"){e.targetAnchor=P,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}P=o(P)}e.targetAnchor||Fg(m,e,d,u),f(R&&o(R),e,m,n,r,s,i)}ha(e,g)}return e.anchor&&o(e.anchor)}const Ug=Lg;function ha(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Fg(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Mg]=i,t&&(r(s,t),r(i,t)),i}const ys=Symbol("_leaveCb"),Zo=Symbol("_enterCb");function pw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return is(()=>{t.isMounted=!0}),Zu(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],mw={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn};function gw(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:S,onAppear:U,onAfterAppear:x,onAppearCancelled:O}=e,L=String(t.key),ie=gw(n,t),ee=(y,I)=>{y&&pn(y,r,9,I)},b=(y,I)=>{const C=I[1];ee(y,I),fe(y)?y.every(A=>A.length<=1)&&C():y.length<=1&&C()},v={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=S||c;else return;y[ys]&&y[ys](!0);const C=ie[L];C&&Ts(t,C)&&C.el[ys]&&C.el[ys](),ee(I,[y])},enter(y){let I=u,C=d,A=f;if(!n.isMounted)if(i)I=U||u,C=x||d,A=O||f;else return;let w=!1;const Oe=y[Zo]=st=>{w||(w=!0,st?ee(A,[y]):ee(C,[y]),v.delayedLeave&&v.delayedLeave(),y[Zo]=void 0)};I?b(I,[y,Oe]):Oe()},leave(y,I){const C=String(t.key);if(y[Zo]&&y[Zo](!0),n.isUnmounting)return I();ee(m,[y]);let A=!1;const w=y[ys]=Oe=>{A||(A=!0,I(),Oe?ee(P,[y]):ee(R,[y]),y[ys]=void 0,ie[C]===t&&delete ie[C])};ie[C]=t,g?b(g,[y,w]):w()},clone(y){return zc(y,e,n,r)}};return v}function Qi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $g(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Se?(o.patchFlag&128&&s++,r=r.concat($g(o.children,e,l))):(e||o.type!==kn)&&r.push(l!=null?Xr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function et(t,e){return _e(t)?ct({name:t.name},e,{setup:t}):t}function Bg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xa(t,e,n,r,s=!1){if(fe(t)){t.forEach((R,P)=>xa(R,e&&(fe(e)?e[P]:e),n,r,s));return}if(Ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ml(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,f=l.setupState,m=De(f),g=f===Le?()=>!1:R=>Ne(m,R);if(u!=null&&u!==c&&(We(u)?(d[u]=null,g(u)&&(f[u]=null)):kt(u)&&(u.value=null)),_e(c))_o(c,l,12,[o,d]);else{const R=We(c),P=kt(c);if(R||P){const S=()=>{if(t.f){const U=R?g(c)?f[c]:d[c]:c.value;s?fe(U)&&ju(U,i):fe(U)?U.includes(i)||U.push(i):R?(d[c]=[i],g(c)&&(f[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,g(c)&&(f[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,Vt(S,n)):S()}}}al().requestIdleCallback;al().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,jg=t=>t.type.__isKeepAlive;function _w(t,e){qg(t,"a",e)}function yw(t,e){qg(t,"da",e)}function qg(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(hl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jg(s.parent.vnode)&&vw(r,e,n,s),s=s.parent}}function vw(t,e,n,r){const s=hl(e,t,r,!0);zg(()=>{ju(r[e],s)},n)}function hl(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Hn();const l=vo(n),c=pn(e,n,t,o);return l(),zn(),c});return r?s.unshift(i):s.push(i),i}}const Zn=t=>(e,n=wt)=>{(!Zi||t==="sp")&&hl(t,(...r)=>e(...r),n)},ww=Zn("bm"),is=Zn("m"),Tw=Zn("bu"),Hg=Zn("u"),Zu=Zn("bum"),zg=Zn("um"),Ew=Zn("sp"),Iw=Zn("rtg"),Aw=Zn("rtc");function bw(t,e=wt){hl("ec",t,e)}const Gg="components";function yo(t,e){return Qg(Gg,t,!0,e)||t}const Wg=Symbol.for("v-ndc");function Kg(t){return We(t)?Qg(Gg,t,!1)||t:t||Wg}function Qg(t,e,n=!0,r=!1){const s=dt||wt;if(s){const i=s.type;{const l=dT(i,!1);if(l&&(l===e||l===on(e)||l===ol(on(e))))return i}const o=wf(s[t]||i[t],e)||wf(s.appContext[t],e);return!o&&r?i:o}}function wf(t,e){return t&&(t[e]||t[on(e)]||t[ol(on(e))])}function os(t,e,n,r){let s;const i=n,o=fe(t);if(o||We(t)){const l=o&&Os(t);let c=!1,u=!1;l&&(c=!sn(t),u=Rr(t),t=cl(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(c?u?Sa(vt(t[d])):vt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Xi(t,e,n={},r,s){if(dt.ce||dt.parent&&Ms(dt.parent)&&dt.parent.ce)return e!=="default"&&(n.name=e),z(),nt(Se,null,[re("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),z();const o=i&&Xg(i(n)),l=n.key||o&&o.key,c=nt(Se,{key:(l&&!Jn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Xg(t){return t.some(e=>Ji(e)?!(e.type===kn||e.type===Se&&!Xg(e.children)):!0)?t:null}const Gc=t=>t?m_(t)?ml(t):Gc(t.parent):null,Vi=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gc(t.parent),$root:t=>Gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ju(t.update)}),$nextTick:t=>t.n||(t.n=Yu.bind(t.proxy)),$watch:t=>Gw.bind(t)}),fc=(t,e)=>t!==Le&&!t.__isScriptSetup&&Ne(t,e),Rw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==Le&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Le&&Ne(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const d=Vi[e];let f,m;if(d)return e==="$attrs"&&Pt(t.attrs,"get",""),d(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Le&&Ne(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==Le&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&Ne(t,o)||fc(e,o)||(l=i[0])&&Ne(l,o)||Ne(r,o)||Ne(Vi,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wc=!0;function Cw(t){const e=Jg(t),n=t.proxy,r=t.ctx;Wc=!1,e.beforeCreate&&Ef(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:g,updated:R,activated:P,deactivated:S,beforeDestroy:U,beforeUnmount:x,destroyed:O,unmounted:L,render:ie,renderTracked:ee,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:C,components:A,directives:w,filters:Oe}=e;if(u&&Sw(u,r,null),o)for(const Ae in o){const we=o[Ae];_e(we)&&(r[Ae]=we.bind(n))}if(s){const Ae=s.call(n,n);Be(Ae)&&(t.data=ei(Ae))}if(Wc=!0,i)for(const Ae in i){const we=i[Ae],Gt=_e(we)?we.bind(n,n):_e(we.get)?we.get.bind(n,n):An,an=!_e(we)&&_e(we.set)?we.set.bind(n):An,Zt=Fe({get:Gt,set:an});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:ze=>Zt.value=ze})}if(l)for(const Ae in l)Yg(l[Ae],r,n,Ae);if(c){const Ae=_e(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(we=>{da(we,Ae[we])})}d&&Ef(d,t,"c");function He(Ae,we){fe(we)?we.forEach(Gt=>Ae(Gt.bind(n))):we&&Ae(we.bind(n))}if(He(ww,f),He(is,m),He(Tw,g),He(Hg,R),He(_w,P),He(yw,S),He(bw,v),He(Aw,ee),He(Iw,b),He(Zu,x),He(zg,L),He(Ew,y),fe(I))if(I.length){const Ae=t.exposed||(t.exposed={});I.forEach(we=>{Object.defineProperty(Ae,we,{get:()=>n[we],set:Gt=>n[we]=Gt})})}else t.exposed||(t.exposed={});ie&&t.render===An&&(t.render=ie),C!=null&&(t.inheritAttrs=C),A&&(t.components=A),w&&(t.directives=w),y&&Bg(t)}function Sw(t,e,n=An){fe(t)&&(t=Kc(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=dn(s.from||r,s.default,!0):i=dn(s.from||r):i=dn(s),kt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ef(t,e,n){pn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yg(t,e,n,r){let s=r.includes(".")?u_(n,r):()=>n[r];if(We(t)){const i=e[t];_e(i)&&Kr(s,i)}else if(_e(t))Kr(s,t.bind(n));else if(Be(t))if(fe(t))t.forEach(i=>Yg(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Kr(s,i,t)}}function Jg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Na(c,u,o,!0)),Na(c,e,o)),Be(e)&&i.set(e,c),c}function Na(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Na(t,i,n,!0),s&&s.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Pw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pw={data:If,props:Af,emits:Af,methods:Ri,computed:Ri,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ri,directives:Ri,watch:Dw,provide:If,inject:kw};function If(t,e){return e?t?function(){return ct(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function kw(t,e){return Ri(Kc(t),Kc(e))}function Kc(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?ct(Object.create(null),t,e):e}function Af(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ct(Object.create(null),Tf(t),Tf(e??{})):e}function Dw(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Zg(){return{app:null,config:{isNativeTag:I1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xw=0;function Nw(t,e){return function(r,s=null){_e(r)||(r=ct({},r)),s!=null&&!Be(s)&&(s=null);const i=Zg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:xw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pT,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...f)):_e(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,m){if(!c){const g=u._ceVNode||re(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,ml(g.component)}},onUnmount(d){l.push(d)},unmount(){c&&(pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=Ls;Ls=u;try{return d()}finally{Ls=f}}};return u}}let Ls=null;function da(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function dn(t,e,n=!1){const r=wt||dt;if(r||Ls){let s=Ls?Ls._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const e_={},t_=()=>Object.create(e_),n_=t=>Object.getPrototypeOf(t)===e_;function Ow(t,e,n,r=!1){const s={},i=t_();t.propsDefaults=Object.create(null),r_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Vw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=De(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(dl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Ne(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const R=on(m);s[R]=Qc(c,l,R,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{r_(t,e,s,i)&&(u=!0);let d;for(const f in l)(!e||!Ne(e,f)&&((d=ss(f))===f||!Ne(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Qc(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!Ne(e,f))&&(delete i[f],u=!0)}u&&Fn(t.attrs,"set","")}function r_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Di(c))continue;const u=e[c];let d;s&&Ne(s,d=on(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:dl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=De(n),u=l||Le;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Qc(s,c,f,u[f],t,!Ne(u,f))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=vo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ss(n))&&(r=!0))}return r}const Mw=new WeakMap;function s_(t,e,n=!1){const r=n?Mw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=f=>{c=!0;const[m,g]=s_(f,e,!0);ct(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Be(t)&&r.set(t,xs),xs;if(fe(i))for(let d=0;d<i.length;d++){const f=on(i[d]);bf(f)&&(o[f]=Le)}else if(i)for(const d in i){const f=on(d);if(bf(f)){const m=i[d],g=o[f]=fe(m)||_e(m)?{type:m}:ct({},m),R=g.type;let P=!1,S=!0;if(fe(R))for(let U=0;U<R.length;++U){const x=R[U],O=_e(x)&&x.name;if(O==="Boolean"){P=!0;break}else O==="String"&&(S=!1)}else P=_e(R)&&R.name==="Boolean";g[0]=P,g[1]=S,(P||Ne(g,"default"))&&l.push(f)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function bf(t){return t[0]!=="$"&&!Di(t)}const eh=t=>t[0]==="_"||t==="$stable",th=t=>fe(t)?t.map(En):[En(t)],Lw=(t,e,n)=>{if(e._n)return e;const r=zt((...s)=>th(e(...s)),n);return r._c=!1,r},i_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eh(s))continue;const i=t[s];if(_e(i))e[s]=Lw(s,i,r);else if(i!=null){const o=th(i);e[s]=()=>o}}},o_=(t,e)=>{const n=th(e);t.slots.default=()=>n},a_=(t,e,n)=>{for(const r in e)(n||!eh(r))&&(t[r]=e[r])},Uw=(t,e,n)=>{const r=t.slots=t_();if(t.vnode.shapeFlag&32){const s=e._;s?(a_(r,e,n),n&&lg(r,"_",s,!0)):i_(e,r)}else e&&o_(t,e)},Fw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:a_(s,e,n):(i=!e.$stable,i_(e,s)),o=e}else e&&(o_(t,e),o={default:1});if(i)for(const l in s)!eh(l)&&o[l]==null&&delete s[l]},Vt=Zw;function $w(t){return Bw(t)}function Bw(t,e){const n=al();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=An,insertStaticContent:R}=t,P=(T,E,k,$=null,q=null,B=null,Y=void 0,W=null,G=!!E.dynamicChildren)=>{if(T===E)return;T&&!Ts(T,E)&&($=F(T),ze(T,q,B,!0),T=null),E.patchFlag===-2&&(G=!1,E.dynamicChildren=null);const{type:H,ref:ce,shapeFlag:X}=E;switch(H){case fl:S(T,E,k,$);break;case kn:U(T,E,k,$);break;case fa:T==null&&x(E,k,$,Y);break;case Se:A(T,E,k,$,q,B,Y,W,G);break;default:X&1?ie(T,E,k,$,q,B,Y,W,G):X&6?w(T,E,k,$,q,B,Y,W,G):(X&64||X&128)&&H.process(T,E,k,$,q,B,Y,W,G,oe)}ce!=null&&q&&xa(ce,T&&T.ref,B,E||T,!E)},S=(T,E,k,$)=>{if(T==null)r(E.el=l(E.children),k,$);else{const q=E.el=T.el;E.children!==T.children&&u(q,E.children)}},U=(T,E,k,$)=>{T==null?r(E.el=c(E.children||""),k,$):E.el=T.el},x=(T,E,k,$)=>{[T.el,T.anchor]=R(T.children,E,k,$,T.el,T.anchor)},O=({el:T,anchor:E},k,$)=>{let q;for(;T&&T!==E;)q=m(T),r(T,k,$),T=q;r(E,k,$)},L=({el:T,anchor:E})=>{let k;for(;T&&T!==E;)k=m(T),s(T),T=k;s(E)},ie=(T,E,k,$,q,B,Y,W,G)=>{E.type==="svg"?Y="svg":E.type==="math"&&(Y="mathml"),T==null?ee(E,k,$,q,B,Y,W,G):y(T,E,q,B,Y,W,G)},ee=(T,E,k,$,q,B,Y,W)=>{let G,H;const{props:ce,shapeFlag:X,transition:ae,dirs:pe}=T;if(G=T.el=o(T.type,B,ce&&ce.is,ce),X&8?d(G,T.children):X&16&&v(T.children,G,null,$,q,pc(T,B),Y,W),pe&&Br(T,null,$,"created"),b(G,T,T.scopeId,Y,$),ce){for(const ye in ce)ye!=="value"&&!Di(ye)&&i(G,ye,null,ce[ye],B,$);"value"in ce&&i(G,"value",null,ce.value,B),(H=ce.onVnodeBeforeMount)&&yn(H,$,T)}pe&&Br(T,null,$,"beforeMount");const he=jw(q,ae);he&&ae.beforeEnter(G),r(G,E,k),((H=ce&&ce.onVnodeMounted)||he||pe)&&Vt(()=>{H&&yn(H,$,T),he&&ae.enter(G),pe&&Br(T,null,$,"mounted")},q)},b=(T,E,k,$,q)=>{if(k&&g(T,k),$)for(let B=0;B<$.length;B++)g(T,$[B]);if(q){let B=q.subTree;if(E===B||d_(B.type)&&(B.ssContent===E||B.ssFallback===E)){const Y=q.vnode;b(T,Y,Y.scopeId,Y.slotScopeIds,q.parent)}}},v=(T,E,k,$,q,B,Y,W,G=0)=>{for(let H=G;H<T.length;H++){const ce=T[H]=W?hr(T[H]):En(T[H]);P(null,ce,E,k,$,q,B,Y,W)}},y=(T,E,k,$,q,B,Y)=>{const W=E.el=T.el;let{patchFlag:G,dynamicChildren:H,dirs:ce}=E;G|=T.patchFlag&16;const X=T.props||Le,ae=E.props||Le;let pe;if(k&&jr(k,!1),(pe=ae.onVnodeBeforeUpdate)&&yn(pe,k,E,T),ce&&Br(E,T,k,"beforeUpdate"),k&&jr(k,!0),(X.innerHTML&&ae.innerHTML==null||X.textContent&&ae.textContent==null)&&d(W,""),H?I(T.dynamicChildren,H,W,k,$,pc(E,q),B):Y||we(T,E,W,null,k,$,pc(E,q),B,!1),G>0){if(G&16)C(W,X,ae,k,q);else if(G&2&&X.class!==ae.class&&i(W,"class",null,ae.class,q),G&4&&i(W,"style",X.style,ae.style,q),G&8){const he=E.dynamicProps;for(let ye=0;ye<he.length;ye++){const be=he[ye],It=X[be],pt=ae[be];(pt!==It||be==="value")&&i(W,be,It,pt,q,k)}}G&1&&T.children!==E.children&&d(W,E.children)}else!Y&&H==null&&C(W,X,ae,k,q);((pe=ae.onVnodeUpdated)||ce)&&Vt(()=>{pe&&yn(pe,k,E,T),ce&&Br(E,T,k,"updated")},$)},I=(T,E,k,$,q,B,Y)=>{for(let W=0;W<E.length;W++){const G=T[W],H=E[W],ce=G.el&&(G.type===Se||!Ts(G,H)||G.shapeFlag&198)?f(G.el):k;P(G,H,ce,null,$,q,B,Y,!0)}},C=(T,E,k,$,q)=>{if(E!==k){if(E!==Le)for(const B in E)!Di(B)&&!(B in k)&&i(T,B,E[B],null,q,$);for(const B in k){if(Di(B))continue;const Y=k[B],W=E[B];Y!==W&&B!=="value"&&i(T,B,W,Y,q,$)}"value"in k&&i(T,"value",E.value,k.value,q)}},A=(T,E,k,$,q,B,Y,W,G)=>{const H=E.el=T?T.el:l(""),ce=E.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:pe}=E;pe&&(W=W?W.concat(pe):pe),T==null?(r(H,k,$),r(ce,k,$),v(E.children||[],k,ce,q,B,Y,W,G)):X>0&&X&64&&ae&&T.dynamicChildren?(I(T.dynamicChildren,ae,k,q,B,Y,W),(E.key!=null||q&&E===q.subTree)&&nh(T,E,!0)):we(T,E,k,ce,q,B,Y,W,G)},w=(T,E,k,$,q,B,Y,W,G)=>{E.slotScopeIds=W,T==null?E.shapeFlag&512?q.ctx.activate(E,k,$,Y,G):Oe(E,k,$,q,B,Y,G):st(T,E,G)},Oe=(T,E,k,$,q,B,Y)=>{const W=T.component=oT(T,$,q);if(jg(T)&&(W.ctx.renderer=oe),lT(W,!1,Y),W.asyncDep){if(q&&q.registerDep(W,He,Y),!T.el){const G=W.subTree=re(kn);U(null,G,E,k)}}else He(W,T,E,k,q,B,Y)},st=(T,E,k)=>{const $=E.component=T.component;if(Yw(T,E,k))if($.asyncDep&&!$.asyncResolved){Ae($,E,k);return}else $.next=E,$.update();else E.el=T.el,$.vnode=E},He=(T,E,k,$,q,B,Y)=>{const W=()=>{if(T.isMounted){let{next:X,bu:ae,u:pe,parent:he,vnode:ye}=T;{const At=l_(T);if(At){X&&(X.el=ye.el,Ae(T,X,Y)),At.asyncDep.then(()=>{T.isUnmounted||W()});return}}let be=X,It;jr(T,!1),X?(X.el=ye.el,Ae(T,X,Y)):X=ye,ae&&ua(ae),(It=X.props&&X.props.onVnodeBeforeUpdate)&&yn(It,he,X,ye),jr(T,!0);const pt=Cf(T),en=T.subTree;T.subTree=pt,P(en,pt,f(en.el),F(en),T,q,B),X.el=pt.el,be===null&&Jw(T,pt.el),pe&&Vt(pe,q),(It=X.props&&X.props.onVnodeUpdated)&&Vt(()=>yn(It,he,X,ye),q)}else{let X;const{el:ae,props:pe}=E,{bm:he,m:ye,parent:be,root:It,type:pt}=T,en=Ms(E);jr(T,!1),he&&ua(he),!en&&(X=pe&&pe.onVnodeBeforeMount)&&yn(X,be,E),jr(T,!0);{It.ce&&It.ce._injectChildStyle(pt);const At=T.subTree=Cf(T);P(null,At,k,$,T,q,B),E.el=At.el}if(ye&&Vt(ye,q),!en&&(X=pe&&pe.onVnodeMounted)){const At=E;Vt(()=>yn(X,be,At),q)}(E.shapeFlag&256||be&&Ms(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Vt(T.a,q),T.isMounted=!0,E=k=$=null}};T.scope.on();const G=T.effect=new dg(W);T.scope.off();const H=T.update=G.run.bind(G),ce=T.job=G.runIfDirty.bind(G);ce.i=T,ce.id=T.uid,G.scheduler=()=>Ju(ce),jr(T,!0),H()},Ae=(T,E,k)=>{E.component=T;const $=T.vnode.props;T.vnode=E,T.next=null,Vw(T,E.props,$,k),Fw(T,E.children,k),Hn(),gf(T),zn()},we=(T,E,k,$,q,B,Y,W,G=!1)=>{const H=T&&T.children,ce=T?T.shapeFlag:0,X=E.children,{patchFlag:ae,shapeFlag:pe}=E;if(ae>0){if(ae&128){an(H,X,k,$,q,B,Y,W,G);return}else if(ae&256){Gt(H,X,k,$,q,B,Y,W,G);return}}pe&8?(ce&16&&Ut(H,q,B),X!==H&&d(k,X)):ce&16?pe&16?an(H,X,k,$,q,B,Y,W,G):Ut(H,q,B,!0):(ce&8&&d(k,""),pe&16&&v(X,k,$,q,B,Y,W,G))},Gt=(T,E,k,$,q,B,Y,W,G)=>{T=T||xs,E=E||xs;const H=T.length,ce=E.length,X=Math.min(H,ce);let ae;for(ae=0;ae<X;ae++){const pe=E[ae]=G?hr(E[ae]):En(E[ae]);P(T[ae],pe,k,null,q,B,Y,W,G)}H>ce?Ut(T,q,B,!0,!1,X):v(E,k,$,q,B,Y,W,G,X)},an=(T,E,k,$,q,B,Y,W,G)=>{let H=0;const ce=E.length;let X=T.length-1,ae=ce-1;for(;H<=X&&H<=ae;){const pe=T[H],he=E[H]=G?hr(E[H]):En(E[H]);if(Ts(pe,he))P(pe,he,k,null,q,B,Y,W,G);else break;H++}for(;H<=X&&H<=ae;){const pe=T[X],he=E[ae]=G?hr(E[ae]):En(E[ae]);if(Ts(pe,he))P(pe,he,k,null,q,B,Y,W,G);else break;X--,ae--}if(H>X){if(H<=ae){const pe=ae+1,he=pe<ce?E[pe].el:$;for(;H<=ae;)P(null,E[H]=G?hr(E[H]):En(E[H]),k,he,q,B,Y,W,G),H++}}else if(H>ae)for(;H<=X;)ze(T[H],q,B,!0),H++;else{const pe=H,he=H,ye=new Map;for(H=he;H<=ae;H++){const mt=E[H]=G?hr(E[H]):En(E[H]);mt.key!=null&&ye.set(mt.key,H)}let be,It=0;const pt=ae-he+1;let en=!1,At=0;const nr=new Array(pt);for(H=0;H<pt;H++)nr[H]=0;for(H=pe;H<=X;H++){const mt=T[H];if(It>=pt){ze(mt,q,B,!0);continue}let tn;if(mt.key!=null)tn=ye.get(mt.key);else for(be=he;be<=ae;be++)if(nr[be-he]===0&&Ts(mt,E[be])){tn=be;break}tn===void 0?ze(mt,q,B,!0):(nr[tn-he]=H+1,tn>=At?At=tn:en=!0,P(mt,E[tn],k,null,q,B,Y,W,G),It++)}const ci=en?qw(nr):xs;for(be=ci.length-1,H=pt-1;H>=0;H--){const mt=he+H,tn=E[mt],No=mt+1<ce?E[mt+1].el:$;nr[H]===0?P(null,tn,k,No,q,B,Y,W,G):en&&(be<0||H!==ci[be]?Zt(tn,k,No,2):be--)}}},Zt=(T,E,k,$,q=null)=>{const{el:B,type:Y,transition:W,children:G,shapeFlag:H}=T;if(H&6){Zt(T.component.subTree,E,k,$);return}if(H&128){T.suspense.move(E,k,$);return}if(H&64){Y.move(T,E,k,oe);return}if(Y===Se){r(B,E,k);for(let X=0;X<G.length;X++)Zt(G[X],E,k,$);r(T.anchor,E,k);return}if(Y===fa){O(T,E,k);return}if($!==2&&H&1&&W)if($===0)W.beforeEnter(B),r(B,E,k),Vt(()=>W.enter(B),q);else{const{leave:X,delayLeave:ae,afterLeave:pe}=W,he=()=>{T.ctx.isUnmounted?s(B):r(B,E,k)},ye=()=>{X(B,()=>{he(),pe&&pe()})};ae?ae(B,he,ye):ye()}else r(B,E,k)},ze=(T,E,k,$=!1,q=!1)=>{const{type:B,props:Y,ref:W,children:G,dynamicChildren:H,shapeFlag:ce,patchFlag:X,dirs:ae,cacheIndex:pe}=T;if(X===-2&&(q=!1),W!=null&&(Hn(),xa(W,null,k,T,!0),zn()),pe!=null&&(E.renderCache[pe]=void 0),ce&256){E.ctx.deactivate(T);return}const he=ce&1&&ae,ye=!Ms(T);let be;if(ye&&(be=Y&&Y.onVnodeBeforeUnmount)&&yn(be,E,T),ce&6)_n(T.component,k,$);else{if(ce&128){T.suspense.unmount(k,$);return}he&&Br(T,null,E,"beforeUnmount"),ce&64?T.type.remove(T,E,k,oe,$):H&&!H.hasOnce&&(B!==Se||X>0&&X&64)?Ut(H,E,k,!1,!0):(B===Se&&X&384||!q&&ce&16)&&Ut(G,E,k),$&&Ge(T)}(ye&&(be=Y&&Y.onVnodeUnmounted)||he)&&Vt(()=>{be&&yn(be,E,T),he&&Br(T,null,E,"unmounted")},k)},Ge=T=>{const{type:E,el:k,anchor:$,transition:q}=T;if(E===Se){tr(k,$);return}if(E===fa){L(T);return}const B=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:Y,delayLeave:W}=q,G=()=>Y(k,B);W?W(T.el,B,G):G()}else B()},tr=(T,E)=>{let k;for(;T!==E;)k=m(T),s(T),T=k;s(E)},_n=(T,E,k)=>{const{bum:$,scope:q,job:B,subTree:Y,um:W,m:G,a:H,parent:ce,slots:{__:X}}=T;Rf(G),Rf(H),$&&ua($),ce&&fe(X)&&X.forEach(ae=>{ce.renderCache[ae]=void 0}),q.stop(),B&&(B.flags|=8,ze(Y,T,E,k)),W&&Vt(W,E),Vt(()=>{T.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ut=(T,E,k,$=!1,q=!1,B=0)=>{for(let Y=B;Y<T.length;Y++)ze(T[Y],E,k,$,q)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const E=m(T.anchor||T.el),k=E&&E[Mg];return k?m(k):E};let te=!1;const J=(T,E,k)=>{T==null?E._vnode&&ze(E._vnode,null,null,!0):P(E._vnode||null,T,E,null,null,null,k),E._vnode=T,te||(te=!0,gf(),xg(),te=!1)},oe={p:P,um:ze,m:Zt,r:Ge,mt:Oe,mc:v,pc:we,pbc:I,n:F,o:t};return{render:J,hydrate:void 0,createApp:Nw(J)}}function pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nh(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=hr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&nh(o,l)),l.type===fl&&(l.el=o.el),l.type===kn&&!l.el&&(l.el=o.el)}}function qw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function l_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:l_(e)}function Rf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Hw=Symbol.for("v-scx"),zw=()=>dn(Hw);function Kr(t,e,n){return c_(t,e,n)}function c_(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=ct({},n),c=e&&r||!e&&i!=="post";let u;if(Zi){if(i==="sync"){const g=zw();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=An,g.resume=An,g.pause=An,g}}const d=wt;l.call=(g,R,P)=>pn(g,d,R,P);let f=!1;i==="post"?l.scheduler=g=>{Vt(g,d&&d.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(g,R)=>{R?g():Ju(g)}),l.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=lw(t,e,l);return Zi&&(u?u.push(m):c&&m()),m}function Gw(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?u_(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=vo(this),l=c_(s,i.bind(r),n);return o(),l}function u_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ww=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${ss(e)}Modifiers`];function Kw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&Ww(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>We(d)?d.trim():d)),o.number&&(s=n.map(Fc)));let l,c=r[l=lc(e)]||r[l=lc(on(e))];!c&&i&&(c=r[l=lc(ss(e))]),c&&pn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pn(u,t,6,s)}}function h_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=h_(u,e,!0);d&&(l=!0,ct(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):ct(o,i),Be(t)&&r.set(t,o),o)}function dl(t,e){return!t||!rl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,ss(e))||Ne(t,e))}function Cf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:f,data:m,setupState:g,ctx:R,inheritAttrs:P}=t,S=Da(t);let U,x;try{if(n.shapeFlag&4){const L=s||r,ie=L;U=En(u.call(ie,L,d,f,g,m,R)),x=l}else{const L=e;U=En(L.length>1?L(f,{attrs:l,slots:o,emit:c}):L(f,null)),x=e.props?l:Qw(l)}}catch(L){Mi.length=0,ul(L,t,1),U=re(kn)}let O=U;if(x&&P!==!1){const L=Object.keys(x),{shapeFlag:ie}=O;L.length&&ie&7&&(i&&L.some(Bu)&&(x=Xw(x,i)),O=Xr(O,x,!1,!0))}return n.dirs&&(O=Xr(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Qi(O,n.transition),U=O,Da(S),U}const Qw=t=>{let e;for(const n in t)(n==="class"||n==="style"||rl(n))&&((e||(e={}))[n]=t[n]);return e},Xw=(t,e)=>{const n={};for(const r in t)(!Bu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Sf(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==r[m]&&!dl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Sf(r,o,u):!0:!!o;return!1}function Sf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dl(n,i))return!0}return!1}function Jw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const d_=t=>t.__isSuspense;function Zw(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):hw(t)}const Se=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),fa=Symbol.for("v-stc"),Mi=[];let Kt=null;function z(t=!1){Mi.push(Kt=t?null:[])}function eT(){Mi.pop(),Kt=Mi[Mi.length-1]||null}let Yi=1;function Pf(t,e=!1){Yi+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function f_(t){return t.dynamicChildren=Yi>0?Kt||xs:null,eT(),Yi>0&&Kt&&Kt.push(t),t}function Z(t,e,n,r,s,i){return f_(V(t,e,n,r,s,i,!0))}function nt(t,e,n,r,s){return f_(re(t,e,n,r,s,!0))}function Ji(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const p_=({key:t})=>t??null,pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||kt(t)||_e(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===Se?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&p_(e),ref:e&&pa(e),scopeId:Og,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return l?(rh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Yi>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const re=tT;function tT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wg)&&(t=kn),Ji(t)){const l=Xr(t,e,!0);return n&&rh(l,n),Yi>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(fT(t)&&(t=t.__vccOpts),e){e=nT(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=Or(l)),Be(c)&&(Xu(c)&&!fe(c)&&(c=ct({},c)),e.style=ll(c))}const o=We(t)?1:d_(t)?128:dw(t)?64:Be(t)?4:_e(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function nT(t){return t?Xu(t)||n_(t)?ct({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?rT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&p_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(pa(e)):[i,pa(e)]:pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Qi(d,c.clone(d)),d}function Ze(t=" ",e=0){return re(fl,null,t,e)}function pl(t,e){const n=re(fa,null,t);return n.staticCount=e,n}function ft(t="",e=!1){return e?(z(),nt(kn,null,t)):re(kn,null,t)}function En(t){return t==null||typeof t=="boolean"?re(kn):fe(t)?re(Se,null,t.slice()):Ji(t)?hr(t):re(fl,null,String(t))}function hr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function rh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!n_(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[Ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function rT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Or([e.class,r.class]));else if(s==="style")e.style=ll([e.style,r.style]);else if(rl(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yn(t,e,n,r=null){pn(t,e,7,[n,r])}const sT=Zg();let iT=0;function oT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sT,i={uid:iT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new V1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:s_(r,s),emitsOptions:h_(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kw.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const aT=()=>wt||dt;let Oa,Xc;{const t=al(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Xc=e("__VUE_SSR_SETTERS__",n=>Zi=n)}const vo=t=>{const e=wt;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},kf=()=>{wt&&wt.scope.off(),Oa(null)};function m_(t){return t.vnode.shapeFlag&4}let Zi=!1;function lT(t,e=!1,n=!1){e&&Xc(e);const{props:r,children:s}=t.vnode,i=m_(t);Ow(t,r,i,e),Uw(t,s,n||e);const o=i?cT(t,e):void 0;return e&&Xc(!1),o}function cT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rw);const{setup:r}=n;if(r){Hn();const s=t.setupContext=r.length>1?hT(t):null,i=vo(t),o=_o(r,t,0,[t.props,s]),l=ig(o);if(zn(),i(),(l||t.sp)&&!Ms(t)&&Bg(t),l){if(o.then(kf,kf),e)return o.then(c=>{Df(t,c)}).catch(c=>{ul(c,t,0)});t.asyncDep=o}else Df(t,o)}else g_(t)}function Df(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Pg(e)),g_(t)}function g_(t,e,n){const r=t.type;t.render||(t.render=r.render||An);{const s=vo(t);Hn();try{Cw(t)}finally{zn(),s()}}}const uT={get(t,e){return Pt(t,"get",""),t[e]}};function hT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uT),slots:t.slots,emit:t.emit,expose:e}}function ml(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pg(tw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function dT(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function fT(t){return _e(t)&&"__vccOpts"in t}const Fe=(t,e)=>ow(t,e,Zi);function __(t,e,n){const r=arguments.length;return r===2?Be(e)&&!fe(e)?Ji(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ji(n)&&(n=[n]),re(t,e,n))}const pT="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{Yc=xf.createPolicy("vue",{createHTML:t=>t})}catch{}const y_=Yc?t=>Yc.createHTML(t):t=>t,mT="http://www.w3.org/2000/svg",gT="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,Nf=Un&&Un.createElement("template"),_T={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(mT,t):e==="mathml"?Un.createElementNS(gT,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nf.innerHTML=y_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},or="transition",Ii="animation",qs=Symbol("_vtc"),v_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yT=ct({},mw,v_),qr=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Of=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function vT(t){const e={};for(const A in t)A in v_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,R=wT(s),P=R&&R[0],S=R&&R[1],{onBeforeEnter:U,onEnter:x,onEnterCancelled:O,onLeave:L,onLeaveCancelled:ie,onBeforeAppear:ee=U,onAppear:b=x,onAppearCancelled:v=O}=e,y=(A,w,Oe,st)=>{A._enterCancelled=st,cr(A,w?d:l),cr(A,w?u:o),Oe&&Oe()},I=(A,w)=>{A._isLeaving=!1,cr(A,f),cr(A,g),cr(A,m),w&&w()},C=A=>(w,Oe)=>{const st=A?b:x,He=()=>y(w,A,Oe);qr(st,[w,He]),Vf(()=>{cr(w,A?c:i),vn(w,A?d:l),Of(st)||Mf(w,r,P,He)})};return ct(e,{onBeforeEnter(A){qr(U,[A]),vn(A,i),vn(A,o)},onBeforeAppear(A){qr(ee,[A]),vn(A,c),vn(A,u)},onEnter:C(!1),onAppear:C(!0),onLeave(A,w){A._isLeaving=!0;const Oe=()=>I(A,w);vn(A,f),A._enterCancelled?(vn(A,m),Jc()):(Jc(),vn(A,m)),Vf(()=>{A._isLeaving&&(cr(A,f),vn(A,g),Of(L)||Mf(A,r,S,Oe))}),qr(L,[A,Oe])},onEnterCancelled(A){y(A,!1,void 0,!0),qr(O,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),qr(v,[A])},onLeaveCancelled(A){I(A),qr(ie,[A])}})}function wT(t){if(t==null)return null;if(Be(t))return[mc(t.enter),mc(t.leave)];{const e=mc(t);return[e,e]}}function mc(t){return S1(t)}function vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let TT=0;function Mf(t,e,n,r){const s=t._endId=++TT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=w_(t,e);if(!o)return r();const u=o+"end";let d=0;const f=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),t.addEventListener(u,m)}function w_(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${or}Delay`),i=r(`${or}Duration`),o=Lf(s,i),l=r(`${Ii}Delay`),c=r(`${Ii}Duration`),u=Lf(l,c);let d=null,f=0,m=0;e===or?o>0&&(d=or,f=o,m=i.length):e===Ii?u>0&&(d=Ii,f=u,m=c.length):(f=Math.max(o,u),d=f>0?o>u?or:Ii:null,m=d?d===or?i.length:c.length:0);const g=d===or&&/\b(transform|all)(,|$)/.test(r(`${or}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:g}}function Lf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Uf(n)+Uf(t[r])))}function Uf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Jc(){return document.body.offsetHeight}function ET(t,e,n){const r=t[qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ff=Symbol("_vod"),IT=Symbol("_vsh"),AT=Symbol(""),bT=/(^|;)\s*display\s*:/;function RT(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ma(r,l,"")}else for(const o in e)n[o]==null&&ma(r,o,"");for(const o in n)o==="display"&&(i=!0),ma(r,o,n[o])}else if(s){if(e!==n){const o=r[AT];o&&(n+=";"+o),r.cssText=n,i=bT.test(n)}}else e&&t.removeAttribute("style");Ff in t&&(t[Ff]=i?r.display:"",t[IT]&&(r.display="none"))}const $f=/\s*!important$/;function ma(t,e,n){if(fe(n))n.forEach(r=>ma(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=CT(t,e);$f.test(n)?t.setProperty(ss(r),n.replace($f,""),"important"):t[r]=n}}const Bf=["Webkit","Moz","ms"],gc={};function CT(t,e){const n=gc[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return gc[e]=r;r=ol(r);for(let s=0;s<Bf.length;s++){const i=Bf[s]+r;if(i in t)return gc[e]=i}return e}const jf="http://www.w3.org/1999/xlink";function qf(t,e,n,r,s,i=O1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jf,e.slice(6,e.length)):t.setAttributeNS(jf,e,n):n==null||i&&!cg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jn(n)?String(n):n)}function Hf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?y_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=cg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Es(t,e,n,r){t.addEventListener(e,n,r)}function ST(t,e,n,r){t.removeEventListener(e,n,r)}const zf=Symbol("_vei");function PT(t,e,n,r,s=null){const i=t[zf]||(t[zf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=kT(e);if(r){const u=i[e]=NT(r,s);Es(t,l,u,c)}else o&&(ST(t,l,o,c),i[e]=void 0)}}const Gf=/(?:Once|Passive|Capture)$/;function kT(t){let e;if(Gf.test(t)){e={};let r;for(;r=t.match(Gf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let _c=0;const DT=Promise.resolve(),xT=()=>_c||(DT.then(()=>_c=0),_c=Date.now());function NT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(OT(r,n.value),e,5,[r])};return n.value=t,n.attached=xT(),n}function OT(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ET(t,r,o):e==="style"?RT(t,n,r):rl(e)?Bu(e)||PT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):MT(t,e,r,o))?(Hf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Hf(t,on(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qf(t,e,r,o))};function MT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wf(e)&&We(n)?!1:e in t}const T_=new WeakMap,E_=new WeakMap,Va=Symbol("_moveCb"),Kf=Symbol("_enterCb"),LT=t=>(delete t.props.mode,t),UT=LT({name:"TransitionGroup",props:ct({},yT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=aT(),r=pw();let s,i;return Hg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!qT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach($T),s.forEach(BT);const l=s.filter(jT);Jc(),l.forEach(c=>{const u=c.el,d=u.style;vn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Va]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",f),u[Va]=null,cr(u,o))};u.addEventListener("transitionend",f)}),s=[]}),()=>{const o=De(t),l=vT(o);let c=o.tag||Se;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Qi(d,zc(d,l,r,n)),T_.set(d,d.el.getBoundingClientRect()))}i=e.default?$g(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Qi(d,zc(d,l,r,n))}return re(c,null,i)}}}),FT=UT;function $T(t){const e=t.el;e[Va]&&e[Va](),e[Kf]&&e[Kf]()}function BT(t){E_.set(t,t.el.getBoundingClientRect())}function jT(t){const e=T_.get(t),n=E_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function qT(t,e,n){const r=t.cloneNode(),s=t[qs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=w_(r);return i.removeChild(r),o}const Qf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>ua(e,n):e};function HT(t){t.target.composing=!0}function Xf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yc=Symbol("_assign"),I_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[yc]=Qf(s);const i=r||s.props&&s.props.type==="number";Es(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Fc(l)),t[yc](l)}),n&&Es(t,"change",()=>{t.value=t.value.trim()}),e||(Es(t,"compositionstart",HT),Es(t,"compositionend",Xf),Es(t,"change",Xf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[yc]=Qf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},zT=ct({patchProp:VT},_T);let Yf;function GT(){return Yf||(Yf=$w(zT))}const A_=(...t)=>{const e=GT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=KT(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,WT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function WT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function KT(t){return We(t)?document.querySelector(t):t}const Qe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},QT={};function XT(t,e){const n=yo("router-view");return z(),nt(n)}const YT=Qe(QT,[["render",XT]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Is=typeof document<"u";function b_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&b_(t.default)}const xe=Object.assign;function vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const Li=()=>{},mn=Array.isArray,R_=/#/g,ZT=/&/g,eE=/\//g,tE=/=/g,nE=/\?/g,C_=/\+/g,rE=/%5B/g,sE=/%5D/g,S_=/%5E/g,iE=/%60/g,P_=/%7B/g,oE=/%7C/g,k_=/%7D/g,aE=/%20/g;function sh(t){return encodeURI(""+t).replace(oE,"|").replace(rE,"[").replace(sE,"]")}function lE(t){return sh(t).replace(P_,"{").replace(k_,"}").replace(S_,"^")}function Zc(t){return sh(t).replace(C_,"%2B").replace(aE,"+").replace(R_,"%23").replace(ZT,"%26").replace(iE,"`").replace(P_,"{").replace(k_,"}").replace(S_,"^")}function cE(t){return Zc(t).replace(tE,"%3D")}function uE(t){return sh(t).replace(R_,"%23").replace(nE,"%3F")}function hE(t){return t==null?"":uE(t).replace(eE,"%2F")}function eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dE=/\/$/,fE=t=>t.replace(dE,"");function wc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=_E(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:eo(o)}}function pE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hs(e.matched[r],n.matched[s])&&D_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function D_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gE(t[n],e[n]))return!1;return!0}function gE(t,e){return mn(t)?Zf(t,e):mn(e)?Zf(e,t):t===e}function Zf(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var to;(function(t){t.pop="pop",t.push="push"})(to||(to={}));var Ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ui||(Ui={}));function yE(t){if(!t)if(Is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fE(t)}const vE=/^[^#]+#/;function wE(t,e){return t.replace(vE,"#")+e}function TE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function EE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=TE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ep(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function IE(t,e){eu.set(t,e)}function AE(t){const e=eu.get(t);return eu.delete(t),e}let bE=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Jf(c,"")}return Jf(n,t)+r+s}function RE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=x_(t,location),R=n.value,P=e.value;let S=0;if(m){if(n.value=g,e.value=m,o&&o===R){o=null;return}S=P?m.position-P.position:0}else r(g);s.forEach(U=>{U(n.value,R,{delta:S,type:to.pop,direction:S?S>0?Ui.forward:Ui.back:Ui.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:gl()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function tp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gl():null}}function CE(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=xe({},e.state,tp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=xe({},s.value,e.state,{forward:c,scroll:gl()});i(d.current,d,!0);const f=xe({},tp(r.value,c,null),{position:d.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function SE(t){t=yE(t);const e=CE(t),n=RE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:wE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PE(t){return typeof t=="string"||t&&typeof t=="object"}function N_(t){return typeof t=="string"||typeof t=="symbol"}const O_=Symbol("");var np;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(np||(np={}));function zs(t,e){return xe(new Error,{type:t,[O_]:!0},e)}function Ln(t,e){return t instanceof Error&&O_ in t&&(e==null||!!(t.type&e))}const rp="[^/]+?",kE={sensitive:!1,strict:!1,start:!0,end:!0},DE=/[.+*?^${}()[\]/\\]/g;function xE(t,e){const n=xe({},kE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(DE,"\\$&"),g+=40;else if(m.type===1){const{value:R,repeatable:P,optional:S,regexp:U}=m;i.push({name:R,repeatable:P,optional:S});const x=U||rp;if(x!==rp){g+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${R}" (${x}): `+L.message)}}let O=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(O=S&&u.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,g+=20,S&&(g+=-8),P&&(g+=-20),x===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",R=i[m-1];f[R.name]=g&&R.repeatable?g.split("/"):g}return f}function c(u){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:R,repeatable:P,optional:S}=g,U=R in u?u[R]:"";if(mn(U)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const x=mn(U)?U.join("/"):U;if(!x)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);d+=x}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function NE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function V_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sp(r))return 1;if(sp(s))return-1}return s.length-r.length}function sp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OE={type:0,value:""},VE=/[a-zA-Z0-9_]/;function ME(t){if(!t)return[[]];if(t==="/")return[[OE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:VE.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function LE(t,e,n){const r=xE(ME(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function UE(t,e){const n=[],r=new Map;e=lp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,g){const R=!g,P=op(f);P.aliasOf=g&&g.record;const S=lp(e,f),U=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const ie of L)U.push(op(xe({},P,{components:g?g.record.components:P.components,path:ie,aliasOf:g?g.record:P})))}let x,O;for(const L of U){const{path:ie}=L;if(m&&ie[0]!=="/"){const ee=m.record.path,b=ee[ee.length-1]==="/"?"":"/";L.path=m.record.path+(ie&&b+ie)}if(x=LE(L,m,S),g?g.alias.push(x):(O=O||x,O!==x&&O.alias.push(x),R&&f.name&&!ap(x)&&o(f.name)),M_(x)&&c(x),P.children){const ee=P.children;for(let b=0;b<ee.length;b++)i(ee[b],x,g&&g.children[b])}g=g||x}return O?()=>{o(O)}:Li}function o(f){if(N_(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const m=BE(f,n);n.splice(m,0,f),f.record.name&&!ap(f)&&r.set(f.record.name,f)}function u(f,m){let g,R={},P,S;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw zs(1,{location:f});S=g.record.name,R=xe(ip(m.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&ip(f.params,g.keys.map(O=>O.name))),P=g.stringify(R)}else if(f.path!=null)P=f.path,g=n.find(O=>O.re.test(P)),g&&(R=g.parse(P),S=g.record.name);else{if(g=m.name?r.get(m.name):n.find(O=>O.re.test(m.path)),!g)throw zs(1,{location:f,currentLocation:m});S=g.record.name,R=xe({},m.params,f.params),P=g.stringify(R)}const U=[];let x=g;for(;x;)U.unshift(x.record),x=x.parent;return{name:S,path:P,params:R,matched:U,meta:$E(U)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function ip(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function op(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $E(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function lp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function BE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;V_(t,e[i])<0?r=i:n=i+1}const s=jE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jE(t){let e=t;for(;e=e.parent;)if(M_(e)&&V_(t,e)===0)return e}function M_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(C_," "),o=i.indexOf("="),l=eo(o<0?i:i.slice(0,o)),c=o<0?null:eo(i.slice(o+1));if(l in e){let u=e[l];mn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function cp(t){let e="";for(let n in t){const r=t[n];if(n=cE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&Zc(i)):[r&&Zc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zE=Symbol(""),up=Symbol(""),_l=Symbol(""),ih=Symbol(""),tu=Symbol("");function Ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(zs(4,{from:n,to:e})):m instanceof Error?c(m):PE(m)?c(zs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Tc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(b_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(dr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=JT(d)?d.default:d;o.mods[l]=d,o.components[l]=f;const g=(f.__vccOpts||f)[e];return g&&dr(g,n,r,o,l,s)()}))}}return i}function hp(t){const e=dn(_l),n=dn(ih),r=Fe(()=>{const c=se(t.to);return e.resolve(c)}),s=Fe(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(Hs.bind(null,d));if(m>-1)return m;const g=dp(c[u-2]);return u>1&&dp(d)===g&&f[f.length-1].path!==g?f.findIndex(Hs.bind(null,c[u-2])):m}),i=Fe(()=>s.value>-1&&XE(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&D_(n.params,r.value.params));function l(c={}){if(QE(c)){const u=e[se(t.replace)?"replace":"push"](se(t.to)).catch(Li);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function GE(t){return t.length===1?t[0]:t}const WE=et({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hp,setup(t,{slots:e}){const n=ei(hp(t)),{options:r}=dn(_l),s=Fe(()=>({[fp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&GE(e.default(n));return t.custom?i:__("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),KE=WE;function QE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fp=(t,e,n)=>t??e??n,YE=et({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dn(tu),s=Fe(()=>t.route||r.value),i=dn(up,0),o=Fe(()=>{let u=se(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=Fe(()=>s.value.matched[o.value]);da(up,Fe(()=>o.value+1)),da(zE,l),da(tu,s);const c=Ie();return Kr(()=>[c.value,l.value,t.name],([u,d,f],[m,g,R])=>{d&&(d.instances[f]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!Hs(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=l.value,m=f&&f.components[d];if(!m)return pp(n.default,{Component:m,route:u});const g=f.props[d],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,S=__(m,xe({},R,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return pp(n.default,{Component:S,route:u})||S}}});function pp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JE=YE;function ZE(t){const e=UE(t.routes,t),n=t.parseQuery||qE,r=t.stringifyQuery||cp,s=t.history,i=Ai(),o=Ai(),l=Ai(),c=nw(ar);let u=ar;Is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=vc.bind(null,F=>""+F),f=vc.bind(null,hE),m=vc.bind(null,eo);function g(F,te){let J,oe;return N_(F)?(J=e.getRecordMatcher(F),oe=te):oe=F,e.addRoute(oe,J)}function R(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function P(){return e.getRoutes().map(F=>F.record)}function S(F){return!!e.getRecordMatcher(F)}function U(F,te){if(te=xe({},te||c.value),typeof F=="string"){const k=wc(n,F,te.path),$=e.resolve({path:k.path},te),q=s.createHref(k.fullPath);return xe(k,$,{params:m($.params),hash:eo(k.hash),redirectedFrom:void 0,href:q})}let J;if(F.path!=null)J=xe({},F,{path:wc(n,F.path,te.path).path});else{const k=xe({},F.params);for(const $ in k)k[$]==null&&delete k[$];J=xe({},F,{params:f(k)}),te.params=f(te.params)}const oe=e.resolve(J,te),Pe=F.hash||"";oe.params=d(m(oe.params));const T=pE(r,xe({},F,{hash:lE(Pe),path:oe.path})),E=s.createHref(T);return xe({fullPath:T,hash:Pe,query:r===cp?HE(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:E})}function x(F){return typeof F=="string"?wc(n,F,c.value.path):xe({},F)}function O(F,te){if(u!==F)return zs(8,{from:te,to:F})}function L(F){return b(F)}function ie(F){return L(xe(x(F),{replace:!0}))}function ee(F){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:J}=te;let oe=typeof J=="function"?J(F):J;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=x(oe):{path:oe},oe.params={}),xe({query:F.query,hash:F.hash,params:oe.path!=null?{}:F.params},oe)}}function b(F,te){const J=u=U(F),oe=c.value,Pe=F.state,T=F.force,E=F.replace===!0,k=ee(J);if(k)return b(xe(x(k),{state:typeof k=="object"?xe({},Pe,k.state):Pe,force:T,replace:E}),te||J);const $=J;$.redirectedFrom=te;let q;return!T&&mE(r,oe,J)&&(q=zs(16,{to:$,from:oe}),Zt(oe,oe,!0,!1)),(q?Promise.resolve(q):I($,oe)).catch(B=>Ln(B)?Ln(B,2)?B:an(B):we(B,$,oe)).then(B=>{if(B){if(Ln(B,2))return b(xe({replace:E},x(B.to),{state:typeof B.to=="object"?xe({},Pe,B.to.state):Pe,force:T}),te||$)}else B=A($,oe,!0,E,Pe);return C($,oe,B),B})}function v(F,te){const J=O(F,te);return J?Promise.reject(J):Promise.resolve()}function y(F){const te=tr.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function I(F,te){let J;const[oe,Pe,T]=eI(F,te);J=Tc(oe.reverse(),"beforeRouteLeave",F,te);for(const k of oe)k.leaveGuards.forEach($=>{J.push(dr($,F,te))});const E=v.bind(null,F,te);return J.push(E),Ut(J).then(()=>{J=[];for(const k of i.list())J.push(dr(k,F,te));return J.push(E),Ut(J)}).then(()=>{J=Tc(Pe,"beforeRouteUpdate",F,te);for(const k of Pe)k.updateGuards.forEach($=>{J.push(dr($,F,te))});return J.push(E),Ut(J)}).then(()=>{J=[];for(const k of T)if(k.beforeEnter)if(mn(k.beforeEnter))for(const $ of k.beforeEnter)J.push(dr($,F,te));else J.push(dr(k.beforeEnter,F,te));return J.push(E),Ut(J)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),J=Tc(T,"beforeRouteEnter",F,te,y),J.push(E),Ut(J))).then(()=>{J=[];for(const k of o.list())J.push(dr(k,F,te));return J.push(E),Ut(J)}).catch(k=>Ln(k,8)?k:Promise.reject(k))}function C(F,te,J){l.list().forEach(oe=>y(()=>oe(F,te,J)))}function A(F,te,J,oe,Pe){const T=O(F,te);if(T)return T;const E=te===ar,k=Is?history.state:{};J&&(oe||E?s.replace(F.fullPath,xe({scroll:E&&k&&k.scroll},Pe)):s.push(F.fullPath,Pe)),c.value=F,Zt(F,te,J,E),an()}let w;function Oe(){w||(w=s.listen((F,te,J)=>{if(!_n.listening)return;const oe=U(F),Pe=ee(oe);if(Pe){b(xe(Pe,{replace:!0,force:!0}),oe).catch(Li);return}u=oe;const T=c.value;Is&&IE(ep(T.fullPath,J.delta),gl()),I(oe,T).catch(E=>Ln(E,12)?E:Ln(E,2)?(b(xe(x(E.to),{force:!0}),oe).then(k=>{Ln(k,20)&&!J.delta&&J.type===to.pop&&s.go(-1,!1)}).catch(Li),Promise.reject()):(J.delta&&s.go(-J.delta,!1),we(E,oe,T))).then(E=>{E=E||A(oe,T,!1),E&&(J.delta&&!Ln(E,8)?s.go(-J.delta,!1):J.type===to.pop&&Ln(E,20)&&s.go(-1,!1)),C(oe,T,E)}).catch(Li)}))}let st=Ai(),He=Ai(),Ae;function we(F,te,J){an(F);const oe=He.list();return oe.length?oe.forEach(Pe=>Pe(F,te,J)):console.error(F),Promise.reject(F)}function Gt(){return Ae&&c.value!==ar?Promise.resolve():new Promise((F,te)=>{st.add([F,te])})}function an(F){return Ae||(Ae=!F,Oe(),st.list().forEach(([te,J])=>F?J(F):te()),st.reset()),F}function Zt(F,te,J,oe){const{scrollBehavior:Pe}=t;if(!Is||!Pe)return Promise.resolve();const T=!J&&AE(ep(F.fullPath,0))||(oe||!J)&&history.state&&history.state.scroll||null;return Yu().then(()=>Pe(F,te,T)).then(E=>E&&EE(E)).catch(E=>we(E,F,te))}const ze=F=>s.go(F);let Ge;const tr=new Set,_n={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:P,resolve:U,options:t,push:L,replace:ie,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:He.add,isReady:Gt,install(F){const te=this;F.component("RouterLink",KE),F.component("RouterView",JE),F.config.globalProperties.$router=te,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>se(c)}),Is&&!Ge&&c.value===ar&&(Ge=!0,L(s.location).catch(Pe=>{}));const J={};for(const Pe in ar)Object.defineProperty(J,Pe,{get:()=>c.value[Pe],enumerable:!0});F.provide(_l,te),F.provide(ih,Rg(J)),F.provide(tu,c);const oe=F.unmount;tr.add(F),F.unmount=function(){tr.delete(F),tr.size<1&&(u=ar,w&&w(),w=null,c.value=ar,Ge=!1,Ae=!1),oe()}}};function Ut(F){return F.reduce((te,J)=>te.then(()=>y(J)),Promise.resolve())}return _n}function eI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Hs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Hs(u,c))||s.push(c))}return[n,r,s]}function L_(){return dn(_l)}function tI(t){return dn(ih)}const nI=()=>{};var mp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new sI;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(t){const e=U_(t);return oh.encodeByteArray(e,!0)},Ma=function(t){return iI(t).replace(/\./g,"")},F_=function(t){try{return oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>$_().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof mp>"u")return;const t=mp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F_(t[1]);return e&&JSON.parse(e)},yl=()=>{try{return nI()||oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},j_=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},q_=()=>{var t;return(t=yl())===null||t===void 0?void 0:t.config},H_=t=>{var e;return(e=yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function as(t){return t.endsWith(".cloudworkstations.dev")}async function ah(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),""].join(".")}const Fi={};function cI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fi))Fi[e]?t.emulator.push(e):t.prod.push(e);return t}function uI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gp=!1;function lh(t,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||Fi[t]===e||Fi[t]||gp)return;Fi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=cI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{gp=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=uI(r),g=n("text"),R=document.getElementById(g)||document.createElement("span"),P=n("learnmore"),S=document.getElementById(P)||document.createElement("a"),U=n("preprendIcon"),x=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const O=m.element;l(O),d(S,P);const L=u();c(x,U),O.append(x,R,S,L),document.body.appendChild(O)}i?(R.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function dI(){var t;const e=(t=yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _I(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ch(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,l,r)}}function wI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_p(i)&&_p(o)){if(!Yr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function II(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class DI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new no;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NI(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xI(t){return t===zr?void 0:t}function NI(t){return t.instantiationMode==="EAGER"}/**
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
 */class OI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const VI={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},MI=Te.INFO,LI={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const FI=(t,e)=>e.some(n=>t instanceof n);let yp,vp;function $I(){return yp||(yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G_=new WeakMap,nu=new WeakMap,W_=new WeakMap,Ic=new WeakMap,uh=new WeakMap;function jI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G_.set(n,t)}).catch(()=>{}),uh.set(e,t),e}function qI(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HI(t){ru=t(ru)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ac(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),Tr(r)}:BI().includes(t)?function(...e){return t.apply(Ac(this),e),Tr(G_.get(this))}:function(...e){return Tr(t.apply(Ac(this),e))}}function GI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&qI(t),FI(t,$I())?new Proxy(t,ru):t)}function Tr(t){if(t instanceof IDBRequest)return jI(t);if(Ic.has(t))return Ic.get(t);const e=GI(t);return e!==t&&(Ic.set(t,e),uh.set(e,t)),e}const Ac=t=>uh.get(t);function WI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tr(o.result),c.oldVersion,c.newVersion,Tr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const KI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],bc=new Map;function wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return bc.set(e,i),i}HI(t=>({...t,get:(e,n,r)=>wp(e,n)||t.get(e,n,r),has:(e,n)=>!!wp(e,n)||t.has(e,n)}));/**
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
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",Tp="0.13.0";/**
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
 */const Gn=new vl("@firebase/app"),JI="@firebase/app-compat",ZI="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",sA="@firebase/auth-compat",iA="@firebase/database",oA="@firebase/data-connect",aA="@firebase/database-compat",lA="@firebase/functions",cA="@firebase/functions-compat",uA="@firebase/installations",hA="@firebase/installations-compat",dA="@firebase/messaging",fA="@firebase/messaging-compat",pA="@firebase/performance",mA="@firebase/performance-compat",gA="@firebase/remote-config",_A="@firebase/remote-config-compat",yA="@firebase/storage",vA="@firebase/storage-compat",wA="@firebase/firestore",TA="@firebase/ai",EA="@firebase/firestore-compat",IA="firebase",AA="11.8.0";/**
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
 */const iu="[DEFAULT]",bA={[su]:"fire-core",[JI]:"fire-core-compat",[eA]:"fire-analytics",[ZI]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[sA]:"fire-auth-compat",[iA]:"fire-rtdb",[oA]:"fire-data-connect",[aA]:"fire-rtdb-compat",[lA]:"fire-fn",[cA]:"fire-fn-compat",[uA]:"fire-iid",[hA]:"fire-iid-compat",[dA]:"fire-fcm",[fA]:"fire-fcm-compat",[pA]:"fire-perf",[mA]:"fire-perf-compat",[gA]:"fire-rc",[_A]:"fire-rc-compat",[yA]:"fire-gcs",[vA]:"fire-gcs-compat",[wA]:"fire-fst",[EA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const La=new Map,RA=new Map,ou=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(ou.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of La.values())Ep(n,t);for(const n of RA.values())Ep(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const CA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new ti("app","Firebase",CA);/**
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
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=AA;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:iu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=q_()),!n)throw Er.create("no-options");const i=La.get(s);if(i){if(Yr(n,i.options)&&Yr(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new OI(s);for(const c of ou.values())o.addComponent(c);const l=new SA(n,r,o);return La.set(s,l),l}function wl(t=iu){const e=La.get(t);if(!e&&t===iu&&q_())return K_();if(!e)throw Er.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let s=(r=bA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}Wn(new Dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const PA="firebase-heartbeat-database",kA=1,ro="firebase-heartbeat-store";let Rc=null;function Q_(){return Rc||(Rc=WI(PA,kA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Rc}async function DA(t){try{const n=(await Q_()).transaction(ro),r=await n.objectStore(ro).get(X_(t));return await n.done,r}catch(e){if(e instanceof Nn)Gn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Ip(t,e){try{const r=(await Q_()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,X_(t)),await r.done}catch(n){if(n instanceof Nn)Gn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xA=1024,NA=30;class OA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ap();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>NA){const o=LA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ap(),{heartbeatsToSend:r,unsentEntries:s}=VA(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Ap(){return new Date().toISOString().substring(0,10)}function VA(t,e=xA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ch()?yI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bp(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}function LA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UA(t){Wn(new Dn("platform-logger",e=>new XI(e),"PRIVATE")),Wn(new Dn("heartbeat",e=>new OA(e),"PRIVATE")),fn(su,Tp,t),fn(su,Tp,"esm2017"),fn("fire-js","")}UA("");var FA="firebase",$A="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(FA,$A,"app");function hh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=Y_,J_=new ti("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new vl("@firebase/auth");function jA(t,...e){Ua.logLevel<=Te.WARN&&Ua.warn(`Auth (${ls}): ${t}`,...e)}function ga(t,...e){Ua.logLevel<=Te.ERROR&&Ua.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,...e){throw dh(t,...e)}function bn(t,...e){return dh(t,...e)}function Z_(t,e,n){const r=Object.assign(Object.assign({},BA()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return Z_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J_.create(t,...e)}function me(t,e,...n){if(!t)throw dh(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function Qn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qA(){return Rp()==="http:"||Rp()==="https:"}function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||mI()}get(){return HA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const WA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KA=new To(3e4,6e4);function Tl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ri(t,e,n,r,s={}){return ty(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return fI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&as(t.emulatorConfig.host)&&(u.credentials="include"),ey.fetch()(await ry(t,t.config.apiHost,n,l),u)})}async function ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new QA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ea(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Z_(t,d,u);Kn(t,d)}}catch(s){if(s instanceof Nn)throw s;Kn(t,"network-request-failed",{message:String(s)})}}async function ny(t,e,n,r,s={}){const i=await ri(t,e,n,r,s);return"mfaPendingCredential"in i&&Kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ry(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?fh(t.config,s):`${t.config.apiScheme}://${s}`;return WA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class QA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),KA.get())})}}function ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function Fa(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=ph(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$i(Cc(s.auth_time)),issuedAtTime:$i(Cc(s.iat)),expirationTime:$i(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=F_(n);return s?JSON.parse(s):(ga("Failed to decode base64 JWT payload"),null)}catch(s){return ga("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cp(t){const e=ph(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),s=await so(t,Fa(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sy(i.providerUserInfo):[],l=tb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function eb(t){const e=qe(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sy(t){return t.map(e=>{var{providerId:n}=e,r=hh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e){const n=await ty(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ry(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ey.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rb(t,e){return ri(t,"POST","/v2/accounts:revokeToken",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await so(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return eb(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await so(this,XA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:L,isAnonymous:ie,providerData:ee,stsTokenManager:b}=n;me(O&&b,e,"internal-error");const v=Us.fromJSON(this.name,b);me(typeof O=="string",e,"internal-error"),lr(f,e.name),lr(m,e.name),me(typeof L=="boolean",e,"internal-error"),me(typeof ie=="boolean",e,"internal-error"),lr(g,e.name),lr(R,e.name),lr(P,e.name),lr(S,e.name),lr(U,e.name),lr(x,e.name);const y=new cn({uid:O,auth:e,email:m,emailVerified:L,displayName:f,isAnonymous:ie,photoURL:R,phoneNumber:g,tenantId:P,stsTokenManager:v,createdAt:U,lastLoginAt:x});return ee&&Array.isArray(ee)&&(y.providerData=ee.map(I=>Object.assign({},I))),S&&(y._redirectEventId=S),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $a(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const c=new cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=Sp.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sp.set(t,e),e)}/**
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
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const Pp=iy;/**
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
 */function _a(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_a(this.userKey,s.apiKey,i),this.fullPersistenceKey=_a("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fa(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(jn(Pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jn(Pp);const o=_a(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Fa(e,{idToken:d}).catch(()=>{});if(!m)break;f=await cn._fromGetAccountInfoResponse(e,m,d)}else f=cn._fromJSON(e,d);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hy(e))return"Blackberry";if(dy(e))return"Webos";if(ay(e))return"Safari";if((e.includes("chrome/")||ly(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oy(t=Dt()){return/firefox\//i.test(t)}function ay(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ly(t=Dt()){return/crios\//i.test(t)}function cy(t=Dt()){return/iemobile/i.test(t)}function uy(t=Dt()){return/android/i.test(t)}function hy(t=Dt()){return/blackberry/i.test(t)}function dy(t=Dt()){return/webos/i.test(t)}function mh(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sb(t=Dt()){var e;return mh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ib(){return gI()&&document.documentMode===10}function fy(t=Dt()){return mh(t)||uy(t)||dy(t)||hy(t)||/windows phone/i.test(t)||cy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e=[]){let n;switch(t){case"Browser":n=kp(Dt());break;case"Worker":n=`${kp(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
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
 */async function ab(t,e={}){return ri(t,"GET","/v2/passwordPolicy",Tl(t,e))}/**
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
 */class ub{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new ob(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fa(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Ir(this));const n=e?qe(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ab(this),n=new cb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function El(t){return qe(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hb(t){gh=t}function db(t){return gh.loadJS(t)}function fb(){return gh.gapiScript}function pb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e){const n=ni(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yr(i,e??{}))return s;Kn(s,"already-initialized")}return n.initialize({options:e})}function gb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _b(t,e,n){const r=El(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=my(e),{host:o,port:l}=yb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(Yr(u,r.config.emulator)&&Yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,as(o)?(ah(`${i}//${o}${c}`),lh("Auth",!0)):vb()}function my(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yb(t){const e=my(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xp(o)}}}function xp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return ny(t,"POST","/v1/accounts:signInWithIdp",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="http://localhost";class Jr extends gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends _y{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Eo{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Eo{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return ny(t,"POST","/v1/accounts:signUp",Tl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await cn._fromIdTokenResponse(e,r,s),o=Np(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Np(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t){var e;if(rn(t.app))return Promise.reject(Ir(t));const n=El(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Tb(n,{returnSecureToken:!0}),s=await Cr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ba(e,n,r,s)}}function vy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ba._fromErrorAndOperation(t,i,e,r):i})}async function Eb(t,e,n=!1){const r=await so(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function Ib(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Ir(r));const s="reauthenticate";try{const i=await so(t,vy(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=ph(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e,n=!1){if(rn(t.app))return Promise.reject(Ir(t));const r="signIn",s=await vy(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function bb(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function Rb(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function Cb(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function Sb(t){return qe(t).signOut()}const ja="__sak";/**
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
 */class wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=1e3,kb=10;class Ty extends wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ty.type="LOCAL";const Db=Ty;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey extends wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ey.type="SESSION";const Iy=Ey;/**
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
 */function xb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await xb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=_h("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function Ob(t){Rn().location.href=t}/**
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
 */function Ay(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function Vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lb(){return Ay()?self:null}/**
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
 */const by="firebaseLocalStorageDb",Ub=1,qa="firebaseLocalStorage",Ry="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function Fb(){const t=indexedDB.deleteDatabase(by);return new Io(t).toPromise()}function cu(){const t=indexedDB.open(by,Ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qa,{keyPath:Ry})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qa)?e(r):(r.close(),await Fb(),e(await cu()))})})}async function Op(t,e,n){const r=Al(t,!0).put({[Ry]:e,value:n});return new Io(r).toPromise()}async function $b(t,e){const n=Al(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function Vp(t,e){const n=Al(t,!0).delete(e);return new Io(n).toPromise()}const Bb=800,jb=3;class Cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vb(),!this.activeServiceWorker)return;this.sender=new Nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cu();return await Op(e,ja,"1"),await Vp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Op(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$b(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Al(s,!1).getAll();return new Io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cy.type="LOCAL";const qb=Cy;new To(3e4,6e4);/**
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
 */function Hb(t,e){return e?jn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yh extends gy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zb(t){return Ab(t.auth,new yh(t),t.bypassAuthState)}function Gb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Ib(n,new yh(t),t.bypassAuthState)}async function Wb(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Eb(n,new yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zb;case"linkViaPopup":case"linkViaRedirect":return Wb;case"reauthViaPopup":case"reauthViaRedirect":return Gb;default:Kn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new To(2e3,1e4);class Ps extends Sy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kb.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="pendingRedirect",ya=new Map;class Xb extends Sy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(t,e){const n=e2(e),r=Zb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jb(t,e){ya.set(t._key(),e)}function Zb(t){return jn(t._redirectPersistence)}function e2(t){return _a(Qb,t.config.apiKey,t.name)}async function t2(t,e,n=!1){if(rn(t.app))return Promise.reject(Ir(t));const r=El(t),s=Hb(r,e),o=await new Xb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=10*60*1e3;class r2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Py(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(e))}saveEventToCache(e){this.cachedEventUids.add(Mp(e)),this.lastProcessedEventTime=Date.now()}}function Mp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Py({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Py(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a2=/^https?/;async function l2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i2(t);for(const n of e)try{if(c2(n))return}catch{}Kn(t,"unauthorized-domain")}function c2(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a2.test(n))return!1;if(o2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const u2=new To(3e4,6e4);function Lp(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h2(t){return new Promise((e,n)=>{var r,s,i;function o(){Lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lp(),n(bn(t,"network-request-failed"))},timeout:u2.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=pb("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},db(`${fb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw va=null,e})}let va=null;function d2(t){return va=va||h2(t),va}/**
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
 */const f2=new To(5e3,15e3),p2="__/auth/iframe",m2="emulator/auth/iframe",g2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y2(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fh(e,m2):`https://${t.config.authDomain}/${p2}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=_2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wo(r).slice(1)}`}async function v2(t){const e=await d2(t),n=Rn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:y2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},f2.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const w2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T2=500,E2=600,I2="_blank",A2="http://localhost";class Up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(t,e,n,r=T2,s=E2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},w2),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(l=ly(u)?I2:n),oy(u)&&(e=e||A2,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,R])=>`${m}${g}=${R},`,"");if(sb(u)&&l!=="_self")return R2(e||"",l),new Up(null);const f=window.open(e||"",l,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Up(f)}function R2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const C2="__/auth/handler",S2="emulator/auth/handler",P2=encodeURIComponent("fac");async function Fp(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof _y){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Eo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${P2}=${encodeURIComponent(c)}`:"";return`${k2(t)}?${wo(l).slice(1)}${u}`}function k2({config:t}){return t.emulator?fh(t,S2):`https://${t.authDomain}/${C2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class D2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iy,this._completeRedirectFn=t2,this._overrideRedirectResult=Jb}async _openPopup(e,n,r,s){var i;Qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fp(e,n,r,au(),s);return b2(e,o,_h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fp(e,n,r,au(),s);return Ob(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v2(e),r=new r2(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sc];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fy()||ay()||mh()}}const x2=D2;var $p="@firebase/auth",Bp="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function O2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V2(t){Wn(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(t)},u=new ub(r,s,i,c);return gb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new Dn("auth-internal",e=>{const n=El(e.getProvider("auth").getImmediate());return(r=>new N2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn($p,Bp,O2(t)),fn($p,Bp,"esm2017")}/**
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
 */const M2=5*60,L2=H_("authIdTokenMaxAge")||M2;let jp=null;const U2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>L2)return;const s=n==null?void 0:n.token;jp!==s&&(jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function F2(t=wl()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mb(t,{popupRedirectResolver:x2,persistence:[qb,Db,Iy]}),r=H_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=U2(i.toString());Rb(n,o,()=>o(n.currentUser)),bb(n,l=>o(l))}}const s=B_("auth");return s&&_b(n,`http://${s}`),n}function $2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V2("Browser");var qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,ky;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,C,A){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return v.prototype[C].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(C=0;16>C;++C)I[C]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],C=b.g[2];var A=b.g[3],w=v+(A^y&(C^A))+I[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=A+(C^v&(y^C))+I[1]+3905402710&4294967295,A=v+(w<<12&4294967295|w>>>20),w=C+(y^A&(v^y))+I[2]+606105819&4294967295,C=A+(w<<17&4294967295|w>>>15),w=y+(v^C&(A^v))+I[3]+3250441966&4294967295,y=C+(w<<22&4294967295|w>>>10),w=v+(A^y&(C^A))+I[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(C^v&(y^C))+I[5]+1200080426&4294967295,A=v+(w<<12&4294967295|w>>>20),w=C+(y^A&(v^y))+I[6]+2821735955&4294967295,C=A+(w<<17&4294967295|w>>>15),w=y+(v^C&(A^v))+I[7]+4249261313&4294967295,y=C+(w<<22&4294967295|w>>>10),w=v+(A^y&(C^A))+I[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(C^v&(y^C))+I[9]+2336552879&4294967295,A=v+(w<<12&4294967295|w>>>20),w=C+(y^A&(v^y))+I[10]+4294925233&4294967295,C=A+(w<<17&4294967295|w>>>15),w=y+(v^C&(A^v))+I[11]+2304563134&4294967295,y=C+(w<<22&4294967295|w>>>10),w=v+(A^y&(C^A))+I[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(C^v&(y^C))+I[13]+4254626195&4294967295,A=v+(w<<12&4294967295|w>>>20),w=C+(y^A&(v^y))+I[14]+2792965006&4294967295,C=A+(w<<17&4294967295|w>>>15),w=y+(v^C&(A^v))+I[15]+1236535329&4294967295,y=C+(w<<22&4294967295|w>>>10),w=v+(C^A&(y^C))+I[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^C&(v^y))+I[6]+3225465664&4294967295,A=v+(w<<9&4294967295|w>>>23),w=C+(v^y&(A^v))+I[11]+643717713&4294967295,C=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(C^A))+I[0]+3921069994&4294967295,y=C+(w<<20&4294967295|w>>>12),w=v+(C^A&(y^C))+I[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^C&(v^y))+I[10]+38016083&4294967295,A=v+(w<<9&4294967295|w>>>23),w=C+(v^y&(A^v))+I[15]+3634488961&4294967295,C=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(C^A))+I[4]+3889429448&4294967295,y=C+(w<<20&4294967295|w>>>12),w=v+(C^A&(y^C))+I[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^C&(v^y))+I[14]+3275163606&4294967295,A=v+(w<<9&4294967295|w>>>23),w=C+(v^y&(A^v))+I[3]+4107603335&4294967295,C=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(C^A))+I[8]+1163531501&4294967295,y=C+(w<<20&4294967295|w>>>12),w=v+(C^A&(y^C))+I[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^C&(v^y))+I[2]+4243563512&4294967295,A=v+(w<<9&4294967295|w>>>23),w=C+(v^y&(A^v))+I[7]+1735328473&4294967295,C=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(C^A))+I[12]+2368359562&4294967295,y=C+(w<<20&4294967295|w>>>12),w=v+(y^C^A)+I[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^C)+I[8]+2272392833&4294967295,A=v+(w<<11&4294967295|w>>>21),w=C+(A^v^y)+I[11]+1839030562&4294967295,C=A+(w<<16&4294967295|w>>>16),w=y+(C^A^v)+I[14]+4259657740&4294967295,y=C+(w<<23&4294967295|w>>>9),w=v+(y^C^A)+I[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^C)+I[4]+1272893353&4294967295,A=v+(w<<11&4294967295|w>>>21),w=C+(A^v^y)+I[7]+4139469664&4294967295,C=A+(w<<16&4294967295|w>>>16),w=y+(C^A^v)+I[10]+3200236656&4294967295,y=C+(w<<23&4294967295|w>>>9),w=v+(y^C^A)+I[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^C)+I[0]+3936430074&4294967295,A=v+(w<<11&4294967295|w>>>21),w=C+(A^v^y)+I[3]+3572445317&4294967295,C=A+(w<<16&4294967295|w>>>16),w=y+(C^A^v)+I[6]+76029189&4294967295,y=C+(w<<23&4294967295|w>>>9),w=v+(y^C^A)+I[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^C)+I[12]+3873151461&4294967295,A=v+(w<<11&4294967295|w>>>21),w=C+(A^v^y)+I[15]+530742520&4294967295,C=A+(w<<16&4294967295|w>>>16),w=y+(C^A^v)+I[2]+3299628645&4294967295,y=C+(w<<23&4294967295|w>>>9),w=v+(C^(y|~A))+I[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~C))+I[7]+1126891415&4294967295,A=v+(w<<10&4294967295|w>>>22),w=C+(v^(A|~y))+I[14]+2878612391&4294967295,C=A+(w<<15&4294967295|w>>>17),w=y+(A^(C|~v))+I[5]+4237533241&4294967295,y=C+(w<<21&4294967295|w>>>11),w=v+(C^(y|~A))+I[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~C))+I[3]+2399980690&4294967295,A=v+(w<<10&4294967295|w>>>22),w=C+(v^(A|~y))+I[10]+4293915773&4294967295,C=A+(w<<15&4294967295|w>>>17),w=y+(A^(C|~v))+I[1]+2240044497&4294967295,y=C+(w<<21&4294967295|w>>>11),w=v+(C^(y|~A))+I[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~C))+I[15]+4264355552&4294967295,A=v+(w<<10&4294967295|w>>>22),w=C+(v^(A|~y))+I[6]+2734768916&4294967295,C=A+(w<<15&4294967295|w>>>17),w=y+(A^(C|~v))+I[13]+1309151649&4294967295,y=C+(w<<21&4294967295|w>>>11),w=v+(C^(y|~A))+I[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~C))+I[11]+3174756917&4294967295,A=v+(w<<10&4294967295|w>>>22),w=C+(v^(A|~y))+I[2]+718787259&4294967295,C=A+(w<<15&4294967295|w>>>17),w=y+(A^(C|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(C+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,I=this.B,C=this.h,A=0;A<v;){if(C==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(I[C++]=b.charCodeAt(A++),C==this.blockSize){s(this,I),C=0;break}}else for(;A<v;)if(I[C++]=b[A++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)b[y++]=this.g[v]>>>I&255;return b};function i(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],I=!0,C=b.length-1;0<=C;C--){var A=b[C]|0;I&&A==v||(y[C]=A,I=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return S(u(-b));for(var v=[],y=1,I=0;b>=y;I++)v[I]=b/y|0,y*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return S(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=f,C=0;C<b.length;C+=8){var A=Math.min(8,b.length-C),w=parseInt(b.substring(C,C+A),v);8>A?(A=u(Math.pow(v,A)),I=I.j(A).add(u(w))):(I=I.j(y),I=I.add(u(w)))}return I}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-S(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(P(this))return"-"+S(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,I="";;){var C=L(y,v).g;y=U(y,C.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=C,R(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=U(this,b),P(b)?-1:R(b)?0:1};function S(b){for(var v=b.g.length,y=[],I=0;I<v;I++)y[I]=~b.g[I];return new o(y,~b.h).add(m)}t.abs=function(){return P(this)?S(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0,C=0;C<=v;C++){var A=I+(this.i(C)&65535)+(b.i(C)&65535),w=(A>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=w>>>16,A&=65535,w&=65535,y[C]=w<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(b,v){return b.add(S(v))}t.j=function(b){if(R(this)||R(b))return f;if(P(this))return P(b)?S(this).j(S(b)):S(S(this).j(b));if(P(b))return S(this.j(S(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<b.g.length;C++){var A=this.i(I)>>>16,w=this.i(I)&65535,Oe=b.i(C)>>>16,st=b.i(C)&65535;y[2*I+2*C]+=w*st,x(y,2*I+2*C),y[2*I+2*C+1]+=A*st,x(y,2*I+2*C+1),y[2*I+2*C+1]+=w*Oe,x(y,2*I+2*C+1),y[2*I+2*C+2]+=A*Oe,x(y,2*I+2*C+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function x(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function O(b,v){this.g=b,this.h=v}function L(b,v){if(R(v))throw Error("division by zero");if(R(b))return new O(f,f);if(P(b))return v=L(S(b),v),new O(S(v.g),S(v.h));if(P(v))return v=L(b,S(v)),new O(S(v.g),v.h);if(30<b.g.length){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;0>=I.l(b);)y=ie(y),I=ie(I);var C=ee(y,1),A=ee(I,1);for(I=ee(I,2),y=ee(y,2);!R(I);){var w=A.add(I);0>=w.l(b)&&(C=C.add(y),A=w),I=ee(I,1),y=ee(y,1)}return v=U(b,C.j(v)),new O(C,v)}for(C=f;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),w=A.j(v);P(w)||0<w.l(b);)y-=I,A=u(y),w=A.j(v);R(A)&&(A=m),C=C.add(A),b=U(b,w)}return new O(C,b)}t.A=function(b){return L(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function ie(b){for(var v=b.g.length+1,y=[],I=0;I<v;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function ee(b,v){var y=v>>5;v%=32;for(var I=b.g.length-y,C=[],A=0;A<I;A++)C[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ky=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ar=o}).apply(typeof qp<"u"?qp:typeof self<"u"?self:typeof window<"u"?window:{});var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dy,Ci,xy,wa,uu,Ny,Oy,Vy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ta=="object"&&ta];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,N){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return h.prototype[D].apply(_,K)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function S(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const D=a.length||0,N=_.length||0;a.length=D+N;for(let K=0;K<N;K++)a[D+K]=_[K]}else a.push(_)}}class U{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var ie=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function ee(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function b(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let N=0;N<y.length;N++)p=y[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function A(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Gt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Oe{constructor(){this.h=this.g=null}add(h,p){const _=st.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var st=new U(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,Gt=new Oe,an=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){A(p)}var h=st;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}we=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function _n(a,h){if(Ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{L(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_n.aa.h.call(this)}}R(_n,Ge);var Ut={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),te=0;function J(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++te,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,h,p,_,D){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=E(a,h,_,D);return-1<K?(h=a[K],p||(h.fa=!1)):(h=new J(h,this.src,N,!!_,D),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=D)&&Array.prototype.splice.call(_,D,1),N&&(oe(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function E(a,h,p,_){for(var D=0;D<a.length;++D){var N=a[D];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==_)return D}return-1}var k="closure_lm_"+(1e6*Math.random()|0),$={};function q(a,h,p,_,D){if(Array.isArray(h)){for(var N=0;N<h.length;N++)q(a,h[N],p,_,D);return null}return p=pe(p),a&&a[F]?a.K(h,p,u(_)?!!_.capture:!1,D):B(a,h,p,!1,_,D)}function B(a,h,p,_,D,N){if(!h)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,Me=X(a);if(Me||(a[k]=Me=new Pe(a)),p=Me.add(h,p,_,K,N),p.proxy)return p;if(_=Y(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)tr||(D=K),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(H(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function a(p){return h.call(a.src,a.listener,p)}const h=ce;return a}function W(a,h,p,_,D){if(Array.isArray(h))for(var N=0;N<h.length;N++)W(a,h[N],p,_,D);else _=u(_)?!!_.capture:!!_,p=pe(p),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=E(N,p,_,D),-1<p&&(oe(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,p,_,D)),(p=-1<a?h[a]:null)&&G(p))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])T(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(H(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=X(h))?(T(p,a),p.h==0&&(p.src=null,h[k]=null)):oe(a)}}}function H(a){return a in $?$[a]:$[a]="on"+a}function ce(a,h){if(a.da)a=!0;else{h=new _n(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&G(a),a=p.call(_,h)}return a}function X(a){return a=a[k],a instanceof Pe?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function he(){ze.call(this),this.i=new Pe(this),this.M=this,this.F=null}R(he,ze),he.prototype[F]=!0,he.prototype.removeEventListener=function(a,h,p,_){W(this,a,h,p,_)};function ye(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ge(h,a);else if(h instanceof Ge)h.target=h.target||a;else{var D=h;h=new Ge(_,a),I(h,D)}if(D=!0,p)for(var N=p.length-1;0<=N;N--){var K=h.g=p[N];D=be(K,_,!0,h)&&D}if(K=h.g=a,D=be(K,_,!0,h)&&D,D=be(K,_,!1,h)&&D,p)for(N=0;N<p.length;N++)K=h.g=p[N],D=be(K,_,!1,h)&&D}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)oe(p[_]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},he.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function be(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,N=0;N<h.length;++N){var K=h[N];if(K&&!K.da&&K.capture==p){var Me=K.listener,gt=K.ha||K.src;K.fa&&T(a.i,K),D=Me.call(gt,_)!==!1&&D}}return D&&!_.defaultPrevented}function It(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function pt(a){a.g=It(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class en extends ze{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){ze.call(this),this.h=a,this.g={}}R(At,ze);var nr=[];function ci(a){ee(a.g,function(h,p){this.g.hasOwnProperty(p)&&G(h)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),ci(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,tn=l.JSON.parse,No=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wl(){}Wl.prototype.h=null;function Td(a){return a.h||(a.h=a.i())}function Ed(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kl(){Ge.call(this,"d")}R(Kl,Ge);function Ql(){Ge.call(this,"c")}R(Ql,Ge);var Lr={},Id=null;function Oo(){return Id=Id||new he}Lr.La="serverreachability";function Ad(a){Ge.call(this,Lr.La,a)}R(Ad,Ge);function hi(a){const h=Oo();ye(h,new Ad(h))}Lr.STAT_EVENT="statevent";function bd(a,h){Ge.call(this,Lr.STAT_EVENT,a),this.stat=h}R(bd,Ge);function xt(a){const h=Oo();ye(h,new bd(h,a))}Lr.Ma="timingevent";function Rd(a,h){Ge.call(this,Lr.Ma,a),this.size=h}R(Rd,Ge);function di(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function fi(){this.g=!0}fi.prototype.xa=function(){this.g=!1};function e1(a,h,p,_,D,N){a.info(function(){if(a.g)if(N)for(var K="",Me=N.split("&"),gt=0;gt<Me.length;gt++){var ke=Me[gt].split("=");if(1<ke.length){var bt=ke[0];ke=ke[1];var Rt=bt.split("_");K=2<=Rt.length&&Rt[1]=="type"?K+(bt+"="+ke+"&"):K+(bt+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+K})}function t1(a,h,p,_,D,N,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+N+" "+K})}function fs(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+r1(a,p)+(_?" "+_:"")})}function n1(a,h){a.info(function(){return"TIMEOUT: "+h})}fi.prototype.info=function(){};function r1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var N=D[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return mt(p)}catch{return h}}var Vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xl;function Mo(){}R(Mo,Wl),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},Xl=new Mo;function rr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sd}function Sd(){this.i=null,this.g="",this.h=!1}var Pd={},Yl={};function Jl(a,h,p){a.L=1,a.v=$o(On(h)),a.m=p,a.P=!0,kd(a,null)}function kd(a,h){a.F=Date.now(),Lo(a),a.A=On(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Hd(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Sd,a.g=cf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new en(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(nr[0]=D.toString()),D=nr);for(var N=0;N<D.length;N++){var K=q(p,D[N],_||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),hi(),e1(a.i,a.u,a.A,a.l,a.R,a.m)}rr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Vn(a)==3?h.j():this.Y(a)},rr.prototype.Y=function(a){try{if(a==this.g)e:{const Rt=Vn(this.g);var h=this.g.Ba();const gs=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Yd(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=gs?hi(3):hi(2)),Zl(this);var p=this.g.Z();this.X=p;t:if(Dd(this)){var _=Yd(this.g);a="";var D=_.length,N=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),pi(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,t1(this.i,this.u,this.A,this.l,this.R,Rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,gt=this.g;if((Me=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Me)){var ke=Me;break t}}ke=null}if(p=ke)fs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,p);else{this.o=!1,this.s=3,xt(12),Ur(this),pi(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=s1(this,K),ln==Yl){Rt==4&&(this.s=4,xt(14),p=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Pd){this.s=4,xt(15),fs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else fs(this.i,this.l,ln,null),ec(this,ln);if(Dd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||K.length!=0||this.h.h||(this.s=1,xt(16),p=!1),this.o=this.o&&p,!p)fs(this.i,this.l,K,"[Invalid Chunked Response]"),Ur(this),pi(this);else if(0<K.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),oc(bt),bt.M=!0,xt(11))}}else fs(this.i,this.l,K,null),ec(this,K);Rt==4&&Ur(this),this.o&&!this.J&&(Rt==4?sf(this.j,this):(this.o=!1,Lo(this)))}else T1(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Ur(this),pi(this)}}}catch{}finally{}};function Dd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function s1(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?Yl:(p=Number(h.substring(p,_)),isNaN(p)?Pd:(_+=1,_+p>h.length?Yl:(h=h.slice(_,_+p),a.C=_+p,h)))}rr.prototype.cancel=function(){this.J=!0,Ur(this)};function Lo(a){a.S=Date.now()+a.I,xd(a,a.I)}function xd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=di(m(a.ba,a),h)}function Zl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}rr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(n1(this.i,this.A),this.L!=2&&(hi(),xt(17)),Ur(this),this.s=2,pi(this)):xd(this,this.S-a)};function pi(a){a.j.G==0||a.J||sf(a.j,a)}function Ur(a){Zl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ci(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ec(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||tc(p.h,a))){if(!a.K&&tc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Go(p),Ho(p);else break e;ic(p),xt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=di(m(p.Za,p),6e3));if(1>=Vd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $r(p,11)}else if((a.K||p.g==a)&&Go(p),!x(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let ke=D[h];if(p.T=ke[0],ke=ke[1],p.G==2)if(ke[0]=="c"){p.K=ke[1],p.ia=ke[2];const bt=ke[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const Rt=ke[4];Rt!=null&&(p.Aa=Rt,p.j.info("SVER="+p.Aa));const gs=ke[5];gs!=null&&typeof gs=="number"&&0<gs&&(_=1.5*gs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ln=a.g;if(ln){const Ko=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var N=_.h;N.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(nc(N,N.h),N.h=null))}if(_.D){const ac=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;ac&&(_.ya=ac,$e(_.I,_.D,ac))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=lf(_,_.J?_.ia:null,_.W),K.K){Md(_.h,K);var Me=K,gt=_.L;gt&&(Me.I=gt),Me.B&&(Zl(Me),Lo(Me)),_.g=K}else nf(_);0<p.i.length&&zo(p)}else ke[0]!="stop"&&ke[0]!="close"||$r(p,7);else p.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?$r(p,7):sc(p):ke[0]!="noop"&&p.l&&p.l.ta(ke),p.v=0)}}hi(4)}catch{}}var i1=class{constructor(a,h){this.g=a,this.map=h}};function Nd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Od(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vd(a){return a.h?1:a.g?a.g.size:0}function tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function nc(a,h){a.g?a.g.add(h):a.h=h}function Md(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Nd.prototype.cancel=function(){if(this.i=Ld(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ld(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function o1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function a1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Ud(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=a1(a),_=o1(a),D=_.length,N=0;N<D;N++)h.call(void 0,_[N],p&&p[N],a)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var N=a[p].substring(0,_);D=a[p].substring(_+1)}else N=a[p];h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,Uo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.s),this.l=a.l;var h=a.i,p=new _i;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),$d(this,p),this.m=a.m}else a&&(h=String(a).match(Fd))?(this.h=!1,Uo(this,h[1]||"",!0),this.o=mi(h[2]||""),this.g=mi(h[3]||"",!0),Fo(this,h[4]),this.l=mi(h[5]||"",!0),$d(this,h[6]||"",!0),this.m=mi(h[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Fr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(gi(h,Bd,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(gi(h,Bd,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(gi(p,p.charAt(0)=="/"?h1:u1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",gi(p,f1)),a.join("")};function On(a){return new Fr(a)}function Uo(a,h,p){a.j=p?mi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $d(a,h,p){h instanceof _i?(a.i=h,p1(a.i,a.h)):(p||(h=gi(h,d1)),a.i=new _i(h,a.h))}function $e(a,h,p){a.i.set(h,p)}function $o(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function mi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,c1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function c1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bd=/[#\/\?@]/g,u1=/[#\?:]/g,h1=/[#\?]/g,d1=/[#\?@]/g,f1=/#/g;function _i(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&l1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=_i.prototype,t.add=function(a,h){sr(this),this.i=null,a=ps(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function jd(a,h){sr(a),h=ps(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qd(a,h){return sr(a),h=ps(a,h),a.g.has(h)}t.forEach=function(a,h){sr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){sr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=a[_];for(let N=0;N<D.length;N++)p.push(h[_])}return p},t.V=function(a){sr(this);let h=[];if(typeof a=="string")qd(this,a)&&(h=h.concat(this.g.get(ps(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return sr(this),this.i=null,a=ps(this,a),qd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Hd(a,h,p){jd(a,h),0<p.length&&(a.i=null,a.g.set(ps(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const N=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var D=N;K[_]!==""&&(D+="="+encodeURIComponent(String(K[_]))),a.push(D)}}return this.i=a.join("&")};function ps(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function p1(a,h){h&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(jd(this,_),Hd(this,D,p))},a)),a.j=h}function m1(a,h){const p=new fi;if(l.Image){const _=new Image;_.onload=g(ir,p,"TestLoadImage: loaded",!0,h,_),_.onerror=g(ir,p,"TestLoadImage: error",!1,h,_),_.onabort=g(ir,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(ir,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function g1(a,h){const p=new fi,_=new AbortController,D=setTimeout(()=>{_.abort(),ir(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(D),N.ok?ir(p,"TestPingServer: ok",!0,h):ir(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),ir(p,"TestPingServer: error",!1,h)})}function ir(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function _1(){this.g=new No}function y1(a,h,p){const _=p||"";try{Ud(a,function(D,N){let K=D;u(D)&&(K=mt(D)),h.push(_+N+"="+encodeURIComponent(K))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Bo,Wl),Bo.prototype.g=function(){return new jo(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function jo(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(jo,he),t=jo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yi(this):vi(this),this.readyState==3&&zd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gd(a){let h="";return ee(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function rc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Gd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):$e(a,h,p))}function Ye(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ye,he);var v1=/^https?$/i,w1=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xl.g(),this.v=this.o?Td(this.o):Td(Xl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Wd(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(w1,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of p)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Wd(this,N)}};function Wd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Kd(a),qo(a)}function Kd(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qd(this):this.bb())},t.bb=function(){Qd(this)};function Qd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Vn(a)!=4||a.Z()!=2)){if(a.u&&Vn(a)==4)It(a.Ea,0,a);else if(ye(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=K===0){var D=String(a.D).match(Fd)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!v1.test(D?D.toLowerCase():"")}p=_}if(p)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var N=2<Vn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Kd(a)}}finally{qo(a)}}}}function qo(a,h){if(a.g){Xd(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{p.onreadystatechange=_}catch{}}}function Xd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tn(h)}};function Yd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function T1(a){const h={};a=(a.g&&2<=Vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var p=C(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[D]||[];h[D]=N,N.push(p)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Jd(a){this.Aa=0,this.i=[],this.j=new fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wi("baseRetryDelayMs",5e3,a),this.cb=wi("retryDelaySeedMs",1e4,a),this.Wa=wi("forwardChannelMaxRetries",2,a),this.wa=wi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nd(a&&a.concurrentRequestLimit),this.Da=new _1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jd.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){xt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=lf(this,null,this.W),zo(this)};function sc(a){if(Zd(a),a.G==3){var h=a.U++,p=On(a.I);if($e(p,"SID",a.K),$e(p,"RID",h),$e(p,"TYPE","terminate"),Ti(a,p),h=new rr(a,a.j,h),h.L=2,h.v=$o(On(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=cf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lo(h)}af(a)}function Ho(a){a.g&&(oc(a),a.g.cancel(),a.g=null)}function Zd(a){Ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),Go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zo(a){if(!Od(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||an(),we||(Ae(),we=!0),Gt.add(h,a),a.B=0}}function E1(a,h){return Vd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=di(m(a.Ga,a,h),of(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new rr(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(D.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=tf(this,D,h),p=On(this.I),$e(p,"RID",a),$e(p,"CVER",22),this.D&&$e(p,"X-HTTP-Session-Id",this.D),Ti(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Gd(N)))+"&"+h:this.m&&rc(p,this.m,N)),nc(this.h,D),this.Ua&&$e(p,"TYPE","init"),this.P?($e(p,"$req",h),$e(p,"SID","null"),D.T=!0,Jl(D,p,null)):Jl(D,p,h),this.G=2}}else this.G==3&&(a?ef(this,a):this.i.length==0||Od(this.h)||ef(this))};function ef(a,h){var p;h?p=h.l:p=a.U++;const _=On(a.I);$e(_,"SID",a.K),$e(_,"RID",p),$e(_,"AID",a.T),Ti(a,_),a.m&&a.o&&rc(_,a.m,a.o),p=new rr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=tf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nc(a.h,p),Jl(p,_,h)}function Ti(a,h){a.H&&ee(a.H,function(p,_){$e(h,_,p)}),a.l&&Ud({},function(p,_){$e(h,_,p)})}function tf(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let N=-1;for(;;){const K=["count="+p];N==-1?0<p?(N=D[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Me=!0;for(let gt=0;gt<p;gt++){let ke=D[gt].g;const bt=D[gt].map;if(ke-=N,0>ke)N=Math.max(0,D[gt].g-100),Me=!1;else try{y1(bt,K,"req"+ke+"_")}catch{_&&_(bt)}}if(Me){_=K.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function nf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||an(),we||(Ae(),we=!0),Gt.add(h,a),a.v=0}}function ic(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=di(m(a.Fa,a),of(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=di(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Ho(this),rf(this))};function oc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rf(a){a.g=new rr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=On(a.qa);$e(h,"RID","rpc"),$e(h,"SID",a.K),$e(h,"AID",a.T),$e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(h,"TO",a.ja),$e(h,"TYPE","xmlhttp"),Ti(a,h),a.m&&a.o&&rc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=$o(On(h)),p.m=null,p.P=!0,kd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ho(this),ic(this),xt(19))};function Go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sf(a,h){var p=null;if(a.g==h){Go(a),oc(a),a.g=null;var _=2}else if(tc(a.h,h))p=h.D,Md(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=Oo(),ye(_,new Rd(_,p)),zo(a)}else nf(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&E1(a,h)||_==2&&ic(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function of(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const D=!_;_=new Fr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Uo(_,"https"),$o(_),D?m1(_.toString(),p):g1(_.toString(),p)}else xt(2);a.G=0,a.l&&a.l.sa(h),af(a),Zd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function af(a){if(a.G=0,a.ka=[],a.l){const h=Ld(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function lf(a,h,p){var _=p instanceof Fr?On(p):new Fr(p);if(_.g!="")h&&(_.g=h+"."+_.g),Fo(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var N=new Fr(null);_&&Uo(N,_),h&&(N.g=h),D&&Fo(N,D),p&&(N.l=p),_=N}return p=a.D,h=a.ya,p&&h&&$e(_,p,h),$e(_,"VER",a.la),Ti(a,_),_}function cf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ye(new Bo({eb:p})):new Ye(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function uf(){}t=uf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wo(){}Wo.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){he.call(this),this.g=new Jd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ms(this)}R(Wt,he),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){sc(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=mt(a),a=p);h.i.push(new i1(h.Ya++,a)),h.G==3&&zo(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,sc(this.g),delete this.g,Wt.aa.N.call(this)};function hf(a){Kl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(hf,Kl);function df(){Ql.call(this),this.status=1}R(df,Ql);function ms(a){this.g=a}R(ms,uf),ms.prototype.ua=function(){ye(this.g,"a")},ms.prototype.ta=function(a){ye(this.g,new hf(a))},ms.prototype.sa=function(a){ye(this.g,new df)},ms.prototype.ra=function(){ye(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Vy=function(){return new Wo},Oy=function(){return Oo()},Ny=Lr,uu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,wa=Vo,Cd.COMPLETE="complete",xy=Cd,Ed.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",he.prototype.listen=he.prototype.K,Ci=Ed,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Dy=Ye}).apply(typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{});const Hp="@firebase/firestore",zp="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new vl("@firebase/firestore");function As(){return Zr.logLevel}function ne(t,...e){if(Zr.logLevel<=Te.DEBUG){const n=e.map(vh);Zr.debug(`Firestore (${si}): ${t}`,...n)}}function Xn(t,...e){if(Zr.logLevel<=Te.ERROR){const n=e.map(vh);Zr.error(`Firestore (${si}): ${t}`,...n)}}function Gs(t,...e){if(Zr.logLevel<=Te.WARN){const n=e.map(vh);Zr.warn(`Firestore (${si}): ${t}`,...n)}}function vh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,My(t,r,n)}function My(t,e,n){let r=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function Ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||My(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class j2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q2{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Ly(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class H2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class z2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new H2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Uy(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=W2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function hu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=Uy(),o=K2(i.encode(Wp(t,n)),i.encode(Wp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Wp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function K2(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=-62135596800,Qp=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Qp);return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kp)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Kp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xp="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),s=Tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):hu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class Ve extends Tn{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Tn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return Q2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xp}static keyField(){return new Tt([Xp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const io=-1;function X2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Sr(s,le.empty(),e)}function Y2(t){return new Sr(t.readTime,t.key,io)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(de.min(),le.empty(),io)}static max(){return new Sr(de.max(),le.empty(),io)}}function J2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ii(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Z2)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}bl.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=-1;function Ao(t){return t==null}function Ha(t){return t===0&&1/t==-1/0}function nR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="";function rR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yp(e)),e=sR(t.get(n),e);return Yp(e)}function sR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $y:n+="";break;default:n+=i}}return n}function Yp(t){return t+$y+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function By(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new na(this.root,e,this.comparator,!1)}getReverseIterator(){return new na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new na(this.root,e,this.comparator,!0)}}class na{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zp(this.data.getIterator())}getIteratorFrom(e){return new Zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new at(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jy("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=iR.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="server_timestamp",Hy="__type__",zy="__previous_value__",Gy="__local_write_time__";function Rl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hy])===null||n===void 0?void 0:n.stringValue)===qy}function Cl(t){const e=t.mapValue.fields[zy];return Rl(e)?Cl(e):e}function oo(t){const e=Pr(t.mapValue.fields[Gy].timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const du="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||du}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===du}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="__type__",aR="__max__",ra={mapValue:{}},Ky="__vector__",za="value";function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rl(t)?4:cR(t)?9007199254740991:lR(t)?10:11:ue(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pr(s.timestampValue),l=Pr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),l=Je(i.doubleValue);return o===l?Ha(o)===Ha(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jp(o)!==Jp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!xn(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function lo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Je(i.integerValue||i.doubleValue),c=Je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return em(t.timestampValue,e.timestampValue);case 4:return em(oo(t),oo(e));case 5:return hu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=kr(i),c=kr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ve(l[u],c[u]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(Je(i.latitude),Je(o.latitude));return l!==0?l:ve(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const f=i.fields||{},m=o.fields||{},g=(l=f[za])===null||l===void 0?void 0:l.arrayValue,R=(c=m[za])===null||c===void 0?void 0:c.arrayValue,P=ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:tm(g,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ra.mapValue&&o===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(o===ra.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=hu(c[f],d[f]);if(m!==0)return m;const g=Ks(l[c[f]],u[d[f]]);if(g!==0)return g}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Pr(t),r=Pr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function tm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ks(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Qs(t){return fu(t)}function fu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function Ta(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cl(t);return e?16+Ta(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ta(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vr(r.fields,(i,o)=>{s+=i.length+Ta(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function Ga(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pu(t){return!!t&&"integerValue"in t}function Th(t){return!!t&&"arrayValue"in t}function nm(t){return!!t&&"nullValue"in t}function rm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function lR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wy])===null||n===void 0?void 0:n.stringValue)===Ky}function Bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Bi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(Bi(this.value))}}function Qy(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new Tt([n]);if(Ea(r)){const i=Qy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xs{constructor(e,n){this.position=e,this.inclusive=n}}function sm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function im(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class co{constructor(e,n="asc"){this.field=e,this.dir=n}}function uR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Xy{}class rt extends Xy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dR(e,n,r):n==="array-contains"?new mR(e,r):n==="in"?new gR(e,r):n==="not-in"?new _R(e,r):n==="array-contains-any"?new yR(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fR(e,r):new pR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ks(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends Xy{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new gn(e,n)}matches(e){return Yy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Yy(t){return t.op==="and"}function Jy(t){return hR(t)&&Yy(t)}function hR(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function mu(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(Jy(t))return t.filters.map(e=>mu(e)).join(",");{const e=t.filters.map(n=>mu(n)).join(",");return`${t.op}(${e})`}}function Zy(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Zy(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function ev(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(ev).join(" ,")+"}"}(t):"Filter"}class dR extends rt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class fR extends rt{constructor(e,n){super(e,"in",n),this.keys=tv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pR extends rt{constructor(e,n){super(e,"not-in",n),this.keys=tv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class mR extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Th(n)&&lo(n.arrayValue,this.value)}}class gR extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class _R extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!lo(this.value.arrayValue,n)}}class yR extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
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
 */class vR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function om(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vR(t,e,n,r,s,i,o)}function Eh(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ao(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Ie=n}return e.Ie}function Ih(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!im(t.startAt,e.startAt)&&im(t.endAt,e.endAt)}function gu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function wR(t,e,n,r,s,i,o,l){return new cs(t,e,n,r,s,i,o,l)}function Ah(t){return new cs(t)}function am(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bh(t){return t.collectionGroup!==null}function Bs(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new co(i,r))}),n.has(Tt.keyField().canonicalString())||e.Ee.push(new co(Tt.keyField(),r))}return e.Ee}function Sn(t){const e=ge(t);return e.de||(e.de=TR(e,Bs(t))),e.de}function TR(t,e){if(t.limitType==="F")return om(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new co(s.field,i)});const n=t.endAt?new Xs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xs(t.startAt.position,t.startAt.inclusive):null;return om(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _u(t,e){const n=t.filters.concat([e]);return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wa(t,e,n){return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sl(t,e){return Ih(Sn(t),Sn(e))&&t.limitType===e.limitType}function nv(t){return`${Eh(Sn(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ev(s)).join(", ")}]`),Ao(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=sm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Bs(r),s)||r.endAt&&!function(o,l,c){const u=sm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Bs(r),s))}(t,e)}function ER(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rv(t){return(e,n)=>{let r=!1;for(const s of Bs(t)){const i=IR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IR(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ks(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return By(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new Ke(le.comparator);function Yn(){return AR}const sv=new Ke(le.comparator);function Si(...t){let e=sv;for(const n of t)e=e.insert(n.key,n);return e}function iv(t){let e=sv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return ji()}function ov(){return ji()}function ji(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const bR=new Ke(le.comparator),RR=new at(le.comparator);function Ee(...t){let e=RR;for(const n of t)e=e.add(n);return e}const CR=new at(ve);function SR(){return CR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function av(t){return{integerValue:""+t}}function lv(t,e){return nR(e)?av(e):Rh(t,e)}/**
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
 */class kl{constructor(){this._=void 0}}function PR(t,e,n){return t instanceof Ka?function(s,i){const o={fields:{[Hy]:{stringValue:qy},[Gy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rl(i)&&(i=Cl(i)),i&&(o.fields[zy]=i),{mapValue:o}}(n,e):t instanceof uo?uv(t,e):t instanceof ho?hv(t,e):function(s,i){const o=cv(s,i),l=lm(o)+lm(s.Re);return pu(o)&&pu(s.Re)?av(l):Rh(s.serializer,l)}(t,e)}function kR(t,e,n){return t instanceof uo?uv(t,e):t instanceof ho?hv(t,e):n}function cv(t,e){return t instanceof fo?function(r){return pu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ka extends kl{}class uo extends kl{constructor(e){super(),this.elements=e}}function uv(t,e){const n=dv(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ho extends kl{constructor(e){super(),this.elements=e}}function hv(t,e){let n=dv(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class fo extends kl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function lm(t){return Je(t.integerValue||t.doubleValue)}function dv(t){return Th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.field=e,this.transform=n}}function xR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof uo&&s instanceof uo||r instanceof ho&&s instanceof ho?Ws(r.elements,s.elements,xn):r instanceof fo&&s instanceof fo?xn(r.Re,s.Re):r instanceof Ka&&s instanceof Ka}(t.transform,e.transform)}class NR{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function fv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ch(t.key,jt.none()):new bo(t.key,t.data,jt.none());{const n=t.data,r=Lt.empty();let s=new at(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Qt(s.toArray()),jt.none())}}function OR(t,e,n){t instanceof bo?function(s,i,o){const l=s.value.clone(),c=um(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!Ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=um(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qi(t,e,n,r){return t instanceof bo?function(i,o,l,c){if(!Ia(i.precondition,o))return l;const u=i.value.clone(),d=hm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,c){if(!Ia(i.precondition,o))return l;const u=hm(i.fieldTransforms,c,o),d=o.data;return d.setAll(pv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return Ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cv(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function cm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ws(r,s,(i,o)=>xR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends Dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function um(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,kR(o,l,n[s]))}return r}function hm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PR(i,o,e))}return r}class Ch extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mv extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ov();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=fv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>cm(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>cm(n,r))}}class Sh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return bR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sh(e,n,r,s)}}/**
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
 */var tt,Re;function gv(t){switch(t){case M.OK:return ue(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function _v(t){if(t===void 0)return Xn("GRPC error has no .code"),M.UNKNOWN;switch(t){case tt.OK:return M.OK;case tt.CANCELLED:return M.CANCELLED;case tt.UNKNOWN:return M.UNKNOWN;case tt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case tt.INTERNAL:return M.INTERNAL;case tt.UNAVAILABLE:return M.UNAVAILABLE;case tt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case tt.NOT_FOUND:return M.NOT_FOUND;case tt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case tt.ABORTED:return M.ABORTED;case tt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case tt.DATA_LOSS:return M.DATA_LOSS;default:return ue(39323,{code:t})}}(Re=tt||(tt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const FR=new Ar([4294967295,4294967295],0);function dm(t){const e=Uy().encode(t),n=new ky;return n.update(e),new Uint8Array(n.digest())}function fm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class Ph{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pi(`Invalid padding: ${n}`);if(r<0)throw new Pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Ar.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(FR)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=dm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ph(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=dm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xl(de.min(),s,new Ke(ve),Yn(),Ee())}}class Ro{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ro(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class yv{constructor(e,n){this.targetId=e,this.Ce=n}}class vv{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pm{constructor(){this.Fe=0,this.Me=mm(),this.xe=Et.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ee(),n=Ee(),r=Ee();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new Ro(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=mm()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $R{constructor(e){this.ze=e,this.je=new Map,this.He=Yn(),this.Je=sa(),this.Ye=sa(),this.Ze=new Ke(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(gu(i))if(r===0){const o=new le(i.path);this.tt(n,o,ht.newNoDocument(o,de.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof jy)return Gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ph(o,s,i)}catch(c){return Gs(c instanceof Pi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&gu(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ht.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Ee();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new xl(e,n,this.Ze,this.He,r);return this.He=Yn(),this.Je=sa(),this.Ye=sa(),this.Ze=new Ke(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new pm,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new at(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new at(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new pm),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function sa(){return new Ke(le.comparator)}function mm(){return new Ke(le.comparator)}const BR={asc:"ASCENDING",desc:"DESCENDING"},jR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qR={and:"AND",or:"OR"};class HR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yu(t,e){return t.useProto3Json||Ao(e)?e:{value:e}}function Qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zR(t,e){return Qa(t,e.toTimestamp())}function Jt(t){return Ce(!!t,49232),de.fromTimestamp(function(n){const r=Pr(n);return new ot(r.seconds,r.nanos)}(t))}function kh(t,e){return vu(t,e).canonicalString()}function vu(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tv(t){const e=Ve.fromString(t);return Ce(Cv(e),10190,{key:e.toString()}),e}function Xa(t,e){return kh(t.databaseId,e.path)}function Hi(t,e){const n=Tv(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Iv(n))}function Ev(t,e){return kh(t.databaseId,e)}function GR(t){const e=Tv(t);return e.length===4?Ve.emptyPath():Iv(e)}function wu(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iv(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gm(t,e,n){return{name:Xa(t,e),fields:n.value.mapValue.fields}}function WR(t,e){return"found"in e?function(r,s){Ce(!!s.found,43571),s.found.name,s.found.updateTime;const i=Hi(r,s.found.name),o=Jt(s.found.updateTime),l=s.found.createTime?Jt(s.found.createTime):de.min(),c=new Lt({mapValue:{fields:s.found.fields}});return ht.newFoundDocument(i,o,l,c)}(t,e):"missing"in e?function(r,s){Ce(!!s.missing,3894),Ce(!!s.readTime,22933);const i=Hi(r,s.missing),o=Jt(s.readTime);return ht.newNoDocument(i,o)}(t,e):ue(7234,{result:e})}function KR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ce(d===void 0||typeof d=="string",58123),Et.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?M.UNKNOWN:_v(u.code);return new Q(d,u.message||"")}(o);n=new vv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):de.min(),l=new Lt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Aa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(t,r.document),i=r.readTime?Jt(r.readTime):de.min(),o=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Aa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(t,r.document),i=r.removedTargetIds||[];n=new Aa([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new UR(s,i),l=r.targetId;n=new yv(l,o)}}return n}function Av(t,e){let n;if(e instanceof bo)n={update:gm(t,e.key,e.value)};else if(e instanceof Ch)n={delete:Xa(t,e.key)};else if(e instanceof Mr)n={update:gm(t,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof mv))return ue(16599,{ft:e.type});n={verify:Xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function QR(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(de.min())&&(o=Jt(i)),new NR(o,s.transformResults||[])}(n,e))):[]}function XR(t,e){return{documents:[Ev(t,e.path)]}}function YR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ev(t,s);const i=function(u){if(u.length!==0)return Rv(gn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Rs(m.field),direction:eC(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function JR(t){let e=GR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=bv(f);return m instanceof gn&&Jy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new co(Cs(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Ao(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Xs(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Xs(g,m)}(n.endAt)),wR(e,s,o,i,l,"F",c,u)}function ZR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>bv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function eC(t){return BR[t]}function tC(t){return jR[t]}function nC(t){return qR[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function Cs(t){return Tt.fromServerFormat(t.fieldPath)}function Rv(t){return t instanceof rt?function(n){if(n.op==="=="){if(rm(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NAN"}};if(nm(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rm(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NAN"}};if(nm(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(n.field),op:tC(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(s=>Rv(s));return r.length===1?r[0]:{compositeFilter:{op:nC(n.op),filters:r}}}(t):ue(54877,{filter:t})}function rC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.wt=e}}function iC(t){const e=JR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wa(e,e.limit,"L"):e}/**
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
 */class oC{constructor(){this.Cn=new aC}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Sr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ve.comparator)).toArray()}}/**
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
 */const _m={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sv=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(Sv,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ys(0)}static lr(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="LruGarbageCollector",lC=1048576;function vm([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class cC{constructor(e){this.Er=e,this.buffer=new at(vm),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(ym,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oi(n)?ne(ym,"Ignoring IndexedDB error during garbage collection: ",n):await ii(n)}await this.mr(3e5)})}}class hC{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(bl.le);const r=new cC(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(_m)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_m):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),As()<=Te.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
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
 */class fC{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qi(r.mutation,s,Qt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Si();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Yn();const o=ji(),l=function(){return ji()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Mr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),qi(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return l.set(u,new pC(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ji();let s=new Ke((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Qt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=ov();d.forEach(m=>{if(!i.has(m)){const g=fv(n.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Gr());let l=io,c=i;return o.next(u=>j.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(d=>({batchId:l,changes:iv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(f,m){return new cs(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let l=Si();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&qi(d.mutation,u,Qt.empty(),ot.now()),Pl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _C{constructor(){this.overlays=new Ke(le.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Gr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Gr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return j.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LR(n,r));let i=this.Qr.get(n);i===void 0&&(i=Ee(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class Dh{constructor(){this.$r=new at(ut.Ur),this.Kr=new at(ut.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ut(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ut(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new Ve([])),r=new ut(n,e),s=new ut(n,e+1);let i=Ee();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new at(ut.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?wh:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(ve);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let l=new at(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),j.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.ii=e,this.docs=function(){return new Ke(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Yn();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||J2(Y2(d),r)<=0||(s.has(d.key)||Pl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TC(this)}getSize(e){return j.resolve(this.size)}}class TC extends fC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.persistence=e,this.oi=new us(n=>Eh(n),Ih),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Dh,this.targetCount=0,this.ui=Ys.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n){this.ci={},this.overlays={},this.li=new bl(0),this.hi=!1,this.hi=!0,this.Pi=new yC,this.referenceDelegate=e(this),this.Ti=new EC(this),this.indexManager=new oC,this.remoteDocumentCache=function(s){return new wC(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new sC(n),this.Ei=new gC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new vC(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new IC(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class IC extends eR{constructor(e){super(),this.currentSequenceNumber=e}}class xh{constructor(e){this.persistence=e,this.Vi=new Dh,this.mi=null}static fi(e){return new xh(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Ya{constructor(e,n){this.persistence=e,this.yi=new us(r=>rR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dC(this,n)}static fi(e,n){return new Ya(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ta(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nh(e,n.fromCache,r,s)}}/**
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
 */class bC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return _I()?8:tR(Dt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AC;return this.bs(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(As()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(As()<=Te.DEBUG&&ne("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(As()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):j.resolve())}ws(e,n){if(am(n))return j.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wa(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Wa(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return am(n)||s.isEqual(de.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(As()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.Fs(e,o,n,X2(s,io)).next(l=>l))})}vs(e,n){let r=new at(rv(e));return n.forEach((s,i)=>{Pl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return As()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",bs(n)),this.ys.getDocumentsMatchingQuery(e,n,Sr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="LocalStore",RC=3e8;class CC{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ke(ve),this.Os=new us(i=>Eh(i),Ih),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function SC(t,e,n,r){return new CC(t,e,n,r)}async function kv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function PC(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,m=f.keys();let g=j.resolve();return m.forEach(R=>{g=g.next(()=>d.getEntry(c,R)).next(P=>{const S=u.docVersions.get(R);Ce(S!==null,48541),P.version.compareTo(S)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Dv(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function kC(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Et.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(f,g),function(P,S,U){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=RC?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,g,d)&&l.push(n.Ti.updateTargetData(i,g))});let c=Yn(),u=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(DC(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(de.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(f=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function DC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Yn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne(Oh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function xC(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NC(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Tu(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!oi(o))throw o;ne(Oh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function wm(t,e,n){const r=ge(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ge(c),m=f.Os.get(d);return m!==void 0?j.resolve(f.xs.get(m)):f.Ti.getTargetData(u,d)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ee())).next(l=>(OC(r,ER(e),l),{documents:l,$s:i})))}function OC(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Tm{constructor(){this.activeTargetIds=SR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.xo=new Tm,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const Em="ConnectivityMonitor";class Im{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(Em,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(Em,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ia=null;function Eu(){return ia===null?ia=function(){return 268435456+Math.round(2147483648*Math.random())}():ia++,"0x"+ia.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="RestConnection",LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===du?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Eu(),l=this.jo(e,n.toUriEncodedString());ne(Pc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=as(u);return this.Jo(e,l,c,r,d).then(f=>(ne(Pc,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Gs(Pc,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=LC[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ct="WebChannelConnection";class $C extends UC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Eu();return new Promise((l,c)=>{const u=new Dy;u.setWithCredentials(!0),u.listenOnce(xy.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wa.NO_ERROR:const f=u.getResponseJson();ne(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case wa.TIMEOUT:ne(Ct,`RPC '${e}' ${o} timed out`),c(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case wa.HTTP_ERROR:const m=u.getStatus();if(ne(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g==null?void 0:g.error;if(R&&R.status&&R.message){const P=function(U){const x=U.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(x)>=0?x:M.UNKNOWN}(R.status);c(new Q(P,R.message))}else c(new Q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Q(M.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(Ct,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);ne(Ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Eu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vy(),l=Oy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(Ct,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let m=!1,g=!1;const R=new FC({Zo:S=>{g?ne(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ne(Ct,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),ne(Ct,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},Xo:()=>f.close()}),P=(S,U,x)=>{S.listen(U,O=>{try{x(O)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,Ci.EventType.OPEN,()=>{g||(ne(Ct,`RPC '${e}' stream ${s} transport opened.`),R.__())}),P(f,Ci.EventType.CLOSE,()=>{g||(g=!0,ne(Ct,`RPC '${e}' stream ${s} transport closed`),R.u_())}),P(f,Ci.EventType.ERROR,S=>{g||(g=!0,Gs(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),R.u_(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ci.EventType.MESSAGE,S=>{var U;if(!g){const x=S.data[0];Ce(!!x,16349);const O=x,L=(O==null?void 0:O.error)||((U=O[0])===null||U===void 0?void 0:U.error);if(L){ne(Ct,`RPC '${e}' stream ${s} received error:`,L);const ie=L.status;let ee=function(y){const I=tt[y];if(I!==void 0)return _v(I)}(ie),b=L.message;ee===void 0&&(ee=M.INTERNAL,b="Unknown error status: "+ie+" with message "+L.message),g=!0,R.u_(new Q(ee,b)),f.close()}else ne(Ct,`RPC '${e}' stream ${s} received:`,x),R.c_(x)}}),P(l,Ny.STAT_EVENT,S=>{S.stat===uu.PROXY?ne(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===uu.NOPROXY&&ne(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return new HR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="PersistentStream";class xv{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Vh(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ne(Am,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(ne(Am,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BC extends xv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=KR(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Jt(o.readTime):de.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=wu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=gu(c)?{documents:XR(i,c)}:{query:YR(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wv(i,o.resumeToken);const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Qa(i,o.snapshotVersion.toTimestamp());const u=yu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=ZR(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=wu(this.serializer),n.removeTarget=e,this.L_(n)}}class jC extends xv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=QR(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=wu(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Av(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{}class HC extends qC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,vu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,vu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class zC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Xn(n),this.oa=!1):ne("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="RemoteStore";class GC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{hs(this)&&(ne(es,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.Ta.add(4),await Co(u),u.da.set("Unknown"),u.Ta.delete(4),await Ol(u)}(this))})}),this.da=new zC(r,s)}}async function Ol(t){if(hs(t))for(const e of t.Ia)await e(!0)}async function Co(t){for(const e of t.Ia)await e(!1)}function Nv(t,e){const n=ge(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Fh(n)?Uh(n):ai(n).M_()&&Lh(n,e))}function Mh(t,e){const n=ge(t),r=ai(n);n.Pa.delete(e),r.M_()&&Ov(n,e),n.Pa.size===0&&(r.M_()?r.N_():hs(n)&&n.da.set("Unknown"))}function Lh(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ai(t).H_(e)}function Ov(t,e){t.Aa.Ke(e),ai(t).J_(e)}function Uh(t){t.Aa=new $R({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ai(t).start(),t.da._a()}function Fh(t){return hs(t)&&!ai(t).F_()&&t.Pa.size>0}function hs(t){return ge(t).Ta.size===0}function Vv(t){t.Aa=void 0}async function WC(t){t.da.set("Online")}async function KC(t){t.Pa.forEach((e,n)=>{Lh(t,e)})}async function QC(t,e){Vv(t),Fh(t)?(t.da.ca(e),Uh(t)):t.da.set("Unknown")}async function XC(t,e,n){if(t.da.set("Online"),e instanceof vv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(t,e)}catch(r){ne(es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ja(t,r)}else if(e instanceof Aa?t.Aa.Xe(e):e instanceof yv?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(de.min()))try{const r=await Dv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Pa.get(u);d&&i.Pa.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Pa.get(c);if(!d)return;i.Pa.set(c,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),Ov(i,c);const f=new yr(d.target,c,u,d.sequenceNumber);Lh(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne(es,"Failed to raise snapshot:",r),await Ja(t,r)}}async function Ja(t,e,n){if(!oi(e))throw e;t.Ta.add(1),await Co(t),t.da.set("Offline"),n||(n=()=>Dv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne(es,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Ol(t)})}function Mv(t,e){return e().catch(n=>Ja(t,n,e))}async function Vl(t){const e=ge(t),n=xr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:wh;for(;YC(e);)try{const s=await xC(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,JC(e,s)}catch(s){await Ja(e,s)}Lv(e)&&Uv(e)}function YC(t){return hs(t)&&t.ha.length<10}function JC(t,e){t.ha.push(e);const n=xr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Lv(t){return hs(t)&&!xr(t).F_()&&t.ha.length>0}function Uv(t){xr(t).start()}async function ZC(t){xr(t).ta()}async function eS(t){const e=xr(t);for(const n of t.ha)e.Z_(n.mutations)}async function tS(t,e,n){const r=t.ha.shift(),s=Sh.from(r,e,n);await Mv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Vl(t)}async function nS(t,e){e&&xr(t).Y_&&await async function(r,s){if(function(o){return gv(o)&&o!==M.ABORTED}(s.code)){const i=r.ha.shift();xr(r).O_(),await Mv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vl(r)}}(t,e),Lv(t)&&Uv(t)}async function bm(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ne(es,"RemoteStore received new credentials");const r=hs(n);n.Ta.add(3),await Co(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Ol(n)}async function rS(t,e){const n=ge(t);e?(n.Ta.delete(2),await Ol(n)):e||(n.Ta.add(2),await Co(n),n.da.set("Unknown"))}function ai(t){return t.Ra||(t.Ra=function(n,r,s){const i=ge(n);return i.ra(),new BC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:WC.bind(null,t),n_:KC.bind(null,t),i_:QC.bind(null,t),j_:XC.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Fh(t)?Uh(t):t.da.set("Unknown")):(await t.Ra.stop(),Vv(t))})),t.Ra}function xr(t){return t.Va||(t.Va=function(n,r,s){const i=ge(n);return i.ra(),new jC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:ZC.bind(null,t),i_:nS.bind(null,t),X_:eS.bind(null,t),ea:tS.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Vl(t)):(await t.Va.stop(),t.ha.length>0&&(ne(es,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new $h(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bh(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),oi(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static emptySet(e){return new js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.ma=new Ke(le.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Js(e,n,js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class iS{constructor(){this.queries=Cm(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Cm(),i.forEach((o,l)=>{for(const c of l.ya)c.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function Cm(){return new us(t=>nv(t),Sl)}async function Fv(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new sS,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Bh(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&jh(n)}async function $v(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ya)l.va(s)&&(r=!0);o.pa=s}}r&&jh(n)}function aS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function jh(t){t.ba.forEach(e=>{e.next()})}var Iu,Sm;(Sm=Iu||(Iu={})).Ca="default",Sm.Cache="cache";class Bv{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Iu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.key=e}}class qv{constructor(e){this.key=e}}class lS{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ee(),this.mutatedKeys=Ee(),this.Ha=rv(e),this.Ja=new js(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new Rm,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),g=Pl(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;m&&g?m.data.isEqual(g.data)?R!==P&&(r.track({type:3,doc:g}),S=!0):this.eu(m,g)||(r.track({type:2,doc:g}),S=!0,(c&&this.Ha(g,c)>0||u&&this.Ha(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),S=!0):m&&!g&&(r.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(g?(o=o.add(g),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((d,f)=>function(g,R){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:S})}};return P(g)-P(R)}(d.type,f.type)||this.Ha(d.doc,f.doc)),this.tu(r),s=s!=null&&s;const l=n&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Js(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Rm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ee(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new qv(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new jv(r))}),n}su(e){this.Ga=e.$s,this.ja=Ee();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Js.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const qh="SyncEngine";class cS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uS{constructor(e){this.key=e,this._u=!1}}class hS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new us(l=>nv(l),Sl),this.cu=new Map,this.lu=new Set,this.hu=new Ke(le.comparator),this.Pu=new Map,this.Tu=new Dh,this.Iu={},this.Eu=new Map,this.du=Ys.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function dS(t,e,n=!0){const r=Qv(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Hv(r,e,n,!0),s}async function fS(t,e){const n=Qv(t);await Hv(n,e,!0,!1)}async function Hv(t,e,n,r){const s=await NC(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await pS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Nv(t.remoteStore,s),l}async function pS(t,e,n,r,s){t.Ru=(f,m,g)=>async function(P,S,U,x){let O=S.view.Za(U);O.Cs&&(O=await wm(P.localStore,S.query,!1).then(({documents:b})=>S.view.Za(b,O)));const L=x&&x.targetChanges.get(S.targetId),ie=x&&x.targetMismatches.get(S.targetId)!=null,ee=S.view.applyChanges(O,P.isPrimaryClient,L,ie);return km(P,S.targetId,ee.ru),ee.snapshot}(t,f,m,g);const i=await wm(t.localStore,e,!0),o=new lS(e,i.$s),l=o.Za(i.documents),c=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);km(t,n,u.ru);const d=new cS(e,n,o);return t.uu.set(e,d),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),u.snapshot}async function mS(t,e,n){const r=ge(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!Sl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Tu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Mh(r.remoteStore,s.targetId),Au(r,s.targetId)}).catch(ii)):(Au(r,s.targetId),await Tu(r.localStore,s.targetId,!0))}async function gS(t,e){const n=ge(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mh(n.remoteStore,r.targetId))}async function _S(t,e,n){const r=AS(t);try{const s=await function(o,l){const c=ge(o),u=ot.now(),d=l.reduce((g,R)=>g.add(R.key),Ee());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=Yn(),P=Ee();return c.Bs.getEntries(g,d).next(S=>{R=S,R.forEach((U,x)=>{x.isValidDocument()||(P=P.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,R)).next(S=>{f=S;const U=[];for(const x of l){const O=VR(x,f.get(x.key).overlayedDocument);O!=null&&U.push(new Mr(x.key,O,Qy(O.value.mapValue),jt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,U,l)}).next(S=>{m=S;const U=S.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(g,S.batchId,U)})}).then(()=>({batchId:m.batchId,changes:iv(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Ke(ve)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(r,s.batchId,n),await So(r,s.changes),await Vl(r.remoteStore)}catch(s){const i=Bh(s,"Failed to persist write");n.reject(i)}}async function zv(t,e){const n=ge(t);try{const r=await kC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Ce(o._u,14607):s.removedDocuments.size>0&&(Ce(o._u,42227),o._u=!1))}),await So(n,r,e)}catch(r){await ii(r)}}function Pm(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.ya)m.Da(l)&&(u=!0)}),u&&jh(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Ke(le.comparator);o=o.insert(i,ht.newNoDocument(i,de.min()));const l=Ee().add(i),c=new xl(de.min(),new Map,new Ke(ve),o,l);await zv(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Hh(r)}else await Tu(r.localStore,e,!1).then(()=>Au(r,e,n)).catch(ii)}async function vS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await PC(n.localStore,e);Wv(n,r,null),Gv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await So(n,s)}catch(s){await ii(s)}}async function wS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Ce(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Wv(r,e,n),Gv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await So(r,s)}catch(s){await ii(s)}}function Gv(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Wv(t,e,n){const r=ge(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||Kv(t,r)})}function Kv(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Mh(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Hh(t))}function km(t,e,n){for(const r of n)r instanceof jv?(t.Tu.addReference(r.key,e),TS(t,r)):r instanceof qv?(ne(qh,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||Kv(t,r.key)):ue(19791,{mu:r})}function TS(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(ne(qh,"New document in limbo: "+n),t.lu.add(r),Hh(t))}function Hh(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new le(Ve.fromString(e)),r=t.du.next();t.Pu.set(r,new uS(n)),t.hu=t.hu.insert(n,r),Nv(t.remoteStore,new yr(Sn(Ah(n.path)),r,"TargetPurposeLimboResolution",bl.le))}}async function So(t,e,n){const r=ge(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{o.push(r.Ru(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Nh.Rs(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.au.j_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,m=>j.forEach(m.ds,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>j.forEach(m.As,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!oi(f))throw f;ne(Oh,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.xs.get(m),R=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(R);d.xs=d.xs.insert(m,P)}}}(r.localStore,i))}async function ES(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ne(qh,"User change. New user:",e.toKey());const r=await kv(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Q(M.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await So(n,r.ks)}}function IS(t,e){const n=ge(t),r=n.Pu.get(e);if(r&&r._u)return Ee().add(r.key);{let s=Ee();const i=n.cu.get(e);if(!i)return s;for(const o of i){const l=n.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function Qv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yS.bind(null,e),e.au.j_=oS.bind(null,e.eventManager),e.au.Vu=aS.bind(null,e.eventManager),e}function AS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wS.bind(null,e),e}class Za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return SC(this.persistence,new bC,e.initialUser,this.serializer)}yu(e){return new Pv(xh.fi,this.serializer)}pu(e){return new VC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Za.provider={build:()=>new Za};class bS extends Za{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Ce(this.persistence.referenceDelegate instanceof Ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uC(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new Pv(r=>Ya.fi(r,n),this.serializer)}}class bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iS}()}createDatastore(e){const n=Nl(e.databaseInfo.databaseId),r=function(i){return new $C(i)}(e.databaseInfo);return function(i,o,l,c){return new HC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new GC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pm(this.syncEngine,n,0),function(){return Im.C()?new Im:new MC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const f=new hS(s,i,o,l,c,u);return d&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ne(es,"RemoteStore shutting down."),i.Ta.add(5),await Co(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bu.provider={build:()=>new bu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Q(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=ge(s),l={documents:i.map(f=>Xa(o.serializer,f))},c=await o.Yo("BatchGetDocuments",o.serializer.databaseId,Ve.emptyPath(),l,i.length),u=new Map;c.forEach(f=>{const m=WR(o.serializer,f);u.set(m.key.toString(),m)});const d=[];return i.forEach(f=>{const m=u.get(f.toString());Ce(!!m,55234,{key:f}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ch(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=le.fromPath(r);this.mutations.push(new mv(s,this.precondition(s)))}),await async function(r,s){const i=ge(r),o={writes:s.map(l=>Av(i.serializer,l))};await i.zo("Commit",i.serializer.databaseId,Ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ue(50498,{qu:e.constructor.name});n=de.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Q(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(de.min())?jt.exists(!1):jt.updateTime(n):jt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(de.min()))throw new Q(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return jt.updateTime(n)}return jt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class CS{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new Vh(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new RS(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!Ao(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!gv(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class SS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Fy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),ne(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PS(t);ne(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>bm(e.remoteStore,s)),t._onlineComponents=e}async function PS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(Nr,"Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new Za)}}else ne(Nr,"Using default OfflineComponentProvider"),await Dc(t,new bS(void 0));return t._offlineComponents}async function zh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(Nr,"Using user provided OnlineComponentProvider"),await Dm(t,t._uninitializedComponentsProvider._online)):(ne(Nr,"Using default OnlineComponentProvider"),await Dm(t,new bu))),t._onlineComponents}function kS(t){return zh(t).then(e=>e.syncEngine)}function DS(t){return zh(t).then(e=>e.datastore)}async function Yv(t){const e=await zh(t),n=e.eventManager;return n.onListen=dS.bind(null,e.syncEngine),n.onUnlisten=mS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gS.bind(null,e.syncEngine),n}function xS(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Xv({next:m=>{d.Cu(),o.enqueueAndForget(()=>$v(i,f));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new Q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Bv(Ah(l.path),d,{includeMetadataChanges:!0,La:!0});return Fv(i,f)}(await Yv(t),t.asyncQueue,e,n,r)),r.promise}function NS(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Xv({next:m=>{d.Cu(),o.enqueueAndForget(()=>$v(i,f)),m.fromCache&&c.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Bv(l,d,{includeMetadataChanges:!0,La:!0});return Fv(i,f)}(await Yv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Jv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OS(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nm(t){if(!le.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Om(t){if(le.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ml(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ml(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="firestore.googleapis.com",Vm=!0;class Mm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=e0,this.ssl=Vm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Vm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lC)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ll{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new B2;switch(r.type){case"firstParty":return new z2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xm.get(n);r&&(ne("ComponentProvider","Removing Datastore"),xm.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;t=ts(t,Ll);const i=as(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(ah(`https://${c}`),lh("Firestore",!0)),o.host!==e0&&o.host!==c&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Yr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=St.MOCK_USER;else{d=z_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new St(m)}t._authCredentials=new j2(new Ly(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new er(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class br extends er{constructor(e,n,r){super(e,n,Ah(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new le(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function Zs(t,e,...n){if(t=qe(t),Zv("collection","path",e),t instanceof Ll){const r=Ve.fromString(e,...n);return Om(r),new br(t,null,r)}{if(!(t instanceof Ht||t instanceof br))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Om(r),new br(t.firestore,null,r)}}function el(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Fy.newId()),Zv("doc","path",e),t instanceof Ll){const r=Ve.fromString(e,...n);return Nm(r),new Ht(t,null,new le(r))}{if(!(t instanceof Ht||t instanceof br))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Nm(r),new Ht(t.firestore,t instanceof br?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="AsyncQueue";class Um{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Vh(this,"async_queue_retry"),this.ec=()=>{const r=kc();r&&ne(Lm,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Cn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!oi(e))throw e;ne(Lm,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Xn("INTERNAL UNHANDLED ERROR: ",Fm(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=$h.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ue(47125,{_c:Fm(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Fm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Po extends Ll{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Um,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Um(e),this._firestoreClient=void 0,await e}}}function MS(t,e){const n=typeof t=="object"?t:wl(),r=typeof t=="string"?t:e,s=ni(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=j_("firestore");i&&VS(s,...i)}return s}function Ul(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LS(t),t._firestoreClient}function LS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new oR(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Jv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new SS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(Et.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Wh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=/^__.*__$/;class FS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}class t0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function n0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{hc:t})}}class Kh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Kh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return tl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(n0(this.hc)&&US.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class $S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nl(e)}gc(e,n,r,s=!1){return new Kh({hc:e,methodName:n,fc:r,path:Tt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bl(t){const e=t._freezeSettings(),n=Nl(t._databaseId);return new $S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function r0(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);Xh("Data must be an object, but it was:",o,r);const l=i0(r,o);let c,u;if(i.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=Ru(e,f,n);if(!o.contains(m))throw new Q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);a0(d,m)||d.push(m)}c=new Qt(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new FS(new Lt(l),c,u)}class jl extends $l{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}class Qh extends $l{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new fo(e.serializer,lv(e.serializer,this.wc));return new DR(e.path,n)}isEqual(e){return e instanceof Qh&&this.wc===e.wc}}function BS(t,e,n,r){const s=t.gc(1,e,n);Xh("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();Vr(r,(c,u)=>{const d=Yh(e,c,n);u=qe(u);const f=s.Ac(d);if(u instanceof jl)i.push(d);else{const m=ko(u,f);m!=null&&(i.push(d),o.set(d,m))}});const l=new Qt(i);return new t0(o,l,s.fieldTransforms)}function jS(t,e,n,r,s,i){const o=t.gc(1,e,n),l=[Ru(e,r,n)],c=[s];if(i.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Ru(e,i[m])),c.push(i[m+1]);const u=[],d=Lt.empty();for(let m=l.length-1;m>=0;--m)if(!a0(u,l[m])){const g=l[m];let R=c[m];R=qe(R);const P=o.Ac(g);if(R instanceof jl)u.push(g);else{const S=ko(R,P);S!=null&&(u.push(g),d.set(g,S))}}const f=new Qt(u);return new t0(d,f,o.fieldTransforms)}function s0(t,e,n,r=!1){return ko(n,t.gc(r?4:3,e))}function ko(t,e){if(o0(t=qe(t)))return Xh("Unsupported field value:",e,t),i0(t,e);if(t instanceof $l)return function(r,s){if(!n0(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ko(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Qa(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qa(s.serializer,i)}}if(r instanceof Gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:wv(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wh)return function(o,l){return{mapValue:{fields:{[Wy]:{stringValue:Ky},[za]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Rh(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Ml(r)}`)}(t,e)}function i0(t,e){const n={};return By(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=ko(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function o0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Gh||t instanceof ns||t instanceof Ht||t instanceof $l||t instanceof Wh)}function Xh(t,e,n){if(!o0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ml(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function Ru(t,e,n){if((e=qe(e))instanceof Fl)return e._internalPath;if(typeof e=="string")return Yh(t,e);throw tl("Field path arguments must be of type string or ",t,!1,void 0,n)}const qS=new RegExp("[~\\*/\\[\\]]");function Yh(t,e,n){if(e.search(qS)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fl(...e.split("."))._internalPath}catch{throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(M.INVALID_ARGUMENT,l+t+c)}function a0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HS extends po{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?Yh(t,e):e instanceof Fl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zh{}class ql extends Zh{}function Cu(t,e,...n){let r=[];e instanceof Zh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof td).length,l=i.filter(c=>c instanceof ed).length;if(o>1||o>0&&l>0)throw new Q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ed extends ql{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ed(e,n,r)}_apply(e){const n=this._parse(e);return l0(e._query,n),new er(e.firestore,e.converter,_u(e._query,n))}_parse(e){const n=Bl(e.firestore);return function(i,o,l,c,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){jm(f,d);const R=[];for(const P of f)R.push(Bm(c,i,P));m={arrayValue:{values:R}}}else m=Bm(c,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||jm(f,d),m=s0(l,o,f,d==="in"||d==="not-in");return rt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class td extends Zh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new td(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)l0(o,c),o=_u(o,c)}(e._query,n),new er(e.firestore,e.converter,_u(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nd extends ql{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new co(i,o)}(e._query,this._field,this._direction);return new er(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new cs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Su(t,e="asc"){const n=e,r=Jh("orderBy",t);return nd._create(r,n)}class rd extends ql{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rd(e,n,r)}_apply(e){return new er(e.firestore,e.converter,Wa(e._query,this._limit,this._limitType))}}function $m(t){return rd._create("limit",t,"F")}class sd extends ql{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=WS(e,this.type,this._docOrFields,this._inclusive);return new er(e.firestore,e.converter,function(s,i){return new cs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function GS(...t){return sd._create("startAfter",t,!1)}function WS(t,e,n,r){if(n[0]=qe(n[0]),n[0]instanceof po)return function(i,o,l,c,u){if(!c)throw new Q(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const f of Bs(i))if(f.field.isKeyField())d.push(Ga(o,c.key));else{const m=c.data.field(f.field);if(Rl(m))throw new Q(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new Q(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Xs(d,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Bl(t.firestore);return function(o,l,c,u,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new Q(M.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let R=0;R<d.length;R++){const P=d[R];if(m[R].field.isKeyField()){if(typeof P!="string")throw new Q(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof P}`);if(!bh(o)&&P.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${P}' contains a slash.`);const S=o.path.child(Ve.fromString(P));if(!le.isDocumentKey(S))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const U=new le(S);g.push(Ga(l,U))}else{const S=s0(c,u,P);g.push(S)}}return new Xs(g,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Bm(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new Q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bh(e)&&n.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!le.isDocumentKey(r))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ga(t,new le(r))}if(n instanceof Ht)return Ga(t,n._key);throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ml(n)}.`)}function jm(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class c0{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[za].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Je(o.doubleValue));return new Wh(i)}convertGeoPoint(e){return new Gh(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ce(Cv(r),9688,{name:e});const s=new ao(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class KS extends c0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class id extends po{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ba extends id{data(e={}){return super.data(e)}}class QS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ba(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ba(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:XS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){t=ts(t,Ht);const e=ts(t.firestore,Po);return xS(Ul(e),t._key).then(n=>ZS(e,t,n))}class od extends c0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function ad(t){t=ts(t,er);const e=ts(t.firestore,Po),n=Ul(e),r=new od(e);return zS(t._query),NS(n,t._query).then(s=>new QS(e,r,t,s))}function h0(t,e){const n=ts(t.firestore,Po),r=el(t),s=u0(t.converter,e);return JS(n,[r0(Bl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function JS(t,e){return function(r,s){const i=new Cn;return r.asyncQueue.enqueueAndForget(async()=>_S(await kS(r),s,i)),i.promise}(Ul(t),e)}function ZS(t,e,n){const r=n.docs.get(e._key),s=new od(t);return new id(t,s,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const eP={maxAttempts:5};function ki(t,e){if((t=qe(t)).firestore!==e)throw new Q(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Bl(e)}get(e){const n=ki(e,this._firestore),r=new KS(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return ue(24041);const i=s[0];if(i.isFoundDocument())return new po(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new po(this._firestore,r,n._key,null,n.converter);throw ue(18433,{doc:i})})}set(e,n,r){const s=ki(e,this._firestore),i=u0(s.converter,n,r),o=r0(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=ki(e,this._firestore);let o;return o=typeof(n=qe(n))=="string"||n instanceof Fl?jS(this._dataReader,"Transaction.update",i._key,n,r,s):BS(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=ki(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends tP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ki(e,this._firestore),r=new od(this._firestore);return super.get(e).then(s=>new id(this._firestore,r,n._key,s._document,new ks(!1,!1),n.converter))}}function rP(t,e,n){t=ts(t,Po);const r=Object.assign(Object.assign({},eP),n);return function(i){if(i.maxAttempts<1)throw new Q(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,l){const c=new Cn;return i.asyncQueue.enqueueAndForget(async()=>{const u=await DS(i);new CS(i.asyncQueue,u,l,o,c).$u()}),c.promise}(Ul(t),s=>e(new nP(t,s)),r)}function qm(t){return new Qh("increment",t)}(function(e,n=!0){(function(s){si=s})(ls),Wn(new Dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Po(new q2(r.getProvider("auth-internal")),new G2(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fn(Hp,zp,e),fn(Hp,zp,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebasestorage.googleapis.com",f0="storageBucket",sP=2*60*1e3,iP=10*60*1e3,oP=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Nn{constructor(e,n,r=0){super(xc(e),`Firebase Storage: ${n} (${xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function xc(t){return"storage/"+t}function ld(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(je.UNKNOWN,t)}function aP(t){return new Xe(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lP(t){return new Xe(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(je.UNAUTHENTICATED,t)}function uP(){return new Xe(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hP(t){return new Xe(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function p0(){return new Xe(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m0(){return new Xe(je.CANCELED,"User canceled the upload/download.")}function dP(t){return new Xe(je.INVALID_URL,"Invalid URL '"+t+"'.")}function fP(t){return new Xe(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pP(){return new Xe(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+f0+"' property when initializing the app?")}function g0(){return new Xe(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mP(){return new Xe(je.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function gP(){return new Xe(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _P(t){return new Xe(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pu(t){return new Xe(je.INVALID_ARGUMENT,t)}function _0(){return new Xe(je.APP_DELETED,"The Firebase app was deleted.")}function yP(t){return new Xe(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zi(t,e){return new Xe(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bi(t){throw new Xe(je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw fP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},P=n===d0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${S}`,"i"),O=[{regex:l,indices:c,postModify:i},{regex:g,indices:R,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<O.length;L++){const ie=O[L],ee=ie.regex.exec(e);if(ee){const b=ee[ie.indices.bucket];let v=ee[ie.indices.path];v||(v=""),r=new Xt(b,v),ie.postModify(r);break}}if(r==null)throw dP(e);return r}}class vP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...S){u||(u=!0,e.apply(null,S))}function f(S){s=setTimeout(()=>{s=null,t(g,c())},S)}function m(){i&&clearTimeout(i)}function g(S,...U){if(u){m();return}if(S){m(),d.call(null,S,...U);return}if(c()||o){m(),d.call(null,S,...U);return}r<64&&(r*=2);let O;l===1?(l=2,O=0):O=(r+Math.random())*1e3,f(O)}let R=!1;function P(S){R||(R=!0,m(),!u&&(s!==null?(S||(l=2),clearTimeout(s),f(0)):S||(l=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function TP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){return t!==void 0}function IP(t){return typeof t=="function"}function AP(t){return typeof t=="object"&&!Array.isArray(t)}function Hl(t){return typeof t=="string"||t instanceof String}function Hm(t){return cd()&&t instanceof Blob}function cd(){return typeof Blob<"u"}function zm(t,e,n,r){if(r<e)throw Pu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function y0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
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
 */function v0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,s,i,o,l,c,u,d,f,m=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new oa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Qr.NO_ERROR,c=i.getStatus();if(!l||v0(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Qr.ABORT;r(!1,new oa(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new oa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());EP(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=ld();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?_0():m0();o(c)}else{const c=p0();o(c)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=wP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function RP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kP(t,e,n,r,s,i,o=!0,l=!1){const c=y0(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return SP(d,e),RP(d,n),CP(d,i),PP(d,r),new bP(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xP(...t){const e=DP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cd())return new Blob(t);throw new Xe(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function NP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nc{constructor(e,n){this.data=e,this.contentType=n||null}}function VP(t,e){switch(t){case In.RAW:return new Nc(w0(e));case In.BASE64:case In.BASE64URL:return new Nc(T0(t,e));case In.DATA_URL:return new Nc(LP(e),UP(e))}throw ld()}function w0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function MP(t){let e;try{e=decodeURIComponent(t)}catch{throw zi(In.DATA_URL,"Malformed data URL.")}return w0(e)}function T0(t,e){switch(t){case In.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OP(e)}catch(s){throw s.message.includes("polyfill")?s:zi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class E0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zi(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=FP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function LP(t){const e=new E0(t);return e.base64?T0(In.BASE64,e.rest):MP(e.rest)}function UP(t){return new E0(t).contentType}function FP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){let r=0,s="";Hm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hm(this.data_)){const r=this.data_,s=NP(r,e,n);return s===null?null:new _r(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _r(r,!0)}}static getBlob(...e){if(cd()){const n=e.map(r=>r instanceof _r?r.data_:r);return new _r(xP.apply(null,n))}else{const n=e.map(o=>Hl(o)?VP(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new _r(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){let e;try{e=JSON.parse(t)}catch{return null}return AP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function A0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t,e){return e}class Nt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||jP}}let aa=null;function qP(t){return!Hl(t)||t.length<2?t:A0(t)}function b0(){if(aa)return aa;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(i,o){return qP(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Nt("size");return s.xform=r,t.push(s),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),aa=t,aa}function HP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return HP(r,t),r}function R0(t,e,n){const r=I0(e);return r===null?null:zP(t,r,n)}function GP(t,e,n,r){const s=I0(e);if(s===null||!Hl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=Do(m,n,r),R=y0({alt:"media",token:u});return g+R})[0]}function C0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class li{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!t)throw ld()}function ud(t,e){function n(r,s){const i=R0(t,s,e);return qn(i!==null),i}return n}function WP(t,e){function n(r,s){const i=R0(t,s,e);return qn(i!==null),GP(i,s,t.host,t._protocol)}return n}function xo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=uP():s=cP():n.getStatus()===402?s=lP(t.bucket):n.getStatus()===403?s=hP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function S0(t){const e=xo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aP(t.path)),i.serverResponse=s.serverResponse,i}return n}function KP(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new li(s,i,ud(t,n),o);return l.errorHandler=S0(e),l}function QP(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new li(s,i,WP(t,n),o);return l.errorHandler=S0(e),l}function XP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function P0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=XP(null,e)),r}function YP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let O="";for(let L=0;L<2;L++)O=O+Math.random().toString().slice(2);return O}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=P0(e,r,s),d=C0(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=_r.getBlob(f,r,m);if(g===null)throw g0();const R={name:u.fullPath},P=Do(i,t.host,t._protocol),S="POST",U=t.maxUploadRetryTime,x=new li(P,S,ud(t,n),U);return x.urlParams=R,x.headers=o,x.body=g.uploadData(),x.errorHandler=xo(e),x}class nl{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function hd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qn(!1)}return qn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function JP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=P0(e,r,s),l={name:o.fullPath},c=Do(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=C0(o,n),m=t.maxUploadRetryTime;function g(P){hd(P);let S;try{S=P.getResponseHeader("X-Goog-Upload-URL")}catch{qn(!1)}return qn(Hl(S)),S}const R=new li(c,u,g,m);return R.urlParams=l,R.headers=d,R.body=f,R.errorHandler=xo(e),R}function ZP(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=hd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qn(!1)}f||qn(!1);const m=Number(f);return qn(!isNaN(m)),new nl(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,c=new li(n,o,i,l);return c.headers=s,c.errorHandler=xo(e),c}const Gm=256*1024;function e4(t,e,n,r,s,i,o,l){const c=new nl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw mP();const u=c.total-c.current;let d=u;s>0&&(d=Math.min(d,s));const f=c.current,m=f+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const R={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},P=r.slice(f,m);if(P===null)throw g0();function S(L,ie){const ee=hd(L,["active","final"]),b=c.current+d,v=r.size();let y;return ee==="final"?y=ud(e,i)(L,ie):y=null,new nl(b,v,ee==="final",y)}const U="POST",x=e.maxUploadRetryTime,O=new li(n,U,S,x);return O.headers=R,O.body=P.uploadData(),O.progressCallback=l||null,O.errorHandler=xo(t),O}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Oc(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class n4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw bi("cannot .send() more than once");if(as(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class r4 extends n4{initXhr(){this.xhr_.responseType="text"}}function Ss(){return new r4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=b0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(je.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(v0(s.status,[]))if(i)s=p0();else{this.sleepTime=Math.max(this.sleepTime*2,oP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(je.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=JP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=ZP(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ss,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Gm*this._chunkMultiplier,n=new nl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=e4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ss,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Gm*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=KP(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=YP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=m0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Oc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new t4(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Oc(this._state)){case Bt.SUCCESS:vs(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;vs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Oc(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&vs(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&vs(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&vs(e.error.bind(e,this._error))();break;default:e.error&&vs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A0(this._location.path)}get storage(){return this._service}get parent(){const e=$P(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yP(e)}}function i4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new s4(t,new _r(e),n)}function o4(t){t._throwIfRoot("getDownloadURL");const e=QP(t.storage,t._location,b0());return t.storage.makeRequestWithTokens(e,Ss).then(n=>{if(n===null)throw gP();return n})}function a4(t,e){const n=BP(t._location.path,e),r=new Xt(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t){return/^[A-Za-z]+:\/\//.test(t)}function c4(t,e){return new rs(t,e)}function k0(t,e){if(t instanceof dd){const n=t;if(n._bucket==null)throw pP();const r=new rs(n,n._bucket);return e!=null?k0(r,e):r}else return e!==void 0?a4(t,e):t}function u4(t,e){if(e&&l4(e)){if(t instanceof dd)return c4(t,e);throw Pu("To use ref(service, url), the first argument must be a Storage instance.")}else return k0(t,e)}function Wm(t,e){const n=e==null?void 0:e[f0];return n==null?null:Xt.makeFromBucketSpec(n,t)}function h4(t,e,n,r={}){t.host=`${e}:${n}`;const s=as(e);s&&(ah(`https://${t.host}`),lh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:z_(i,t.app.options.projectId))}class dd{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=d0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sP,this._maxUploadRetryTime=iP,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=Wm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=Wm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new vP(_0());{const o=kP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Km="@firebase/storage",Qm="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="storage";function d4(t,e,n){return t=qe(t),i4(t,e,n)}function f4(t){return t=qe(t),o4(t)}function p4(t,e){return t=qe(t),u4(t,e)}function m4(t=wl(),e){t=qe(t);const r=ni(t,D0).getImmediate({identifier:e}),s=j_("storage");return s&&g4(r,...s),r}function g4(t,e,n,r={}){h4(t,e,n,r)}function _4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dd(n,r,s,e,ls)}function y4(){Wn(new Dn(D0,_4,"PUBLIC").setMultipleInstances(!0)),fn(Km,Qm,""),fn(Km,Qm,"esm2017")}y4();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map,x0={activated:!1,tokenObservers:[]},v4={initialized:!1,enabled:!1};function lt(t){return ku.get(t)||Object.assign({},x0)}function w4(t,e){return ku.set(t,e),ku.get(t)}function zl(){return v4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="https://content-firebaseappcheck.googleapis.com/v1",T4="exchangeRecaptchaV3Token",E4="exchangeDebugToken",Xm={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},I4=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new no,this.pending.promise.catch(n=>{}),await b4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new no,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function b4(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},qt=new ti("appCheck","AppCheck",R4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function fd(t){if(!lt(t).activated)throw qt.create("use-before-activation",{appName:t.name})}function O0(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=la(n)+"d:"),r&&(o+=la(r)+"h:"),o+=la(s)+"m:"+la(i)+"s",o}function la(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(f){throw qt.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw qt.create("fetch-status-error",{httpStatus:o.status});let l;try{l=await o.json()}catch(f){throw qt.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const c=l.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw qt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const u=Number(c[1])*1e3,d=Date.now();return{token:l.token,expireTimeMillis:d+u,issuedAtTimeMillis:d}}function C4(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${N0}/projects/${n}/apps/${r}:${T4}?key=${s}`,body:{recaptcha_v3_token:e}}}function V0(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${N0}/projects/${n}/apps/${r}:${E4}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4="firebase-app-check-database",P4=1,mo="firebase-app-check-store",M0="debug-token";let ca=null;function L0(){return ca||(ca=new Promise((t,e)=>{try{const n=indexedDB.open(S4,P4);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(qt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(mo,{keyPath:"compositeKey"})}}}catch(n){e(qt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ca)}function k4(t){return F0($0(t))}function D4(t,e){return U0($0(t),e)}function x4(t){return U0(M0,t)}function N4(){return F0(M0)}async function U0(t,e){const r=(await L0()).transaction(mo,"readwrite"),i=r.objectStore(mo).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;l(qt.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function F0(t){const n=(await L0()).transaction(mo,"readonly"),s=n.objectStore(mo).get(t);return new Promise((i,o)=>{s.onsuccess=l=>{const c=l.target.result;i(c?c.value:void 0)},n.onerror=l=>{var c;o(qt.create("storage-get",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function $0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new vl("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(t){if(ch()){let e;try{e=await k4(t)}catch(n){vr.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Vc(t,e){return ch()?D4(t,e).catch(n=>{vr.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function V4(){let t;try{t=await N4()}catch{}if(t)return t;{const e=crypto.randomUUID();return x4(e).catch(n=>vr.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return zl().enabled}async function gd(){const t=zl();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function M4(){const t=$_(),e=zl();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new no;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(V4())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4={error:"UNKNOWN_ERROR"};function U4(t){return oh.encodeString(JSON.stringify(t),!1)}async function Du(t,e=!1,n=!1){const r=t.app;fd(r);const s=lt(r);let i=s.token,o;if(i&&!Ds(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Ds(u)?i=u:await Vc(r,void 0))}if(!e&&i&&Ds(i))return{token:i.token};let l=!1;if(md())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=pd(V0(r,await gd()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),l=!0);const u=await s.exchangeTokenPromise;return await Vc(r,u),s.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?vr.warn(u.message):n&&vr.error(u),Mc(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),i=await lt(r).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?vr.warn(u.message):n&&vr.error(u),o=u}let c;return i?o?Ds(i)?c={token:i.token,internalError:o}:c=Mc(o):(c={token:i.token},s.token=i,await Vc(r,i)):c=Mc(o),l&&q0(r,c),c}async function F4(t){const e=t.app;fd(e);const{provider:n}=lt(e);if(md()){const r=await gd(),{token:s}=await pd(V0(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function B0(t,e,n,r){const{app:s}=t,i=lt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ds(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Jm(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Jm(t))}function j0(t,e){const n=lt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Jm(t){const{app:e}=t,n=lt(e);let r=n.tokenRefresher;r||(r=$4(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function $4(t){const{app:e}=t;return new A4(async()=>{const n=lt(e);let r;if(n.token?r=await Du(t,!0):r=await Du(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=lt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Xm.RETRIAL_MIN_WAIT,Xm.RETRIAL_MAX_WAIT)}function q0(t,e){const n=lt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ds(t){return t.expireTimeMillis-Date.now()>0}function Mc(t){return{token:U4(L4),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=lt(this.app);for(const n of e)j0(this.app,n.next);return Promise.resolve()}}function j4(t,e){return new B4(t,e)}function q4(t){return{getToken:e=>Du(t,e),getLimitedUseToken:()=>F4(t),addTokenListener:e=>B0(t,"INTERNAL",e),removeTokenListener:e=>j0(t.app,e)}}const H4="@firebase/app-check",z4="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4="https://www.google.com/recaptcha/api.js";function W4(t,e){const n=new no,r=lt(t);r.reCAPTCHAState={initialized:n};const s=K4(t),i=Ym(!1);return i?Zm(t,e,i,s,n):Y4(()=>{const o=Ym(!1);if(!o)throw new Error("no recaptcha");Zm(t,e,o,s,n)}),n.promise}function Zm(t,e,n,r,s){n.ready(()=>{X4(t,e,n,r),s.resolve(n)})}function K4(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Q4(t){fd(t);const n=await lt(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=lt(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function X4(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{lt(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{lt(t).reCAPTCHAState.succeeded=!1}}),i=lt(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function Y4(t){const e=document.createElement("script");e.src=G4,e.onload=t,document.head.appendChild(e)}/**
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
 */class _d{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;Z4(this._throttleData);const s=await Q4(this._app).catch(o=>{throw qt.create("recaptcha-error")});if(!(!((e=lt(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw qt.create("recaptcha-error");let i;try{i=await pd(C4(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=J4(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),qt.create("initial-throttle",{time:O0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=ni(e,"heartbeat"),W4(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof _d?this._siteKey===e._siteKey:!1}}function J4(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+I4,httpStatus:t};{const n=e?e.backoffCount:0,r=kI(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Z4(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw qt.create("throttled",{time:O0(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t=wl(),e){t=qe(t);const n=ni(t,"app-check");if(zl().initialized||M4(),md()&&gd().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw qt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return tk(t,e.provider,e.isTokenAutoRefreshEnabled),lt(t).isTokenAutoRefreshEnabled&&B0(r,"INTERNAL",()=>{}),r}function tk(t,e,n=!1){const r=w4(t,Object.assign({},x0));r.activated=!0,r.provider=e,r.cachedTokenPromise=O4(t).then(s=>(s&&Ds(s)&&(r.token=s,q0(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&vr.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const nk="app-check",eg="app-check-internal";function rk(){Wn(new Dn(nk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return j4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(eg).initialize()})),Wn(new Dn(eg,t=>{const e=t.getProvider("app-check").getImmediate();return q4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),fn(H4,z4)}rk();const sk={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},Gl=K_(sk),Pn=MS(Gl,"bha-brother-shout-433"),go=F2(Gl),ik=m4(Gl);ek(Gl,{provider:new _d("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const yd=Ie(null),H0=Fe(()=>{var t;return(t=yd.value)==null?void 0:t.uid}),ok=Fe(()=>z0(H0.value)),z0=t=>t?"Bhai "+t.slice(-3):null;Cb(go,t=>{yd.value=t});function ds(){return{userId:H0,currentUser:yd,userName:ok,getUserName:z0,signInAnonymously:()=>yy(go),logout:()=>Sb(go)}}const xu=Ie(0),Ra=ei([]);let ak=0;function un(t,e="info",n=5e3){const r=ak++;Ra.push({id:r,message:t,type:e}),n&&setTimeout(()=>{const s=Ra.findIndex(i=>i.id===r);s!==-1&&Ra.splice(s,1)},n)}const lk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function ck(t,e){return z(),Z("svg",lk,e[0]||(e[0]=[V("path",{d:"M3 20v-6l8-2-8-2V4l19 8z"},null,-1)]))}const G0={render:ck},_t=[];for(let t=0;t<256;++t)_t.push((t+256).toString(16).slice(1));function uk(t,e=0){return(_t[t[e+0]]+_t[t[e+1]]+_t[t[e+2]]+_t[t[e+3]]+"-"+_t[t[e+4]]+_t[t[e+5]]+"-"+_t[t[e+6]]+_t[t[e+7]]+"-"+_t[t[e+8]]+_t[t[e+9]]+"-"+_t[t[e+10]]+_t[t[e+11]]+_t[t[e+12]]+_t[t[e+13]]+_t[t[e+14]]+_t[t[e+15]]).toLowerCase()}let Lc;const hk=new Uint8Array(16);function dk(){if(!Lc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Lc=crypto.getRandomValues.bind(crypto)}return Lc(hk)}const fk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),tg={randomUUID:fk};function pk(t,e,n){var s;if(tg.randomUUID&&!t)return tg.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??dk();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,uk(r)}const mk={class:"photo-gallery"},gk={class:"photo-gallery__photos"},_k={class:"photo-gallery__photos__item add-image"},yk={class:"aspect-wide"},vk={class:"aspect-wide__wrap flex"},wk={class:"uploader"},Tk={class:"aspect-wide"},Ek=["progress"],Ik=["src"],Ak=et({__name:"PhotoUploader",emits:["change"],setup(t,{emit:e}){const n=e,{currentUser:r,signInAnonymously:s}=ds(),i=Ie(4),o=Ie([]),l=Fe(()=>o.value.slice(0,i.value-1)),c=Fe(()=>o.value.length>l.value.length),u=async f=>{var R;if(!r.value)try{await s()}catch(P){console.error(P),un("Can not get private ID","error")}if(!r.value){un("Please sign in to upload files","error");return}const m=((R=r.value)==null?void 0:R.uid)||"anonymous",g=f.target.files;g&&Array.from(g).forEach(P=>{const S=ei({progress:0,url:null});o.value.push(S);const U=pk(),x=p4(ik,`userId/${m}/${U}_${P.name}`),O=d4(x,P);O.on("state_changed",L=>{S.progress=Math.round(L.bytesTransferred/L.totalBytes*100)},L=>{un(`Upload failed for ${P.name}:`,"error")},async()=>{S.url=await f4(O.snapshot.ref),n("change",o.value.map(L=>L.url))})})},d=()=>{c.value=!0,un("Preview opened","info")};return(f,m)=>(z(),Z("div",mk,[V("div",gk,[V("div",_k,[V("div",yk,[V("div",vk,[V("label",wk,[m[0]||(m[0]=V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24"},[V("path",{fill:"currentColor",d:"m12.586 0l-1.604 3.906H0v19.342h16.103v-.899l4.03 1.65l7.346-17.894zM1.588 18.467V5.541h12.926v12.926zm11.114-14.56l.736-1.79l11.958 4.906l-4.906 11.958l-4.379-1.798V3.908z"}),V("path",{fill:"currentColor",d:"M9.858 7.85a1.367 1.367 0 1 0 1.733.843l.003.01a1.37 1.37 0 0 0-1.746-.85z"}),V("path",{fill:"currentColor",d:"m12.632 9.601l-.589-.574l.503-.651l-.8-.202l.116-.814l-.79.225l-.31-.767l-.574.589l-.65-.503l-.202.8l-.814-.116l.225.79l-.767.31l.589.574l-.504.65l.8.202l-.116.814l.79-.225l.31.767l.573-.589l.651.504l.202-.8l.814.116l-.225-.79zm-1.883.837a1.367 1.367 0 1 1 .849-1.746l.003.01a1.374 1.374 0 0 1-.842 1.734zm-4.805-.697l-3.882 5.13v2.712h9.826zm8.161 3.348l-1-1.326l-2.4 3.178l1.704 2.247l.295.395h1.402zm6.647-4.828a2.2 2.2 0 0 0-.532-.063l-.077.001h.004a1.73 1.73 0 0 1 1.546-.174l-.012-.004a1.4 1.4 0 0 0-.296-.607l.002.002a1.66 1.66 0 0 0-2.341-.031q-.159.136-.284.298l-.003.005a1.7 1.7 0 0 0-.238-.246l-.002-.002a1.98 1.98 0 0 0-1.935-.453l.014-.004v1.03c.373.087.697.26.962.498l-.002-.002q.18.158.316.351l.004.006a1.84 1.84 0 0 0-1.29-.434h.004v1.573a1.82 1.82 0 0 1 1.6-.011l-.011-.005v.046a12.5 12.5 0 0 1-1.613 2.988l.024-.035v2.774c.938-.954 1.558-2.821 2.1-5.587a1.995 1.995 0 0 1 .023 3.35l-.008.005a2 2 0 0 0 .878.079l-.01.001a2.001 2.001 0 0 0 .317-3.894l-.014-.004q.285.003.551.066l-.017-.003a2.25 2.25 0 0 1 1.692 1.441l.005.016c.176-.195.306-.436.37-.702l.002-.011a2.03 2.03 0 0 0-1.719-2.258z"})],-1)),m[1]||(m[1]=Ze(" যোগ করুন ")),V("input",{type:"file",multiple:"",onChange:u},null,32)])])])]),(z(!0),Z(Se,null,os(l.value,(g,R)=>(z(),Z("div",{key:R,class:"photo-gallery__photos__item"},[V("div",Tk,[V("div",{class:Or(["aspect-wide__wrap",{skeleton:g.progress<100}]),progress:g.progress},[g.url?(z(),Z("img",{key:0,src:g.url,alt:"Uploaded file",class:"photo-image"},null,8,Ik)):ft("",!0),c.value&&l.value.length-1==R?(z(),Z("div",{key:1,class:"photo-gallery__photos__blury__counter",onClick:d},[V("i",null,"+"+Yt(o.value.length-l.value.length+1),1)])):ft("",!0)],10,Ek)])]))),128))])]))}}),bk=Qe(Ak,[["__scopeId","data-v-9b912d5d"]]),Rk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function Ck(t,e){return z(),Z("svg",Rk,e[0]||(e[0]=[V("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8",opacity:".5"},null,-1),V("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8"},[V("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))}const Sk={render:Ck},W0=et({__name:"Btn",props:{disabled:{type:Boolean},loading:{type:Boolean}},setup(t){return(e,n)=>(z(),Z("button",null,[e.loading?(z(),nt(se(Sk),{key:0,width:"24",height:"24"})):Xi(e.$slots,"default",{key:1})]))}}),Pk={class:"post-add flex flex-col flex-center"},kk={key:0,class:"post-add__form flex flex-col"},Dk={class:"header"},xk={class:"body flex flex-col flex-grow"},Nk={class:"post-add__ctrl flex-center"},Ok=et({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=ds(),r=Ie(!1),s=Ie(!1),i=Ie([]),o=Ie(""),l=Fe(()=>!s.value&&(o.value.trim()!==""||i.value.length>0)),c=async()=>{await d(o.value.trim())},u=()=>{r.value=!1,o.value="",s.value=!1},d=async m=>{if(s.value=!0,!e.value)try{await n()}catch(g){console.error(g),un("Can not get private ID","error")}h0(Zs(Pn,"shouts"),{text:m,timestamp:new Date,userId:e.value.uid,files:i.value}),u(),xu.value=xu.value+1},f=m=>{i.value=[...m]};return(m,g)=>(z(),Z("section",Pk,[r.value?(z(),Z("div",kk,[V("div",Dk,[V("div",{class:"flex flex-center gap-1"},[V("button",{class:"btn",onClick:u},g[2]||(g[2]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[V("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),g[3]||(g[3]=V("h2",null,"নতুন পোস্ট",-1))]),re(W0,{onClick:c,loading:s.value,class:"btn btn__primary",disabled:!l.value},{default:zt(()=>[re(se(G0),{width:"24",height:"24"})]),_:1},8,["loading","disabled"])]),V("div",xk,[Vg(V("textarea",{autofocus:"",tabindex:"0","onUpdate:modelValue":g[0]||(g[0]=R=>o.value=R),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[I_,o.value]]),re(bk,{onChange:f})])])):ft("",!0),V("div",Nk,[V("button",{class:"btn btn__primary",onClick:g[1]||(g[1]=R=>r.value=!0)},g[4]||(g[4]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[V("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),Vk={class:"right flex flex-center gap-1"},Mk=et({__name:"AppHeader",setup(t){return(e,n)=>{const r=yo("router-link");return z(),Z("header",null,[re(r,{class:"brand",to:{name:"home"}},{default:zt(()=>n[0]||(n[0]=[V("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[V("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),V("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),V("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),V("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),V("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),V("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),V("div",Vk,[re(Ok)])])}}}),Lk=Qe(Mk,[["__scopeId","data-v-98e63b3d"]]),Uk={};function Fk(t,e){const n=yo("RouterLink");return z(),Z("footer",null,[re(n,{to:"/terms"},{default:zt(()=>e[0]||(e[0]=[Ze("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=Ze(" | ")),re(n,{to:"/privacy"},{default:zt(()=>e[1]||(e[1]=[Ze("Privacy Policy")])),_:1,__:[1]})])}const $k=Qe(Uk,[["render",Fk],["__scopeId","data-v-9677e4fd"]]),Bk={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=yo("router-view");return z(),Z(Se,null,[re(Lk),V("main",null,[re(r)]),re($k)],64)}}},jk=Qe(Bk,[["__scopeId","data-v-b21eda16"]]),qk={};function Hk(t,e){return z(),Z("section",null,e[0]||(e[0]=[V("h2",null,"About",-1),V("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const zk=Qe(qk,[["render",Hk]]),Gk={},Wk={class:"loader"};function Kk(t,e){return z(),Z("div",Wk)}const K0=Qe(Gk,[["render",Kk]]),Qk={key:0,class:"modal fixed inset-0 z-50 flex items-center justify-center"},Q0={__name:"modal",props:{show:Boolean},emits:["close"],setup(t,{emit:e}){const n=e,r=Ie(null),s=()=>n("close"),i=l=>{r.value&&!r.value.contains(l.target)&&s()},o=l=>{l.key==="Escape"&&s()};return is(()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",o)}),Zu(()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",o)}),(l,c)=>(z(),nt(Ug,{to:"body"},[t.show?(z(),Z("div",Qk,[V("div",{class:"absolute backrdop w-full h-full",onClick:s}),V("button",{onClick:s,class:"absolute btn-close"},c[0]||(c[0]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[V("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),V("div",{ref_key:"modalRef",ref:r,class:"relative z-10 max-w-md w-full"},[Xi(l.$slots,"default")],512)])):ft("",!0)]))}},Xk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function Yk(t,e){return z(),Z("svg",Xk,e[0]||(e[0]=[V("path",{fill:"currentColor",d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"},null,-1)]))}const Jk={render:Yk},Zk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function e6(t,e){return z(),Z("svg",Zk,e[0]||(e[0]=[V("path",{fill:"currentColor",d:"M13.794 2.642c4.68.9 7.86 4.954 7.7 9.773-.147 4.444-3.742 8.318-8.27 8.873a9.55 9.55 0 0 1-5.318-.86 1.37 1.37 0 0 0-.84-.082c-1.356.325-2.701.694-4.05 1.045-.148.038-.3.064-.516.109.405-1.482.783-2.904 1.187-4.32.103-.358.074-.644-.091-.995-1.575-3.345-1.438-6.627.708-9.66 2.151-3.042 5.187-4.34 8.92-3.96.176.017.351.042.57.077m5.914 11.004c.268-1.096.3-2.207.038-3.298-.788-3.288-2.834-5.419-6.16-6.093-3.263-.66-6.003.44-7.936 3.138-1.936 2.702-1.978 5.6-.38 8.503.205.373.26.68.135 1.078-.228.728-.405 1.472-.628 2.298.925-.24 1.736-.47 2.558-.65.233-.051.538-.024.742.088 4.696 2.585 10.277.2 11.63-5.064"},null,-1),V("path",{fill:"currentColor",d:"M9.745 8.158c.179.427.3.84.51 1.203.3.518.209.953-.205 1.318-.445.392-.379.725-.06 1.175.735 1.036 1.658 1.813 2.823 2.322.32.14.563.164.77-.157.086-.132.206-.24.306-.364.583-.726.4-.72 1.324-.319.291.127.582.262.851.428.27.165.68.335.732.57.118.52-.048 1.048-.482 1.434-.8.712-1.72.83-2.725.552-2.174-.6-3.846-1.904-5.127-3.71-.452-.637-.856-1.344-1.11-2.078-.308-.894-.09-1.756.546-2.513.375-.445.83-.545 1.325-.426.199.048.338.344.522.565"},null,-1)]))}const t6={render:e6},n6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function r6(t,e){return z(),Z("svg",n6,e[0]||(e[0]=[V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98-3.552.23-6.771-1.959-8.633-4.875-1.236 4.197-.09 9.251 3.013 12.366 0 1.176-3 1.878-4.5 2.029",color:"currentColor"},null,-1)]))}const s6={render:r6},i6={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"};function o6(t,e){return z(),Z("svg",i6,e[0]||(e[0]=[V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m15.988 13 3.902-3.902c1.437-1.437 1.485-3.718.107-5.095-1.377-1.378-3.658-1.33-5.095.107L11 8.012m2 7.95-3.892 3.88c-1.432 1.43-3.64 1.615-5.082.107-1.442-1.507-1.326-3.639.107-5.068L8.025 11M9 15l6-6"},null,-1)]))}const a6={render:o6},l6={class:"share"},c6={class:"share-content rounded-lg shadow-lg w-80 p-4 relative bg-2"},u6={class:"flex flex-col"},h6={class:"list-style-none flex flex-col gap-1 m-0 p-0"},d6=et({__name:"BtnShare",props:{postId:{}},setup(t){const e=t,n=Fe(()=>encodeURIComponent(`${window.location.origin}/story/${e.postId}`)),r=Ie(!1),s=encodeURIComponent(document.title||"Check this out!");function i(o){let l="";switch(o){case"facebook":l=`https://www.facebook.com/sharer/sharer.php?u=${n.value}`;break;case"whatsapp":l=`https://wa.me/?text=${s}%20${n.value}`;break;case"twitter":l=`https://twitter.com/intent/tweet?text=${s}&url=${n.value}`;break;case"copy":navigator.clipboard.writeText(n.value).then(()=>un("কপি করা হয়েছে।","info")).catch(()=>un("সমস্যা হয়েছে","error"));return}l&&window.open(l,"_blank"),r.value=!1}return(o,l)=>(z(),Z("div",l6,[V("button",{class:"opener",onClick:l[0]||(l[0]=c=>r.value=!0)},l[6]||(l[6]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[V("path",{d:"M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"})],-1),Ze(" Share ")])),re(Q0,{show:r.value,onClose:l[5]||(l[5]=c=>r.value=!1)},{default:zt(()=>[V("div",c6,[V("div",u6,[l[11]||(l[11]=V("h2",{class:"m-0 text-center"},"Share to",-1)),l[12]||(l[12]=V("div",{class:"border-top mb-4"},null,-1)),V("ul",h6,[V("li",null,[V("button",{onClick:l[1]||(l[1]=c=>i("facebook")),class:"flex gap-1 w-full text-left"},[re(se(Jk),{width:"1.5rem",height:"1.5rem"}),l[7]||(l[7]=Ze(" Facebook "))])]),V("li",null,[V("button",{onClick:l[2]||(l[2]=c=>i("whatsapp")),class:"w-full text-left"},[re(se(t6),{width:"1.5rem",height:"1.5rem"}),l[8]||(l[8]=Ze(" WhatsApp "))])]),V("li",null,[V("button",{onClick:l[3]||(l[3]=c=>i("twitter")),class:"w-full text-left"},[re(se(s6),{width:"1.5rem",height:"1.5rem"}),l[9]||(l[9]=Ze(" Twitter "))])]),V("li",null,[V("button",{onClick:l[4]||(l[4]=c=>i("copy")),class:"w-full text-left"},[re(se(a6),{width:"1.5rem",height:"1.5rem"}),l[10]||(l[10]=Ze(" Copy Link "))])])])])])]),_:1},8,["show"])]))}}),f6=Qe(d6,[["__scopeId","data-v-71472e2b"]]),p6={class:"relative w-full h-full overflow-hidden"},m6={key:0,class:"absolute w-full h-full animate-shimmer rounded"},g6=["src","alt"],Nu=et({__name:"ImageLoader",props:{src:{},alt:{}},setup(t){const e=t,n=Ie(!1);function r(){n.value=!0}return Kr(()=>e.src,(s,i)=>{s!==i&&(n.value=!1)}),(s,i)=>(z(),Z("div",p6,[n.value?ft("",!0):(z(),Z("div",m6)),V("img",{src:s.src,alt:s.alt,onLoad:r,class:Or(["transition-opacity duration-700 ease-in-out w-full h-full object-cover",n.value?"opacity-100":"opacity-0"])},null,42,g6)]))}}),_6={class:"w-full relative"},y6={__name:"ImageSlider",props:{images:{type:Array,required:!0}},setup(t){const e=t,n=Fe(()=>e.images.length>1&&s.value>0),r=Fe(()=>e.images.length>1&&s.value<e.images.length-1),s=Ie(0),i=()=>{s.value=(s.value-1+e.images.length)%e.images.length},o=()=>{s.value=(s.value+1)%e.images.length};return(l,c)=>(z(),Z("div",_6,[re(Nu,{src:t.images[s.value],alt:"image",class:"w-full object-contain rounded"},null,8,["src"]),n.value?(z(),Z("button",{key:0,onClick:i,class:"absolute rounded left"},c[0]||(c[0]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[V("path",{d:"m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"})],-1)]))):ft("",!0),r.value?(z(),Z("button",{key:1,onClick:o,class:"absolute rounded right"},c[1]||(c[1]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48"},[V("path",{d:"M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"})],-1)]))):ft("",!0)]))}},v6=Qe(y6,[["__scopeId","data-v-46569096"]]),w6={class:"photo-gallery"},T6={class:"photo-gallery__photos"},E6={class:"aspect-wide"},I6={class:"aspect-wide__wrap"},A6={class:"aspect-wide"},b6={class:"aspect-wide__wrap"},R6=et({__name:"PhotoGallery",props:{files:{}},setup(t){const e=Ie(!1),n=t,r=Ie(4),s=Fe(()=>{var l;return((l=n.files)==null?void 0:l.slice(0,r.value))??[]}),i=Fe(()=>{var l;return((l=n.files)==null?void 0:l.length)>s.value.length}),o=()=>{un("Preview opened","info")};return(l,c)=>(z(),Z(Se,null,[V("div",w6,[V("div",T6,[l.files.length===1?(z(),Z("div",{key:0,onClick:c[0]||(c[0]=u=>e.value=!0),class:"photo-gallery__photos__item full-size"},[V("div",E6,[V("div",I6,[re(Nu,{src:l.files[0],alt:"Picture"},null,8,["src"])])])])):(z(!0),Z(Se,{key:1},os(s.value,(u,d)=>(z(),Z("div",{key:d,class:"photo-gallery__photos__item",onClick:c[1]||(c[1]=f=>e.value=!0)},[V("div",A6,[V("div",b6,[re(Nu,{src:u,alt:"Picture"},null,8,["src"]),i.value&&s.value.length-1==d?(z(),Z("div",{key:0,class:"photo-gallery__photos__blury__counter",onClick:o},[V("i",null,"+"+Yt(l.files.length-s.value.length+1),1)])):ft("",!0)])])]))),128))])]),re(Q0,{show:e.value,onClose:c[2]||(c[2]=u=>e.value=!1)},{default:zt(()=>[re(v6,{images:n.files},null,8,["images"])]),_:1},8,["show"])],64))}}),C6=Qe(R6,[["__scopeId","data-v-7eeaa322"]]),S6={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function P6(t,e){return z(),Z("svg",S6,e[0]||(e[0]=[V("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const vd={render:P6};var k6=["second","minute","hour","day","week","month","year"];function D6(t,e){if(e===0)return["just now","right now"];var n=k6[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var x6=["秒","分钟","小时","天","周","个月","年"];function N6(t,e){if(e===0)return["刚刚","片刻后"];var n=x6[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var Ou={},X0=function(t,e){Ou[t]=e},O6=function(t){return Ou[t]||Ou.en_US},Uc=[60,60,24,7,365/7/12,12];function ng(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function V6(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=Uc[s]&&s<Uc.length;s++)t/=Uc[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function M6(t,e){var n=e?ng(e):new Date;return(+n-+ng(t))/1e3}var Y0=function(t,e,n){var r=M6(t,n&&n.relativeDate);return V6(r,O6(e))};X0("en_US",D6);X0("zh_CN",N6);const L6={class:"user flex"},U6={class:"author flex"},F6=et({__name:"UserTimestamp",props:{user:{},timestamp:{}},setup(t){return(e,n)=>(z(),Z("div",L6,[re(se(vd),{width:"40",height:"40"}),V("div",U6,[V("span",null,Yt(e.user),1),V("i",null,Yt(se(Y0)(e.timestamp)),1)])]))}}),$6=Qe(F6,[["__scopeId","data-v-047cce0e"]]),B6={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function j6(t,e){return z(),Z("svg",B6,e[0]||(e[0]=[pl('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const Vu={render:j6},q6={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function H6(t,e){return z(),Z("svg",q6,e[0]||(e[0]=[V("g",{fill:"none"},[V("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),V("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),V("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Mu={render:H6},z6={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function G6(t,e){return z(),Z("svg",z6,e[0]||(e[0]=[V("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const Ca={render:G6},W6={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function K6(t,e){return z(),Z("svg",W6,e[0]||(e[0]=[pl('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const Lu={render:K6},Q6={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function X6(t,e){return z(),Z("svg",Q6,[(z(),nt(Kg("style"),null,{default:zt(()=>e[0]||(e[0]=[Ze(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=pl('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const Uu={render:X6},Y6={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function J6(t,e){return z(),Z("svg",Y6,[(z(),nt(Kg("style"),null,{default:zt(()=>e[0]||(e[0]=[Ze(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=pl('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Fu={render:J6};var it=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(it||{});const Z6={key:0,class:"reaction-panel"},e3={class:"wrap flex flex-center"},t3=et({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=ds(),s=Ie(!1),i=Ie(null),o=Ie(e.value||null),l=Fe(()=>{var P;return(P=n.value)==null?void 0:P.uid}),c=()=>{g()||(s.value=!0)},u=()=>{s.value=!1},d=()=>{g()&&(i.value=setTimeout(()=>{s.value=!0},500))},f=()=>{clearTimeout(i.value)},m=async P=>{s.value=!1,o.value=P,await R(P)};function g(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const R=async P=>{const S=e.postId;l.value||await r();const U=el(Pn,"shouts",S),x=el(Pn,`shouts/${S}/reactions`,l.value);await rP(Pn,async O=>{const L=await O.get(x),ie=await O.get(U);if(!ie.exists())throw new Error("Shout not found");ie.data().reactionSummary;let ee=null;if(L.exists()&&(ee=L.data().type),ee===P)return;O.set(x,{type:P,timestamp:new Date});const b={[`reactionSummary.${P}`]:qm(1)};ee&&(b[`reactionSummary.${ee}`]=qm(-1)),O.update(U,b)})};return Kr(()=>e.value,P=>{o.value=P},{immediate:!0}),(P,S)=>(z(),Z("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:c,onMouseleave:u,onTouchstart:d,onTouchend:f},[V("button",{onClick:S[0]||(S[0]=U=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===se(it).Like?(z(),Z(Se,{key:1},[re(se(Ca),{width:"18",height:"20",fill:"#1E90FF"}),S[8]||(S[8]=V("span",{class:"color-blue"},"Like",-1))],64)):o.value===se(it).Haha?(z(),Z(Se,{key:2},[re(se(Uu),{width:"22",height:"22"}),S[9]||(S[9]=V("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===se(it).Love?(z(),Z(Se,{key:3},[re(se(Mu),{width:"22",height:"22"}),S[10]||(S[10]=Ze()),S[11]||(S[11]=V("span",{class:"color-red"},"Love",-1))],64)):o.value===se(it).Wow?(z(),Z(Se,{key:4},[re(se(Fu),{width:"22",height:"22"}),S[12]||(S[12]=Ze()),S[13]||(S[13]=V("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===se(it).Sad?(z(),Z(Se,{key:5},[re(se(Lu),{width:"22",height:"22"}),S[14]||(S[14]=Ze()),S[15]||(S[15]=V("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===se(it).Angry?(z(),Z(Se,{key:6},[re(se(Vu),{width:"22",height:"22"}),S[16]||(S[16]=Ze()),S[17]||(S[17]=V("span",{class:"color-red"},"Angry",-1))],64)):ft("",!0):(z(),Z(Se,{key:0},[re(se(Ca),{width:"18",height:"18"}),S[7]||(S[7]=Ze(" Like "))],64))]),s.value?(z(),Z("div",Z6,[V("div",e3,[V("button",{onClick:S[1]||(S[1]=U=>m(se(it).Like))},[re(se(Ca),{width:"20",height:"20",fill:"#1E90FF"})]),V("button",{onClick:S[2]||(S[2]=U=>m(se(it).Haha))},[re(se(Uu),{width:"24",height:"24"})]),V("button",{onClick:S[3]||(S[3]=U=>m(se(it).Love))},[re(se(Mu),{width:"30",height:"30"})]),V("button",{onClick:S[4]||(S[4]=U=>m(se(it).Wow))},[re(se(Fu),{width:"24",height:"24"})]),V("button",{onClick:S[5]||(S[5]=U=>m(se(it).Sad))},[re(se(Lu),{width:"28",height:"28"})]),V("button",{onClick:S[6]||(S[6]=U=>m(se(it).Angry))},[re(se(Vu),{width:"26",height:"26"})])])])):ft("",!0)],32))}}),n3=Qe(t3,[["__scopeId","data-v-1a711d4b"]]),r3={key:0,class:"reactions-count"},s3=et({__name:"top",props:{totalReactions:{},topReactions:{}},setup(t){return(e,n)=>e.totalReactions>0?(z(),Z("div",r3,[V("span",null,[(z(!0),Z(Se,null,os(e.topReactions,(r,s)=>(z(),Z(Se,{key:s},[r===se(it).Like?(z(),nt(se(Ca),{key:0,fill:"#1E90FF"})):r===se(it).Haha?(z(),nt(se(Uu),{key:1})):r===se(it).Love?(z(),nt(se(Mu),{key:2})):r===se(it).Wow?(z(),nt(se(Fu),{key:3})):r===se(it).Sad?(z(),nt(se(Lu),{key:4})):r===se(it).Angry?(z(),nt(se(Vu),{key:5})):ft("",!0)],64))),128))]),Ze(" "+Yt(e.totalReactions),1)])):ft("",!0)}}),i3=Qe(s3,[["__scopeId","data-v-47ff09c1"]]),o3=et({__name:"item",props:{variant:{},width:{},height:{},borderRadius:{}},setup(t){return(e,n)=>(z(),Z("div",{class:Or(["animate-shimmer",`skeleton-${e.variant}`]),style:ll({width:e.width,height:e.height,borderRadius:e.borderRadius})},null,6))}}),J0=Qe(o3,[["__scopeId","data-v-0366e7df"]]),a3=et({__name:"index",props:{loading:{type:Boolean}},setup(t){return(e,n)=>e.loading?Xi(e.$slots,"template",{key:0},()=>[(z(),Z(Se,null,os(3,r=>re(J0,{key:r})),64))]):Xi(e.$slots,"default",{key:1})}}),l3={class:"post"},c3={class:"head"},u3={class:"body flex flex-col gap-1"},h3={class:"flex flex-center gap-1 summary"},d3={class:"footer flex justify-between"},f3=et({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=ds(),s=L_(),i=e.item.id,o=Ie([]),l=Ie(!1),c=Fe(()=>{if(r.value&&o.value.length>0){const x=o.value.find(O=>O.id===r.value);if(x)return x.type}return null}),u=Fe(()=>o.value.reduce((x,O)=>x+1,0)||0),d=Fe(()=>{const x={like:0,haha:0,love:0,wow:0,sad:0,poop:0,angry:0};for(const{type:L}of o.value)x[L]++;const O=Math.max(...Object.values(x));return Object.entries(x).filter(([,L])=>L===O).map(([L])=>L)}),f=Ie(null),m=Ie(!1),g=Ie(!1),R=()=>{const x=f.value;x&&(m.value=x.scrollHeight>x.clientHeight)},P=()=>{g.value=!g.value},S=async()=>{l.value=!0;try{const x=await ad(Zs(Pn,"shouts",i,"reactions"));o.value=x.docs.map(O=>({id:O.id,...O.data()}))}catch(x){console.error("Error fetching reactions:",x)}l.value=!1};function U(){s.push("/story/"+i)}return is(()=>{S(),Yu(R),window.addEventListener("resize",R)}),(x,O)=>(z(),Z("div",l3,[V("div",c3,[re($6,{user:se(n)(x.item.userId),timestamp:new Date(x.item.timestamp.seconds*1e3)},null,8,["user","timestamp"])]),V("div",u3,[V("div",null,[V("div",{ref_key:"textRef",ref:f,class:Or(["text-container",{expanded:g.value}])},Yt(x.item.text),3),m.value&&!g.value?(z(),Z("button",{key:0,onClick:P,class:"readmore"}," আরও পড়ুন ")):ft("",!0)]),x.item.files&&x.item.files.length>0?(z(),nt(C6,{key:0,files:x.item.files},null,8,["files"])):ft("",!0)]),V("div",h3,[re(a3,{loading:l.value},{template:zt(()=>[re(J0,{variant:"text",width:"2rem",height:"1.5rem"})]),default:zt(()=>[re(i3,{class:"flex flex-center","total-reactions":u.value,"top-reactions":d.value},null,8,["total-reactions","top-reactions"])]),_:1},8,["loading"])]),O[1]||(O[1]=V("div",{class:"border-top"},null,-1)),V("div",d3,[re(n3,{"post-id":se(i),value:c.value},null,8,["post-id","value"]),V("button",{class:"flex",onClick:U},O[0]||(O[0]=[V("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[V("g",null,[V("g",null,[V("path",{d:"M1.98608 11.1034C1.98608 13.3236 2.78607 15.376 4.13153 16.9992C5.93153 19.238 8.78608 20.6746 11.9861 20.6746C11.9861 20.6746 15.5028 21.9659 17.8427 22.4553C18.6528 22.6248 19.5517 22.0692 19.5517 21.3173C19.5517 20.4026 17.9861 18.753 17.9861 18.753C19.1009 17.959 20.033 16.9462 20.7162 15.7808C21.526 14.3994 21.9861 12.8036 21.9861 11.1034C21.9861 9.39876 21.5255 7.7997 20.7162 6.41587C19.9666 5.13402 18.9178 4.03683 17.6588 3.21143C16.0406 2.12931 14.0952 1.51367 11.9861 1.51367C6.45881 1.51367 1.98608 5.80475 1.98608 11.1034Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])],-1),Ze(" Comment ")])),re(f6,{"post-id":se(i)},null,8,["post-id"])]),Xi(x.$slots,"append",{},void 0,!0)]))}}),Z0=Qe(f3,[["__scopeId","data-v-7e6d9839"]]),p3={key:1,class:"masonry"},rg=10,m3=et({__name:"HomePage",setup(t){const e=Ie(!1),n=Ie([]),r=Ie(null),s=async()=>{let o;e.value=!0,r.value?o=Cu(Zs(Pn,"shouts"),Su("timestamp","desc"),GS(r.value),$m(rg)):o=Cu(Zs(Pn,"shouts"),Su("timestamp","desc"),$m(rg));const l=await ad(o),c=[];for(const u of l.docs){const d=u.data();c.push({id:u.id,...d})}l.empty||(r.value=l.docs[l.docs.length-1]),n.value.push(...c),e.value=!1};return is(s),Kr(xu,async()=>{n.value=[],r.value=null,await s()}),(o,l)=>e.value?(z(),nt(K0,{key:0})):(z(),Z("div",p3,[(z(!0),Z(Se,null,os(n.value,c=>(z(),nt(Z0,{key:c.id,item:c,class:"masonry-item"},null,8,["item"]))),128))]))}}),g3=Qe(m3,[["__scopeId","data-v-70a3c46a"]]),_3={};function y3(t,e){return z(),Z("section",null,e[0]||(e[0]=[V("h2",null,"Privacy Policy",-1),V("p",null,"Privacy Policy content goes here...",-1)]))}const v3=Qe(_3,[["render",y3]]),w3={};function T3(t,e){return z(),Z("section",null,e[0]||(e[0]=[V("h2",null,"Terms and Conditions",-1),V("p",null,"Terms and Conditions content goes here...",-1)]))}const E3=Qe(w3,[["render",T3]]),I3={class:"container"},A3={key:0,class:"identity"},b3={class:"signin"},R3=["disabled"],C3=["disabled"],S3=et({__name:"UserPage",setup(t){const e=L_(),{userId:n,userName:r}=ds(),s=Ie(!1),i=Ie(!1),o=async()=>{s.value=!0;try{const c=await yy(go);s.value=!1}catch(c){console.error("Anonymous sign-in error:",c),alert("Failed to sign in: "+c.message)}},l=async()=>{i.value=!0;try{await go.signOut(),i.value=!1,e.replace({name:"home"})}catch(c){console.error("Sign-out error:",c),alert("Failed to sign out: "+c.message)}};return(c,u)=>(z(),Z("section",I3,[u[1]||(u[1]=V("h2",null,"About you",-1)),se(n)?(z(),Z("div",A3,[Ze(Yt(se(r)),1),u[0]||(u[0]=V("br",null,null,-1)),Ze("ID: "+Yt(se(n)),1)])):ft("",!0),u[2]||(u[2]=V("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),V("div",b3,[se(n)?(z(),Z("button",{key:1,onClick:l,class:"btn btn__primary",disabled:i.value}," Sign out ",8,C3)):(z(),Z("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,R3))])]))}}),P3=Qe(S3,[["__scopeId","data-v-922e1ab5"]]),k3={class:"comment-add flex gap-2 items-center"},D3={class:"flex flex-grow"},x3=et({__name:"Add",props:{postId:{},commentId:{}},emits:["add"],setup(t,{emit:e}){const n=t,r=e,{userId:s,signInAnonymously:i}=ds(),o=Ie(""),l=Ie(null),c=Ie(!1),u=Fe(()=>!c.value&&o.value.trim()!==""),d=async()=>{const f=o.value.trim();if(f){if(c.value=!0,!s.value)try{await i()}catch(m){console.error(m),un("Can not get private ID","error")}try{const m=Zs(Pn,"shouts",n.postId,"comments"),g={content:f,authorId:s.value,parentCommentId:l.value,timestamp:new Date},R=await h0(m,g);o.value="",r("add")}catch(m){console.error("Error comment:",m),un("সমস্যা হয়েছে","error")}c.value=!1}};return(f,m)=>(z(),Z("div",k3,[re(se(vd),{class:"user",width:"48",height:"48"}),V("div",D3,[Vg(V("textarea",{"onUpdate:modelValue":m[0]||(m[0]=g=>o.value=g),placeholder:"আপনার মন্তব্য লিখুন...",class:"comment-input flex-grow",rows:"1"},null,512),[[I_,o.value]]),re(W0,{disabled:!u.value,loading:c.value,onClick:d},{default:zt(()=>[re(se(G0),{width:"18",height:"18"})]),_:1},8,["disabled","loading"])])]))}}),N3=Qe(x3,[["__scopeId","data-v-8c04619b"]]),O3={class:"comment-list flex flex-col gap-1"},V3={key:0,class:"border-top"},M3={class:"comment-item-body bg-2 flex flex-col flex-grow"},L3={class:"comment-item-body-author flex justify-between"},U3={class:"author-name"},F3={class:"timestamp"},$3={class:"content"},B3={key:0,class:"replies"},j3=et({__name:"List",props:{postId:{}},setup(t){const e=t,{getUserName:n}=ds(),r=Ie([]);return is(async()=>{const i=Zs(Pn,"shouts",e.postId,"comments"),o=Cu(i,Su("timestamp","asc")),l=await ad(o),c=[],u={};l.forEach(f=>{const m=f.data(),g={id:f.id,content:m.content,authorId:m.authorId,parentCommentId:m.parentCommentId||null,timestamp:m.timestamp,replies:[]};c.push(g),u[g.id]=g});const d=[];c.forEach(f=>{if(f.parentCommentId){const m=u[f.parentCommentId];m?(m.replies=m.replies||[],m.replies.push(f)):d.push(f)}else d.push(f)}),r.value=d}),(i,o)=>{const l=yo("CommentList");return z(),Z("div",O3,[r.value.length>0?(z(),Z("div",V3)):ft("",!0),(z(!0),Z(Se,null,os(r.value,c=>(z(),Z("div",{key:c.id,class:"comment-item flex"},[re(se(vd),{class:"icon",width:"2.5rem",height:"2.5rem"}),V("div",M3,[V("div",L3,[V("span",U3,Yt(se(n)(c.authorId)),1),V("i",F3,Yt(se(Y0)(new Date(c.timestamp.seconds*1e3))),1)]),V("div",$3,Yt(c.content),1),c.replies.length>0?(z(),Z("div",B3,[re(l,{comments:c.replies},null,8,["comments"])])):ft("",!0)])]))),128))])}}}),q3=Qe(j3,[["__scopeId","data-v-2d8efeb1"]]),H3=et({__name:"StoryPage",setup(t){const n=tI().params.id,r=Array.isArray(n)?n[0]:n,s=Ie(!1),i=Ie(null);Ie(null);const o=Ie(0),l=async()=>{s.value=!0;try{const u=el(Pn,"shouts",r),d=await YS(u);if(d.exists()){const f=d.data();i.value={id:d.id,...f}}}catch{un("পোস্ট পাওয়া যায় নি।","error")}s.value=!1},c=()=>{o.value++};return is(l),(u,d)=>s.value?(z(),nt(K0,{key:0})):(z(),Z(Se,{key:1},[i.value?(z(),Z(Se,{key:0},[re(Z0,{item:i.value},{append:zt(()=>[(z(),nt(q3,{postId:i.value.id,key:o.value},null,8,["postId"]))]),_:1},8,["item"]),re(N3,{postId:i.value.id,onAdd:c,class:"post-add-comment z-10"},null,8,["postId"])],64)):ft("",!0)],64))}}),z3=Qe(H3,[["__scopeId","data-v-8d5aafe1"]]),G3=[{path:"/",component:jk,children:[{path:"",name:"home",component:g3},{path:"about",name:"about",component:zk},{path:"terms",name:"terms",component:E3},{path:"privacy",name:"privacy",component:v3},{path:"user",name:"UserPage",component:P3},{path:"/story/:id",component:z3}]}],W3=ZE({history:SE("/"),routes:G3}),K3={class:"fixed bottom-4 left-4 space-y-2 z-max flex flex-col-reverse"},Q3=et({__name:"Notifications",setup(t){const e={success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600",warning:"bg-yellow-500 text-black"};return(n,r)=>(z(),nt(Ug,{to:"body"},[V("div",K3,[re(FT,{name:"fade",tag:"div",class:"flex flex-col gap-1"},{default:zt(()=>[(z(!0),Z(Se,null,os(se(Ra),s=>(z(),Z("div",{key:s.id,class:Or(["min-w-[200px] px-4 py-2 rounded shadow text-white slide-in-left",e[s.type]])},Yt(s.message),3))),128))]),_:1})])]))}}),X3=Qe(Q3,[["__scopeId","data-v-f244abdc"]]),Y3={install(t){const e=document.createElement("div");document.body.appendChild(e),A_(X3).mount(e)}},wd=A_(YT);wd.use(W3);wd.use(Y3);wd.mount("#app");
