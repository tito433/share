(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Zr=[],an=()=>{},uv=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),_t=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hv=Object.prototype.hasOwnProperty,De=(t,e)=>hv.call(t,e),le=Array.isArray,es=t=>fa(t)==="[object Map]",Dp=t=>fa(t)==="[object Set]",de=t=>typeof t=="function",qe=t=>typeof t=="string",dr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Vp=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),Np=Object.prototype.toString,fa=t=>Np.call(t),fv=t=>fa(t).slice(8,-1),xp=t=>fa(t)==="[object Object]",xl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qs=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dv=/-(\w)/g,zt=da(t=>t.replace(dv,(e,n)=>n?n.toUpperCase():"")),pv=/\B([A-Z])/g,Or=da(t=>t.replace(pv,"-$1").toLowerCase()),pa=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=da(t=>t?`on${pa(t)}`:""),Jn=(t,e)=>!Object.is(t,e),wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$c=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wh;const ga=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?yv(r):Ol(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Le(t))return t}const gv=/;(?![^(]*\))/g,mv=/:([^]+)/,_v=/\/\*[^]*?\*\//g;function yv(t){const e={};return t.replace(_v,"").split(gv).forEach(n=>{if(n){const r=n.split(mv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ml(t){let e="";if(qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Ml(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ev=Dl(vv);function Mp(t){return!!t||t===""}const Lp=t=>!!(t&&t.__v_isRef===!0),ts=t=>qe(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===Np||!de(t.toString))?Lp(t)?ts(t.value):JSON.stringify(t,Fp,2):String(t),Fp=(t,e)=>Lp(e)?Fp(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gc(r,i)+" =>"]=s,n),{})}:Dp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:dr(e)?gc(e):Le(e)&&!le(e)&&!xp(e)?String(e):e,gc=(t,e="")=>{var n;return dr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class Tv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wv(){return Rt}let Oe;const mc=new WeakSet;class Up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mc.has(this)&&(mc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$p(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gh(this),jp(this);const e=Oe,n=Jt;Oe=this,Jt=!0;try{return this.fn()}finally{qp(this),Oe=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,Gh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jc(this)&&this.run()}get dirty(){return jc(this)}}let Bp=0,Ys,Js;function $p(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Ys,Ys=t}function Ll(){Bp++}function Fl(){if(--Bp>0)return;if(Js){let e=Js;for(Js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function jp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ul(r),Iv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function jc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Hp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ui)||(t.globalVersion=ui,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!jc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Jt;Oe=t,Jt=!0;try{jp(t);const s=t.fn(t._value);(e.version===0||Jn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Jt=r,qp(t),t.flags&=-3}}function Ul(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ul(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Iv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const zp=[];function An(){zp.push(Jt),Jt=!1}function bn(){const t=zp.pop();Jt=t===void 0?!0:t}function Gh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let ui=0;class Av{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!Jt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Av(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Kp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,ui++,this.notify(e)}notify(e){Ll();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function Kp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Kp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qc=new WeakMap,Rr=Symbol(""),Hc=Symbol(""),hi=Symbol("");function dt(t,e,n){if(Jt&&Oe){let r=qc.get(t);r||qc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bl),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=qc.get(t);if(!o){ui++;return}const c=l=>{l&&l.trigger()};if(Ll(),e==="clear")o.forEach(c);else{const l=le(t),h=l&&xl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===hi||!dr(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(hi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Rr)),es(t)&&c(o.get(Hc)));break;case"delete":l||(c(o.get(Rr)),es(t)&&c(o.get(Hc)));break;case"set":es(t)&&c(o.get(Rr));break}}Fl()}function qr(t){const e=ke(t);return e===t?e:(dt(e,"iterate",hi),Ht(t)?e:e.map(st))}function ma(t){return dt(t=ke(t),"iterate",hi),t}const bv={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,st)},concat(...t){return qr(this).concat(...t.map(e=>le(e)?qr(e):e))},entries(){return _c(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return gn(this,"every",t,e,void 0,arguments)},filter(t,e){return gn(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return gn(this,"find",t,e,st,arguments)},findIndex(t,e){return gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gn(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return qr(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return gn(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return Qh(this,"reduce",t,e)},reduceRight(t,...e){return Qh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return gn(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return qr(this).toReversed()},toSorted(t){return qr(this).toSorted(t)},toSpliced(...t){return qr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return _c(this,"values",st)}};function _c(t,e,n){const r=ma(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Rv=Array.prototype;function gn(t,e,n,r,s,i){const o=ma(t),c=o!==t&&!Ht(t),l=o[e];if(l!==Rv[e]){const p=l.apply(t,i);return c?st(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,st(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Qh(t,e,n,r){const s=ma(t);let i=n;return s!==t&&(Ht(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,st(c),l,t)}),s[e](i,...r)}function yc(t,e,n){const r=ke(t);dt(r,"iterate",hi);const s=r[e](...n);return(s===-1||s===!1)&&ql(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){An(),Ll();const r=ke(t)[e].apply(t,n);return Fl(),bn(),r}const Sv=Dl("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr));function Pv(t){dr(t)||(t=String(t));const e=ke(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Gp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Fv:Xp:i?Jp:Yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=bv[n]))return l;if(n==="hasOwnProperty")return Pv}const c=Reflect.get(e,n,mt(e)?e:r);return(dr(n)?Wp.has(n):Sv(n))||(s||dt(e,"get",n),i)?c:mt(c)?o&&xl(n)?c:c.value:Le(c)?s?eg(c):_a(c):c}}class Qp extends Gp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=rr(i);if(!Ht(r)&&!rr(r)&&(i=ke(i),r=ke(r)),!le(e)&&mt(i)&&!mt(r))return l?!1:(i.value=r,!0)}const o=le(e)&&xl(n)?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,mt(e)?e:s);return e===ke(s)&&(o?Jn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!dr(n)||!Wp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",le(e)?"length":Rr),Reflect.ownKeys(e)}}class Cv extends Gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kv=new Qp,Dv=new Cv,Vv=new Qp(!0);const zc=t=>t,uo=t=>Reflect.getPrototypeOf(t);function Nv(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?zc:e?Fo:st;return!e&&dt(i,"iterate",l?Hc:Rr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xv(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),c=ke(s);t||(Jn(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=uo(o),h=e?zc:t?Fo:st;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(ke(s),"iterate",Rr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),c=ke(s);return t||(Jn(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=ke(c),h=e?zc:t?Fo:st;return!t&&dt(l,"iterate",Rr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return _t(n,t?{add:ho("add"),set:ho("set"),delete:ho("delete"),clear:ho("clear")}:{add(s){!e&&!Ht(s)&&!rr(s)&&(s=ke(s));const i=ke(this);return uo(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!Ht(i)&&!rr(i)&&(i=ke(i));const o=ke(this),{has:c,get:l}=uo(o);let h=c.call(o,s);h||(s=ke(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Jn(i,f)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:c}=uo(i);let l=o.call(i,s);l||(s=ke(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&yn(i,"delete",s,void 0),h},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nv(s,t,e)}),n}function $l(t,e){const n=xv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Ov={get:$l(!1,!1)},Mv={get:$l(!1,!0)},Lv={get:$l(!0,!1)};const Yp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,Fv=new WeakMap;function Uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Uv(fv(t))}function _a(t){return rr(t)?t:jl(t,!1,kv,Ov,Yp)}function Zp(t){return jl(t,!1,Vv,Mv,Jp)}function eg(t){return jl(t,!0,Dv,Lv,Xp)}function jl(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Bv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ns(t){return rr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function ql(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function $v(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Op(t,"__v_skip",!0),t}const st=t=>Le(t)?_a(t):t,Fo=t=>Le(t)?eg(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function At(t){return tg(t,!1)}function jv(t){return tg(t,!0)}function tg(t,e){return mt(t)?t:new qv(t,e)}class qv{constructor(e,n){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||rr(e);e=r?e:ke(e),Jn(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function ge(t){return mt(t)?t.value:t}const Hv={get:(t,e,n)=>e==="__v_raw"?t:ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ng(t){return ns(t)?t:new Proxy(t,Hv)}class zv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return $p(this,!0),!0}get value(){const e=this.dep.track();return Hp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kv(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new zv(r,s,n)}const fo={},Uo=new WeakMap;let Ir;function Wv(t,e=!1,n=Ir){if(n){let r=Uo.get(n);r||Uo.set(n,r=[]),r.push(t)}}function Gv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=q=>s?q:Ht(q)||s===!1||s===0?vn(q,1):vn(q);let f,p,g,_,k=!1,D=!1;if(mt(t)?(p=()=>t.value,k=Ht(t)):ns(t)?(p=()=>h(t),k=!0):le(t)?(D=!0,k=t.some(q=>ns(q)||Ht(q)),p=()=>t.map(q=>{if(mt(q))return q.value;if(ns(q))return h(q);if(de(q))return l?l(q,2):q()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){An();try{g()}finally{bn()}}const q=Ir;Ir=f;try{return l?l(t,3,[_]):t(_)}finally{Ir=q}}:p=an,e&&s){const q=p,fe=s===!0?1/0:s;p=()=>vn(q(),fe)}const S=wv(),B=()=>{f.stop(),S&&S.active&&Nl(S.effects,f)};if(i&&e){const q=e;e=(...fe)=>{q(...fe),B()}}let U=D?new Array(t.length).fill(fo):fo;const j=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const fe=f.run();if(s||k||(D?fe.some((he,I)=>Jn(he,U[I])):Jn(fe,U))){g&&g();const he=Ir;Ir=f;try{const I=[fe,U===fo?void 0:D&&U[0]===fo?[]:U,_];U=fe,l?l(e,3,I):e(...I)}finally{Ir=he}}}else f.run()};return c&&c(j),f=new Up(p),f.scheduler=o?()=>o(j,!1):j,_=q=>Wv(q,!1,f),g=f.onStop=()=>{const q=Uo.get(f);if(q){if(l)l(q,4);else for(const fe of q)fe();Uo.delete(f)}},e?r?j(!0):U=f.run():o?o(j.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function vn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,mt(t))vn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(Dp(t)||es(t))t.forEach(r=>{vn(r,e,n)});else if(xp(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,r){try{return r?t(...r):t()}catch(s){ya(s,e,n)}}function hn(t,e,n,r){if(de(t)){const s=Ni(t,e,n,r);return s&&Vp(s)&&s.catch(i=>{ya(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}}function ya(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){An(),Ni(i,null,10,[t,l,h]),bn();return}}Qv(t,n,s,r,o)}function Qv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let rn=-1;const rs=[];let jn=null,Hr=0;const rg=Promise.resolve();let Bo=null;function sg(t){const e=Bo||rg;return t?e.then(this?t.bind(this):t):e}function Yv(t){let e=rn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hl(t){if(!(t.flags&1)){const e=fi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=fi(n)?wt.push(t):wt.splice(Yv(e),0,t),t.flags|=1,ig()}}function ig(){Bo||(Bo=rg.then(ag))}function Jv(t){le(t)?rs.push(...t):jn&&t.id===-1?jn.splice(Hr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),ig()}function Yh(t,e,n=rn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function og(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>fi(n)-fi(r));if(rs.length=0,jn){jn.push(...e);return}for(jn=e,Hr=0;Hr<jn.length;Hr++){const n=jn[Hr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jn=null,Hr=0}}const fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ag(t){try{for(rn=0;rn<wt.length;rn++){const e=wt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<wt.length;rn++){const e=wt[rn];e&&(e.flags&=-2)}rn=-1,wt.length=0,og(),Bo=null,(wt.length||rs.length)&&ag()}}let Ot=null,cg=null;function $o(t){const e=Ot;return Ot=t,cg=t&&t.type.__scopeId||null,e}function Pr(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&af(-1);const i=$o(e);let o;try{o=t(...s)}finally{$o(i),r._d&&af(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xv(t,e){if(Ot===null)return t;const n=Aa(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(An(),hn(l,n,8,[t.el,c,t,e]),bn())}}const Zv=Symbol("_vte"),e0=t=>t.__isTeleport;function zl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pr(t,e){return de(t)?_t({name:t.name},e,{setup:t}):t}function lg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function jo(t,e,n,r,s=!1){if(le(t)){t.forEach((k,D)=>jo(k,e&&(le(e)?e[D]:e),n,r,s));return}if(Xs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&jo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Aa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,g=ke(p),_=p===xe?()=>!1:k=>De(g,k);if(h!=null&&h!==l&&(qe(h)?(f[h]=null,_(h)&&(p[h]=null)):mt(h)&&(h.value=null)),de(l))Ni(l,c,12,[o,f]);else{const k=qe(l),D=mt(l);if(k||D){const S=()=>{if(t.f){const B=k?_(l)?p[l]:f[l]:l.value;s?le(B)&&Nl(B,i):le(B)?B.includes(i)||B.push(i):k?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,Nt(S,n)):S()}}}ga().requestIdleCallback;ga().cancelIdleCallback;const Xs=t=>!!t.type.__asyncLoader,ug=t=>t.type.__isKeepAlive;function t0(t,e){hg(t,"a",e)}function n0(t,e){hg(t,"da",e)}function hg(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ug(s.parent.vnode)&&r0(r,e,n,s),s=s.parent}}function r0(t,e,n,r){const s=va(e,t,r,!0);dg(()=>{Nl(r[e],s)},n)}function va(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{An();const c=xi(n),l=hn(e,n,t,o);return c(),bn(),l});return r?s.unshift(i):s.push(i),i}}const Vn=t=>(e,n=pt)=>{(!gi||t==="sp")&&va(t,(...r)=>e(...r),n)},s0=Vn("bm"),fg=Vn("m"),i0=Vn("bu"),o0=Vn("u"),a0=Vn("bum"),dg=Vn("um"),c0=Vn("sp"),l0=Vn("rtg"),u0=Vn("rtc");function h0(t,e=pt){va("ec",t,e)}const pg="components";function Ea(t,e){return _g(pg,t,!0,e)||t}const gg=Symbol.for("v-ndc");function mg(t){return qe(t)?_g(pg,t,!1)||t:t||gg}function _g(t,e,n=!0,r=!1){const s=Ot||pt;if(s){const i=s.type;{const c=X0(i,!1);if(c&&(c===e||c===zt(e)||c===pa(zt(e))))return i}const o=Jh(s[t]||i[t],e)||Jh(s.appContext[t],e);return!o&&r?i:o}}function Jh(t,e){return t&&(t[e]||t[zt(e)]||t[pa(zt(e))])}function f0(t,e,n,r){let s;const i=n,o=le(t);if(o||qe(t)){const c=o&&ns(t);let l=!1,h=!1;c&&(l=!Ht(t),h=rr(t),t=ma(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Fo(st(t[f])):st(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Kc=t=>t?Lg(t)?Aa(t):Kc(t.parent):null,Zs=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kc(t.parent),$root:t=>Kc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vg(t),$forceUpdate:t=>t.f||(t.f=()=>{Hl(t.update)}),$nextTick:t=>t.n||(t.n=sg.bind(t.proxy)),$watch:t=>N0.bind(t)}),vc=(t,e)=>t!==xe&&!t.__isScriptSetup&&De(t,e),d0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==xe&&De(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&De(h,e))return o[e]=3,i[e];if(n!==xe&&De(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const f=Zs[e];let p,g;if(f)return e==="$attrs"&&dt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&De(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,De(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==xe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==xe&&De(t,o)||vc(e,o)||(c=i[0])&&De(c,o)||De(r,o)||De(Zs,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wc=!0;function p0(t){const e=vg(t),n=t.proxy,r=t.ctx;Wc=!1,e.beforeCreate&&Zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:k,activated:D,deactivated:S,beforeDestroy:B,beforeUnmount:U,destroyed:j,unmounted:q,render:fe,renderTracked:he,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:A,inheritAttrs:b,components:P,directives:T,filters:vt}=e;if(h&&g0(h,r,null),o)for(const we in o){const ve=o[we];de(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Le(we)&&(t.data=_a(we))}if(Wc=!0,i)for(const we in i){const ve=i[we],kt=de(ve)?ve.bind(n,n):de(ve.get)?ve.get.bind(n,n):an,Wt=!de(ve)&&de(ve.set)?ve.set.bind(n):an,$t=gt({get:kt,set:Wt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>$t.value,set:Fe=>$t.value=Fe})}if(c)for(const we in c)yg(c[we],r,n,we);if(l){const we=de(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ve=>{Io(ve,we[ve])})}f&&Zh(f,t,"c");function He(we,ve){le(ve)?ve.forEach(kt=>we(kt.bind(n))):ve&&we(ve.bind(n))}if(He(s0,p),He(fg,g),He(i0,_),He(o0,k),He(t0,D),He(n0,S),He(h0,v),He(u0,he),He(l0,I),He(a0,U),He(dg,q),He(c0,w),le(A))if(A.length){const we=t.exposed||(t.exposed={});A.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:kt=>n[ve]=kt})})}else t.exposed||(t.exposed={});fe&&t.render===an&&(t.render=fe),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),T&&(t.directives=T),w&&lg(t)}function g0(t,e,n=an){le(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zh(t,e,n){hn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yg(t,e,n,r){let s=r.includes(".")?Vg(n,r):()=>n[r];if(qe(t)){const i=e[t];de(i)&&ei(s,i)}else if(de(t))ei(s,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>yg(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&ei(s,i,t)}}function vg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>qo(l,h,o,!0)),qo(l,e,o)),Le(e)&&i.set(e,l),l}function qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&qo(t,i,n,!0),s&&s.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=m0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const m0={data:ef,props:tf,emits:tf,methods:qs,computed:qs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:qs,directives:qs,watch:y0,provide:ef,inject:_0};function ef(t,e){return e?t?function(){return _t(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function _0(t,e){return qs(Gc(t),Gc(e))}function Gc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?_t(Object.create(null),t,e):e}function tf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:_t(Object.create(null),Xh(t),Xh(e??{})):e}function y0(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Eg(){return{app:null,config:{isNativeTag:uv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function E0(t,e){return function(r,s=null){de(r)||(r=_t({},r)),s!=null&&!Le(s)&&(s=null);const i=Eg(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:v0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:e1,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const _=h._ceVNode||ye(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,h._container=f,f.__vue_app__=h,Aa(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(hn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=ss;ss=h;try{return f()}finally{ss=p}}};return h}}let ss=null;function Io(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=pt||Ot;if(r||ss){let s=ss?ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const Tg={},wg=()=>Object.create(Tg),Ig=t=>Object.getPrototypeOf(t)===Tg;function T0(t,e,n,r=!1){const s={},i=wg();t.propsDefaults=Object.create(null),Ag(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function w0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ke(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ta(t.emitsOptions,g))continue;const _=e[g];if(l)if(De(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const k=zt(g);s[k]=Qc(l,c,k,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Ag(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!De(e,p)&&((f=Or(p))===p||!De(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Qc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!De(e,p))&&(delete i[p],h=!0)}h&&yn(t.attrs,"set","")}function Ag(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Qs(l))continue;const h=e[l];let f;s&&De(s,f=zt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Ta(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=ke(n),h=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Qc(s,l,p,h[p],t,!De(h,p))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=De(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=xi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const I0=new WeakMap;function bg(t,e,n=!1){const r=n?I0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[g,_]=bg(p,e,!0);_t(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,Zr),Zr;if(le(i))for(let f=0;f<i.length;f++){const p=zt(i[f]);nf(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=zt(f);if(nf(p)){const g=i[f],_=o[p]=le(g)||de(g)?{type:g}:_t({},g),k=_.type;let D=!1,S=!0;if(le(k))for(let B=0;B<k.length;++B){const U=k[B],j=de(U)&&U.name;if(j==="Boolean"){D=!0;break}else j==="String"&&(S=!1)}else D=de(k)&&k.name==="Boolean";_[0]=D,_[1]=S,(D||De(_,"default"))&&c.push(p)}}const h=[o,c];return Le(t)&&r.set(t,h),h}function nf(t){return t[0]!=="$"&&!Qs(t)}const Kl=t=>t[0]==="_"||t==="$stable",Wl=t=>le(t)?t.map(on):[on(t)],A0=(t,e,n)=>{if(e._n)return e;const r=Pr((...s)=>Wl(e(...s)),n);return r._c=!1,r},Rg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(de(i))e[s]=A0(s,i,r);else if(i!=null){const o=Wl(i);e[s]=()=>o}}},Sg=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},Pg=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},b0=(t,e,n)=>{const r=t.slots=wg();if(t.vnode.shapeFlag&32){const s=e._;s?(Pg(r,e,n),n&&Op(r,"_",s,!0)):Rg(e,r)}else e&&Sg(t,e)},R0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Pg(s,e,n):(i=!e.$stable,Rg(e,s)),o=e}else e&&(Sg(t,e),o={default:1});if(i)for(const c in s)!Kl(c)&&o[c]==null&&delete s[c]},Nt=B0;function S0(t){return P0(t)}function P0(t,e){const n=ga();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=an,insertStaticContent:k}=t,D=(y,E,R,O=null,F=null,M=null,Q=void 0,z=null,H=!!E.dynamicChildren)=>{if(y===E)return;y&&!$s(y,E)&&(O=x(y),Fe(y,F,M,!0),y=null),E.patchFlag===-2&&(H=!1,E.dynamicChildren=null);const{type:$,ref:re,shapeFlag:G}=E;switch($){case wa:S(y,E,R,O);break;case sr:B(y,E,R,O);break;case Ao:y==null&&U(E,R,O,Q);break;case Xe:P(y,E,R,O,F,M,Q,z,H);break;default:G&1?fe(y,E,R,O,F,M,Q,z,H):G&6?T(y,E,R,O,F,M,Q,z,H):(G&64||G&128)&&$.process(y,E,R,O,F,M,Q,z,H,ee)}re!=null&&F&&jo(re,y&&y.ref,M,E||y,!E)},S=(y,E,R,O)=>{if(y==null)r(E.el=c(E.children),R,O);else{const F=E.el=y.el;E.children!==y.children&&h(F,E.children)}},B=(y,E,R,O)=>{y==null?r(E.el=l(E.children||""),R,O):E.el=y.el},U=(y,E,R,O)=>{[y.el,y.anchor]=k(y.children,E,R,O,y.el,y.anchor)},j=({el:y,anchor:E},R,O)=>{let F;for(;y&&y!==E;)F=g(y),r(y,R,O),y=F;r(E,R,O)},q=({el:y,anchor:E})=>{let R;for(;y&&y!==E;)R=g(y),s(y),y=R;s(E)},fe=(y,E,R,O,F,M,Q,z,H)=>{E.type==="svg"?Q="svg":E.type==="math"&&(Q="mathml"),y==null?he(E,R,O,F,M,Q,z,H):w(y,E,F,M,Q,z,H)},he=(y,E,R,O,F,M,Q,z)=>{let H,$;const{props:re,shapeFlag:G,transition:te,dirs:ae}=y;if(H=y.el=o(y.type,M,re&&re.is,re),G&8?f(H,y.children):G&16&&v(y.children,H,null,O,F,Ec(y,M),Q,z),ae&&Tr(y,null,O,"created"),I(H,y,y.scopeId,Q,O),re){for(const pe in re)pe!=="value"&&!Qs(pe)&&i(H,pe,null,re[pe],M,O);"value"in re&&i(H,"value",null,re.value,M),($=re.onVnodeBeforeMount)&&nn($,O,y)}ae&&Tr(y,null,O,"beforeMount");const ie=C0(F,te);ie&&te.beforeEnter(H),r(H,E,R),(($=re&&re.onVnodeMounted)||ie||ae)&&Nt(()=>{$&&nn($,O,y),ie&&te.enter(H),ae&&Tr(y,null,O,"mounted")},F)},I=(y,E,R,O,F)=>{if(R&&_(y,R),O)for(let M=0;M<O.length;M++)_(y,O[M]);if(F){let M=F.subTree;if(E===M||xg(M.type)&&(M.ssContent===E||M.ssFallback===E)){const Q=F.vnode;I(y,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},v=(y,E,R,O,F,M,Q,z,H=0)=>{for(let $=H;$<y.length;$++){const re=y[$]=z?qn(y[$]):on(y[$]);D(null,re,E,R,O,F,M,Q,z)}},w=(y,E,R,O,F,M,Q)=>{const z=E.el=y.el;let{patchFlag:H,dynamicChildren:$,dirs:re}=E;H|=y.patchFlag&16;const G=y.props||xe,te=E.props||xe;let ae;if(R&&wr(R,!1),(ae=te.onVnodeBeforeUpdate)&&nn(ae,R,E,y),re&&Tr(E,y,R,"beforeUpdate"),R&&wr(R,!0),(G.innerHTML&&te.innerHTML==null||G.textContent&&te.textContent==null)&&f(z,""),$?A(y.dynamicChildren,$,z,R,O,Ec(E,F),M):Q||ve(y,E,z,null,R,O,Ec(E,F),M,!1),H>0){if(H&16)b(z,G,te,R,F);else if(H&2&&G.class!==te.class&&i(z,"class",null,te.class,F),H&4&&i(z,"style",G.style,te.style,F),H&8){const ie=E.dynamicProps;for(let pe=0;pe<ie.length;pe++){const Ie=ie[pe],at=G[Ie],et=te[Ie];(et!==at||Ie==="value")&&i(z,Ie,at,et,F,R)}}H&1&&y.children!==E.children&&f(z,E.children)}else!Q&&$==null&&b(z,G,te,R,F);((ae=te.onVnodeUpdated)||re)&&Nt(()=>{ae&&nn(ae,R,E,y),re&&Tr(E,y,R,"updated")},O)},A=(y,E,R,O,F,M,Q)=>{for(let z=0;z<E.length;z++){const H=y[z],$=E[z],re=H.el&&(H.type===Xe||!$s(H,$)||H.shapeFlag&198)?p(H.el):R;D(H,$,re,null,O,F,M,Q,!0)}},b=(y,E,R,O,F)=>{if(E!==R){if(E!==xe)for(const M in E)!Qs(M)&&!(M in R)&&i(y,M,E[M],null,F,O);for(const M in R){if(Qs(M))continue;const Q=R[M],z=E[M];Q!==z&&M!=="value"&&i(y,M,z,Q,F,O)}"value"in R&&i(y,"value",E.value,R.value,F)}},P=(y,E,R,O,F,M,Q,z,H)=>{const $=E.el=y?y.el:c(""),re=E.anchor=y?y.anchor:c("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:ae}=E;ae&&(z=z?z.concat(ae):ae),y==null?(r($,R,O),r(re,R,O),v(E.children||[],R,re,F,M,Q,z,H)):G>0&&G&64&&te&&y.dynamicChildren?(A(y.dynamicChildren,te,R,F,M,Q,z),(E.key!=null||F&&E===F.subTree)&&Cg(y,E,!0)):ve(y,E,R,re,F,M,Q,z,H)},T=(y,E,R,O,F,M,Q,z,H)=>{E.slotScopeIds=z,y==null?E.shapeFlag&512?F.ctx.activate(E,R,O,Q,H):vt(E,R,O,F,M,Q,H):Bt(y,E,H)},vt=(y,E,R,O,F,M,Q)=>{const z=y.component=W0(y,O,F);if(ug(y)&&(z.ctx.renderer=ee),G0(z,!1,Q),z.asyncDep){if(F&&F.registerDep(z,He,Q),!y.el){const H=z.subTree=ye(sr);B(null,H,E,R)}}else He(z,y,E,R,F,M,Q)},Bt=(y,E,R)=>{const O=E.component=y.component;if(F0(y,E,R))if(O.asyncDep&&!O.asyncResolved){we(O,E,R);return}else O.next=E,O.update();else E.el=y.el,O.vnode=E},He=(y,E,R,O,F,M,Q)=>{const z=()=>{if(y.isMounted){let{next:G,bu:te,u:ae,parent:ie,vnode:pe}=y;{const ct=kg(y);if(ct){G&&(G.el=pe.el,we(y,G,Q)),ct.asyncDep.then(()=>{y.isUnmounted||z()});return}}let Ie=G,at;wr(y,!1),G?(G.el=pe.el,we(y,G,Q)):G=pe,te&&wo(te),(at=G.props&&G.props.onVnodeBeforeUpdate)&&nn(at,ie,G,pe),wr(y,!0);const et=sf(y),jt=y.subTree;y.subTree=et,D(jt,et,p(jt.el),x(jt),y,F,M),G.el=et.el,Ie===null&&U0(y,et.el),ae&&Nt(ae,F),(at=G.props&&G.props.onVnodeUpdated)&&Nt(()=>nn(at,ie,G,pe),F)}else{let G;const{el:te,props:ae}=E,{bm:ie,m:pe,parent:Ie,root:at,type:et}=y,jt=Xs(E);wr(y,!1),ie&&wo(ie),!jt&&(G=ae&&ae.onVnodeBeforeMount)&&nn(G,Ie,E),wr(y,!0);{at.ce&&at.ce._injectChildStyle(et);const ct=y.subTree=sf(y);D(null,ct,R,O,y,F,M),E.el=ct.el}if(pe&&Nt(pe,F),!jt&&(G=ae&&ae.onVnodeMounted)){const ct=E;Nt(()=>nn(G,Ie,ct),F)}(E.shapeFlag&256||Ie&&Xs(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&y.a&&Nt(y.a,F),y.isMounted=!0,E=R=O=null}};y.scope.on();const H=y.effect=new Up(z);y.scope.off();const $=y.update=H.run.bind(H),re=y.job=H.runIfDirty.bind(H);re.i=y,re.id=y.uid,H.scheduler=()=>Hl(re),wr(y,!0),$()},we=(y,E,R)=>{E.component=y;const O=y.vnode.props;y.vnode=E,y.next=null,w0(y,E.props,O,R),R0(y,E.children,R),An(),Yh(y),bn()},ve=(y,E,R,O,F,M,Q,z,H=!1)=>{const $=y&&y.children,re=y?y.shapeFlag:0,G=E.children,{patchFlag:te,shapeFlag:ae}=E;if(te>0){if(te&128){Wt($,G,R,O,F,M,Q,z,H);return}else if(te&256){kt($,G,R,O,F,M,Q,z,H);return}}ae&8?(re&16&&bt($,F,M),G!==$&&f(R,G)):re&16?ae&16?Wt($,G,R,O,F,M,Q,z,H):bt($,F,M,!0):(re&8&&f(R,""),ae&16&&v(G,R,O,F,M,Q,z,H))},kt=(y,E,R,O,F,M,Q,z,H)=>{y=y||Zr,E=E||Zr;const $=y.length,re=E.length,G=Math.min($,re);let te;for(te=0;te<G;te++){const ae=E[te]=H?qn(E[te]):on(E[te]);D(y[te],ae,R,null,F,M,Q,z,H)}$>re?bt(y,F,M,!0,!1,G):v(E,R,O,F,M,Q,z,H,G)},Wt=(y,E,R,O,F,M,Q,z,H)=>{let $=0;const re=E.length;let G=y.length-1,te=re-1;for(;$<=G&&$<=te;){const ae=y[$],ie=E[$]=H?qn(E[$]):on(E[$]);if($s(ae,ie))D(ae,ie,R,null,F,M,Q,z,H);else break;$++}for(;$<=G&&$<=te;){const ae=y[G],ie=E[te]=H?qn(E[te]):on(E[te]);if($s(ae,ie))D(ae,ie,R,null,F,M,Q,z,H);else break;G--,te--}if($>G){if($<=te){const ae=te+1,ie=ae<re?E[ae].el:O;for(;$<=te;)D(null,E[$]=H?qn(E[$]):on(E[$]),R,ie,F,M,Q,z,H),$++}}else if($>te)for(;$<=G;)Fe(y[$],F,M,!0),$++;else{const ae=$,ie=$,pe=new Map;for($=ie;$<=te;$++){const tt=E[$]=H?qn(E[$]):on(E[$]);tt.key!=null&&pe.set(tt.key,$)}let Ie,at=0;const et=te-ie+1;let jt=!1,ct=0;const Mn=new Array(et);for($=0;$<et;$++)Mn[$]=0;for($=ae;$<=G;$++){const tt=y[$];if(at>=et){Fe(tt,F,M,!0);continue}let qt;if(tt.key!=null)qt=pe.get(tt.key);else for(Ie=ie;Ie<=te;Ie++)if(Mn[Ie-ie]===0&&$s(tt,E[Ie])){qt=Ie;break}qt===void 0?Fe(tt,F,M,!0):(Mn[qt-ie]=$+1,qt>=ct?ct=qt:jt=!0,D(tt,E[qt],R,null,F,M,Q,z,H),at++)}const Ss=jt?k0(Mn):Zr;for(Ie=Ss.length-1,$=et-1;$>=0;$--){const tt=ie+$,qt=E[tt],Gi=tt+1<re?E[tt+1].el:O;Mn[$]===0?D(null,qt,R,Gi,F,M,Q,z,H):jt&&(Ie<0||$!==Ss[Ie]?$t(qt,R,Gi,2):Ie--)}}},$t=(y,E,R,O,F=null)=>{const{el:M,type:Q,transition:z,children:H,shapeFlag:$}=y;if($&6){$t(y.component.subTree,E,R,O);return}if($&128){y.suspense.move(E,R,O);return}if($&64){Q.move(y,E,R,ee);return}if(Q===Xe){r(M,E,R);for(let G=0;G<H.length;G++)$t(H[G],E,R,O);r(y.anchor,E,R);return}if(Q===Ao){j(y,E,R);return}if(O!==2&&$&1&&z)if(O===0)z.beforeEnter(M),r(M,E,R),Nt(()=>z.enter(M),F);else{const{leave:G,delayLeave:te,afterLeave:ae}=z,ie=()=>{y.ctx.isUnmounted?s(M):r(M,E,R)},pe=()=>{G(M,()=>{ie(),ae&&ae()})};te?te(M,ie,pe):pe()}else r(M,E,R)},Fe=(y,E,R,O=!1,F=!1)=>{const{type:M,props:Q,ref:z,children:H,dynamicChildren:$,shapeFlag:re,patchFlag:G,dirs:te,cacheIndex:ae}=y;if(G===-2&&(F=!1),z!=null&&(An(),jo(z,null,R,y,!0),bn()),ae!=null&&(E.renderCache[ae]=void 0),re&256){E.ctx.deactivate(y);return}const ie=re&1&&te,pe=!Xs(y);let Ie;if(pe&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&nn(Ie,E,y),re&6)tn(y.component,R,O);else{if(re&128){y.suspense.unmount(R,O);return}ie&&Tr(y,null,E,"beforeUnmount"),re&64?y.type.remove(y,E,R,ee,O):$&&!$.hasOnce&&(M!==Xe||G>0&&G&64)?bt($,E,R,!1,!0):(M===Xe&&G&384||!F&&re&16)&&bt(H,E,R),O&&Ue(y)}(pe&&(Ie=Q&&Q.onVnodeUnmounted)||ie)&&Nt(()=>{Ie&&nn(Ie,E,y),ie&&Tr(y,null,E,"unmounted")},R)},Ue=y=>{const{type:E,el:R,anchor:O,transition:F}=y;if(E===Xe){On(R,O);return}if(E===Ao){q(y);return}const M=()=>{s(R),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:Q,delayLeave:z}=F,H=()=>Q(R,M);z?z(y.el,M,H):H()}else M()},On=(y,E)=>{let R;for(;y!==E;)R=g(y),s(y),y=R;s(E)},tn=(y,E,R)=>{const{bum:O,scope:F,job:M,subTree:Q,um:z,m:H,a:$,parent:re,slots:{__:G}}=y;rf(H),rf($),O&&wo(O),re&&le(G)&&G.forEach(te=>{re.renderCache[te]=void 0}),F.stop(),M&&(M.flags|=8,Fe(Q,y,E,R)),z&&Nt(z,E),Nt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},bt=(y,E,R,O=!1,F=!1,M=0)=>{for(let Q=M;Q<y.length;Q++)Fe(y[Q],E,R,O,F)},x=y=>{if(y.shapeFlag&6)return x(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),R=E&&E[Zv];return R?g(R):E};let J=!1;const Y=(y,E,R)=>{y==null?E._vnode&&Fe(E._vnode,null,null,!0):D(E._vnode||null,y,E,null,null,null,R),E._vnode=y,J||(J=!0,Yh(),og(),J=!1)},ee={p:D,um:Fe,m:$t,r:Ue,mt:vt,mc:v,pc:ve,pbc:A,n:x,o:t};return{render:Y,hydrate:void 0,createApp:E0(Y)}}function Ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function C0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=qn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Cg(o,c)),c.type===wa&&(c.el=o.el),c.type===sr&&!c.el&&(c.el=o.el)}}function k0(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function kg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kg(e)}function rf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const D0=Symbol.for("v-scx"),V0=()=>Xt(D0);function ei(t,e,n){return Dg(t,e,n)}function Dg(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=_t({},n),l=e&&r||!e&&i!=="post";let h;if(gi){if(i==="sync"){const _=V0();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=an,_.resume=an,_.pause=an,_}}const f=pt;c.call=(_,k,D)=>hn(_,f,k,D);let p=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,k)=>{k?_():Hl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Gv(t,e,c);return gi&&(h?h.push(g):l&&g()),g}function N0(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Vg(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=xi(this),c=Dg(s,i.bind(r),n);return o(),c}function Vg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const x0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function O0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&x0(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map($c)));let c,l=r[c=pc(e)]||r[c=pc(zt(e))];!l&&i&&(l=r[c=pc(Or(e))]),l&&hn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,hn(h,t,6,s)}}function Ng(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const f=Ng(h,e,!0);f&&(c=!0,_t(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):_t(o,i),Le(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Or(e))||De(t,e))}function sf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:k,inheritAttrs:D}=t,S=$o(t);let B,U;try{if(n.shapeFlag&4){const q=s||r,fe=q;B=on(h.call(fe,q,f,p,_,g,k)),U=c}else{const q=e;B=on(q.length>1?q(p,{attrs:c,slots:o,emit:l}):q(p,null)),U=e.props?c:M0(c)}}catch(q){ti.length=0,ya(q,t,1),B=ye(sr)}let j=B;if(U&&D!==!1){const q=Object.keys(U),{shapeFlag:fe}=j;q.length&&fe&7&&(i&&q.some(Vl)&&(U=L0(U,i)),j=us(j,U,!1,!0))}return n.dirs&&(j=us(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&zl(j,n.transition),B=j,$o(S),B}const M0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},L0=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function F0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?of(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Ta(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?of(r,o,h):!0:!!o;return!1}function of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function U0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const xg=t=>t.__isSuspense;function B0(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}const Xe=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),ti=[];let Mt=null;function me(t=!1){ti.push(Mt=t?null:[])}function $0(){ti.pop(),Mt=ti[ti.length-1]||null}let di=1;function af(t,e=!1){di+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function Og(t){return t.dynamicChildren=di>0?Mt||Zr:null,$0(),di>0&&Mt&&Mt.push(t),t}function be(t,e,n,r,s,i){return Og(Z(t,e,n,r,s,i,!0))}function Cr(t,e,n,r,s){return Og(ye(t,e,n,r,s,!0))}function Ho(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const Mg=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||mt(t)||de(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mg(e),ref:e&&bo(e),scopeId:cg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(Gl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),di>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const ye=j0;function j0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gg)&&(t=sr),Ho(t)){const c=us(t,e,!0);return n&&Gl(c,n),di>0&&!i&&Mt&&(c.shapeFlag&6?Mt[Mt.indexOf(t)]=c:Mt.push(c)),c.patchFlag=-2,c}if(Z0(t)&&(t=t.__vccOpts),e){e=q0(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=Ml(c)),Le(l)&&(ql(l)&&!le(l)&&(l=_t({},l)),e.style=Ol(l))}const o=qe(t)?1:xg(t)?128:e0(t)?64:Le(t)?4:de(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function q0(t){return t?ql(t)||Ig(t)?_t({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?H0(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Mg(h),ref:e&&e.ref?n&&i?le(i)?i.concat(bo(e)):[i,bo(e)]:bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&zl(f,l.clone(f)),f}function xt(t=" ",e=0){return ye(wa,null,t,e)}function Ia(t,e){const n=ye(Ao,null,t);return n.staticCount=e,n}function pi(t="",e=!1){return e?(me(),Cr(sr,null,t)):ye(sr,null,t)}function on(t){return t==null||typeof t=="boolean"?ye(sr):le(t)?ye(Xe,null,t.slice()):Ho(t)?qn(t):ye(wa,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ig(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function H0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ml([e.class,r.class]));else if(s==="style")e.style=Ol([e.style,r.style]);else if(ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){hn(t,e,7,[n,r])}const z0=Eg();let K0=0;function W0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||z0,i={uid:K0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bg(r,s),emitsOptions:Ng(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=O0.bind(null,i),t.ce&&t.ce(i),i}let pt=null,zo,Yc;{const t=ga(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zo=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Yc=e("__VUE_SSR_SETTERS__",n=>gi=n)}const xi=t=>{const e=pt;return zo(t),t.scope.on(),()=>{t.scope.off(),zo(e)}},cf=()=>{pt&&pt.scope.off(),zo(null)};function Lg(t){return t.vnode.shapeFlag&4}let gi=!1;function G0(t,e=!1,n=!1){e&&Yc(e);const{props:r,children:s}=t.vnode,i=Lg(t);T0(t,r,i,e),b0(t,s,n||e);const o=i?Q0(t,e):void 0;return e&&Yc(!1),o}function Q0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,d0);const{setup:r}=n;if(r){An();const s=t.setupContext=r.length>1?J0(t):null,i=xi(t),o=Ni(r,t,0,[t.props,s]),c=Vp(o);if(bn(),i(),(c||t.sp)&&!Xs(t)&&lg(t),c){if(o.then(cf,cf),e)return o.then(l=>{lf(t,l)}).catch(l=>{ya(l,t,0)});t.asyncDep=o}else lf(t,o)}else Fg(t)}function lf(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=ng(e)),Fg(t)}function Fg(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=xi(t);An();try{p0(t)}finally{bn(),s()}}}const Y0={get(t,e){return dt(t,"get",""),t[e]}};function J0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Y0),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ng($v(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function X0(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Z0(t){return de(t)&&"__vccOpts"in t}const gt=(t,e)=>Kv(t,e,gi);function Ug(t,e,n){const r=arguments.length;return r===2?Le(e)&&!le(e)?Ho(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ho(n)&&(n=[n]),ye(t,e,n))}const e1="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jc;const uf=typeof window<"u"&&window.trustedTypes;if(uf)try{Jc=uf.createPolicy("vue",{createHTML:t=>t})}catch{}const Bg=Jc?t=>Jc.createHTML(t):t=>t,t1="http://www.w3.org/2000/svg",n1="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,hf=_n&&_n.createElement("template"),r1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_n.createElementNS(t1,t):e==="mathml"?_n.createElementNS(n1,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hf.innerHTML=Bg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=hf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},s1=Symbol("_vtc");function i1(t,e,n){const r=t[s1];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ff=Symbol("_vod"),o1=Symbol("_vsh"),a1=Symbol(""),c1=/(^|;)\s*display\s*:/;function l1(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ro(r,c,"")}else for(const o in e)n[o]==null&&Ro(r,o,"");for(const o in n)o==="display"&&(i=!0),Ro(r,o,n[o])}else if(s){if(e!==n){const o=r[a1];o&&(n+=";"+o),r.cssText=n,i=c1.test(n)}}else e&&t.removeAttribute("style");ff in t&&(t[ff]=i?r.display:"",t[o1]&&(r.display="none"))}const df=/\s*!important$/;function Ro(t,e,n){if(le(n))n.forEach(r=>Ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=u1(t,e);df.test(n)?t.setProperty(Or(r),n.replace(df,""),"important"):t[r]=n}}const pf=["Webkit","Moz","ms"],Tc={};function u1(t,e){const n=Tc[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=pa(r);for(let s=0;s<pf.length;s++){const i=pf[s]+r;if(i in t)return Tc[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function mf(t,e,n,r,s,i=Ev(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n):n==null||i&&!Mp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":dr(n)?String(n):n)}function _f(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function h1(t,e,n,r){t.removeEventListener(e,n,r)}const yf=Symbol("_vei");function f1(t,e,n,r,s=null){const i=t[yf]||(t[yf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=d1(e);if(r){const h=i[e]=m1(r,s);zr(t,c,h,l)}else o&&(h1(t,c,o,l),i[e]=void 0)}}const vf=/(?:Once|Passive|Capture)$/;function d1(t){let e;if(vf.test(t)){e={};let r;for(;r=t.match(vf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let wc=0;const p1=Promise.resolve(),g1=()=>wc||(p1.then(()=>wc=0),wc=Date.now());function m1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(_1(r,n.value),e,5,[r])};return n.value=t,n.attached=g1(),n}function _1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ef=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,y1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?i1(t,r,o):e==="style"?l1(t,n,r):ha(e)?Vl(e)||f1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v1(t,e,r,o))?(_f(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?_f(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mf(t,e,r,o))};function v1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ef(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ef(e)&&qe(n)?!1:e in t}const Tf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>wo(e,n):e};function E1(t){t.target.composing=!0}function wf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ic=Symbol("_assign"),T1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ic]=Tf(s);const i=r||s.props&&s.props.type==="number";zr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=$c(c)),t[Ic](c)}),n&&zr(t,"change",()=>{t.value=t.value.trim()}),e||(zr(t,"compositionstart",E1),zr(t,"compositionend",wf),zr(t,"change",wf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ic]=Tf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?$c(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},w1=_t({patchProp:y1},r1);let If;function I1(){return If||(If=S0(w1))}const A1=(...t)=>{const e=I1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=R1(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,b1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function b1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function R1(t){return qe(t)?document.querySelector(t):t}const Kt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},S1={};function P1(t,e){const n=Ea("router-view");return me(),Cr(n)}const C1=Kt(S1,[["render",P1]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function $g(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function k1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$g(t.default)}const Ce=Object.assign;function Ac(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const ni=()=>{},Zt=Array.isArray,jg=/#/g,D1=/&/g,V1=/\//g,N1=/=/g,x1=/\?/g,qg=/\+/g,O1=/%5B/g,M1=/%5D/g,Hg=/%5E/g,L1=/%60/g,zg=/%7B/g,F1=/%7C/g,Kg=/%7D/g,U1=/%20/g;function Ql(t){return encodeURI(""+t).replace(F1,"|").replace(O1,"[").replace(M1,"]")}function B1(t){return Ql(t).replace(zg,"{").replace(Kg,"}").replace(Hg,"^")}function Xc(t){return Ql(t).replace(qg,"%2B").replace(U1,"+").replace(jg,"%23").replace(D1,"%26").replace(L1,"`").replace(zg,"{").replace(Kg,"}").replace(Hg,"^")}function $1(t){return Xc(t).replace(N1,"%3D")}function j1(t){return Ql(t).replace(jg,"%23").replace(x1,"%3F")}function q1(t){return t==null?"":j1(t).replace(V1,"%2F")}function mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const H1=/\/$/,z1=t=>t.replace(H1,"");function bc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Q1(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:mi(o)}}function K1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function W1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&Wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!G1(t[n],e[n]))return!1;return!0}function G1(t,e){return Zt(t)?bf(t,e):Zt(e)?bf(e,t):t===e}function bf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Q1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function Y1(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),z1(t)}const J1=/^[^#]+#/;function X1(t,e){return t.replace(J1,"#")+e}function Z1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function eE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Z1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Rf(t,e){return(history.state?history.state.position-e:-1)+t}const Zc=new Map;function tE(t,e){Zc.set(t,e)}function nE(t){const e=Zc.get(t);return Zc.delete(t),e}let rE=()=>location.protocol+"//"+location.host;function Gg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Af(l,"")}return Af(n,t)+r+s}function sE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Gg(t,location),k=n.value,D=e.value;let S=0;if(g){if(n.value=_,e.value=g,o&&o===k){o=null;return}S=D?g.position-D.position:0}else r(_);s.forEach(B=>{B(n.value,k,{delta:S,type:_i.pop,direction:S?S>0?ri.forward:ri.back:ri.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Ce({},g.state,{scroll:ba()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Sf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ba():null}}function iE(t){const{history:e,location:n}=window,r={value:Gg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:rE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,h){const f=Ce({},e.state,Sf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Ce({},s.value,e.state,{forward:l,scroll:ba()});i(f.current,f,!0);const p=Ce({},Sf(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function oE(t){t=Y1(t);const e=iE(t),n=sE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:X1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function aE(t){return typeof t=="string"||t&&typeof t=="object"}function Qg(t){return typeof t=="string"||typeof t=="symbol"}const Yg=Symbol("");var Pf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pf||(Pf={}));function fs(t,e){return Ce(new Error,{type:t,[Yg]:!0},e)}function mn(t,e){return t instanceof Error&&Yg in t&&(e==null||!!(t.type&e))}const Cf="[^/]+?",cE={sensitive:!1,strict:!1,start:!0,end:!0},lE=/[.+*?^${}()[\]/\\]/g;function uE(t,e){const n=Ce({},cE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(lE,"\\$&"),_+=40;else if(g.type===1){const{value:k,repeatable:D,optional:S,regexp:B}=g;i.push({name:k,repeatable:D,optional:S});const U=B||Cf;if(U!==Cf){_+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${k}" (${U}): `+q.message)}}let j=D?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=S&&h.length<2?`(?:/${j})`:"/"+j),S&&(j+="?"),s+=j,_+=20,S&&(_+=-8),D&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",k=i[g-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:k,repeatable:D,optional:S}=_,B=k in h?h[k]:"";if(Zt(B)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const U=Zt(B)?B.join("/"):B;if(!U)if(S)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function hE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(kf(r))return 1;if(kf(s))return-1}return s.length-r.length}function kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fE={type:0,value:""},dE=/[a-zA-Z0-9_]/;function pE(t){if(!t)return[[]];if(t==="/")return[[fE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:dE.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function gE(t,e,n){const r=uE(pE(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mE(t,e){const n=[],r=new Map;e=xf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const k=!_,D=Vf(p);D.aliasOf=_&&_.record;const S=xf(e,p),B=[D];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of q)B.push(Vf(Ce({},D,{components:_?_.record.components:D.components,path:fe,aliasOf:_?_.record:D})))}let U,j;for(const q of B){const{path:fe}=q;if(g&&fe[0]!=="/"){const he=g.record.path,I=he[he.length-1]==="/"?"":"/";q.path=g.record.path+(fe&&I+fe)}if(U=gE(q,g,S),_?_.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),k&&p.name&&!Nf(U)&&o(p.name)),Xg(U)&&l(U),D.children){const he=D.children;for(let I=0;I<he.length;I++)i(he[I],U,_&&_.children[I])}_=_||U}return j?()=>{o(j)}:ni}function o(p){if(Qg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=vE(p,n);n.splice(g,0,p),p.record.name&&!Nf(p)&&r.set(p.record.name,p)}function h(p,g){let _,k={},D,S;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw fs(1,{location:p});S=_.record.name,k=Ce(Df(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Df(p.params,_.keys.map(j=>j.name))),D=_.stringify(k)}else if(p.path!=null)D=p.path,_=n.find(j=>j.re.test(D)),_&&(k=_.parse(D),S=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw fs(1,{location:p,currentLocation:g});S=_.record.name,k=Ce({},g.params,p.params),D=_.stringify(k)}const B=[];let U=_;for(;U;)B.unshift(U.record),U=U.parent;return{name:S,path:D,params:k,matched:B,meta:yE(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_E(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _E(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Nf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yE(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function xf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jg(t,e[i])<0?r=i:n=i+1}const s=EE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function EE(t){let e=t;for(;e=e.parent;)if(Xg(e)&&Jg(t,e)===0)return e}function Xg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function TE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qg," "),o=i.indexOf("="),c=mi(o<0?i:i.slice(0,o)),l=o<0?null:mi(i.slice(o+1));if(c in e){let h=e[c];Zt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=$1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&Xc(i)):[r&&Xc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IE=Symbol(""),Mf=Symbol(""),Ra=Symbol(""),Yl=Symbol(""),el=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(fs(4,{from:n,to:e})):g instanceof Error?l(g):aE(g)?l(fs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Rc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if($g(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Hn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=k1(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Hn(_,n,r,o,c,s)()}))}}return i}function Lf(t){const e=Xt(Ra),n=Xt(Yl),r=gt(()=>{const l=ge(t.to);return e.resolve(l)}),s=gt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(hs.bind(null,f));if(g>-1)return g;const _=Ff(l[h-2]);return h>1&&Ff(f)===_&&p[p.length-1].path!==_?p.findIndex(hs.bind(null,l[h-2])):g}),i=gt(()=>s.value>-1&&PE(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&Wg(n.params,r.value.params));function c(l={}){if(SE(l)){const h=e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(ni);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function AE(t){return t.length===1?t[0]:t}const bE=pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lf,setup(t,{slots:e}){const n=_a(Lf(t)),{options:r}=Xt(Ra),s=gt(()=>({[Uf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&AE(e.default(n));return t.custom?i:Ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RE=bE;function SE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ff(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uf=(t,e,n)=>t??e??n,CE=pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(el),s=gt(()=>t.route||r.value),i=Xt(Mf,0),o=gt(()=>{let h=ge(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=gt(()=>s.value.matched[o.value]);Io(Mf,gt(()=>o.value+1)),Io(IE,c),Io(el,s);const l=At();return ei(()=>[l.value,c.value,t.name],([h,f,p],[g,_,k])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!hs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Bf(n.default,{Component:g,route:h});const _=p.props[f],k=_?_===!0?h.params:typeof _=="function"?_(h):_:null,S=Ug(g,Ce({},k,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Bf(n.default,{Component:S,route:h})||S}}});function Bf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kE=CE;function DE(t){const e=mE(t.routes,t),n=t.parseQuery||TE,r=t.stringifyQuery||Of,s=t.history,i=js(),o=js(),c=js(),l=jv(Bn);let h=Bn;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ac.bind(null,x=>""+x),p=Ac.bind(null,q1),g=Ac.bind(null,mi);function _(x,J){let Y,ee;return Qg(x)?(Y=e.getRecordMatcher(x),ee=J):ee=x,e.addRoute(ee,Y)}function k(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(x=>x.record)}function S(x){return!!e.getRecordMatcher(x)}function B(x,J){if(J=Ce({},J||l.value),typeof x=="string"){const R=bc(n,x,J.path),O=e.resolve({path:R.path},J),F=s.createHref(R.fullPath);return Ce(R,O,{params:g(O.params),hash:mi(R.hash),redirectedFrom:void 0,href:F})}let Y;if(x.path!=null)Y=Ce({},x,{path:bc(n,x.path,J.path).path});else{const R=Ce({},x.params);for(const O in R)R[O]==null&&delete R[O];Y=Ce({},x,{params:p(R)}),J.params=p(J.params)}const ee=e.resolve(Y,J),Se=x.hash||"";ee.params=f(g(ee.params));const y=K1(r,Ce({},x,{hash:B1(Se),path:ee.path})),E=s.createHref(y);return Ce({fullPath:y,hash:Se,query:r===Of?wE(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:E})}function U(x){return typeof x=="string"?bc(n,x,l.value.path):Ce({},x)}function j(x,J){if(h!==x)return fs(8,{from:J,to:x})}function q(x){return I(x)}function fe(x){return q(Ce(U(x),{replace:!0}))}function he(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ee=typeof Y=="function"?Y(x):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Ce({query:x.query,hash:x.hash,params:ee.path!=null?{}:x.params},ee)}}function I(x,J){const Y=h=B(x),ee=l.value,Se=x.state,y=x.force,E=x.replace===!0,R=he(Y);if(R)return I(Ce(U(R),{state:typeof R=="object"?Ce({},Se,R.state):Se,force:y,replace:E}),J||Y);const O=Y;O.redirectedFrom=J;let F;return!y&&W1(r,ee,Y)&&(F=fs(16,{to:O,from:ee}),$t(ee,ee,!0,!1)),(F?Promise.resolve(F):A(O,ee)).catch(M=>mn(M)?mn(M,2)?M:Wt(M):ve(M,O,ee)).then(M=>{if(M){if(mn(M,2))return I(Ce({replace:E},U(M.to),{state:typeof M.to=="object"?Ce({},Se,M.to.state):Se,force:y}),J||O)}else M=P(O,ee,!0,E,Se);return b(O,ee,M),M})}function v(x,J){const Y=j(x,J);return Y?Promise.reject(Y):Promise.resolve()}function w(x){const J=On.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function A(x,J){let Y;const[ee,Se,y]=VE(x,J);Y=Rc(ee.reverse(),"beforeRouteLeave",x,J);for(const R of ee)R.leaveGuards.forEach(O=>{Y.push(Hn(O,x,J))});const E=v.bind(null,x,J);return Y.push(E),bt(Y).then(()=>{Y=[];for(const R of i.list())Y.push(Hn(R,x,J));return Y.push(E),bt(Y)}).then(()=>{Y=Rc(Se,"beforeRouteUpdate",x,J);for(const R of Se)R.updateGuards.forEach(O=>{Y.push(Hn(O,x,J))});return Y.push(E),bt(Y)}).then(()=>{Y=[];for(const R of y)if(R.beforeEnter)if(Zt(R.beforeEnter))for(const O of R.beforeEnter)Y.push(Hn(O,x,J));else Y.push(Hn(R.beforeEnter,x,J));return Y.push(E),bt(Y)}).then(()=>(x.matched.forEach(R=>R.enterCallbacks={}),Y=Rc(y,"beforeRouteEnter",x,J,w),Y.push(E),bt(Y))).then(()=>{Y=[];for(const R of o.list())Y.push(Hn(R,x,J));return Y.push(E),bt(Y)}).catch(R=>mn(R,8)?R:Promise.reject(R))}function b(x,J,Y){c.list().forEach(ee=>w(()=>ee(x,J,Y)))}function P(x,J,Y,ee,Se){const y=j(x,J);if(y)return y;const E=J===Bn,R=Kr?history.state:{};Y&&(ee||E?s.replace(x.fullPath,Ce({scroll:E&&R&&R.scroll},Se)):s.push(x.fullPath,Se)),l.value=x,$t(x,J,Y,E),Wt()}let T;function vt(){T||(T=s.listen((x,J,Y)=>{if(!tn.listening)return;const ee=B(x),Se=he(ee);if(Se){I(Ce(Se,{replace:!0,force:!0}),ee).catch(ni);return}h=ee;const y=l.value;Kr&&tE(Rf(y.fullPath,Y.delta),ba()),A(ee,y).catch(E=>mn(E,12)?E:mn(E,2)?(I(Ce(U(E.to),{force:!0}),ee).then(R=>{mn(R,20)&&!Y.delta&&Y.type===_i.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ve(E,ee,y))).then(E=>{E=E||P(ee,y,!1),E&&(Y.delta&&!mn(E,8)?s.go(-Y.delta,!1):Y.type===_i.pop&&mn(E,20)&&s.go(-1,!1)),b(ee,y,E)}).catch(ni)}))}let Bt=js(),He=js(),we;function ve(x,J,Y){Wt(x);const ee=He.list();return ee.length?ee.forEach(Se=>Se(x,J,Y)):console.error(x),Promise.reject(x)}function kt(){return we&&l.value!==Bn?Promise.resolve():new Promise((x,J)=>{Bt.add([x,J])})}function Wt(x){return we||(we=!x,vt(),Bt.list().forEach(([J,Y])=>x?Y(x):J()),Bt.reset()),x}function $t(x,J,Y,ee){const{scrollBehavior:Se}=t;if(!Kr||!Se)return Promise.resolve();const y=!Y&&nE(Rf(x.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return sg().then(()=>Se(x,J,y)).then(E=>E&&eE(E)).catch(E=>ve(E,x,J))}const Fe=x=>s.go(x);let Ue;const On=new Set,tn={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:D,resolve:B,options:t,push:q,replace:fe,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:He.add,isReady:kt,install(x){const J=this;x.component("RouterLink",RE),x.component("RouterView",kE),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(l)}),Kr&&!Ue&&l.value===Bn&&(Ue=!0,q(s.location).catch(Se=>{}));const Y={};for(const Se in Bn)Object.defineProperty(Y,Se,{get:()=>l.value[Se],enumerable:!0});x.provide(Ra,J),x.provide(Yl,Zp(Y)),x.provide(el,l);const ee=x.unmount;On.add(x),x.unmount=function(){On.delete(x),On.size<1&&(h=Bn,T&&T(),T=null,l.value=Bn,Ue=!1,we=!1),ee()}}};function bt(x){return x.reduce((J,Y)=>J.then(()=>w(Y)),Promise.resolve())}return tn}function VE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>hs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>hs(h,l))||s.push(l))}return[n,r,s]}function NE(){return Xt(Ra)}function xE(t){return Xt(Yl)}const OE=()=>{};var $f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ME=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new LE;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FE=function(t){const e=Zg(t);return Jl.encodeByteArray(e,!0)},Ko=function(t){return FE(t).replace(/\./g,"")},em=function(t){try{return Jl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UE=()=>tm().__FIREBASE_DEFAULTS__,BE=()=>{if(typeof process>"u"||typeof $f>"u")return;const t=$f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$E=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&em(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return OE()||UE()||BE()||$E()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nm=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jE=t=>{const e=nm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rm=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},sm=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Oi(t){return t.endsWith(".cloudworkstations.dev")}async function im(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function qE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}const si={};function HE(){const t={prod:[],emulator:[]};for(const e of Object.keys(si))si[e]?t.emulator.push(e):t.prod.push(e);return t}function zE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jf=!1;function om(t,e){if(typeof window>"u"||typeof document>"u"||!Oi(window.location.host)||si[t]===e||si[t]||jf)return;si[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=HE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{jf=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=zE(r),_=n("text"),k=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),S=document.getElementById(D)||document.createElement("a"),B=n("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;c(j),f(S,D);const q=h();l(U,B),j.append(U,k,S,q),document.body.appendChild(j)}i?(k.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function WE(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XE(){return!WE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xl(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eT,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,c,r)}}function tT(t,e){return t.replace(nT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nT=/\{\$([^}]+)}/g;function rT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qf(i)&&qf(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sT(t,e){const n=new iT(t,e);return n.subscribe.bind(n)}class iT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */const aT=1e3,cT=2,lT=4*60*60*1e3,uT=.5;function hT(t,e=aT,n=cT){const r=e*Math.pow(n,t),s=Math.round(uT*r*(Math.random()-.5)*2);return Math.min(lT,r+s)}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class fT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pT(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(t){return t===Ar?void 0:t}function pT(t){return t.instantiationMode==="EAGER"}/**
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
 */class gT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const mT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},_T=Ee.INFO,yT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},vT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=_T,this._logHandler=vT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const ET=(t,e)=>e.some(n=>t instanceof n);let Hf,zf;function TT(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wT(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const am=new WeakMap,tl=new WeakMap,cm=new WeakMap,Pc=new WeakMap,Zl=new WeakMap;function IT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&am.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function AT(t){if(tl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bT(t){nl=t(nl)}function RT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return cm.set(r,e.sort?e.sort():[e]),Xn(r)}:wT().includes(t)?function(...e){return t.apply(Cc(this),e),Xn(am.get(this))}:function(...e){return Xn(t.apply(Cc(this),e))}}function ST(t){return typeof t=="function"?RT(t):(t instanceof IDBTransaction&&AT(t),ET(t,TT())?new Proxy(t,nl):t)}function Xn(t){if(t instanceof IDBRequest)return IT(t);if(Pc.has(t))return Pc.get(t);const e=ST(t);return e!==t&&(Pc.set(t,e),Zl.set(e,t)),e}const Cc=t=>Zl.get(t);function PT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const CT=["get","getKey","getAll","getAllKeys","count"],kT=["put","add","delete","clear"],kc=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return kc.set(e,i),i}bT(t=>({...t,get:(e,n,r)=>Kf(e,n)||t.get(e,n,r),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
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
 */class DT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rl="@firebase/app",Wf="0.13.0";/**
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
 */const Sn=new Pa("@firebase/app"),NT="@firebase/app-compat",xT="@firebase/analytics-compat",OT="@firebase/analytics",MT="@firebase/app-check-compat",LT="@firebase/app-check",FT="@firebase/auth",UT="@firebase/auth-compat",BT="@firebase/database",$T="@firebase/data-connect",jT="@firebase/database-compat",qT="@firebase/functions",HT="@firebase/functions-compat",zT="@firebase/installations",KT="@firebase/installations-compat",WT="@firebase/messaging",GT="@firebase/messaging-compat",QT="@firebase/performance",YT="@firebase/performance-compat",JT="@firebase/remote-config",XT="@firebase/remote-config-compat",ZT="@firebase/storage",ew="@firebase/storage-compat",tw="@firebase/firestore",nw="@firebase/ai",rw="@firebase/firestore-compat",sw="firebase",iw="11.8.0";/**
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
 */const sl="[DEFAULT]",ow={[rl]:"fire-core",[NT]:"fire-core-compat",[OT]:"fire-analytics",[xT]:"fire-analytics-compat",[LT]:"fire-app-check",[MT]:"fire-app-check-compat",[FT]:"fire-auth",[UT]:"fire-auth-compat",[BT]:"fire-rtdb",[$T]:"fire-data-connect",[jT]:"fire-rtdb-compat",[qT]:"fire-fn",[HT]:"fire-fn-compat",[zT]:"fire-iid",[KT]:"fire-iid-compat",[WT]:"fire-fcm",[GT]:"fire-fcm-compat",[QT]:"fire-perf",[YT]:"fire-perf-compat",[JT]:"fire-rc",[XT]:"fire-rc-compat",[ZT]:"fire-gcs",[ew]:"fire-gcs-compat",[tw]:"fire-fst",[rw]:"fire-fst-compat",[nw]:"fire-vertex","fire-js":"fire-js",[sw]:"fire-js-all"};/**
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
 */const Wo=new Map,aw=new Map,il=new Map;function Gf(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(il.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Wo.values())Gf(n,t);for(const n of aw.values())Gf(n,t);return!0}function Li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Es("app","Firebase",cw);/**
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
 */class lw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=iw;function lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=rm()),!n)throw Zn.create("no-options");const i=Wo.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new gT(s);for(const l of il.values())o.addComponent(l);const c=new lw(n,r,o);return Wo.set(s,c),c}function eu(t=sl){const e=Wo.get(t);if(!e&&t===sl&&rm())return lm();if(!e)throw Zn.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let s=(r=ow[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(c.join(" "));return}ir(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uw="firebase-heartbeat-database",hw=1,vi="firebase-heartbeat-store";let Dc=null;function um(){return Dc||(Dc=PT(uw,hw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function fw(t){try{const n=(await um()).transaction(vi),r=await n.objectStore(vi).get(hm(t));return await n.done,r}catch(e){if(e instanceof Nn)Sn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Qf(t,e){try{const r=(await um()).transaction(vi,"readwrite");await r.objectStore(vi).put(e,hm(t)),await r.done}catch(n){if(n instanceof Nn)Sn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function hm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dw=1024,pw=30;class gw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pw){const o=yw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yf(),{heartbeatsToSend:r,unsentEntries:s}=mw(this._heartbeatsCache.heartbeats),i=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function Yf(){return new Date().toISOString().substring(0,10)}function mw(t,e=dw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xl()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jf(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}function yw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vw(t){ir(new Rn("platform-logger",e=>new DT(e),"PRIVATE")),ir(new Rn("heartbeat",e=>new gw(e),"PRIVATE")),wn(rl,Wf,t),wn(rl,Wf,"esm2017"),wn("fire-js","")}vw("");var Ew="firebase",Tw="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(Ew,Tw,"app");function tu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ww=fm,dm=new Es("auth","Firebase",fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Pa("@firebase/auth");function Iw(t,...e){Go.logLevel<=Ee.WARN&&Go.warn(`Auth (${Ts}): ${t}`,...e)}function So(t,...e){Go.logLevel<=Ee.ERROR&&Go.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw nu(t,...e)}function cn(t,...e){return nu(t,...e)}function pm(t,e,n){const r=Object.assign(Object.assign({},ww()),{[e]:n});return new Es("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dm.create(t,...e)}function ce(t,e,...n){if(!t)throw nu(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Cn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Aw(){return Xf()==="http:"||Xf()==="https:"}function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Aw()||QE()||"connection"in navigator)?navigator.onLine:!0}function Rw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=KE()||YE()}get(){return bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cw=new Fi(3e4,6e4);function Ca(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,s={}){return mm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return GE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Oi(t.emulatorConfig.host)&&(h.credentials="include"),gm.fetch()(await ym(t,t.config.apiHost,n,c),h)})}async function mm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sw),e);try{const s=new kw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw po(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw po(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pm(t,f,h);Pn(t,f)}}catch(s){if(s instanceof Nn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function _m(t,e,n,r,s={}){const i=await ws(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ym(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ru(t.config,s):`${t.config.apiScheme}://${s}`;return Pw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class kw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),Cw.get())})}}function po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function Qo(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vw(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=su(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(Vc(s.auth_time)),issuedAtTime:ii(Vc(s.iat)),expirationTime:ii(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=em(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zf(t){const e=su(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&Nw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ei(t,Qo(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vm(i.providerUserInfo):[],c=Mw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Ow(t){const e=We(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vm(t){return t.map(e=>{var{providerId:n}=e,r=tu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e){const n=await mm(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ym(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fw(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Zf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new is;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vw(this,e)}reload(){return Ow(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Ei(this,Dw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:q,isAnonymous:fe,providerData:he,stsTokenManager:I}=n;ce(j&&I,e,"internal-error");const v=is.fromJSON(this.name,I);ce(typeof j=="string",e,"internal-error"),$n(p,e.name),$n(g,e.name),ce(typeof q=="boolean",e,"internal-error"),ce(typeof fe=="boolean",e,"internal-error"),$n(_,e.name),$n(k,e.name),$n(D,e.name),$n(S,e.name),$n(B,e.name),$n(U,e.name);const w=new Yt({uid:j,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:fe,photoURL:k,phoneNumber:_,tenantId:D,stsTokenManager:v,createdAt:B,lastLoginAt:U});return he&&Array.isArray(he)&&(w.providerData=he.map(A=>Object.assign({},A))),S&&(w._redirectEventId=S),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new is;c.updateFromIdToken(r);const l=new Yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new al(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function Tn(t){Cn(t instanceof Function,"Expected a class definition");let e=ed.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ed.set(t,e),e)}/**
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
 */class Em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Em.type="NONE";const td=Em;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Po(this.userKey,s.apiKey,i),this.fullPersistenceKey=Po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qo(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Tn(td),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Tn(td);const o=Po(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Qo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Yt._fromGetAccountInfoResponse(e,g,f)}else p=Yt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rm(e))return"Blackberry";if(Sm(e))return"Webos";if(wm(e))return"Safari";if((e.includes("chrome/")||Im(e))&&!e.includes("edge/"))return"Chrome";if(bm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tm(t=yt()){return/firefox\//i.test(t)}function wm(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Im(t=yt()){return/crios\//i.test(t)}function Am(t=yt()){return/iemobile/i.test(t)}function bm(t=yt()){return/android/i.test(t)}function Rm(t=yt()){return/blackberry/i.test(t)}function Sm(t=yt()){return/webos/i.test(t)}function iu(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Uw(t=yt()){var e;return iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bw(){return JE()&&document.documentMode===10}function Pm(t=yt()){return iu(t)||bm(t)||Sm(t)||Rm(t)||/windows phone/i.test(t)||Am(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e=[]){let n;switch(t){case"Browser":n=nd(yt());break;case"Worker":n=`${nd(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class $w{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jw(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Ca(t,e))}/**
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
 */const qw=6;class Hw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new $w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qo(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(er(this));const n=e?We(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jw(this),n=new Hw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Iw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ka(t){return We(t)}class rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=sT(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kw(t){ou=t}function Ww(t){return ou.loadJS(t)}function Gw(){return ou.gapiScript}function Qw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){const n=Li(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function Jw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xw(t,e,n){const r=ka(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=km(e),{host:o,port:c}=Zw(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(kr(h,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Oi(o)?(im(`${i}//${o}${l}`),om("Auth",!0)):eI()}function km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zw(t){const e=km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sd(o)}}}function sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return _m(t,"POST","/v1/accounts:signInWithIdp",Ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="http://localhost";class Dr extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=tu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:tI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends Vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ui{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ui{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ui{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return _m(t,"POST","/v1/accounts:signUp",Ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=id(r);return new or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=id(r);return new or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t){var e;if(Qt(t.app))return Promise.reject(er(t));const n=ka(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new or({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await nI(n,{returnSecureToken:!0}),s=await or._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function xm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function rI(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
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
 */async function sI(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await Ei(t,xm(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=su(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){if(Qt(t.app))return Promise.reject(er(t));const r="signIn",s=await xm(t,r,e),i=await or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function oI(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function aI(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function cI(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function lI(t){return We(t).signOut()}const Xo="__sak";/**
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
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=1e3,hI=10;class Mm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Bw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mm.type="LOCAL";const fI=Mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lm.type="SESSION";const Fm=Lm;/**
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
 */function dI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await dI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=au("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function gI(t){ln().location.href=t}/**
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
 */function Um(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function mI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _I(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yI(){return Um()?self:null}/**
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
 */const Bm="firebaseLocalStorageDb",vI=1,Zo="firebaseLocalStorage",$m="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function EI(){const t=indexedDB.deleteDatabase(Bm);return new Bi(t).toPromise()}function cl(){const t=indexedDB.open(Bm,vI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:$m})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await EI(),e(await cl()))})})}async function od(t,e,n){const r=Va(t,!0).put({[$m]:e,value:n});return new Bi(r).toPromise()}async function TI(t,e){const n=Va(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function ad(t,e){const n=Va(t,!0).delete(e);return new Bi(n).toPromise()}const wI=800,II=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>II)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(yI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mI(),!this.activeServiceWorker)return;this.sender=new pI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await od(e,Xo,"1"),await ad(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const AI=jm;new Fi(3e4,6e4);/**
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
 */function bI(t,e){return e?Tn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cu extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RI(t){return iI(t.auth,new cu(t),t.bypassAuthState)}function SI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),sI(n,new cu(t),t.bypassAuthState)}async function PI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),rI(n,new cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RI;case"linkViaPopup":case"linkViaRedirect":return PI;case"reauthViaPopup":case"reauthViaRedirect":return SI;default:Pn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new Fi(2e3,1e4);class Jr extends qm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CI.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="pendingRedirect",Co=new Map;class DI extends qm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await VI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(t,e){const n=OI(e),r=xI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function NI(t,e){Co.set(t._key(),e)}function xI(t){return Tn(t._redirectPersistence)}function OI(t){return Po(kI,t.config.apiKey,t.name)}async function MI(t,e,n=!1){if(Qt(t.app))return Promise.reject(er(t));const r=ka(t),s=bI(r,e),o=await new DI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=10*60*1e3;class FI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jI=/^https?/;async function qI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BI(t);for(const n of e)try{if(HI(n))return}catch{}Pn(t,"unauthorized-domain")}function HI(t){const e=ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jI.test(n))return!1;if($I.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zI=new Fi(3e4,6e4);function ld(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KI(t){return new Promise((e,n)=>{var r,s,i;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(cn(t,"network-request-failed"))},timeout:zI.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const c=Qw("iframefcb");return ln()[c]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Ww(`${Gw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ko=null,e})}let ko=null;function WI(t){return ko=ko||KI(t),ko}/**
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
 */const GI=new Fi(5e3,15e3),QI="__/auth/iframe",YI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,YI):`https://${t.config.authDomain}/${QI}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=XI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function eA(t){const e=await WI(t),n=ln().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:ZI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),c=ln().setTimeout(()=>{i(o)},GI.get());function l(){ln().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const tA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nA=500,rA=600,sA="_blank",iA="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oA(t,e,n,r=nA,s=rA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=yt().toLowerCase();n&&(c=Im(h)?sA:n),Tm(h)&&(e=e||iA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(Uw(h)&&c!=="_self")return aA(e||"",c),new ud(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new ud(p)}function aA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cA="__/auth/handler",lA="emulator/auth/handler",uA=encodeURIComponent("fac");async function hd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof Vm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ui){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${uA}=${encodeURIComponent(l)}`:"";return`${hA(t)}?${Mi(c).slice(1)}${h}`}function hA({config:t}){return t.emulator?ru(t,lA):`https://${t.authDomain}/${cA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class fA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=MI,this._overrideRedirectResult=NI}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hd(e,n,r,ol(),s);return oA(e,o,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hd(e,n,r,ol(),s);return gI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eA(e),r=new FI(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nc];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pm()||wm()||iu()}}const dA=fA;var fd="@firebase/auth",dd="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mA(t){ir(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cm(t)},h=new zw(r,s,i,l);return Jw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Rn("auth-internal",e=>{const n=ka(e.getProvider("auth").getImmediate());return(r=>new pA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(fd,dd,gA(t)),wn(fd,dd,"esm2017")}/**
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
 */const _A=5*60,yA=sm("authIdTokenMaxAge")||_A;let pd=null;const vA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yA)return;const s=n==null?void 0:n.token;pd!==s&&(pd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EA(t=eu()){const e=Li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yw(t,{popupRedirectResolver:dA,persistence:[AI,fI,Fm]}),r=sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vA(i.toString());aI(n,o,()=>o(n.currentUser)),oI(n,c=>o(c))}}const s=nm("auth");return s&&Xw(n,`http://${s}`),n}function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Kw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mA("Browser");var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,zm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,P){for(var T=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)T[vt-2]=arguments[vt];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],b=I.g[2];var P=I.g[3],T=v+(P^w&(b^P))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=P+(b^v&(w^b))+A[1]+3905402710&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(w^P&(v^w))+A[2]+606105819&4294967295,b=P+(T<<17&4294967295|T>>>15),T=w+(v^b&(P^v))+A[3]+3250441966&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(P^w&(b^P))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(b^v&(w^b))+A[5]+1200080426&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(w^P&(v^w))+A[6]+2821735955&4294967295,b=P+(T<<17&4294967295|T>>>15),T=w+(v^b&(P^v))+A[7]+4249261313&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(P^w&(b^P))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(b^v&(w^b))+A[9]+2336552879&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(w^P&(v^w))+A[10]+4294925233&4294967295,b=P+(T<<17&4294967295|T>>>15),T=w+(v^b&(P^v))+A[11]+2304563134&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(P^w&(b^P))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(b^v&(w^b))+A[13]+4254626195&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(w^P&(v^w))+A[14]+2792965006&4294967295,b=P+(T<<17&4294967295|T>>>15),T=w+(v^b&(P^v))+A[15]+1236535329&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(b^P&(w^b))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^b&(v^w))+A[6]+3225465664&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(P^v))+A[11]+643717713&4294967295,b=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(b^P))+A[0]+3921069994&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(w^b))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^b&(v^w))+A[10]+38016083&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(P^v))+A[15]+3634488961&4294967295,b=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(b^P))+A[4]+3889429448&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(w^b))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^b&(v^w))+A[14]+3275163606&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(P^v))+A[3]+4107603335&4294967295,b=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(b^P))+A[8]+1163531501&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(w^b))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^b&(v^w))+A[2]+4243563512&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(P^v))+A[7]+1735328473&4294967295,b=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(b^P))+A[12]+2368359562&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(w^b^P)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^b)+A[8]+2272392833&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^w)+A[11]+1839030562&4294967295,b=P+(T<<16&4294967295|T>>>16),T=w+(b^P^v)+A[14]+4259657740&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^P)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^b)+A[4]+1272893353&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^w)+A[7]+4139469664&4294967295,b=P+(T<<16&4294967295|T>>>16),T=w+(b^P^v)+A[10]+3200236656&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^P)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^b)+A[0]+3936430074&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^w)+A[3]+3572445317&4294967295,b=P+(T<<16&4294967295|T>>>16),T=w+(b^P^v)+A[6]+76029189&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^P)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^b)+A[12]+3873151461&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^w)+A[15]+530742520&4294967295,b=P+(T<<16&4294967295|T>>>16),T=w+(b^P^v)+A[2]+3299628645&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(b^(w|~P))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~b))+A[7]+1126891415&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~w))+A[14]+2878612391&4294967295,b=P+(T<<15&4294967295|T>>>17),T=w+(P^(b|~v))+A[5]+4237533241&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~P))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~b))+A[3]+2399980690&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~w))+A[10]+4293915773&4294967295,b=P+(T<<15&4294967295|T>>>17),T=w+(P^(b|~v))+A[1]+2240044497&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~P))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~b))+A[15]+4264355552&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~w))+A[6]+2734768916&4294967295,b=P+(T<<15&4294967295|T>>>17),T=w+(P^(b|~v))+A[13]+1309151649&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~P))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~b))+A[11]+3174756917&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~w))+A[2]+718787259&4294967295,b=P+(T<<15&4294967295|T>>>17),T=w+(P^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,b=this.h,P=0;P<v;){if(b==0)for(;P<=w;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<v;)if(A[b++]=I.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<v;)if(A[b++]=I[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function i(I,v){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var P=I[b]|0;A&&P==v||(w[b]=P,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return S(h(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return S(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var P=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+P),v);8>P?(P=h(Math.pow(v,P)),A=A.j(P).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-S(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(D(this))return"-"+S(this).toString(I);for(var v=h(Math.pow(I,6)),w=this,A="";;){var b=q(w,v).g;w=B(w,b.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,k(w))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function D(I){return I.h==-1}t.l=function(I){return I=B(this,I),D(I)?-1:k(I)?0:1};function S(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new o(w,~I.h).add(g)}t.abs=function(){return D(this)?S(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=v;b++){var P=A+(this.i(b)&65535)+(I.i(b)&65535),T=(P>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=T>>>16,P&=65535,T&=65535,w[b]=T<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function B(I,v){return I.add(S(v))}t.j=function(I){if(k(this)||k(I))return p;if(D(this))return D(I)?S(this).j(S(I)):S(S(this).j(I));if(D(I))return S(this.j(S(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var P=this.i(A)>>>16,T=this.i(A)&65535,vt=I.i(b)>>>16,Bt=I.i(b)&65535;w[2*A+2*b]+=T*Bt,U(w,2*A+2*b),w[2*A+2*b+1]+=P*Bt,U(w,2*A+2*b+1),w[2*A+2*b+1]+=T*vt,U(w,2*A+2*b+1),w[2*A+2*b+2]+=P*vt,U(w,2*A+2*b+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function U(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function j(I,v){this.g=I,this.h=v}function q(I,v){if(k(v))throw Error("division by zero");if(k(I))return new j(p,p);if(D(I))return v=q(S(I),v),new j(S(v.g),S(v.h));if(D(v))return v=q(I,S(v)),new j(S(v.g),v.h);if(30<I.g.length){if(D(I)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=v;0>=A.l(I);)w=fe(w),A=fe(A);var b=he(w,1),P=he(A,1);for(A=he(A,2),w=he(w,2);!k(A);){var T=P.add(A);0>=T.l(I)&&(b=b.add(w),P=T),A=he(A,1),w=he(w,1)}return v=B(I,b.j(v)),new j(b,v)}for(b=p;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(w),T=P.j(v);D(T)||0<T.l(I);)w-=A,P=h(w),T=P.j(v);k(P)&&(P=g),b=b.add(P),I=B(I,T)}return new j(b,I)}t.A=function(I){return q(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function fe(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function he(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,b=[],P=0;P<A;P++)b[P]=0<v?I.i(P+w)>>>v|I.i(P+w+1)<<32-v:I.i(P+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,tr=o}).apply(typeof gd<"u"?gd:typeof self<"u"?self:typeof window<"u"?window:{});var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Km,Hs,Wm,Do,ll,Gm,Qm,Ym;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof go=="object"&&go];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var V=d++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,V){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return u.prototype[C].apply(m,K)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function S(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const C=a.length||0,V=m.length||0;a.length=C+V;for(let K=0;K<V;K++)a[C+K]=m[K]}else a.push(m)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var fe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function he(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let V=0;V<w.length;V++)d=w[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function T(){var a=kt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class vt{constructor(){this.h=this.g=null}add(u,d){const m=Bt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Bt=new B(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ve=!1,kt=new vt,Wt=()=>{const a=c.Promise.resolve(void 0);we=()=>{a.then($t)}};var $t=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var u=Bt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function tn(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{q(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tn.aa.h.call(this)}}k(tn,Ue);var bt={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,u,d,m,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=E(a,u,m,C);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new Y(u,this.src,V,!!m,C),u.fa=d,a.push(u)),u};function y(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(m,C,1),V&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,m){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==m)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),O={};function F(a,u,d,m,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)F(a,u[V],d,m,C);return null}return d=ae(d),a&&a[x]?a.K(u,d,h(m)?!!m.capture:!1,C):M(a,u,d,!1,m,C)}function M(a,u,d,m,C,V){if(!u)throw Error("Invalid event type");var K=h(C)?!!C.capture:!!C,Ne=G(a);if(Ne||(a[R]=Ne=new Se(a)),d=Ne.add(u,d,m,K,V),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)On||(C=K),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent($(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return u.call(a.src,a.listener,d)}const u=re;return a}function z(a,u,d,m,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)z(a,u[V],d,m,C);else m=h(m)?!!m.capture:!!m,d=ae(d),a&&a[x]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],d=E(V,d,m,C),-1<d&&(ee(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=G(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,m,C)),(d=-1<a?u[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[x])y(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent($(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=G(u))?(y(d,a),d.h==0&&(d.src=null,u[R]=null)):ee(a)}}}function $(a){return a in O?O[a]:O[a]="on"+a}function re(a,u){if(a.da)a=!0;else{u=new tn(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,u)}return a}function G(a){return a=a[R],a instanceof Se?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(u){return a.handleEvent(u)}),a[te])}function ie(){Fe.call(this),this.i=new Se(this),this.M=this,this.F=null}k(ie,Fe),ie.prototype[x]=!0,ie.prototype.removeEventListener=function(a,u,d,m){z(this,a,u,d,m)};function pe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var C=u;u=new Ue(m,a),A(u,C)}if(C=!0,d)for(var V=d.length-1;0<=V;V--){var K=u.g=d[V];C=Ie(K,m,!0,u)&&C}if(K=u.g=a,C=Ie(K,m,!0,u)&&C,C=Ie(K,m,!1,u)&&C,d)for(V=0;V<d.length;V++)K=u.g=d[V],C=Ie(K,m,!1,u)&&C}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ee(d[m]);delete a.g[u],a.h--}}this.F=null},ie.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ie.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ie(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var K=u[V];if(K&&!K.da&&K.capture==d){var Ne=K.listener,nt=K.ha||K.src;K.fa&&y(a.i,K),C=Ne.call(nt,m)!==!1&&C}}return C&&!m.defaultPrevented}function at(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function et(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class jt extends Fe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(a){Fe.call(this),this.h=a,this.g={}}k(ct,Fe);var Mn=[];function Ss(a){he(a.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},a),a.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Ss(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=c.JSON.stringify,qt=c.JSON.parse,Gi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Za(){}Za.prototype.h=null;function nh(a){return a.h||(a.h=a.i())}function rh(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){Ue.call(this,"d")}k(ec,Ue);function tc(){Ue.call(this,"c")}k(tc,Ue);var _r={},sh=null;function Qi(){return sh=sh||new ie}_r.La="serverreachability";function ih(a){Ue.call(this,_r.La,a)}k(ih,Ue);function Cs(a){const u=Qi();pe(u,new ih(u))}_r.STAT_EVENT="statevent";function oh(a,u){Ue.call(this,_r.STAT_EVENT,a),this.stat=u}k(oh,Ue);function Et(a){const u=Qi();pe(u,new oh(u,a))}_r.Ma="timingevent";function ah(a,u){Ue.call(this,_r.Ma,a),this.size=u}k(ah,Ue);function ks(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function $y(a,u,d,m,C,V){a.info(function(){if(a.g)if(V)for(var K="",Ne=V.split("&"),nt=0;nt<Ne.length;nt++){var Pe=Ne[nt].split("=");if(1<Pe.length){var lt=Pe[0];Pe=Pe[1];var ut=lt.split("_");K=2<=ut.length&&ut[1]=="type"?K+(lt+"="+Pe+"&"):K+(lt+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+K})}function jy(a,u,d,m,C,V,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+V+" "+K})}function Ur(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hy(a,d)+(m?" "+m:"")})}function qy(a,u){a.info(function(){return"TIMEOUT: "+u})}Ds.prototype.info=function(){};function Hy(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return tt(d)}catch{return u}}var Yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function Ji(){}k(Ji,Za),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},nc=new Ji;function Ln(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var uh={},rc={};function sc(a,u,d){a.L=1,a.v=to(dn(u)),a.m=d,a.P=!0,hh(a,null)}function hh(a,u){a.F=Date.now(),Xi(a),a.A=dn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),bh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new lh,a.g=qh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new jt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Mn[0]=C.toString()),C=Mn);for(var V=0;V<C.length;V++){var K=F(d,C[V],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Cs(),$y(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const u=this.M;u&&pn(a)==3?u.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const ut=pn(this.g);var u=this.g.Ba();const jr=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Vh(this.g)))){this.J||ut!=4||u==7||(u==8||0>=jr?Cs(3):Cs(2)),ic(this);var d=this.g.Z();this.X=d;t:if(fh(this)){var m=Vh(this.g);a="";var C=m.length,V=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Vs(this);var K="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,jy(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,nt=this.g;if((Ne=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ne)){var Pe=Ne;break t}}Pe=null}if(d=Pe)Ur(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,d);else{this.o=!1,this.s=3,Et(12),yr(this),Vs(this);break e}}if(this.P){d=!0;let Gt;for(;!this.J&&this.C<K.length;)if(Gt=zy(this,K),Gt==rc){ut==4&&(this.s=4,Et(14),d=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==uh){this.s=4,Et(15),Ur(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Ur(this.i,this.l,Gt,null),oc(this,Gt);if(fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||K.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)Ur(this.i,this.l,K,"[Invalid Chunked Response]"),yr(this),Vs(this);else if(0<K.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),fc(lt),lt.M=!0,Et(11))}}else Ur(this.i,this.l,K,null),oc(this,K);ut==4&&yr(this),this.o&&!this.J&&(ut==4?Uh(this.j,this):(this.o=!1,Xi(this)))}else cv(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),yr(this),Vs(this)}}}catch{}finally{}};function fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function zy(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?rc:(d=Number(u.substring(d,m)),isNaN(d)?uh:(m+=1,m+d>u.length?rc:(u=u.slice(m,m+d),a.C=m+d,u)))}Ln.prototype.cancel=function(){this.J=!0,yr(this)};function Xi(a){a.S=Date.now()+a.I,dh(a,a.I)}function dh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(g(a.ba,a),u)}function ic(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qy(this.i,this.A),this.L!=2&&(Cs(),Et(17)),yr(this),this.s=2,Vs(this)):dh(this,this.S-a)};function Vs(a){a.j.G==0||a.J||Uh(a.j,a)}function yr(a){ic(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ss(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function oc(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ac(d.h,a))){if(!a.K&&ac(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ao(d),io(d);else break e;hc(d),Et(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ks(g(d.Za,d),6e3));if(1>=mh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Er(d,11)}else if((a.K||d.g==a)&&ao(d),!U(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Pe=C[u];if(d.T=Pe[0],Pe=Pe[1],d.G==2)if(Pe[0]=="c"){d.K=Pe[1],d.ia=Pe[2];const lt=Pe[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ut=Pe[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const jr=Pe[5];jr!=null&&typeof jr=="number"&&0<jr&&(m=1.5*jr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Gt=a.g;if(Gt){const lo=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var V=m.h;V.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(cc(V,V.h),V.h=null))}if(m.D){const dc=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(m.ya=dc,Me(m.I,m.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=jh(m,m.J?m.ia:null,m.W),K.K){_h(m.h,K);var Ne=K,nt=m.L;nt&&(Ne.I=nt),Ne.B&&(ic(Ne),Xi(Ne)),m.g=K}else Lh(m);0<d.i.length&&oo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Er(d,7);else d.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Er(d,7):uc(d):Pe[0]!="noop"&&d.l&&d.l.ta(Pe),d.v=0)}}Cs(4)}catch{}}var Ky=class{constructor(a,u){this.g=a,this.map=u}};function ph(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mh(a){return a.h?1:a.g?a.g.size:0}function ac(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function cc(a,u){a.g?a.g.add(u):a.h=u}function _h(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ph.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function Wy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Gy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function vh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Gy(a),m=Wy(a),C=m.length,V=0;V<C;V++)u.call(void 0,m[V],d&&d[V],a)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qy(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var V=a[d].substring(0,m);C=a[d].substring(m+1)}else V=a[d];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,Zi(this,a.j),this.o=a.o,this.g=a.g,eo(this,a.s),this.l=a.l;var u=a.i,d=new Os;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Th(this,d),this.m=a.m}else a&&(u=String(a).match(Eh))?(this.h=!1,Zi(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),eo(this,u[4]),this.l=Ns(u[5]||"",!0),Th(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(xs(u,wh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(xs(u,wh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(xs(d,d.charAt(0)=="/"?Xy:Jy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",xs(d,ev)),a.join("")};function dn(a){return new vr(a)}function Zi(a,u,d){a.j=d?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function eo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Th(a,u,d){u instanceof Os?(a.i=u,tv(a.i,a.h)):(d||(u=xs(u,Zy)),a.i=new Os(u,a.h))}function Me(a,u,d){a.i.set(u,d)}function to(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Yy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wh=/[#\/\?@]/g,Jy=/[#\?:]/g,Xy=/[#\?]/g,Zy=/[#\?@]/g,ev=/#/g;function Os(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&Qy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Os.prototype,t.add=function(a,u){Fn(this),this.i=null,a=Br(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ih(a,u){Fn(a),u=Br(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ah(a,u){return Fn(a),u=Br(a,u),a.g.has(u)}t.forEach=function(a,u){Fn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let V=0;V<C.length;V++)d.push(u[m])}return d},t.V=function(a){Fn(this);let u=[];if(typeof a=="string")Ah(this,a)&&(u=u.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Fn(this),this.i=null,a=Br(this,a),Ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function bh(a,u,d){Ih(a,u),0<d.length&&(a.i=null,a.g.set(Br(a,u),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const V=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var C=V;K[m]!==""&&(C+="="+encodeURIComponent(String(K[m]))),a.push(C)}}return this.i=a.join("&")};function Br(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function tv(a,u){u&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Ih(this,m),bh(this,C,d))},a)),a.j=u}function nv(a,u){const d=new Ds;if(c.Image){const m=new Image;m.onload=_(Un,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Un,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Un,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Un,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function rv(a,u){const d=new Ds,m=new AbortController,C=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(C),V.ok?Un(d,"TestPingServer: ok",!0,u):Un(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Un(d,"TestPingServer: error",!1,u)})}function Un(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function sv(){this.g=new Gi}function iv(a,u,d){const m=d||"";try{vh(a,function(C,V){let K=C;h(C)&&(K=tt(C)),u.push(m+V+"="+encodeURIComponent(K))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function no(a){this.l=a.Ub||null,this.j=a.eb||!1}k(no,Za),no.prototype.g=function(){return new ro(this.l,this.j)},no.prototype.i=function(a){return function(){return a}}({});function ro(a,u){ie.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ro,ie),t=ro.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&Rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Qa=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sh(a){let u="";return he(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function lc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Sh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Me(a,u,d))}function $e(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k($e,ie);var ov=/^https?$/i,av=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?nh(this.o):nh(nc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){Ph(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(av,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Ph(this,V)}};function Ph(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ch(a),so(a)}function Ch(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),so(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),so(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kh(this):this.bb())},t.bb=function(){kh(this)};function kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)at(a.Ea,0,a);else if(pe(a,"readystatechange"),pn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var C=String(a.D).match(Eh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),m=!ov.test(C?C.toLowerCase():"")}d=m}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var V=2<pn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Ch(a)}}finally{so(a)}}}}function so(a,u){if(a.g){Dh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Dh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),qt(u)}};function Vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cv(a){const u={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[C]||[];u[C]=V,V.push(d)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Nh(a){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ph(a&&a.concurrentRequestLimit),this.Da=new sv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){Et(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=jh(this,null,this.W),oo(this)};function uc(a){if(xh(a),a.G==3){var u=a.U++,d=dn(a.I);if(Me(d,"SID",a.K),Me(d,"RID",u),Me(d,"TYPE","terminate"),Us(a,d),u=new Ln(a,a.j,u),u.L=2,u.v=to(dn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=qh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Xi(u)}$h(a)}function io(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function xh(a){io(a),a.u&&(c.clearTimeout(a.u),a.u=null),ao(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function oo(a){if(!gh(a.h)&&!a.s){a.s=!0;var u=a.Ga;we||Wt(),ve||(we(),ve=!0),kt.add(u,a),a.B=0}}function lv(a,u){return mh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(g(a.Ga,a,u),Bh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Mh(this,C,u),d=dn(this.I),Me(d,"RID",a),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),Us(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Sh(V)))+"&"+u:this.m&&lc(d,this.m,V)),cc(this.h,C),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",u),Me(d,"SID","null"),C.T=!0,sc(C,d,null)):sc(C,d,u),this.G=2}}else this.G==3&&(a?Oh(this,a):this.i.length==0||gh(this.h)||Oh(this))};function Oh(a,u){var d;u?d=u.l:d=a.U++;const m=dn(a.I);Me(m,"SID",a.K),Me(m,"RID",d),Me(m,"AID",a.T),Us(a,m),a.m&&a.o&&lc(m,a.m,a.o),d=new Ln(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Mh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,d),sc(d,m,u)}function Us(a,u){a.H&&he(a.H,function(d,m){Me(u,m,d)}),a.l&&vh({},function(d,m){Me(u,m,d)})}function Mh(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=C[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Ne=!0;for(let nt=0;nt<d;nt++){let Pe=C[nt].g;const lt=C[nt].map;if(Pe-=V,0>Pe)V=Math.max(0,C[nt].g-100),Ne=!1;else try{iv(lt,K,"req"+Pe+"_")}catch{m&&m(lt)}}if(Ne){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;we||Wt(),ve||(we(),ve=!0),kt.add(u,a),a.v=0}}function hc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(g(a.Fa,a),Bh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Fh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),io(this),Fh(this))};function fc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Fh(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=dn(a.qa);Me(u,"RID","rpc"),Me(u,"SID",a.K),Me(u,"AID",a.T),Me(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(u,"TO",a.ja),Me(u,"TYPE","xmlhttp"),Us(a,u),a.m&&a.o&&lc(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=to(dn(u)),d.m=null,d.P=!0,hh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,io(this),hc(this),Et(19))};function ao(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Uh(a,u){var d=null;if(a.g==u){ao(a),fc(a),a.g=null;var m=2}else if(ac(a.h,u))d=u.D,_h(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=Qi(),pe(m,new ah(m,d)),oo(a)}else Lh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&lv(a,u)||m==2&&hc(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function Bh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Er(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new vr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zi(m,"https"),to(m),C?nv(m.toString(),d):rv(m.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(u),$h(a),xh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function $h(a){if(a.G=0,a.ka=[],a.l){const u=yh(a.h);(u.length!=0||a.i.length!=0)&&(S(a.ka,u),S(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function jh(a,u,d){var m=d instanceof vr?dn(d):new vr(d);if(m.g!="")u&&(m.g=u+"."+m.g),eo(m,m.s);else{var C=c.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new vr(null);m&&Zi(V,m),u&&(V.g=u),C&&eo(V,C),d&&(V.l=d),m=V}return d=a.D,u=a.ya,d&&u&&Me(m,d,u),Me(m,"VER",a.la),Us(a,m),m}function qh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new no({eb:d})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function co(){}co.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){ie.call(this),this.g=new Nh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}k(Dt,ie),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){uc(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);u.i.push(new Ky(u.Ya++,a)),u.G==3&&oo(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,Dt.aa.N.call(this)};function zh(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(zh,ec);function Kh(){tc.call(this),this.status=1}k(Kh,tc);function $r(a){this.g=a}k($r,Hh),$r.prototype.ua=function(){pe(this.g,"a")},$r.prototype.ta=function(a){pe(this.g,new zh(a))},$r.prototype.sa=function(a){pe(this.g,new Kh)},$r.prototype.ra=function(){pe(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Ym=function(){return new co},Qm=function(){return Qi()},Gm=_r,ll={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Do=Yi,ch.COMPLETE="complete",Wm=ch,rh.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Hs=rh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Km=$e}).apply(typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{});const md="@firebase/firestore",_d="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Pa("@firebase/firestore");function Wr(){return Vr.logLevel}function X(t,...e){if(Vr.logLevel<=Ee.DEBUG){const n=e.map(lu);Vr.debug(`Firestore (${Is}): ${t}`,...n)}}function kn(t,...e){if(Vr.logLevel<=Ee.ERROR){const n=e.map(lu);Vr.error(`Firestore (${Is}): ${t}`,...n)}}function ds(t,...e){if(Vr.logLevel<=Ee.WARN){const n=e.map(lu);Vr.warn(`Firestore (${Is}): ${t}`,...n)}}function lu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jm(t,r,n)}function Jm(t,e,n){let r=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jm(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class IA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class bA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new bA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Zm(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=PA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ul(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=Zm(),o=CA(i.encode(vd(t,n)),i.encode(vd(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function vd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function CA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=-62135596800,Td=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Td);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ed)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Td}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ed;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ge(0,0))}static max(){return new oe(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),s=sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(n)):ul(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class Ve extends sn{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const kA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends sn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return kA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wd}static keyField(){return new it([wd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ve.fromString(e))}static fromName(e){return new ne(Ve.fromString(e).popFirst(5))}static empty(){return new ne(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ve(e.slice()))}}/**
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
 */const Ti=-1;function DA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new ar(s,ne.empty(),e)}function VA(t){return new ar(t.readTime,t.key,Ti)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(oe.min(),ne.empty(),Ti)}static max(){return new ar(oe.max(),ne.empty(),Ti)}}function NA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==xA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function MA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Na{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Na.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;function $i(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function LA(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="";function FA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Id(e)),e=UA(t.get(n),e);return Id(e)}function UA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case t_:n+="";break;default:n+=i}}return n}function Id(t){return t+t_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function n_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class r_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new r_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const BA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=BA.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function lr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="server_timestamp",i_="__type__",o_="__previous_value__",a_="__local_write_time__";function xa(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[i_])===null||n===void 0?void 0:n.stringValue)===s_}function Oa(t){const e=t.mapValue.fields[o_];return xa(e)?Oa(e):e}function wi(t){const e=cr(t.mapValue.fields[a_].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const hl="(default)";class Ii{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="__type__",jA="__max__",_o={mapValue:{}},l_="__vector__",ta="value";function ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xa(t)?4:HA(t)?9007199254740991:qA(t)?10:11:se(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=ur(t);if(n!==ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),c=cr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return lr(s.bytesValue).isEqual(lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),c=je(i.doubleValue);return o===c?ea(o)===ea(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ad(o)!==Ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!fn(o[l],c[l])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function Ai(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=ur(t),r=ur(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Rd(t.timestampValue,e.timestampValue);case 4:return Rd(wi(t),wi(e));case 5:return ul(t.stringValue,e.stringValue);case 6:return function(i,o){const c=lr(i),l=lr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=_e(c[h],l[h]);if(f!==0)return f}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=_e(je(i.latitude),je(o.latitude));return c!==0?c:_e(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},_=(c=p[ta])===null||c===void 0?void 0:c.arrayValue,k=(l=g[ta])===null||l===void 0?void 0:l.arrayValue,D=_e(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Sd(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_o.mapValue&&o===_o.mapValue)return 0;if(i===_o.mapValue)return 1;if(o===_o.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=ul(l[p],f[p]);if(g!==0)return g;const _=gs(c[l[p]],h[f[p]]);if(_!==0)return _}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw se(23264,{Pe:n})}}function Rd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=cr(t),r=cr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Sd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function ms(t){return fl(t)}function fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fl(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function Vo(t){switch(ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oa(t);return e?16+Vo(e):16;case 5:return 2*t.stringValue.length;case 6:return lr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Vo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return gr(r.fields,(i,o)=>{s+=i.length+Vo(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function na(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dl(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function Pd(t){return!!t&&"nullValue"in t}function Cd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function qA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[c_])===null||n===void 0?void 0:n.stringValue)===l_}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=oi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(oi(this.value))}}function u_(t){const e=[];return gr(t.fields,(n,r)=>{const s=new it([n]);if(No(r)){const i=u_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ze(e,0,oe.min(),oe.min(),oe.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,oe.min(),oe.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,oe.min(),oe.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _s{constructor(e,n){this.position=e,this.inclusive=n}}function kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function zA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class h_{}class Ke extends h_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WA(e,n,r):n==="array-contains"?new YA(e,r):n==="in"?new JA(e,r):n==="not-in"?new XA(e,r):n==="array-contains-any"?new ZA(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GA(e,r):new QA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends h_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new en(e,n)}matches(e){return f_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function f_(t){return t.op==="and"}function d_(t){return KA(t)&&f_(t)}function KA(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function pl(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(d_(t))return t.filters.map(e=>pl(e)).join(",");{const e=t.filters.map(n=>pl(n)).join(",");return`${t.op}(${e})`}}function p_(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&p_(o,s.filters[c]),!0):!1}(t,e):void se(19439)}function g_(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(g_).join(" ,")+"}"}(t):"Filter"}class WA extends Ke{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class GA extends Ke{constructor(e,n){super(e,"in",n),this.keys=m_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QA extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=m_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function m_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class YA extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Ai(n.arrayValue,this.value)}}class JA extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ai(this.value.arrayValue,n)}}class XA extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ai(this.value.arrayValue,n)}}class ZA extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class eb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Vd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new eb(t,e,n,r,s,i,o)}function fu(t){const e=ue(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$i(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.Ie=n}return e.Ie}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function gl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tb(t,e,n,r,s,i,o,c){return new Mr(t,e,n,r,s,i,o,c)}function __(t){return new Mr(t)}function Nd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pu(t){return t.collectionGroup!==null}function cs(t){const e=ue(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(it.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new bi(i,r))}),n.has(it.keyField().canonicalString())||e.Ee.push(new bi(it.keyField(),r))}return e.Ee}function un(t){const e=ue(t);return e.de||(e.de=nb(e,cs(t))),e.de}function nb(t,e){if(t.limitType==="F")return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bi(s.field,i)});const n=t.endAt?new _s(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _s(t.startAt.position,t.startAt.inclusive):null;return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ml(t,e){const n=t.filters.concat([e]);return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ra(t,e,n){return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ma(t,e){return du(un(t),un(e))&&t.limitType===e.limitType}function y_(t){return`${fu(un(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>g_(s)).join(", ")}]`),$i(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function La(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of cs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=kd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,cs(r),s)||r.endAt&&!function(o,c,l){const h=kd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,cs(r),s))}(t,e)}function rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v_(t){return(e,n)=>{let r=!1;for(const s of cs(t)){const i=sb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sb(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gs(l,h):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return n_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new Be(ne.comparator);function Dn(){return ib}const E_=new Be(ne.comparator);function zs(...t){let e=E_;for(const n of t)e=e.insert(n.key,n);return e}function T_(t){let e=E_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return ai()}function w_(){return ai()}function ai(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const ob=new Be(ne.comparator),ab=new Qe(ne.comparator);function Te(...t){let e=ab;for(const n of t)e=e.add(n);return e}const cb=new Qe(_e);function lb(){return cb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function I_(t){return{integerValue:""+t}}function A_(t,e){return LA(e)?I_(e):gu(t,e)}/**
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
 */class Fa{constructor(){this._=void 0}}function ub(t,e,n){return t instanceof sa?function(s,i){const o={fields:{[i_]:{stringValue:s_},[a_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xa(i)&&(i=Oa(i)),i&&(o.fields[o_]=i),{mapValue:o}}(n,e):t instanceof Ri?R_(t,e):t instanceof Si?S_(t,e):function(s,i){const o=b_(s,i),c=xd(o)+xd(s.Re);return dl(o)&&dl(s.Re)?I_(c):gu(s.serializer,c)}(t,e)}function hb(t,e,n){return t instanceof Ri?R_(t,e):t instanceof Si?S_(t,e):n}function b_(t,e){return t instanceof Pi?function(r){return dl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sa extends Fa{}class Ri extends Fa{constructor(e){super(),this.elements=e}}function R_(t,e){const n=P_(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Fa{constructor(e){super(),this.elements=e}}function S_(t,e){let n=P_(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Pi extends Fa{constructor(e,n){super(),this.serializer=e,this.Re=n}}function xd(t){return je(t.integerValue||t.doubleValue)}function P_(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.field=e,this.transform=n}}function db(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?ps(r.elements,s.elements,fn):r instanceof Pi&&s instanceof Pi?fn(r.Re,s.Re):r instanceof sa&&s instanceof sa}(t.transform,e.transform)}class pb{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ua{}function C_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mu(t.key,Pt.none()):new ji(t.key,t.data,Pt.none());{const n=t.data,r=It.empty();let s=new Qe(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(t.key,r,new Lt(s.toArray()),Pt.none())}}function gb(t,e,n){t instanceof ji?function(s,i,o){const c=s.value.clone(),l=Md(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Md(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(k_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,r){return t instanceof ji?function(i,o,c,l){if(!xo(i.precondition,o))return c;const h=i.value.clone(),f=Ld(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,o,c,l){if(!xo(i.precondition,o))return c;const h=Ld(i.fieldTransforms,l,o),f=o.data;return f.setAll(k_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function mb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=b_(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,o)=>db(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ji extends Ua{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends Ua{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function k_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Md(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,hb(o,c,n[s]))}return r}function Ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ub(i,o,e))}return r}class mu extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D_ extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=w_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=C_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Od(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Od(n,r))}}class _u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return ob}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _u(e,n,r,s)}}/**
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
 */class yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ae;function V_(t){switch(t){case N.OK:return se(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function N_(t){if(t===void 0)return kn("GRPC error has no .code"),N.UNKNOWN;switch(t){case ze.OK:return N.OK;case ze.CANCELLED:return N.CANCELLED;case ze.UNKNOWN:return N.UNKNOWN;case ze.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ze.INTERNAL:return N.INTERNAL;case ze.UNAVAILABLE:return N.UNAVAILABLE;case ze.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ze.NOT_FOUND:return N.NOT_FOUND;case ze.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ze.ABORTED:return N.ABORTED;case ze.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ze.DATA_LOSS:return N.DATA_LOSS;default:return se(39323,{code:t})}}(Ae=ze||(ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Eb=new tr([4294967295,4294967295],0);function Fd(t){const e=Zm().encode(t),n=new zm;return n.update(e),new Uint8Array(n.digest())}function Ud(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([n,r],0),new tr([s,i],0)]}class yu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=tr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(tr.fromNumber(r)));return s.compare(Eb)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Fd(e),[r,s]=Ud(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.Se(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=Fd(e),[r,s]=Ud(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ba(oe.min(),s,new Be(_e),Dn(),Te())}}class qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qi(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class x_{constructor(e,n){this.targetId=e,this.Ce=n}}class O_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bd{constructor(){this.Fe=0,this.Me=$d(),this.xe=ot.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new qi(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=$d()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Re(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Tb{constructor(e){this.ze=e,this.je=new Map,this.He=Dn(),this.Je=yo(),this.Ye=yo(),this.Ze=new Be(_e)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(gl(i))if(r===0){const o=new ne(i.path);this.tt(n,o,Ze.newNoDocument(o,oe.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=lr(r).toUint8Array()}catch(l){if(l instanceof r_)return ds("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yu(o,s,i)}catch(l){return ds(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&gl(c.target)){const l=new ne(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Ze.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ba(e,n,this.Ze,this.He,r);return this.He=Dn(),this.Je=yo(),this.Ye=yo(),this.Ze=new Be(_e),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Bd,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Qe(_e),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Qe(_e),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Bd),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function yo(){return new Be(ne.comparator)}function $d(){return new Be(ne.comparator)}const wb={asc:"ASCENDING",desc:"DESCENDING"},Ib={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ab={and:"AND",or:"OR"};class bb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _l(t,e){return t.useProto3Json||$i(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rb(t,e){return ia(t,e.toTimestamp())}function Ft(t){return Re(!!t,49232),oe.fromTimestamp(function(n){const r=cr(n);return new Ge(r.seconds,r.nanos)}(t))}function vu(t,e){return yl(t,e).canonicalString()}function yl(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function L_(t){const e=Ve.fromString(t);return Re(q_(e),10190,{key:e.toString()}),e}function oa(t,e){return vu(t.databaseId,e.path)}function li(t,e){const n=L_(e);if(n.get(1)!==t.databaseId.projectId)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(U_(n))}function F_(t,e){return vu(t.databaseId,e)}function Sb(t){const e=L_(t);return e.length===4?Ve.emptyPath():U_(e)}function vl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U_(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function jd(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function Pb(t,e){return"found"in e?function(r,s){Re(!!s.found,43571),s.found.name,s.found.updateTime;const i=li(r,s.found.name),o=Ft(s.found.updateTime),c=s.found.createTime?Ft(s.found.createTime):oe.min(),l=new It({mapValue:{fields:s.found.fields}});return Ze.newFoundDocument(i,o,c,l)}(t,e):"missing"in e?function(r,s){Re(!!s.missing,3894),Re(!!s.readTime,22933);const i=li(r,s.missing),o=Ft(s.readTime);return Ze.newNoDocument(i,o)}(t,e):se(7234,{result:e})}function Cb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?N.UNKNOWN:N_(h.code);return new W(f,h.message||"")}(o);n=new O_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=li(t,r.document.name),i=Ft(r.document.updateTime),o=r.document.createTime?Ft(r.document.createTime):oe.min(),c=new It({mapValue:{fields:r.document.fields}}),l=Ze.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Oo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=li(t,r.document),i=r.readTime?Ft(r.readTime):oe.min(),o=Ze.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Oo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=li(t,r.document),i=r.removedTargetIds||[];n=new Oo([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vb(s,i),c=r.targetId;n=new x_(c,o)}}return n}function B_(t,e){let n;if(e instanceof ji)n={update:jd(t,e.key,e.value)};else if(e instanceof mu)n={delete:oa(t,e.key)};else if(e instanceof mr)n={update:jd(t,e.key,e.data),updateMask:Fb(e.fieldMask)};else{if(!(e instanceof D_))return se(16599,{ft:e.type});n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Rb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function kb(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Ft(s.updateTime):Ft(i);return o.isEqual(oe.min())&&(o=Ft(i)),new pb(o,s.transformResults||[])}(n,e))):[]}function Db(t,e){return{documents:[F_(t,e.path)]}}function Vb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=F_(t,s);const i=function(h){if(h.length!==0)return j_(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Qr(g.field),direction:Ob(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=_l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function Nb(t){let e=Sb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=$_(p);return g instanceof en&&d_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new bi(Yr(k.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,$i(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new _s(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new _s(_,g)}(n.endAt)),tb(e,s,o,i,c,"F",l,h)}function xb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>$_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function Ob(t){return wb[t]}function Mb(t){return Ib[t]}function Lb(t){return Ab[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return it.fromServerFormat(t.fieldPath)}function j_(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Cd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:Mb(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>j_(s));return r.length===1?r[0]:{compositeFilter:{op:Lb(n.op),filters:r}}}(t):se(54877,{filter:t})}function Fb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,s,i=oe.min(),o=oe.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.wt=e}}function Bb(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ra(e,e.limit,"L"):e}/**
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
 */class $b{constructor(){this.Cn=new jb}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class jb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Ve.comparator)).toArray()}}/**
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
 */const qd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},H_=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(H_,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ys(0)}static lr(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="LruGarbageCollector",qb=1048576;function zd([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class Hb{constructor(e){this.Er=e,this.buffer=new Qe(zd),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){X(Hd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bs(n)?X(Hd,"Ignoring IndexedDB error during garbage collection: ",n):await As(n)}await this.mr(3e5)})}}class Kb{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Na.le);const r=new Hb(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(qd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qd):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Wr()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Wb(t,e){return new Kb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ci(r.mutation,s,Lt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Dn();const o=ai(),c=function(){return ai()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof mr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ci(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new Qb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ai();let s=new Be((o,c)=>o-c),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Lt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=w_();f.forEach(g=>{if(!i.has(g)){const _=C_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(br());let c=Ti,l=i;return o.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Te())).next(f=>({batchId:c,changes:T_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zs();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,g){return new Mr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let c=zs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ci(f.mutation,h,Lt.empty(),Ge.now()),La(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return L.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:Bb(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Xb{constructor(){this.overlays=new Be(ne.comparator),this.Qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=br(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yb(n,r));let i=this.Qr.get(n);i===void 0&&(i=Te(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class Zb{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.$r=new Qe(Je.Ur),this.Kr=new Qe(Je.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Je(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Je(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new ne(new Ve([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ne(new Ve([])),r=new Je(n,e),s=new Je(n,e+1);let i=Te();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ne.comparator(e.key,n.key)||_e(e.Zr,n.Zr)}static Wr(e,n){return _e(e.Zr,n.Zr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Qe(Je.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _b(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Xr=this.Xr.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?uu:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const c=this.ei(o.Zr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(_e);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],c=>{r=r.add(c.Zr)})}),L.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ne(i),0);let c=new Qe(_e);return this.Xr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Zr)),!0)},o),L.resolve(this.ni(c))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return L.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Je(n,0),s=this.Xr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.ii=e,this.docs=function(){return new Be(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||NA(VA(f),r)<=0||(s.has(f.key)||La(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}si(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nR(this)}getSize(e){return L.resolve(this.size)}}class nR extends Gb{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.persistence=e,this.oi=new Lr(n=>fu(n),du),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this._i=0,this.ai=new Eu,this.targetCount=0,this.ui=ys.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),L.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new ys(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tr(n),L.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.ci={},this.overlays={},this.li=new Na(0),this.hi=!1,this.hi=!0,this.Pi=new Zb,this.referenceDelegate=e(this),this.Ti=new rR(this),this.indexManager=new $b,this.remoteDocumentCache=function(s){return new tR(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Ub(n),this.Ei=new Jb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new eR(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new sR(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return L.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class sR extends OA{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.Vi=new Eu,this.mi=null}static fi(e){return new Tu(e)}get gi(){if(this.mi)return this.mi;throw se(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,r=>{const s=ne.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return L.or([()=>L.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class aa{constructor(e,n){this.persistence=e,this.yi=new Lr(r=>FA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Wb(this,n)}static fi(e,n){return new aa(e,n)}di(){}Ai(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return L.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Vo(e.data.value)),n}Dr(e,n,r){return L.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wu(e,n.fromCache,r,s)}}/**
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
 */class iR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oR{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return XE()?8:MA(yt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new iR;return this.bs(e,n,o).next(c=>{if(i.result=c,this.fs)return this.Ds(e,n,o,c.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Wr()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):(Wr()<=Ee.DEBUG&&X("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Wr()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}ws(e,n){if(Nd(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ra(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ys.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.vs(n,c);return this.Cs(n,h,o,l.readTime)?this.ws(e,ra(n,null,"F")):this.Fs(e,h,n,l)}))})))}Ss(e,n,r,s){return Nd(n)||s.isEqual(oe.min())?L.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(Wr()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gr(n)),this.Fs(e,o,n,DA(s,Ti)).next(c=>c))})}vs(e,n){let r=new Qe(v_(e));return n.forEach((s,i)=>{La(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Wr()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.ys.getDocumentsMatchingQuery(e,n,ar.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="LocalStore",aR=3e8;class cR{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Be(_e),this.Os=new Lr(i=>fu(i),du),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yb(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function lR(t,e,n,r){return new cR(t,e,n,r)}async function K_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Te();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:c}))})})}function uR(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let _=L.resolve();return g.forEach(k=>{_=_.next(()=>f.getEntry(l,k)).next(D=>{const S=h.docVersions.get(k);Re(S!==null,48541),D.version.compareTo(S)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Te();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function W_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function hR(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,S,B){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=aR?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,f)&&c.push(n.Ti.updateTargetData(i,_))});let l=Dn(),h=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(fR(i,o,e.documentUpdates).next(f=>{l=f.qs,h=f.Qs})),!r.isEqual(oe.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.xs=s,i))}function fR(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Iu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{qs:o,Qs:s}})}function dR(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pR(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function El(t,e,n){const r=ue(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bs(o))throw o;X(Iu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Kd(t,e,n){const r=ue(t);let s=oe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ue(l),g=p.Os.get(f);return g!==void 0?L.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(r,o,un(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:Te())).next(c=>(gR(r,rb(e),c),{documents:c,$s:i})))}function gR(t,e,n){let r=t.Ns.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Wd{constructor(){this.activeTargetIds=lb()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.xo=new Wd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _R{No(e){}shutdown(){}}/**
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
 */const Gd="ConnectivityMonitor";class Qd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){X(Gd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){X(Gd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function Tl(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vR{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Tl(),c=this.jo(e,n.toUriEncodedString());X(xc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,s,i);const{host:h}=new URL(c),f=Oi(h);return this.Jo(e,c,l,r,f).then(p=>(X(xc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ds(xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=yR[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class TR extends vR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Tl();return new Promise((c,l)=>{const h=new Km;h.setWithCredentials(!0),h.listenOnce(Wm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Do.NO_ERROR:const p=h.getResponseJson();X(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Do.TIMEOUT:X(ht,`RPC '${e}' ${o} timed out`),l(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case Do.HTTP_ERROR:const g=h.getStatus();if(X(ht,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_==null?void 0:_.error;if(k&&k.status&&k.message){const D=function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN}(k.status);l(new W(D,k.message))}else l(new W(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new W(N.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(ht,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Tl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ym(),c=Qm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ht,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,_=!1;const k=new ER({Zo:S=>{_?X(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(g||(X(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(ht,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Xo:()=>p.close()}),D=(S,B,U)=>{S.listen(B,j=>{try{U(j)}catch(q){setTimeout(()=>{throw q},0)}})};return D(p,Hs.EventType.OPEN,()=>{_||(X(ht,`RPC '${e}' stream ${s} transport opened.`),k.__())}),D(p,Hs.EventType.CLOSE,()=>{_||(_=!0,X(ht,`RPC '${e}' stream ${s} transport closed`),k.u_())}),D(p,Hs.EventType.ERROR,S=>{_||(_=!0,ds(ht,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),k.u_(new W(N.UNAVAILABLE,"The operation could not be completed")))}),D(p,Hs.EventType.MESSAGE,S=>{var B;if(!_){const U=S.data[0];Re(!!U,16349);const j=U,q=(j==null?void 0:j.error)||((B=j[0])===null||B===void 0?void 0:B.error);if(q){X(ht,`RPC '${e}' stream ${s} received error:`,q);const fe=q.status;let he=function(w){const A=ze[w];if(A!==void 0)return N_(A)}(fe),I=q.message;he===void 0&&(he=N.INTERNAL,I="Unknown error status: "+fe+" with message "+q.message),_=!0,k.u_(new W(he,I)),p.close()}else X(ht,`RPC '${e}' stream ${s} received:`,U),k.c_(U)}}),D(c,Gm.STAT_EVENT,S=>{S.stat===ll.PROXY?X(ht,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===ll.NOPROXY&&X(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){return new bb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="PersistentStream";class G_{constructor(e,n,r,s,i,o,c,l){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Au(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return X(Yd,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(X(Yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wR extends G_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=Cb(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Ft(o.readTime):oe.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=vl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=gl(l)?{documents:Db(i,l)}:{query:Vb(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=M_(i,o.resumeToken);const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){c.readTime=ia(i,o.snapshotVersion.toTimestamp());const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=xb(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=vl(this.serializer),n.removeTarget=e,this.L_(n)}}class IR extends G_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=kb(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=vl(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>B_(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{}class bR extends AR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,yl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Yo(e,yl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(N.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class RR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(kn(n),this.oa=!1):X("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="RemoteStore";class SR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(X(Nr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.Ta.add(4),await Hi(h),h.da.set("Unknown"),h.Ta.delete(4),await ja(h)}(this))})}),this.da=new RR(r,s)}}async function ja(t){if(Fr(t))for(const e of t.Ia)await e(!0)}async function Hi(t){for(const e of t.Ia)await e(!1)}function Q_(t,e){const n=ue(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Pu(n)?Su(n):Rs(n).M_()&&Ru(n,e))}function bu(t,e){const n=ue(t),r=Rs(n);n.Pa.delete(e),r.M_()&&Y_(n,e),n.Pa.size===0&&(r.M_()?r.N_():Fr(n)&&n.da.set("Unknown"))}function Ru(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).H_(e)}function Y_(t,e){t.Aa.Ke(e),Rs(t).J_(e)}function Su(t){t.Aa=new Tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.da._a()}function Pu(t){return Fr(t)&&!Rs(t).F_()&&t.Pa.size>0}function Fr(t){return ue(t).Ta.size===0}function J_(t){t.Aa=void 0}async function PR(t){t.da.set("Online")}async function CR(t){t.Pa.forEach((e,n)=>{Ru(t,e)})}async function kR(t,e){J_(t),Pu(t)?(t.da.ca(e),Su(t)):t.da.set("Unknown")}async function DR(t,e,n){if(t.da.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Pa.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Pa.delete(c),s.Aa.removeTarget(c))}(t,e)}catch(r){X(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ca(t,r)}else if(e instanceof Oo?t.Aa.Xe(e):e instanceof x_?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(oe.min()))try{const r=await W_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Aa.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Pa.get(h);f&&i.Pa.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Pa.get(l);if(!f)return;i.Pa.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),Y_(i,l);const p=new Qn(f.target,l,h,f.sequenceNumber);Ru(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(Nr,"Failed to raise snapshot:",r),await ca(t,r)}}async function ca(t,e,n){if(!bs(e))throw e;t.Ta.add(1),await Hi(t),t.da.set("Offline"),n||(n=()=>W_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Nr,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await ja(t)})}function X_(t,e){return e().catch(n=>ca(t,n,e))}async function qa(t){const e=ue(t),n=hr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:uu;for(;VR(e);)try{const s=await dR(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,NR(e,s)}catch(s){await ca(e,s)}Z_(e)&&ey(e)}function VR(t){return Fr(t)&&t.ha.length<10}function NR(t,e){t.ha.push(e);const n=hr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Z_(t){return Fr(t)&&!hr(t).F_()&&t.ha.length>0}function ey(t){hr(t).start()}async function xR(t){hr(t).ta()}async function OR(t){const e=hr(t);for(const n of t.ha)e.Z_(n.mutations)}async function MR(t,e,n){const r=t.ha.shift(),s=_u.from(r,e,n);await X_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qa(t)}async function LR(t,e){e&&hr(t).Y_&&await async function(r,s){if(function(o){return V_(o)&&o!==N.ABORTED}(s.code)){const i=r.ha.shift();hr(r).O_(),await X_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qa(r)}}(t,e),Z_(t)&&ey(t)}async function Jd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(Nr,"RemoteStore received new credentials");const r=Fr(n);n.Ta.add(3),await Hi(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await ja(n)}async function FR(t,e){const n=ue(t);e?(n.Ta.delete(2),await ja(n)):e||(n.Ta.add(2),await Hi(n),n.da.set("Unknown"))}function Rs(t){return t.Ra||(t.Ra=function(n,r,s){const i=ue(n);return i.ra(),new wR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:PR.bind(null,t),n_:CR.bind(null,t),i_:kR.bind(null,t),j_:DR.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Pu(t)?Su(t):t.da.set("Unknown")):(await t.Ra.stop(),J_(t))})),t.Ra}function hr(t){return t.Va||(t.Va=function(n,r,s){const i=ue(n);return i.ra(),new IR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:xR.bind(null,t),i_:LR.bind(null,t),X_:OR.bind(null,t),ea:MR.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await qa(t)):(await t.Va.stop(),t.ha.length>0&&(X(Nr,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Cu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(t,e){if(kn("AsyncQueue",`${e}: ${t}`),bs(t))return new W(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.ma=new Be(ne.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new vs(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class BR{constructor(){this.queries=Zd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=Zd(),i.forEach((o,c)=>{for(const l of c.ya)l.onError(r)})})(this,new W(N.ABORTED,"Firestore shutting down"))}}function Zd(){return new Lr(t=>y_(t),Ma)}async function $R(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new UR,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await n.onListen(s,!0);break;case 1:i.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ku(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ya.push(e),e.Da(n.onlineState),i.pa&&e.va(i.pa)&&Du(n)}async function jR(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qR(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ya)c.va(s)&&(r=!0);o.pa=s}}r&&Du(n)}function HR(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(n);r.queries.delete(e)}function Du(t){t.ba.forEach(e=>{e.next()})}var wl,ep;(ep=wl||(wl={})).Ca="default",ep.Cache="cache";class zR{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==wl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class KR{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Te(),this.mutatedKeys=Te(),this.Ha=v_(e),this.Ja=new ls(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new Xd,s=n?n.Ja:this.Ja;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=La(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;g&&_?g.data.isEqual(_.data)?k!==D&&(r.track({type:3,doc:_}),S=!0):this.eu(g,_)||(r.track({type:2,doc:_}),S=!0,(l&&this.Ha(_,l)>0||h&&this.Ha(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),S=!0):g&&!_&&(r.track({type:1,doc:g}),S=!0,(l||h)&&(c=!0)),S&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ja:o,Xa:r,Cs:c,mutatedKeys:i}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((f,p)=>function(_,k){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:S})}};return D(_)-D(k)}(f.type,p.type)||this.Ha(f.doc,p.doc)),this.tu(r),s=s!=null&&s;const c=n&&!s?this.nu():[],l=this.ja.size===0&&this.current&&!s?1:0,h=l!==this.za;return this.za=l,o.length!==0||h?{snapshot:new vs(this.query,e.Ja,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Xd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Te(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new ny(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new ty(r))}),n}su(e){this.Ga=e.$s,this.ja=Te();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return vs.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Vu="SyncEngine";class WR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GR{constructor(e){this.key=e,this._u=!1}}class QR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new Lr(c=>y_(c),Ma),this.cu=new Map,this.lu=new Set,this.hu=new Be(ne.comparator),this.Pu=new Map,this.Tu=new Eu,this.Iu={},this.Eu=new Map,this.du=ys.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function YR(t,e,n=!0){const r=cy(t);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await ry(r,e,n,!0),s}async function JR(t,e){const n=cy(t);await ry(n,e,!0,!1)}async function ry(t,e,n,r){const s=await pR(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await XR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Q_(t.remoteStore,s),c}async function XR(t,e,n,r,s){t.Ru=(p,g,_)=>async function(D,S,B,U){let j=S.view.Za(B);j.Cs&&(j=await Kd(D.localStore,S.query,!1).then(({documents:I})=>S.view.Za(I,j)));const q=U&&U.targetChanges.get(S.targetId),fe=U&&U.targetMismatches.get(S.targetId)!=null,he=S.view.applyChanges(j,D.isPrimaryClient,q,fe);return np(D,S.targetId,he.ru),he.snapshot}(t,p,g,_);const i=await Kd(t.localStore,e,!0),o=new KR(e,i.$s),c=o.Za(i.documents),l=qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);np(t,n,h.ru);const f=new WR(e,n,o);return t.uu.set(e,f),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),h.snapshot}async function ZR(t,e,n){const r=ue(t),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(o=>!Ma(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await El(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bu(r.remoteStore,s.targetId),Il(r,s.targetId)}).catch(As)):(Il(r,s.targetId),await El(r.localStore,s.targetId,!0))}async function e2(t,e){const n=ue(t),r=n.uu.get(e),s=n.cu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bu(n.remoteStore,r.targetId))}async function t2(t,e,n){const r=c2(t);try{const s=await function(o,c){const l=ue(o),h=Ge.now(),f=c.reduce((_,k)=>_.add(k.key),Te());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=Dn(),D=Te();return l.Bs.getEntries(_,f).next(S=>{k=S,k.forEach((B,U)=>{U.isValidDocument()||(D=D.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,k)).next(S=>{p=S;const B=[];for(const U of c){const j=mb(U,p.get(U.key).overlayedDocument);j!=null&&B.push(new mr(U.key,j,u_(j.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,B,c)}).next(S=>{g=S;const B=S.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,S.batchId,B)})}).then(()=>({batchId:g.batchId,changes:T_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Iu[o.currentUser.toKey()];h||(h=new Be(_e)),h=h.insert(c,l),o.Iu[o.currentUser.toKey()]=h}(r,s.batchId,n),await zi(r,s.changes),await qa(r.remoteStore)}catch(s){const i=ku(s,"Failed to persist write");n.reject(i)}}async function sy(t,e){const n=ue(t);try{const r=await hR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Pu.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?Re(o._u,14607):s.removedDocuments.size>0&&(Re(o._u,42227),o._u=!1))}),await zi(n,r,e)}catch(r){await As(r)}}function tp(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,o)=>{const c=o.view.Da(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(c)&&(h=!0)}),h&&Du(l)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function n2(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Pu.get(e),i=s&&s.key;if(i){let o=new Be(ne.comparator);o=o.insert(i,Ze.newNoDocument(i,oe.min()));const c=Te().add(i),l=new Ba(oe.min(),new Map,new Be(_e),o,c);await sy(r,l),r.hu=r.hu.remove(i),r.Pu.delete(e),Nu(r)}else await El(r.localStore,e,!1).then(()=>Il(r,e,n)).catch(As)}async function r2(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await uR(n.localStore,e);oy(n,r,null),iy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zi(n,s)}catch(s){await As(s)}}async function s2(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);oy(r,e,n),iy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zi(r,s)}catch(s){await As(s)}}function iy(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function oy(t,e,n){const r=ue(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||ay(t,r)})}function ay(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(bu(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Nu(t))}function np(t,e,n){for(const r of n)r instanceof ty?(t.Tu.addReference(r.key,e),i2(t,r)):r instanceof ny?(X(Vu,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||ay(t,r.key)):se(19791,{mu:r})}function i2(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(X(Vu,"New document in limbo: "+n),t.lu.add(r),Nu(t))}function Nu(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new ne(Ve.fromString(e)),r=t.du.next();t.Pu.set(r,new GR(n)),t.hu=t.hu.insert(n,r),Q_(t.remoteStore,new Qn(un(__(n.path)),r,"TargetPurposeLimboResolution",Na.le))}}async function zi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.uu.isEmpty()||(r.uu.forEach((c,l)=>{o.push(r.Ru(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=wu.Rs(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.au.j_(s),await async function(l,h){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>L.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!bs(p))throw p;X(Iu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),k=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(k);f.xs=f.xs.insert(g,D)}}}(r.localStore,i))}async function o2(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(Vu,"User change. New user:",e.toKey());const r=await K_(n.localStore,e);n.currentUser=e,function(i,o){i.Eu.forEach(c=>{c.forEach(l=>{l.reject(new W(N.CANCELLED,o))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zi(n,r.ks)}}function a2(t,e){const n=ue(t),r=n.Pu.get(e);if(r&&r._u)return Te().add(r.key);{let s=Te();const i=n.cu.get(e);if(!i)return s;for(const o of i){const c=n.uu.get(o);s=s.unionWith(c.view.Ya)}return s}}function cy(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n2.bind(null,e),e.au.j_=qR.bind(null,e.eventManager),e.au.Vu=HR.bind(null,e.eventManager),e}function c2(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s2.bind(null,e),e}class la{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return lR(this.persistence,new oR,e.initialUser,this.serializer)}yu(e){return new z_(Tu.fi,this.serializer)}pu(e){return new mR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}la.provider={build:()=>new la};class l2 extends la{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Re(this.persistence.referenceDelegate instanceof aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zb(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new z_(r=>aa.fi(r,n),this.serializer)}}class Al{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o2.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BR}()}createDatastore(e){const n=$a(e.databaseInfo.databaseId),r=function(i){return new TR(i)}(e.databaseInfo);return function(i,o,c,l){return new bR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new SR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>tp(this.syncEngine,n,0),function(){return Qd.C()?new Qd:new _R}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new QR(s,i,o,c,l,h);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X(Nr,"RemoteStore shutting down."),i.Ta.add(5),await Hi(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Al.provider={build:()=>new Al};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class u2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new W(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=ue(s),c={documents:i.map(p=>oa(o.serializer,p))},l=await o.Yo("BatchGetDocuments",o.serializer.databaseId,Ve.emptyPath(),c,i.length),h=new Map;l.forEach(p=>{const g=Pb(o.serializer,p);h.set(g.key.toString(),g)});const f=[];return i.forEach(p=>{const g=h.get(p.toString());Re(!!g,55234,{key:p}),f.push(g)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new mu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=ne.fromPath(r);this.mutations.push(new D_(s,this.precondition(s)))}),await async function(r,s){const i=ue(r),o={writes:s.map(c=>B_(i.serializer,c))};await i.zo("Commit",i.serializer.databaseId,Ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se(50498,{qu:e.constructor.name});n=oe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new W(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(oe.min())?Pt.exists(!1):Pt.updateTime(n):Pt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(oe.min()))throw new W(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pt.updateTime(n)}return Pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class f2{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Qu=r.maxAttempts,this.C_=new Au(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new h2(this.datastore),n=this.Ku(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Wu(s)}))}).catch(r=>{this.Wu(r)})})}Ku(e){try{const n=this.updateFunction(e);return!$i(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!V_(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="FirestoreClient";class d2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=e_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ku(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),X(fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await K_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p2(t);X(fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jd(e.remoteStore,s)),t._onlineComponents=e}async function p2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(fr,"Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new la)}}else X(fr,"Using default OfflineComponentProvider"),await Mc(t,new l2(void 0));return t._offlineComponents}async function xu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(fr,"Using user provided OnlineComponentProvider"),await rp(t,t._uninitializedComponentsProvider._online)):(X(fr,"Using default OnlineComponentProvider"),await rp(t,new Al))),t._onlineComponents}function g2(t){return xu(t).then(e=>e.syncEngine)}function m2(t){return xu(t).then(e=>e.datastore)}async function _2(t){const e=await xu(t),n=e.eventManager;return n.onListen=YR.bind(null,e.syncEngine),n.onUnlisten=ZR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=e2.bind(null,e.syncEngine),n}function y2(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new u2({next:g=>{f.Cu(),o.enqueueAndForget(()=>jR(i,p)),g.fromCache&&l.source==="server"?h.reject(new W(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new zR(c,f,{includeMetadataChanges:!0,La:!0});return $R(i,p)}(await _2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ly(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function v2(t,e,n,r){if(e===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ip(t){if(!ne.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function op(t){if(ne.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new W(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="firestore.googleapis.com",ap=!0;class cp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hy,this.ssl=ap}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ap;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=H_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qb)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}v2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ly((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wA;switch(r.type){case"firstParty":return new RA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sp.get(n);r&&(X("ComponentProvider","Removing Datastore"),sp.delete(n),r.terminate())}(this),Promise.resolve()}}function E2(t,e,n,r={}){var s;t=Ci(t,za);const i=Oi(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(im(`https://${l}`),om("Firestore",!0)),o.host!==hy&&o.host!==l&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!kr(h,c)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ft.MOCK_USER;else{f=qE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ft(g)}t._authCredentials=new IA(new Xm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class nr extends xn{constructor(e,n,r){super(e,n,__(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new ne(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function Mo(t,e,...n){if(t=We(t),uy("collection","path",e),t instanceof za){const r=Ve.fromString(e,...n);return op(r),new nr(t,null,r)}{if(!(t instanceof Ut||t instanceof nr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return op(r),new nr(t.firestore,null,r)}}function bl(t,e,...n){if(t=We(t),arguments.length===1&&(e=e_.newId()),uy("doc","path",e),t instanceof za){const r=Ve.fromString(e,...n);return ip(r),new Ut(t,null,new ne(r))}{if(!(t instanceof Ut||t instanceof nr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return ip(r),new Ut(t.firestore,t instanceof nr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="AsyncQueue";class up{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Au(this,"async_queue_retry"),this.ec=()=>{const r=Oc();r&&X(lp,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new In;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!bs(e))throw e;X(lp,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,kn("INTERNAL UNHANDLED ERROR: ",hp(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=Cu.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&se(47125,{_c:hp(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function hp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ka extends za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new up(e),this._firestoreClient=void 0,await e}}}function T2(t,e){const n=typeof t=="object"?t:eu(),r=typeof t=="string"?t:e,s=Li(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jE("firestore");i&&E2(s,...i)}return s}function Ou(t){if(t._terminated)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||w2(t),t._firestoreClient}function w2(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new $A(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ly(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new d2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xr(ot.fromBase64String(e))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xr(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class Lu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/^__.*__$/;class A2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ji(e,this.data,n,this.fieldTransforms)}}class fy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{hc:t})}}class Fu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return ua(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(dy(this.hc)&&I2.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class b2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$a(e)}gc(e,n,r,s=!1){return new Fu({hc:e,methodName:n,fc:r,path:it.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new b2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function py(t,e,n,r,s,i={}){const o=t.gc(i.merge||i.mergeFields?2:0,e,n,s);Bu("Data must be an object, but it was:",o,r);const c=my(r,o);let l,h;if(i.merge)l=new Lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Rl(e,p,n);if(!o.contains(g))throw new W(N.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yy(f,g)||f.push(g)}l=new Lt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new A2(new It(c),l,h)}class Ya extends Ga{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}class Uu extends Ga{constructor(e,n){super(e),this.wc=n}_toFieldTransform(e){const n=new Pi(e.serializer,A_(e.serializer,this.wc));return new fb(e.path,n)}isEqual(e){return e instanceof Uu&&this.wc===e.wc}}function R2(t,e,n,r){const s=t.gc(1,e,n);Bu("Data must be an object, but it was:",s,r);const i=[],o=It.empty();gr(r,(l,h)=>{const f=$u(e,l,n);h=We(h);const p=s.Ac(f);if(h instanceof Ya)i.push(f);else{const g=Ki(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Lt(i);return new fy(o,c,s.fieldTransforms)}function S2(t,e,n,r,s,i){const o=t.gc(1,e,n),c=[Rl(e,r,n)],l=[s];if(i.length%2!=0)throw new W(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Rl(e,i[g])),l.push(i[g+1]);const h=[],f=It.empty();for(let g=c.length-1;g>=0;--g)if(!yy(h,c[g])){const _=c[g];let k=l[g];k=We(k);const D=o.Ac(_);if(k instanceof Ya)h.push(_);else{const S=Ki(k,D);S!=null&&(h.push(_),f.set(_,S))}}const p=new Lt(h);return new fy(f,p,o.fieldTransforms)}function gy(t,e,n,r=!1){return Ki(n,t.gc(r?4:3,e))}function Ki(t,e){if(_y(t=We(t)))return Bu("Unsupported field value:",e,t),my(t,e);if(t instanceof Ga)return function(r,s){if(!dy(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ki(c,s.Rc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof Mu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xr)return{bytesValue:M_(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lu)return function(o,c){return{mapValue:{fields:{[c_]:{stringValue:l_},[ta]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Vc("VectorValues must only contain numeric values.");return gu(c.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Ha(r)}`)}(t,e)}function my(t,e){const n={};return n_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(t,(r,s)=>{const i=Ki(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Mu||t instanceof xr||t instanceof Ut||t instanceof Ga||t instanceof Lu)}function Bu(t,e,n){if(!_y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ha(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function Rl(t,e,n){if((e=We(e))instanceof Wa)return e._internalPath;if(typeof e=="string")return $u(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const P2=new RegExp("[~\\*/\\[\\]]");function $u(t,e,n){if(e.search(P2)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wa(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(N.INVALID_ARGUMENT,c+t+l)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ju("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C2 extends ki{data(){return super.data()}}function ju(t,e){return typeof e=="string"?$u(t,e):e instanceof Wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qu{}class Ja extends qu{}function fp(t,e,...n){let r=[];e instanceof qu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof zu).length,c=i.filter(l=>l instanceof Hu).length;if(o>1||o>0&&c>0)throw new W(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Hu extends Ja{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hu(e,n,r)}_apply(e){const n=this._parse(e);return vy(e._query,n),new xn(e.firestore,e.converter,ml(e._query,n))}_parse(e){const n=Qa(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mp(p,f);const k=[];for(const D of p)k.push(gp(l,i,D));g={arrayValue:{values:k}}}else g=gp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mp(p,f),g=gy(c,o,p,f==="in"||f==="not-in");return Ke.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class zu extends qu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)vy(o,l),o=ml(o,l)}(e._query,n),new xn(e.firestore,e.converter,ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ku extends Ja{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ku(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bi(i,o)}(e._query,this._field,this._direction);return new xn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Mr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dp(t,e="asc"){const n=e,r=ju("orderBy",t);return Ku._create(r,n)}class Wu extends Ja{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wu(e,n,r)}_apply(e){return new xn(e.firestore,e.converter,ra(e._query,this._limit,this._limitType))}}function pp(t){return Wu._create("limit",t,"F")}class Gu extends Ja{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gu(e,n,r)}_apply(e){const n=V2(e,this.type,this._docOrFields,this._inclusive);return new xn(e.firestore,e.converter,function(s,i){return new Mr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function D2(...t){return Gu._create("startAfter",t,!1)}function V2(t,e,n,r){if(n[0]=We(n[0]),n[0]instanceof ki)return function(i,o,c,l,h){if(!l)throw new W(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const p of cs(i))if(p.field.isKeyField())f.push(na(o,l.key));else{const g=l.data.field(p.field);if(xa(g))throw new W(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const _=p.field.canonicalString();throw new W(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}f.push(g)}return new _s(f,h)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Qa(t.firestore);return function(o,c,l,h,f,p){const g=o.explicitOrderBy;if(f.length>g.length)throw new W(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let k=0;k<f.length;k++){const D=f[k];if(g[k].field.isKeyField()){if(typeof D!="string")throw new W(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!pu(o)&&D.indexOf("/")!==-1)throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const S=o.path.child(Ve.fromString(D));if(!ne.isDocumentKey(S))throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const B=new ne(S);_.push(na(c,B))}else{const S=gy(l,h,D);_.push(S)}}return new _s(_,p)}(t._query,t.firestore._databaseId,s,e,n,r)}}function gp(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new W(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pu(e)&&n.indexOf("/")!==-1)throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!ne.isDocumentKey(r))throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return na(t,new ne(r))}if(n instanceof Ut)return na(t,n._key);throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ha(n)}.`)}function mp(t,e){if(!Array.isArray(t)||t.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ey{convertValue(e,n="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ta].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new Lu(i)}convertGeoPoint(e){return new Mu(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Re(q_(r),9688,{name:e});const s=new Ii(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class N2 extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wy extends ki{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ju("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends wy{data(e={}){return super.data(e)}}class x2{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:O2(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function O2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}class Iy extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function _p(t){t=Ci(t,xn);const e=Ci(t.firestore,Ka),n=Ou(e),r=new Iy(e);return k2(t._query),y2(n,t._query).then(s=>new x2(e,r,t,s))}function M2(t,e){const n=Ci(t.firestore,Ka),r=bl(t),s=Ty(t.converter,e);return L2(n,[py(Qa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function L2(t,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>t2(await g2(r),s,i)),i.promise}(Ou(t),e)}/**
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
 */const F2={maxAttempts:5};function Gs(t,e){if((t=We(t)).firestore!==e)throw new W(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Qa(e)}get(e){const n=Gs(e,this._firestore),r=new N2(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return se(24041);const i=s[0];if(i.isFoundDocument())return new ki(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new ki(this._firestore,r,n._key,null,n.converter);throw se(18433,{doc:i})})}set(e,n,r){const s=Gs(e,this._firestore),i=Ty(s.converter,n,r),o=py(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Gs(e,this._firestore);let o;return o=typeof(n=We(n))=="string"||n instanceof Wa?S2(this._dataReader,"Transaction.update",i._key,n,r,s):R2(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Gs(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2 extends U2{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Gs(e,this._firestore),r=new Iy(this._firestore);return super.get(e).then(s=>new wy(this._firestore,r,n._key,s._document,new Ws(!1,!1),n.converter))}}function $2(t,e,n){t=Ci(t,Ka);const r=Object.assign(Object.assign({},F2),n);return function(i){if(i.maxAttempts<1)throw new W(N.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,c){const l=new In;return i.asyncQueue.enqueueAndForget(async()=>{const h=await m2(i);new f2(i.asyncQueue,h,c,o,l).$u()}),l.promise}(Ou(t),s=>e(new B2(t,s)),r)}function yp(t){return new Uu("increment",t)}(function(e,n=!0){(function(s){Is=s})(Ts),ir(new Rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ka(new AA(r.getProvider("auth-internal")),new SA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),wn(md,_d,e),wn(md,_d,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map,Ay={activated:!1,tokenObservers:[]},j2={initialized:!1,enabled:!1};function Ye(t){return Sl.get(t)||Object.assign({},Ay)}function q2(t,e){return Sl.set(t,e),Sl.get(t)}function Xa(){return j2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="https://content-firebaseappcheck.googleapis.com/v1",H2="exchangeRecaptchaV3Token",z2="exchangeDebugToken",vp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},K2=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new yi,this.pending.promise.catch(n=>{}),await G2(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new yi,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function G2(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ct=new Es("appCheck","AppCheck",Q2);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Qu(t){if(!Ye(t).activated)throw Ct.create("use-before-activation",{appName:t.name})}function Ry(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=Eo(n)+"d:"),r&&(o+=Eo(r)+"h:"),o+=Eo(s)+"m:"+Eo(i)+"s",o}function Eo(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const p=await s.getHeartbeatsHeader();p&&(r["X-Firebase-Client"]=p)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(p){throw Ct.create("fetch-network-error",{originalErrorMessage:p==null?void 0:p.message})}if(o.status!==200)throw Ct.create("fetch-status-error",{httpStatus:o.status});let c;try{c=await o.json()}catch(p){throw Ct.create("fetch-parse-error",{originalErrorMessage:p==null?void 0:p.message})}const l=c.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw Ct.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const h=Number(l[1])*1e3,f=Date.now();return{token:c.token,expireTimeMillis:f+h,issuedAtTimeMillis:f}}function Y2(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${by}/projects/${n}/apps/${r}:${H2}?key=${s}`,body:{recaptcha_v3_token:e}}}function Sy(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${by}/projects/${n}/apps/${r}:${z2}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="firebase-app-check-database",X2=1,Di="firebase-app-check-store",Py="debug-token";let To=null;function Cy(){return To||(To=new Promise((t,e)=>{try{const n=indexedDB.open(J2,X2);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ct.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Di,{keyPath:"compositeKey"})}}}catch(n){e(Ct.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),To)}function Z2(t){return Dy(Vy(t))}function eS(t,e){return ky(Vy(t),e)}function tS(t){return ky(Py,t)}function nS(){return Dy(Py)}async function ky(t,e){const r=(await Cy()).transaction(Di,"readwrite"),i=r.objectStore(Di).put({compositeKey:t,value:e});return new Promise((o,c)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var h;c(Ct.create("storage-set",{originalErrorMessage:(h=l.target.error)===null||h===void 0?void 0:h.message}))}})}async function Dy(t){const n=(await Cy()).transaction(Di,"readonly"),s=n.objectStore(Di).get(t);return new Promise((i,o)=>{s.onsuccess=c=>{const l=c.target.result;i(l?l.value:void 0)},n.onerror=c=>{var l;o(Ct.create("storage-get",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function Vy(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Pa("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t){if(Xl()){let e;try{e=await Z2(t)}catch(n){Yn.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Lc(t,e){return Xl()?eS(t,e).catch(n=>{Yn.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function sS(){let t;try{t=await nS()}catch{}if(t)return t;{const e=crypto.randomUUID();return tS(e).catch(n=>Yn.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return Xa().enabled}async function Xu(){const t=Xa();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function iS(){const t=tm(),e=Xa();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new yi;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(sS())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={error:"UNKNOWN_ERROR"};function aS(t){return Jl.encodeString(JSON.stringify(t),!1)}async function Pl(t,e=!1,n=!1){const r=t.app;Qu(r);const s=Ye(r);let i=s.token,o;if(i&&!Xr(i)&&(s.token=void 0,i=void 0),!i){const h=await s.cachedTokenPromise;h&&(Xr(h)?i=h:await Lc(r,void 0))}if(!e&&i&&Xr(i))return{token:i.token};let c=!1;if(Ju())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=Yu(Sy(r,await Xu()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),c=!0);const h=await s.exchangeTokenPromise;return await Lc(r,h),s.token=h,{token:h.token}}catch(h){return h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Yn.warn(h.message):n&&Yn.error(h),Fc(h)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),c=!0),i=await Ye(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Yn.warn(h.message):n&&Yn.error(h),o=h}let l;return i?o?Xr(i)?l={token:i.token,internalError:o}:l=Fc(o):(l={token:i.token},s.token=i,await Lc(r,i)):l=Fc(o),c&&Oy(r,l),l}async function cS(t){const e=t.app;Qu(e);const{provider:n}=Ye(e);if(Ju()){const r=await Xu(),{token:s}=await Yu(Sy(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function Ny(t,e,n,r){const{app:s}=t,i=Ye(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Xr(i.token)){const c=i.token;Promise.resolve().then(()=>{n({token:c.token}),Tp(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Tp(t))}function xy(t,e){const n=Ye(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Tp(t){const{app:e}=t,n=Ye(e);let r=n.tokenRefresher;r||(r=lS(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function lS(t){const{app:e}=t;return new W2(async()=>{const n=Ye(e);let r;if(n.token?r=await Pl(t,!0):r=await Pl(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Ye(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},vp.RETRIAL_MIN_WAIT,vp.RETRIAL_MAX_WAIT)}function Oy(t,e){const n=Ye(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Xr(t){return t.expireTimeMillis-Date.now()>0}function Fc(t){return{token:aS(oS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ye(this.app);for(const n of e)xy(this.app,n.next);return Promise.resolve()}}function hS(t,e){return new uS(t,e)}function fS(t){return{getToken:e=>Pl(t,e),getLimitedUseToken:()=>cS(t),addTokenListener:e=>Ny(t,"INTERNAL",e),removeTokenListener:e=>xy(t.app,e)}}const dS="@firebase/app-check",pS="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="https://www.google.com/recaptcha/api.js";function mS(t,e){const n=new yi,r=Ye(t);r.reCAPTCHAState={initialized:n};const s=_S(t),i=Ep(!1);return i?wp(t,e,i,s,n):ES(()=>{const o=Ep(!1);if(!o)throw new Error("no recaptcha");wp(t,e,o,s,n)}),n.promise}function wp(t,e,n,r,s){n.ready(()=>{vS(t,e,n,r),s.resolve(n)})}function _S(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function yS(t){Qu(t);const n=await Ye(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=Ye(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function vS(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{Ye(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ye(t).reCAPTCHAState.succeeded=!1}}),i=Ye(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function ES(t){const e=document.createElement("script");e.src=gS,e.onload=t,document.head.appendChild(e)}/**
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
 */class Zu{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;wS(this._throttleData);const s=await yS(this._app).catch(o=>{throw Ct.create("recaptcha-error")});if(!(!((e=Ye(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Ct.create("recaptcha-error");let i;try{i=await Yu(Y2(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=TS(Number((r=o.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Ct.create("initial-throttle",{time:Ry(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=Li(e,"heartbeat"),mS(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Zu?this._siteKey===e._siteKey:!1}}function TS(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+K2,httpStatus:t};{const n=e?e.backoffCount:0,r=hT(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function wS(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Ct.create("throttled",{time:Ry(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t=eu(),e){t=We(t);const n=Li(t,"app-check");if(Xa().initialized||iS(),Ju()&&Xu().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw Ct.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return AS(t,e.provider,e.isTokenAutoRefreshEnabled),Ye(t).isTokenAutoRefreshEnabled&&Ny(r,"INTERNAL",()=>{}),r}function AS(t,e,n=!1){const r=q2(t,Object.assign({},Ay));r.activated=!0,r.provider=e,r.cachedTokenPromise=rS(t).then(s=>(s&&Xr(s)&&(r.token=s,Oy(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&Yn.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const bS="app-check",Ip="app-check-internal";function RS(){ir(new Rn(bS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return hS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ip).initialize()})),ir(new Rn(Ip,t=>{const e=t.getProvider("app-check").getImmediate();return fS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wn(dS,pS)}RS();const SS={apiKey:"AIzaSyDWJDMyP6_D179wtsKuHFEjAwoxJSvAfpA",authDomain:"shout-01433.firebaseapp.com",projectId:"shout-01433",storageBucket:"shout-01433.firebasestorage.app",messagingSenderId:"20457265330",appId:"1:20457265330:web:80e9afd476768bc71d11ab",measurementId:"G-5S6Z0C32DV"},eh=lm(SS),Sr=T2(eh,"bha-brother-shout-433"),Vi=EA(eh);IS(eh,{provider:new Zu("6Ld6o1ArAAAAAMlc8ih71CDqDftbKzOikZBlp6Sv"),isTokenAutoRefreshEnabled:!0});const th=At(null),My=gt(()=>{var t;return(t=th.value)==null?void 0:t.uid}),PS=gt(()=>Ly(My.value)),Ly=t=>t?"Guest "+t.slice(-3):null;cI(Vi,t=>{th.value=t});function Wi(){return{userId:My,currentUser:th,userName:PS,getUserName:Ly,signInAnonymously:()=>Nm(Vi),logout:()=>lI(Vi)}}const CS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function kS(t,e){return me(),be("svg",CS,e[0]||(e[0]=[Z("path",{d:"M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m2.92 10.81c-1.08 0-1.97.75-2.21 1.75-.54-.23-1.05-.17-1.42-.01-.24-1-1.14-1.74-2.21-1.74-1.25 0-2.26 1.01-2.26 2.26s1.01 2.26 2.26 2.26c1.2 0 2.16-.91 2.25-2.08.2-.13.71-.39 1.34.01a2.258 2.258 0 0 0 4.51-.19c0-1.25-1.01-2.26-2.26-2.26m-5.84.64c.92 0 1.62.73 1.62 1.62s-.7 1.62-1.62 1.62c-.89 0-1.62-.73-1.62-1.62s.73-1.62 1.62-1.62m5.84 0c.89 0 1.62.73 1.62 1.62s-.73 1.62-1.62 1.62c-.92 0-1.62-.73-1.62-1.62s.7-1.62 1.62-1.62m2.91-1.95H6.17v.67h11.66zm-3.68-4.61a.67.67 0 0 0-.8-.36L12 7l-1.35-.47-.04-.03a.67.67 0 0 0-.77.42l-1.48 3.91h7.28l-1.48-3.91z"},null,-1)]))}const Fy={render:kS},Cl=At(0),DS={class:"post-add flex flex-col flex-center"},VS={key:0,class:"post-add__form"},NS={class:"header"},xS=["disabled"],OS={key:0,width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},MS={key:1,class:"animate-spin",fill:"none",viewBox:"0 0 24 24"},LS={class:"body flex flex-col"},FS={class:"post-add__ctrl flex-center"},US=pr({__name:"AddPost",setup(t){const{currentUser:e,signInAnonymously:n}=Wi(),r=At(!1),s=At(!1),i=At(""),o=At(""),c=gt(()=>!s.value&&o.value.trim()!==""),l=async()=>{o.value.trim()&&await f(o.value.trim())},h=()=>{r.value=!1,o.value="",s.value=!1},f=async p=>{if(s.value=!0,!e.value)try{await n()}catch(g){i.value=g.message.replace("Firebase: ",""),alert(i.value)}M2(Mo(Sr,"shouts"),{text:p,timestamp:new Date,userId:e.value.uid}),h(),Cl.value=Cl.value+1};return(p,g)=>(me(),be("section",DS,[r.value?(me(),be("div",VS,[Z("div",NS,[Z("div",{class:"flex flex-center gap-1"},[Z("button",{class:"btn",onClick:h},g[2]||(g[2]=[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[Z("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"})],-1)])),g[3]||(g[3]=Z("h2",null,"নতুন পোস্ট",-1))]),Z("button",{onClick:l,class:"btn btn__primary",disabled:!c.value},[s.value?(me(),be("svg",MS,g[5]||(g[5]=[Z("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10","stroke-width":"4"},null,-1),Z("path",{class:"opacity-75",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"},null,-1)]))):(me(),be("svg",OS,g[4]||(g[4]=[Z("path",{d:"M3 20v-6l8-2l-8-2V4l19 8z"},null,-1)])))],8,xS)]),Z("div",LS,[Xv(Z("textarea",{"onUpdate:modelValue":g[0]||(g[0]=_=>o.value=_),class:"form-control",placeholder:"আপনার ভাবনা আমাদের সাথে ভাগ করুন",rows:"5"},null,512),[[T1,o.value]])])])):pi("",!0),Z("div",FS,[Z("button",{class:"btn btn__primary",onClick:g[1]||(g[1]=_=>r.value=!0)},g[6]||(g[6]=[Z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},[Z("path",{d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"})],-1)]))])]))}}),BS={class:"right flex flex-center gap-1"},$S=pr({__name:"AppHeader",setup(t){const{currentUser:e}=Wi();return(n,r)=>{const s=Ea("router-link");return me(),be("header",null,[ye(s,{class:"brand",to:{name:"home"}},{default:Pr(()=>r[0]||(r[0]=[Z("svg",{class:"logo",version:"1.1",viewBox:"0 0 123.94 123.94","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},[Z("path",{d:"m62.938 14.356c0.758 6.359 6.161 11.294 12.723 11.294 7.083 0 12.827-5.743 12.827-12.826s-5.744-12.824-12.827-12.824c-6.652 0-12.121 5.068-12.759 11.552 0.056 0.522 0.091 1.053 0.091 1.591-1e-3 0.409-0.022 0.812-0.055 1.213z"}),Z("path",{d:"m90.709 33.332c-0.272 1.096-0.817 2.202-1.714 3.252-2.938 3.454-11.688 7.025-21.244 7.025-1.483 0-2.977-0.092-4.458-0.272v22.832c0 0.897-0.108 1.782-0.308 2.649 0.08 0.26 0.167 0.518 0.267 0.769-0.037 0.26-0.061 0.521-0.061 0.79l4e-3 47.678c0 3.25 2.635 5.884 5.885 5.883 3.251 0 5.884-2.635 5.884-5.884l-2e-3 -40.917c0.233 0.012 0.465 0.029 0.701 0.029 0.045 0 0.091-4e-3 0.138-6e-3l-2e-3 40.895c0 3.25 2.633 5.884 5.885 5.884 3.249 0 5.885-2.634 5.885-5.884v-46.86c0.36 0.393 0.788 0.734 1.282 1.004 0.756 0.41 1.57 0.606 2.373 0.606 1.767 0 3.478-0.94 4.379-2.601 10.485-19.276 2.466-30.708-4.894-36.872zm-1.921 28.053v-15.278c2.168 3.779 2.698 8.633 0 15.278z"}),Z("path",{d:"m72.565 26.358c-0.012 2e-3 -0.021 3e-3 -0.032 5e-3 -2.433 0.581-4.792 1.83-6.611 3.588 0.587 0.043 1.18 0.072 1.787 0.072 4.474 0 8.484-1.192 10.438-2.122 0.295-0.513 0.662-0.98 1.079-1.401-0.123-0.033-0.246-0.077-0.369-0.108 0 0-1.887-0.278-3.177-0.288-1.287-9e-3 -3.115 0.254-3.115 0.254z"}),Z("path",{d:"m88.185 35.092c2.134-2.505 1.721-5.403 0.365-7.164-1.679-2.18-4.805-2.587-6.982-0.91-0.678 0.521-1.185 1.182-1.509 1.91-3.228 1.785-13.693 4.734-22.217 0.13-0.166-0.089-0.333-0.166-0.504-0.235-1.577-1.167-3.409-2.012-5.283-2.459-0.011-2e-3 -0.021-3e-3 -0.032-5e-3 0 0-1.618-0.26-3.074-0.255-1.458 4e-3 -3.217 0.29-3.217 0.29-1.603 0.394-3.176 1.072-4.582 1.995-0.173 0.08-0.348 0.146-0.513 0.248-6.298 3.861-25.459 15.614-11.411 41.436 0.901 1.658 2.613 2.601 4.378 2.601 0.803 0 1.621-0.196 2.376-0.606 0.387-0.212 0.73-0.472 1.038-0.761l-0.026 29.681-11.021 7.209c-2.72 1.778-3.481 5.426-1.703 8.145 1.13 1.727 3.012 2.664 4.931 2.664 1.105 0 2.222-0.311 3.215-0.96l4.566-2.986-2e-3 2.994c-2e-3 3.25 2.628 5.886 5.878 5.89h6e-3c3.248 0 5.883-2.631 5.885-5.879l9e-3 -10.708 9.951-6.51c1.661-1.086 2.663-2.935 2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794 0.456-1.148 0.716-2.398 0.716-3.738v-24.944c2.109 0.385 4.216 0.568 6.27 0.568 9.217-1e-3 17.359-3.447 19.862-6.388zm-52.386 25.544c-2.328-6.087-1.901-10.641 0-14.236v14.236zm13.804 32.096-0.837 0.549 0.016-16.121c0.047 0 0.095 4e-3 0.143 4e-3 0.233 0 0.463-0.018 0.694-0.028l-0.016 15.596z"}),Z("circle",{cx:"48.926",cy:"12.825",r:"12.825"})],-1),Z("h1",null,"ভাই ব্রাদার্স",-1)])),_:1,__:[0]}),Z("div",BS,[ye(US),ge(e)?(me(),Cr(s,{key:0,class:"user",to:{name:"UserPage"}},{default:Pr(()=>[ye(ge(Fy),{alt:"User Icon",width:"48",height:"48"})]),_:1})):pi("",!0)])])}}}),jS=Kt($S,[["__scopeId","data-v-456dd64c"]]),qS={};function HS(t,e){const n=Ea("RouterLink");return me(),be("footer",null,[ye(n,{to:"/terms"},{default:Pr(()=>e[0]||(e[0]=[xt("Terms and Conditions")])),_:1,__:[0]}),e[2]||(e[2]=xt(" | ")),ye(n,{to:"/privacy"},{default:Pr(()=>e[1]||(e[1]=[xt("Privacy Policy")])),_:1,__:[1]})])}const zS=Kt(qS,[["render",HS],["__scopeId","data-v-9677e4fd"]]),KS={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=Ea("router-view");return me(),be(Xe,null,[ye(jS),Z("main",null,[ye(r)]),ye(zS)],64)}}},WS=Kt(KS,[["__scopeId","data-v-b21eda16"]]),GS={};function QS(t,e){return me(),be("section",null,e[0]||(e[0]=[Z("h2",null,"About",-1),Z("p",null,"This is a simple shoutout app built with Vue 3 and Firebase.",-1)]))}const YS=Kt(GS,[["render",QS]]),JS={},XS={class:"loader"};function ZS(t,e){return me(),be("div",XS)}const eP=Kt(JS,[["render",ZS]]);var tP=["second","minute","hour","day","week","month","year"];function nP(t,e){if(e===0)return["just now","right now"];var n=tP[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var rP=["秒","分钟","小时","天","周","个月","年"];function sP(t,e){if(e===0)return["刚刚","片刻后"];var n=rP[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]}var kl={},Uy=function(t,e){kl[t]=e},iP=function(t){return kl[t]||kl.en_US},Uc=[60,60,24,7,365/7/12,12];function Ap(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function oP(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,s=0;t>=Uc[s]&&s<Uc.length;s++)t/=Uc[s];return t=Math.floor(t),s*=2,t>(s===0?9:1)&&(s+=1),e(t,s,r)[n].replace("%s",t.toString())}function aP(t,e){var n=e?Ap(e):new Date;return(+n-+Ap(t))/1e3}var cP=function(t,e,n){var r=aP(t,n&&n.relativeDate);return oP(r,iP(e))};Uy("en_US",nP);Uy("zh_CN",sP);const lP={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 512.001 512.001"};function uP(t,e){return me(),be("svg",lP,e[0]||(e[0]=[Ia('<circle cx="256.004" cy="256.004" r="246.855" style="fill:#f95428;"></circle><path d="M126.306 385.694c-88.801-88.802-95.798-228.426-20.998-325.241A249 249 0 0 0 81.45 81.452c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249 249 0 0 0 20.999-23.858c-96.815 74.799-236.44 67.802-325.242-20.999" style="fill:#e54728;"></path><path d="M220.789 326.378a9.13 9.13 0 0 1-7.104-3.377c-3.188-3.92-2.596-9.684 1.325-12.872 11.647-9.473 26.436-14.69 41.644-14.69 14.5 0 28.75 4.799 40.126 13.512a9.153 9.153 0 0 1 1.701 12.828c-3.073 4.012-8.815 4.772-12.828 1.701-8.2-6.281-18.499-9.74-28.999-9.74-11.014 0-21.703 3.76-30.097 10.587a9.12 9.12 0 0 1-5.768 2.051" style="fill:#e54728;"></path><path d="M256.001 0C114.841 0 0 114.841 0 256.001s114.841 256.001 256.001 256.001 256-114.842 256-256.001S397.16 0 256.001 0m0 493.701c-131.069 0-237.702-106.631-237.702-237.7S124.932 18.299 256.001 18.299s237.702 106.632 237.702 237.702-106.635 237.7-237.702 237.7"></path><path d="M180.577 229.78c0-3.914-.676-7.672-1.903-11.172 3.656.376 7.477.589 11.481.589 10.598 0 22.412-1.442 35.442-4.985 4.875-1.326 7.753-6.353 6.428-11.231-1.327-4.877-6.362-7.751-11.231-6.428-64.932 17.664-93.048-23.646-94.229-25.438-2.746-4.219-8.386-5.43-12.621-2.702-4.249 2.735-5.475 8.397-2.74 12.646.305.476 6.439 9.849 19.049 19.163-10.357 5.796-17.378 16.869-17.378 29.558 0 18.666 15.186 33.852 33.852 33.852s33.85-15.186 33.85-33.852M260.322 257.016c-45.315 0-85.656 28.193-100.385 70.154-1.673 4.768.836 9.989 5.603 11.664a9.15 9.15 0 0 0 11.665-5.603c12.159-34.641 45.562-57.915 83.118-57.915 37.548 0 70.947 23.274 83.106 57.915a9.15 9.15 0 0 0 8.634 6.122 9.15 9.15 0 0 0 8.633-12.182c-14.731-41.963-55.068-70.155-100.374-70.155M398.086 168.459c-4.219-2.749-9.879-1.551-12.647 2.655-1.164 1.768-29.28 43.107-94.229 25.441-4.871-1.325-9.903 1.551-11.231 6.428-1.326 4.876 1.552 9.903 6.428 11.231 13.033 3.544 24.843 4.985 35.442 4.985 4.003 0 7.823-.213 11.48-.589a33.7 33.7 0 0 0-1.903 11.172c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-12.689-7.021-23.762-17.378-29.558 12.611-9.314 18.744-18.687 19.049-19.163 2.723-4.236 1.503-9.855-2.715-12.602"></path><circle cx="155.969" cy="225.835" r="9.15" style="fill:#000;"></circle><circle cx="374.338" cy="225.835" r="9.15" style="fill:#000;"></circle>',7)]))}const bp={render:uP},hP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"};function fP(t,e){return me(),be("svg",hP,e[0]||(e[0]=[Z("g",{fill:"none"},[Z("path",{fill:"#f8312f",d:"M6 6c4.665-2.332 8.5.5 10 2.5 1.5-2 5.335-4.832 10-2.5 6 3 4.5 10.5 0 15-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21 1.5 16.5 0 9 6 6"}),Z("path",{fill:"#ca0b4a",d:"M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6 0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827"}),Z("ellipse",{cx:"23.477",cy:"12.594",fill:"#f37366",rx:"2.836",ry:"4.781",transform:"rotate(30 23.477 12.594)"})],-1)]))}const Rp={render:fP},dP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};function pP(t,e){return me(),be("svg",dP,e[0]||(e[0]=[Z("path",{d:"M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.531.54.626.043 1.337-.198 1.661-.528.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.479.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.309 1.34-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526.101-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.769 1.792.369.711.516 1.414.424 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681.68.68 0 0 1-.679-.681z"},null,-1)]))}const Bc={render:pP},gP={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"iconify iconify--noto",viewBox:"0 0 128 128"};function mP(t,e){return me(),be("svg",gP,e[0]||(e[0]=[Ia('<radialGradient id="a" cx="63.6" cy="1992.9" r="56.96" gradientTransform="translate(0 -1930)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"></stop><stop offset=".92" stop-color="#f7c02b"></stop><stop offset="1" stop-color="#f4a223"></stop></radialGradient><path fill="url(#a)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4 11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5"></path><path fill="#eb8f00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23 0 16.9-6.1 31.2-17.6 41.4-10.6 9.3-25 14.5-40.4 14.5-18.06 0-37-7.35-48.18-22.94 10.76 17.66 31 25.94 50.18 25.94 15.4 0 29.8-5.2 40.4-14.5 11.5-10.2 17.6-24.5 17.6-41.4 0-12.74-3.47-24.06-10.11-33.23"></path><path fill="#422b0d" d="M64 87.15c10.82 0 17.83 7.92 19.65 11.57.7 1.41.74 2.58.14 3.13-.63.41-1.45.41-2.08 0-.31-.15-.62-.32-.9-.52a28.85 28.85 0 0 0-33.61 0c-.28.2-.58.37-.9.52-.63.42-1.45.42-2.08 0-.6-.55-.56-1.72.14-3.13 1.81-3.64 8.82-11.57 19.64-11.57"></path><g fill="#422b0d"><path d="M27.39 39.77c-2.2.39-2.31 3.59.09 3.7 5.3.08 10.42-1.88 14.32-5.47a17.2 17.2 0 0 0 3.71-4.49c.58-.83.38-1.97-.44-2.56s-1.97-.38-2.56.44l-.1.1c-3.93 4.39-9.22 7.3-15.02 8.28M86.12 31.52l-.1-.1a1.84 1.84 0 0 0-2.56-.45 1.83 1.83 0 0 0-.44 2.56c.98 1.69 2.24 3.2 3.73 4.47 3.9 3.59 9.02 5.54 14.32 5.45 2.4-.11 2.29-3.31.08-3.7-5.8-.97-11.09-3.87-15.03-8.23"></path></g><radialGradient id="b" cx="20.59" cy="-404.695" r="33.4" gradientTransform="matrix(1 0 0 -1.54 0 -560.29)" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#1e88e5"></stop></radialGradient><path fill="url(#b)" d="M19.52 107c-8.46 0-15-8.21-15-15.24 0-4.94 2.21-10.67 5.34-18.61.39-1.17.91-2.35 1.43-3.65 1.49-3.72 2.8-7.75 4.8-11.24a3.516 3.516 0 0 1 6.14 0c1.86 3.43 3.14 7.14 5.07 11.47 5.47 12.24 7 17.19 7 22.13.19 6.97-6.45 15.14-14.78 15.14"></path><path fill="#81d4fa" d="M28.67 97.65c-1.91 3-6.25 2.4-6.25-2.51 0-3.14.64-19.26 3.34-17 4.38 3.67 5.63 15.33 2.91 19.51"></path><path fill="#422b0d" d="M44.67 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.81-9.42-8-9.42"></path><path fill="#896024" d="M44.28 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path><path fill="#422b0d" d="M83 54.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41 8-3.54 8-9.41-3.79-9.42-8-9.42"></path><path fill="#896024" d="M82.63 58.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3 1.42.68 3.13.08 3.82-1.34.53-1.11.29-2.44-.6-3.3"></path>',12)]))}const Sp={render:mP},_P={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function yP(t,e){return me(),be("svg",_P,[(me(),Cr(mg("style"),null,{default:Pr(()=>e[0]||(e[0]=[xt(".st0{fill:#fff}.st5{fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")])),_:1,__:[0]})),e[1]||(e[1]=Ia('<path d="M542.7 1092.6H377.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c0 13-10.6 23.6-23.6 23.6m81.3-89.1V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1 1 58.3 41.7 58.3 41.7s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.2 0-22.6 0-22.6-30" class="st0"></path><path d="M750 541.9C716.5 338.7 319.5 323.2 319.5 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1" class="st0"></path><ellipse cx="750.2" cy="751.1" rx="750" ry="748.8" style="fill:#ffda6b;"></ellipse><path id="mond" d="M755.3 784.1H255.4s13.2 431.7 489 455.8c6.7.3 11.2.1 11.2.1 475.9-24.1 489-455.9 489-455.9z" style="fill:#262c38;"></path><path id="tong" d="M312.1 991.7s174.8-83.4 435-82.6c129 .4 282.7 12 439.2 83.4 0 0-106.9 260.7-436.7 260.7-329 0-437.5-261.5-437.5-261.5" style="fill:#f05266;"></path><path id="linker_1_" d="M1200.2 411 993 511.4l204.9 94.2" class="st5"></path><path id="linker_4_" d="M297.8 411 505 511.4l-204.9 94.2" class="st5"></path>',7))])}const Pp={render:yP},vP={xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 1500 1500"};function EP(t,e){return me(),be("svg",vP,[(me(),Cr(mg("style"),null,{default:Pr(()=>e[0]||(e[0]=[xt(".st1{fill:#262c38}")])),_:1,__:[0]})),e[1]||(e[1]=Ia('<circle cx="750" cy="750" r="750" style="fill:#ffda6b;"></circle><ellipse cx="748.3" cy="1046.3" class="st1" rx="220.6" ry="297.2"></ellipse><ellipse cx="402.2" cy="564.9" class="st1" rx="155.6" ry="109.2" transform="rotate(-81.396 402.197 564.888)"></ellipse><ellipse cx="1093.2" cy="564.9" class="st1" rx="109.2" ry="155.6" transform="rotate(-8.604 1093.463 564.999)"></ellipse><path d="M320.9 223s69.7-96.7 174-28.6m682.6 28.6s-69.7-96.7-174-28.6" style="fill:none;stroke:#262c38;stroke-width:60;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path>',5))])}const Cp={render:EP};var Vt=(t=>(t.Like="like",t.Haha="haha",t.Love="love",t.Wow="wow",t.Sad="sad",t.Poop="poop",t.Angry="angry",t))(Vt||{});const TP={key:0,class:"reaction-panel"},wP={class:"wrap flex flex-center"},IP=pr({__name:"ReactBtn",props:{postId:{},value:{}},setup(t){const e=t,{currentUser:n,signInAnonymously:r}=Wi(),s=At(!1),i=At(null),o=At(e.value||null),c=gt(()=>{var D;return(D=n.value)==null?void 0:D.uid}),l=()=>{_()||(s.value=!0)},h=()=>{s.value=!1},f=()=>{_()&&(i.value=setTimeout(()=>{s.value=!0},500))},p=()=>{clearTimeout(i.value)},g=async D=>{s.value=!1,o.value=D,await k(D)};function _(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const k=async D=>{const S=e.postId;c.value||await r(),console.log("userId",c.value,S);const B=bl(Sr,"shouts",S),U=bl(Sr,`shouts/${S}/reactions`,c.value);await $2(Sr,async j=>{const q=await j.get(U),fe=await j.get(B);if(!fe.exists())throw new Error("Shout not found");fe.data().reactionSummary;let he=null;if(q.exists()&&(he=q.data().type),he===D)return;j.set(U,{type:D,timestamp:new Date});const I={[`reactionSummary.${D}`]:yp(1)};he&&(I[`reactionSummary.${he}`]=yp(-1)),j.update(B,I)})};return(D,S)=>(me(),be("div",{class:"react-btn flex items-center justify-center relative",onMouseenter:l,onMouseleave:h,onTouchstart:f,onTouchend:p},[Z("button",{onClick:S[0]||(S[0]=B=>s.value=!s.value),class:"likebtn flex flex-column"},[o.value?o.value===ge(Vt).Like?(me(),be(Xe,{key:1},[ye(ge(Bc),{width:"18",height:"20",fill:"#1E90FF"}),S[8]||(S[8]=Z("span",{class:"color-blue"},"Like",-1))],64)):o.value===ge(Vt).Haha?(me(),be(Xe,{key:2},[ye(ge(Pp),{width:"22",height:"22"}),S[9]||(S[9]=Z("span",{class:"color-yellow"},"Haha",-1))],64)):o.value===ge(Vt).Love?(me(),be(Xe,{key:3},[ye(ge(Rp),{width:"22",height:"22"}),S[10]||(S[10]=xt()),S[11]||(S[11]=Z("span",{class:"color-red"},"Love",-1))],64)):o.value===ge(Vt).Wow?(me(),be(Xe,{key:4},[ye(ge(Cp),{width:"22",height:"22"}),S[12]||(S[12]=xt()),S[13]||(S[13]=Z("span",{class:"color-yellow"},"Wow",-1))],64)):o.value===ge(Vt).Sad?(me(),be(Xe,{key:5},[ye(ge(Sp),{width:"22",height:"22"}),S[14]||(S[14]=xt()),S[15]||(S[15]=Z("span",{class:"color-yellow"},"Sad",-1))],64)):o.value===ge(Vt).Angry?(me(),be(Xe,{key:6},[ye(ge(bp),{width:"22",height:"22"}),S[16]||(S[16]=xt()),S[17]||(S[17]=Z("span",{class:"color-red"},"Angry",-1))],64)):pi("",!0):(me(),be(Xe,{key:0},[ye(ge(Bc),{width:"18",height:"18"}),S[7]||(S[7]=xt(" Like "))],64))]),s.value?(me(),be("div",TP,[Z("div",wP,[Z("button",{onClick:S[1]||(S[1]=B=>g(ge(Vt).Like))},[ye(ge(Bc),{width:"20",height:"20",fill:"#1E90FF"})]),Z("button",{onClick:S[2]||(S[2]=B=>g(ge(Vt).Haha))},[ye(ge(Pp),{width:"24",height:"24"})]),Z("button",{onClick:S[3]||(S[3]=B=>g(ge(Vt).Love))},[ye(ge(Rp),{width:"30",height:"30"})]),Z("button",{onClick:S[4]||(S[4]=B=>g(ge(Vt).Wow))},[ye(ge(Cp),{width:"24",height:"24"})]),Z("button",{onClick:S[5]||(S[5]=B=>g(ge(Vt).Sad))},[ye(ge(Sp),{width:"28",height:"28"})]),Z("button",{onClick:S[6]||(S[6]=B=>g(ge(Vt).Angry))},[ye(ge(bp),{width:"26",height:"26"})])])])):pi("",!0)],32))}}),AP=Kt(IP,[["__scopeId","data-v-d74ce8f6"]]),bP={class:"post"},RP={class:"head flex"},SP={class:"author flex"},PP={class:"body"},CP={class:"footer flex"},kP=pr({__name:"Post",props:{item:{}},setup(t){const e=t,{getUserName:n,userId:r}=Wi(),s=e.item.id,i=gt(()=>{if(r.value){const o=e.item.reactions.find(c=>c.id===r.value);if(o)return o.type}return null});return(o,c)=>(me(),be("div",bP,[Z("div",RP,[ye(ge(Fy),{width:"48",height:"48"}),Z("div",SP,[Z("span",null,ts(ge(n)(o.item.userId)),1),Z("i",null,ts(ge(cP)(new Date(o.item.timestamp.seconds*1e3))),1)])]),Z("div",PP,ts(o.item.text),1),c[0]||(c[0]=Z("div",{class:"border-top"},null,-1)),Z("div",CP,[ye(AP,{"post-id":ge(s),value:i.value},null,8,["post-id","value"])])]))}}),DP=Kt(kP,[["__scopeId","data-v-5b60f8ec"]]),VP={key:1,class:"masonry"},kp=10,NP=pr({__name:"HomePage",setup(t){xE();const e=At(!1),n=At([]),r=At(null),s=async()=>{let o;e.value=!0,r.value?o=fp(Mo(Sr,"shouts"),dp("timestamp","desc"),D2(r.value),pp(kp)):o=fp(Mo(Sr,"shouts"),dp("timestamp","desc"),pp(kp));const c=await _p(o),l=[];for(const h of c.docs){const f=h.data(),p=h.id,_=(await _p(Mo(Sr,"shouts",p,"reactions"))).docs.map(k=>({id:k.id,...k.data()}));l.push({id:p,...f,reactions:_})}c.empty||(r.value=c.docs[c.docs.length-1]),n.value.push(...l),e.value=!1};return fg(s),ei(Cl,async()=>{n.value=[],r.value=null,await s()}),(o,c)=>e.value?(me(),Cr(eP,{key:0})):(me(),be("div",VP,[(me(!0),be(Xe,null,f0(n.value,l=>(me(),Cr(DP,{key:l.id,item:l,class:"masonry-item"},null,8,["item"]))),128))]))}}),xP=Kt(NP,[["__scopeId","data-v-9abdfb49"]]),OP={};function MP(t,e){return me(),be("section",null,e[0]||(e[0]=[Z("h2",null,"Privacy Policy",-1),Z("p",null,"Privacy Policy content goes here...",-1)]))}const LP=Kt(OP,[["render",MP]]),FP={};function UP(t,e){return me(),be("section",null,e[0]||(e[0]=[Z("h2",null,"Terms and Conditions",-1),Z("p",null,"Terms and Conditions content goes here...",-1)]))}const BP=Kt(FP,[["render",UP]]),$P={class:"container"},jP={key:0,class:"identity"},qP={class:"signin"},HP=["disabled"],zP=["disabled"],KP=pr({__name:"UserPage",setup(t){const e=NE(),{userId:n,userName:r}=Wi(),s=At(!1),i=At(!1),o=async()=>{s.value=!0;try{const l=await Nm(Vi);s.value=!1}catch(l){console.error("Anonymous sign-in error:",l),alert("Failed to sign in: "+l.message)}},c=async()=>{i.value=!0;try{await Vi.signOut(),i.value=!1,e.replace({name:"home"})}catch(l){console.error("Sign-out error:",l),alert("Failed to sign out: "+l.message)}};return(l,h)=>(me(),be("section",$P,[h[1]||(h[1]=Z("h2",null,"About you",-1)),ge(n)?(me(),be("div",jP,[xt(ts(ge(r)),1),h[0]||(h[0]=Z("br",null,null,-1)),xt("ID: "+ts(ge(n)),1)])):pi("",!0),h[2]||(h[2]=Z("p",{class:"desc"}," You’re an anonymous user created by Firebase Authentication. When you first opened the app, Firebase gave you a unique, private ID. This lets the app save your progress without knowing who you are. If you log out, your anonymous data will be lost. ",-1)),Z("div",qP,[ge(n)?(me(),be("button",{key:1,onClick:c,class:"btn btn__primary",disabled:i.value}," Sign out ",8,zP)):(me(),be("button",{key:0,onClick:o,class:"btn btn__primary",disabled:s.value}," Sign in as Guest ",8,HP))])]))}}),WP=Kt(KP,[["__scopeId","data-v-922e1ab5"]]),GP=[{path:"/",component:WS,children:[{path:"",name:"home",component:xP},{path:"about",name:"about",component:YS},{path:"terms",name:"terms",component:BP},{path:"privacy",name:"privacy",component:LP},{path:"user",name:"UserPage",component:WP}]}],QP=DE({history:oE("/"),routes:GP}),By=A1(C1);By.use(QP);By.mount("#app");
