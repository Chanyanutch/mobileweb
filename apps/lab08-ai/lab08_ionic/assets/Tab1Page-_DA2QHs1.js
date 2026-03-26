import{d as _o,r as ve,c as Zt,w as B,u as V,I as wo,a as W,b as Eo,e as vo,f as ot,g as bo,h as So,i as be,j as xn,k as fi,l as Io,m as Ao,n as We,o as Je,p as Ke,q as To,t as Se,s as di,F as pi,v as gi,x as Co,y as pt,z as Ro}from"./index-BW_pZ3Lm.js";import{_ as Oo}from"./_plugin-vue_export-helper-DlAUqK2U.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */var ee;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(ee||(ee={}));class Qt extends Error{constructor(t,n,r){super(t),this.message=t,this.code=n,this.data=r}}const Po=s=>{var t,n;return s!=null&&s.androidBridge?"android":!((n=(t=s==null?void 0:s.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},Do=s=>{const t=s.CapacitorCustomPlatform||null,n=s.Capacitor||{},r=n.Plugins=n.Plugins||{},a=()=>t!==null?t.name:Po(s),c=()=>a()!=="web",l=I=>{const S=b.get(I);return!!(S!=null&&S.platforms.has(a())||w(I))},w=I=>{var S;return(S=n.PluginHeaders)===null||S===void 0?void 0:S.find(N=>N.name===I)},v=I=>s.console.error(I),b=new Map,T=(I,S={})=>{const N=b.get(I);if(N)return console.warn('Capacitor plugin "'.concat(I,'" already registered. Cannot register plugins twice.')),N.proxy;const P=a(),k=w(I);let D;const et=async()=>(!D&&P in S?D=typeof S[P]=="function"?D=await S[P]():D=S[P]:t!==null&&!D&&"web"in S&&(D=typeof S.web=="function"?D=await S.web():D=S.web),D),st=(u,d)=>{var g,p;if(k){const y=k==null?void 0:k.methods.find(f=>d===f.name);if(y)return y.rtype==="promise"?f=>n.nativePromise(I,d.toString(),f):(f,G)=>n.nativeCallback(I,d.toString(),f,G);if(u)return(g=u[d])===null||g===void 0?void 0:g.bind(u)}else{if(u)return(p=u[d])===null||p===void 0?void 0:p.bind(u);throw new Qt('"'.concat(I,'" plugin is not implemented on ').concat(P),ee.Unimplemented)}},K=u=>{let d;const g=(...p)=>{const y=et().then(f=>{const G=st(f,u);if(G){const it=G(...p);return d=it==null?void 0:it.remove,it}else throw new Qt('"'.concat(I,".").concat(u,'()" is not implemented on ').concat(P),ee.Unimplemented)});return u==="addListener"&&(y.remove=async()=>d()),y};return g.toString=()=>"".concat(u.toString(),"() { [capacitor code] }"),Object.defineProperty(g,"name",{value:u,writable:!1,configurable:!1}),g},at=K("addListener"),ct=K("removeListener"),nt=(u,d)=>{const g=at({eventName:u},d),p=async()=>{const f=await g;ct({eventName:u,callbackId:f},d)},y=new Promise(f=>g.then(()=>f({remove:p})));return y.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await p()},y},m=new Proxy({},{get(u,d){switch(d){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?nt:at;case"removeListener":return ct;default:return K(d)}}});return r[I]=m,b.set(I,{name:I,proxy:m,platforms:new Set([...Object.keys(S),...k?[P]:[]])}),m};return n.convertFileSrc||(n.convertFileSrc=I=>I),n.getPlatform=a,n.handleError=v,n.isNativePlatform=c,n.isPluginAvailable=l,n.registerPlugin=T,n.Exception=Qt,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},No=s=>s.Capacitor=Do(s),zn=No(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),an=zn.registerPlugin;class cn{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,n){let r=!1;this.listeners[t]||(this.listeners[t]=[],r=!0),this.listeners[t].push(n);const c=this.windowListeners[t];c&&!c.registered&&this.addWindowListener(c),r&&this.sendRetainedArgumentsForEvent(t);const l=async()=>this.removeListener(t,n);return Promise.resolve({remove:l})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,n,r){const a=this.listeners[t];if(!a){if(r){let c=this.retainedEventArguments[t];c||(c=[]),c.push(n),this.retainedEventArguments[t]=c}return}a.forEach(c=>c(n))}hasListeners(t){var n;return!!(!((n=this.listeners[t])===null||n===void 0)&&n.length)}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(t="not implemented"){return new zn.Exception(t,ee.Unimplemented)}unavailable(t="not available"){return new zn.Exception(t,ee.Unavailable)}async removeListener(t,n){const r=this.listeners[t];if(!r)return;const a=r.indexOf(n);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const n=this.retainedEventArguments[t];n&&(delete this.retainedEventArguments[t],n.forEach(r=>{this.notifyListeners(t,r)}))}}const mi=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),yi=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ko extends cn{async getCookies(){const t=document.cookie,n={};return t.split(";").forEach(r=>{if(r.length<=0)return;let[a,c]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=yi(a).trim(),c=yi(c).trim(),n[a]=c}),n}async setCookie(t){try{const n=mi(t.key),r=mi(t.value),a=t.expires?"; expires=".concat(t.expires.replace("expires=","")):"",c=(t.path||"/").replace("path=",""),l=t.url!=null&&t.url.length>0?"domain=".concat(t.url):"";document.cookie="".concat(n,"=").concat(r||"").concat(a,"; path=").concat(c,"; ").concat(l,";")}catch(n){return Promise.reject(n)}}async deleteCookie(t){try{document.cookie="".concat(t.key,"=; Max-Age=0")}catch(n){return Promise.reject(n)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat(new Date().toUTCString(),";path=/"))}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}an("CapacitorCookies",{web:()=>new ko});const Lo=async s=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{const a=r.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},r.onerror=a=>n(a),r.readAsDataURL(s)}),Mo=(s={})=>{const t=Object.keys(s);return Object.keys(s).map(a=>a.toLocaleLowerCase()).reduce((a,c,l)=>(a[c]=s[t[l]],a),{})},xo=(s,t=!0)=>s?Object.entries(s).reduce((r,a)=>{const[c,l]=a;let w,v;return Array.isArray(l)?(v="",l.forEach(b=>{w=t?encodeURIComponent(b):b,v+="".concat(c,"=").concat(w,"&")}),v.slice(0,-1)):(w=t?encodeURIComponent(l):l,v="".concat(c,"=").concat(w)),"".concat(r,"&").concat(v)},"").substr(1):null,jo=(s,t={})=>{const n=Object.assign({method:s.method||"GET",headers:s.headers},t),a=Mo(s.headers)["content-type"]||"";if(typeof s.data=="string")n.body=s.data;else if(a.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[l,w]of Object.entries(s.data||{}))c.set(l,w);n.body=c.toString()}else if(a.includes("multipart/form-data")||s.data instanceof FormData){const c=new FormData;if(s.data instanceof FormData)s.data.forEach((w,v)=>{c.append(v,w)});else for(const w of Object.keys(s.data))c.append(w,s.data[w]);n.body=c;const l=new Headers(n.headers);l.delete("content-type"),n.headers=l}else(a.includes("application/json")||typeof s.data=="object")&&(n.body=JSON.stringify(s.data));return n};class Uo extends cn{async request(t){const n=jo(t,t.webFetchExtra),r=xo(t.params,t.shouldEncodeUrlParams),a=r?"".concat(t.url,"?").concat(r):t.url,c=await fetch(a,n),l=c.headers.get("content-type")||"";let{responseType:w="text"}=c.ok?t:{};l.includes("application/json")&&(w="json");let v,b;switch(w){case"arraybuffer":case"blob":b=await c.blob(),v=await Lo(b);break;case"json":v=await c.json();break;case"document":case"text":default:v=await c.text()}const T={};return c.headers.forEach((I,S)=>{T[S]=I}),{data:v,headers:T,status:c.status,url:c.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}an("CapacitorHttp",{web:()=>new Uo});var _i;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})(_i||(_i={}));var wi;(function(s){s.StatusBar="StatusBar",s.NavigationBar="NavigationBar"})(wi||(wi={}));class Fo extends cn{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}an("SystemBars",{web:()=>new Fo});var Vt;(function(s){s.Prompt="PROMPT",s.Camera="CAMERA",s.Photos="PHOTOS"})(Vt||(Vt={}));var Ie;(function(s){s.Rear="REAR",s.Front="FRONT"})(Ie||(Ie={}));var Wn;(function(s){s.Uri="uri",s.Base64="base64",s.DataUrl="dataUrl"})(Wn||(Wn={}));class Vo extends cn{async getPhoto(t){return new Promise(async(n,r)=>{if(t.webUseInput||t.source===Vt.Photos)this.fileInputExperience(t,n,r);else if(t.source===Vt.Prompt){let a=document.querySelector("pwa-action-sheet");a||(a=document.createElement("pwa-action-sheet"),document.body.appendChild(a)),a.header=t.promptLabelHeader||"Photo",a.cancelable=!1,a.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],a.addEventListener("onSelection",async c=>{c.detail===0?this.fileInputExperience(t,n,r):this.cameraExperience(t,n,r)})}else this.cameraExperience(t,n,r)})}async pickImages(t){return new Promise(async(n,r)=>{this.multipleFileInputExperience(n,r)})}async cameraExperience(t,n,r){if(customElements.get("pwa-camera-modal")){const a=document.createElement("pwa-camera-modal");a.facingMode=t.direction===Ie.Front?"user":"environment",document.body.appendChild(a);try{await a.componentOnReady(),a.addEventListener("onPhoto",async c=>{const l=c.detail;l===null?r(new Qt("User cancelled photos app")):l instanceof Error?r(l):n(await this._getCameraPhoto(l,t)),a.dismiss(),document.body.removeChild(a)}),a.present()}catch(c){this.fileInputExperience(t,n,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,n,r)}fileInputExperience(t,n,r){let a=document.querySelector("#_capacitor-camera-input");const c=()=>{var l;(l=a.parentNode)===null||l===void 0||l.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",l=>{const w=a.files[0];let v="jpeg";if(w.type==="image/png"?v="png":w.type==="image/gif"&&(v="gif"),t.resultType==="dataUrl"||t.resultType==="base64"){const b=new FileReader;b.addEventListener("load",()=>{if(t.resultType==="dataUrl")n({dataUrl:b.result,format:v});else if(t.resultType==="base64"){const T=b.result.split(",")[1];n({base64String:T,format:v})}c()}),b.readAsDataURL(w)}else n({webPath:URL.createObjectURL(w),format:v}),c()}),a.addEventListener("cancel",l=>{r(new Qt("User cancelled photos app")),c()})),a.accept="image/*",a.capture=!0,t.source===Vt.Photos||t.source===Vt.Prompt?a.removeAttribute("capture"):t.direction===Ie.Front?a.capture="user":t.direction===Ie.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(t,n){let r=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var c;(c=r.parentNode)===null||c===void 0||c.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",c=>{const l=[];for(let w=0;w<r.files.length;w++){const v=r.files[w];let b="jpeg";v.type==="image/png"?b="png":v.type==="image/gif"&&(b="gif"),l.push({webPath:URL.createObjectURL(v),format:b})}t({photos:l}),a()}),r.addEventListener("cancel",c=>{n(new Qt("User cancelled photos app")),a()})),r.accept="image/*",r.click()}_getCameraPhoto(t,n){return new Promise((r,a)=>{const c=new FileReader,l=t.type.split("/")[1];n.resultType==="uri"?r({webPath:URL.createObjectURL(t),format:l,saved:!1}):(c.readAsDataURL(t),c.onloadend=()=>{const w=c.result;n.resultType==="dataUrl"?r({dataUrl:w,format:l,saved:!1}):r({base64String:w.split(",")[1],format:l,saved:!1})},c.onerror=w=>{a(w)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const Bo=an("Camera",{web:()=>new Vo});class Ei{static async fromFile(t){return{base64:await new Promise((r,a)=>{const c=new FileReader;c.onloadend=()=>{const w=String(c.result||"").split(",")[1];if(!w)return a(new Error("Invalid base64 data"));r(w)},c.onerror=()=>a(c.error),c.readAsDataURL(t)}),mimeType:t.type||"image/jpeg"}}static async fromCamera(){const t=await Bo.getPhoto({source:Vt.Prompt,resultType:Wn.Base64,quality:85});if(!t.base64String)throw new Error("No base64 from camera");return{base64:t.base64String,mimeType:t.format?"image/".concat(t.format):"image/jpeg"}}}/**
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
 */const $o=()=>{};var vi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=function(s){const t=[];let n=0;for(let r=0;r<s.length;r++){let a=s.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(s.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Ho=function(s){const t=[];let n=0,r=0;for(;n<s.length;){const a=s[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const c=s[n++];t[r++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=s[n++],l=s[n++],w=s[n++],v=((a&7)<<18|(c&63)<<12|(l&63)<<6|w&63)-65536;t[r++]=String.fromCharCode(55296+(v>>10)),t[r++]=String.fromCharCode(56320+(v&1023))}else{const c=s[n++],l=s[n++];t[r++]=String.fromCharCode((a&15)<<12|(c&63)<<6|l&63)}}return t.join("")},or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<s.length;a+=3){const c=s[a],l=a+1<s.length,w=l?s[a+1]:0,v=a+2<s.length,b=v?s[a+2]:0,T=c>>2,I=(c&3)<<4|w>>4;let S=(w&15)<<2|b>>6,N=b&63;v||(N=64,l||(S=64)),r.push(n[T],n[I],n[S],n[N])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(rr(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):Ho(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<s.length;){const c=n[s.charAt(a++)],w=a<s.length?n[s.charAt(a)]:0;++a;const b=a<s.length?n[s.charAt(a)]:64;++a;const I=a<s.length?n[s.charAt(a)]:64;if(++a,c==null||w==null||b==null||I==null)throw new Go;const S=c<<2|w>>4;if(r.push(S),b!==64){const N=w<<4&240|b>>2;if(r.push(N),I!==64){const P=b<<6&192|I;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Go extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qo=function(s){const t=rr(s);return or.encodeByteArray(t,!0)},tn=function(s){return qo(s).replace(/\./g,"")},zo=function(s){try{return or.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jo=()=>Wo().__FIREBASE_DEFAULTS__,Ko=()=>{if(typeof process>"u"||typeof vi>"u")return;const s=vi.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Yo=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=s&&zo(s[1]);return t&&JSON.parse(t)},ar=()=>{try{return $o()||Jo()||Ko()||Yo()}catch(s){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(s));return}},Xo=s=>{var t,n;return(n=(t=ar())==null?void 0:t.emulatorHosts)==null?void 0:n[s]},Zo=s=>{const t=Xo(s);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},cr=()=>{var s;return(s=ar())==null?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function hr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch(t){return!1}}async function ta(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function ea(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",a=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:"https://securetoken.google.com/".concat(r),aud:r,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[tn(JSON.stringify(n)),tn(JSON.stringify(l)),""].join(".")}const Ae={};function na(){const s={prod:[],emulator:[]};for(const t of Object.keys(Ae))Ae[t]?s.emulator.push(t):s.prod.push(t);return s}function sa(s){let t=document.getElementById(s),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),n=!0),{created:n,element:t}}let bi=!1;function ia(s,t){if(typeof window>"u"||typeof document>"u"||!hr(window.location.host)||Ae[s]===t||Ae[s]||bi)return;Ae[s]=t;function n(S){return"__firebase__banner__".concat(S)}const r="__firebase__banner",c=na().prod.length>0;function l(){const S=document.getElementById(r);S&&S.remove()}function w(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function v(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function b(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bi=!0,l()},S}function T(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=sa(r),N=n("text"),P=document.getElementById(N)||document.createElement("span"),k=n("learnmore"),D=document.getElementById(k)||document.createElement("a"),et=n("preprendIcon"),st=document.getElementById(et)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const K=S.element;w(K),T(D,k);const at=b();v(st,et),K.append(st,P,D,at),document.body.appendChild(K)}c?(P.innerText="Preview backend disconnected.",st.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(st.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',P.innerText="Preview backend running in this workspace."),P.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}function ra(){try{return typeof indexedDB=="object"}catch(s){return!1}}function oa(){return new Promise((s,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;t(((c=a.error)==null?void 0:c.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="FirebaseError";class zt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=aa,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a="".concat(this.service,"/").concat(t),c=this.errors[t],l=c?ca(c,r):"Error",w="".concat(this.serviceName,": ").concat(l," (").concat(a,").");return new zt(a,w,r)}}function ca(s,t){return s.replace(ha,(n,r)=>{const a=t[r];return a!=null?String(a):"<".concat(r,"?>")})}const ha=/\{\$([^}]+)}/g;function en(s,t){if(s===t)return!0;const n=Object.keys(s),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const c=s[a],l=t[a];if(Si(c)&&Si(l)){if(!en(c,l))return!1}else if(c!==l)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function Si(s){return s!==null&&typeof s=="object"}/**
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
 */function ur(s){return s&&s._delegate?s._delegate:s}class ne{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class la{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Qo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch(a){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var a;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(a=t==null?void 0:t.optional)!=null?a:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(c){if(r)return null;throw c}else{if(r)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,!!this.shouldAutoInitialize()){if(fa(t))try{this.getOrInitializeService({instanceIdentifier:jt})}catch(n){}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});r.resolve(c)}catch(c){}}}}clearInstance(t=jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jt){return this.instances.has(t)}getOptions(t=jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,l]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(c);r===w&&l.resolve(a)}return a}onInit(t,n){var l;const r=this.normalizeInstanceIdentifier(n),a=(l=this.onInitCallbacks.get(r))!=null?l:new Set;a.add(t),this.onInitCallbacks.set(r,a);const c=this.instances.get(r);return c&&t(c,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(t,n)}catch(c){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ua(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(a){}return r||null}normalizeInstanceIdentifier(t=jt){return this.component?this.component.multipleInstances?t:jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ua(s){return s===jt?void 0:s}function fa(s){return s.instantiationMode==="EAGER"}/**
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
 */class da{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new la(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(j||(j={}));const pa={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ga=j.INFO,ma={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ya=(s,t,...n)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),a=ma[t];if(a)console[a]("[".concat(r,"]  ").concat(s.name,":"),...n);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class ss{constructor(t){this.name=t,this._logLevel=ga,this._logHandler=ya,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError('Invalid value "'.concat(t,'" assigned to `logLevel`'));this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const _a=(s,t)=>t.some(n=>s instanceof n);let Ii,Ai;function wa(){return Ii||(Ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ea(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fr=new WeakMap,Jn=new WeakMap,dr=new WeakMap,jn=new WeakMap,is=new WeakMap;function va(s){const t=new Promise((n,r)=>{const a=()=>{s.removeEventListener("success",c),s.removeEventListener("error",l)},c=()=>{n(Ot(s.result)),a()},l=()=>{r(s.error),a()};s.addEventListener("success",c),s.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&fr.set(n,s)}).catch(()=>{}),is.set(t,s),t}function ba(s){if(Jn.has(s))return;const t=new Promise((n,r)=>{const a=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",l),s.removeEventListener("abort",l)},c=()=>{n(),a()},l=()=>{r(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",c),s.addEventListener("error",l),s.addEventListener("abort",l)});Jn.set(s,t)}let Kn={get(s,t,n){if(s instanceof IDBTransaction){if(t==="done")return Jn.get(s);if(t==="objectStoreNames")return s.objectStoreNames||dr.get(s);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(s[t])},set(s,t,n){return s[t]=n,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function Sa(s){Kn=s(Kn)}function Ia(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=s.call(Un(this),t,...n);return dr.set(r,t.sort?t.sort():[t]),Ot(r)}:Ea().includes(s)?function(...t){return s.apply(Un(this),t),Ot(fr.get(this))}:function(...t){return Ot(s.apply(Un(this),t))}}function Aa(s){return typeof s=="function"?Ia(s):(s instanceof IDBTransaction&&ba(s),_a(s,wa())?new Proxy(s,Kn):s)}function Ot(s){if(s instanceof IDBRequest)return va(s);if(jn.has(s))return jn.get(s);const t=Aa(s);return t!==s&&(jn.set(s,t),is.set(t,s)),t}const Un=s=>is.get(s);function Ta(s,t,{blocked:n,upgrade:r,blocking:a,terminated:c}={}){const l=indexedDB.open(s,t),w=Ot(l);return r&&l.addEventListener("upgradeneeded",v=>{r(Ot(l.result),v.oldVersion,v.newVersion,Ot(l.transaction),v)}),n&&l.addEventListener("blocked",v=>n(v.oldVersion,v.newVersion,v)),w.then(v=>{c&&v.addEventListener("close",()=>c()),a&&v.addEventListener("versionchange",b=>a(b.oldVersion,b.newVersion,b))}).catch(()=>{}),w}const Ca=["get","getKey","getAll","getAllKeys","count"],Ra=["put","add","delete","clear"],Fn=new Map;function Ti(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Fn.get(t))return Fn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Ra.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Ca.includes(n)))return;const c=async function(l,...w){const v=this.transaction(l,a?"readwrite":"readonly");let b=v.store;return r&&(b=b.index(w.shift())),(await Promise.all([b[n](...w),a&&v.done]))[0]};return Fn.set(t,c),c}Sa(s=>({...s,get:(t,n,r)=>Ti(t,n)||s.get(t,n,r),has:(t,n)=>!!Ti(t,n)||s.has(t,n)}));/**
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
 */class Oa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pa(n)){const r=n.getImmediate();return"".concat(r.library,"/").concat(r.version)}else return null}).filter(n=>n).join(" ")}}function Pa(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yn="@firebase/app",Ci="0.14.8";/**
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
 */const Et=new ss("@firebase/app"),Da="@firebase/app-compat",Na="@firebase/analytics-compat",ka="@firebase/analytics",La="@firebase/app-check-compat",Ma="@firebase/app-check",xa="@firebase/auth",ja="@firebase/auth-compat",Ua="@firebase/database",Fa="@firebase/data-connect",Va="@firebase/database-compat",Ba="@firebase/functions",$a="@firebase/functions-compat",Ha="@firebase/installations",Ga="@firebase/installations-compat",qa="@firebase/messaging",za="@firebase/messaging-compat",Wa="@firebase/performance",Ja="@firebase/performance-compat",Ka="@firebase/remote-config",Ya="@firebase/remote-config-compat",Xa="@firebase/storage",Za="@firebase/storage-compat",Qa="@firebase/firestore",tc="@firebase/ai",ec="@firebase/firestore-compat",nc="firebase",sc="12.9.0";/**
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
 */const Xn="[DEFAULT]",ic={[Yn]:"fire-core",[Da]:"fire-core-compat",[ka]:"fire-analytics",[Na]:"fire-analytics-compat",[Ma]:"fire-app-check",[La]:"fire-app-check-compat",[xa]:"fire-auth",[ja]:"fire-auth-compat",[Ua]:"fire-rtdb",[Fa]:"fire-data-connect",[Va]:"fire-rtdb-compat",[Ba]:"fire-fn",[$a]:"fire-fn-compat",[Ha]:"fire-iid",[Ga]:"fire-iid-compat",[qa]:"fire-fcm",[za]:"fire-fcm-compat",[Wa]:"fire-perf",[Ja]:"fire-perf-compat",[Ka]:"fire-rc",[Ya]:"fire-rc-compat",[Xa]:"fire-gcs",[Za]:"fire-gcs-compat",[Qa]:"fire-fst",[ec]:"fire-fst-compat",[tc]:"fire-vertex","fire-js":"fire-js",[nc]:"fire-js-all"};/**
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
 */const nn=new Map,rc=new Map,Zn=new Map;function Ri(s,t){try{s.container.addComponent(t)}catch(n){Et.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(s.name),n)}}function Pe(s){const t=s.name;if(Zn.has(t))return Et.debug("There were multiple attempts to register component ".concat(t,".")),!1;Zn.set(t,s);for(const n of nn.values())Ri(n,s);for(const n of rc.values())Ri(n,s);return!0}function pr(s,t){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(t)}function gr(s){return s==null?!1:s.settings!==void 0}/**
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
 */const oc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new lr("app","Firebase",oc);/**
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
 */class ac{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const cc=sc;function mr(s,t={}){let n=s;typeof t!="object"&&(t={name:t});const r={name:Xn,automaticDataCollectionEnabled:!0,...t},a=r.name;if(typeof a!="string"||!a)throw Pt.create("bad-app-name",{appName:String(a)});if(n||(n=cr()),!n)throw Pt.create("no-options");const c=nn.get(a);if(c){if(en(n,c.options)&&en(r,c.config))return c;throw Pt.create("duplicate-app",{appName:a})}const l=new da(a);for(const v of Zn.values())l.addComponent(v);const w=new ac(n,r,l);return nn.set(a,w),w}function yr(s=Xn){const t=nn.get(s);if(!t&&s===Xn&&cr())return mr();if(!t)throw Pt.create("no-app",{appName:s});return t}function Dt(s,t,n){var l;let r=(l=ic[s])!=null?l:s;n&&(r+="-".concat(n));const a=r.match(/\s|\//),c=t.match(/\s|\//);if(a||c){const w=['Unable to register library "'.concat(r,'" with version "').concat(t,'":')];a&&w.push('library name "'.concat(r,'" contains illegal characters (whitespace or "/")')),a&&c&&w.push("and"),c&&w.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),Et.warn(w.join(" "));return}Pe(new ne("".concat(r,"-version"),()=>({library:r,version:t}),"VERSION"))}/**
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
 */const hc="firebase-heartbeat-database",lc=1,De="firebase-heartbeat-store";let Vn=null;function _r(){return Vn||(Vn=Ta(hc,lc,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(De)}catch(n){console.warn(n)}}}}).catch(s=>{throw Pt.create("idb-open",{originalErrorMessage:s.message})})),Vn}async function uc(s){try{const n=(await _r()).transaction(De),r=await n.objectStore(De).get(wr(s));return await n.done,r}catch(t){if(t instanceof zt)Et.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Et.warn(n.message)}}}async function Oi(s,t){try{const r=(await _r()).transaction(De,"readwrite");await r.objectStore(De).put(t,wr(s)),await r.done}catch(n){if(n instanceof zt)Et.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(r.message)}}}function wr(s){return"".concat(s.name,"!").concat(s.options.appId)}/**
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
 */const fc=1024,dc=30;class pc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Pi();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>dc){const l=yc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pi(),{heartbeatsToSend:r,unsentEntries:a}=gc(this._heartbeatsCache.heartbeats),c=tn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Et.warn(n),""}}}function Pi(){return new Date().toISOString().substring(0,10)}function gc(s,t=fc){const n=[];let r=s.slice();for(const a of s){const c=n.find(l=>l.agent===a.agent);if(c){if(c.dates.push(a.date),Di(n)>t){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Di(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ra()?oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const a=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!=null?r:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const a=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!=null?r:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Di(s){return tn(JSON.stringify({version:2,heartbeats:s})).length}function yc(s){if(s.length===0)return-1;let t=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,t=r);return t}/**
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
 */function _c(s){Pe(new ne("platform-logger",t=>new Oa(t),"PRIVATE")),Pe(new ne("heartbeat",t=>new pc(t),"PRIVATE")),Dt(Yn,Ci,s),Dt(Yn,Ci,"esm2020"),Dt("fire-js","")}_c("");var Ni="@firebase/ai",Qn="2.8.0";/**
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
 */const se="AI",ki="us-central1",wc="firebasevertexai.googleapis.com",sn="v1beta",Li=Qn,Ec="gl-js",vc="hybrid",bc=180*1e3,Sc="gemini-2.5-flash-lite";/**
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
 */class R extends zt{constructor(t,n,r){const a=se,c="".concat(a,"/").concat(t),l="".concat(a,": ").concat(n," (").concat(c,")");super(t,l),this.code=t,this.customErrorData=r,Error.captureStackTrace&&Error.captureStackTrace(this,R),Object.setPrototypeOf(this,R.prototype),this.toString=()=>l}}/**
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
 */const Mi=["user","model","function","system"],Er={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},xi={SAFETY:"SAFETY",RECITATION:"RECITATION"},wt={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},Rt={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
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
 */const C={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
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
 */const Wt={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
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
 */const vt={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
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
 */class vr{constructor(t){this.backendType=t}}class hn extends vr{constructor(){super(vt.GOOGLE_AI)}_getModelPath(t,n){return"/".concat(sn,"/projects/").concat(t,"/").concat(n)}_getTemplatePath(t,n){return"/".concat(sn,"/projects/").concat(t,"/templates/").concat(n)}}class rs extends vr{constructor(t=ki){super(vt.VERTEX_AI),t?this.location=t:this.location=ki}_getModelPath(t,n){return"/".concat(sn,"/projects/").concat(t,"/locations/").concat(this.location,"/").concat(n)}_getTemplatePath(t,n){return"/".concat(sn,"/projects/").concat(t,"/locations/").concat(this.location,"/templates/").concat(n)}}/**
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
 */function Ic(s){if(s instanceof hn)return"".concat(se,"/googleai");if(s instanceof rs)return"".concat(se,"/vertexai/").concat(s.location);throw new R(C.ERROR,"Invalid backend: ".concat(JSON.stringify(s.backendType)))}function Ac(s){const t=s.split("/");if(t[0]!==se)throw new R(C.ERROR,"Invalid instance identifier, unknown prefix '".concat(t[0],"'"));switch(t[1]){case"vertexai":const r=t[2];if(!r)throw new R(C.ERROR,"Invalid instance identifier, unknown location '".concat(s,"'"));return new rs(r);case"googleai":return new hn;default:throw new R(C.ERROR,"Invalid instance identifier string: '".concat(s,"'"))}}/**
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
 */const Q=new ss("@firebase/vertexai");var Ut;(function(s){s.UNAVAILABLE="unavailable",s.DOWNLOADABLE="downloadable",s.DOWNLOADING="downloading",s.AVAILABLE="available"})(Ut||(Ut={}));/**
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
 */const Bn=[{type:"image"}];class ht{constructor(t,n,r){this.languageModelProvider=t,this.mode=n,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:Bn}},r&&(this.onDeviceParams=r,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Bn):this.onDeviceParams.createOptions={expectedInputs:Bn})}async isAvailable(t){if(!this.mode)return Q.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===wt.ONLY_IN_CLOUD)return Q.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await this.downloadIfAvailable();if(this.mode===wt.ONLY_ON_DEVICE){if(n===Ut.UNAVAILABLE)throw new R(C.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(n===Ut.DOWNLOADABLE||n===Ut.DOWNLOADING)&&(Q.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return n!==Ut.AVAILABLE?(Q.debug('On-device inference unavailable because availability is "'.concat(n,'".')),!1):ht.isOnDeviceRequest(t)?!0:(Q.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(t){const n=await this.createSession(),r=await Promise.all(t.contents.map(ht.toLanguageModelMessage)),a=await n.prompt(r,this.onDeviceParams.promptOptions);return ht.toResponse(a)}async generateContentStream(t){const n=await this.createSession(),r=await Promise.all(t.contents.map(ht.toLanguageModelMessage)),a=n.promptStreaming(r,this.onDeviceParams.promptOptions);return ht.toStreamResponse(a)}async countTokens(t){throw new R(C.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(t){if(t.contents.length===0)return Q.debug("Empty prompt rejected for on-device inference."),!1;for(const n of t.contents){if(n.role==="function")return Q.debug('"Function" role rejected for on-device inference.'),!1;for(const r of n.parts)if(r.inlineData&&ht.SUPPORTED_MIME_TYPES.indexOf(r.inlineData.mimeType)===-1)return Q.debug('Unsupported mime type "'.concat(r.inlineData.mimeType,'" rejected for on-device inference.')),!1}return!0}async downloadIfAvailable(){var n;const t=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));return t===Ut.DOWNLOADABLE&&this.download(),t}download(){var t;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=(t=this.languageModelProvider)==null?void 0:t.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(t){const n=await Promise.all(t.parts.map(ht.toLanguageModelMessageContent));return{role:ht.toLanguageModelMessageRole(t.role),content:n}}static async toLanguageModelMessageContent(t){if(t.text)return{type:"text",value:t.text};if(t.inlineData){const r=await(await fetch("data:".concat(t.inlineData.mimeType,";base64,").concat(t.inlineData.data))).blob();return{type:"image",value:await createImageBitmap(r)}}throw new R(C.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(t){return t==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new R(C.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const t=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=t,t}static toResponse(t){return{json:async()=>({candidates:[{content:{parts:[{text:t}]}}]})}}static toStreamResponse(t){const n=new TextEncoder;return{body:t.pipeThrough(new TransformStream({transform(r,a){const c=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:r}]}}]});a.enqueue(n.encode("data: ".concat(c,"\n\n")))}}))}}}ht.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Tc(s,t,n){if(typeof t<"u"&&s)return new ht(t.LanguageModel,s,n)}/**
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
 */class Cc{constructor(t,n,r,a,c){this.app=t,this.backend=n,this.chromeAdapterFactory=c;const l=a==null?void 0:a.getImmediate({optional:!0}),w=r==null?void 0:r.getImmediate({optional:!0});this.auth=w||null,this.appCheck=l||null,n instanceof rs?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(t){this._options=t}get options(){return this._options}}/**
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
 */function Rc(s,{instanceIdentifier:t}){if(!t)throw new R(C.ERROR,"AIService instance identifier is undefined.");const n=Ac(t),r=s.getProvider("app").getImmediate(),a=s.getProvider("auth-internal"),c=s.getProvider("app-check-internal");return new Cc(r,n,a,c,Tc)}/**
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
 */function Oc(s){var n,r,a,c,l,w,v;if((r=(n=s.app)==null?void 0:n.options)!=null&&r.apiKey)if((c=(a=s.app)==null?void 0:a.options)!=null&&c.projectId){if(!((w=(l=s.app)==null?void 0:l.options)!=null&&w.appId))throw new R(C.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new R(C.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new R(C.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const t={apiKey:s.app.options.apiKey,project:s.app.options.projectId,appId:s.app.options.appId,automaticDataCollectionEnabled:s.app.automaticDataCollectionEnabled,location:s.location,backend:s.backend};if(gr(s.app)&&s.app.settings.appCheckToken){const b=s.app.settings.appCheckToken;t.getAppCheckToken=()=>Promise.resolve({token:b})}else s.appCheck&&((v=s.options)!=null&&v.useLimitedUseAppCheckTokens?t.getAppCheckToken=()=>s.appCheck.getLimitedUseToken():t.getAppCheckToken=()=>s.appCheck.getToken());return s.auth&&(t.getAuthToken=()=>s.auth.getToken()),t}/**
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
 */class Te{constructor(t,n){this._apiSettings=Oc(t),this.model=Te.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(t,n){return n===vt.GOOGLE_AI?Te.normalizeGoogleAIModelName(t):Te.normalizeVertexAIModelName(t)}static normalizeGoogleAIModelName(t){return"models/".concat(t)}static normalizeVertexAIModelName(t){let n;return t.includes("/")?t.startsWith("models/")?n="publishers/google/".concat(t):n=t:n="publishers/google/models/".concat(t),n}}/**
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
 */const Pc="Timeout has expired.",$n="AbortError";class Dc{constructor(t){this.params=t}toString(){const t=new URL(this.baseUrl);return t.pathname=this.pathname,t.search=this.queryParams.toString(),t.toString()}get pathname(){return this.params.templateId?"".concat(this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId),":").concat(this.params.task):"".concat(this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model),":").concat(this.params.task)}get baseUrl(){var t,n;return(n=(t=this.params.singleRequestOptions)==null?void 0:t.baseUrl)!=null?n:"https://".concat(wc)}get queryParams(){const t=new URLSearchParams;return this.params.stream&&t.set("alt","sse"),t}}function Nc(s){const t=[];return t.push("".concat(Ec,"/").concat(Li)),t.push("fire/".concat(Li)),(s.params.apiSettings.inferenceMode===wt.PREFER_ON_DEVICE||s.params.apiSettings.inferenceMode===wt.PREFER_IN_CLOUD)&&t.push(vc),t.join(" ")}async function kc(s){const t=new Headers;if(t.append("Content-Type","application/json"),t.append("x-goog-api-client",Nc(s)),t.append("x-goog-api-key",s.params.apiSettings.apiKey),s.params.apiSettings.automaticDataCollectionEnabled&&t.append("X-Firebase-Appid",s.params.apiSettings.appId),s.params.apiSettings.getAppCheckToken){const n=await s.params.apiSettings.getAppCheckToken();n&&(t.append("X-Firebase-AppCheck",n.token),n.error&&Q.warn("Unable to obtain a valid App Check token: ".concat(n.error.message)))}if(s.params.apiSettings.getAuthToken){const n=await s.params.apiSettings.getAuthToken();n&&t.append("Authorization","Firebase ".concat(n.accessToken))}return t}async function os(s,t){var b,T,I;const n=new Dc(s);let r;const a=(b=s.singleRequestOptions)==null?void 0:b.signal,c=((T=s.singleRequestOptions)==null?void 0:T.timeout)!=null&&s.singleRequestOptions.timeout>=0?s.singleRequestOptions.timeout:bc,l=new AbortController,w=setTimeout(()=>{l.abort(new DOMException(Pc,$n)),Q.debug("Aborting request to ".concat(n," due to timeout (").concat(c,"ms)"))},c),v=AbortSignal.any(a?[a,l.signal]:[l.signal]);if(a&&a.aborted)throw clearTimeout(w),new DOMException((I=a.reason)!=null?I:"Aborted externally before fetch",$n);try{const S={method:"POST",headers:await kc(n),signal:v,body:t};if(r=await fetch(n.toString(),S),!r.ok){let N="",P;try{const k=await r.json();N=k.error.message,k.error.details&&(N+=" ".concat(JSON.stringify(k.error.details)),P=k.error.details)}catch(k){}throw r.status===403&&P&&P.some(k=>k.reason==="SERVICE_DISABLED")&&P.some(k=>{var D,et;return(et=(D=k.links)==null?void 0:D[0])==null?void 0:et.description.includes("Google developers console API activation")})?new R(C.API_NOT_ENABLED,"The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console "+"at https://console.firebase.google.com/project/".concat(n.params.apiSettings.project,"/ailogic/ ")+'and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.',{status:r.status,statusText:r.statusText,errorDetails:P}):new R(C.FETCH_ERROR,"Error fetching from ".concat(n,": [").concat(r.status," ").concat(r.statusText,"] ").concat(N),{status:r.status,statusText:r.statusText,errorDetails:P})}}catch(S){let N=S;throw S.code!==C.FETCH_ERROR&&S.code!==C.API_NOT_ENABLED&&S instanceof Error&&S.name!==$n&&(N=new R(C.ERROR,"Error fetching from ".concat(n.toString(),": ").concat(S.message)),N.stack=S.stack),N}finally{clearTimeout(w)}return r}/**
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
 */function Ye(s){if(s.candidates&&s.candidates.length>0){if(s.candidates.length>1&&Q.warn("This response had ".concat(s.candidates.length," ")+"candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates."),br(s.candidates[0]))throw new R(C.RESPONSE_ERROR,"Response error: ".concat(Bt(s),". Response body stored in error.response"),{response:s});return!0}else return!1}function rn(s,t=Rt.IN_CLOUD){s.candidates&&!s.candidates[0].hasOwnProperty("index")&&(s.candidates[0].index=0);const n=Lc(s);return n.inferenceSource=t,n}function Lc(s){return s.text=()=>{if(Ye(s))return ji(s,t=>!t.thought);if(s.promptFeedback)throw new R(C.RESPONSE_ERROR,"Text not available. ".concat(Bt(s)),{response:s});return""},s.thoughtSummary=()=>{if(Ye(s)){const t=ji(s,n=>!!n.thought);return t===""?void 0:t}else if(s.promptFeedback)throw new R(C.RESPONSE_ERROR,"Thought summary not available. ".concat(Bt(s)),{response:s})},s.inlineDataParts=()=>{if(Ye(s))return xc(s);if(s.promptFeedback)throw new R(C.RESPONSE_ERROR,"Data not available. ".concat(Bt(s)),{response:s})},s.functionCalls=()=>{if(Ye(s))return Mc(s);if(s.promptFeedback)throw new R(C.RESPONSE_ERROR,"Function call not available. ".concat(Bt(s)),{response:s})},s}function ji(s,t){var r,a,c,l;const n=[];if((a=(r=s.candidates)==null?void 0:r[0].content)!=null&&a.parts)for(const w of(l=(c=s.candidates)==null?void 0:c[0].content)==null?void 0:l.parts)w.text&&t(w)&&n.push(w.text);return n.length>0?n.join(""):""}function Mc(s){var n,r,a,c;const t=[];if((r=(n=s.candidates)==null?void 0:n[0].content)!=null&&r.parts)for(const l of(c=(a=s.candidates)==null?void 0:a[0].content)==null?void 0:c.parts)l.functionCall&&t.push(l.functionCall);if(t.length>0)return t}function xc(s){var n,r,a,c;const t=[];if((r=(n=s.candidates)==null?void 0:n[0].content)!=null&&r.parts)for(const l of(c=(a=s.candidates)==null?void 0:a[0].content)==null?void 0:c.parts)l.inlineData&&t.push(l);if(t.length>0)return t}const jc=[xi.RECITATION,xi.SAFETY];function br(s){return!!s.finishReason&&jc.some(t=>t===s.finishReason)}function Bt(s){var n,r,a;let t="";if((!s.candidates||s.candidates.length===0)&&s.promptFeedback)t+="Response was blocked",(n=s.promptFeedback)!=null&&n.blockReason&&(t+=" due to ".concat(s.promptFeedback.blockReason)),(r=s.promptFeedback)!=null&&r.blockReasonMessage&&(t+=": ".concat(s.promptFeedback.blockReasonMessage));else if((a=s.candidates)!=null&&a[0]){const c=s.candidates[0];br(c)&&(t+="Candidate was blocked due to ".concat(c.finishReason),c.finishMessage&&(t+=": ".concat(c.finishMessage)))}return t}/**
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
 */function Sr(s){var t,n;if((t=s.safetySettings)==null||t.forEach(r=>{if(r.method)throw new R(C.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=s.generationConfig)!=null&&n.topK){const r=Math.round(s.generationConfig.topK);r!==s.generationConfig.topK&&(Q.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),s.generationConfig.topK=r)}return s}function as(s){return{candidates:s.candidates?Fc(s.candidates):void 0,prompt:s.promptFeedback?Vc(s.promptFeedback):void 0,usageMetadata:s.usageMetadata}}function Uc(s,t){return{generateContentRequest:{model:t,...s}}}function Fc(s){const t=[];let n;return t&&s.forEach(r=>{var l,w;let a;if(r.citationMetadata&&(a={citations:r.citationMetadata.citationSources}),r.safetyRatings&&(n=r.safetyRatings.map(v=>{var b,T,I;return{...v,severity:(b=v.severity)!=null?b:Er.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(T=v.probabilityScore)!=null?T:0,severityScore:(I=v.severityScore)!=null?I:0}})),(w=(l=r.content)==null?void 0:l.parts)!=null&&w.some(v=>v==null?void 0:v.videoMetadata))throw new R(C.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const c={index:r.index,content:r.content,finishReason:r.finishReason,finishMessage:r.finishMessage,safetyRatings:n,citationMetadata:a,groundingMetadata:r.groundingMetadata,urlContextMetadata:r.urlContextMetadata};t.push(c)}),t}function Vc(s){const t=[];return s.safetyRatings.forEach(r=>{var a,c,l;t.push({category:r.category,probability:r.probability,severity:(a=r.severity)!=null?a:Er.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(c=r.probabilityScore)!=null?c:0,severityScore:(l=r.severityScore)!=null?l:0,blocked:r.blocked})}),{blockReason:s.blockReason,safetyRatings:t,blockReasonMessage:s.blockReasonMessage}}/**
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
 */const Ui=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Bc(s,t,n){const r=s.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),a=Gc(r),[c,l]=a.tee();return{stream:Hc(c,t,n),response:$c(l,t,n)}}async function $c(s,t,n){const r=[],a=s.getReader();for(;;){const{done:c,value:l}=await a.read();if(c){let w=qc(r);return t.backend.backendType===vt.GOOGLE_AI&&(w=as(w)),rn(w,n)}r.push(l)}}async function*Hc(s,t,n){var a,c;const r=s.getReader();for(;;){const{value:l,done:w}=await r.read();if(w)break;let v;t.backend.backendType===vt.GOOGLE_AI?v=rn(as(l),n):v=rn(l,n);const b=(a=v.candidates)==null?void 0:a[0];!((c=b==null?void 0:b.content)!=null&&c.parts)&&!(b!=null&&b.finishReason)&&!(b!=null&&b.citationMetadata)&&!(b!=null&&b.urlContextMetadata)||(yield v)}}function Gc(s){const t=s.getReader();return new ReadableStream({start(r){let a="";return c();function c(){return t.read().then(({value:l,done:w})=>{if(w){if(a.trim()){r.error(new R(C.PARSE_FAILED,"Failed to parse stream"));return}r.close();return}a+=l;let v=a.match(Ui),b;for(;v;){try{b=JSON.parse(v[1])}catch(T){r.error(new R(C.PARSE_FAILED,'Error parsing JSON response: "'.concat(v[1])));return}r.enqueue(b),a=a.substring(v[0].length),v=a.match(Ui)}return c()})}}})}function qc(s){const t=s[s.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const r of s)if(r.candidates)for(const a of r.candidates){const c=a.index||0;n.candidates||(n.candidates=[]),n.candidates[c]||(n.candidates[c]={index:a.index}),n.candidates[c].citationMetadata=a.citationMetadata,n.candidates[c].finishReason=a.finishReason,n.candidates[c].finishMessage=a.finishMessage,n.candidates[c].safetyRatings=a.safetyRatings,n.candidates[c].groundingMetadata=a.groundingMetadata;const l=a.urlContextMetadata;if(typeof l=="object"&&l!==null&&Object.keys(l).length>0&&(n.candidates[c].urlContextMetadata=l),a.content){if(!a.content.parts)continue;n.candidates[c].content||(n.candidates[c].content={role:a.content.role||"user",parts:[]});for(const w of a.content.parts){const v={...w};w.text!==""&&Object.keys(v).length>0&&n.candidates[c].content.parts.push(v)}}}return n}/**
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
 */const zc=[C.FETCH_ERROR,C.ERROR,C.API_NOT_ENABLED];async function Ir(s,t,n,r){if(!t)return{response:await r(),inferenceSource:Rt.IN_CLOUD};switch(t.mode){case wt.ONLY_ON_DEVICE:if(await t.isAvailable(s))return{response:await n(),inferenceSource:Rt.ON_DEVICE};throw new R(C.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case wt.ONLY_IN_CLOUD:return{response:await r(),inferenceSource:Rt.IN_CLOUD};case wt.PREFER_IN_CLOUD:try{return{response:await r(),inferenceSource:Rt.IN_CLOUD}}catch(a){if(a instanceof R&&zc.includes(a.code))return{response:await n(),inferenceSource:Rt.ON_DEVICE};throw a}case wt.PREFER_ON_DEVICE:return await t.isAvailable(s)?{response:await n(),inferenceSource:Rt.ON_DEVICE}:{response:await r(),inferenceSource:Rt.IN_CLOUD};default:throw new R(C.ERROR,"Unexpected infererence mode: ".concat(t.mode))}}/**
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
 */async function Wc(s,t,n,r){return s.backend.backendType===vt.GOOGLE_AI&&(n=Sr(n)),os({task:"streamGenerateContent",model:t,apiSettings:s,stream:!0,singleRequestOptions:r},JSON.stringify(n))}async function Ar(s,t,n,r,a){const c=await Ir(n,r,()=>r.generateContentStream(n),()=>Wc(s,t,n,a));return Bc(c.response,s,c.inferenceSource)}async function Jc(s,t,n,r){return s.backend.backendType===vt.GOOGLE_AI&&(n=Sr(n)),os({model:t,task:"generateContent",apiSettings:s,stream:!1,singleRequestOptions:r},JSON.stringify(n))}async function Tr(s,t,n,r,a){const c=await Ir(n,r,()=>r.generateContent(n),()=>Jc(s,t,n,a)),l=await Kc(c.response,s);return{response:rn(l,c.inferenceSource)}}async function Kc(s,t){const n=await s.json();return t.backend.backendType===vt.GOOGLE_AI?as(n):n}/**
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
 */function Cr(s){if(s!=null){if(typeof s=="string")return{role:"system",parts:[{text:s}]};if(s.text)return{role:"system",parts:[s]};if(s.parts)return s.role?s:{role:"system",parts:s.parts}}}function ts(s){let t=[];if(typeof s=="string")t=[{text:s}];else for(const n of s)typeof n=="string"?t.push({text:n}):t.push(n);return Yc(t)}function Yc(s){const t={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,a=!1;for(const c of s)"functionResponse"in c?(n.parts.push(c),a=!0):(t.parts.push(c),r=!0);if(r&&a)throw new R(C.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!r&&!a)throw new R(C.INVALID_CONTENT,"No Content is provided for sending chat message.");return r?t:n}function Hn(s){let t;return s.contents?t=s:t={contents:[ts(s)]},s.systemInstruction&&(t.systemInstruction=Cr(s.systemInstruction)),t}/**
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
 */const Fi=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],Xc={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Vi={user:["model"],function:["model"],model:["user","function"],system:[]};function Zc(s){let t=null;for(const n of s){const{role:r,parts:a}=n;if(!t&&r!=="user")throw new R(C.INVALID_CONTENT,"First Content should be with role 'user', got ".concat(r));if(!Mi.includes(r))throw new R(C.INVALID_CONTENT,"Each item should include role field. Got ".concat(r," but valid roles are: ").concat(JSON.stringify(Mi)));if(!Array.isArray(a))throw new R(C.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(a.length===0)throw new R(C.INVALID_CONTENT,"Each Content should have at least one part");const c={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const w of a)for(const v of Fi)v in w&&(c[v]+=1);const l=Xc[r];for(const w of Fi)if(!l.includes(w)&&c[w]>0)throw new R(C.INVALID_CONTENT,"Content with role '".concat(r,"' can't contain '").concat(w,"' part"));if(t&&!Vi[r].includes(t.role))throw new R(C.INVALID_CONTENT,"Content with role '".concat(r,"' can't follow '").concat(t.role,"'. Valid previous roles: ").concat(JSON.stringify(Vi)));t=n}}/**
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
 */const Bi="SILENT_ERROR";class Qc{constructor(t,n,r,a,c){this.model=n,this.chromeAdapter=r,this.params=a,this.requestOptions=c,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=t,a!=null&&a.history&&(Zc(a.history),this._history=a.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n){var l,w,v,b,T;await this._sendPromise;const r=ts(t),a={safetySettings:(l=this.params)==null?void 0:l.safetySettings,generationConfig:(w=this.params)==null?void 0:w.generationConfig,tools:(v=this.params)==null?void 0:v.tools,toolConfig:(b=this.params)==null?void 0:b.toolConfig,systemInstruction:(T=this.params)==null?void 0:T.systemInstruction,contents:[...this._history,r]};let c={};return this._sendPromise=this._sendPromise.then(()=>Tr(this._apiSettings,this.model,a,this.chromeAdapter,{...this.requestOptions,...n})).then(I=>{var S,N;if(I.response.candidates&&I.response.candidates.length>0){this._history.push(r);const P={parts:((S=I.response.candidates)==null?void 0:S[0].content.parts)||[],role:((N=I.response.candidates)==null?void 0:N[0].content.role)||"model"};this._history.push(P)}else{const P=Bt(I.response);P&&Q.warn("sendMessage() was unsuccessful. ".concat(P,". Inspect response object for details."))}c=I}),await this._sendPromise,c}async sendMessageStream(t,n){var l,w,v,b,T;await this._sendPromise;const r=ts(t),a={safetySettings:(l=this.params)==null?void 0:l.safetySettings,generationConfig:(w=this.params)==null?void 0:w.generationConfig,tools:(v=this.params)==null?void 0:v.tools,toolConfig:(b=this.params)==null?void 0:b.toolConfig,systemInstruction:(T=this.params)==null?void 0:T.systemInstruction,contents:[...this._history,r]},c=Ar(this._apiSettings,this.model,a,this.chromeAdapter,{...this.requestOptions,...n});return this._sendPromise=this._sendPromise.then(()=>c).catch(I=>{throw new Error(Bi)}).then(I=>I.response).then(I=>{if(I.candidates&&I.candidates.length>0){this._history.push(r);const S={...I.candidates[0].content};S.role||(S.role="model"),this._history.push(S)}else{const S=Bt(I);S&&Q.warn("sendMessageStream() was unsuccessful. ".concat(S,". Inspect response object for details."))}}).catch(I=>{I.message!==Bi&&I.name!=="AbortError"&&Q.error(I)}),c}}/**
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
 */async function th(s,t,n,r){let a="";if(s.backend.backendType===vt.GOOGLE_AI){const l=Uc(n,t);a=JSON.stringify(l)}else a=JSON.stringify(n);return(await os({model:t,task:"countTokens",apiSettings:s,stream:!1,singleRequestOptions:r},a)).json()}async function eh(s,t,n,r,a){if((r==null?void 0:r.mode)===wt.ONLY_ON_DEVICE)throw new R(C.UNSUPPORTED,"countTokens() is not supported for on-device models.");return th(s,t,n,a)}/**
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
 */class nh extends Te{constructor(t,n,r,a){super(t,n.model),this.chromeAdapter=a,this.generationConfig=n.generationConfig||{},sh(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Cr(n.systemInstruction),this.requestOptions=r||{}}async generateContent(t,n){const r=Hn(t);return Tr(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...r},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(t,n){const r=Hn(t);return Ar(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...r},this.chromeAdapter,{...this.requestOptions,...n})}startChat(t){return new Qc(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...t},this.requestOptions)}async countTokens(t,n){const r=Hn(t);return eh(this._apiSettings,this.model,r,this.chromeAdapter,{...this.requestOptions,...n})}}function sh(s){var t,n;if(((t=s.thinkingConfig)==null?void 0:t.thinkingBudget)!=null&&((n=s.thinkingConfig)!=null&&n.thinkingLevel))throw new R(C.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.")}/**
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
 */class J{constructor(t){if(!t.type&&!t.anyOf)throw new R(C.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in t)this[n]=t[n];this.type=t.type,this.format=t.hasOwnProperty("format")?t.format:void 0,this.nullable=t.hasOwnProperty("nullable")?!!t.nullable:!1}toJSON(){const t={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===Wt.OBJECT)&&(t[n]=this[n]);return t}static array(t){return new ah(t,t.items)}static object(t){return new ch(t,t.properties,t.optionalProperties)}static string(t){return new $i(t)}static enumString(t){return new $i(t,t.enum)}static integer(t){return new ih(t)}static number(t){return new rh(t)}static boolean(t){return new oh(t)}static anyOf(t){return new hh(t)}}class ih extends J{constructor(t){super({type:Wt.INTEGER,...t})}}class rh extends J{constructor(t){super({type:Wt.NUMBER,...t})}}class oh extends J{constructor(t){super({type:Wt.BOOLEAN,...t})}}class $i extends J{constructor(t,n){super({type:Wt.STRING,...t}),this.enum=n}toJSON(){const t=super.toJSON();return this.enum&&(t.enum=this.enum),t}}class ah extends J{constructor(t,n){super({type:Wt.ARRAY,...t}),this.items=n}toJSON(){const t=super.toJSON();return t.items=this.items.toJSON(),t}}class ch extends J{constructor(t,n,r=[]){super({type:Wt.OBJECT,...t}),this.properties=n,this.optionalProperties=r}toJSON(){const t=super.toJSON();t.properties={...this.properties};const n=[];if(this.optionalProperties){for(const r of this.optionalProperties)if(!this.properties.hasOwnProperty(r))throw new R(C.INVALID_SCHEMA,'Property "'.concat(r,'" specified in "optionalProperties" does not exist.'))}for(const r in this.properties)this.properties.hasOwnProperty(r)&&(t.properties[r]=this.properties[r].toJSON(),this.optionalProperties.includes(r)||n.push(r));return n.length>0&&(t.required=n),delete t.optionalProperties,t}}class hh extends J{constructor(t){if(t.anyOf.length===0)throw new R(C.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...t,type:void 0}),this.anyOf=t.anyOf}toJSON(){const t=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(t.anyOf=this.anyOf.map(n=>n.toJSON())),t}}/**
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
 */function lh(s=yr(),t){var w,v;s=ur(s);const n=pr(s,se),r=(w=t==null?void 0:t.backend)!=null?w:new hn,a={useLimitedUseAppCheckTokens:(v=t==null?void 0:t.useLimitedUseAppCheckTokens)!=null?v:!1},c=Ic(r),l=n.getImmediate({identifier:c});return l.options=a,l}function uh(s,t,n){var w;const r=t;let a;if(r.mode?a=r.inCloudParams||{model:Sc}:a=t,!a.model)throw new R(C.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const c=(w=s.chromeAdapterFactory)==null?void 0:w.call(s,r.mode,typeof window>"u"?void 0:window,r.onDeviceParams),l=new nh(s,a,n,c);return l._apiSettings.inferenceMode=r.mode,l}function fh(){Pe(new ne(se,Rc,"PUBLIC").setMultipleInstances(!0)),Dt(Ni,Qn),Dt(Ni,Qn,"esm2020")}fh();var dh="firebase",ph="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(dh,ph,"app");var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(m,u){function d(){}d.prototype=u.prototype,m.F=u.prototype,m.prototype=new d,m.prototype.constructor=m,m.D=function(g,p,y){for(var f=Array(arguments.length-2),G=2;G<arguments.length;G++)f[G-2]=arguments[G];return u.prototype[p].apply(g,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(m,u,d){d||(d=0);const g=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)g[p]=u.charCodeAt(d++)|u.charCodeAt(d++)<<8|u.charCodeAt(d++)<<16|u.charCodeAt(d++)<<24;else for(p=0;p<16;++p)g[p]=u[d++]|u[d++]<<8|u[d++]<<16|u[d++]<<24;u=m.g[0],d=m.g[1],p=m.g[2];let y=m.g[3],f;f=u+(y^d&(p^y))+g[0]+3614090360&4294967295,u=d+(f<<7&4294967295|f>>>25),f=y+(p^u&(d^p))+g[1]+3905402710&4294967295,y=u+(f<<12&4294967295|f>>>20),f=p+(d^y&(u^d))+g[2]+606105819&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(u^p&(y^u))+g[3]+3250441966&4294967295,d=p+(f<<22&4294967295|f>>>10),f=u+(y^d&(p^y))+g[4]+4118548399&4294967295,u=d+(f<<7&4294967295|f>>>25),f=y+(p^u&(d^p))+g[5]+1200080426&4294967295,y=u+(f<<12&4294967295|f>>>20),f=p+(d^y&(u^d))+g[6]+2821735955&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(u^p&(y^u))+g[7]+4249261313&4294967295,d=p+(f<<22&4294967295|f>>>10),f=u+(y^d&(p^y))+g[8]+1770035416&4294967295,u=d+(f<<7&4294967295|f>>>25),f=y+(p^u&(d^p))+g[9]+2336552879&4294967295,y=u+(f<<12&4294967295|f>>>20),f=p+(d^y&(u^d))+g[10]+4294925233&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(u^p&(y^u))+g[11]+2304563134&4294967295,d=p+(f<<22&4294967295|f>>>10),f=u+(y^d&(p^y))+g[12]+1804603682&4294967295,u=d+(f<<7&4294967295|f>>>25),f=y+(p^u&(d^p))+g[13]+4254626195&4294967295,y=u+(f<<12&4294967295|f>>>20),f=p+(d^y&(u^d))+g[14]+2792965006&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(u^p&(y^u))+g[15]+1236535329&4294967295,d=p+(f<<22&4294967295|f>>>10),f=u+(p^y&(d^p))+g[1]+4129170786&4294967295,u=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(u^d))+g[6]+3225465664&4294967295,y=u+(f<<9&4294967295|f>>>23),f=p+(u^d&(y^u))+g[11]+643717713&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^u&(p^y))+g[0]+3921069994&4294967295,d=p+(f<<20&4294967295|f>>>12),f=u+(p^y&(d^p))+g[5]+3593408605&4294967295,u=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(u^d))+g[10]+38016083&4294967295,y=u+(f<<9&4294967295|f>>>23),f=p+(u^d&(y^u))+g[15]+3634488961&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^u&(p^y))+g[4]+3889429448&4294967295,d=p+(f<<20&4294967295|f>>>12),f=u+(p^y&(d^p))+g[9]+568446438&4294967295,u=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(u^d))+g[14]+3275163606&4294967295,y=u+(f<<9&4294967295|f>>>23),f=p+(u^d&(y^u))+g[3]+4107603335&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^u&(p^y))+g[8]+1163531501&4294967295,d=p+(f<<20&4294967295|f>>>12),f=u+(p^y&(d^p))+g[13]+2850285829&4294967295,u=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(u^d))+g[2]+4243563512&4294967295,y=u+(f<<9&4294967295|f>>>23),f=p+(u^d&(y^u))+g[7]+1735328473&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^u&(p^y))+g[12]+2368359562&4294967295,d=p+(f<<20&4294967295|f>>>12),f=u+(d^p^y)+g[5]+4294588738&4294967295,u=d+(f<<4&4294967295|f>>>28),f=y+(u^d^p)+g[8]+2272392833&4294967295,y=u+(f<<11&4294967295|f>>>21),f=p+(y^u^d)+g[11]+1839030562&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^u)+g[14]+4259657740&4294967295,d=p+(f<<23&4294967295|f>>>9),f=u+(d^p^y)+g[1]+2763975236&4294967295,u=d+(f<<4&4294967295|f>>>28),f=y+(u^d^p)+g[4]+1272893353&4294967295,y=u+(f<<11&4294967295|f>>>21),f=p+(y^u^d)+g[7]+4139469664&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^u)+g[10]+3200236656&4294967295,d=p+(f<<23&4294967295|f>>>9),f=u+(d^p^y)+g[13]+681279174&4294967295,u=d+(f<<4&4294967295|f>>>28),f=y+(u^d^p)+g[0]+3936430074&4294967295,y=u+(f<<11&4294967295|f>>>21),f=p+(y^u^d)+g[3]+3572445317&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^u)+g[6]+76029189&4294967295,d=p+(f<<23&4294967295|f>>>9),f=u+(d^p^y)+g[9]+3654602809&4294967295,u=d+(f<<4&4294967295|f>>>28),f=y+(u^d^p)+g[12]+3873151461&4294967295,y=u+(f<<11&4294967295|f>>>21),f=p+(y^u^d)+g[15]+530742520&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^u)+g[2]+3299628645&4294967295,d=p+(f<<23&4294967295|f>>>9),f=u+(p^(d|~y))+g[0]+4096336452&4294967295,u=d+(f<<6&4294967295|f>>>26),f=y+(d^(u|~p))+g[7]+1126891415&4294967295,y=u+(f<<10&4294967295|f>>>22),f=p+(u^(y|~d))+g[14]+2878612391&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~u))+g[5]+4237533241&4294967295,d=p+(f<<21&4294967295|f>>>11),f=u+(p^(d|~y))+g[12]+1700485571&4294967295,u=d+(f<<6&4294967295|f>>>26),f=y+(d^(u|~p))+g[3]+2399980690&4294967295,y=u+(f<<10&4294967295|f>>>22),f=p+(u^(y|~d))+g[10]+4293915773&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~u))+g[1]+2240044497&4294967295,d=p+(f<<21&4294967295|f>>>11),f=u+(p^(d|~y))+g[8]+1873313359&4294967295,u=d+(f<<6&4294967295|f>>>26),f=y+(d^(u|~p))+g[15]+4264355552&4294967295,y=u+(f<<10&4294967295|f>>>22),f=p+(u^(y|~d))+g[6]+2734768916&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~u))+g[13]+1309151649&4294967295,d=p+(f<<21&4294967295|f>>>11),f=u+(p^(d|~y))+g[4]+4149444226&4294967295,u=d+(f<<6&4294967295|f>>>26),f=y+(d^(u|~p))+g[11]+3174756917&4294967295,y=u+(f<<10&4294967295|f>>>22),f=p+(u^(y|~d))+g[2]+718787259&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~u))+g[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(p+(f<<21&4294967295|f>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+y&4294967295}r.prototype.v=function(m,u){u===void 0&&(u=m.length);const d=u-this.blockSize,g=this.C;let p=this.h,y=0;for(;y<u;){if(p==0)for(;y<=d;)a(this,m,y),y+=this.blockSize;if(typeof m=="string"){for(;y<u;)if(g[p++]=m.charCodeAt(y++),p==this.blockSize){a(this,g),p=0;break}}else for(;y<u;)if(g[p++]=m[y++],p==this.blockSize){a(this,g),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var d=m.length-8;d<m.length;++d)m[d]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,d=0;d<4;++d)for(let g=0;g<32;g+=8)m[u++]=this.g[d]>>>g&255;return m};function c(m,u){var d=w;return Object.prototype.hasOwnProperty.call(d,m)?d[m]:d[m]=u(m)}function l(m,u){this.h=u;const d=[];let g=!0;for(let p=m.length-1;p>=0;p--){const y=m[p]|0;g&&y==u||(d[p]=y,g=!1)}this.g=d}var w={};function v(m){return-128<=m&&m<128?c(m,function(u){return new l([u|0],u<0?-1:0)}):new l([m|0],m<0?-1:0)}function b(m){if(isNaN(m)||!isFinite(m))return I;if(m<0)return D(b(-m));const u=[];let d=1;for(let g=0;m>=d;g++)u[g]=m/d|0,d*=4294967296;return new l(u,0)}function T(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return D(T(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=b(Math.pow(u,8));let g=I;for(let y=0;y<m.length;y+=8){var p=Math.min(8,m.length-y);const f=parseInt(m.substring(y,y+p),u);p<8?(p=b(Math.pow(u,p)),g=g.j(p).add(b(f))):(g=g.j(d),g=g.add(b(f)))}return g}var I=v(0),S=v(1),N=v(16777216);s=l.prototype,s.m=function(){if(k(this))return-D(this).m();let m=0,u=1;for(let d=0;d<this.g.length;d++){const g=this.i(d);m+=(g>=0?g:4294967296+g)*u,u*=4294967296}return m},s.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(P(this))return"0";if(k(this))return"-"+D(this).toString(m);const u=b(Math.pow(m,6));var d=this;let g="";for(;;){const p=at(d,u).g;d=et(d,p.j(u));let y=((d.g.length>0?d.g[0]:d.h)>>>0).toString(m);if(d=p,P(d))return y+g;for(;y.length<6;)y="0"+y;g=y+g}},s.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function P(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function k(m){return m.h==-1}s.l=function(m){return m=et(this,m),k(m)?-1:P(m)?0:1};function D(m){const u=m.g.length,d=[];for(let g=0;g<u;g++)d[g]=~m.g[g];return new l(d,~m.h).add(S)}s.abs=function(){return k(this)?D(this):this},s.add=function(m){const u=Math.max(this.g.length,m.g.length),d=[];let g=0;for(let p=0;p<=u;p++){let y=g+(this.i(p)&65535)+(m.i(p)&65535),f=(y>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);g=f>>>16,y&=65535,f&=65535,d[p]=f<<16|y}return new l(d,d[d.length-1]&-2147483648?-1:0)};function et(m,u){return m.add(D(u))}s.j=function(m){if(P(this)||P(m))return I;if(k(this))return k(m)?D(this).j(D(m)):D(D(this).j(m));if(k(m))return D(this.j(D(m)));if(this.l(N)<0&&m.l(N)<0)return b(this.m()*m.m());const u=this.g.length+m.g.length,d=[];for(var g=0;g<2*u;g++)d[g]=0;for(g=0;g<this.g.length;g++)for(let p=0;p<m.g.length;p++){const y=this.i(g)>>>16,f=this.i(g)&65535,G=m.i(p)>>>16,it=m.i(p)&65535;d[2*g+2*p]+=f*it,st(d,2*g+2*p),d[2*g+2*p+1]+=y*it,st(d,2*g+2*p+1),d[2*g+2*p+1]+=f*G,st(d,2*g+2*p+1),d[2*g+2*p+2]+=y*G,st(d,2*g+2*p+2)}for(m=0;m<u;m++)d[m]=d[2*m+1]<<16|d[2*m];for(m=u;m<2*u;m++)d[m]=0;return new l(d,0)};function st(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function K(m,u){this.g=m,this.h=u}function at(m,u){if(P(u))throw Error("division by zero");if(P(m))return new K(I,I);if(k(m))return u=at(D(m),u),new K(D(u.g),D(u.h));if(k(u))return u=at(m,D(u)),new K(D(u.g),u.h);if(m.g.length>30){if(k(m)||k(u))throw Error("slowDivide_ only works with positive integers.");for(var d=S,g=u;g.l(m)<=0;)d=ct(d),g=ct(g);var p=nt(d,1),y=nt(g,1);for(g=nt(g,2),d=nt(d,2);!P(g);){var f=y.add(g);f.l(m)<=0&&(p=p.add(d),y=f),g=nt(g,1),d=nt(d,1)}return u=et(m,p.j(u)),new K(p,u)}for(p=I;m.l(u)>=0;){for(d=Math.max(1,Math.floor(m.m()/u.m())),g=Math.ceil(Math.log(d)/Math.LN2),g=g<=48?1:Math.pow(2,g-48),y=b(d),f=y.j(u);k(f)||f.l(m)>0;)d-=g,y=b(d),f=y.j(u);P(y)&&(y=S),p=p.add(y),m=et(m,f)}return new K(p,m)}s.B=function(m){return at(this,m).h},s.and=function(m){const u=Math.max(this.g.length,m.g.length),d=[];for(let g=0;g<u;g++)d[g]=this.i(g)&m.i(g);return new l(d,this.h&m.h)},s.or=function(m){const u=Math.max(this.g.length,m.g.length),d=[];for(let g=0;g<u;g++)d[g]=this.i(g)|m.i(g);return new l(d,this.h|m.h)},s.xor=function(m){const u=Math.max(this.g.length,m.g.length),d=[];for(let g=0;g<u;g++)d[g]=this.i(g)^m.i(g);return new l(d,this.h^m.h)};function ct(m){const u=m.g.length+1,d=[];for(let g=0;g<u;g++)d[g]=m.i(g)<<1|m.i(g-1)>>>31;return new l(d,m.h)}function nt(m,u){const d=u>>5;u%=32;const g=m.g.length-d,p=[];for(let y=0;y<g;y++)p[y]=u>0?m.i(y+d)>>>u|m.i(y+d+1)<<32-u:m.i(y+d);return new l(p,m.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=b,l.fromString=T,cs=l}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,t=Object.defineProperty;function n(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xe=="object"&&Xe];for(var i=0;i<e.length;++i){var o=e[i];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var r=n(this);function a(e,i){if(i)t:{var o=r;e=e.split(".");for(var h=0;h<e.length-1;h++){var _=e[h];if(!(_ in o))break t;o=o[_]}e=e[e.length-1],h=o[e],i=i(h),i!=h&&i!=null&&t(o,e,{configurable:!0,writable:!0,value:i})}}a("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(e){return e||function(i){var o=[],h;for(h in i)Object.prototype.hasOwnProperty.call(i,h)&&o.push([h,i[h]]);return o}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function w(e){var i=typeof e;return i=="object"&&e!=null||i=="function"}function v(e,i,o){return e.call.apply(e.bind,arguments)}function b(e,i,o){return b=v,b.apply(null,arguments)}function T(e,i){var o=Array.prototype.slice.call(arguments,1);return function(){var h=o.slice();return h.push.apply(h,arguments),e.apply(this,h)}}function I(e,i){function o(){}o.prototype=i.prototype,e.Z=i.prototype,e.prototype=new o,e.prototype.constructor=e,e.Ob=function(h,_,E){for(var A=Array(arguments.length-2),O=2;O<arguments.length;O++)A[O-2]=arguments[O];return i.prototype[_].apply(h,A)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function N(e){const i=e.length;if(i>0){const o=Array(i);for(let h=0;h<i;h++)o[h]=e[h];return o}return[]}function P(e,i){for(let h=1;h<arguments.length;h++){const _=arguments[h];var o=typeof _;if(o=o!="object"?o:_?Array.isArray(_)?"array":o:"null",o=="array"||o=="object"&&typeof _.length=="number"){o=e.length||0;const E=_.length||0;e.length=o+E;for(let A=0;A<E;A++)e[o+A]=_[A]}else e.push(_)}}class k{constructor(i,o){this.i=i,this.j=o,this.h=0,this.g=null}get(){let i;return this.h>0?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function D(e){l.setTimeout(()=>{throw e},0)}function et(){var e=m;let i=null;return e.g&&(i=e.g,e.g=e.g.next,e.g||(e.h=null),i.next=null),i}class st{constructor(){this.h=this.g=null}add(i,o){const h=K.get();h.set(i,o),this.h?this.h.next=h:this.g=h,this.h=h}}var K=new k(()=>new at,e=>e.reset());class at{constructor(){this.next=this.g=this.h=null}set(i,o){this.h=i,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,nt=!1,m=new st,u=()=>{const e=Promise.resolve(void 0);ct=()=>{e.then(d)}};function d(){for(var e;e=et();){try{e.h.call(e.g)}catch(o){D(o)}var i=K;i.j(e),i.h<100&&(i.h++,e.next=i.g,i.g=e)}nt=!1}function g(){this.u=this.u,this.C=this.C}g.prototype.u=!1,g.prototype.dispose=function(){this.u||(this.u=!0,this.N())},g.prototype[Symbol.dispose]=function(){this.dispose()},g.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(e,i){this.type=e,this.g=this.target=i,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,i=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const o=()=>{};l.addEventListener("test",o,i),l.removeEventListener("test",o,i)}catch(o){}return e}();function f(e){return/^[\s\xa0]*$/.test(e)}function G(e,i){p.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,i)}I(G,p),G.prototype.init=function(e,i){const o=this.type=e.type,h=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=i,i=e.relatedTarget,i||(o=="mouseover"?i=e.fromElement:o=="mouseout"&&(i=e.toElement)),this.relatedTarget=i,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var it="closure_listenable_"+(Math.random()*1e6|0),jr=0;function Ur(e,i,o,h,_){this.listener=e,this.proxy=null,this.src=i,this.type=o,this.capture=!!h,this.ha=_,this.key=++jr,this.da=this.fa=!1}function Me(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function xe(e,i,o){for(const h in e)i.call(o,e[h],h,e)}function Fr(e,i){for(const o in e)i.call(void 0,e[o],o,e)}function ds(e){const i={};for(const o in e)i[o]=e[o];return i}const ps="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gs(e,i){let o,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(o in h)e[o]=h[o];for(let E=0;E<ps.length;E++)o=ps[E],Object.prototype.hasOwnProperty.call(h,o)&&(e[o]=h[o])}}function je(e){this.src=e,this.g={},this.h=0}je.prototype.add=function(e,i,o,h,_){const E=e.toString();e=this.g[E],e||(e=this.g[E]=[],this.h++);const A=un(e,i,h,_);return A>-1?(i=e[A],o||(i.fa=!1)):(i=new Ur(i,this.src,E,!!h,_),i.fa=o,e.push(i)),i};function ln(e,i){const o=i.type;if(o in e.g){var h=e.g[o],_=Array.prototype.indexOf.call(h,i,void 0),E;(E=_>=0)&&Array.prototype.splice.call(h,_,1),E&&(Me(i),e.g[o].length==0&&(delete e.g[o],e.h--))}}function un(e,i,o,h){for(let _=0;_<e.length;++_){const E=e[_];if(!E.da&&E.listener==i&&E.capture==!!o&&E.ha==h)return _}return-1}var fn="closure_lm_"+(Math.random()*1e6|0),dn={};function ms(e,i,o,h,_){if(Array.isArray(i)){for(let E=0;E<i.length;E++)ms(e,i[E],o,h,_);return null}return o=ws(o),e&&e[it]?e.J(i,o,w(h)?!!h.capture:!1,_):Vr(e,i,o,!1,h,_)}function Vr(e,i,o,h,_,E){if(!i)throw Error("Invalid event type");const A=w(_)?!!_.capture:!!_;let O=gn(e);if(O||(e[fn]=O=new je(e)),o=O.add(i,o,h,A,E),o.proxy)return o;if(h=Br(),o.proxy=h,h.src=e,h.listener=o,e.addEventListener)y||(_=A),_===void 0&&(_=!1),e.addEventListener(i.toString(),h,_);else if(e.attachEvent)e.attachEvent(_s(i.toString()),h);else if(e.addListener&&e.removeListener)e.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Br(){function e(o){return i.call(e.src,e.listener,o)}const i=$r;return e}function ys(e,i,o,h,_){if(Array.isArray(i))for(var E=0;E<i.length;E++)ys(e,i[E],o,h,_);else h=w(h)?!!h.capture:!!h,o=ws(o),e&&e[it]?(e=e.i,E=String(i).toString(),E in e.g&&(i=e.g[E],o=un(i,o,h,_),o>-1&&(Me(i[o]),Array.prototype.splice.call(i,o,1),i.length==0&&(delete e.g[E],e.h--)))):e&&(e=gn(e))&&(i=e.g[i.toString()],e=-1,i&&(e=un(i,o,h,_)),(o=e>-1?i[e]:null)&&pn(o))}function pn(e){if(typeof e!="number"&&e&&!e.da){var i=e.src;if(i&&i[it])ln(i.i,e);else{var o=e.type,h=e.proxy;i.removeEventListener?i.removeEventListener(o,h,e.capture):i.detachEvent?i.detachEvent(_s(o),h):i.addListener&&i.removeListener&&i.removeListener(h),(o=gn(i))?(ln(o,e),o.h==0&&(o.src=null,i[fn]=null)):Me(e)}}}function _s(e){return e in dn?dn[e]:dn[e]="on"+e}function $r(e,i){if(e.da)e=!0;else{i=new G(i,this);const o=e.listener,h=e.ha||e.src;e.fa&&pn(e),e=o.call(h,i)}return e}function gn(e){return e=e[fn],e instanceof je?e:null}var mn="__closure_events_fn_"+(Math.random()*1e9>>>0);function ws(e){return typeof e=="function"?e:(e[mn]||(e[mn]=function(i){return e.handleEvent(i)}),e[mn])}function Y(){g.call(this),this.i=new je(this),this.M=this,this.G=null}I(Y,g),Y.prototype[it]=!0,Y.prototype.removeEventListener=function(e,i,o,h){ys(this,e,i,o,h)};function X(e,i){var o,h=e.G;if(h)for(o=[];h;h=h.G)o.push(h);if(e=e.M,h=i.type||i,typeof i=="string")i=new p(i,e);else if(i instanceof p)i.target=i.target||e;else{var _=i;i=new p(h,e),gs(i,_)}_=!0;let E,A;if(o)for(A=o.length-1;A>=0;A--)E=i.g=o[A],_=Ue(E,h,!0,i)&&_;if(E=i.g=e,_=Ue(E,h,!0,i)&&_,_=Ue(E,h,!1,i)&&_,o)for(A=0;A<o.length;A++)E=i.g=o[A],_=Ue(E,h,!1,i)&&_}Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var e=this.i;for(const i in e.g){const o=e.g[i];for(let h=0;h<o.length;h++)Me(o[h]);delete e.g[i],e.h--}}this.G=null},Y.prototype.J=function(e,i,o,h){return this.i.add(String(e),i,!1,o,h)},Y.prototype.K=function(e,i,o,h){return this.i.add(String(e),i,!0,o,h)};function Ue(e,i,o,h){if(i=e.i.g[String(i)],!i)return!0;i=i.concat();let _=!0;for(let E=0;E<i.length;++E){const A=i[E];if(A&&!A.da&&A.capture==o){const O=A.listener,q=A.ha||A.src;A.fa&&ln(e.i,A),_=O.call(q,h)!==!1&&_}}return _&&!h.defaultPrevented}function Hr(e,i){if(typeof e!="function")if(e&&typeof e.handleEvent=="function")e=b(e.handleEvent,e);else throw Error("Invalid listener argument");return Number(i)>2147483647?-1:l.setTimeout(e,i||0)}function Es(e){e.g=Hr(()=>{e.g=null,e.i&&(e.i=!1,Es(e))},e.l);const i=e.h;e.h=null,e.m.apply(null,i)}class Gr extends g{constructor(i,o){super(),this.m=i,this.l=o,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Es(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(e){g.call(this),this.h=e,this.g={}}I(re,g);var vs=[];function bs(e){xe(e.g,function(i,o){this.g.hasOwnProperty(o)&&pn(i)},e),e.g={}}re.prototype.N=function(){re.Z.N.call(this),bs(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yn=l.JSON.stringify,qr=l.JSON.parse,zr=class{stringify(e){return l.JSON.stringify(e,void 0)}parse(e){return l.JSON.parse(e,void 0)}};function Ss(){}function Wr(){}var oe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _n(){p.call(this,"d")}I(_n,p);function wn(){p.call(this,"c")}I(wn,p);var Jt={},Is=null;function En(){return Is=Is||new Y}Jt.Ia="serverreachability";function As(e){p.call(this,Jt.Ia,e)}I(As,p);function ae(e){const i=En();X(i,new As(i))}Jt.STAT_EVENT="statevent";function Ts(e,i){p.call(this,Jt.STAT_EVENT,e),this.stat=i}I(Ts,p);function Z(e){const i=En();X(i,new Ts(i,e))}Jt.Ja="timingevent";function Cs(e,i){p.call(this,Jt.Ja,e),this.size=i}I(Cs,p);function ce(e,i){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){e()},i)}function he(){this.g=!0}he.prototype.ua=function(){this.g=!1};function Jr(e,i,o,h,_,E){e.info(function(){if(e.g)if(E){var A="",O=E.split("&");for(let U=0;U<O.length;U++){var q=O[U].split("=");if(q.length>1){const z=q[0];q=q[1];const dt=z.split("_");A=dt.length>=2&&dt[1]=="type"?A+(z+"="+q+"&"):A+(z+"=redacted&")}}}else A=null;else A=E;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+i+"\n"+o+"\n"+A})}function Kr(e,i,o,h,_,E,A){e.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+i+"\n"+o+"\n"+E+" "+A})}function Kt(e,i,o,h){e.info(function(){return"XMLHTTP TEXT ("+i+"): "+Xr(e,o)+(h?" "+h:"")})}function Yr(e,i){e.info(function(){return"TIMEOUT: "+i})}he.prototype.info=function(){};function Xr(e,i){if(!e.g)return i;if(!i)return null;try{const E=JSON.parse(i);if(E){for(e=0;e<E.length;e++)if(Array.isArray(E[e])){var o=E[e];if(!(o.length<2)){var h=o[1];if(Array.isArray(h)&&!(h.length<1)){var _=h[0];if(_!="noop"&&_!="stop"&&_!="close")for(let A=1;A<h.length;A++)h[A]=""}}}}return yn(E)}catch(E){return i}}var vn={NO_ERROR:0,TIMEOUT:8},Zr={},Rs;function bn(){}I(bn,Ss),bn.prototype.g=function(){return new XMLHttpRequest},Rs=new bn;function le(e){return encodeURIComponent(String(e))}function Qr(e){var i=1;e=e.split(":");const o=[];for(;i>0&&e.length;)o.push(e.shift()),i--;return e.length&&o.push(e.join(":")),o}function bt(e,i,o,h){this.j=e,this.i=i,this.l=o,this.S=h||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Os}function Os(){this.i=null,this.g="",this.h=!1}var Ps={},Sn={};function In(e,i,o){e.M=1,e.A=Ve(ft(i)),e.u=o,e.R=!0,Ds(e,null)}function Ds(e,i){e.F=Date.now(),Fe(e),e.B=ft(e.A);var o=e.B,h=e.S;Array.isArray(h)||(h=[String(h)]),Gs(o.i,"t",h),e.C=0,o=e.j.L,e.h=new Os,e.g=ci(e.j,o?i:null,!e.u),e.P>0&&(e.O=new Gr(b(e.Y,e,e.g),e.P)),i=e.V,o=e.g,h=e.ba;var _="readystatechange";Array.isArray(_)||(_&&(vs[0]=_.toString()),_=vs);for(let E=0;E<_.length;E++){const A=ms(o,_[E],h||i.handleEvent,!1,i.h||i);if(!A)break;i.g[A.key]=A}i=e.J?ds(e.J):{},e.u?(e.v||(e.v="POST"),i["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,i)):(e.v="GET",e.g.ea(e.B,e.v,null,i)),ae(),Jr(e.i,e.v,e.B,e.l,e.S,e.u)}bt.prototype.ba=function(e){e=e.target;const i=this.O;i&&At(e)==3?i.j():this.Y(e)},bt.prototype.Y=function(e){try{if(e==this.g)t:{const O=At(this.g),q=this.g.ya(),U=this.g.ca();if(!(O<3)&&(O!=3||this.g&&(this.h.h||this.g.la()||Xs(this.g)))){this.K||O!=4||q==7||(q==8||U<=0?ae(3):ae(2)),An(this);var i=this.g.ca();this.X=i;var o=to(this);if(this.o=i==200,Kr(this.i,this.v,this.B,this.l,this.S,O,i),this.o){if(this.U&&!this.L){e:{if(this.g){var h,_=this.g;if((h=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(h)){var E=h;break e}}E=null}if(e=E)Kt(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tn(this,e);else{this.o=!1,this.m=3,Z(12),kt(this),ue(this);break t}}if(this.R){e=!0;let z;for(;!this.K&&this.C<o.length;)if(z=eo(this,o),z==Sn){O==4&&(this.m=4,Z(14),e=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(z==Ps){this.m=4,Z(15),Kt(this.i,this.l,o,"[Invalid Chunk]"),e=!1;break}else Kt(this.i,this.l,z,null),Tn(this,z);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),O!=4||o.length!=0||this.h.h||(this.m=1,Z(16),e=!1),this.o=this.o&&e,!e)Kt(this.i,this.l,o,"[Invalid Chunked Response]"),kt(this),ue(this);else if(o.length>0&&!this.W){this.W=!0;var A=this.j;A.g==this&&A.aa&&!A.P&&(A.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Ln(A),A.P=!0,Z(11))}}else Kt(this.i,this.l,o,null),Tn(this,o);O==4&&kt(this),this.o&&!this.K&&(O==4?ii(this.j,this):(this.o=!1,Fe(this)))}else mo(this.g),i==400&&o.indexOf("Unknown SID")>0?(this.m=3,Z(12)):(this.m=0,Z(13)),kt(this),ue(this)}}}catch(O){}finally{}};function to(e){if(!Ns(e))return e.g.la();const i=Xs(e.g);if(i==="")return"";let o="";const h=i.length,_=At(e.g)==4;if(!e.h.i){if(typeof TextDecoder>"u")return kt(e),ue(e),"";e.h.i=new l.TextDecoder}for(let E=0;E<h;E++)e.h.h=!0,o+=e.h.i.decode(i[E],{stream:!(_&&E==h-1)});return i.length=0,e.h.g+=o,e.C=0,e.h.g}function Ns(e){return e.g?e.v=="GET"&&e.M!=2&&e.j.Aa:!1}function eo(e,i){var o=e.C,h=i.indexOf("\n",o);return h==-1?Sn:(o=Number(i.substring(o,h)),isNaN(o)?Ps:(h+=1,h+o>i.length?Sn:(i=i.slice(h,h+o),e.C=h+o,i)))}bt.prototype.cancel=function(){this.K=!0,kt(this)};function Fe(e){e.T=Date.now()+e.H,ks(e,e.H)}function ks(e,i){if(e.D!=null)throw Error("WatchDog timer not null");e.D=ce(b(e.aa,e),i)}function An(e){e.D&&(l.clearTimeout(e.D),e.D=null)}bt.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(Yr(this.i,this.B),this.M!=2&&(ae(),Z(17)),kt(this),this.m=2,ue(this)):ks(this,this.T-e)};function ue(e){e.j.I==0||e.K||ii(e.j,e)}function kt(e){An(e);var i=e.O;i&&typeof i.dispose=="function"&&i.dispose(),e.O=null,bs(e.V),e.g&&(i=e.g,e.g=null,i.abort(),i.dispose())}function Tn(e,i){try{var o=e.j;if(o.I!=0&&(o.g==e||Cn(o.h,e))){if(!e.L&&Cn(o.h,e)&&o.I==3){try{var h=o.Ba.g.parse(i)}catch(U){h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){t:if(!o.v){if(o.g)if(o.g.F+3e3<e.F)qe(o),He(o);else break t;kn(o),Z(18)}}else o.xa=_[1],0<o.xa-o.K&&_[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=ce(b(o.Va,o),6e3));xs(o.h)<=1&&o.ta&&(o.ta=void 0)}else Mt(o,11)}else if((e.L||o.g==e)&&qe(o),!f(i))for(_=o.Ba.g.parse(i),i=0;i<_.length;i++){let U=_[i];const z=U[0];if(!(z<=o.K))if(o.K=z,U=U[1],o.I==2)if(U[0]=="c"){o.M=U[1],o.ba=U[2];const dt=U[3];dt!=null&&(o.ka=dt,o.j.info("VER="+o.ka));const xt=U[4];xt!=null&&(o.za=xt,o.j.info("SVER="+o.za));const Tt=U[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(h=1.5*Tt,o.O=h,o.j.info("backChannelRequestTimeoutMs_="+h)),h=o;const Ct=e.g;if(Ct){const ze=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ze){var E=h.h;E.g||ze.indexOf("spdy")==-1&&ze.indexOf("quic")==-1&&ze.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Rn(E,E.h),E.h=null))}if(h.G){const Mn=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Mn&&(h.wa=Mn,F(h.J,h.G,Mn))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-e.F,o.j.info("Handshake RTT: "+o.T+"ms")),h=o;var A=e;if(h.na=ai(h,h.L?h.ba:null,h.W),A.L){js(h.h,A);var O=A,q=h.O;q&&(O.H=q),O.D&&(An(O),Fe(O)),h.g=A}else ni(h);o.i.length>0&&Ge(o)}else U[0]!="stop"&&U[0]!="close"||Mt(o,7);else o.I==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Mt(o,7):Nn(o):U[0]!="noop"&&o.l&&o.l.qa(U),o.A=0)}}ae(4)}catch(U){}}var no=class{constructor(e,i){this.g=e,this.map=i}};function Ls(e){this.l=e||10,l.PerformanceNavigationTiming?(e=l.performance.getEntriesByType("navigation"),e=e.length>0&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ms(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function xs(e){return e.h?1:e.g?e.g.size:0}function Cn(e,i){return e.h?e.h==i:e.g?e.g.has(i):!1}function Rn(e,i){e.g?e.g.add(i):e.h=i}function js(e,i){e.h&&e.h==i?e.h=null:e.g&&e.g.has(i)&&e.g.delete(i)}Ls.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Us(e){if(e.h!=null)return e.i.concat(e.h.G);if(e.g!=null&&e.g.size!==0){let i=e.i;for(const o of e.g.values())i=i.concat(o.G);return i}return N(e.i)}var Fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function so(e,i){if(e){e=e.split("&");for(let o=0;o<e.length;o++){const h=e[o].indexOf("=");let _,E=null;h>=0?(_=e[o].substring(0,h),E=e[o].substring(h+1)):_=e[o],i(_,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function St(e){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let i;e instanceof St?(this.l=e.l,fe(this,e.j),this.o=e.o,this.g=e.g,de(this,e.u),this.h=e.h,On(this,qs(e.i)),this.m=e.m):e&&(i=String(e).match(Fs))?(this.l=!1,fe(this,i[1]||"",!0),this.o=pe(i[2]||""),this.g=pe(i[3]||"",!0),de(this,i[4]),this.h=pe(i[5]||"",!0),On(this,i[6]||"",!0),this.m=pe(i[7]||"")):(this.l=!1,this.i=new me(null,this.l))}St.prototype.toString=function(){const e=[];var i=this.j;i&&e.push(ge(i,Vs,!0),":");var o=this.g;return(o||i=="file")&&(e.push("//"),(i=this.o)&&e.push(ge(i,Vs,!0),"@"),e.push(le(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&e.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&e.push("/"),e.push(ge(o,o.charAt(0)=="/"?oo:ro,!0))),(o=this.i.toString())&&e.push("?",o),(o=this.m)&&e.push("#",ge(o,co)),e.join("")},St.prototype.resolve=function(e){const i=ft(this);let o=!!e.j;o?fe(i,e.j):o=!!e.o,o?i.o=e.o:o=!!e.g,o?i.g=e.g:o=e.u!=null;var h=e.h;if(o)de(i,e.u);else if(o=!!e.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var _=i.h.lastIndexOf("/");_!=-1&&(h=i.h.slice(0,_+1)+h)}if(_=h,_==".."||_==".")h="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){h=_.lastIndexOf("/",0)==0,_=_.split("/");const E=[];for(let A=0;A<_.length;){const O=_[A++];O=="."?h&&A==_.length&&E.push(""):O==".."?((E.length>1||E.length==1&&E[0]!="")&&E.pop(),h&&A==_.length&&E.push("")):(E.push(O),h=!0)}h=E.join("/")}else h=_}return o?i.h=h:o=e.i.toString()!=="",o?On(i,qs(e.i)):o=!!e.m,o&&(i.m=e.m),i};function ft(e){return new St(e)}function fe(e,i,o){e.j=o?pe(i,!0):i,e.j&&(e.j=e.j.replace(/:$/,""))}function de(e,i){if(i){if(i=Number(i),isNaN(i)||i<0)throw Error("Bad port number "+i);e.u=i}else e.u=null}function On(e,i,o){i instanceof me?(e.i=i,ho(e.i,e.l)):(o||(i=ge(i,ao)),e.i=new me(i,e.l))}function F(e,i,o){e.i.set(i,o)}function Ve(e){return F(e,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),e}function pe(e,i){return e?i?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ge(e,i,o){return typeof e=="string"?(e=encodeURI(e).replace(i,io),o&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function io(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Vs=/[#\/\?@]/g,ro=/[#\?:]/g,oo=/[#\?]/g,ao=/[#\?@]/g,co=/#/g;function me(e,i){this.h=this.g=null,this.i=e||null,this.j=!!i}function Lt(e){e.g||(e.g=new Map,e.h=0,e.i&&so(e.i,function(i,o){e.add(decodeURIComponent(i.replace(/\+/g," ")),o)}))}s=me.prototype,s.add=function(e,i){Lt(this),this.i=null,e=Yt(this,e);let o=this.g.get(e);return o||this.g.set(e,o=[]),o.push(i),this.h+=1,this};function Bs(e,i){Lt(e),i=Yt(e,i),e.g.has(i)&&(e.i=null,e.h-=e.g.get(i).length,e.g.delete(i))}function $s(e,i){return Lt(e),i=Yt(e,i),e.g.has(i)}s.forEach=function(e,i){Lt(this),this.g.forEach(function(o,h){o.forEach(function(_){e.call(i,_,h,this)},this)},this)};function Hs(e,i){Lt(e);let o=[];if(typeof i=="string")$s(e,i)&&(o=o.concat(e.g.get(Yt(e,i))));else for(e=Array.from(e.g.values()),i=0;i<e.length;i++)o=o.concat(e[i]);return o}s.set=function(e,i){return Lt(this),this.i=null,e=Yt(this,e),$s(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[i]),this.h+=1,this},s.get=function(e,i){return e?(e=Hs(this,e),e.length>0?String(e[0]):i):i};function Gs(e,i,o){Bs(e,i),o.length>0&&(e.i=null,e.g.set(Yt(e,i),N(o)),e.h+=o.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],i=Array.from(this.g.keys());for(let h=0;h<i.length;h++){var o=i[h];const _=le(o);o=Hs(this,o);for(let E=0;E<o.length;E++){let A=_;o[E]!==""&&(A+="="+le(o[E])),e.push(A)}}return this.i=e.join("&")};function qs(e){const i=new me;return i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),i}function Yt(e,i){return i=String(i),e.j&&(i=i.toLowerCase()),i}function ho(e,i){i&&!e.j&&(Lt(e),e.i=null,e.g.forEach(function(o,h){const _=h.toLowerCase();h!=_&&(Bs(this,h),Gs(this,_,o))},e)),e.j=i}function lo(e,i){const o=new he;if(l.Image){const h=new Image;h.onload=T(It,o,"TestLoadImage: loaded",!0,i,h),h.onerror=T(It,o,"TestLoadImage: error",!1,i,h),h.onabort=T(It,o,"TestLoadImage: abort",!1,i,h),h.ontimeout=T(It,o,"TestLoadImage: timeout",!1,i,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=e}else i(!1)}function uo(e,i){const o=new he,h=new AbortController,_=setTimeout(()=>{h.abort(),It(o,"TestPingServer: timeout",!1,i)},1e4);fetch(e,{signal:h.signal}).then(E=>{clearTimeout(_),E.ok?It(o,"TestPingServer: ok",!0,i):It(o,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(_),It(o,"TestPingServer: error",!1,i)})}function It(e,i,o,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(o)}catch(E){}}function fo(){this.g=new zr}function Pn(e){this.i=e.Sb||null,this.h=e.ab||!1}I(Pn,Ss),Pn.prototype.g=function(){return new Be(this.i,this.h)};function Be(e,i){Y.call(this),this.H=e,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Be,Y),s=Be.prototype,s.open=function(e,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=i,this.readyState=1,_e(this)},s.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const i={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(i.body=e),(this.H||l).fetch(new Request(this.D,i)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ye(this)),this.readyState=0},s.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,_e(this)),this.g&&(this.readyState=3,_e(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;zs(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))};function zs(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}s.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var i=e.value?e.value:new Uint8Array(0);(i=this.B.decode(i,{stream:!e.done}))&&(this.response=this.responseText+=i)}e.done?ye(this):_e(this),this.readyState==3&&zs(this)}},s.Oa=function(e){this.g&&(this.response=this.responseText=e,ye(this))},s.Na=function(e){this.g&&(this.response=e,ye(this))},s.ga=function(){this.g&&ye(this)};function ye(e){e.readyState=4,e.l=null,e.j=null,e.B=null,_e(e)}s.setRequestHeader=function(e,i){this.A.append(e,i)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],i=this.h.entries();for(var o=i.next();!o.done;)o=o.value,e.push(o[0]+": "+o[1]),o=i.next();return e.join("\r\n")};function _e(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Be.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});function Ws(e){let i="";return xe(e,function(o,h){i+=h,i+=":",i+=o,i+="\r\n"}),i}function Dn(e,i,o){t:{for(h in o){var h=!1;break t}h=!0}h||(o=Ws(o),typeof e=="string"?o!=null&&le(o):F(e,i,o))}function $(e){Y.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I($,Y);var po=/^https?$/i,go=["POST","PUT"];s=$.prototype,s.Fa=function(e){this.H=e},s.ea=function(e,i,o,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);i=i?i.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Rs.g(),this.g.onreadystatechange=S(b(this.Ca,this));try{this.B=!0,this.g.open(i,String(e),!0),this.B=!1}catch(E){Js(this,E);return}if(e=o||"",o=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)o.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const E of h.keys())o.set(E,h.get(E));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(o.keys()).find(E=>E.toLowerCase()=="content-type"),_=l.FormData&&e instanceof l.FormData,!(Array.prototype.indexOf.call(go,i,void 0)>=0)||h||_||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,A]of o)this.g.setRequestHeader(E,A);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(E){Js(this,E)}};function Js(e,i){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=i,e.o=5,Ks(e),$e(e)}function Ks(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}s.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),$e(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$e(this,!0)),$.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ys(this):this.Xa())},s.Xa=function(){Ys(this)};function Ys(e){if(e.h&&typeof c<"u"){if(e.v&&At(e)==4)setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),At(e)==4){e.h=!1;try{const E=e.ca();t:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var o;if(!(o=i)){var h;if(h=E===0){let A=String(e.D).match(Fs)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),h=!po.test(A?A.toLowerCase():"")}o=h}if(o)X(e,"complete"),X(e,"success");else{e.o=6;try{var _=At(e)>2?e.g.statusText:""}catch(A){_=""}e.l=_+" ["+e.ca()+"]",Ks(e)}}finally{$e(e)}}}}function $e(e,i){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const o=e.g;e.g=null,i||X(e,"ready");try{o.onreadystatechange=null}catch(h){}}}s.isActive=function(){return!!this.g};function At(e){return e.g?e.g.readyState:0}s.ca=function(){try{return At(this)>2?this.g.status:-1}catch(e){return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.La=function(e){if(this.g){var i=this.g.responseText;return e&&i.indexOf(e)==0&&(i=i.substring(e.length)),qr(i)}};function Xs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(i){return null}}function mo(e){const i={};e=(e.g&&At(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let h=0;h<e.length;h++){if(f(e[h]))continue;var o=Qr(e[h]);const _=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const E=i[_]||[];i[_]=E,E.push(o)}Fr(i,function(h){return h.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function we(e,i,o){return o&&o.internalChannelParams&&o.internalChannelParams[e]||i}function Zs(e){this.za=0,this.i=[],this.j=new he,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=we("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=we("baseRetryDelayMs",5e3,e),this.Za=we("retryDelaySeedMs",1e4,e),this.Ta=we("forwardChannelMaxRetries",2,e),this.va=we("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Ls(e&&e.concurrentRequestLimit),this.Ba=new fo,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Zs.prototype,s.ka=8,s.I=1,s.connect=function(e,i,o,h){Z(0),this.W=e,this.H=i||{},o&&h!==void 0&&(this.H.OSID=o,this.H.OAID=h),this.F=this.X,this.J=ai(this,null,this.W),Ge(this)};function Nn(e){if(Qs(e),e.I==3){var i=e.V++,o=ft(e.J);if(F(o,"SID",e.M),F(o,"RID",i),F(o,"TYPE","terminate"),Ee(e,o),i=new bt(e,e.j,i),i.M=2,i.A=Ve(ft(o)),o=!1,l.navigator&&l.navigator.sendBeacon)try{o=l.navigator.sendBeacon(i.A.toString(),"")}catch(h){}!o&&l.Image&&(new Image().src=i.A,o=!0),o||(i.g=ci(i.j,null),i.g.ea(i.A)),i.F=Date.now(),Fe(i)}oi(e)}function He(e){e.g&&(Ln(e),e.g.cancel(),e.g=null)}function Qs(e){He(e),e.v&&(l.clearTimeout(e.v),e.v=null),qe(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&l.clearTimeout(e.m),e.m=null)}function Ge(e){if(!Ms(e.h)&&!e.m){e.m=!0;var i=e.Ea;ct||u(),nt||(ct(),nt=!0),m.add(i,e),e.D=0}}function yo(e,i){return xs(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=i.G.concat(e.i),!0):e.I==1||e.I==2||e.D>=(e.Sa?0:e.Ta)?!1:(e.m=ce(b(e.Ea,e,i),ri(e,e.D)),e.D++,!0)}s.Ea=function(e){if(this.m)if(this.m=null,this.I==1){if(!e){this.V=Math.floor(Math.random()*1e5),e=this.V++;const _=new bt(this,this.j,e);let E=this.o;if(this.U&&(E?(E=ds(E),gs(E,this.U)):E=this.U),this.u!==null||this.R||(_.J=E,E=null),this.S)t:{for(var i=0,o=0;o<this.i.length;o++){e:{var h=this.i[o];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(i+=h,i>4096){i=o;break t}if(i===4096||o===this.i.length-1){i=o+1;break t}}i=1e3}else i=1e3;i=ei(this,_,i),o=ft(this.J),F(o,"RID",e),F(o,"CVER",22),this.G&&F(o,"X-HTTP-Session-Id",this.G),Ee(this,o),E&&(this.R?i="headers="+le(Ws(E))+"&"+i:this.u&&Dn(o,this.u,E)),Rn(this.h,_),this.Ra&&F(o,"TYPE","init"),this.S?(F(o,"$req",i),F(o,"SID","null"),_.U=!0,In(_,o,null)):In(_,o,i),this.I=2}}else this.I==3&&(e?ti(this,e):this.i.length==0||Ms(this.h)||ti(this))};function ti(e,i){var o;i?o=i.l:o=e.V++;const h=ft(e.J);F(h,"SID",e.M),F(h,"RID",o),F(h,"AID",e.K),Ee(e,h),e.u&&e.o&&Dn(h,e.u,e.o),o=new bt(e,e.j,o,e.D+1),e.u===null&&(o.J=e.o),i&&(e.i=i.G.concat(e.i)),i=ei(e,o,1e3),o.H=Math.round(e.va*.5)+Math.round(e.va*.5*Math.random()),Rn(e.h,o),In(o,h,i)}function Ee(e,i){e.H&&xe(e.H,function(o,h){F(i,h,o)}),e.l&&xe({},function(o,h){F(i,h,o)})}function ei(e,i,o){o=Math.min(e.i.length,o);const h=e.l?b(e.l.Ka,e.l,e):null;t:{var _=e.i;let O=-1;for(;;){const q=["count="+o];O==-1?o>0?(O=_[0].g,q.push("ofs="+O)):O=0:q.push("ofs="+O);let U=!0;for(let z=0;z<o;z++){var E=_[z].g;const dt=_[z].map;if(E-=O,E<0)O=Math.max(0,_[z].g-100),U=!1;else try{E="req"+E+"_"||"";try{var A=dt instanceof Map?dt:Object.entries(dt);for(const[xt,Tt]of A){let Ct=Tt;w(Tt)&&(Ct=yn(Tt)),q.push(E+xt+"="+encodeURIComponent(Ct))}}catch(xt){throw q.push(E+"type="+encodeURIComponent("_badmap")),xt}}catch(xt){h&&h(dt)}}if(U){A=q.join("&");break t}}A=void 0}return e=e.i.splice(0,o),i.G=e,A}function ni(e){if(!e.g&&!e.v){e.Y=1;var i=e.Da;ct||u(),nt||(ct(),nt=!0),m.add(i,e),e.A=0}}function kn(e){return e.g||e.v||e.A>=3?!1:(e.Y++,e.v=ce(b(e.Da,e),ri(e,e.A)),e.A++,!0)}s.Da=function(){if(this.v=null,si(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=ce(b(this.Wa,this),e)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Z(10),He(this),si(this))};function Ln(e){e.B!=null&&(l.clearTimeout(e.B),e.B=null)}function si(e){e.g=new bt(e,e.j,"rpc",e.Y),e.u===null&&(e.g.J=e.o),e.g.P=0;var i=ft(e.na);F(i,"RID","rpc"),F(i,"SID",e.M),F(i,"AID",e.K),F(i,"CI",e.F?"0":"1"),!e.F&&e.ia&&F(i,"TO",e.ia),F(i,"TYPE","xmlhttp"),Ee(e,i),e.u&&e.o&&Dn(i,e.u,e.o),e.O&&(e.g.H=e.O);var o=e.g;e=e.ba,o.M=1,o.A=Ve(ft(i)),o.u=null,o.R=!0,Ds(o,e)}s.Va=function(){this.C!=null&&(this.C=null,He(this),kn(this),Z(19))};function qe(e){e.C!=null&&(l.clearTimeout(e.C),e.C=null)}function ii(e,i){var o=null;if(e.g==i){qe(e),Ln(e),e.g=null;var h=2}else if(Cn(e.h,i))o=i.G,js(e.h,i),h=1;else return;if(e.I!=0){if(i.o)if(h==1){o=i.u?i.u.length:0,i=Date.now()-i.F;var _=e.D;h=En(),X(h,new Cs(h,o)),Ge(e)}else ni(e);else if(_=i.m,_==3||_==0&&i.X>0||!(h==1&&yo(e,i)||h==2&&kn(e)))switch(o&&o.length>0&&(i=e.h,i.i=i.i.concat(o)),_){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function ri(e,i){let o=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(o*=2),o*i}function Mt(e,i){if(e.j.info("Error code "+i),i==2){var o=b(e.bb,e),h=e.Ua;const _=!h;h=new St(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fe(h,"https"),Ve(h),_?lo(h.toString(),o):uo(h.toString(),o)}else Z(2);e.I=0,e.l&&e.l.pa(i),oi(e),Qs(e)}s.bb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function oi(e){if(e.I=0,e.ja=[],e.l){const i=Us(e.h);(i.length!=0||e.i.length!=0)&&(P(e.ja,i),P(e.ja,e.i),e.h.i.length=0,N(e.i),e.i.length=0),e.l.oa()}}function ai(e,i,o){var h=o instanceof St?ft(o):new St(o);if(h.g!="")i&&(h.g=i+"."+h.g),de(h,h.u);else{var _=l.location;h=_.protocol,i=i?i+"."+_.hostname:_.hostname,_=+_.port;const E=new St(null);h&&fe(E,h),i&&(E.g=i),_&&de(E,_),o&&(E.h=o),h=E}return o=e.G,i=e.wa,o&&i&&F(h,o,i),F(h,"VER",e.ka),Ee(e,h),h}function ci(e,i,o){if(i&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return i=e.Aa&&!e.ma?new $(new Pn({ab:o})):new $(e.ma),i.Fa(e.L),i}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function hi(){}s=hi.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function rt(e,i){Y.call(this),this.g=new Zs(i),this.l=e,this.h=i&&i.messageUrlParams||null,e=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(e?e["X-WebChannel-Content-Type"]=i.messageContentType:e={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.sa&&(e?e["X-WebChannel-Client-Profile"]=i.sa:e={"X-WebChannel-Client-Profile":i.sa}),this.g.U=e,(e=i&&i.Qb)&&!f(e)&&(this.g.u=e),this.A=i&&i.supportsCrossDomainXhr||!1,this.v=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!f(i)&&(this.g.G=i,e=this.h,e!==null&&i in e&&(e=this.h,i in e&&delete e[i])),this.j=new Xt(this)}I(rt,Y),rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){Nn(this.g)},rt.prototype.o=function(e){var i=this.g;if(typeof e=="string"){var o={};o.__data__=e,e=o}else this.v&&(o={},o.__data__=yn(e),e=o);i.i.push(new no(i.Ya++,e)),i.I==3&&Ge(i)},rt.prototype.N=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,rt.Z.N.call(this)};function li(e){_n.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var i=e.__sm__;if(i){t:{for(const o in i){e=o;break t}e=void 0}(this.i=e)&&(e=this.i,i=i!==null&&e in i?i[e]:void 0),this.data=i}else this.data=e}I(li,_n);function ui(){wn.call(this),this.status=1}I(ui,wn);function Xt(e){this.g=e}I(Xt,hi),Xt.prototype.ra=function(){X(this.g,"a")},Xt.prototype.qa=function(e){X(this.g,new li(e))},Xt.prototype.pa=function(e){X(this.g,new ui)},Xt.prototype.oa=function(){X(this.g,"b")},rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,Zr.COMPLETE="complete",Wr.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",Y.prototype.listen=Y.prototype.J,$.prototype.listenOnce=$.prototype.K,$.prototype.getLastError=$.prototype.Ha,$.prototype.getLastErrorCode=$.prototype.ya,$.prototype.getStatus=$.prototype.ca,$.prototype.getResponseJson=$.prototype.La,$.prototype.getResponseText=$.prototype.la,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Fa}).apply(typeof Xe<"u"?Xe:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="12.9.0";function gh(s){ke=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ie=new ss("@firebase/firestore");function ut(s,...t){if(ie.logLevel<=j.DEBUG){const n=t.map(hs);ie.debug("Firestore (".concat(ke,"): ").concat(s),...n)}}function Rr(s,...t){if(ie.logLevel<=j.ERROR){const n=t.map(hs);ie.error("Firestore (".concat(ke,"): ").concat(s),...n)}}function mh(s,...t){if(ie.logLevel<=j.WARN){const n=t.map(hs);ie.warn("Firestore (".concat(ke,"): ").concat(s),...n)}}function hs(s){if(typeof s=="string")return s;try{return function(n){return JSON.stringify(n)}(s)}catch(t){return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(s,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,Or(s,r,n)}function Or(s,t,n){let r="FIRESTORE (".concat(ke,") INTERNAL ASSERTION FAILED: ").concat(t," (ID: ").concat(s.toString(16),")");if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(a){r+=" CONTEXT: "+n}throw Rr(r),new Error(r)}function Ce(s,t,n,r){let a="Unexpected state";typeof n=="string"?a=n:r=n,s||Or(t,a,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class x extends zt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))}}class yh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wh{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ce(this.o===void 0,42304);let r=this.i;const a=v=>this.i!==r?(r=this.i,n(v)):Promise.resolve();let c=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Re,t.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const v=c;t.enqueueRetryable(async()=>{await v.promise,await a(this.currentUser)})},w=v=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(v=>w(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?w(v):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Re)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Pr(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ce(t===null||typeof t=="string",2055,{h:t}),new tt(t)}}class Eh{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class vh{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new Eh(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bh{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gr(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ce(this.o===void 0,3512);const r=c=>{c.error!=null&&ut("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(c.error.message));const l=c.token!==this.m;return this.m=c.token,ut("FirebaseAppCheckTokenProvider","Received ".concat(l?"new":"existing"," token.")),l?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>r(c))};const a=c=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gi(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=Sh(40);for(let c=0;c<a.length;++c)r.length<20&&a[c]<n&&(r+=t.charAt(a[c]%62))}return r}}function Nt(s,t){return s<t?-1:s>t?1:0}function Ah(s,t){const n=Math.min(s.length,t.length);for(let r=0;r<n;r++){const a=s.charAt(r),c=t.charAt(r);if(a!==c)return Gn(a)===Gn(c)?Nt(a,c):Gn(a)?1:-1}return Nt(s.length,t.length)}const Th=55296,Ch=57343;function Gn(s){const t=s.charCodeAt(0);return t>=Th&&t<=Ch}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="__name__";class gt{constructor(t,n,r){n===void 0?n=0:n>t.length&&Ne(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&Ne(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return gt.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof gt?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let a=0;a<r;a++){const c=gt.compareSegments(t.get(a),n.get(a));if(c!==0)return c}return Nt(t.length,n.length)}static compareSegments(t,n){const r=gt.isNumericId(t),a=gt.isNumericId(n);return r&&!a?-1:!r&&a?1:r&&a?gt.extractNumericId(t).compare(gt.extractNumericId(n)):Ah(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return cs.fromString(t.substring(4,t.length-2))}}class lt extends gt{construct(t,n,r){return new lt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(M.INVALID_ARGUMENT,"Invalid segment (".concat(r,"). Paths must not contain // in them."));n.push(...r.split("/").filter(a=>a.length>0))}return new lt(n)}static emptyPath(){return new lt([])}}const Rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends gt{construct(t,n,r){return new Ft(t,n,r)}static isValidIdentifier(t){return Rh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qi}static keyField(){return new Ft([qi])}static fromServerFormat(t){const n=[];let r="",a=0;const c=()=>{if(r.length===0)throw new x(M.INVALID_ARGUMENT,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));n.push(r),r=""};let l=!1;for(;a<t.length;){const w=t[a];if(w==="\\"){if(a+1===t.length)throw new x(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const v=t[a+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new x(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=v,a+=2}else w==="`"?(l=!l,a++):w!=="."||l?(r+=w,a++):(c(),a++)}if(c(),l)throw new x(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.path=t}static fromPath(t){return new $t(lt.fromString(t))}static fromName(t){return new $t(lt.fromString(t).popFirst(5))}static empty(){return new $t(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return lt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $t(new lt(t.slice()))}}function Oh(s,t,n,r){if(t===!0&&r===!0)throw new x(M.INVALID_ARGUMENT,"".concat(s," and ").concat(n," cannot be used together."))}function Ph(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Dh(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s="".concat(s.substring(0,20),"...")),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(s);return t?"a custom ".concat(t," object"):"an object"}}return typeof s=="function"?"a function":Ne(12329,{type:typeof s})}function Nh(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new x(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(s);throw new x(M.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}}return s}/**
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
 */function H(s,t){const n={typeString:s};return t&&(n.value=t),n}function Le(s,t){if(!Ph(s))throw new x(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const a=t[r].typeString,c="value"in t[r]?{value:t[r].value}:void 0;if(!(r in s)){n="JSON missing required field: '".concat(r,"'");break}const l=s[r];if(a&&typeof l!==a){n="JSON field '".concat(r,"' must be a ").concat(a,".");break}if(c!==void 0&&l!==c.value){n="Expected '".concat(r,"' field to equal '").concat(c.value,"'");break}}if(n)throw new x(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=-62135596800,Wi=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Wi);return new mt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new x(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<zi)throw new x(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wi}_compareTo(t){return this.seconds===t.seconds?Nt(this.nanoseconds,t.nanoseconds):Nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Le(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-zi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:H("string",mt._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function kh(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Lh("Invalid base64 string: "+c):c}}(t);return new qt(n)}static fromUint8Array(t){const n=function(a){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);return c}(t);return new qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let a=0;a<n.length;a++)r[a]=n.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const es="(default)";class on{constructor(t,n){this.projectId=t,this.database=n||es}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===es}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}function Mh(s,t){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new x(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(s.options.projectId,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n=null,r=[],a=[],c=null,l="F",w=null,v=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=a,this.limit=c,this.limitType=l,this.startAt=w,this.endAt=v,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function jh(s){return new xh(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ji,L;(L=Ji||(Ji={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new cs([4294967295,4294967295],0);/**
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
 */const Uh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=1048576;function qn(){return typeof document<"u"?document:null}class Vh{constructor(t,n,r=1e3,a=1.5,c=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=a,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-r);a>0&&ut("ExponentialBackoff","Backing off for ".concat(a," ms (base delay: ").concat(this.d_," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,n,r,a,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=a,this.removalCallback=c,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,a,c){const l=Date.now()+r,w=new ls(t,n,l,a,c);return w.start(r),w}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ki,Yi;(Yi=Ki||(Ki={})).Ma="default",Yi.Cache="cache";/**
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
 */function Bh(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="ComponentProvider",Xi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="firestore.googleapis.com",Zi=!0;class Qi{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dr,this.ssl=Zi}else this.host=t.host,this.ssl=(n=t.ssl)!=null?n:Zi;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Uh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Fh)throw new x(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Oh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bh((r=t.experimentalLongPollingOptions)!=null?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (must not be NaN)"));if(c.timeoutSeconds<5)throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (minimum allowed value is 5)"));if(c.timeoutSeconds>30)throw new x(M.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(c.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,n,r,a){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qi(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yh;switch(r.type){case"firstParty":return new vh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xi.get(n);r&&(ut($h,"Removing Datastore"),Xi.delete(n),r.terminate())}(this),Promise.resolve()}}function Hh(s,t,n,r={}){var b;s=Nh(s,Nr);const a=hr(t),c=s._getSettings(),l={...c,emulatorOptions:s._getEmulatorOptions()},w="".concat(t,":").concat(n);a&&(ta("https://".concat(w)),ia("Firestore",!0)),c.host!==Dr&&c.host!==w&&mh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...c,host:w,ssl:a,emulatorOptions:r};if(!en(v,l)&&(s._setSettings(v),r.mockUserToken)){let T,I;if(typeof r.mockUserToken=="string")T=r.mockUserToken,I=tt.MOCK_USER;else{T=ea(r.mockUserToken,(b=s._app)==null?void 0:b.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new x(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new tt(S)}s._authCredentials=new _h(new Pr(T,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new us(this.firestore,t,this._query)}}class yt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Le(n,yt._jsonSchema))return new yt(t,r||null,new $t(lt.fromString(n.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:H("string",yt._jsonSchemaVersion),referencePath:H("string")};class fs extends us{constructor(t,n,r){super(t,n,jh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new $t(t))}withConverter(t){return new fs(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="AsyncQueue";class er{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vh(this,"async_queue_retry"),this._c=()=>{const r=qn();r&&ut(tr,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=qn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=qn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Re;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!kh(t))throw t;ut(tr,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",nr(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const a=ls.createAndSchedule(this,t,n,r,c=>this.hc(c));return this.tc.push(a),a}uc(){this.nc&&Ne(47125,{Pc:nr(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function nr(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+"\n"+s.stack),t}class Gh extends Nr{constructor(t,n,r,a){super(t,n,r,a),this.type="firestore",this._queue=new er,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new er(t),this._firestoreClient=void 0,await t}}}function qh(s,t){const n=typeof s=="object"?s:yr(),r=typeof s=="string"?s:es,a=pr(n,"firestore").getImmediate({identifier:r});if(!a._initialized){const c=Zo("firestore");c&&Hh(a,...c)}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this._byteString=t}static fromBase64String(t){try{return new _t(qt.fromBase64String(t))}catch(n){throw new x(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new _t(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Le(t,_t._jsonSchema))return _t.fromBase64String(t.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:H("string",_t._jsonSchemaVersion),bytes:H("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new x(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new x(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new x(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Nt(this._lat,t._lat)||Nt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ht._jsonSchemaVersion}}static fromJSON(t){if(Le(t,Ht._jsonSchema))return new Ht(t.latitude,t.longitude)}}Ht._jsonSchemaVersion="firestore/geoPoint/1.0",Ht._jsonSchema={type:H("string",Ht._jsonSchemaVersion),latitude:H("number"),longitude:H("number")};/**
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
 */class Gt{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,a){if(r.length!==a.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==a[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Le(t,Gt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new Gt(t.vectorValues);throw new x(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:H("string",Gt._jsonSchemaVersion),vectorValues:H("object")};function Lr(s,t,n){if((t=ur(t))instanceof kr)return t._internalPath;if(typeof t=="string")return Wh(s,t);throw ns("Field path arguments must be of type string or ",s)}const zh=new RegExp("[~\\*/\\[\\]]");function Wh(s,t,n){if(t.search(zh)>=0)throw ns("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),s);try{return new kr(...t.split("."))._internalPath}catch(r){throw ns("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),s)}}function ns(s,t,n,r,a){let c="Function ".concat(t,"() called with invalid data");c+=". ";let l="";return new x(M.INVALID_ARGUMENT,c+s+l)}const sr="@firebase/firestore",ir="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,n,r,a,c){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,n;return(n=(t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)!=null?n:void 0}get(t){if(this._document){const n=this._document.data.field(Lr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jh extends Mr{data(){return super.data()}}class Ze{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class te extends Mr{constructor(t,n,r,a,c,l){super(t,n,r,a,l),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Qe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Lr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=te._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}te._jsonSchemaVersion="firestore/documentSnapshot/1.0",te._jsonSchema={type:H("string",te._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class Qe extends te{data(t={}){return super.data(t)}}class Oe{constructor(t,n,r,a){this._firestore=t,this._userDataWriter=n,this._snapshot=a,this.metadata=new Ze(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Qe(this._firestore,this._userDataWriter,r.key,r,new Ze(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,c){if(a._snapshot.oldDocs.isEmpty()){let l=0;return a._snapshot.docChanges.map(w=>{const v=new Qe(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Ze(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);return w.doc,{type:"added",doc:v,oldIndex:-1,newIndex:l++}})}{let l=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(w=>c||w.type!==3).map(w=>{const v=new Qe(a._firestore,a._userDataWriter,w.doc.key,w.doc,new Ze(a._snapshot.mutatedKeys.has(w.doc.key),a._snapshot.fromCache),a.query.converter);let b=-1,T=-1;return w.type!==0&&(b=l.indexOf(w.doc.key),l=l.delete(w.doc.key)),w.type!==1&&(l=l.add(w.doc),T=l.indexOf(w.doc.key)),{type:Kh(w.type),doc:v,oldIndex:b,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Oe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ih.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],a=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Kh(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:s})}}/**
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
 */Oe._jsonSchemaVersion="firestore/querySnapshot/1.0",Oe._jsonSchema={type:H("string",Oe._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(t,n=!0){gh(cc),Pe(new ne("firestore",(r,{instanceIdentifier:a,options:c})=>{const l=r.getProvider("app").getImmediate(),w=new Gh(new wh(r.getProvider("auth-internal")),new bh(l,r.getProvider("app-check-internal")),Mh(l,a),l);return c={useFetchStreams:n,...c},w._setSettings(c),w},"PUBLIC").setMultipleInstances(!0)),Dt(sr,ir,t),Dt(sr,ir,"esm2020")})();const Yh={apiKey:"AIzaSyCtpzSQ78f0zTIX9wM6cvu9fYNRFn88NWg",authDomain:"lab06ionicfirebase.firebaseapp.com",projectId:"lab06ionicfirebase",storageBucket:"lab06ionicfirebase.firebasestorage.app",messagingSenderId:"368716721909",appId:"1:368716721909:web:5852c2ac8f5de100019fbc",measurementId:"G-13W10CL2RX"},xr=mr(Yh);qh(xr);const Xh=J.object({properties:{caption:J.string(),tags:J.array({items:J.string()}),objects:J.array({items:J.object({properties:{name:J.string(),confidence:J.number()},optionalProperties:["confidence"]})}),safety:J.object({properties:{isSensitive:J.boolean(),notes:J.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),Zh=lh(xr,{backend:new hn}),Qh=uh(Zh,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:Xh}});class tl{static async analyze(t){var l;const n="วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",r={inlineData:{data:t.base64,mimeType:t.mimeType}},c=(l=(await Qh.generateContent([n,r])).response.text())!=null?l:"{}";return JSON.parse(c)}}const el={key:0},nl={key:1},sl=_o({__name:"Tab1Page",setup(s){const t=ve(null),n=ve(null),r=ve(""),a=ve(null),c=ve(!1);async function l(b){var I;const T=(I=b.target.files)==null?void 0:I[0];T&&(n.value=await Ei.fromFile(T),r.value=URL.createObjectURL(T),a.value=null)}async function w(){c.value=!0;try{const b=await Ei.fromCamera();n.value=b,r.value="data:".concat(b.mimeType,";base64,").concat(b.base64),a.value=null}finally{c.value=!1}}async function v(){if(n.value){c.value=!0;try{a.value=await tl.analyze(n.value)}finally{c.value=!1}}}return(b,T)=>(pt(),Zt(V(wo),null,{default:B(()=>[W(V(bo),null,{default:B(()=>[W(V(Eo),{class:"header"},{default:B(()=>[W(V(vo),null,{default:B(()=>[...T[1]||(T[1]=[ot("✨ Gemini Vision",-1)])]),_:1})]),_:1})]),_:1}),W(V(Co),{class:"ion-padding content"},{default:B(()=>[So("input",{ref_key:"fileEl",ref:t,type:"file",accept:"image/*",hidden:"",onChange:l},null,544),W(V(xn),{expand:"block",class:"btn",onClick:T[0]||(T[0]=I=>{var S;return(S=t.value)==null?void 0:S.click()})},{default:B(()=>[...T[2]||(T[2]=[ot(" 📁 เลือกรูปภาพ ",-1)])]),_:1}),W(V(xn),{expand:"block",class:"btn",onClick:w},{default:B(()=>[...T[3]||(T[3]=[ot(" 📸 ถ่ายภาพ ",-1)])]),_:1}),r.value?(pt(),Zt(V(fi),{key:0,class:"preview-card"},{default:B(()=>[W(V(Io),{src:r.value},null,8,["src"])]),_:1})):be("",!0),W(V(xn),{expand:"block",class:"analyze-btn",disabled:!n.value||c.value,onClick:v},{default:B(()=>[...T[4]||(T[4]=[ot(" 🔍 วิเคราะห์ภาพ ",-1)])]),_:1},8,["disabled"]),c.value?(pt(),Zt(V(Ao),{key:1})):be("",!0),a.value?(pt(),Zt(V(fi),{key:2,class:"result-card"},{default:B(()=>[W(V(Je),null,{default:B(()=>[W(V(Ke),null,{default:B(()=>[...T[5]||(T[5]=[ot("📝 คำอธิบาย",-1)])]),_:1})]),_:1}),W(V(To),null,{default:B(()=>[ot(Se(a.value.caption),1)]),_:1}),W(V(Je),null,{default:B(()=>[W(V(Ke),null,{default:B(()=>[...T[6]||(T[6]=[ot("🏷️ Tags",-1)])]),_:1})]),_:1}),(pt(!0),We(pi,null,di(a.value.tags,I=>(pt(),Zt(V(Ro),{key:I,class:"tag-chip"},{default:B(()=>[ot(Se(I),1)]),_:2},1024))),128)),a.value.objects?(pt(),We("div",el,[W(V(Je),null,{default:B(()=>[W(V(Ke),null,{default:B(()=>[...T[7]||(T[7]=[ot("📦 Objects",-1)])]),_:1})]),_:1}),(pt(!0),We(pi,null,di(a.value.objects,I=>(pt(),Zt(V(gi),{key:I.name},{default:B(()=>{var S;return[ot(Se(I.name)+" ("+Se(((S=I.confidence)==null?void 0:S.toFixed(2))||"-")+") ",1)]}),_:2},1024))),128))])):be("",!0),a.value.safety?(pt(),We("div",nl,[W(V(Je),null,{default:B(()=>[W(V(Ke),null,{default:B(()=>[...T[8]||(T[8]=[ot("⚠️ Safety",-1)])]),_:1})]),_:1}),W(V(gi),null,{default:B(()=>[ot(Se(a.value.safety.isSensitive?"Sensitive":"Safe"),1)]),_:1})])):be("",!0)]),_:1})):be("",!0)]),_:1})]),_:1}))}}),ol=Oo(sl,[["__scopeId","data-v-8587bb86"]]);export{ol as default};
