"use strict";window.g_aEN=class{constructor(c,a){this.g_arr=c,this.g_aEO=a,this.g_aEP=!1,this.g_aEQ=()=>this.g_KY()}g_aER(){}g_aES(e,a,b,c){this.g_arr.g_aET(this.g_aEO,e,a,b,c)}g_aEU(e,a,b,c){return this.g_arr.g_aEV(this.g_aEO,e,a,b,c)}g_aEW(d,a,b){this.g_arr.g_aEX()?this.g_aES(d,a,b):this.g_arr.g_aEY()._OnMessageFromDOM({type:"event",component:this.g_aEO,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aEZ(c,a){this.g_arr.g_aE_(this.g_aEO,c,a)}g_aE$(d){for(const[a,b]of d)this.g_aEZ(a,b)}g_aFa(){return this.g_arr}g_aFb(){return this.g_aEO}g_aek(){this.g_aEP||(this.g_arr.g_aFc(this.g_aEQ),this.g_aEP=!0)}g_adX(){this.g_aEP&&(this.g_arr.g_aFd(this.g_aEQ),this.g_aEP=!1)}g_KY(){}},window.g_mQ=class{constructor(c,a){this.g_ly=c,this.g_mR=a,this.g_mT=-1,this.g_mU=-Infinity,this.g_mV=()=>this.g_mW(),this.g_mX=!1,this.g_mY=!1}g_m_(b){this.g_mY=!!b}g_nc(){if(-1===this.g_mT){const d=Date.now(),a=d-this.g_mU,b=this.g_mR;a>=b&&this.g_mY?(this.g_mU=d,this.g_nd()):this.g_mT=self.setTimeout(this.g_mV,Math.max(b-a,4))}}g_nd(){this.g_mX=!0,this.g_ly(),this.g_mX=!1}g_lC(){this.g_mX||(this.g_ne(),this.g_mU=Date.now())}g_mW(){this.g_mT=-1,this.g_mU=Date.now(),this.g_nd()}g_ne(){-1!==this.g_mT&&(self.clearTimeout(this.g_mT),this.g_mT=-1)}g_ek(){this.g_ne(),this.g_ly=null,this.g_mV=null}},"use strict",window.g_aFe=class extends g_aEN{constructor(c,a){super(c,a),this.g_aFf=new Map,this.g_aFg=!0,this.g_aEZ("create",b=>this.g_aFh(b)),this.g_aEZ("destroy",b=>this.g_aFi(b)),this.g_aEZ("set-visible",b=>this.g_aFj(b)),this.g_aEZ("update-position",b=>this.g_aFk(b)),this.g_aEZ("update-state",b=>this.g_aFl(b)),this.g_aEZ("focus",b=>this.g_aFm(b)),this.g_aEZ("set-css-style",b=>this.g_aFn(b))}g_aFo(b){this.g_aFg=!!b}g_aFp(c,e){this.g_aEZ(c,b=>{const a=b.elementId,c=this.g_aFf.get(a);return e(c,b)})}g_aFh(d){const a=d.elementId,b=this.g_aeL(a,d);this.g_aFf.set(a,b),d.isVisible||(b.style.display="none"),this.g_aFg&&document.body.appendChild(b)}g_aeL(){throw new Error("required override")}g_aFq(){}g_aFi(d){const a=d.elementId,b=this.g_aFf.get(a);this.g_aFq(b),this.g_aFg&&b.parentElement.removeChild(b),this.g_aFf.delete(a)}g_aFr(d,a,b){b||(b={}),b.elementId=a,this.g_aES(d,b)}g_aFs(d,a,b){b||(b={}),b.elementId=a,this.g_aEW(d,b)}g_aFj(c){if(this.g_aFg){const a=this.g_aFf.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aFk(d){if(this.g_aFg){const a=this.g_aFf.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aFl(c){const a=this.g_aFf.get(c.elementId);this.g_aFt(a,c)}g_aFt(){throw new Error("required override")}g_aFm(c){const a=this.g_aFf.get(c.elementId);c.focus?a.focus():a.blur()}g_aFn(c){const a=this.g_aFf.get(c.elementId);a.style[c.prop]=c.val}g_aFu(b){return this.g_aFf.get(b)}},"use strict";{function p(e){if(e.g_aFv){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aFw=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aFx=class c{constructor(c){this.g_aFy=c.g_aFz,this.g_aFA=null,this.g_apm="",this.g_aFB=c.g_aFC,this.g_aFD={},this.g_aFE=null,this.g_aFF=null,this.g_aFG=[],this.g_aFH=null,this.g_ann=null,this.g_arl=null,this.g_anW=-1,this.g_aFI=()=>this.g_aFJ(),this.g_aFK=[],this.g_apr=c.g_aFL,b(this.g_apr)&&this.g_aFy&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aFy=!1),this.g_aFM=!1,this.g_aFN=null,this.g_aFO=null,("html5"===this.g_apr||"playable-ad"===this.g_apr)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aE_("runtime","cordova-fetch-local-file",b=>this.g_aFP(b)),this.g_aE_("runtime","create-job-worker",b=>this.g_aFQ(b)),"cordova"===this.g_apr?document.addEventListener("deviceready",()=>this.g_ac_(c)):this.g_ac_(c)}g_ek(){this.g_asj(),this.g_aFA&&(this.g_aFA.onmessage=null,this.g_aFA=null),this.g_aFE&&(this.g_aFE.terminate(),this.g_aFE=null),this.g_aFF&&(this.g_aFF.g_ek(),this.g_aFF=null),this.g_ann&&(this.g_ann.parentElement.removeChild(this.g_ann),this.g_ann=null)}g_aFR(){return this.g_ann}g_fe(){return this.g_apm}g_aEX(){return this.g_aFy}g_asY(){return this.g_apr}g_arL(){return a&&"cordova"===this.g_apr}g_asZ(){return a&&b(this.g_apr)}async g_ac_(d){if("playable-ad"===this.g_apr){this.g_aFN=self.c3_base64files,this.g_aFO={},await this.g_aFS();for(let a=0,b=d.g_aFT.length;a<b;++a){const b=d.g_aFT[a].toLowerCase();this.g_aFO.hasOwnProperty(b)?d.g_aFT[a]={g_aFv:!0,g_C:this.g_aFO[b]}:this.g_aFN.hasOwnProperty(b)&&(d.g_aFT[a]=URL.createObjectURL(this.g_aFN[b]))}}if(d.g_aFU)this.g_apm=d.g_aFU;else{const c=location.origin;this.g_apm=("null"===c?"file:///":c)+location.pathname;const a=this.g_apm.lastIndexOf("/");-1!==a&&(this.g_apm=this.g_apm.substr(0,a+1))}if(d.g_aFV)for(const[a,b]of Object.entries(d.g_aFV))this.g_aFD[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aFA=a.port1,this.g_aFA.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aFW(b)),this.g_arl=new self.g_aFX(this),await this.g_arl.g_akv(),this.g_aFY(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aFZ(),this.g_aFy?await this.g_aF_(d,a.port2):await this.g_aF$(d,a.port2)}g_aGa(b){return this.g_aFD.hasOwnProperty(b)?this.g_aFD[b]:b.endsWith("/workermain.js")&&this.g_aFD.hasOwnProperty("workermain.js")?this.g_aFD["workermain.js"]:"playable-ad"===this.g_apr&&this.g_aFN.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aFN[b.toLowerCase()]):b}async g_aGb(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arL()){const a=await this.g_BT(this.g_aFB+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aFY(){if(this.g_asZ()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aGc(b){return{baseUrl:this.g_apm,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoz(),projectData:b.g_aGd,previewImageBlobs:window.cr_previewImageBlobs||this.g_aFN,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aFL,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aGe,jobScheduler:this.g_arl.g_aGf(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aFB+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aFB+"opus.wasm.wasm",isiOSCordova:this.g_arL(),isiOSWebView:this.g_asZ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aF_(e,a){const b=this.g_aGa(e.g_aGg);this.g_aFE=await this.g_aGb(b,this.g_apm,{name:"Runtime"}),this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none";const c=this.g_ann.transferControlToOffscreen();document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aFE.postMessage(Object.assign(this.g_aGc(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aGh||[],engineScripts:e.g_aFT,projectScripts:window.g_aGi,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_arl.g_aGj()]),this.g_aFG=g.map(b=>new b(this)),this.g_aGk(),self.c3_callFunction=(c,a)=>this.g_aFH.g_Vq(c,a),"preview"===this.g_apr&&(self.goToLastErrorScript=()=>this.g_aET("runtime","go-to-last-error-script"))}async g_aF$(a,b){this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none",document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aFG=g.map(b=>new b(this)),this.g_aGk();const c=a.g_aFT.map(b=>"string"==typeof b?new URL(b,this.g_apm).toString():b);if(Array.isArray(a.g_aGh)&&c.unshift(...a.g_aGh),await Promise.all(c.map(a=>p(a))),a.g_aGl&&0<a.g_aGl.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aGl.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aGm(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aGm(b),100)}}if("preview"===this.g_apr&&"object"!=typeof self.g_aO.g_aEM)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aGc(a),{isInWorker:!1,messagePort:b,canvas:this.g_ann,runOnStartupFunctions:k});this.g_aFF=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aFF,d)}g_aGm(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aFQ(){const b=await this.g_arl.g_aGn();return{outputPort:b,transferables:[b]}}g_aEY(){if(this.g_aFy)throw new Error("not available in worker mode");return this.g_aFF}g_aET(f,a,b,c,d){this.g_aFA.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aFM?void 0:d)}g_aEV(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aFA.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aFM?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aGo(c);else if("result"===a)this.g_aGp(c);else if("runtime-ready"===a)this.g_aGq();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aGo(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aGr(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aGr(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aGr(c,!1,""+d)}):this.g_aGr(c,!0,f))}g_aGr(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aFA.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aGp(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aE_(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aGs(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aGk(){for(const b of this.g_aFG)if("runtime"===b.g_aFb())return void(this.g_aFH=b);throw new Error("cannot find runtime DOM handler")}g_aFW(b){this.g_aET("debugger","message",b)}g_aGq(){for(const b of this.g_aFG)b.g_aER()}static g_aoz(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aGt(){return await this.g_aEV("runtime","get-remote-preview-status-info")}g_aFc(b){this.g_aFK.push(b),this.g_asi()}g_aFd(c){const a=this.g_aFK.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aFK.splice(a,1),this.g_aFK.length||this.g_asj()}g_asi(){-1===this.g_anW&&this.g_aFK.length&&(this.g_anW=requestAnimationFrame(this.g_aFI))}g_asj(){-1!==this.g_anW&&(cancelAnimationFrame(this.g_anW),this.g_anW=-1)}g_aFJ(){this.g_anW=-1;for(const b of this.g_aFK)b();this.g_asi()}g_aGu(b){this.g_aFH.g_aGu(b)}g_aGv(b){this.g_aFH.g_aGv(b)}g_aGw(){this.g_aFH.g_aGw()}g_aGx(b){this.g_aFH.g_aGx(b)}g_Co(b){return!!d[b]}async g_agk(c){const a=await this.g_aEV("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fZ(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_f_(b){return!this.g_fZ(b)}async g_aFP(c){const a=c.filename;switch(c.as){case"text":return await this.g_BU(a);case"buffer":return await this.g_BT(a);default:throw new Error("unsupported type");}}g_aGy(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aGz(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aGA(e){const a=this.g_aGy();return new Promise((b,c)=>a.checkPermission(this.g_aGz(a,e),c=>b(!!c.hasPermission),c))}g_aAq(e){const a=this.g_aGy();return new Promise((b,c)=>a.requestPermission(this.g_aGz(a,e),c=>b(!!c.hasPermission),c))}async g_aGB(c){if("cordova"!==this.g_asY())return!0;if(this.g_arL())return!0;for(const d of c){const b=await this.g_aGA(d);if(b)continue;const a=await this.g_aAq(d);if(!1===a)return!1}return!0}async g_aGC(...b){if(!1===(await this.g_aGB(b)))throw new Error("Permission not granted")}g_aGD(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BU(b){const a=await this.g_aGD(b);return await q(a)}g_aGE(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aGF(b.filename,b.g_aGG,b.g_aGH)}}g_BT(d){return new Promise((g,b)=>{e.push({filename:d,g_aGG:b=>{f--,this.g_aGE(),g(b)},g_aGH:c=>{f--,this.g_aGE(),b(c)}}),this.g_aGE()})}async g_aGF(c,a,b){try{const b=await this.g_aGD(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aFS(){const d=[];for(const[a,b]of Object.entries(this.g_aFN))d.push(this.g_aGI(a,b));await Promise.all(d)}async g_aGI(d,a){if("object"==typeof a)this.g_aFN[d]=new Blob([a.str],{type:a.type}),this.g_aFO[d]=a.str;else{let b=await this.g_aGJ(a);b||(b=this.g_aGK(a)),this.g_aFN[d]=b}}async g_aGJ(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aGK(c){const a=this.g_aGL(c);return this.g_aGM(a.data,a.g_gq)}g_aGL(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gq:e,data:h}}g_aGM(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aFZ(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aFM=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aEN{constructor(d){super(d,"runtime"),this.g_aGN=!0,this.g_aGO=-1,this.g_aGP="any",this.g_aGQ=!1,this.g_aGR=!1,this.g_aGS=null,this.g_aGT=null,this.g_aGU=null,d.g_aE_("canvas","update-size",b=>this.g_aGV(b)),d.g_aE_("runtime","invoke-download",b=>this.g_aGW(b)),d.g_aE_("runtime","raster-svg-image",b=>this.g_aGX(b)),d.g_aE_("runtime","get-svg-image-size",b=>this.g_aGY(b)),d.g_aE_("runtime","set-target-orientation",b=>this.g_aGZ(b)),d.g_aE_("runtime","register-sw",()=>this.g_aG_()),d.g_aE_("runtime","post-to-debugger",b=>this.g_aG$(b)),d.g_aE_("runtime","go-to-script",b=>this.g_aG$(b)),d.g_aE_("runtime","before-start-ticking",()=>this.g_aHa()),d.g_aE_("runtime","debug-highlight",b=>this.g_aHb(b)),d.g_aE_("runtime","enable-device-orientation",()=>this.g_aHc()),d.g_aE_("runtime","enable-device-motion",()=>this.g_aHd()),d.g_aE_("runtime","add-stylesheet",b=>this.g_aHe(b)),d.g_aE_("runtime","alert",b=>this.g_aHf(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aFR();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aHg=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aol()),d.g_asZ()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aHh=new Set,this.g_aHi=new WeakSet,this.g_aHj=!1}g_aHa(){return"cordova"===this.g_arr.g_asY()?(document.addEventListener("pause",()=>this.g_arn(!0)),document.addEventListener("resume",()=>this.g_arn(!1))):document.addEventListener("visibilitychange",()=>this.g_arn(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aER(){window.addEventListener("focus",()=>this.g_aHk("window-focus")),window.addEventListener("blur",()=>{this.g_aHk("window-blur",{parentHasFocus:b()}),this.g_aHg=0}),window.addEventListener("fullscreenchange",()=>this.g_aom()),window.addEventListener("webkitfullscreenchange",()=>this.g_aom()),window.addEventListener("mozfullscreenchange",()=>this.g_aom()),window.addEventListener("fullscreenerror",b=>this.g_aon(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aon(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aon(b)),window.addEventListener("keydown",b=>this.g_aHl("keydown",b)),window.addEventListener("keyup",b=>this.g_aHl("keyup",b)),window.addEventListener("dblclick",b=>this.g_aHm("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aHn("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aHo("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aHo("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aHo("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aHp("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aHp("pointermove",b)),window.addEventListener("touchend",b=>this.g_aHp("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aHp("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aHq("pointerdown",b)),this.g_arr.g_aEX()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aGT=new g_mQ(()=>this.g_aHr(),5),this.g_aGT.g_m_(!0),window.addEventListener("pointerrawupdate",b=>this.g_aHs(b))):window.addEventListener("pointermove",b=>this.g_aHq("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aHq("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aHq("pointercancel",b)));const c=()=>this.g_aGw();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aHk(c,a){this.g_aES(c,a||null,k)}g_aHt(){return Math.max(window.innerWidth,1)}g_aHu(){return Math.max(window.innerHeight,1)}g_aol(){const c=this.g_aHt(),a=this.g_aHu();this.g_aHk("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_arr.g_asZ()&&(-1!==this.g_aGO&&clearTimeout(this.g_aGO),this.g_aHv(c,a,0))}g_aHw(d,a,b){-1!==this.g_aGO&&clearTimeout(this.g_aGO),this.g_aGO=setTimeout(()=>this.g_aHv(d,a,b),48)}g_aHv(f,a,b){const c=this.g_aHt(),d=this.g_aHu();this.g_aGO=-1,c!=f||d!=a?this.g_aHk("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aHw(c,d,b+1)}g_aGZ(b){this.g_aGP=b.targetOrientation}g_aHx(){const c=this.g_aGP;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aom(){const b=g_aFx.g_aoz();b&&"any"!==this.g_aGP&&this.g_aHx(),this.g_aES("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aHt(),innerHeight:this.g_aHu()})}g_aon(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aES("fullscreenerror",{isFullscreen:g_aFx.g_aoz(),innerWidth:this.g_aHt(),innerHeight:this.g_aHu()})}g_arn(b){b?this.g_arr.g_asj():this.g_arr.g_asi(),this.g_aES("visibilitychange",{hidden:b})}g_aHl(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aEW(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aHn(c,a){this.g_aES(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aHm(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aEW(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aHo(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aHg;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aEW(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aHg=e.buttons,this.g_aHm(e.type,e,j)}}g_aHq(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aGT&&"pointermove"!==d&&this.g_aGT.g_lC();let b=0;if("mouse"===a.pointerType&&(b=this.g_aHg),this.g_aEW(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aHm(b,a,j),this.g_aHg=a.buttons}}g_aHs(b){this.g_aGU=b,this.g_aGT.g_nc()}g_aHr(){this.g_aHq("pointermove",this.g_aGU),this.g_aGU=null}g_aHp(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aEW(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aHc(){this.g_aGQ||(this.g_aGQ=!0,window.addEventListener("deviceorientation",b=>this.g_aAO(b)))}g_aHd(){this.g_aGR||(this.g_aGR=!0,window.addEventListener("devicemotion",b=>this.g_aAP(b)))}g_aAO(b){this.g_aES("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_aAP(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aES("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aGV(d){const a=this.g_aFa(),b=a.g_aFR();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aFY(),this.g_aGN&&(b.style.display="",this.g_aGN=!1)}g_aGW(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aGX(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aGY(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aHe(b){await t(b.url)}g_aGw(){const c=[...this.g_aHh];if(this.g_aHh.clear(),!this.g_aHj)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aHi.has(d)||this.g_aHh.add(d)})}}g_aGu(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aHi.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aHh.add(c)}a&&a.catch(()=>{this.g_aHi.has(c)||this.g_aHh.add(c)})}g_aGv(b){this.g_aHh.delete(b),this.g_aHi.add(b)}g_aGx(b){this.g_aHj=!!b}g_aHb(d){const a=d.show;if(!a)return void(this.g_aGS&&(this.g_aGS.style.display="none"));this.g_aGS||(this.g_aGS=document.createElement("div"),this.g_aGS.id="inspectOutline",document.body.appendChild(this.g_aGS));const b=this.g_aGS;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aG_(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aG$(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vq(c,a){return this.g_aEU("js-invoke-function",{name:c,params:a})}g_aHf(b){alert(b.message)}};g_aFx.g_aGs(n)}{const c=document.currentScript.src;self.g_aFX=class{constructor(a){this.g_aHy=a,this.g_apm=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atF=Math.min(navigator.hardwareConcurrency||2,16),this.g_aHz=null,this.g_aHA=[],this.g_atD=null,this.g_aHB=null}async g_akv(){if(this.g_aHC)throw new Error("already initialised");this.g_aHC=!0;const c=this.g_aHy.g_aGa("dispatchworker.js");this.g_aHz=await this.g_aHy.g_aGb(c,this.g_apm,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atD=a.port1,this.g_aHz.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aHB=await this.g_aGn()}async g_aGn(){const f=this.g_aHA.length,a=this.g_aHy.g_aGa("jobworker.js"),b=await this.g_aHy.g_aGb(a,this.g_apm,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aHz.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aHA.push(b),d.port1}g_aGf(){return{inputPort:this.g_atD,outputPort:this.g_aHB,maxNumWorkers:this.g_atF}}g_aGj(){return[this.g_atD,this.g_aHB]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aFx({g_aFz:a,g_aGg:"workermain.js",g_aFT:["scripts/c3runtime.js"],g_aFC:"scripts/",g_aGh:[],g_aFL:"html5"})}{const b=class extends g_aEN{constructor(b){super(b,"touch"),this.g_aEZ("request-permission",b=>this.g_aHD(b))}async g_aHD(d){const a=d.type;let b=!0;0===a?b=await this.g_aHE():1===a&&(b=await this.g_aHF()),this.g_aES("permission-result",{type:a,result:b})}async g_aHE(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aHF(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aFx.g_aGs(b)}