const a={};function R(e){a.context=e}function de(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const he=(e,t)=>e===t,ye=Symbol("solid-proxy"),ge=Symbol("solid-track"),B={equals:he};let ne=oe;const E=1,U=2,se={owned:null,cleanups:null,context:null,owner:null};var y=null;let C=null,d=null,g=null,p=null,X=0;function I(e,t){const n=d,s=y,i=e.length===0,l=i?se:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>L(()=>v(l)));y=l,d=null;try{return P(r,!0)}finally{d=n,y=s}}function we(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),le(n,i));return[ie.bind(n),s]}function Xe(e,t,n){const s=_(e,t,!0,E);O(s)}function N(e,t,n){const s=_(e,t,!1,E);O(s)}function ve(e,t,n){ne=Ae;const s=_(e,t,!1,E);s.user=!0,p?p.push(s):O(s)}function H(e,t,n){n=n?Object.assign({},B,n):B;const s=_(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),ie.bind(s)}function We(e){return P(e,!1)}function L(e){let t,n=d;return d=null,t=e(),d=n,t}function me(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Qe(){return y}function Ge(e){const t=H(e),n=H(()=>V(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function ie(){const e=C;if(this.sources&&(this.state||e))if(this.state===E||e)O(this);else{const t=g;g=null,P(()=>K(this),!1),g=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&P(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=C&&C.running;r&&C.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?g.push(l):p.push(l),l.observers&&re(l)),r||(l.state=E)}if(g.length>1e6)throw g=[],new Error},!1)),t}function O(e){if(!e.fn)return;v(e);const t=y,n=d,s=X;d=y=e,be(e,e.value,s),d=n,y=t}function be(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=E),fe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,s):e.value=s,e.updatedAt=n)}function _(e,t,n,s=E,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==se&&(y.owned?y.owned.push(l):y.owned=[l]),l}function F(e){const t=C;if(e.state===0||t)return;if(e.state===U||t)return K(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===E||t)O(e);else if(e.state===U||t){const i=g;g=null,P(()=>K(e,n[0]),!1),g=i}}function P(e,t){if(g)return e();let n=!1;t||(g=[]),p?n=!0:p=[],X++;try{const s=e();return xe(n),s}catch(s){g||(p=null),fe(s)}}function xe(e){if(g&&(oe(g),g=null),e)return;const t=p;p=null,t.length&&P(()=>ne(t),!1)}function oe(e){for(let t=0;t<e.length;t++)F(e[t])}function Ae(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:F(s)}for(a.context&&R(),t=0;t<n;t++)F(e[t])}function K(e,t){const n=C;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===E||n?i!==t&&F(i):(i.state===U||n)&&K(i,t))}}function re(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=U,s.pure?g.push(s):p.push(s),s.observers&&re(s))}}function v(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)v(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function pe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function fe(e){throw e=pe(e),e}function V(e){if(typeof e=="function"&&!e.length)return V(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=V(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const Ee=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,n={}){let s=[],i=[],l=[],r=0,o=t.length>1?[]:null;return me(()=>W(l)),()=>{let u=e()||[],c,f;return u[ge],L(()=>{let h=u.length,m,S,M,j,q,b,x,A,k;if(h===0)r!==0&&(W(l),l=[],s=[],i=[],r=0,o&&(o=[])),n.fallback&&(s=[Ee],i[0]=I(ae=>(l[0]=ae,n.fallback())),r=1);else if(r===0){for(i=new Array(h),f=0;f<h;f++)s[f]=u[f],i[f]=I(w);r=h}else{for(M=new Array(h),j=new Array(h),o&&(q=new Array(h)),b=0,x=Math.min(r,h);b<x&&s[b]===u[b];b++);for(x=r-1,A=h-1;x>=b&&A>=b&&s[x]===u[A];x--,A--)M[A]=i[x],j[A]=l[x],o&&(q[A]=o[x]);for(m=new Map,S=new Array(A+1),f=A;f>=b;f--)k=u[f],c=m.get(k),S[f]=c===void 0?-1:c,m.set(k,f);for(c=b;c<=x;c++)k=s[c],f=m.get(k),f!==void 0&&f!==-1?(M[f]=i[c],j[f]=l[c],o&&(q[f]=o[c]),f=S[f],m.set(k,f)):l[c]();for(f=b;f<h;f++)f in M?(i[f]=M[f],l[f]=j[f],o&&(o[f]=q[f],o[f](f))):i[f]=I(w);i=i.slice(0,r=h),s=u.slice(0)}return i});function w(h){if(l[f]=h,o){const[m,S]=we(f);return o[f]=S,t(u[f],m)}return t(u[f])}}}let ce=!1;function Ce(){ce=!0}function Je(e,t){if(ce&&a.context){const n=a.context;R(de());const s=L(()=>e(t||{}));return R(n),s}return L(()=>e(t||{}))}function D(){return!0}const Ne={get(e,t,n){return t===ye?n:e.get(t)},has(e,t){return e.has(t)},set:D,deleteProperty:D,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:D,deleteProperty:D}},ownKeys(e){return e.keys()}};function Ze(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(l=>{const r={};for(let o=0;o<l.length;o++){const u=l[o];Object.defineProperty(r,u,s[u]?s[u]:{get(){return e[u]},set(){return!0}})}return r});return i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},Ne)),i}function ze(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(Se(()=>e.each,e.children,t||void 0))}function et(e){let t=!1;const n=e.keyed,s=H(()=>e.when,void 0,{equals:(i,l)=>t?i===l:!i==!l});return H(()=>{const i=s();if(i){const l=e.children,r=typeof l=="function"&&l.length>0;return t=n||r,r?L(()=>l(i)):l}return e.fallback})}const ke=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Te=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ke]),Le=new Set(["innerHTML","textContent","innerText","children"]),$e={className:"class",htmlFor:"for"},Q={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Oe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Pe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Me(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,u=t[i-1].nextSibling,c=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const f=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],f)}else if(l===o)for(;r<i;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!c){c=new Map;let w=o;for(;w<l;)c.set(n[w],w++)}const f=c.get(t[r]);if(f!=null)if(o<f&&f<l){let w=r,h=1,m;for(;++w<i&&w<l&&!((m=c.get(t[w]))==null||m!==f+h);)h++;if(h>f-o){const S=t[r];for(;o<f;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const G="_$DX_DELEGATE";function He(e,t,n){let s;return I(i=>{s=i,t===document?e():Ke(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function tt(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function je(e,t=window.document){const n=t[G]||(t[G]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,ue))}}function qe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function De(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ie(e,t){t==null?e.removeAttribute("class"):e.className=t}function Be(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function Ue(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(J(e,o,!1),delete n[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(J(e,o,!0),n[o]=u)}return n}function Fe(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let l,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)l=t[r],l!==n[r]&&(s.setProperty(r,l),n[r]=l);return n}function nt(e,t,n,s){typeof t=="function"?N(i=>z(e,t(),i,n,s)):z(e,t,void 0,n,s)}function Ke(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return $(e,t,s,n);N(i=>$(e,t(),i,n),s)}function _e(e,t,n,s,i={},l=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;Z(e,r,null,i[r],n,l)}for(const r in t){if(r==="children"){s||$(e,t.children);continue}const o=t[r];i[r]=Z(e,r,o,i[r],n,l)}}function Re(e,t,n={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=globalThis._$HY.load,a.gather=i=>te(t,i),a.registry=new Map,a.context={id:n.renderId||"",count:0},te(t,n.renderId);const s=He(e,t,[...t.childNodes]);return a.context=null,s}function st(e){let t,n;return!a.context||!(t=a.registry.get(n=Ye()))?e.cloneNode(!0):(a.completed&&a.completed.add(t),a.registry.delete(n),t)}function it(e){let t=e,n=0,s=[];if(a.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function lt(){a.events&&!a.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=a;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ue(s),t.shift()}}),a.events.queued=!0)}function Ve(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function J(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function Z(e,t,n,s,i,l){let r,o,u;if(t==="style")return Fe(e,n,s);if(t==="classList")return Ue(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=Oe.has(c);if(!f&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(c,w)}(f||n)&&(Be(e,c,n,f),f&&je([c]))}else if((u=Le.has(t))||!i&&(Q[t]||(o=Te.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?Ie(e,n):r&&!o&&!u?e[Ve(t)]=n:e[Q[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Pe[t.split(":")[0]];c?De(e,c,t,n):qe(e,$e[t]||t,n)}return n}function ue(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),a.registry&&!a.done&&(a.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function z(e,t,n={},s,i){return t||(t={}),i||N(()=>n.children=$(e,t.children,n.children)),N(()=>t.ref&&t.ref(e)),N(()=>_e(e,t,s,!0,n,!0)),n}function $(e,t,n,s,i){for(a.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(a.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=T(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(a.context)return n;n=T(e,n,s)}else{if(l==="function")return N(()=>{let o=t();for(;typeof o=="function";)o=o();n=$(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(Y(o,t,n,i))return N(()=>n=$(e,o,n,s,!0)),()=>n;if(a.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=T(e,n,s),r)return n}else u?n.length===0?ee(e,o,s):Me(e,n,o):(n&&T(e),ee(e,o));n=o}else if(t instanceof Node){if(a.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],u=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=Y(e,o,u)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=Y(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function ee(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function te(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],l=i.getAttribute("data-hk");(!t||l.startsWith(t))&&!a.registry.has(l)&&a.registry.set(l,i)}}function Ye(){const e=a.context;return`${e.id}${e.count++}`}const ot=(...e)=>(Ce(),Re(...e));export{ot as A,ze as F,et as S,nt as a,qe as b,Je as c,je as d,N as e,Ie as f,st as g,Ue as h,Ke as i,ve as j,it as k,Be as l,we as m,Ge as n,me as o,H as p,Xe as q,lt as r,Ze as s,tt as t,L as u,We as v,I as w,Qe as x,a as y,He as z};