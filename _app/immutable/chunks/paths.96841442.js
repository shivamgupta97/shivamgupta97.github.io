import{n as b,s as h}from"./scheduler.bdaa4df1.js";const e=[];function d(n,u=b){let o;const i=new Set;function r(t){if(h(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(o=u(r,f)||b),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_1vatnhz)==null?void 0:a.base)??"/slick-portfolio-svelte";var l;const z=((l=globalThis.__sveltekit_1vatnhz)==null?void 0:l.assets)??p;export{z as a,p as b,d as w};
