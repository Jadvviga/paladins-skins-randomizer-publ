function M(){}const $=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function tt(){return Object.create(null)}function B(t){t.forEach(W)}function et(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function it(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function rt(t){return Object.keys(t).length===0}function I(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ct(t,e,n){t.$$.on_destroy.push(I(e,n))}function ot(t,e,n,i){if(t){const r=C(t,e,n,i);return t[0](r)}}function C(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function st(t,e,n,i,r,l){if(r){const c=C(e,n,i,l);t.p(c,r)}}function ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let y=!1;function at(){y=!0}function ft(){y=!1}function L(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:L(1,r,q=>e[n[q]].claim_order,u))-1;i[o]=n[a]+1;const N=a+1;n[N]=o,r=Math.max(N,r)}const l=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[o],a)}}function S(t,e){t.appendChild(e)}function T(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=k("style");return e.textContent="/* empty */",H(T(t),e),e.sheet}function H(t,e){return S(t.head||t,e),e.sheet}function R(t,e){if(y){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){y&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function mt(){return E(" ")}function pt(){return E("")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return t.dataset.svelteH}function gt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,r=!1){U(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function G(t,e,n,i){return z(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function xt(t,e,n){return G(t,e,n,k)}function J(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function wt(t){return J(t," ")}function vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function kt(t,e){t.value=e??""}function Et(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let m;function K(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function Nt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=K();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=A(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=A(i.contentWindow,"resize",e),e()}),S(t,i),()=>{(r||l&&i.contentWindow)&&l(),F(i)}}function At(t,e,n){t.classList.toggle(e,!!n)}function Q(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function jt(t,e){return new t(e)}let p;function g(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){b().$$.on_mount.push(t)}function St(t){b().$$.after_update.push(t)}function zt(t){b().$$.on_destroy.push(t)}function Dt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=Q(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const _=[],j=[];let d=[];const w=[],D=Promise.resolve();let v=!1;function V(){v||(v=!0,D.then(Y))}function qt(){return V(),D}function X(t){d.push(t)}function Mt(t){w.push(t)}const x=new Set;let f=0;function Y(){if(f!==0)return;const t=p;do{try{for(;f<_.length;){const e=_[f];f++,g(e),Z(e.$$)}}catch(e){throw _.length=0,f=0,e}for(g(null),_.length=0,f=0;j.length;)j.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(_.length);for(;w.length;)w.pop()();v=!1,x.clear(),g(t)}function Z(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Pt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{ft as $,ut as A,lt as B,B as C,ct as D,it as E,M as F,$ as G,Dt as H,zt as I,Mt as J,ht as K,At as L,kt as M,T as N,dt as O,et as P,Q,tt as R,Y as S,rt as T,Pt as U,p as V,g as W,W as X,_ as Y,V as Z,at as _,mt as a,St as b,wt as c,F as d,pt as e,k as f,xt as g,gt as h,_t as i,yt as j,Et as k,E as l,J as m,vt as n,Ct as o,j as p,jt as q,ot as r,nt as s,qt as t,bt as u,X as v,R as w,Nt as x,A as y,st as z};
