if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const f=e=>i(e,o),l={module:{uri:o},exports:t,require:f};s[o]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"what-the-gin"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.9aea9eaf.css",revision:null},{url:"index.html",revision:"7fd26e8a2d222e9f021cab44df99b1f8"},{url:"js/269.26106499.js",revision:null},{url:"js/app.ffc3dfc8.js",revision:null},{url:"js/chunk-vendors.15ae790f.js",revision:null},{url:"manifest.json",revision:"90beecf641f6606859a542406896f765"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map