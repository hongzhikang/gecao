(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const $l="modulepreload",jl=function(s){return"/game/"+s},ea={},Zl=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=jl(l),l in ea)return;ea[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":$l,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,m)=>{u.addEventListener("load",d),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="160",Jl=0,na=1,Ql=2,qo=1,tc=2,nn=3,Tn=0,Ee=1,sn=2,ln=0,hi=1,yr=2,ia=3,sa=4,ec=5,Nn=100,nc=101,ic=102,ra=103,aa=104,sc=200,rc=201,ac=202,oc=203,Er=204,Tr=205,lc=206,cc=207,hc=208,uc=209,dc=210,fc=211,pc=212,mc=213,gc=214,_c=0,vc=1,xc=2,Ms=3,Mc=4,Sc=5,yc=6,Ec=7,Yo=0,Tc=1,bc=2,Mn=0,wc=1,Ac=2,Cc=3,Rc=4,Pc=5,Lc=6,Ko=300,di=301,fi=302,br=303,wr=304,Cs=306,an=1e3,Ge=1001,Ar=1002,ve=1003,oa=1004,Hs=1005,Le=1006,Dc=1007,Ii=1008,Sn=1009,Uc=1010,Ic=1011,Hr=1012,$o=1013,_n=1014,vn=1015,cn=1016,jo=1017,Zo=1018,On=1020,Nc=1021,Ve=1023,Fc=1024,Oc=1025,Bn=1026,pi=1027,Bc=1028,Jo=1029,kc=1030,Qo=1031,tl=1033,zs=33776,Gs=33777,Vs=33778,Ws=33779,la=35840,ca=35841,ha=35842,ua=35843,el=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,_a=37811,va=37812,xa=37813,Ma=37814,Sa=37815,ya=37816,Ea=37817,Ta=37818,ba=37819,wa=37820,Aa=37821,Xs=36492,Ca=36494,Ra=36495,Hc=36283,Pa=36284,La=36285,Da=36286,nl=3e3,yn=3001,zc=3200,Gc=3201,Vc=0,Wc=1,Ue="",le="srgb",hn="srgb-linear",zr="display-p3",Rs="display-p3-linear",Ss="linear",$t="srgb",ys="rec709",Es="p3",zn=7680,Ua=519,Xc=512,qc=513,Yc=514,il=515,Kc=516,$c=517,jc=518,Zc=519,Cr=35044,Ia="300 es",Rr=1035,on=2e3,Ts=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Pr=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[s&255]+ue[s>>8&255]+ue[s>>16&255]+ue[s>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Jc(s,t){return(s%t+t)%t}function Ys(s,t,e){return(1-e)*s+e*t}function Na(s){return(s&s-1)===0&&s!==0}function Lr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],g=i[0],p=i[3],f=i[6],E=i[1],x=i[4],w=i[7],L=i[2],C=i[5],A=i[8];return r[0]=o*g+a*E+l*L,r[3]=o*p+a*x+l*C,r[6]=o*f+a*w+l*A,r[1]=c*g+h*E+u*L,r[4]=c*p+h*x+u*C,r[7]=c*f+h*w+u*A,r[2]=d*g+m*E+_*L,r[5]=d*p+m*x+_*C,r[8]=d*f+m*w+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Bt;function sl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ni(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qc(){const s=Ni("canvas");return s.style.display="block",s}const Fa={};function Ui(s){s in Fa||(Fa[s]=!0,console.warn(s))}const Oa=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ba=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[hn]:{transfer:Ss,primaries:ys,toReference:s=>s,fromReference:s=>s},[le]:{transfer:$t,primaries:ys,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Rs]:{transfer:Ss,primaries:Es,toReference:s=>s.applyMatrix3(Ba),fromReference:s=>s.applyMatrix3(Oa)},[zr]:{transfer:$t,primaries:Es,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ba),fromReference:s=>s.applyMatrix3(Oa).convertLinearToSRGB()}},th=new Set([hn,Rs]),Wt={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!th.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Wi[t].toReference,i=Wi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Wi[s].primaries},getTransfer:function(s){return s===Ue?Ss:Wi[s].transfer}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gn;class rl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=Ni("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ni("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eh=0;class al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=En(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(js(i[o].image)):r.push(js(i[o]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;class xe extends Mi{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Ge,i=Ge,r=Le,o=Ii,a=Ve,l=Sn,c=xe.DEFAULT_ANISOTROPY,h=Ue){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=En(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yn?le:Ue),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case an:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case an:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===le?yn:nl}set encoding(t){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===yn?le:Ue}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=Ko;xe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,w=(m+1)/2,L=(f+1)/2,C=(h+d)/4,A=(u+g)/4,q=(_+p)/4;return x>w&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=A/n):w>L?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=q/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=q/r),this.set(n,i,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yn?le:Ue),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==_){let p=1-a;const f=l*d+c*m+h*_+u*g,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,f*E);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const w=a*E;if(l=l*p+d*w,c=c*p+m*w,h=h*p+_*w,u=u*p+g*w,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-a*m,t[e+2]=c*_+h*m+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zs.copy(this).projectOnVector(t),this.sub(Zs)}reflect(t){return this.sub(Zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new D,ka=new Fi;class Oi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Be):Be.fromBufferAttribute(r,o),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),qi.subVectors(this.max,bi),Vn.subVectors(t.a,bi),Wn.subVectors(t.b,bi),Xn.subVectors(t.c,bi),dn.subVectors(Wn,Vn),fn.subVectors(Xn,Wn),Rn.subVectors(Vn,Xn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!Js(e,Vn,Wn,Xn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,Vn,Wn,Xn,qi))?!1:(Yi.crossVectors(dn,fn),e=[Yi.x,Yi.y,Yi.z],Js(e,Vn,Wn,Xn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new D,new D,new D,new D,new D,new D,new D,new D],Be=new D,Xi=new Oi,Vn=new D,Wn=new D,Xn=new D,dn=new D,fn=new D,Rn=new D,bi=new D,qi=new D,Yi=new D,Pn=new D;function Js(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pn.fromArray(s,r);const a=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rh=new Oi,wi=new D,Qs=new D;class Ps{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(Qs)),this.expandByPoint(wi.copy(t.center).sub(Qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new D,tr=new D,Ki=new D,pn=new D,er=new D,$i=new D,nr=new D;class ll{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tr.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(tr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=pn.dot(this.direction),l=-pn.dot(Ki),c=pn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(tr).addScaledVector(Ki,d),m}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),i=Je.dot(Je)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,r){er.subVectors(e,t),$i.subVectors(n,t),nr.crossVectors(er,$i);let o=this.direction.dot(nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const l=a*this.direction.dot($i.crossVectors(pn,$i));if(l<0)return null;const c=a*this.direction.dot(er.cross(pn));if(c<0||l+c>o)return null;const h=-a*pn.dot(nr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,o,a,l,c,h,u,d,m,_,g,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,m,_,g,p)}set(t,e,n,i,r,o,a,l,c,h,u,d,m,_,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),o=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ah,t,oh)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),mn.crossVectors(n,be),mn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),mn.crossVectors(n,be)),mn.normalize(),ji.crossVectors(be,mn),i[0]=mn.x,i[4]=ji.x,i[8]=be.x,i[1]=mn.y,i[5]=ji.y,i[9]=be.y,i[2]=mn.z,i[6]=ji.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],E=n[3],x=n[7],w=n[11],L=n[15],C=i[0],A=i[4],q=i[8],S=i[12],T=i[1],k=i[5],K=i[9],nt=i[13],R=i[2],O=i[6],z=i[10],W=i[14],V=i[3],G=i[7],j=i[11],Q=i[15];return r[0]=o*C+a*T+l*R+c*V,r[4]=o*A+a*k+l*O+c*G,r[8]=o*q+a*K+l*z+c*j,r[12]=o*S+a*nt+l*W+c*Q,r[1]=h*C+u*T+d*R+m*V,r[5]=h*A+u*k+d*O+m*G,r[9]=h*q+u*K+d*z+m*j,r[13]=h*S+u*nt+d*W+m*Q,r[2]=_*C+g*T+p*R+f*V,r[6]=_*A+g*k+p*O+f*G,r[10]=_*q+g*K+p*z+f*j,r[14]=_*S+g*nt+p*W+f*Q,r[3]=E*C+x*T+w*R+L*V,r[7]=E*A+x*k+w*O+L*G,r[11]=E*q+x*K+w*z+L*j,r[15]=E*S+x*nt+w*W+L*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+g*(+e*l*m-e*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],E=u*p*c-g*d*c+g*l*m-a*p*m-u*l*f+a*d*f,x=_*d*c-h*p*c-_*l*m+o*p*m+h*l*f-o*d*f,w=h*g*c-_*u*c+_*a*m-o*g*m-h*a*f+o*u*f,L=_*u*l-h*g*l-_*a*d+o*g*d+h*a*p-o*u*p,C=e*E+n*x+i*w+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=E*A,t[1]=(g*d*r-u*p*r-g*i*m+n*p*m+u*i*f-n*d*f)*A,t[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*f+n*l*f)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*A,t[4]=x*A,t[5]=(h*p*r-_*d*r+_*i*m-e*p*m-h*i*f+e*d*f)*A,t[6]=(_*l*r-o*p*r-_*i*c+e*p*c+o*i*f-e*l*f)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*m+e*l*m)*A,t[8]=w*A,t[9]=(_*u*r-h*g*r-_*n*m+e*g*m+h*n*f-e*u*f)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*p+e*u*p)*A,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,_=r*u,g=o*h,p=o*u,f=a*u,E=l*c,x=l*h,w=l*u,L=n.x,C=n.y,A=n.z;return i[0]=(1-(g+f))*L,i[1]=(m+w)*L,i[2]=(_-x)*L,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(d+f))*C,i[6]=(p+E)*C,i[7]=0,i[8]=(_+x)*A,i[9]=(p-E)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=qn.set(i[0],i[1],i[2]).length();const o=qn.set(i[4],i[5],i[6]).length(),a=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ke.copy(this);const c=1/r,h=1/o,u=1/a;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=u,ke.elements[9]*=u,ke.elements[10]*=u,e.setFromRotationMatrix(ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=on){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,_;if(a===on)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ts)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=on){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,m=(n+i)*h;let _,g;if(a===on)_=(o+r)*u,g=-2*u;else if(a===Ts)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qn=new D,ke=new ne,ah=new D(0,0,0),oh=new D(1,1,1),mn=new D,ji=new D,be=new D,Ha=new ne,za=new Fi;class Ls{constructor(t=0,e=0,n=0,i=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ha,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lh=0;const Ga=new D,Yn=new Fi,Qe=new ne,Zi=new D,Ai=new D,ch=new D,hh=new Fi,Va=new D(1,0,0),Wa=new D(0,1,0),Xa=new D(0,0,1),uh={type:"added"},dh={type:"removed"};class Me extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new D,e=new Ls,n=new Fi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Wa,t)}rotateZ(t){return this.rotateOnAxis(Xa,t)}translateOnAxis(t,e){return Ga.copy(t).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Wa,t)}translateZ(t){return this.translateOnAxis(Xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Ai,Zi,this.up):Qe.lookAt(Zi,Ai,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new D,tn=new D,ir=new D,en=new D,Kn=new D,$n=new D,qa=new D,sr=new D,rr=new D,ar=new D;let Ji=!1;class De{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){He.subVectors(i,e),tn.subVectors(n,e),ir.subVectors(t,e);const o=He.dot(He),a=He.dot(tn),l=He.dot(ir),c=tn.dot(tn),h=tn.dot(ir),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,n,i,r,o,a,l){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(o,en.y),l.addScaledVector(a,en.z),l)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),tn.subVectors(t,e),He.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),He.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return De.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return De.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),De.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return De.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return De.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return De.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Kn.subVectors(i,n),$n.subVectors(r,n),sr.subVectors(t,n);const l=Kn.dot(sr),c=$n.dot(sr);if(l<=0&&c<=0)return e.copy(n);rr.subVectors(t,i);const h=Kn.dot(rr),u=$n.dot(rr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Kn,o);ar.subVectors(t,r);const m=Kn.dot(ar),_=$n.dot(ar);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector($n,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return qa.subVectors(r,i),a=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(qa,a);const f=1/(p+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(Kn,o).addScaledVector($n,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Jc(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=or(o,r,t+1/3),this.g=or(o,r,t),this.b=or(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const n=hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Wt.fromWorkingColorSpace(de.copy(this),t),Math.round(Se(de.r*255,0,255))*65536+Math.round(Se(de.g*255,0,255))*256+Math.round(Se(de.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(de.copy(this),e);const n=de.r,i=de.g,r=de.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(de.copy(this),e),t.r=de.r,t.g=de.g,t.b=de.b,t}getStyle(t=le){Wt.fromWorkingColorSpace(de.copy(this),t);const e=de.r,n=de.g,i=de.b;return t!==le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Qi);const n=Ys(gn.h,Qi.h,e),i=Ys(gn.s,Qi.s,e),r=Ys(gn.l,Qi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const de=new Ht;Ht.NAMES=hl;let fh=0;class Si extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=En(),this.name="",this.type="Material",this.blending=hi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bn extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new D,ts=new St;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cr&&(t.usage=this.usage),t}}class ul extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dl extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ph=0;const Re=new ne,lr=new Me,jn=new D,we=new Oi,Ci=new Oi,oe=new D;class Oe extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?dl:ul)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(we.min,Ci.min),we.expandByPoint(oe),oe.addVectors(we.max,Ci.max),we.expandByPoint(oe)):(we.expandByPoint(Ci.min),we.expandByPoint(Ci.max))}we.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)oe.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(t,c),oe.add(jn)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new D,h[T]=new D;const u=new D,d=new D,m=new D,_=new St,g=new St,p=new St,f=new D,E=new D;function x(T,k,K){u.fromArray(i,T*3),d.fromArray(i,k*3),m.fromArray(i,K*3),_.fromArray(o,T*2),g.fromArray(o,k*2),p.fromArray(o,K*2),d.sub(u),m.sub(u),g.sub(_),p.sub(_);const nt=1/(g.x*p.y-p.x*g.y);isFinite(nt)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(nt),E.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(nt),c[T].add(f),c[k].add(f),c[K].add(f),h[T].add(E),h[k].add(E),h[K].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,k=w.length;T<k;++T){const K=w[T],nt=K.start,R=K.count;for(let O=nt,z=nt+R;O<z;O+=3)x(n[O+0],n[O+1],n[O+2])}const L=new D,C=new D,A=new D,q=new D;function S(T){A.fromArray(r,T*3),q.copy(A);const k=c[T];L.copy(k),L.sub(A.multiplyScalar(A.dot(k))).normalize(),C.crossVectors(q,k);const nt=C.dot(h[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=nt}for(let T=0,k=w.length;T<k;++T){const K=w[T],nt=K.start,R=K.count;for(let O=nt,z=nt+R;O<z;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new ne,Ln=new ll,es=new Ps,Ka=new D,Zn=new D,Jn=new D,Qn=new D,cr=new D,ns=new D,is=new St,ss=new St,rs=new St,$a=new D,ja=new D,Za=new D,as=new D,os=new D;class ye extends Me{constructor(t=new Oe,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(cr.fromBufferAttribute(u,t),o?ns.addScaledVector(cr,h):ns.addScaledVector(cr.sub(e),h))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(es.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(es,Ka)===null||Ln.origin.distanceToSquared(Ka)>(t.far-t.near)**2))&&(Ya.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,L=x;w<L;w+=3){const C=a.getX(w),A=a.getX(w+1),q=a.getX(w+2);i=ls(this,f,t,n,c,h,u,C,A,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const E=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);i=ls(this,o,t,n,c,h,u,E,x,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,L=x;w<L;w+=3){const C=w,A=w+1,q=w+2;i=ls(this,f,t,n,c,h,u,C,A,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const E=p,x=p+1,w=p+2;i=ls(this,o,t,n,c,h,u,E,x,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function mh(s,t,e,n,i,r,o,a){let l;if(t.side===Ee?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Tn,a),l===null)return null;os.copy(a),os.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(os);return c<e.near||c>e.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Zn),s.getVertexPosition(l,Jn),s.getVertexPosition(c,Qn);const h=mh(s,t,e,n,Zn,Jn,Qn,as);if(h){i&&(is.fromBufferAttribute(i,a),ss.fromBufferAttribute(i,l),rs.fromBufferAttribute(i,c),h.uv=De.getInterpolation(as,Zn,Jn,Qn,is,ss,rs,new St)),r&&(is.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,l),rs.fromBufferAttribute(r,c),h.uv1=De.getInterpolation(as,Zn,Jn,Qn,is,ss,rs,new St),h.uv2=h.uv1),o&&($a.fromBufferAttribute(o,a),ja.fromBufferAttribute(o,l),Za.fromBufferAttribute(o,c),h.normal=De.getInterpolation(as,Zn,Jn,Qn,$a,ja,Za,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};De.getNormal(Zn,Jn,Qn,u.normal),h.face=u}return h}class Bi extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function _(g,p,f,E,x,w,L,C,A,q,S){const T=w/A,k=L/q,K=w/2,nt=L/2,R=C/2,O=A+1,z=q+1;let W=0,V=0;const G=new D;for(let j=0;j<z;j++){const Q=j*k-nt;for(let lt=0;lt<O;lt++){const H=lt*T-K;G[g]=H*E,G[p]=Q*x,G[f]=R,c.push(G.x,G.y,G.z),G[g]=0,G[p]=0,G[f]=C>0?1:-1,h.push(G.x,G.y,G.z),u.push(lt/A),u.push(1-j/q),W+=1}}for(let j=0;j<q;j++)for(let Q=0;Q<A;Q++){const lt=d+Q+O*j,H=d+Q+O*(j+1),X=d+(Q+1)+O*(j+1),at=d+(Q+1)+O*j;l.push(lt,H,at),l.push(H,X,at),V+=6}a.addGroup(m,V,S),m+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _e(s){const t={};for(let e=0;e<s.length;e++){const n=mi(s[e]);for(const i in n)t[i]=n[i]}return t}function gh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fl(s){return s.getRenderTarget()===null?s.outputColorSpace:Wt.workingColorSpace}const bs={clone:mi,merge:_e};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ze extends pl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class xh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(ti,ei,t,e);i.layers=this.layers,this.add(i);const r=new ze(ti,ei,t,e);r.layers=this.layers,this.add(r);const o=new ze(ti,ei,t,e);o.layers=this.layers,this.add(o);const a=new ze(ti,ei,t,e);a.layers=this.layers,this.add(a);const l=new ze(ti,ei,t,e);l.layers=this.layers,this.add(l);const c=new ze(ti,ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ml extends xe{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mh extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===yn?le:Ue),this.texture=new ml(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bi(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:ln});r.uniforms.tEquirect.value=e;const o=new ye(i,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Le),new xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const hr=new D,Sh=new D,yh=new Bt;class Un{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hr.subVectors(n,e).cross(Sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yh.getNormalMatrix(t),i=this.coplanarPoint(hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Ps,cs=new D;class gl{constructor(t=new Un,e=new Un,n=new Un,i=new Un,r=new Un,o=new Un){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],_=i[9],g=i[10],p=i[11],f=i[12],E=i[13],x=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,p-m,w-f).normalize(),n[1].setComponents(l+r,d+c,p+m,w+f).normalize(),n[2].setComponents(l+o,d+h,p+_,w+E).normalize(),n[3].setComponents(l-o,d-h,p-_,w-E).normalize(),n[4].setComponents(l-a,d-u,p-g,w-x).normalize(),e===on)n[5].setComponents(l+a,d+u,p+g,w+x).normalize();else if(e===Ts)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&_.length===0&&s.bufferSubData(u,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){const f=_[g];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Hn extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<h;f++){const E=f*d-o;for(let x=0;x<c;x++){const w=x*u-r;_.push(w,-E,0),g.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const x=E+c*f,w=E+c*(f+1),L=E+1+c*(f+1),C=E+1+c*f;m.push(x,w,C),m.push(w,L,C)}this.setIndex(m),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$h=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_u=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ku=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Th,alphahash_pars_fragment:bh,alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ph,aomap_pars_fragment:Lh,batching_pars_vertex:Dh,batching_vertex:Uh,begin_vertex:Ih,beginnormal_vertex:Nh,bsdfs:Fh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Gh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Yh,cube_uv_reflection_fragment:Kh,defaultnormal_vertex:$h,displacementmap_pars_vertex:jh,displacementmap_vertex:Zh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:tu,colorspace_pars_fragment:eu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:_u,envmap_vertex:au,fog_vertex:ou,fog_pars_vertex:lu,fog_fragment:cu,fog_pars_fragment:hu,gradientmap_pars_fragment:uu,lightmap_fragment:du,lightmap_pars_fragment:fu,lights_lambert_fragment:pu,lights_lambert_pars_fragment:mu,lights_pars_begin:gu,lights_toon_fragment:vu,lights_toon_pars_fragment:xu,lights_phong_fragment:Mu,lights_phong_pars_fragment:Su,lights_physical_fragment:yu,lights_physical_pars_fragment:Eu,lights_fragment_begin:Tu,lights_fragment_maps:bu,lights_fragment_end:wu,logdepthbuf_fragment:Au,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Pu,map_fragment:Lu,map_pars_fragment:Du,map_particle_fragment:Uu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Fu,morphcolor_vertex:Ou,morphnormal_vertex:Bu,morphtarget_pars_vertex:ku,morphtarget_vertex:Hu,normal_fragment_begin:zu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:qu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:Ku,clearcoat_pars_fragment:$u,iridescence_pars_fragment:ju,opaque_fragment:Zu,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:td,dithering_fragment:ed,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:yd,background_vert:Ed,background_frag:Td,backgroundCube_vert:bd,backgroundCube_frag:wd,cube_vert:Ad,cube_frag:Cd,depth_vert:Rd,depth_frag:Pd,distanceRGBA_vert:Ld,distanceRGBA_frag:Dd,equirect_vert:Ud,equirect_frag:Id,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:Bd,meshlambert_vert:kd,meshlambert_frag:Hd,meshmatcap_vert:zd,meshmatcap_frag:Gd,meshnormal_vert:Vd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:Kd,meshtoon_vert:$d,meshtoon_frag:jd,points_vert:Zd,points_frag:Jd,shadow_vert:Qd,shadow_frag:tf,sprite_vert:ef,sprite_frag:nf},et={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ye={basic:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:_e([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:_e([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:_e([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:_e([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:_e([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:_e([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:_e([et.common,et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:_e([et.lights,et.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ye.physical={uniforms:_e([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const hs={r:0,b:0,g:0};function sf(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(p,f){let E=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cs)?(h===void 0&&(h=new ye(new Bi(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:mi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(x.colorSpace)!==$t,(u!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ye(new Hn(2,2),new Ae({name:"BackgroundMaterial",uniforms:mi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(x.colorSpace)!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){p.getRGB(hs,fl(s)),n.buffers.color.setClear(hs.r,hs.g,hs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function rf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(R,O,z,W,V){let G=!1;if(o){const j=g(W,z,O);c!==j&&(c=j,m(c.object)),G=f(R,W,z,V),G&&E(R,W,z,V)}else{const j=O.wireframe===!0;(c.geometry!==W.id||c.program!==z.id||c.wireframe!==j)&&(c.geometry=W.id,c.program=z.id,c.wireframe=j,G=!0)}V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,q(R,O,z,W),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,O,z){const W=z.wireframe===!0;let V=a[R.id];V===void 0&&(V={},a[R.id]=V);let G=V[O.id];G===void 0&&(G={},V[O.id]=G);let j=G[W];return j===void 0&&(j=p(d()),G[W]=j),j}function p(R){const O=[],z=[],W=[];for(let V=0;V<i;V++)O[V]=0,z[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:W,object:R,attributes:{},index:null}}function f(R,O,z,W){const V=c.attributes,G=O.attributes;let j=0;const Q=z.getAttributes();for(const lt in Q)if(Q[lt].location>=0){const X=V[lt];let at=G[lt];if(at===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(at=R.instanceColor)),X===void 0||X.attribute!==at||at&&X.data!==at.data)return!0;j++}return c.attributesNum!==j||c.index!==W}function E(R,O,z,W){const V={},G=O.attributes;let j=0;const Q=z.getAttributes();for(const lt in Q)if(Q[lt].location>=0){let X=G[lt];X===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(X=R.instanceColor));const at={};at.attribute=X,X&&X.data&&(at.data=X.data),V[lt]=at,j++}c.attributes=V,c.attributesNum=j,c.index=W}function x(){const R=c.newAttributes;for(let O=0,z=R.length;O<z;O++)R[O]=0}function w(R){L(R,0)}function L(R,O){const z=c.newAttributes,W=c.enabledAttributes,V=c.attributeDivisors;z[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),V[R]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),V[R]=O)}function C(){const R=c.newAttributes,O=c.enabledAttributes;for(let z=0,W=O.length;z<W;z++)O[z]!==R[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function A(R,O,z,W,V,G,j){j===!0?s.vertexAttribIPointer(R,O,z,V,G):s.vertexAttribPointer(R,O,z,W,V,G)}function q(R,O,z,W){if(n.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=W.attributes,G=z.getAttributes(),j=O.defaultAttributeValues;for(const Q in G){const lt=G[Q];if(lt.location>=0){let H=V[Q];if(H===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){const X=H.normalized,at=H.itemSize,mt=e.get(H);if(mt===void 0)continue;const pt=mt.buffer,Ct=mt.type,Pt=mt.bytesPerElement,yt=n.isWebGL2===!0&&(Ct===s.INT||Ct===s.UNSIGNED_INT||H.gpuType===$o);if(H.isInterleavedBufferAttribute){const zt=H.data,U=zt.stride,fe=H.offset;if(zt.isInstancedInterleavedBuffer){for(let _t=0;_t<lt.locationSize;_t++)L(lt.location+_t,zt.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let _t=0;_t<lt.locationSize;_t++)w(lt.location+_t);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let _t=0;_t<lt.locationSize;_t++)A(lt.location+_t,at/lt.locationSize,Ct,X,U*Pt,(fe+at/lt.locationSize*_t)*Pt,yt)}else{if(H.isInstancedBufferAttribute){for(let zt=0;zt<lt.locationSize;zt++)L(lt.location+zt,H.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let zt=0;zt<lt.locationSize;zt++)w(lt.location+zt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let zt=0;zt<lt.locationSize;zt++)A(lt.location+zt,at/lt.locationSize,Ct,X,at*Pt,at/lt.locationSize*zt*Pt,yt)}}else if(j!==void 0){const X=j[Q];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(lt.location,X);break;case 3:s.vertexAttrib3fv(lt.location,X);break;case 4:s.vertexAttrib4fv(lt.location,X);break;default:s.vertexAttrib1fv(lt.location,X)}}}}C()}function S(){K();for(const R in a){const O=a[R];for(const z in O){const W=O[z];for(const V in W)_(W[V].object),delete W[V];delete O[z]}delete a[R]}}function T(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const z in O){const W=O[z];for(const V in W)_(W[V].object),delete W[V];delete O[z]}delete a[R.id]}function k(R){for(const O in a){const z=a[O];if(z[R.id]===void 0)continue;const W=z[R.id];for(const V in W)_(W[V].object),delete W[V];delete z[R.id]}}function K(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:nt,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function af(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,_;if(i)m=s,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function of(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=o||t.has("OES_texture_float"),L=x&&w,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:C}}function lf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Un,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,x=E*4;let w=f.clippingState||null;l.value=w,w=h(_,d,x,m);for(let L=0;L!==x;++L)w[L]=e[L];f.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,w=m;x!==g;++x,w+=4)o.copy(u[x]).applyMatrix4(E,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function cf(s){let t=new WeakMap;function e(o,a){return a===br?o.mapping=di:a===wr&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===wr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mh(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gr extends pl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,Ja=[.125,.215,.35,.446,.526,.582],Fn=20,ur=new Gr,Qa=new Ht;let dr=null,fr=0,pr=0;const In=(1+Math.sqrt(5))/2,ni=1/In,to=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,In,ni),new D(0,In,-ni),new D(ni,0,In),new D(-ni,0,In),new D(In,ni,0),new D(-In,ni,0)];class eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr,fr,pr),t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:cn,format:Ve,colorSpace:hn,depthBuffer:!1},i=no(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=no(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(r)),this._blurMaterial=uf(r,t,e)}return i}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qa),h.toneMapping=Mn,h.autoClear=!1;const m=new bn({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),_=new ye(new Bi,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Qa),g=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;us(i,E*x,f>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===di||t.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=io());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=to[(i-1)%to.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ye(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const f=[];let E=0;for(let A=0;A<Fn;++A){const q=A/g,S=Math.exp(-q*q/2);f.push(S),A===0?E+=S:A<p&&(E+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const w=this._sizeLods[i],L=3*w*(i>x-oi?i-x+oi:0),C=4*(this._cubeSize-w);us(e,L,C,3*w,2*w),l.setRenderTarget(e),l.render(u,ur)}}function hf(s){const t=[],e=[],n=[];let i=s;const r=s-oi+1+Ja.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-oi?l=Ja[o-s+oi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,f=1,E=new Float32Array(g*_*m),x=new Float32Array(p*_*m),w=new Float32Array(f*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,q=C>2?0:-1,S=[A,q,0,A+2/3,q,0,A+2/3,q+1,0,A,q,0,A+2/3,q+1,0,A,q+1,0];E.set(S,g*_*C),x.set(d,p*_*C);const T=[C,C,C,C,C,C];w.set(T,f*_*C)}const L=new Oe;L.setAttribute("position",new Ie(E,g)),L.setAttribute("uv",new Ie(x,p)),L.setAttribute("faceIndex",new Ie(w,f)),t.push(L),i>oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function no(s,t,e){const n=new We(s,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function uf(s,t,e){const n=new Float32Array(Fn),i=new D(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function io(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function so(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===br||l===wr,h=l===di||l===fi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new eo(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new eo(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ff(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pf(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let x=0,w=E.length;x<w;x+=3){const L=E[x+0],C=E[x+1],A=E[x+2];d.push(L,C,C,A,A,L)}}else if(_!==void 0){const E=_.array;g=_.version;for(let x=0,w=E.length/3-1;x<w;x+=3){const L=x+0,C=x+1,A=x+2;d.push(L,C,C,A,A,L)}}else return;const p=new(sl(d)?dl:ul)(d,1);p.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mf(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){s.drawElements(r,_,a,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,_,a,m*l,g),e.update(_,r,g)}function d(m,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<g;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let f=0;for(let E=0;E<g;E++)f+=_[E];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function gf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _f(s,t){return s[0]-t[0]}function vf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function xf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let R=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let q=0;E===!0&&(q=1),x===!0&&(q=2),w===!0&&(q=3);let S=h.attributes.position.count*q,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const k=new Float32Array(S*T*4*_),K=new ol(k,S,T,_);K.type=vn,K.needsUpdate=!0;const nt=q*4;for(let O=0;O<_;O++){const z=L[O],W=C[O],V=A[O],G=S*T*4*O;for(let j=0;j<z.count;j++){const Q=j*nt;E===!0&&(o.fromBufferAttribute(z,j),k[G+Q+0]=o.x,k[G+Q+1]=o.y,k[G+Q+2]=o.z,k[G+Q+3]=0),x===!0&&(o.fromBufferAttribute(W,j),k[G+Q+4]=o.x,k[G+Q+5]=o.y,k[G+Q+6]=o.z,k[G+Q+7]=0),w===!0&&(o.fromBufferAttribute(V,j),k[G+Q+8]=o.x,k[G+Q+9]=o.y,k[G+Q+10]=o.z,k[G+Q+11]=V.itemSize===4?o.w:1)}}g={count:_,texture:K,size:new St(S,T)},r.set(h,g),h.addEventListener("dispose",R)}let p=0;for(let E=0;E<d.length;E++)p+=d[E];const f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<m;x++){const w=_[x];w[0]=x,w[1]=d[x]}_.sort(vf);for(let x=0;x<8;x++)x<m&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(_f);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const w=a[x],L=w[0],C=w[1];L!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+x)!==g[L]&&h.setAttribute("morphTarget"+x,g[L]),p&&h.getAttribute("morphNormal"+x)!==p[L]&&h.setAttribute("morphNormal"+x,p[L]),i[x]=C,f+=C):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Mf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class vl extends xe{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=_n),n===void 0&&h===pi&&(n=On),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xl=new xe,Ml=new vl(1,1);Ml.compareFunction=il;const Sl=new ol,yl=new sh,El=new ml,ro=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function yi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ro[i];if(r===void 0&&(r=new Float32Array(i),ro[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ds(s,t){let e=ao[t];e===void 0&&(e=new Int32Array(t),ao[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;s.uniform2fv(this.addr,t),se(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;s.uniform3fv(this.addr,t),se(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;s.uniform4fv(this.addr,t),se(e,t)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;co.set(n),s.uniformMatrix2fv(this.addr,!1,co),se(e,n)}}function wf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;lo.set(n),s.uniformMatrix3fv(this.addr,!1,lo),se(e,n)}}function Af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;oo.set(n),s.uniformMatrix4fv(this.addr,!1,oo),se(e,n)}}function Cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;s.uniform2iv(this.addr,t),se(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;s.uniform3iv(this.addr,t),se(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;s.uniform4iv(this.addr,t),se(e,t)}}function Df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;s.uniform2uiv(this.addr,t),se(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;s.uniform3uiv(this.addr,t),se(e,t)}}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;s.uniform4uiv(this.addr,t),se(e,t)}}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ml:xl;e.setTexture2D(t||r,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yl,i)}function Bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||El,i)}function kf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sl,i)}function Hf(s){switch(s){case 5126:return Sf;case 35664:return yf;case 35665:return Ef;case 35666:return Tf;case 35674:return bf;case 35675:return wf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Rf;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Uf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return kf}}function zf(s,t){s.uniform1fv(this.addr,t)}function Gf(s,t){const e=yi(t,this.size,2);s.uniform2fv(this.addr,e)}function Vf(s,t){const e=yi(t,this.size,3);s.uniform3fv(this.addr,e)}function Wf(s,t){const e=yi(t,this.size,4);s.uniform4fv(this.addr,e)}function Xf(s,t){const e=yi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qf(s,t){const e=yi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Yf(s,t){const e=yi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kf(s,t){s.uniform1iv(this.addr,t)}function $f(s,t){s.uniform2iv(this.addr,t)}function jf(s,t){s.uniform3iv(this.addr,t)}function Zf(s,t){s.uniform4iv(this.addr,t)}function Jf(s,t){s.uniform1uiv(this.addr,t)}function Qf(s,t){s.uniform2uiv(this.addr,t)}function tp(s,t){s.uniform3uiv(this.addr,t)}function ep(s,t){s.uniform4uiv(this.addr,t)}function np(s,t,e){const n=this.cache,i=t.length,r=Ds(e,i);ie(n,r)||(s.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xl,r[o])}function ip(s,t,e){const n=this.cache,i=t.length,r=Ds(e,i);ie(n,r)||(s.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||yl,r[o])}function sp(s,t,e){const n=this.cache,i=t.length,r=Ds(e,i);ie(n,r)||(s.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||El,r[o])}function rp(s,t,e){const n=this.cache,i=t.length,r=Ds(e,i);ie(n,r)||(s.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sl,r[o])}function ap(s){switch(s){case 5126:return zf;case 35664:return Gf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hf(e.type)}}class lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ap(e.type)}}class cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function ho(s,t){s.seq.push(t),s.map[t.id]=t}function hp(s,t,e){const n=s.name,i=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),o=mr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ho(e,c===void 0?new op(a,s,t):new lp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new cp(a),ho(e,u)),e=u}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);hp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function uo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const up=37297;let dp=0;function fp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function pp(s){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(s);let n;switch(t===e?n="":t===Es&&e===ys?n="LinearDisplayP3ToLinearSRGB":t===ys&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),s){case hn:case Rs:return[n,"LinearTransferOETF"];case le:case zr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+fp(s.getShaderSource(t),o)}else return i}function mp(s,t){const e=pp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gp(s,t){let e;switch(t){case wc:e="Linear";break;case Ac:e="Reinhard";break;case Cc:e="OptimizedCineon";break;case Rc:e="ACESFilmic";break;case Lc:e="AgX";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _p(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function vp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(li).join(`
`)}function xp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function li(s){return s!==""}function po(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(s){return s.replace(Sp,Ep)}const yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ep(s,t){let e=Dt[t];if(e===void 0){const n=yp.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dr(e)}const Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(s){return s.replace(Tp,bp)}function bp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _o(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ap(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case bc:t="ENVMAP_BLENDING_ADD";break}return t}function Pp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=wp(e),c=Ap(e),h=Cp(e),u=Rp(e),d=Pp(e),m=e.isWebGL2?"":_p(e),_=vp(e),g=xp(r),p=i.createProgram();let f,E,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(li).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(li).join(`
`),E.length>0&&(E+=`
`)):(f=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),E=[m,_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?gp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,mp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(li).join(`
`)),o=Dr(o),o=po(o,e),o=mo(o,e),a=Dr(a),a=po(a,e),a=mo(a,e),o=go(o),a=go(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=x+f+o,L=x+E+a,C=uo(i,i.VERTEX_SHADER,w),A=uo(i,i.FRAGMENT_SHADER,L);i.attachShader(p,C),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function q(K){if(s.debug.checkShaderErrors){const nt=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(A).trim();let z=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,A);else{const V=fo(i,C,"vertex"),G=fo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+V+`
`+G)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(R===""||O==="")&&(W=!1);W&&(K.diagnostics={runnable:z,programLog:nt,vertexShader:{log:R,prefix:f},fragmentShader:{log:O,prefix:E}})}i.deleteShader(C),i.deleteShader(A),S=new xs(i,p),T=Mp(i,p)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let T;this.getAttributes=function(){return T===void 0&&q(this),T};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(p,up)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Dp=0;class Up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ip(t),e.set(t,n)),n}}class Ip{constructor(t){this.id=Dp++,this.code=t,this.usedTimes=0}}function Np(s,t,e,n,i,r,o){const a=new cl,l=new Up,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,T,k,K,nt){const R=K.fog,O=nt.geometry,z=S.isMeshStandardMaterial?K.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),V=W&&W.mapping===Cs?W.image.height:null,G=_[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=j!==void 0?j.length:0;let lt=0;O.morphAttributes.position!==void 0&&(lt=1),O.morphAttributes.normal!==void 0&&(lt=2),O.morphAttributes.color!==void 0&&(lt=3);let H,X,at,mt;if(G){const pe=Ye[G];H=pe.vertexShader,X=pe.fragmentShader}else H=S.vertexShader,X=S.fragmentShader,l.update(S),at=l.getVertexShaderID(S),mt=l.getFragmentShaderID(S);const pt=s.getRenderTarget(),Ct=nt.isInstancedMesh===!0,Pt=nt.isBatchedMesh===!0,yt=!!S.map,zt=!!S.matcap,U=!!W,fe=!!S.aoMap,_t=!!S.lightMap,wt=!!S.bumpMap,ut=!!S.normalMap,jt=!!S.displacementMap,Ut=!!S.emissiveMap,y=!!S.metalnessMap,v=!!S.roughnessMap,N=S.anisotropy>0,Z=S.clearcoat>0,$=S.iridescence>0,J=S.sheen>0,dt=S.transmission>0,rt=N&&!!S.anisotropyMap,ct=Z&&!!S.clearcoatMap,Mt=Z&&!!S.clearcoatNormalMap,It=Z&&!!S.clearcoatRoughnessMap,Y=$&&!!S.iridescenceMap,Vt=$&&!!S.iridescenceThicknessMap,kt=J&&!!S.sheenColorMap,bt=J&&!!S.sheenRoughnessMap,gt=!!S.specularMap,ht=!!S.specularColorMap,Lt=!!S.specularIntensityMap,Gt=dt&&!!S.transmissionMap,Jt=dt&&!!S.thicknessMap,Ft=!!S.gradientMap,tt=!!S.alphaMap,b=S.alphaTest>0,it=!!S.alphaHash,st=!!S.extensions,Et=!!O.attributes.uv1,vt=!!O.attributes.uv2,qt=!!O.attributes.uv3;let Yt=Mn;return S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:h,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:X,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Pt,instancing:Ct,instancingColor:Ct&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:hn,map:yt,matcap:zt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:V,aoMap:fe,lightMap:_t,bumpMap:wt,normalMap:ut,displacementMap:d&&jt,emissiveMap:Ut,normalMapObjectSpace:ut&&S.normalMapType===Wc,normalMapTangentSpace:ut&&S.normalMapType===Vc,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:rt,clearcoat:Z,clearcoatMap:ct,clearcoatNormalMap:Mt,clearcoatRoughnessMap:It,iridescence:$,iridescenceMap:Y,iridescenceThicknessMap:Vt,sheen:J,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:gt,specularColorMap:ht,specularIntensityMap:Lt,transmission:dt,transmissionMap:Gt,thicknessMap:Jt,gradientMap:Ft,opaque:S.transparent===!1&&S.blending===hi,alphaMap:tt,alphaTest:b,alphaHash:it,combine:S.combine,mapUv:yt&&g(S.map.channel),aoMapUv:fe&&g(S.aoMap.channel),lightMapUv:_t&&g(S.lightMap.channel),bumpMapUv:wt&&g(S.bumpMap.channel),normalMapUv:ut&&g(S.normalMap.channel),displacementMapUv:jt&&g(S.displacementMap.channel),emissiveMapUv:Ut&&g(S.emissiveMap.channel),metalnessMapUv:y&&g(S.metalnessMap.channel),roughnessMapUv:v&&g(S.roughnessMap.channel),anisotropyMapUv:rt&&g(S.anisotropyMap.channel),clearcoatMapUv:ct&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(S.sheenRoughnessMap.channel),specularMapUv:gt&&g(S.specularMap.channel),specularColorMapUv:ht&&g(S.specularColorMap.channel),specularIntensityMapUv:Lt&&g(S.specularIntensityMap.channel),transmissionMapUv:Gt&&g(S.transmissionMap.channel),thicknessMapUv:Jt&&g(S.thicknessMap.channel),alphaMapUv:tt&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:vt,vertexUv3s:qt,pointsUvs:nt.isPoints===!0&&!!O.attributes.uv&&(yt||tt),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===$t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Ee,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:st&&S.extensions.derivatives===!0,extensionFragDepth:st&&S.extensions.fragDepth===!0,extensionDrawBuffers:st&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)T.push(k),T.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(E(T,S),x(T,S),T.push(s.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function E(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){const T=_[S.type];let k;if(T){const K=Ye[T];k=bs.clone(K.uniforms)}else k=S.uniforms;return k}function L(S,T){let k;for(let K=0,nt=c.length;K<nt;K++){const R=c[K];if(R.cacheKey===T){k=R,++k.usedTimes;break}}return k===void 0&&(k=new Lp(s,T,S,r),c.push(k)),k}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:q}}function Fp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Op(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,_,g,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function a(u,d,m,_,g,p){const f=o(u,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,_,g,p){const f=o(u,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Op),n.length>1&&n.sort(d||vo),i.length>1&&i.sort(d||vo)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new xo,s.set(n,[o])):i>=r.length?(o=new xo,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function kp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Hp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let zp=0;function Gp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vp(s,t){const e=new kp,n=Hp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,o=new ne,a=new ne;function l(h,u){let d=0,m=0,_=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let g=0,p=0,f=0,E=0,x=0,w=0,L=0,C=0,A=0,q=0,S=0;h.sort(Gp);const T=u===!0?Math.PI:1;for(let K=0,nt=h.length;K<nt;K++){const R=h[K],O=R.color,z=R.intensity,W=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=O.r*z*T,m+=O.g*z*T,_+=O.b*z*T;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],z);S++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const j=R.shadow,Q=n.get(R);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=R.shadow.matrix,w++}i.directional[g]=G,g++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(z*T),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[f]=G;const j=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&q++),i.spotLightMatrix[f]=j.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.spotShadow[f]=Q,i.spotShadowMap[f]=V,C++}f++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=G,E++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*T),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,Q=n.get(R);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,L++}i.point[p]=G,p++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(z*T),G.groundColor.copy(R.groundColor).multiplyScalar(z*T),i.hemi[x]=G,x++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const k=i.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==f||k.rectAreaLength!==E||k.hemiLength!==x||k.numDirectionalShadows!==w||k.numPointShadows!==L||k.numSpotShadows!==C||k.numSpotMaps!==A||k.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+A-q,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=S,k.directionalLength=g,k.pointLength=p,k.spotLength=f,k.rectAreaLength=E,k.hemiLength=x,k.numDirectionalShadows=w,k.numPointShadows=L,k.numSpotShadows=C,k.numSpotMaps=A,k.numLightProbes=S,i.version=zp++)}function c(h,u){let d=0,m=0,_=0,g=0,p=0;const f=u.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){const w=h[E];if(w.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(w.isSpotLight){const L=i.spot[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),_++}else if(w.isRectAreaLight){const L=i.rectArea[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const L=i.hemi[p];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Mo(s,t){const e=new Vp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wp(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Mo(s,t),e.set(r,[l])):o>=a.length?(l=new Mo(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xp extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qp extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $p(s,t,e){let n=new gl;const i=new St,r=new St,o=new ce,a=new Xp({depthPacking:Gc}),l=new qp,c={},h=e.maxTextureSize,u={[Tn]:Ee,[Ee]:Tn,[sn]:sn},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Yp,fragmentShader:Kp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ye(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let f=this.type;this.render=function(C,A,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),T=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),K=s.state;K.setBlending(ln),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const nt=f!==nn&&this.type===nn,R=f===nn&&this.type!==nn;for(let O=0,z=C.length;O<z;O++){const W=C[O],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const G=V.getFrameExtents();if(i.multiply(G),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,V.mapSize.y=r.y)),V.map===null||nt===!0||R===!0){const Q=this.type!==nn?{minFilter:ve,magFilter:ve}:{};V.map!==null&&V.map.dispose(),V.map=new We(i.x,i.y,Q),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const j=V.getViewportCount();for(let Q=0;Q<j;Q++){const lt=V.getViewport(Q);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),K.viewport(o),V.updateMatrices(W,Q),n=V.getFrustum(),w(A,q,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===nn&&E(V,q),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(S,T,k)};function E(C,A){const q=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new We(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,q,d,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,q,m,g,null)}function x(C,A,q,S){let T=null;const k=q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)T=k;else if(T=q.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=T.uuid,nt=A.uuid;let R=c[K];R===void 0&&(R={},c[K]=R);let O=R[nt];O===void 0&&(O=T.clone(),R[nt]=O,A.addEventListener("dispose",L)),T=O}if(T.visible=A.visible,T.wireframe=A.wireframe,S===nn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=s.properties.get(T);K.light=q}return T}function w(C,A,q,S,T){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);const nt=t.update(C),R=C.material;if(Array.isArray(R)){const O=nt.groups;for(let z=0,W=O.length;z<W;z++){const V=O[z],G=R[V.materialIndex];if(G&&G.visible){const j=x(C,G,S,T);C.onBeforeShadow(s,C,A,q,nt,j,V),s.renderBufferDirect(q,null,nt,j,C,V),C.onAfterShadow(s,C,A,q,nt,j,V)}}}else if(R.visible){const O=x(C,R,S,T);C.onBeforeShadow(s,C,A,q,nt,O,null),s.renderBufferDirect(q,null,nt,O,C,null),C.onAfterShadow(s,C,A,q,nt,O,null)}}const K=C.children;for(let nt=0,R=K.length;nt<R;nt++)w(K[nt],A,q,S,T)}function L(C){C.target.removeEventListener("dispose",L);for(const q in c){const S=c[q],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function jp(s,t,e){const n=e.isWebGL2;function i(){let b=!1;const it=new ce;let st=null;const Et=new ce(0,0,0,0);return{setMask:function(vt){st!==vt&&!b&&(s.colorMask(vt,vt,vt,vt),st=vt)},setLocked:function(vt){b=vt},setClear:function(vt,qt,Yt,re,pe){pe===!0&&(vt*=re,qt*=re,Yt*=re),it.set(vt,qt,Yt,re),Et.equals(it)===!1&&(s.clearColor(vt,qt,Yt,re),Et.copy(it))},reset:function(){b=!1,st=null,Et.set(-1,0,0,0)}}}function r(){let b=!1,it=null,st=null,Et=null;return{setTest:function(vt){vt?Pt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(vt){it!==vt&&!b&&(s.depthMask(vt),it=vt)},setFunc:function(vt){if(st!==vt){switch(vt){case _c:s.depthFunc(s.NEVER);break;case vc:s.depthFunc(s.ALWAYS);break;case xc:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Mc:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case yc:s.depthFunc(s.GREATER);break;case Ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=vt}},setLocked:function(vt){b=vt},setClear:function(vt){Et!==vt&&(s.clearDepth(vt),Et=vt)},reset:function(){b=!1,it=null,st=null,Et=null}}}function o(){let b=!1,it=null,st=null,Et=null,vt=null,qt=null,Yt=null,re=null,pe=null;return{setTest:function(Kt){b||(Kt?Pt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!b&&(s.stencilMask(Kt),it=Kt)},setFunc:function(Kt,me,qe){(st!==Kt||Et!==me||vt!==qe)&&(s.stencilFunc(Kt,me,qe),st=Kt,Et=me,vt=qe)},setOp:function(Kt,me,qe){(qt!==Kt||Yt!==me||re!==qe)&&(s.stencilOp(Kt,me,qe),qt=Kt,Yt=me,re=qe)},setLocked:function(Kt){b=Kt},setClear:function(Kt){pe!==Kt&&(s.clearStencil(Kt),pe=Kt)},reset:function(){b=!1,it=null,st=null,Et=null,vt=null,qt=null,Yt=null,re=null,pe=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,f=!1,E=null,x=null,w=null,L=null,C=null,A=null,q=null,S=new Ht(0,0,0),T=0,k=!1,K=null,nt=null,R=null,O=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=G>=2);let Q=null,lt={};const H=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),at=new ce().fromArray(H),mt=new ce().fromArray(X);function pt(b,it,st,Et){const vt=new Uint8Array(4),qt=s.createTexture();s.bindTexture(b,qt),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<st;Yt++)n&&(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)?s.texImage3D(it,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(it+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return qt}const Ct={};Ct[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(s.DEPTH_TEST),l.setFunc(Ms),Ut(!1),y(na),Pt(s.CULL_FACE),ut(ln);function Pt(b){d[b]!==!0&&(s.enable(b),d[b]=!0)}function yt(b){d[b]!==!1&&(s.disable(b),d[b]=!1)}function zt(b,it){return m[b]!==it?(s.bindFramebuffer(b,it),m[b]=it,n&&(b===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=it),b===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=it)),!0):!1}function U(b,it){let st=g,Et=!1;if(b)if(st=_.get(it),st===void 0&&(st=[],_.set(it,st)),b.isWebGLMultipleRenderTargets){const vt=b.texture;if(st.length!==vt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Yt=vt.length;qt<Yt;qt++)st[qt]=s.COLOR_ATTACHMENT0+qt;st.length=vt.length,Et=!0}}else st[0]!==s.COLOR_ATTACHMENT0&&(st[0]=s.COLOR_ATTACHMENT0,Et=!0);else st[0]!==s.BACK&&(st[0]=s.BACK,Et=!0);Et&&(e.isWebGL2?s.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function fe(b){return p!==b?(s.useProgram(b),p=b,!0):!1}const _t={[Nn]:s.FUNC_ADD,[nc]:s.FUNC_SUBTRACT,[ic]:s.FUNC_REVERSE_SUBTRACT};if(n)_t[ra]=s.MIN,_t[aa]=s.MAX;else{const b=t.get("EXT_blend_minmax");b!==null&&(_t[ra]=b.MIN_EXT,_t[aa]=b.MAX_EXT)}const wt={[sc]:s.ZERO,[rc]:s.ONE,[ac]:s.SRC_COLOR,[Er]:s.SRC_ALPHA,[dc]:s.SRC_ALPHA_SATURATE,[hc]:s.DST_COLOR,[lc]:s.DST_ALPHA,[oc]:s.ONE_MINUS_SRC_COLOR,[Tr]:s.ONE_MINUS_SRC_ALPHA,[uc]:s.ONE_MINUS_DST_COLOR,[cc]:s.ONE_MINUS_DST_ALPHA,[fc]:s.CONSTANT_COLOR,[pc]:s.ONE_MINUS_CONSTANT_COLOR,[mc]:s.CONSTANT_ALPHA,[gc]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(b,it,st,Et,vt,qt,Yt,re,pe,Kt){if(b===ln){f===!0&&(yt(s.BLEND),f=!1);return}if(f===!1&&(Pt(s.BLEND),f=!0),b!==ec){if(b!==E||Kt!==k){if((x!==Nn||C!==Nn)&&(s.blendEquation(s.FUNC_ADD),x=Nn,C=Nn),Kt)switch(b){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.ONE,s.ONE);break;case ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,L=null,A=null,q=null,S.set(0,0,0),T=0,E=b,k=Kt}return}vt=vt||it,qt=qt||st,Yt=Yt||Et,(it!==x||vt!==C)&&(s.blendEquationSeparate(_t[it],_t[vt]),x=it,C=vt),(st!==w||Et!==L||qt!==A||Yt!==q)&&(s.blendFuncSeparate(wt[st],wt[Et],wt[qt],wt[Yt]),w=st,L=Et,A=qt,q=Yt),(re.equals(S)===!1||pe!==T)&&(s.blendColor(re.r,re.g,re.b,pe),S.copy(re),T=pe),E=b,k=!1}function jt(b,it){b.side===sn?yt(s.CULL_FACE):Pt(s.CULL_FACE);let st=b.side===Ee;it&&(st=!st),Ut(st),b.blending===hi&&b.transparent===!1?ut(ln):ut(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Et=b.stencilWrite;c.setTest(Et),Et&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(b){K!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),K=b)}function y(b){b!==Jl?(Pt(s.CULL_FACE),b!==nt&&(b===na?s.cullFace(s.BACK):b===Ql?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),nt=b}function v(b){b!==R&&(V&&s.lineWidth(b),R=b)}function N(b,it,st){b?(Pt(s.POLYGON_OFFSET_FILL),(O!==it||z!==st)&&(s.polygonOffset(it,st),O=it,z=st)):yt(s.POLYGON_OFFSET_FILL)}function Z(b){b?Pt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function $(b){b===void 0&&(b=s.TEXTURE0+W-1),Q!==b&&(s.activeTexture(b),Q=b)}function J(b,it,st){st===void 0&&(Q===null?st=s.TEXTURE0+W-1:st=Q);let Et=lt[st];Et===void 0&&(Et={type:void 0,texture:void 0},lt[st]=Et),(Et.type!==b||Et.texture!==it)&&(Q!==st&&(s.activeTexture(st),Q=st),s.bindTexture(b,it||Ct[b]),Et.type=b,Et.texture=it)}function dt(){const b=lt[Q];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function rt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Mt(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Lt(b){at.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),at.copy(b))}function Gt(b){mt.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),mt.copy(b))}function Jt(b,it){let st=u.get(it);st===void 0&&(st=new WeakMap,u.set(it,st));let Et=st.get(b);Et===void 0&&(Et=s.getUniformBlockIndex(it,b.name),st.set(b,Et))}function Ft(b,it){const Et=u.get(it).get(b);h.get(it)!==Et&&(s.uniformBlockBinding(it,Et,b.__bindingPointIndex),h.set(it,Et))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Q=null,lt={},m={},_=new WeakMap,g=[],p=null,f=!1,E=null,x=null,w=null,L=null,C=null,A=null,q=null,S=new Ht(0,0,0),T=0,k=!1,K=null,nt=null,R=null,O=null,z=null,at.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:yt,bindFramebuffer:zt,drawBuffers:U,useProgram:fe,setBlending:ut,setMaterial:jt,setFlipSided:Ut,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:Z,activeTexture:$,bindTexture:J,unbindTexture:dt,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:gt,texImage3D:ht,updateUBOMapping:Jt,uniformBlockBinding:Ft,texStorage2D:kt,texStorage3D:bt,texSubImage2D:Mt,texSubImage3D:It,compressedTexSubImage2D:Y,compressedTexSubImage3D:Vt,scissor:Lt,viewport:Gt,reset:tt}}function Zp(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Ni("canvas")}function g(y,v,N,Z){let $=1;if((y.width>Z||y.height>Z)&&($=Z/Math.max(y.width,y.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=v?Lr:Math.floor,dt=J($*y.width),rt=J($*y.height);u===void 0&&(u=_(dt,rt));const ct=N?_(dt,rt):u;return ct.width=dt,ct.height=rt,ct.getContext("2d").drawImage(y,0,0,dt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+dt+"x"+rt+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Na(y.width)&&Na(y.height)}function f(y){return a?!1:y.wrapS!==Ge||y.wrapT!==Ge||y.minFilter!==ve&&y.minFilter!==Le}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==ve&&y.minFilter!==Le}function x(y){s.generateMipmap(y)}function w(y,v,N,Z,$=!1){if(a===!1)return v;if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=v;if(v===s.RED&&(N===s.FLOAT&&(J=s.R32F),N===s.HALF_FLOAT&&(J=s.R16F),N===s.UNSIGNED_BYTE&&(J=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(J=s.R8UI),N===s.UNSIGNED_SHORT&&(J=s.R16UI),N===s.UNSIGNED_INT&&(J=s.R32UI),N===s.BYTE&&(J=s.R8I),N===s.SHORT&&(J=s.R16I),N===s.INT&&(J=s.R32I)),v===s.RG&&(N===s.FLOAT&&(J=s.RG32F),N===s.HALF_FLOAT&&(J=s.RG16F),N===s.UNSIGNED_BYTE&&(J=s.RG8)),v===s.RGBA){const dt=$?Ss:Wt.getTransfer(Z);N===s.FLOAT&&(J=s.RGBA32F),N===s.HALF_FLOAT&&(J=s.RGBA16F),N===s.UNSIGNED_BYTE&&(J=dt===$t?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function L(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==ve&&y.minFilter!==Le?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){return y===ve||y===oa||y===Hs?s.NEAREST:s.LINEAR}function A(y){const v=y.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&h.delete(v)}function q(y){const v=y.target;v.removeEventListener("dispose",q),k(v)}function S(y){const v=n.get(y);if(v.__webglInit===void 0)return;const N=y.source,Z=d.get(N);if(Z){const $=Z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(y),Object.keys(Z).length===0&&d.delete(N)}n.remove(y)}function T(y){const v=n.get(y);s.deleteTexture(v.__webglTexture);const N=y.source,Z=d.get(N);delete Z[v.__cacheKey],o.memory.textures--}function k(y){const v=y.texture,N=n.get(y),Z=n.get(v);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(N.__webglFramebuffer[$]))for(let J=0;J<N.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(N.__webglFramebuffer[$][J]);else s.deleteFramebuffer(N.__webglFramebuffer[$]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[$])}else{if(Array.isArray(N.__webglFramebuffer))for(let $=0;$<N.__webglFramebuffer.length;$++)s.deleteFramebuffer(N.__webglFramebuffer[$]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let $=0;$<N.__webglColorRenderbuffer.length;$++)N.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[$]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let $=0,J=v.length;$<J;$++){const dt=n.get(v[$]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(y)}let K=0;function nt(){K=0}function R(){const y=K;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),K+=1,y}function O(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function z(y,v){const N=n.get(y);if(y.isVideoTexture&&jt(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(N,y,v);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function W(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){at(N,y,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function V(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){at(N,y,v);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function G(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){mt(N,y,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const j={[an]:s.REPEAT,[Ge]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},Q={[ve]:s.NEAREST,[oa]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[Le]:s.LINEAR,[Dc]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},lt={[Xc]:s.NEVER,[Zc]:s.ALWAYS,[qc]:s.LESS,[il]:s.LEQUAL,[Yc]:s.EQUAL,[jc]:s.GEQUAL,[Kc]:s.GREATER,[$c]:s.NOTEQUAL};function H(y,v,N){if(N?(s.texParameteri(y,s.TEXTURE_WRAP_S,j[v.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,j[v.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,j[v.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,Q[v.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,Q[v.minFilter])):(s.texParameteri(y,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(y,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Ge||v.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(y,s.TEXTURE_MAG_FILTER,C(v.magFilter)),s.texParameteri(y,s.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==ve&&v.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===ve||v.minFilter!==Hs&&v.minFilter!==Ii||v.type===vn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===cn&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(y,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function X(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",A));const Z=v.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const J=O(v);if(J!==y.__cacheKey){$[J]===void 0&&($[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[J].usedTimes++;const dt=$[y.__cacheKey];dt!==void 0&&($[y.__cacheKey].usedTimes--,dt.usedTimes===0&&T(v)),y.__cacheKey=J,y.__webglTexture=$[J].texture}return N}function at(y,v,N){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);const $=X(y,v),J=v.source;e.bindTexture(Z,y.__webglTexture,s.TEXTURE0+N);const dt=n.get(J);if(J.version!==dt.__version||$===!0){e.activeTexture(s.TEXTURE0+N);const rt=Wt.getPrimaries(Wt.workingColorSpace),ct=v.colorSpace===Ue?null:Wt.getPrimaries(v.colorSpace),Mt=v.colorSpace===Ue||rt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const It=f(v)&&p(v.image)===!1;let Y=g(v.image,It,!1,i.maxTextureSize);Y=Ut(v,Y);const Vt=p(Y)||a,kt=r.convert(v.format,v.colorSpace);let bt=r.convert(v.type),gt=w(v.internalFormat,kt,bt,v.colorSpace,v.isVideoTexture);H(Z,v,Vt);let ht;const Lt=v.mipmaps,Gt=a&&v.isVideoTexture!==!0&&gt!==el,Jt=dt.__version===void 0||$===!0,Ft=L(v,Y,Vt);if(v.isDepthTexture)gt=s.DEPTH_COMPONENT,a?v.type===vn?gt=s.DEPTH_COMPONENT32F:v.type===_n?gt=s.DEPTH_COMPONENT24:v.type===On?gt=s.DEPTH24_STENCIL8:gt=s.DEPTH_COMPONENT16:v.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Bn&&gt===s.DEPTH_COMPONENT&&v.type!==Hr&&v.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_n,bt=r.convert(v.type)),v.format===pi&&gt===s.DEPTH_COMPONENT&&(gt=s.DEPTH_STENCIL,v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=On,bt=r.convert(v.type))),Jt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,gt,Y.width,Y.height):e.texImage2D(s.TEXTURE_2D,0,gt,Y.width,Y.height,0,kt,bt,null));else if(v.isDataTexture)if(Lt.length>0&&Vt){Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let tt=0,b=Lt.length;tt<b;tt++)ht=Lt[tt],Gt?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,kt,bt,ht.data):e.texImage2D(s.TEXTURE_2D,tt,gt,ht.width,ht.height,0,kt,bt,ht.data);v.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(s.TEXTURE_2D,Ft,gt,Y.width,Y.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Y.width,Y.height,kt,bt,Y.data)):e.texImage2D(s.TEXTURE_2D,0,gt,Y.width,Y.height,0,kt,bt,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,gt,Lt[0].width,Lt[0].height,Y.depth);for(let tt=0,b=Lt.length;tt<b;tt++)ht=Lt[tt],v.format!==Ve?kt!==null?Gt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,Y.depth,kt,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,gt,ht.width,ht.height,Y.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,Y.depth,kt,bt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,gt,ht.width,ht.height,Y.depth,0,kt,bt,ht.data)}else{Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let tt=0,b=Lt.length;tt<b;tt++)ht=Lt[tt],v.format!==Ve?kt!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,kt,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,kt,bt,ht.data):e.texImage2D(s.TEXTURE_2D,tt,gt,ht.width,ht.height,0,kt,bt,ht.data)}else if(v.isDataArrayTexture)Gt?(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,gt,Y.width,Y.height,Y.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,kt,bt,Y.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,Y.width,Y.height,Y.depth,0,kt,bt,Y.data);else if(v.isData3DTexture)Gt?(Jt&&e.texStorage3D(s.TEXTURE_3D,Ft,gt,Y.width,Y.height,Y.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,kt,bt,Y.data)):e.texImage3D(s.TEXTURE_3D,0,gt,Y.width,Y.height,Y.depth,0,kt,bt,Y.data);else if(v.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(s.TEXTURE_2D,Ft,gt,Y.width,Y.height);else{let tt=Y.width,b=Y.height;for(let it=0;it<Ft;it++)e.texImage2D(s.TEXTURE_2D,it,gt,tt,b,0,kt,bt,null),tt>>=1,b>>=1}}else if(Lt.length>0&&Vt){Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let tt=0,b=Lt.length;tt<b;tt++)ht=Lt[tt],Gt?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,kt,bt,ht):e.texImage2D(s.TEXTURE_2D,tt,gt,kt,bt,ht);v.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(s.TEXTURE_2D,Ft,gt,Y.width,Y.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,bt,Y)):e.texImage2D(s.TEXTURE_2D,0,gt,kt,bt,Y);E(v,Vt)&&x(Z),dt.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function mt(y,v,N){if(v.image.length!==6)return;const Z=X(y,v),$=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+N);const J=n.get($);if($.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+N);const dt=Wt.getPrimaries(Wt.workingColorSpace),rt=v.colorSpace===Ue?null:Wt.getPrimaries(v.colorSpace),ct=v.colorSpace===Ue||dt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let tt=0;tt<6;tt++)!Mt&&!It?Y[tt]=g(v.image[tt],!1,!0,i.maxCubemapSize):Y[tt]=It?v.image[tt].image:v.image[tt],Y[tt]=Ut(v,Y[tt]);const Vt=Y[0],kt=p(Vt)||a,bt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),ht=w(v.internalFormat,bt,gt,v.colorSpace),Lt=a&&v.isVideoTexture!==!0,Gt=J.__version===void 0||Z===!0;let Jt=L(v,Vt,kt);H(s.TEXTURE_CUBE_MAP,v,kt);let Ft;if(Mt){Lt&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,ht,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){Ft=Y[tt].mipmaps;for(let b=0;b<Ft.length;b++){const it=Ft[b];v.format!==Ve?bt!==null?Lt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b,0,0,it.width,it.height,bt,it.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b,ht,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b,0,0,it.width,it.height,bt,gt,it.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b,ht,it.width,it.height,0,bt,gt,it.data)}}}else{Ft=v.mipmaps,Lt&&Gt&&(Ft.length>0&&Jt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,ht,Y[0].width,Y[0].height));for(let tt=0;tt<6;tt++)if(It){Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Y[tt].width,Y[tt].height,bt,gt,Y[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ht,Y[tt].width,Y[tt].height,0,bt,gt,Y[tt].data);for(let b=0;b<Ft.length;b++){const st=Ft[b].image[tt].image;Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b+1,0,0,st.width,st.height,bt,gt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b+1,ht,st.width,st.height,0,bt,gt,st.data)}}else{Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt,gt,Y[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ht,bt,gt,Y[tt]);for(let b=0;b<Ft.length;b++){const it=Ft[b];Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b+1,0,0,bt,gt,it.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,b+1,ht,bt,gt,it.image[tt])}}}E(v,kt)&&x(s.TEXTURE_CUBE_MAP),J.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function pt(y,v,N,Z,$,J){const dt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ct=w(N.internalFormat,dt,rt,N.colorSpace);if(!n.get(v).__hasExternalTextures){const It=Math.max(1,v.width>>J),Y=Math.max(1,v.height>>J);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,J,ct,It,Y,v.depth,0,dt,rt,null):e.texImage2D($,J,ct,It,Y,0,dt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,y),ut(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,0,wt(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(y,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(N||ut(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===vn?Z=s.DEPTH_COMPONENT32F:$.type===_n&&(Z=s.DEPTH_COMPONENT24));const J=wt(v);ut(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,Z,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Z,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const Z=wt(v);N&&ut(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,v.width,v.height):ut(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,y)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<Z.length;$++){const J=Z[$],dt=r.convert(J.format,J.colorSpace),rt=r.convert(J.type),ct=w(J.internalFormat,dt,rt,J.colorSpace),Mt=wt(v);N&&ut(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,ct,v.width,v.height):ut(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,ct,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ct,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,$=wt(v);if(v.depthTexture.format===Bn)ut(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(v.depthTexture.format===pi)ut(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function yt(y){const v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pt(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ct(v.__webglDepthbuffer[Z],y,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Ct(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(y,v,N){const Z=n.get(y);v!==void 0&&pt(Z.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&yt(y)}function U(y){const v=y.texture,N=n.get(y),Z=n.get(v);y.addEventListener("dispose",q),y.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,o.memory.textures++);const $=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,dt=p(y)||a;if($){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ct=0;ct<v.mipmaps.length;ct++)N.__webglFramebuffer[rt][ct]=s.createFramebuffer()}else N.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)N.__webglFramebuffer[rt]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(J)if(i.drawBuffers){const rt=y.texture;for(let ct=0,Mt=rt.length;ct<Mt;ct++){const It=n.get(rt[ct]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ut(y)===!1){const rt=J?v:[v];N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<rt.length;ct++){const Mt=rt[ct];N.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const It=r.convert(Mt.format,Mt.colorSpace),Y=r.convert(Mt.type),Vt=w(Mt.internalFormat,It,Y,Mt.colorSpace,y.isXRRenderTarget===!0),kt=wt(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Vt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),H(s.TEXTURE_CUBE_MAP,v,dt);for(let rt=0;rt<6;rt++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)pt(N.__webglFramebuffer[rt][ct],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else pt(N.__webglFramebuffer[rt],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);E(v,dt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const rt=y.texture;for(let ct=0,Mt=rt.length;ct<Mt;ct++){const It=rt[ct],Y=n.get(It);e.bindTexture(s.TEXTURE_2D,Y.__webglTexture),H(s.TEXTURE_2D,It,dt),pt(N.__webglFramebuffer,y,It,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),E(It,dt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?rt=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,Z.__webglTexture),H(rt,v,dt),a&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)pt(N.__webglFramebuffer[ct],y,v,s.COLOR_ATTACHMENT0,rt,ct);else pt(N.__webglFramebuffer,y,v,s.COLOR_ATTACHMENT0,rt,0);E(v,dt)&&x(rt),e.unbindTexture()}y.depthBuffer&&yt(y)}function fe(y){const v=p(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0,$=N.length;Z<$;Z++){const J=N[Z];if(E(J,v)){const dt=y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,rt=n.get(J).__webglTexture;e.bindTexture(dt,rt),x(dt),e.unbindTexture()}}}function _t(y){if(a&&y.samples>0&&ut(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,Z=y.height;let $=s.COLOR_BUFFER_BIT;const J=[],dt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=n.get(y),ct=y.isWebGLMultipleRenderTargets===!0;if(ct)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){J.push(s.COLOR_ATTACHMENT0+Mt),y.depthBuffer&&J.push(dt);const It=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(It===!1&&(y.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ct&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]),It===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[dt])),ct){const Y=n.get(v[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Y,0)}s.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]);const It=n.get(v[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function wt(y){return Math.min(i.maxSamples,y.samples)}function ut(y){const v=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function jt(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Ut(y,v){const N=y.colorSpace,Z=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Rr||N!==hn&&N!==Ue&&(Wt.getTransfer(N)===$t?a===!1?t.has("EXT_sRGB")===!0&&Z===Ve?(y.format=Rr,y.minFilter=Le,y.generateMipmaps=!1):v=rl.sRGBToLinear(v):(Z!==Ve||$!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=R,this.resetTextureUnits=nt,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function Jp(s,t,e){const n=e.isWebGL2;function i(r,o=Ue){let a;const l=Wt.getTransfer(o);if(r===Sn)return s.UNSIGNED_BYTE;if(r===jo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Uc)return s.BYTE;if(r===Ic)return s.SHORT;if(r===Hr)return s.UNSIGNED_SHORT;if(r===$o)return s.INT;if(r===_n)return s.UNSIGNED_INT;if(r===vn)return s.FLOAT;if(r===cn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nc)return s.ALPHA;if(r===Ve)return s.RGBA;if(r===Fc)return s.LUMINANCE;if(r===Oc)return s.LUMINANCE_ALPHA;if(r===Bn)return s.DEPTH_COMPONENT;if(r===pi)return s.DEPTH_STENCIL;if(r===Rr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Bc)return s.RED;if(r===Jo)return s.RED_INTEGER;if(r===kc)return s.RG;if(r===Qo)return s.RG_INTEGER;if(r===tl)return s.RGBA_INTEGER;if(r===zs||r===Gs||r===Vs||r===Ws)if(l===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===la||r===ca||r===ha||r===ua)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===la)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===el)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===da||r===fa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===da)return l===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===Ma||r===Sa||r===ya||r===Ea||r===Ta||r===ba||r===wa||r===Aa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ma)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ga)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_a)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===va)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ma)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ya)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ea)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ta)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ba)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Aa)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs||r===Ca||r===Ra)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Xs)return l===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ca)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hc||r===Pa||r===La||r===Da)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Xs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===La)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Qp extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class em extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const g=e.getContextAttributes();let p=null,f=null;const E=[],x=[],w=new St;let L=null;const C=new ze;C.layers.enable(1),C.viewport=new ce;const A=new ze;A.layers.enable(2),A.viewport=new ce;const q=[C,A],S=new Qp;S.layers.enable(1),S.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=E[H];return X===void 0&&(X=new gr,E[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=E[H];return X===void 0&&(X=new gr,E[H]=X),X.getGripSpace()},this.getHand=function(H){let X=E[H];return X===void 0&&(X=new gr,E[H]=X),X.getHandSpace()};function K(H){const X=x.indexOf(H.inputSource);if(X===-1)return;const at=E[X];at!==void 0&&(at.update(H.inputSource,H.frame,c||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function nt(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",R);for(let H=0;H<E.length;H++){const X=x[H];X!==null&&(x[H]=null,E[H].disconnect(X))}T=null,k=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new We(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,at=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=g.stencil?pi:Bn,at=g.stencil?On:_n);const pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new We(d.textureWidth,d.textureHeight,{format:Ve,type:Sn,depthTexture:new vl(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Ct=t.properties.get(f);Ct.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(H){for(let X=0;X<H.removed.length;X++){const at=H.removed[X],mt=x.indexOf(at);mt>=0&&(x[mt]=null,E[mt].disconnect(at))}for(let X=0;X<H.added.length;X++){const at=H.added[X];let mt=x.indexOf(at);if(mt===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=x.length){x.push(at),mt=Ct;break}else if(x[Ct]===null){x[Ct]=at,mt=Ct;break}if(mt===-1)break}const pt=E[mt];pt&&pt.connect(at)}}const O=new D,z=new D;function W(H,X,at){O.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(at.matrixWorld);const mt=O.distanceTo(z),pt=X.projectionMatrix.elements,Ct=at.projectionMatrix.elements,Pt=pt[14]/(pt[10]-1),yt=pt[14]/(pt[10]+1),zt=(pt[9]+1)/pt[5],U=(pt[9]-1)/pt[5],fe=(pt[8]-1)/pt[0],_t=(Ct[8]+1)/Ct[0],wt=Pt*fe,ut=Pt*_t,jt=mt/(-fe+_t),Ut=jt*-fe;X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(jt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const y=Pt+jt,v=yt+jt,N=wt-Ut,Z=ut+(mt-Ut),$=zt*yt/v*y,J=U*yt/v*y;H.projectionMatrix.makePerspective(N,Z,$,J,y,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=A.near=C.near=H.near,S.far=A.far=C.far=H.far,(T!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,k=S.far);const X=H.parent,at=S.cameras;V(S,X);for(let mt=0;mt<at.length;mt++)V(at[mt],X);at.length===2?W(S,C,A):S.projectionMatrix.copy(C.projectionMatrix),G(H,S,X)};function G(H,X,at){at===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Pr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let j=null;function Q(H,X){if(h=X.getViewerPose(c||o),_=X,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let mt=!1;at.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let pt=0;pt<at.length;pt++){const Ct=at[pt];let Pt=null;if(m!==null)Pt=m.getViewport(Ct);else{const zt=u.getViewSubImage(d,Ct);Pt=zt.viewport,pt===0&&(t.setRenderTargetTextures(f,zt.colorTexture,d.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(f))}let yt=q[pt];yt===void 0&&(yt=new ze,yt.layers.enable(pt),yt.viewport=new ce,q[pt]=yt),yt.matrix.fromArray(Ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(S.matrix.copy(yt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(yt)}}for(let at=0;at<E.length;at++){const mt=x[at],pt=E[at];mt!==null&&pt!==void 0&&pt.update(mt,X,c||o)}j&&j(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}const lt=new _l;lt.setAnimationLoop(Q),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function nm(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,fl(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ee&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ee&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ee&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function im(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const w=x.program;n.uniformBlockBinding(E,w)}function c(E,x){let w=i[E.id];w===void 0&&(_(E),w=h(E),i[E.id]=w,E.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(E,L);const C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const x=u();E.__bindingPointIndex=x;const w=s.createBuffer(),L=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=i[E.id],w=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,A=w.length;C<A;C++){const q=Array.isArray(w[C])?w[C]:[w[C]];for(let S=0,T=q.length;S<T;S++){const k=q[S];if(m(k,C,S,L)===!0){const K=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value];let R=0;for(let O=0;O<nt.length;O++){const z=nt[O],W=g(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,K+R,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,x,w,L){const C=E.value,A=x+"_"+w;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const q=L[A];if(typeof C=="number"||typeof C=="boolean"){if(q!==C)return L[A]=C,!0}else if(q.equals(C)===!1)return q.copy(C),!0}return!1}function _(E){const x=E.uniforms;let w=0;const L=16;for(let A=0,q=x.length;A<q;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,k=S.length;T<k;T++){const K=S[T],nt=Array.isArray(K.value)?K.value:[K.value];for(let R=0,O=nt.length;R<O;R++){const z=nt[R],W=g(z),V=w%L;V!==0&&L-V<W.boundary&&(w+=L-V),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=W.storage}}}const C=w%L;return C>0&&(w+=L-C),E.__size=w,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Tl{constructor(t={}){const{canvas:e=Qc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const x=this;let w=!1,L=0,C=0,A=null,q=-1,S=null;const T=new ce,k=new ce;let K=null;const nt=new Ht(0);let R=0,O=e.width,z=e.height,W=1,V=null,G=null;const j=new ce(0,0,O,z),Q=new ce(0,0,O,z);let lt=!1;const H=new gl;let X=!1,at=!1,mt=null;const pt=new ne,Ct=new St,Pt=new D,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return A===null?W:1}let U=n;function fe(M,P){for(let F=0;F<M.length;F++){const B=M[F],I=e.getContext(B,P);if(I!==null)return I}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kr}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",it,!1),U===null){const P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),U=fe(P,M),U===null)throw fe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _t,wt,ut,jt,Ut,y,v,N,Z,$,J,dt,rt,ct,Mt,It,Y,Vt,kt,bt,gt,ht,Lt,Gt;function Jt(){_t=new ff(U),wt=new of(U,_t,t),_t.init(wt),ht=new Jp(U,_t,wt),ut=new jp(U,_t,wt),jt=new gf(U),Ut=new Fp,y=new Zp(U,_t,ut,Ut,wt,ht,jt),v=new cf(x),N=new df(x),Z=new Eh(U,wt),Lt=new rf(U,_t,Z,wt),$=new pf(U,Z,jt,Lt),J=new Mf(U,$,Z,jt),kt=new xf(U,wt,y),It=new lf(Ut),dt=new Np(x,v,N,_t,wt,Lt,It),rt=new nm(x,Ut),ct=new Bp,Mt=new Wp(_t,wt),Vt=new sf(x,v,N,ut,J,d,l),Y=new $p(x,J,wt),Gt=new im(U,jt,wt,ut),bt=new af(U,_t,jt,wt),gt=new mf(U,_t,jt,wt),jt.programs=dt.programs,x.capabilities=wt,x.extensions=_t,x.properties=Ut,x.renderLists=ct,x.shadowMap=Y,x.state=ut,x.info=jt}Jt();const Ft=new em(x,U);this.xr=Ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=_t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(O,z,!1))},this.getSize=function(M){return M.set(O,z)},this.setSize=function(M,P,F=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,z=P,e.width=Math.floor(M*W),e.height=Math.floor(P*W),F===!0&&(e.style.width=M+"px",e.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(O*W,z*W).floor()},this.setDrawingBufferSize=function(M,P,F){O=M,z=P,W=F,e.width=Math.floor(M*F),e.height=Math.floor(P*F),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,P,F,B){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,P,F,B),ut.viewport(T.copy(j).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,P,F,B){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,P,F,B),ut.scissor(k.copy(Q).multiplyScalar(W).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(M){ut.setScissorTest(lt=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){G=M},this.getClearColor=function(M){return M.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(M=!0,P=!0,F=!0){let B=0;if(M){let I=!1;if(A!==null){const ot=A.texture.format;I=ot===tl||ot===Qo||ot===Jo}if(I){const ot=A.texture.type,ft=ot===Sn||ot===_n||ot===Hr||ot===On||ot===jo||ot===Zo,xt=Vt.getClearColor(),Tt=Vt.getClearAlpha(),Nt=xt.r,At=xt.g,Rt=xt.b;ft?(m[0]=Nt,m[1]=At,m[2]=Rt,m[3]=Tt,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Nt,_[1]=At,_[2]=Rt,_[3]=Tt,U.clearBufferiv(U.COLOR,0,_))}else B|=U.COLOR_BUFFER_BIT}P&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ct.dispose(),Mt.dispose(),Ut.dispose(),v.dispose(),N.dispose(),J.dispose(),Lt.dispose(),Gt.dispose(),dt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",pe),Ft.removeEventListener("sessionend",Kt),mt&&(mt.dispose(),mt=null),me.stop()};function tt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=jt.autoReset,P=Y.enabled,F=Y.autoUpdate,B=Y.needsUpdate,I=Y.type;Jt(),jt.autoReset=M,Y.enabled=P,Y.autoUpdate=F,Y.needsUpdate=B,Y.type=I}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const P=M.target;P.removeEventListener("dispose",st),Et(P)}function Et(M){vt(M),Ut.remove(M)}function vt(M){const P=Ut.get(M).programs;P!==void 0&&(P.forEach(function(F){dt.releaseProgram(F)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,F,B,I,ot){P===null&&(P=yt);const ft=I.isMesh&&I.matrixWorld.determinant()<0,xt=Xl(M,P,F,B,I);ut.setMaterial(B,ft);let Tt=F.index,Nt=1;if(B.wireframe===!0){if(Tt=$.getWireframeAttribute(F),Tt===void 0)return;Nt=2}const At=F.drawRange,Rt=F.attributes.position;let te=At.start*Nt,Te=(At.start+At.count)*Nt;ot!==null&&(te=Math.max(te,ot.start*Nt),Te=Math.min(Te,(ot.start+ot.count)*Nt)),Tt!==null?(te=Math.max(te,0),Te=Math.min(Te,Tt.count)):Rt!=null&&(te=Math.max(te,0),Te=Math.min(Te,Rt.count));const ae=Te-te;if(ae<0||ae===1/0)return;Lt.setup(I,B,xt,F,Tt);let je,Zt=bt;if(Tt!==null&&(je=Z.get(Tt),Zt=gt,Zt.setIndex(je)),I.isMesh)B.wireframe===!0?(ut.setLineWidth(B.wireframeLinewidth*zt()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(I.isLine){let Ot=B.linewidth;Ot===void 0&&(Ot=1),ut.setLineWidth(Ot*zt()),I.isLineSegments?Zt.setMode(U.LINES):I.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else I.isPoints?Zt.setMode(U.POINTS):I.isSprite&&Zt.setMode(U.TRIANGLES);if(I.isBatchedMesh)Zt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Zt.renderInstances(te,ae,I.count);else if(F.isInstancedBufferGeometry){const Ot=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Fs=Math.min(F.instanceCount,Ot);Zt.renderInstances(te,ae,Fs)}else Zt.render(te,ae)};function qt(M,P,F){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Ee,M.needsUpdate=!0,Vi(M,P,F),M.side=Tn,M.needsUpdate=!0,Vi(M,P,F),M.side=sn):Vi(M,P,F)}this.compile=function(M,P,F=null){F===null&&(F=M),p=Mt.get(F),p.init(),E.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),M!==F&&M.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(x._useLegacyLights);const B=new Set;return M.traverse(function(I){const ot=I.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const xt=ot[ft];qt(xt,F,I),B.add(xt)}else qt(ot,F,I),B.add(ot)}),E.pop(),p=null,B},this.compileAsync=function(M,P,F=null){const B=this.compile(M,P,F);return new Promise(I=>{function ot(){if(B.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){I(M);return}setTimeout(ot,10)}_t.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Yt=null;function re(M){Yt&&Yt(M)}function pe(){me.stop()}function Kt(){me.start()}const me=new _l;me.setAnimationLoop(re),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(M){Yt=M,Ft.setAnimationLoop(M),M===null?me.stop():me.start()},Ft.addEventListener("sessionstart",pe),Ft.addEventListener("sessionend",Kt),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(P),P=Ft.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,P,A),p=Mt.get(M,E.length),p.init(),E.push(p),pt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H.setFromProjectionMatrix(pt),at=this.localClippingEnabled,X=It.init(this.clippingPlanes,at),g=ct.get(M,f.length),g.init(),f.push(g),qe(M,P,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,G),this.info.render.frame++,X===!0&&It.beginShadows();const F=p.state.shadowsArray;if(Y.render(F,M,P),X===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(g,M),p.setupLights(x._useLegacyLights),P.isArrayCamera){const B=P.cameras;for(let I=0,ot=B.length;I<ot;I++){const ft=B[I];$r(g,M,ft,ft.viewport)}}else $r(g,M,P);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,P),Lt.resetDefaultState(),q=-1,S=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function qe(M,P,F,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){B&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pt);const ft=J.update(M),xt=M.material;xt.visible&&g.push(M,ft,xt,F,Pt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){const ft=J.update(M),xt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Pt.copy(ft.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(pt)),Array.isArray(xt)){const Tt=ft.groups;for(let Nt=0,At=Tt.length;Nt<At;Nt++){const Rt=Tt[Nt],te=xt[Rt.materialIndex];te&&te.visible&&g.push(M,ft,te,F,Pt.z,Rt)}}else xt.visible&&g.push(M,ft,xt,F,Pt.z,null)}}const ot=M.children;for(let ft=0,xt=ot.length;ft<xt;ft++)qe(ot[ft],P,F,B)}function $r(M,P,F,B){const I=M.opaque,ot=M.transmissive,ft=M.transparent;p.setupLightsView(F),X===!0&&It.setGlobalState(x.clippingPlanes,F),ot.length>0&&Wl(I,ot,P,F),B&&ut.viewport(T.copy(B)),I.length>0&&Gi(I,P,F),ot.length>0&&Gi(ot,P,F),ft.length>0&&Gi(ft,P,F),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Wl(M,P,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ot=wt.isWebGL2;mt===null&&(mt=new We(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?cn:Sn,minFilter:Ii,samples:ot?4:0})),x.getDrawingBufferSize(Ct),ot?mt.setSize(Ct.x,Ct.y):mt.setSize(Lr(Ct.x),Lr(Ct.y));const ft=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(nt),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const xt=x.toneMapping;x.toneMapping=Mn,Gi(M,F,B),y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt);let Tt=!1;for(let Nt=0,At=P.length;Nt<At;Nt++){const Rt=P[Nt],te=Rt.object,Te=Rt.geometry,ae=Rt.material,je=Rt.group;if(ae.side===sn&&te.layers.test(B.layers)){const Zt=ae.side;ae.side=Ee,ae.needsUpdate=!0,jr(te,F,B,Te,ae,je),ae.side=Zt,ae.needsUpdate=!0,Tt=!0}}Tt===!0&&(y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt)),x.setRenderTarget(ft),x.setClearColor(nt,R),x.toneMapping=xt}function Gi(M,P,F){const B=P.isScene===!0?P.overrideMaterial:null;for(let I=0,ot=M.length;I<ot;I++){const ft=M[I],xt=ft.object,Tt=ft.geometry,Nt=B===null?ft.material:B,At=ft.group;xt.layers.test(F.layers)&&jr(xt,P,F,Tt,Nt,At)}}function jr(M,P,F,B,I,ot){M.onBeforeRender(x,P,F,B,I,ot),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(x,P,F,B,M,ot),I.transparent===!0&&I.side===sn&&I.forceSinglePass===!1?(I.side=Ee,I.needsUpdate=!0,x.renderBufferDirect(F,P,B,I,M,ot),I.side=Tn,I.needsUpdate=!0,x.renderBufferDirect(F,P,B,I,M,ot),I.side=sn):x.renderBufferDirect(F,P,B,I,M,ot),M.onAfterRender(x,P,F,B,I,ot)}function Vi(M,P,F){P.isScene!==!0&&(P=yt);const B=Ut.get(M),I=p.state.lights,ot=p.state.shadowsArray,ft=I.state.version,xt=dt.getParameters(M,I.state,ot,P,F),Tt=dt.getProgramCacheKey(xt);let Nt=B.programs;B.environment=M.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||B.environment),Nt===void 0&&(M.addEventListener("dispose",st),Nt=new Map,B.programs=Nt);let At=Nt.get(Tt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===ft)return Jr(M,xt),At}else xt.uniforms=dt.getUniforms(M),M.onBuild(F,xt,x),M.onBeforeCompile(xt,x),At=dt.acquireProgram(xt,Tt),Nt.set(Tt,At),B.uniforms=xt.uniforms;const Rt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=It.uniform),Jr(M,xt),B.needsLights=Yl(M),B.lightsStateVersion=ft,B.needsLights&&(Rt.ambientLightColor.value=I.state.ambient,Rt.lightProbe.value=I.state.probe,Rt.directionalLights.value=I.state.directional,Rt.directionalLightShadows.value=I.state.directionalShadow,Rt.spotLights.value=I.state.spot,Rt.spotLightShadows.value=I.state.spotShadow,Rt.rectAreaLights.value=I.state.rectArea,Rt.ltc_1.value=I.state.rectAreaLTC1,Rt.ltc_2.value=I.state.rectAreaLTC2,Rt.pointLights.value=I.state.point,Rt.pointLightShadows.value=I.state.pointShadow,Rt.hemisphereLights.value=I.state.hemi,Rt.directionalShadowMap.value=I.state.directionalShadowMap,Rt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Rt.spotShadowMap.value=I.state.spotShadowMap,Rt.spotLightMatrix.value=I.state.spotLightMatrix,Rt.spotLightMap.value=I.state.spotLightMap,Rt.pointShadowMap.value=I.state.pointShadowMap,Rt.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Zr(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=xs.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Jr(M,P){const F=Ut.get(M);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Xl(M,P,F,B,I){P.isScene!==!0&&(P=yt),y.resetTextureUnits();const ot=P.fog,ft=B.isMeshStandardMaterial?P.environment:null,xt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hn,Tt=(B.isMeshStandardMaterial?N:v).get(B.envMap||ft),Nt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,At=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!F.morphAttributes.position,te=!!F.morphAttributes.normal,Te=!!F.morphAttributes.color;let ae=Mn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=x.toneMapping);const je=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=je!==void 0?je.length:0,Ot=Ut.get(B),Fs=p.state.lights;if(X===!0&&(at===!0||M!==S)){const Ce=M===S&&B.id===q;It.setState(B,M,Ce)}let Qt=!1;B.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Fs.state.version||Ot.outputColorSpace!==xt||I.isBatchedMesh&&Ot.batching===!1||!I.isBatchedMesh&&Ot.batching===!0||I.isInstancedMesh&&Ot.instancing===!1||!I.isInstancedMesh&&Ot.instancing===!0||I.isSkinnedMesh&&Ot.skinning===!1||!I.isSkinnedMesh&&Ot.skinning===!0||I.isInstancedMesh&&Ot.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ot.instancingColor===!1&&I.instanceColor!==null||Ot.envMap!==Tt||B.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==It.numPlanes||Ot.numIntersection!==It.numIntersection)||Ot.vertexAlphas!==Nt||Ot.vertexTangents!==At||Ot.morphTargets!==Rt||Ot.morphNormals!==te||Ot.morphColors!==Te||Ot.toneMapping!==ae||wt.isWebGL2===!0&&Ot.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,Ot.__version=B.version);let An=Ot.currentProgram;Qt===!0&&(An=Vi(B,P,I));let Qr=!1,Ti=!1,Os=!1;const he=An.getUniforms(),Cn=Ot.uniforms;if(ut.useProgram(An.program)&&(Qr=!0,Ti=!0,Os=!0),B.id!==q&&(q=B.id,Ti=!0),Qr||S!==M){he.setValue(U,"projectionMatrix",M.projectionMatrix),he.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ce=he.map.cameraPosition;Ce!==void 0&&Ce.setValue(U,Pt.setFromMatrixPosition(M.matrixWorld)),wt.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&he.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ti=!0,Os=!0)}if(I.isSkinnedMesh){he.setOptional(U,I,"bindMatrix"),he.setOptional(U,I,"bindMatrixInverse");const Ce=I.skeleton;Ce&&(wt.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),he.setValue(U,"boneTexture",Ce.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(he.setOptional(U,I,"batchingTexture"),he.setValue(U,"batchingTexture",I._matricesTexture,y));const Bs=F.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&wt.isWebGL2===!0)&&kt.update(I,F,An),(Ti||Ot.receiveShadow!==I.receiveShadow)&&(Ot.receiveShadow=I.receiveShadow,he.setValue(U,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Cn.envMap.value=Tt,Cn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Ti&&(he.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&ql(Cn,Os),ot&&B.fog===!0&&rt.refreshFogUniforms(Cn,ot),rt.refreshMaterialUniforms(Cn,B,W,z,mt),xs.upload(U,Zr(Ot),Cn,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(U,Zr(Ot),Cn,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&he.setValue(U,"center",I.center),he.setValue(U,"modelViewMatrix",I.modelViewMatrix),he.setValue(U,"normalMatrix",I.normalMatrix),he.setValue(U,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ce=B.uniformsGroups;for(let ks=0,Kl=Ce.length;ks<Kl;ks++)if(wt.isWebGL2){const ta=Ce[ks];Gt.update(ta,An),Gt.bind(ta,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function ql(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Yl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,P,F){Ut.get(M.texture).__webglTexture=P,Ut.get(M.depthTexture).__webglTexture=F;const B=Ut.get(M);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,P){const F=Ut.get(M);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,F=0){A=M,L=P,C=F;let B=!0,I=null,ot=!1,ft=!1;if(M){const Tt=Ut.get(M);Tt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Tt.__webglFramebuffer===void 0?y.setupRenderTarget(M):Tt.__hasExternalTextures&&y.rebindTextures(M,Ut.get(M.texture).__webglTexture,Ut.get(M.depthTexture).__webglTexture);const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);const At=Ut.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[P])?I=At[P][F]:I=At[P],ot=!0):wt.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?I=Ut.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?I=At[F]:I=At,T.copy(M.viewport),k.copy(M.scissor),K=M.scissorTest}else T.copy(j).multiplyScalar(W).floor(),k.copy(Q).multiplyScalar(W).floor(),K=lt;if(ut.bindFramebuffer(U.FRAMEBUFFER,I)&&wt.drawBuffers&&B&&ut.drawBuffers(M,I),ut.viewport(T),ut.scissor(k),ut.setScissorTest(K),ot){const Tt=Ut.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,Tt.__webglTexture,F)}else if(ft){const Tt=Ut.get(M.texture),Nt=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,F||0,Nt)}q=-1},this.readRenderTargetPixels=function(M,P,F,B,I,ot,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){ut.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Tt=M.texture,Nt=Tt.format,At=Tt.type;if(Nt!==Ve&&ht.convert(Nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=At===cn&&(_t.has("EXT_color_buffer_half_float")||wt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(At!==Sn&&ht.convert(At)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===vn&&(wt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&F>=0&&F<=M.height-I&&U.readPixels(P,F,B,I,ht.convert(Nt),ht.convert(At),ot)}finally{const Tt=A!==null?Ut.get(A).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,P,F=0){const B=Math.pow(2,-F),I=Math.floor(P.image.width*B),ot=Math.floor(P.image.height*B);y.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,M.x,M.y,I,ot),ut.unbindTexture()},this.copyTextureToTexture=function(M,P,F,B=0){const I=P.image.width,ot=P.image.height,ft=ht.convert(F.format),xt=ht.convert(F.type);y.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,M.x,M.y,I,ot,ft,xt,P.image.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,ft,P.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,M.x,M.y,ft,xt,P.image),B===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(M,P,F,B,I=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ot=M.max.x-M.min.x+1,ft=M.max.y-M.min.y+1,xt=M.max.z-M.min.z+1,Tt=ht.convert(B.format),Nt=ht.convert(B.type);let At;if(B.isData3DTexture)y.setTexture3D(B,0),At=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),At=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Rt=U.getParameter(U.UNPACK_ROW_LENGTH),te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Te=U.getParameter(U.UNPACK_SKIP_PIXELS),ae=U.getParameter(U.UNPACK_SKIP_ROWS),je=U.getParameter(U.UNPACK_SKIP_IMAGES),Zt=F.isCompressedTexture?F.mipmaps[I]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(At,I,P.x,P.y,P.z,ot,ft,xt,Tt,Nt,Zt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(At,I,P.x,P.y,P.z,ot,ft,xt,Tt,Zt.data)):U.texSubImage3D(At,I,P.x,P.y,P.z,ot,ft,xt,Tt,Nt,Zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),U.pixelStorei(U.UNPACK_SKIP_ROWS,ae),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je),I===0&&B.generateMipmaps&&U.generateMipmap(At),ut.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),ut.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,ut.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zr?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===Rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===le?yn:nl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===yn?le:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sm extends Tl{}sm.prototype.isWebGL1Renderer=!0;class rm extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class am{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ge=new D;class ws{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ws(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xe extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ii;const Ri=new D,si=new D,ri=new D,ai=new St,Pi=new St,bl=new ne,ds=new D,Li=new D,fs=new D,So=new St,_r=new St,yo=new St;class Ke extends Me{constructor(t=new Xe){if(super(),this.isSprite=!0,this.type="Sprite",ii===void 0){ii=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new am(e,5);ii.setIndex([0,1,2,0,2,3]),ii.setAttribute("position",new ws(n,3,0,!1)),ii.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=ii,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),si.setFromMatrixScale(this.matrixWorld),bl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ri.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ps(ds.set(-.5,-.5,0),ri,o,si,i,r),ps(Li.set(.5,-.5,0),ri,o,si,i,r),ps(fs.set(.5,.5,0),ri,o,si,i,r),So.set(0,0),_r.set(1,0),yo.set(1,1);let a=t.ray.intersectTriangle(ds,Li,fs,!1,Ri);if(a===null&&(ps(Li.set(-.5,.5,0),ri,o,si,i,r),_r.set(0,1),a=t.ray.intersectTriangle(ds,fs,Li,!1,Ri),a===null))return;const l=t.ray.origin.distanceTo(Ri);l<t.near||l>t.far||e.push({distance:l,point:Ri.clone(),uv:De.getInterpolation(Ri,ds,Li,fs,So,_r,yo,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ps(s,t,e,n,i,r){ai.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Pi.x=r*ai.x-i*ai.y,Pi.y=i*ai.x+r*ai.y):Pi.copy(ai),s.copy(t),s.x+=Pi.x,s.y+=Pi.y,s.applyMatrix4(bl)}class wl extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eo=new ne,Ur=new ll,ms=new Ps,gs=new D;class om extends Me{constructor(t=new Oe,e=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=r,t.ray.intersectsSphere(ms)===!1)return;Eo.copy(i).invert(),Ur.copy(t.ray).applyMatrix4(Eo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,g=m;_<g;_++){const p=c.getX(_);gs.fromBufferAttribute(u,p),To(gs,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m;_<g;_++)gs.fromBufferAttribute(u,_),To(gs,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function To(s,t,e,n,i,r,o){const a=Ur.distanceSqToPoint(s);if(a<e){const l=new D;Ur.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class wn extends xe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wr extends Oe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,m=new D,_=new St;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const f=r+p/n*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const p=g*(n+1);for(let f=0;f<n;f++){const E=f+p,x=E,w=E+n+1,L=E+n+2,C=E+1;a.push(x,w,C),a.push(w,L,C)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}const bo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class lm{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const cm=new lm;class Xr{constructor(t){this.manager=t!==void 0?t:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";class hm extends Xr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=bo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ni("img");function l(){h(),bo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class um extends Xr{constructor(t){super(t)}load(t,e,n,i){const r=new xe,o=new hm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class dm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);const Al={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ki{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fm=new Gr(-1,1,1,-1,0,1);class pm extends Oe{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}const mm=new pm;class Cl{constructor(t){this._mesh=new ye(mm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gm extends ki{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bs.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Cl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ao extends ki{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class _m extends ki{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gm(Al),this.copyPass.material.blending=ln,this.clock=new dm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ao!==void 0&&(o instanceof Ao?n=!0:o instanceof _m&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xm extends ki{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Mm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gi extends ki{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new We(r,o,{type:cn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new We(r,o,{type:cn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=Mm;this.highPassUniforms=bs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new St(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Al;this.copyUniforms=bs.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new bn,this.fsQuad=new Cl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=gi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}gi.BlurDirectionX=new St(1,0);gi.BlurDirectionY=new St(0,1);const Sm=new um;function ym(s){if(typeof s!="string"||s.startsWith("http://")||s.startsWith("https://"))return s;const t=typeof window<"u"?window.location.origin:"",n=(typeof import.meta<"u"&&"/game/"||"").replace(/\/$/,""),i=s.startsWith("/")?s:"/"+s;return t+n+i}function Em(s){const t=ym(s);return new Promise((e,n)=>{Sm.load(t,i=>{i&&(i.flipY=!0,i.colorSpace!==void 0?i.colorSpace=le:i.encoding!==void 0&&(i.encoding=yn)),e(i)},void 0,i=>{console.warn("[AssetLoader] 加载失败:",s,t,i),n(i)})})}class Tm{constructor(){this.textures=new Map,this.promises=new Map}loadTexture(t){if(this.textures.has(t))return Promise.resolve(this.textures.get(t));if(this.promises.has(t))return this.promises.get(t);const e=Em(t).then(n=>(this.textures.set(t,n),n)).catch(n=>{console.warn("[AssetLoader] 使用占位图:",t,n);const i=document.createElement("canvas");i.width=64,i.height=64,i.getContext("2d").clearRect(0,0,64,64);const o=new wn(i);return o.transparent=!0,this.textures.set(t,o),o});return this.promises.set(t,e),e}getTexture(t){return this.textures.get(t)||null}async loadTextures(t){const e=await Promise.all(t.map(n=>this.loadTexture(n)));return Object.fromEntries(t.map((n,i)=>[n,e[i]]))}createSpriteMaterial(t,e={}){const{width:n,height:i,...r}=e,o=this.getTexture(t);if(!o){const a=document.createElement("canvas");a.width=n||64,a.height=i||64;const l=a.getContext("2d");l.fillStyle="#333",l.fillRect(0,0,a.width,a.height);const c=new wn(a),h=new Xe({map:c,transparent:!0,opacity:0,alphaTest:.99,depthTest:!0,depthWrite:!1,...r});return this.loadTexture(t).then(u=>{h.map===c&&(h.map=u,c.dispose())}),h}return new Xe({map:o,transparent:!0,alphaTest:.05,depthTest:!0,depthWrite:!1,...r})}async createSpriteMaterialAsync(t,e={}){const{width:n,height:i,...r}=e,o=await this.loadTexture(t);return new Xe({map:o,transparent:!0,alphaTest:.05,depthTest:!0,depthWrite:!1,...r})}dispose(){this.textures.forEach(t=>t.dispose&&t.dispose()),this.textures.clear(),this.promises.clear()}}class bm{constructor(){this.keys={},this.axis={x:0,y:0},this.joystickAxis={x:0,y:0},this._joyEl=null,this._touchId=null,this._touchContainer=null,this._touchSetup=!1,this._touchStartX=0,this._touchStartY=0,this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}_onKeyDown(t){this.keys[t.code]=!0,this._updateAxis()}_onKeyUp(t){this.keys[t.code]=!1,this._updateAxis()}_updateAxis(){let t=0,e=0;(this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1),this.axis.x=Math.max(-1,Math.min(1,t)),this.axis.y=Math.max(-1,Math.min(1,e))}_onTouchStart(t){if(this._touchId!=null)return;const e=t.changedTouches[0];this._touchId=e.identifier,this._touchStartX=e.clientX,this._touchStartY=e.clientY}_onTouchMove(t){if(this._touchId==null)return;const e=Array.from(t.touches).find(a=>a.identifier===this._touchId);if(!e)return;t.preventDefault();const n=80;let i=(e.clientX-this._touchStartX)/n,r=(e.clientY-this._touchStartY)/n;const o=Math.sqrt(i*i+r*r)||1;o>1&&(i/=o,r/=o),this.joystickAxis.x=i,this.joystickAxis.y=-r}_onTouchEnd(t){Array.from(t.changedTouches).find(n=>n.identifier===this._touchId)&&(this._touchId=null,this.joystickAxis.x=0,this.joystickAxis.y=0)}_setupTouch(t){!t||this._touchSetup||(this._touchSetup=!0,this._touchContainer=t,t.addEventListener("touchstart",this._onTouchStart,{passive:!0}),t.addEventListener("touchmove",this._onTouchMove,{passive:!1}),t.addEventListener("touchend",this._onTouchEnd,{passive:!0}),t.addEventListener("touchcancel",this._onTouchEnd,{passive:!0}))}start(t){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),t&&("ontouchstart"in window||navigator.maxTouchPoints>0)&&this._setupTouch(t)}stop(){var t;window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),(t=this._joyEl)!=null&&t.parentNode&&this._joyEl.parentNode.removeChild(this._joyEl),this._joyEl=null,this._touchContainer&&(this._touchContainer.removeEventListener("touchstart",this._onTouchStart),this._touchContainer.removeEventListener("touchmove",this._onTouchMove),this._touchContainer.removeEventListener("touchend",this._onTouchEnd),this._touchContainer.removeEventListener("touchcancel",this._onTouchEnd)),this._touchContainer=null,this._touchId=null,this.keys={},this.axis={x:0,y:0},this.joystickAxis={x:0,y:0}}getAxis(){const t=this.joystickAxis;return Math.abs(t.x)>.1||Math.abs(t.y)>.1?{x:t.x,y:t.y}:(this._updateAxis(),{...this.axis})}isKeyDown(t){return!!this.keys[t]}}class wm{static circleCircle(t,e,n,i,r,o){const a=i-t,l=r-e;return Math.sqrt(a*a+l*l)<=n+o}static pointCircle(t,e,n,i,r){const o=t-n,a=e-i;return o*o+a*a<=r*r}static circleRect(t,e,n,i,r,o,a){const l=Math.max(i,Math.min(t,i+o)),c=Math.max(r,Math.min(e,r+a)),h=t-l,u=e-c;return h*h+u*u<=n*n}static rectRect(t,e,n,i,r,o,a,l){return t<r+a&&t+n>r&&e<o+l&&e+i>o}static circlePushOut(t,e,n,i,r,o){const a=i-t,l=r-e,c=Math.sqrt(a*a+l*l);if(c<1e-6)return{x:0,y:0};const h=n+o-c;if(h<=0)return{x:0,y:0};const u=a/c,d=l/c;return{x:-u*h,y:-d*h}}}class Rl{constructor(t,e=.1){this.frames=t||[],this.speed=e,this.currentFrame=0,this.timer=0,this.playing=!0,this.loop=!0,this.onComplete=null}update(t,e){!e||!this.frames.length||(this.timer+=t,this.timer>=this.speed&&(this.currentFrame++,this.currentFrame>=this.frames.length&&(this.loop?this.currentFrame=0:(this.currentFrame=this.frames.length-1,this.playing=!1,this.onComplete&&this.onComplete())),this.playing&&this.frames[this.currentFrame]&&(e.map=this.frames[this.currentFrame]),this.timer=0))}setFrames(t){this.frames=t||[],this.currentFrame=0,this.timer=0}playOnce(t,e){this.setFrames(t||this.frames),this.loop=!1,this.playing=!0,this.onComplete=e||null}playLoop(t){this.setFrames(t||this.frames),this.loop=!0,this.playing=!0}}class Am{constructor(t={}){this.position={x:0,y:0},this.velocity={x:0,y:0},this.speed=this.baseSpeed??180,this.radius=t.radius??24,this.baseMaxHp=t.maxHp??100,this.baseSpeed=t.speed??180,this.maxHp=this.baseMaxHp,this.hp=this.maxHp,this.exp=0,this.level=1,this.expToNext=this._nextLevelExp(1),this.damageMultiplier=1,this.attackSpeedMultiplier=1,this.speedMultiplierFromClass=1,this.damageTakenMultiplier=1,this.sprite=null,this.mesh=new xn,this.classInstance=null,this.game=null,this.invincibleUntil=0,this.invincibleDuration=.08,this.idleTexture=null,this.attackFrames=[],this.animator=null,this.playingAttack=!1}_getAttackFramePaths(){var o,a,l;const t="/assets/characters/",e={warrior:{name:"warrior_attack_frame",count:5},mage:{name:"mage_attack_frame",count:5},summoner:{name:"summoner_cast_frame",count:5}},n=((l=(a=(o=this.classInstance)==null?void 0:o.constructor)==null?void 0:a.name)==null?void 0:l.toLowerCase())??"warrior",{name:i,count:r}=e[n]??e.warrior;return Array.from({length:r},(c,h)=>`${t}${i}${h+1}.png`)}_getAttackFrameUrls(){var e;const t=(e=this.classInstance)==null?void 0:e.frameUrls;return Array.isArray(t)&&t.length>0?t:null}setGame(t){this.game=t}setClass(t){this.classInstance=t,t&&t.applyToPlayer(this)}applyCultivationBonus(t){t&&(this.baseMaxHp+=t.maxHp??0,this.maxHp=Math.floor(this.baseMaxHp*(1+(this.level-1)*.08)),this.hp=Math.min(this.hp,this.maxHp),this.damageMultiplier+=t.attack??0,this.attackSpeedMultiplier+=t.attackSpeed??0)}async createSprite(t){var a;const e=((a=this.classInstance)==null?void 0:a.spritePath)??"/assets/characters/warrior_idle.png",n=await t.loadTexture(e),i=this._getAttackFrameUrls();let r;if(i)r=await Promise.all(i.map(l=>t.loadTexture(l)));else{const l=this._getAttackFramePaths();r=l.length?await Promise.all(l.map(c=>t.loadTexture(c))):[]}const o=new Xe({map:n,transparent:!0,alphaTest:.05,depthTest:!0,depthWrite:!1});return this.sprite=new Ke(o),this.sprite.scale.set(64,64,1),this.mesh.add(this.sprite),this.idleTexture=n,this.attackFrames=r.length?r:[n],this.animator=new Rl(this.attackFrames,.08),this.mesh}playAttackAnimation(){var t;!((t=this.attackFrames)!=null&&t.length)||this.attackFrames.length===1||(this.playingAttack=!0,this.animator.playOnce(this.attackFrames,()=>{var e;this.playingAttack=!1,(e=this.sprite)!=null&&e.material&&this.idleTexture&&(this.sprite.material.map=this.idleTexture)}))}takeDamage(t){var r,o,a;if(((r=this.game)==null?void 0:r.time)<this.invincibleUntil)return;const e=this.damageTakenMultiplier??1;let n=t*e;const i=this.shieldHp??0;if(i>0&&n>0){const l=Math.min(i,n);this.shieldHp=i-l,n-=l}n>0&&(this.hp=Math.max(0,this.hp-n)),this.invincibleUntil=(((o=this.game)==null?void 0:o.time)??0)+this.invincibleDuration,n>0&&((a=this.game)!=null&&a.onPlayerHit)&&this.game.onPlayerHit()}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}_nextLevelExp(t){return Math.max(1,Math.floor(20*Math.pow(t,1.5)))}_applyLevelScaling(){const t=this.level;this.maxHp=Math.floor(this.baseMaxHp*(1+(t-1)*.08)),this.hp=Math.min(this.hp,this.maxHp),this.speed=this.baseSpeed*(1+(t-1)*.02)*(this.speedMultiplierFromClass??1),this.damageMultiplier=1+(t-1)*.05,this.attackSpeedMultiplier=1+(t-1)*.02}addExp(t){var n,i;const e=((n=this.game)==null?void 0:n.expGainMultiplier)??1;for(this.exp+=t*e;this.exp>=this.expToNext;)this.exp-=this.expToNext,this.level++,this.expToNext=this._nextLevelExp(this.level),this._applyLevelScaling(),this.hp=Math.min(this.maxHp,this.hp+Math.floor(this.maxHp*.2)),(i=this.game)!=null&&i.onLevelUp&&this.game.onLevelUp(this)}update(t,e){const n=e.getAxis();this.velocity.x=n.x*this.speed,this.velocity.y=n.y*this.speed,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.mesh.position.set(this.position.x,this.position.y,0),this.animator&&this.playingAttack&&this.animator.update(t,this.sprite.material),this.classInstance&&this.classInstance.update&&this.classInstance.update(t,this)}getCollisionRadius(){return this.radius}isAlive(){return this.hp>0}dispose(){var t,e,n;(e=(t=this.sprite)==null?void 0:t.material)!=null&&e.map&&this.sprite.material.map.dispose(),(n=this.sprite)!=null&&n.material&&this.sprite.material.dispose()}}const Cm={zombie:"basicZombie",fast_zombie:"fastGhoul",tank_zombie:"tankBrute",default:"basicZombie"},Rm="https://fc-mp-9f563f1a-6c3a-4b50-a88f-3418f67174bd.next.bspapp.com/http/getGameData";let ci=null,vr=null;async function Pl(){return ci||(vr||(vr=(async()=>{const s=await fetch(Rm,{method:"GET"});if(!s.ok)throw new Error(`Failed to load game data: HTTP ${s.status}`);const t=await s.json(),e=t.data||t;return ci={classes:e.classes||{},enemies:e.enemies||{},summons:e.summons||{},difficulty:e.difficulty||{},rewards:e.rewards||{},levels:e.levels||{}},ci})()),vr)}function Fe(){if(!ci)throw new Error("Game data not initialized. Call initGameData() before accessing configs.");return ci}function _i(s){return Fe().classes[s]??null}function Pm(s){const t=Cm[s]||s;return Fe().enemies[t]??Fe().enemies.basicZombie}function Co(s){return s==="global"?Fe().summons.global??null:Fe().summons[s]??null}function Lm(){return Fe().rewards}function Dm(){return Fe().levels}function Ll(s){const t=Fe().levels;return!t||!Array.isArray(t.chapters)?null:t.chapters.find(e=>e.id===s)??null}function Um(){Fe().enemies}const Ro=55;function Ir(s){return Pm(s)}class Dl{constructor(t="basicZombie",e={}){const n={...Ir(t),...e};this.type=t,this.config=n,this.position={x:0,y:0},this.velocity={x:0,y:0};const i=n.moveSpeed??n.speed??1;this.speed=i*Ro,this.radius=n.radius??20,this.maxHp=n.maxHealth??n.maxHP??40,this.hp=this.maxHp,this.damage=n.attackDamage??n.attack??5,this.attackCooldown=n.attackCooldown??.6,this.lastAttackTime=-1e9,this.expDrop=n.expReward??n.exp??5,this.shieldHp=n.shieldAmount??0,this.slowOnHit=n.slowOnHit??!1,this.slowDuration=n.slowDuration??1.5,this.slowFactor=n.slowFactor??.5,this.sprite=null,this.mesh=new xn,this.game=null,this.healthBar=null,this.idleTexture=null,this.attackFrames=[],this.animator=null,this.playingAttack=!1,this.attackAnimCooldown=0,this.attackInterval=.6,this.hitFlashUntil=0,this.knockbackUntil=0,this.knockbackVx=0,this.knockbackVy=0}_getAttackFramePaths(){const t=this.config.attackFrameBase??"/assets/enemies/zombie_attack_frame",e=this.config.attackFrameCount??4;return Array.from({length:e},(n,i)=>`${t}${i+1}.png`)}setGame(t){this.game=t;const e=t==null?void 0:t.difficultyMultipliers;e&&(this.maxHp=Math.max(1,Math.floor(this.maxHp*e.enemyHealthMultiplier)),this.hp=this.maxHp,this.damage*=e.enemyDamageMultiplier),this.shieldHp=this.config.shieldAmount??0}async init(t,e){this.position.x=t.x,this.position.y=t.y;const n=this.config.frameUrls,i=Array.isArray(n)&&n.length>0,r=this.config.spritePath??(i?n[0]:null)??"/assets/enemies/zombie.png",o=await e.loadTexture(r);let a=[];if(i)a=await Promise.all(n.map(c=>e.loadTexture(c)));else{const c=this._getAttackFramePaths();a=c.length?await Promise.all(c.map(h=>e.loadTexture(h))):[]}const l=new Xe({map:o,transparent:!0,alphaTest:.05,depthTest:!0,depthWrite:!1});return this.sprite=new Ke(l),this.sprite.scale.set(48,48,1),this.mesh.add(this.sprite),this.mesh.position.set(this.position.x,this.position.y,0),this.idleTexture=o,this.attackFrames=a.length?a:[o],this.animator=new Rl(this.attackFrames,.1),this._createHealthBar(),this.mesh}reset(t,e){var o;this.type=t;const n={...Ir(t)};this.config=n;const i=n.moveSpeed??n.speed??1;this.speed=i*Ro,this.radius=n.radius??20,this.maxHp=n.maxHealth??n.maxHP??40,this.hp=this.maxHp,this.damage=n.attackDamage??n.attack??5,this.attackCooldown=n.attackCooldown??.6,this.lastAttackTime=-1e9,this.expDrop=n.expReward??n.exp??5,this.shieldHp=n.shieldAmount??0,this.slowOnHit=n.slowOnHit??!1,this.slowDuration=n.slowDuration??1.5,this.slowFactor=n.slowFactor??.5,this.position.x=e.x,this.position.y=e.y,this.velocity.x=0,this.velocity.y=0,this.hitFlashUntil=0,this.knockbackUntil=0;const r=(o=this.game)==null?void 0:o.difficultyMultipliers;r&&(this.maxHp=Math.max(1,Math.floor(this.maxHp*r.enemyHealthMultiplier)),this.hp=this.maxHp,this.damage*=r.enemyDamageMultiplier),this.mesh.position.set(this.position.x,this.position.y,0),this._updateHealthBar()}playAttackAnimation(){var t;!((t=this.attackFrames)!=null&&t.length)||this.attackFrames.length===1||(this.playingAttack=!0,this.animator.playOnce(this.attackFrames,()=>{var e;this.playingAttack=!1,(e=this.sprite)!=null&&e.material&&this.idleTexture&&(this.sprite.material.map=this.idleTexture)}))}_createHealthBar(){const t=document.createElement("canvas");t.width=32,t.height=4;const e=t.getContext("2d");e.fillStyle="#333",e.fillRect(0,0,32,4),e.fillStyle="#0f0",e.fillRect(0,0,32,4);const n=new wn(t),i=new Xe({map:n,transparent:!0,depthTest:!1});this.healthBar=new Ke(i),this.healthBar.scale.set(24,3,1),this.healthBar.position.y=this.radius+4,this.mesh.add(this.healthBar)}_updateHealthBar(){var i,r;if(!((r=(i=this.healthBar)==null?void 0:i.material)!=null&&r.map))return;const t=this.healthBar.material.map.image;if(!t)return;const e=t.getContext("2d");e.fillStyle="#333",e.fillRect(0,0,32,4);const n=this.maxHp>0?this.hp/this.maxHp:0;e.fillStyle=n>.5?"#0f0":n>.25?"#ff0":"#f00",e.fillRect(0,0,32*n,4),this.healthBar.material.map.needsUpdate=!0}takeDamage(t,e=null,n=null,i=!1){var o,a,l;let r=t;if(this.shieldHp>0&&r>0){const c=Math.min(this.shieldHp,r);this.shieldHp-=c,r-=c}if(r>0&&!i&&((o=this.game)!=null&&o._showDamageFloat)&&this.game._showDamageFloat(this.position.x,this.position.y,r,!1),this.hp=Math.max(0,this.hp-r),this.hitFlashUntil=(((a=this.game)==null?void 0:a.time)??0)+.1,e!=null&&n!=null){const c=this.position.x-e,h=this.position.y-n,u=Math.sqrt(c*c+h*h)||1,d=180;this.knockbackVx=c/u*d,this.knockbackVy=h/u*d,this.knockbackUntil=(((l=this.game)==null?void 0:l.time)??0)+.1}this._updateHealthBar()}update(t){var l,c,h,u,d,m;const e=((l=this.game)==null?void 0:l.time)??0;if(this.hitFlashUntil>e&&((h=(c=this.sprite)==null?void 0:c.material)!=null&&h.color)?this.sprite.material.color.setHex(16737894):(d=(u=this.sprite)==null?void 0:u.material)!=null&&d.color&&this.sprite.material.color.setHex(16777215),this.knockbackUntil>e){this.position.x+=this.knockbackVx*t,this.position.y+=this.knockbackVy*t,this.mesh.position.set(this.position.x,this.position.y,0),this._updateHealthBar();return}const n=(m=this.game)==null?void 0:m.player;if(!n||!n.isAlive())return;const i=n.position.x-this.position.x,r=n.position.y-this.position.y,o=Math.sqrt(i*i+r*r)||1;this.velocity.x=i/o*this.speed,this.velocity.y=r/o*this.speed,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.mesh.position.set(this.position.x,this.position.y,0);const a=this.attackInterval/(n.attackSpeedMultiplier??1);this.attackAnimCooldown-=t,o<40&&!this.playingAttack&&this.attackAnimCooldown<=0&&(this.playAttackAnimation(),this.attackAnimCooldown=a),this.animator&&this.playingAttack&&this.animator.update(t,this.sprite.material),this._updateHealthBar()}getCollisionRadius(){return this.radius}isAlive(){return this.hp>0}dispose(){var t,e,n,i,r,o;(e=(t=this.healthBar)==null?void 0:t.material)!=null&&e.map&&this.healthBar.material.map.dispose(),(n=this.healthBar)!=null&&n.material&&this.healthBar.material.dispose(),(r=(i=this.sprite)==null?void 0:i.material)!=null&&r.map&&this.sprite.material.map.dispose(),(o=this.sprite)!=null&&o.material&&this.sprite.material.dispose()}}class Im extends Dl{constructor(t={}){super("boss",t),this.isBoss=!0}async init(t,e){var n,i,r;return await super.init(t,e),this.sprite.scale.set(96,96,1),this.healthBar&&(this.mesh.remove(this.healthBar),(i=(n=this.healthBar.material)==null?void 0:n.map)==null||i.dispose(),(r=this.healthBar.material)==null||r.dispose()),this._createHealthBar(),this.mesh}_createHealthBar(){const t=document.createElement("canvas");t.width=64,t.height=8;const e=t.getContext("2d");e.fillStyle="#333",e.fillRect(0,0,64,8),e.fillStyle="#f0f",e.fillRect(0,0,64,8);const n=new wn(t),i=new Xe({map:n,transparent:!0,depthTest:!1});this.healthBar=new Ke(i),this.healthBar.scale.set(48,6,1),this.healthBar.position.y=this.radius+8,this.mesh.add(this.healthBar)}_updateHealthBar(){var i,r;if(!((r=(i=this.healthBar)==null?void 0:i.material)!=null&&r.map))return;const t=this.healthBar.material.map.image;if(!t)return;const e=t.getContext("2d");e.fillStyle="#333",e.fillRect(0,0,64,8);const n=this.hp/this.maxHp;e.fillStyle=n>.5?"#f0f":n>.25?"#f80":"#f00",e.fillRect(0,0,64*n,8),this.healthBar.material.map.needsUpdate=!0}}const Nm=1.4;class Fm{constructor(t){this.game=t,this.spawnRadius=400,this.lastSpawnTime=0,this.spawnAccum=0}_getSpawnRate(t){var n;const e=((n=this.game)==null?void 0:n.spawnRateMultiplier)??1;return(Nm+t*.05)*e}_getMaxEnemies(t){var i;const e=Math.min(180,56+t*2.1),n=((i=this.game)==null?void 0:i.enemyCountMultiplier)??1;return Math.max(10,Math.floor(e*n))}_getEligibleTypes(t){var i,r;const e=(i=this.game)==null?void 0:i.waveSystem;if((r=e==null?void 0:e.isSurvivalMode)!=null&&r.call(e)){const o=e.getCurrentWave(),a=["basicZombie"];return o>=1&&a.push("fastGhoul","fastRusher"),o>=2&&a.push("slowZombie"),o>=3&&a.push("shieldEnemy"),o>=4&&a.push("tankBrute"),o>=5&&a.push("eliteEnemy"),a}const n=[];return t>=0&&n.push("basicZombie","fastRusher","slowZombie","shieldEnemy"),t>=30&&n.push("fastGhoul"),t>=90&&n.push("tankBrute"),t>=180&&n.push("eliteEnemy"),t>=300&&n.push("boss"),n}_pickType(t){var l,c,h;const e=(l=this.game)==null?void 0:l.waveSystem;if((c=e==null?void 0:e.isSurvivalMode)!=null&&c.call(e)&&e.isBetweenWaves)return null;const n=this._getEligibleTypes(t);if(n.length===0)return"basicZombie";const i=((h=this.game)==null?void 0:h.eliteWeightBonus)??0,r=n.map(u=>{let d=Ir(u).spawnWeight??1;return u==="eliteEnemy"&&i>0&&(d*=1+i),d}),o=r.reduce((u,d)=>u+d,0);let a=Math.random()*o;for(let u=0;u<n.length;u++)if(a-=r[u],a<=0)return n[u];return n[n.length-1]}_randomSpawnPosition(){var i,r;const t=this.game.player,e=Math.random()*Math.PI*2,n=this.spawnRadius;return{x:(((i=t==null?void 0:t.position)==null?void 0:i.x)??0)+Math.cos(e)*n,y:(((r=t==null?void 0:t.position)==null?void 0:r.y)??0)+Math.sin(e)*n}}async trySpawn(t){var a,l,c;const e=(a=this.game)==null?void 0:a.waveSystem;if((l=this.game)!=null&&l.chapterId||(c=e==null?void 0:e.isSurvivalMode)!=null&&c.call(e)&&e.isBetweenWaves)return;const n=t-((e==null?void 0:e.waveStartTime)??t),i=this._getSpawnRate(n),r=this._getMaxEnemies(n);if(this.game.enemies.length>=r)return;this.spawnAccum+=i*(t-this.lastSpawnTime),this.lastSpawnTime=t;const o=Math.floor(this.spawnAccum);this.spawnAccum-=o;for(let h=0;h<o&&!(this.game.enemies.length>=r);h++){const u=this._pickType(n);if(!u)break;const d=this._randomSpawnPosition(),m=await this.game.enemyPool.get(u,d);this.game.scene.add(m.mesh),this.game.enemies.push(m)}}async spawnWave(t){const e=(t==null?void 0:t.enemies)??[{type:"basicZombie",count:5}],n=e.some(r=>r.type==="boss");let i=!1;for(const{type:r="basicZombie",count:o=1}of e){if(!this.game.enemyPool)return;for(let a=0;a<o;a++){const l=this._randomSpawnPosition(),c=await this.game.enemyPool.get(r,l);this.game.scene.add(c.mesh),this.game.enemies.push(c),r==="boss"&&!i&&(i=!0,this.game.audio&&this.game.audio.playSound("assets/audio/sfx_boss_spawn.mp3",{volume:1}))}}n&&this.game.audio&&this.game.audio.playMusic("assets/audio/bgm_boss.mp3",{loop:!0,volume:.7,fadeSeconds:.5})}}class Om{constructor(t){this.game=t,this.wave=0,this.waveStartTime=0,this.waveDuration=45,this.betweenWaveDuration=8,this.bossInterval=10,this.lastBossWave=-1,this.isBetweenWaves=!1,this.betweenWaveEndTime=0,this.onWaveComplete=null,this.chapterId=(t==null?void 0:t.chapterId)??null,this.chapterConfig=this.chapterId?Ll(this.chapterId):null}isSurvivalMode(){var t;return((t=this.game)==null?void 0:t.gameMode)==="survival"}isChapterMode(){return!!this.chapterConfig}getChapterWaveCount(){var t;return this.isChapterMode()?(((t=this.chapterConfig)==null?void 0:t.waves)??[]).length:0}_getCurrentChapterWave(){var n;if(!this.isChapterMode())return null;const t=((n=this.chapterConfig)==null?void 0:n.waves)??[],e=this.wave||1;return t.find(i=>i.index===e)||t[e-1]||null}getWaveConfig(){if(this.isChapterMode()){const r=this._getCurrentChapterWave();return r||{wave:this.wave||1,enemies:[{type:"basicZombie",count:8}]}}const t=this.wave,e=4+Math.floor(t*1.5),n=[{type:"basicZombie",count:Math.max(2,e-2)},{type:"fastGhoul",count:t>=2?1:0},{type:"slowZombie",count:t>=3?1:0},{type:"shieldEnemy",count:t>=4?1:0},{type:"fastRusher",count:t>=5?1:0},{type:"tankBrute",count:t>=6?1:0},{type:"eliteEnemy",count:t>=8&&t%2===0?1:0}].filter(r=>r.count>0);return t>0&&t%this.bossInterval===0&&n.push({type:"boss",count:1}),{wave:t,enemies:n.length?n:[{type:"basicZombie",count:Math.max(2,e)}]}}update(t){var n,i;if(!((i=(n=this.game)==null?void 0:n.player)!=null&&i.isAlive()))return;if(this.isSurvivalMode()||this.isChapterMode()){if(this.isBetweenWaves){t>=this.betweenWaveEndTime&&(this.isBetweenWaves=!1,this.waveStartTime=t);return}const r=this._getCurrentChapterWave(),o=this.isChapterMode()?(r==null?void 0:r.duration)??this.waveDuration:this.waveDuration,a=t-this.waveStartTime,l=this.isChapterMode()&&(this.wave||0)>=1&&(!this.game.enemies||this.game.enemies.length===0);(a>=o||l)&&(this.isBetweenWaves=!0,this.betweenWaveEndTime=t+this.betweenWaveDuration,typeof this.onWaveComplete=="function"&&this.onWaveComplete(this.wave));return}t-this.waveStartTime>=this.waveDuration&&(this.wave++,this.waveStartTime=t)}advanceWave(){this.wave++}getCurrentWave(){return this.wave}shouldSpawn(t){return!this.isSurvivalMode()&&!this.isChapterMode()?!0:!this.isBetweenWaves}}class Bm{constructor(t){this.game=t,this.pool=[],this.active=new Set,this.EnemyClass=t.EnemyClass,this.BossClass=t.BossClass}async get(t,e){const n=t==="boss",i=this.pool.findIndex(a=>a.isBoss&&n||!a.isBoss&&!n);let r=i>=0?this.pool.splice(i,1)[0]:null;if(r)return r.reset(t,e),this.active.add(r),r;const o=n?this.BossClass:this.EnemyClass;return r=new o(t==="boss"?void 0:t),r.setGame(this.game),await r.init(e,this.game.assetLoader),this.active.add(r),r}release(t){this.game.scene.remove(t.mesh),t.reset(t.type,{x:0,y:0}),this.active.delete(t),this.pool.push(t)}releaseAll(){this.active.forEach(t=>{this.game.scene.remove(t.mesh),this.pool.push(t)}),this.active.clear()}}class km{constructor(t){this.game=t,this.options=[],this.panel=null,this.choicesContainer=null}setPanel(t,e){this.panel=t,this.choicesContainer=e}buildOptions(t){const e=[],n=t.classInstance;if(!n)return e;const i=n.skills??[];for(const o of i)o.level<o.maxLevel&&e.push({type:"skill",id:o.id,name:o.name,description:`提升 ${o.name} 等级 (${o.level} -> ${o.level+1})`,apply:()=>{o.levelUp()}});return n.unlockedSummonTypes!=null&&(n.unlockedSummonTypes.includes("fire_wolf")||e.push({type:"summon_unlock",id:"unlock_fire_wolf",name:"解锁火狼",description:"召唤时可出现火狼（近战高攻速）",apply:()=>{n.unlockedSummonTypes.push("fire_wolf")}}),n.unlockedSummonTypes.includes("thunder_bird")||e.push({type:"summon_unlock",id:"unlock_thunder_bird",name:"解锁雷鸟",description:"召唤时可出现雷鸟（闪电链）",apply:()=>{n.unlockedSummonTypes.push("thunder_bird")}}),n.unlockedSummonTypes.includes("stone_golem")||e.push({type:"summon_unlock",id:"unlock_stone_golem",name:"解锁石魔像",description:"召唤时可出现石魔像（高血量坦克）",apply:()=>{n.unlockedSummonTypes.push("stone_golem")}}),e.push({type:"summon_stat",id:"golem_hp",name:"石魔像生命",description:"石魔像生命 +25",apply:()=>{var a;const o=(a=n.skills)==null?void 0:a.find(l=>l.summonHp!=null);o&&(o.config.summonHpPerLevel=(o.config.summonHpPerLevel??0)+25)}}),e.push({type:"summon_stat",id:"plant_range",name:"植物攻击范围",description:"毒藤攻击范围 +15",apply:()=>{var a;const o=(a=n.skills)==null?void 0:a[0];o!=null&&o.config&&(o.config.attackRange=(o.config.attackRange??55)+15)}})),e.push({type:"stat",id:"maxHp",name:"生命提升",description:"最大生命 +15",apply:()=>{t.maxHp+=15,t.hp=Math.min(t.hp+15,t.maxHp)}}),e.push({type:"stat",id:"speed",name:"移速提升",description:"移动速度 +8%",apply:()=>{t.speed*=1.08}}),e.push({type:"stat",id:"damage",name:"伤害提升",description:"全技能伤害 +5%",apply:()=>{(n.skills??[]).forEach(o=>{o.config.damage!=null&&(o.config.damage=(o.config.damage??10)*1.05),o.config.summonDamage!=null&&(o.config.summonDamage=(o.config.summonDamage??5)*1.05)})}}),this.options=this._shuffle(e).slice(0,3),this.options}_shuffle(t){const e=[...t];for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}show(t){this.buildOptions(t),!(!this.panel||!this.choicesContainer)&&(this.choicesContainer.innerHTML="",this.options.forEach(e=>{const n=document.createElement("div");n.className="choice",n.innerHTML=`<strong>${e.name}</strong><br><small>${e.description}</small>`,n.onclick=()=>{e.apply(),this.hide(),this.game&&(this.game.paused=!1)},this.choicesContainer.appendChild(n)}),this.panel.classList.add("visible"))}hide(){this.panel&&this.panel.classList.remove("visible")}_treasurePool(t){const e=this.game,n=Lm();return[{cfg:n.attackBoost,apply:()=>{var r;const i=((r=n.attackBoost)==null?void 0:r.value)??.1;t.damageMultiplier=(t.damageMultiplier||1)*(1+i)}},{cfg:n.attackSpeedBoost,apply:()=>{var r;const i=((r=n.attackSpeedBoost)==null?void 0:r.value)??.1;t.attackSpeedMultiplier=(t.attackSpeedMultiplier||1)*(1+i)}},{cfg:n.maxHealthBoost,apply:()=>{var r;const i=((r=n.maxHealthBoost)==null?void 0:r.value)??20;t.baseMaxHp+=i,t.maxHp+=i,t.hp=Math.min(t.hp+i,t.maxHp)}},{cfg:n.moveSpeedBoost,apply:()=>{var r;const i=((r=n.moveSpeedBoost)==null?void 0:r.value)??.1;t.baseSpeed*=1+i,t.speed=t.baseSpeed*(t.speedMultiplierFromClass??1)}},{cfg:n.areaBoost,apply:()=>{var r;const i=((r=n.areaBoost)==null?void 0:r.value)??.15;t.areaDamageMultiplier=(t.areaDamageMultiplier||1)*(1+i)}},{cfg:n.lifesteal,apply:()=>{var r;const i=((r=n.lifesteal)==null?void 0:r.value)??.05;t.lifestealPercent=(t.lifestealPercent||0)+i*100}},{cfg:n.heal,apply:()=>{var r;const i=((r=n.heal)==null?void 0:r.value)??.4;t.hp=Math.min(t.maxHp,t.hp+Math.floor(t.maxHp*i))}},{cfg:n.shield,apply:()=>{var r;const i=((r=n.shield)==null?void 0:r.value)??30;t.shieldHp=(t.shieldHp||0)+i}},{cfg:n.screenBurst,apply:()=>{var r;const i=((r=n.screenBurst)==null?void 0:r.value)??50;e!=null&&e.getEnemiesInRadius&&(e!=null&&e.player)&&e.getEnemiesInRadius(e.player.position.x,e.player.position.y,9999).forEach(a=>{a.isAlive()&&a.takeDamage(i,e.player.position.x,e.player.position.y,!0)})}}].map(i=>{var r,o;return{name:((r=i.cfg)==null?void 0:r.name)??"",desc:((o=i.cfg)==null?void 0:o.description)??"",apply:i.apply}})}showWaveReward(t,e,n){var c;const i=[{name:"伤害提升(本波)",desc:"本波内伤害 +25%",apply:()=>{t.damageMultiplier=(t.damageMultiplier||1)*1.25}},{name:"治疗",desc:"恢复 30% 最大生命",apply:()=>{t.hp=Math.min(t.maxHp,t.hp+Math.floor(t.maxHp*.3))}},{name:"护盾",desc:"获得 20 点临时护盾",apply:()=>{t.shieldHp=(t.shieldHp||0)+20}},{name:"移速提升(本波)",desc:"本波内移速 +15%",apply:()=>{t.speed*=1.15}}],r=this._shuffle([...i]).slice(0,3),o=document.getElementById("wave-reward-panel"),a=document.getElementById("wave-reward-title"),l=document.getElementById("wave-reward-choices");if(!o||!l){n&&n();return}l.innerHTML="",a&&(a.textContent=`波次 ${e} 完成！选一项奖励`),(c=this.game)!=null&&c.audio&&this.game.audio.playSound("assets/audio/sfx_reward_open.mp3",{volume:.9}),r.forEach(h=>{const u=document.createElement("div");u.className="choice",u.innerHTML=`<strong>${h.name}</strong><br><small>${h.desc}</small>`,u.onclick=()=>{var d;h.apply(),(d=this.game)!=null&&d.audio&&this.game.audio.playSound("assets/audio/sfx_reward_select.mp3",{volume:1}),this.hideWaveReward(),n&&n()},l.appendChild(u)}),o.classList.add("visible")}hideWaveReward(){const t=document.getElementById("wave-reward-panel");t&&t.classList.remove("visible")}showChestReward(t,e,n){var c;const i=this._treasurePool(t),r=this._shuffle([...i]).slice(0,3),o=document.getElementById("chest-reward-panel"),a=document.getElementById("chest-reward-title"),l=document.getElementById("chest-reward-choices");if(!o||!l){n&&n();return}if(l.innerHTML="",(c=this.game)!=null&&c.audio&&this.game.audio.playSound("assets/audio/sfx_reward_open.mp3",{volume:.9}),e){a&&(a.textContent="黄金宝箱奖励"),r.forEach(d=>d.apply());const h=document.createElement("p");h.style.cssText="color:#ffd700;margin:12px 0;",h.textContent="你获得了："+r.map(d=>d.name).join("、"),l.appendChild(h);const u=document.createElement("div");u.className="choice",u.textContent="继续战斗",u.onclick=()=>{var d;(d=this.game)!=null&&d.audio&&this.game.audio.playSound("assets/audio/sfx_reward_select.mp3",{volume:1}),this.hideChestReward(),n&&n()},l.appendChild(u)}else a&&(a.textContent="宝箱开启！选择一项强化"),r.forEach(h=>{const u=document.createElement("div");u.className="choice",u.innerHTML=`<strong>${h.name}</strong><br><small>${h.desc}</small>`,u.onclick=()=>{var d;h.apply(),(d=this.game)!=null&&d.audio&&this.game.audio.playSound("assets/audio/sfx_reward_select.mp3",{volume:1}),this.hideChestReward(),n&&n()},l.appendChild(u)});o.classList.add("visible")}hideChestReward(){const t=document.getElementById("chest-reward-panel");t&&t.classList.remove("visible")}}let As={};function Hm(){const s=Fe().difficulty||{};As=Object.fromEntries(Object.entries(s).map(([t,e])=>{const n=e.enemyHealthMultiplier??e.enemyHpMultiplier??1,i=e.enemyDamageMultiplier??1,r=e.spawnRateMultiplier??e.spawnMultiplier??1;return[t,{...e,enemyHealthMultiplier:n,enemyDamageMultiplier:i,spawnRateMultiplier:r}]}))}const Ul="gecao_difficulty";function zm(){try{const s=localStorage.getItem(Ul);return s==="nightmare"?"hell":As[s]?s:"normal"}catch{return"normal"}}function Il(s){try{localStorage.setItem(Ul,s==="nightmare"?"hell":s)}catch{}}const Gm={BASE_URL:"/game/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};class Vm{constructor(){this.ctx=null,this.initialized=!1,this.bufferCache=new Map,this.musicGain=null,this.sfxGain=null,this.musicSource=null,this.currentMusicUrl=null,this.musicVolume=.6,this.sfxVolume=1}_resolveUrl(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://"))return t;const n=String(typeof import.meta<"u"&&Gm&&"/game/"||"/").replace(/\/$/,""),i=t.startsWith("/")?t:`/${t}`;return`${n}${i}`}_init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createGain(),n=this.ctx.createGain();e.gain.value=this.musicVolume,n.gain.value=this.sfxVolume,e.connect(this.ctx.destination),n.connect(this.ctx.destination),this.musicGain=e,this.sfxGain=n,this.initialized=!0}catch{}}async _ensureContextReady(){if(this._init(),!!this.ctx&&this.ctx.state==="suspended")try{await this.ctx.resume()}catch{}}async _loadBuffer(t){if(!t)return null;const e=this._resolveUrl(t),n=e;if(this.bufferCache.has(n))return this.bufferCache.get(n);if(await this._ensureContextReady(),!this.ctx)return null;try{const r=await(await fetch(e)).arrayBuffer(),o=await this.ctx.decodeAudioData(r);return this.bufferCache.set(n,o),o}catch{return null}}setMusicVolume(t){this.musicVolume=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}async playMusic(t,e={}){if(!t)return;const{loop:n=!0,volume:i,fadeSeconds:r=0}=e;if(await this._ensureContextReady(),!this.ctx||!this.musicGain||this.currentMusicUrl===t&&this.musicSource)return;const o=await this._loadBuffer(t);if(!o)return;if(this.musicSource){try{if(r>0){const l=this.ctx.currentTime,c=this.musicGain.gain,h=c.value;c.cancelScheduledValues(l),c.setValueAtTime(h,l),c.linearRampToValueAtTime(0,l+r),this.musicSource.stop(l+r)}else this.musicSource.stop()}catch{}this.musicSource=null}typeof i=="number"&&this.setMusicVolume(i);const a=this.ctx.createBufferSource();a.buffer=o,a.loop=!!n,a.connect(this.musicGain),a.start(),this.musicSource=a,this.currentMusicUrl=t}stopMusic(t={}){const{fadeSeconds:e=0}=t;if(!(!this.musicSource||!this.ctx||!this.musicGain)){try{const n=this.ctx.currentTime;if(e>0){const i=this.musicGain.gain,r=i.value;i.cancelScheduledValues(n),i.setValueAtTime(r,n),i.linearRampToValueAtTime(0,n+e),this.musicSource.stop(n+e)}else this.musicSource.stop()}catch{}this.musicSource=null,this.currentMusicUrl=null}}async playSound(t,e={}){if(!t)return;const{volume:n,playbackRate:i=1}=e;if(await this._ensureContextReady(),!this.ctx||!this.sfxGain)return;const r=await this._loadBuffer(t);if(!r)return;const o=this.ctx.createBufferSource();o.buffer=r,o.playbackRate.value=i;const a=this.ctx.createGain();a.gain.value=typeof n=="number"?n:this.sfxVolume,o.connect(a),a.connect(this.sfxGain),o.start()}stopAll(){this.stopMusic({fadeSeconds:0})}}const _s=1200,vs=5e-4,Po=.3,Di=600,Wm=80,Lo=.8,Xm=1.3;function qm(s=4096){const t=document.createElement("canvas");t.width=s,t.height=s;const e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data,r=12345,o=(l,c)=>((l*4967+c*7919+r)%2147483647&65535)/65535;for(let l=0;l<s;l++)for(let c=0;c<s;c++){const h=(l*s+c)*4,u=o(c,l)*.4+o(Math.floor(c/32)*32,Math.floor(l/32)*32)*.6,d=.15+u*.25,m=.2+(1-u)*.2,_=Math.floor(40+d*80+m*60),g=Math.floor(45+d*70+m*40),p=Math.floor(30+d*40+m*50);i[h]=_,i[h+1]=g,i[h+2]=p,i[h+3]=255}e.putImageData(n,0,0);const a=new wn(t);return a.wrapS=an,a.wrapT=an,a}class Ym{constructor(t,e){this.scene=t,this.assetLoader=e,this.layer1=null,this.layer2=null,this.groundTexture=null,this.farTexture=null,this.decorPool=[],this.playerRef=null,this._initialized=!1}setPlayerRef(t){this.playerRef=t}async init(t="/assets/background/bg_main.png"){var l;let e=this.assetLoader.getTexture(t);if(!e)try{e=await this.assetLoader.loadTexture(t)}catch{e=null}!e||((l=e.image)==null?void 0:l.width)<2048?e=qm(4096):(e=e.clone(),e.needsUpdate=!0),e.wrapS=an,e.wrapT=an,this.groundTexture=e;const n=e.clone();n.wrapS=an,n.wrapT=an,this.farTexture=n;const i=new bn({map:n,depthWrite:!1,transparent:!0,opacity:.85,color:new Ht(.7,.75,.7)}),r=new Hn(_s*1.5,_s*1.5);this.layer1=new ye(r,i),this.layer1.position.z=-60,n.repeat.set(20,20),this.scene.add(this.layer1);const o=new bn({map:e,depthWrite:!1,transparent:!0,opacity:.98});e.repeat.set(50,50);const a=new Hn(_s,_s);this.layer2=new ye(a,o),this.layer2.position.z=-50,this.scene.add(this.layer2),this._createDecorPool(),this._scatterDecor(),this._initialized=!0}_createDecorPool(){const t=[{color:2762016,w:6,h:5},{color:4011306,w:5,h:6},{color:1714714,w:8,h:3},{color:2433045,w:4,h:7},{color:3484192,w:7,h:4}];for(let e=0;e<Wm;e++){const n=t[e%t.length],i=document.createElement("canvas");i.width=Math.max(16,n.w*4),i.height=Math.max(16,n.h*4);const r=i.getContext("2d");r.fillStyle="#"+n.color.toString(16).padStart(6,"0"),r.fillRect(0,0,i.width,i.height);const o=new wn(i),a=new Xe({map:o,transparent:!0,alphaTest:.15,depthTest:!0}),l=new Ke(a),c=8+Math.random()*14;l.scale.set(c,c,1),this.decorPool.push({mesh:l,baseScale:c,worldX:0,worldY:0})}}_scatterDecor(){const t=Di*20/2,e=new Set;this.decorPool.forEach((n,i)=>{let r=(Math.random()-.5)*t*2,o=(Math.random()-.5)*t*2;const a=Math.floor(r/Di)+","+Math.floor(o/Di);e.has(a)&&(r+=(Math.random()-.5)*Di*.8,o+=(Math.random()-.5)*Di*.8),e.add(a),n.worldX=r,n.worldY=o,n.mesh.rotation.z=Math.random()*Math.PI*2;const l=Lo+Math.random()*(Xm-Lo);n.mesh.scale.set(n.baseScale*l,n.baseScale*l,1),this.scene.add(n.mesh)})}update(t){var i,r,o,a;const e=((r=(i=this.playerRef)==null?void 0:i.position)==null?void 0:r.x)??t.x,n=((a=(o=this.playerRef)==null?void 0:o.position)==null?void 0:a.y)??t.y;this.layer1&&(this.layer1.position.x=t.x,this.layer1.position.y=t.y,this.farTexture.offset.x=e*vs*Po,this.farTexture.offset.y=n*vs*Po),this.layer2&&(this.layer2.position.x=t.x,this.layer2.position.y=t.y,this.groundTexture.offset.x=e*vs,this.groundTexture.offset.y=n*vs),this.decorPool.forEach(l=>{l.mesh.position.x=l.worldX,l.mesh.position.y=l.worldY,l.mesh.position.z=-40})}dispose(){[this.layer1,this.layer2].forEach(t=>{var e,n,i,r;t&&(this.scene.remove(t),(e=t.geometry)==null||e.dispose(),(i=(n=t.material)==null?void 0:n.map)==null||i.dispose(),(r=t.material)==null||r.dispose())}),this.decorPool.forEach(t=>{var e,n,i;this.scene.remove(t.mesh),(n=(e=t.mesh.material)==null?void 0:e.map)==null||n.dispose(),(i=t.mesh.material)==null||i.dispose()}),this.decorPool=[],this.groundTexture=null,this.farTexture=null}}class Km{constructor(t,e,n=!1){this.position={x:t,y:e},this.isGolden=n,this.mesh=null}createMesh(t){if(t!=null&&t.createSpriteMaterial){const o=t.createSpriteMaterial("/assets/chest.png",{width:48,height:48});return this.isGolden&&o.color&&o.color.setHex(16769126),this.mesh=new Ke(o),this.mesh.scale.set(52,52,1),this.mesh.position.set(this.position.x,this.position.y,0),this.mesh}const e=document.createElement("canvas");e.width=32,e.height=32;const n=e.getContext("2d");n.fillStyle=this.isGolden?"#daa520":"#8b4513",n.fillRect(0,0,32,32),n.strokeStyle=this.isGolden?"#ffd700":"#654321",n.lineWidth=2,n.strokeRect(2,2,28,28);const i=new wn(e),r=new Xe({map:i,transparent:!0,alphaTest:.1,depthTest:!0});return this.mesh=new Ke(r),this.mesh.scale.set(40,40,1),this.mesh.position.set(this.position.x,this.position.y,0),this.mesh.position.set(this.position.x,this.position.y,0),this.mesh}getCollisionRadius(){return 28}dispose(){var t,e,n;(e=(t=this.mesh)==null?void 0:t.material)!=null&&e.map&&this.mesh.material.map.dispose(),(n=this.mesh)!=null&&n.material&&this.mesh.material.dispose()}}class $m{constructor(t=24,e=3){this.width=t,this.height=e,this.maxWidth=t,this.mesh=null,this._createMesh()}_createMesh(){const t=new Hn(this.width,this.height),e=new bn({color:0,depthTest:!1,transparent:!0,opacity:.7}),n=new ye(t,e);n.position.z=.02;const i=new Hn(this.width,this.height),r=new bn({color:16729156,depthTest:!1,transparent:!0,opacity:.95});this.fillMesh=new ye(i,r),this.fillMesh.position.z=.03,this.mesh=new xn,this.mesh.add(n),this.mesh.add(this.fillMesh)}setPosition(t,e,n=0){this.mesh.position.set(t,e+n,0)}update(t,e){const n=e>0?Math.max(0,Math.min(1,t/e)):0;this.fillMesh.scale.x=n,this.fillMesh.position.x=-(this.width/2)*(1-n)}dispose(){var t,e;(e=(t=this.mesh)==null?void 0:t.children)==null||e.forEach(n=>{var i,r;(i=n.geometry)==null||i.dispose(),(r=n.material)==null||r.dispose()})}}class Us{constructor(t={}){this.type=t.type||"base",this.position={x:0,y:0},this.hp=t.hp??40,this.maxHp=this.hp,this.damage=t.damage??8,this.defense=t.defense??0,this.attackRange=t.attackRange??55,this.attackCooldown=t.attackCooldown??1,this.attackCooldownRemain=0,this.slowOnHit=t.slowOnHit??!1,this.slowDuration=t.slowDuration??.8,this.slowFactor=t.slowFactor??.7,this.duration=t.duration??18,this.spawnTime=0,this.orbitAngle=0,this.orbitRadius=t.orbitRadius??70,this.orbitSpeed=1.2,this.state="orbit",this.targetEnemy=null,this.mesh=null,this.sprite=null,this.game=null,this.healthBar=new $m(36,5),this.healthBarYOffset=26,this.hitFlashUntil=0,this.deathFadeDuration=.4,this.deathFadeUntil=null}setGame(t){this.game=t}async createMesh(t,e){const n=e||"/assets/characters/summoner_idle.png",i=await t.createSpriteMaterialAsync(n,{width:32,height:32}),r=new Ke(i);return r.scale.set(36,36,1),this.sprite=r,this.mesh=new xn,this.mesh.add(r),this.healthBar.mesh.position.y=this.healthBarYOffset,this.mesh.add(this.healthBar.mesh),this.mesh}takeDamage(t){const n=Math.max(0,(t??0)-(this.defense??0));if(!(n<=0)&&(this.hp=Math.max(0,this.hp-n),this.healthBar.update(this.hp,this.maxHp),this.game)){const i=this.game.time??0;this.hitFlashUntil=i+.12,this.hp<=0&&this.deathFadeUntil==null&&(this.deathFadeUntil=i+this.deathFadeDuration)}}isAlive(){return this.hp>0?!0:!this.game||this.deathFadeUntil==null?!1:(this.game.time??0)<this.deathFadeUntil}update(t){var n,i,r,o;const e=((n=this.game)==null?void 0:n.time)??0;if((r=(i=this.sprite)==null?void 0:i.material)!=null&&r.color&&(this.hitFlashUntil>e?this.sprite.material.color.setHex(16737894):this.sprite.material.color.setHex(16777215)),this.deathFadeUntil!=null&&this.mesh){const a=this.deathFadeUntil-e,l=Math.max(0,Math.min(1,a/this.deathFadeDuration));if((o=this.mesh.children)==null||o.forEach(c=>{c.material&&"opacity"in c.material&&(c.material.opacity=l,c.material.transparent=!0)}),!this.isAlive())return}this.hp<=0||(this.attackCooldownRemain-=t,this.healthBar.update(this.hp,this.maxHp),this.mesh&&this.mesh.position.set(this.position.x,this.position.y,0))}dispose(){var t,e;(t=this.healthBar)==null||t.dispose(),this.mesh&&((e=this.mesh.children)==null||e.forEach(n=>{var i,r,o;(r=(i=n.material)==null?void 0:i.map)==null||r.dispose(),(o=n.material)==null||o.dispose()}))}}let Nr=3;function jm(){const s=Fe().summons||{};Nr=s.global&&s.global.maxSummons||3}function Hi(s){const t=Co(s)??Co("poison_plant");return t?{...t,damage:t.damage??t.attack,attackRange:t.attackRange??t.range}:{}}class Zm extends Us{constructor(t={}){const e=Hi("poison_plant");super({...e,...t,type:"poison_plant",hp:t.hp??e.maxHealth??60,damage:t.damage??e.damage??10,attackRange:t.attackRange??e.attackRange??95,attackCooldown:t.attackCooldown??e.attackCooldown??1.1,duration:t.duration??e.duration??16,defense:t.defense??e.defense??1}),this.poisonDuration=3,this.poisonTick=.5}async createMesh(t){return super.createMesh(t,this.config.spritePath||"/assets/summons/poison_plant.png")}update(t){var i,r,o,a,l,c;if(super.update(t),!this.isAlive()||!this.game)return;const n=(((r=(i=this.game).getEnemiesInRadius)==null?void 0:r.call(i,this.position.x,this.position.y,this.attackRange))??[]).find(h=>h.isAlive());if(this.state==="attacking"&&(!this.targetEnemy||!this.targetEnemy.isAlive())&&(this.state="orbit",this.targetEnemy=null),n&&this.state==="orbit"&&(this.state="attacking",this.targetEnemy=n),this.state==="attacking"&&((o=this.targetEnemy)!=null&&o.isAlive())&&this.attackCooldownRemain<=0){if(this.targetEnemy.takeDamage(this.damage),this.slowOnHit&&this.targetEnemy.speed!=null){const h=(((a=this.targetEnemy.config)==null?void 0:a.moveSpeed)??1)*55;this.targetEnemy.speed,this.targetEnemy.speed=h*this.slowFactor,setTimeout(()=>{var u;((u=this.targetEnemy)==null?void 0:u.speed)!=null&&(this.targetEnemy.speed=h)},(this.slowDuration||.8)*1e3)}this.targetEnemy.poisonStack==null&&(this.targetEnemy.poisonStack=0),this.targetEnemy.poisonStack=Math.min(5,(this.targetEnemy.poisonStack||0)+1),this.targetEnemy.poisonUntil=(this.game.time||0)+this.poisonDuration,this.attackCooldownRemain=this.attackCooldown}if((c=(l=this.game)==null?void 0:l.player)!=null&&c.isAlive()&&this.state==="orbit"){this.orbitAngle+=this.orbitSpeed*t;const h=this.game.player.position.x+Math.cos(this.orbitAngle)*this.orbitRadius,u=this.game.player.position.y+Math.sin(this.orbitAngle)*this.orbitRadius,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1,g=80;this.position.x+=d/_*Math.min(g*t,_),this.position.y+=m/_*Math.min(g*t,_)}}}const Jm=32;class Qm extends Us{constructor(t={}){const e=Hi("fire_wolf");super({...e,...t,type:"fire_wolf",hp:t.hp??e.maxHealth??80,damage:t.damage??e.damage??14,attackRange:t.attackRange??e.attackRange??60,attackCooldown:t.attackCooldown??e.attackCooldown??.45,duration:t.duration??e.duration??15,defense:t.defense??e.defense??2}),this.dashSpeed=200}async createMesh(t){return super.createMesh(t,this.config.spritePath||"/assets/summons/fire_wolf.png")}update(t){var i,r,o,a,l,c;if(super.update(t),!this.isAlive()||!this.game)return;const n=(((r=(i=this.game).getEnemiesInRadius)==null?void 0:r.call(i,this.position.x,this.position.y,this.attackRange))??[]).find(h=>h.isAlive());if(this.state==="attacking"&&(!this.targetEnemy||!this.targetEnemy.isAlive())&&(this.state="orbit",this.targetEnemy=null),n&&this.state==="orbit"&&(this.state="attacking",this.targetEnemy=n),this.state==="attacking"&&((o=this.targetEnemy)!=null&&o.isAlive())){const h=this.targetEnemy.position.x,u=this.targetEnemy.position.y,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1;if(_<=Jm&&this.attackCooldownRemain<=0){if(this.targetEnemy.takeDamage(this.damage),this.slowOnHit&&this.targetEnemy.speed!=null){const p=(((a=this.targetEnemy.config)==null?void 0:a.moveSpeed)??1)*55;this.targetEnemy.speed=p*this.slowFactor,setTimeout(()=>{var f;((f=this.targetEnemy)==null?void 0:f.speed)!=null&&(this.targetEnemy.speed=p)},(this.slowDuration||.8)*1e3)}this.attackCooldownRemain=this.attackCooldown}const g=this.dashSpeed;this.position.x+=d/_*g*t,this.position.y+=m/_*g*t,_>this.attackRange*1.2&&(this.state="orbit",this.targetEnemy=null)}else if((c=(l=this.game)==null?void 0:l.player)!=null&&c.isAlive()&&this.state==="orbit"){this.orbitAngle+=this.orbitSpeed*t;const h=this.game.player.position.x+Math.cos(this.orbitAngle)*this.orbitRadius,u=this.game.player.position.y+Math.sin(this.orbitAngle)*this.orbitRadius,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1,g=140;this.position.x+=d/_*Math.min(g*t,_),this.position.y+=m/_*Math.min(g*t,_)}}}const tg=38;class eg extends Us{constructor(t={}){const e=Hi("stone_golem");super({...e,...t,type:"stone_golem",hp:t.hp??e.maxHealth??140,damage:t.damage??e.damage??8,attackRange:t.attackRange??e.attackRange??50,attackCooldown:t.attackCooldown??e.attackCooldown??1.2,duration:t.duration??e.duration??20,defense:t.defense??e.defense??4}),this.tauntRadius=100}async createMesh(t){return super.createMesh(t,this.config.spritePath||"/assets/summons/stone_golem.png")}update(t){var i,r,o,a,l,c;if(super.update(t),!this.isAlive()||!this.game)return;const n=(((r=(i=this.game).getEnemiesInRadius)==null?void 0:r.call(i,this.position.x,this.position.y,this.attackRange))??[]).find(h=>h.isAlive());if(this.state==="attacking"&&(!this.targetEnemy||!this.targetEnemy.isAlive())&&(this.state="orbit",this.targetEnemy=null),n&&this.state==="orbit"&&(this.state="attacking",this.targetEnemy=n),this.state==="attacking"&&((o=this.targetEnemy)!=null&&o.isAlive())){const h=this.targetEnemy.position.x,u=this.targetEnemy.position.y,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1;if(_<=tg&&this.attackCooldownRemain<=0){if(this.targetEnemy.takeDamage(this.damage),this.slowOnHit&&this.targetEnemy.speed!=null){const p=(((a=this.targetEnemy.config)==null?void 0:a.moveSpeed)??1)*55;this.targetEnemy.speed=p*this.slowFactor,setTimeout(()=>{var f;((f=this.targetEnemy)==null?void 0:f.speed)!=null&&(this.targetEnemy.speed=p)},(this.slowDuration||.8)*1e3)}this.attackCooldownRemain=this.attackCooldown}const g=60;this.position.x+=d/_*g*t,this.position.y+=m/_*g*t,_>this.attackRange*1.3&&(this.state="orbit",this.targetEnemy=null)}else if((c=(l=this.game)==null?void 0:l.player)!=null&&c.isAlive()&&this.state==="orbit"){this.orbitAngle+=this.orbitSpeed*t;const h=this.game.player.position.x+Math.cos(this.orbitAngle)*this.orbitRadius,u=this.game.player.position.y+Math.sin(this.orbitAngle)*this.orbitRadius,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1,g=70;this.position.x+=d/_*Math.min(g*t,_),this.position.y+=m/_*Math.min(g*t,_)}}}const ng=3;class ig extends Us{constructor(t={}){const e=Hi("thunder_bird");super({...e,...t,type:"thunder_bird",hp:t.hp??e.maxHealth??70,damage:t.damage??e.damage??9,attackRange:t.attackRange??e.attackRange??85,attackCooldown:t.attackCooldown??e.attackCooldown??1,duration:t.duration??e.duration??16,defense:t.defense??e.defense??1}),this.chainDamageFactor=.7}async createMesh(t){return super.createMesh(t,this.config.spritePath||"/assets/summons/thunder_bird.png")}update(t){var i,r,o,a,l,c;if(super.update(t),!this.isAlive()||!this.game)return;const n=(((r=(i=this.game).getEnemiesInRadius)==null?void 0:r.call(i,this.position.x,this.position.y,this.attackRange))??[]).find(h=>h.isAlive());if(this.state==="attacking"&&(!this.targetEnemy||!this.targetEnemy.isAlive())&&(this.state="orbit",this.targetEnemy=null),n&&this.state==="orbit"&&(this.state="attacking",this.targetEnemy=n),this.state==="attacking"&&((o=this.targetEnemy)!=null&&o.isAlive())&&this.attackCooldownRemain<=0){const h=new Set;let u=this.targetEnemy,d=this.damage;for(let m=0;m<ng&&(u!=null&&u.isAlive())&&!h.has(u);m++){if(h.add(u),u.takeDamage(d),this.slowOnHit&&u.speed!=null){const g=(((a=u.config)==null?void 0:a.moveSpeed)??1)*55;u.speed=g*this.slowFactor,setTimeout(()=>{(u==null?void 0:u.speed)!=null&&(u.speed=g)},(this.slowDuration||.8)*1e3)}d*=this.chainDamageFactor,u=(this.game.enemies||[]).filter(g=>g.isAlive()&&!h.has(g)).sort((g,p)=>{const f=(g.position.x-u.position.x)**2+(g.position.y-u.position.y)**2,E=(p.position.x-u.position.x)**2+(p.position.y-u.position.y)**2;return f-E})[0]}this.attackCooldownRemain=this.attackCooldown}if((c=(l=this.game)==null?void 0:l.player)!=null&&c.isAlive()&&this.state==="orbit"){this.orbitAngle+=this.orbitSpeed*t;const h=this.game.player.position.x+Math.cos(this.orbitAngle)*this.orbitRadius,u=this.game.player.position.y+Math.sin(this.orbitAngle)*this.orbitRadius,d=h-this.position.x,m=u-this.position.y,_=Math.sqrt(d*d+m*m)||1,g=110;this.position.x+=d/_*Math.min(g*t,_),this.position.y+=m/_*Math.min(g*t,_)}}}class qr{constructor(t={}){this.id=t.id??"skill",this.name=t.name??"Skill",this.cooldown=t.cooldown??1,this.cooldownRemain=0,this.level=t.level??1,this.maxLevel=t.maxLevel??5,this.config=t,this.owner=null}setOwner(t){this.owner=t}getCooldownTotal(){var n;const t=this.config.cooldownPerLevel??0,e=this.cooldown-(this.level-1)*t;return Math.max(.1,e/(((n=this.owner)==null?void 0:n.attackSpeedMultiplier)??1))}canCast(){return this.cooldownRemain<=0&&this.owner}update(t){this.cooldownRemain>0&&(this.cooldownRemain-=t)}cast(){return this.canCast()?(this._doCast(),this.cooldownRemain=this.getCooldownTotal(),!0):!1}_doCast(){}levelUp(){return this.level<this.maxLevel?(this.level++,!0):!1}getValue(t,e=0){const n=this.config[t]??e,i=this.config[`${t}PerLevel`]??0;return n+(this.level-1)*i}}class Do extends qr{constructor(t={}){super(t),this.radius=t.radius??80,this.damage=t.damage??15,this.duration=t.duration??.2,this.game=null}setGame(t){this.game=t}_doCast(){var l,c,h,u,d,m,_;if(!this.owner||!this.game)return;(c=(l=this.owner).playAttackAnimation)==null||c.call(l);const t=this.getValue("radius",80),e=this.getValue("damage",15)*(((h=this.owner)==null?void 0:h.damageMultiplier)??1),{damage:n,isCrit:i}=((d=(u=this.game).applyCrit)==null?void 0:d.call(u,e,this.owner))??{damage:e,isCrit:!1},r=this.owner.position.x,o=this.owner.position.y;this.game.onMeleeHit&&this.game.onMeleeHit(r,o,t,n,this.duration,i),(((_=(m=this.game).getEnemiesInRadius)==null?void 0:_.call(m,r,o,t))??[]).forEach(g=>{g.isAlive()&&(this.game._showDamageFloat&&this.game._showDamageFloat(g.position.x,g.position.y,n,i),g.takeDamage(n,r,o,!0))})}}class Nl{constructor(t={}){const e=_i("warrior")||{};this.spritePath=e.spritePath??"/assets/characters/warrior_idle.png",this.frameUrls=Array.isArray(e.frameUrls)?e.frameUrls:void 0,this.attackSpeedMultiplier=e.attackSpeed??1;const n={id:"warrior_slash",name:"斩击",cooldown:.6,cooldownPerLevel:-.05,radius:70,radiusPerLevel:8,damage:24,damagePerLevel:5,maxLevel:5},i={id:"warrior_whirlwind",name:"旋风斩",cooldown:3,cooldownPerLevel:-.2,radius:100,radiusPerLevel:15,damage:28,damagePerLevel:6,duration:.35,maxLevel:5};this.slash=new Do(t.slash??n),this.whirlwind=new Do(t.whirlwind??i),this.skills=[this.slash,this.whirlwind]}applyToPlayer(t){const e=_i("warrior")||{};e.maxHealth!=null&&(t.baseMaxHp=e.maxHealth,t.maxHp=e.maxHealth,t.hp=e.maxHealth);const n=e.damageReduction??.1;t.damageTakenMultiplier=1-n,t.critRateBonus=e.critChance??.1,t.speedMultiplierFromClass=this.attackSpeedMultiplier,t.speed=t.baseSpeed*(t.speedMultiplierFromClass??1),this.skills.forEach(i=>i.setOwner(t))}setGame(t){this.game=t,this.slash.setGame(t),this.whirlwind.setGame(t)}update(t,e){this.skills.forEach(n=>n.update(t)),this.slash.canCast()&&this.slash.cast(),this.whirlwind.canCast()&&this.whirlwind.cast()}}class Fr extends qr{constructor(t={}){super(t),this.speed=t.speed??400,this.damage=t.damage??20,this.radius=t.radius??12,this.explodeRadius=t.explodeRadius??0,this.slowDuration=t.slowDuration??0,this.slowFactor=t.slowFactor??.5,this.game=null}setGame(t){this.game=t}_doCast(){var n,i,r;if(!this.owner||!this.game)return;(i=(n=this.owner).playAttackAnimation)==null||i.call(n);const t=this._getAimDirection();if(!t)return;const e={x:this.owner.position.x,y:this.owner.position.y,vx:t.x*this.getValue("speed",400),vy:t.y*this.getValue("speed",400),radius:this.radius,damage:this.getValue("damage",20)*(((r=this.owner)==null?void 0:r.damageMultiplier)??1),explodeRadius:this.getValue("explodeRadius",0),slowDuration:this.slowDuration,slowFactor:this.slowFactor,life:2,hit:new Set};this.game.addProjectile&&this.game.addProjectile(e)}_getAimDirection(){var a,l;const t=((l=(a=this.game)==null?void 0:a.getEnemiesInRadius)==null?void 0:l.call(a,this.owner.position.x,this.owner.position.y,400))??[];if(t.length===0)return{x:1,y:0};let e=null,n=1/0;for(const c of t){if(!c.isAlive())continue;const h=c.position.x-this.owner.position.x,u=c.position.y-this.owner.position.y,d=h*h+u*u;d<n&&(n=d,e=c)}if(!e)return{x:1,y:0};const i=e.position.x-this.owner.position.x,r=e.position.y-this.owner.position.y,o=Math.sqrt(i*i+r*r)||1;return{x:i/o,y:r/o}}}class sg{constructor(t={}){const e=_i("mage")||{};this.spritePath=e.spritePath??"/assets/characters/mage_idle.png",this.frameUrls=Array.isArray(e.frameUrls)?e.frameUrls:void 0;const n={id:"mage_orb",name:"魔法弹",cooldown:.7,cooldownPerLevel:-.05,speed:380,damage:16,damagePerLevel:4,explodeRadius:50,explodeRadiusPerLevel:10,slowDuration:1.5,slowFactor:.4,maxLevel:5},i={id:"mage_blast",name:"范围爆炸",cooldown:2.5,cooldownPerLevel:-.15,speed:0,damage:30,damagePerLevel:8,explodeRadius:90,explodeRadiusPerLevel:12,maxLevel:5};this.orb=new Fr(t.orb??n),this.blast=new Fr(t.blast??i),this.skills=[this.orb,this.blast]}applyToPlayer(t){const e=_i("mage")||{};e.maxHealth!=null&&(t.baseMaxHp=e.maxHealth,t.maxHp=e.maxHealth,t.hp=e.maxHealth),this.skills.forEach(n=>n.setOwner(t))}setGame(t){this.game=t,this.orb.setGame(t),this.blast.setGame(t)}update(t,e){this.skills.forEach(n=>n.update(t)),this.orb.canCast()&&this.orb.cast(),this.blast.canCast()&&this.blast.cast()}}class rg extends qr{constructor(t={}){super(t),this.summonCount=t.summonCount??1,this.summonHp=t.summonHp??30,this.summonDamage=t.summonDamage??8,this.summonRadius=t.summonRadius??16,this.summonDuration=t.summonDuration??15,this.attackRange=t.attackRange??60,this.attackCooldown=t.attackCooldown??.8,this.game=null}setGame(t){this.game=t}async _doCast(){var r,o,a,l;if(!this.owner||!this.game)return;(o=(r=this.owner).playAttackAnimation)==null||o.call(r);const t=this.config.maxSummonCount??Nr,e=Math.min(t,this.getValue("summonCount",2)),n=((a=this.owner.classInstance)==null?void 0:a.unlockedSummonTypes)??["poison_plant"],i=n.length?n:["poison_plant"];for(let c=0;c<e;c++){const h=i[Math.floor(Math.random()*i.length)]||i[0]||"poison_plant",u=Math.PI*2*c/Math.max(1,e)+Math.random()*.5,d=40+Math.random()*20,m=this.owner.position.x+Math.cos(u)*d,_=this.owner.position.y+Math.sin(u)*d,g=Hi(h),p=this.config.inheritAttackPercent??g.inheritAttackPercent??.2,f=((l=this.owner)==null?void 0:l.damageMultiplier)??1,E=this.getValue("summonDamage",g.damage??10),x={hp:this.getValue("summonHp",g.maxHealth??35),damage:E*(1+p)*f,duration:this.getValue("summonDuration",g.duration??18),attackRange:this.getValue("attackRange",g.attackRange??55),attackCooldown:this.attackCooldown??g.attackCooldown??.8,slowOnHit:this.config.summonSlowOnHit??g.slowOnHit??!1,slowDuration:this.config.summonSlowDuration??g.slowDuration??.8,slowFactor:this.config.summonSlowFactor??g.slowFactor??.7,defense:g.defense??0,spritePath:g.spritePath,frameUrls:Array.isArray(g.frameUrls)?g.frameUrls:void 0};this.game.addSummon&&await this.game.addSummon(h,x,{x:m,y:_},{maxSummonLimit:Nr})}}}class ag{constructor(t={}){const e=_i("summoner")||{};this.spritePath=e.spritePath??"/assets/characters/summoner_idle.png",this.frameUrls=Array.isArray(e.frameUrls)?e.frameUrls:void 0,this.unlockedSummonTypes=["poison_plant"],this.attackSpeedMultiplier=e.attackSpeed??.9;const n={id:"summoner_bolt",name:"灵魂箭",cooldown:1.05,cooldownPerLevel:-.06,speed:350,damage:14,damagePerLevel:2,explodeRadius:0,maxLevel:5},i={id:"summoner_minion",name:"召唤小弟",cooldown:8,cooldownPerLevel:-.5,summonCount:1,summonCountPerLevel:1,maxSummonCount:3,summonHp:35,summonHpPerLevel:8,summonDamage:10,summonDamagePerLevel:2,summonRadius:16,summonDuration:18,attackRange:55,attackCooldown:.56,summonSlowOnHit:!0,summonSlowDuration:.8,summonSlowFactor:.7,maxLevel:5};this.bolt=new Fr(t.bolt??n),this.summon=new rg(t.summon??i),this.skills=[this.bolt,this.summon]}applyToPlayer(t){const e=_i("summoner")||{};e.maxHealth!=null&&(t.baseMaxHp=e.maxHealth,t.maxHp=e.maxHealth,t.hp=e.maxHealth),t.speedMultiplierFromClass=this.attackSpeedMultiplier,t.speed=t.baseSpeed*(t.speedMultiplierFromClass??1),this.skills.forEach(n=>n.setOwner(t))}setGame(t){this.game=t,this.bolt.setGame(t),this.summon.setGame(t)}update(t,e){this.skills.forEach(n=>n.update(t)),this.bolt.canCast()&&this.bolt.cast(),this.summon.canCast()&&this.summon.cast()}}const Uo={poison_plant:Zm,fire_wolf:Qm,stone_golem:eg,thunder_bird:ig},og={warrior:Nl,mage:sg,summoner:ag};class lg{constructor(t,e={}){var h,u;this.container=t,this.time=0,this.enemies=[],this.projectiles=[],this.summons=[],this.particles=[],this.particlePoints=null,this.summonMeshes=new Map,this.cameraOffset={x:0,y:0},this.screenShake=0,this.paused=!1,this.assetLoader=new Tm,this.inputManager=new bm,this.audio=new Vm,this.EnemyClass=Dl,this.BossClass=Im,this.player=new Am(e.player??{}),this.player.setGame(this);const n=e.class??"warrior",i=og[n]??Nl;this.player.setClass(new i(e.skillConfigs));const r=e.playerBonus;r&&typeof this.player.applyCultivationBonus=="function"&&this.player.applyCultivationBonus(r),this.chapterId=e.chapterId??null,this.chapterConfig=this.chapterId?Ll(this.chapterId):null,this.scene=new rm,this.camera=new Gr(-1,1,1,-1,.1,1e3),this.camera.position.z=100;const o=Math.min(window.devicePixelRatio,2);this.renderer=new Tl({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(o),this.renderer.setClearColor(657938,1),t.appendChild(this.renderer.domElement),this.composer=new vm(this.renderer),this.composer.addPass(new xm(this.scene,this.camera));const a=new gi(new St(t.clientWidth,t.clientHeight),.4,.2,.6);this.composer.addPass(a),this.bloomPass=a,this.gameMode=e.mode??"classic";const l=e.difficulty==="nightmare"?"hell":e.difficulty??"normal",c=As[l]??As.normal;this.difficulty=l,this.difficultyMultipliers={enemyHealthMultiplier:c.enemyHealthMultiplier,enemyDamageMultiplier:c.enemyDamageMultiplier},this.spawnRateMultiplier=c.spawnRateMultiplier,this.enemyCountMultiplier=c.enemyCountMultiplier??1,this.expGainMultiplier=c.expGainMultiplier,this.dropRateMultiplier=c.dropRateMultiplier??1,this.eliteWeightBonus=c.eliteWeightBonus??0,this.spawnSystem=new Fm(this),this.waveSystem=new Om(this),this.enemyPool=new Bm(this),this.upgradeSystem=new km(this),this.SUMMON_CLASS_MAP=Uo,this.killCount=0,this.earnedCoins=0,this.gameOver=!1,this.onGameOver=null,this.chests=[],this.baseZoom=280,this.bgMesh=null,this.parallaxBackground=null,this.playerShadow=null,this.vignetteEl=null,this.hurtFlashEl=null,this.floatTextContainer=null,this.floatTexts=[],this.hurtFlashUntil=0,this.levelUpSlowMotionUntil=0,this.pendingLevelUpPlayer=null,this.lastChestDropTime=0,this.chestDropInterval=55,this.lowHpWarningActive=!1,this._bindUI(),this.warriorRangeIndicator=null,((u=(h=this.player.classInstance)==null?void 0:h.constructor)==null?void 0:u.name)==="Warrior"&&this._setupWarriorRangeIndicator()}async _preloadAssets(t){const e=["/assets/characters/warrior_idle.png","/assets/characters/mage_idle.png","/assets/characters/summoner_idle.png","/assets/chest.png","/assets/enemies/zombie.png","/assets/boss/demon_boss.png","/assets/skills/mage_fireball.png","/assets/background/grass.png","/assets/background/bg_main.png",...Array.from({length:5},(r,o)=>`/assets/characters/warrior_attack_frame${o+1}.png`),...Array.from({length:5},(r,o)=>`/assets/characters/mage_attack_frame${o+1}.png`),...Array.from({length:5},(r,o)=>`/assets/characters/summoner_cast_frame${o+1}.png`),...Array.from({length:4},(r,o)=>`/assets/enemies/zombie_attack_frame${o+1}.png`),...Array.from({length:6},(r,o)=>`/assets/boss/boss_attack_frame${o+1}.png`),"/assets/summons/poison_plant.png","/assets/summons/fire_wolf.png","/assets/summons/stone_golem.png","/assets/summons/thunder_bird.png"],n=new Set(e);try{const r=Fe();[r.classes,r.enemies,r.summons].forEach(o=>{!o||typeof o!="object"||Object.values(o).forEach(a=>{a!=null&&a.spritePath&&typeof a.spritePath=="string"&&!n.has(a.spritePath)&&(n.add(a.spritePath),e.push(a.spritePath));const l=a==null?void 0:a.frameUrls;Array.isArray(l)&&l.forEach(c=>{c&&!n.has(c)&&(n.add(c),e.push(c))})})})}catch{}const i=e.length;for(let r=0;r<e.length;r++)await this.assetLoader.loadTexture(e[r]),typeof t=="function"&&t((r+1)/i)}_setupParticleSystem(){const e=new Float32Array(1500),n=new Oe;n.setAttribute("position",new Ie(e,3));const i=this.assetLoader.getTexture("/assets/skills/mage_fireball.png"),r=new wl({size:6,map:i||void 0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1});i||(r.color=new Ht(16746564)),this.particlePoints=new om(n,r),this.particlePoints.frustumCulled=!1,this.scene.add(this.particlePoints)}async _setupBackground(){var e;this.parallaxBackground=new Ym(this.scene,this.assetLoader),this.parallaxBackground.setPlayerRef(this.player);const t=((e=this.chapterConfig)==null?void 0:e.background)??"/assets/background/bg_main.png";await this.parallaxBackground.init(t),this._setupPlayerShadow(),this._setupVignette()}_setupPlayerShadow(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(0,0,0,0.35)"),i.addColorStop(.6,"rgba(0,0,0,0.12)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new wn(e),o=new Xe({map:r,transparent:!0,depthTest:!1,depthWrite:!1});this.playerShadow=new Ke(o),this.playerShadow.scale.set(70,70,1),this.playerShadow.position.z=-1,this.player.mesh.add(this.playerShadow)}_setupVignette(){this.vignetteEl=document.createElement("div"),this.vignetteEl.style.cssText="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%);",this.container.style.position=this.container.style.position||"relative",this.container.appendChild(this.vignetteEl)}async _setupPlayer(){await this.player.createSprite(this.assetLoader),this.scene.add(this.player.mesh)}_setupWarriorRangeIndicator(){var l;const t=this.player.classInstance,e=t==null?void 0:t.slash,n=((l=e==null?void 0:e.config)==null?void 0:l.radius)??70,i=Math.max(0,n-2),r=new Wr(i,n,64),o=new bn({color:65433,transparent:!0,opacity:.18,depthWrite:!1,depthTest:!1}),a=new ye(r,o);a.rotation.x=Math.PI/2,a.position.set(0,0,-.5),this.player.mesh.add(a),this.warriorRangeIndicator=a}_setupHurtFlash(){this.hurtFlashEl=document.createElement("div"),this.hurtFlashEl.style.cssText="position:absolute;inset:0;pointer-events:none;background:rgba(200,0,0,0.4);opacity:0;transition:opacity 0.06s;",this.container.appendChild(this.hurtFlashEl)}_setupFloatTexts(){this.floatTextContainer=document.createElement("div"),this.floatTextContainer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",this.container.appendChild(this.floatTextContainer)}_bindUI(){const t=document.getElementById("upgrade-panel"),e=document.getElementById("upgrade-choices");t&&e&&this.upgradeSystem.setPanel(t,e);const n=document.getElementById("pause-btn");n&&(n.onclick=()=>{this.paused=!this.paused,n.textContent=this.paused?"继续":"暂停"})}getEnemiesInRadius(t,e,n){return this.enemies.filter(i=>{if(!i.isAlive())return!1;const r=i.position.x-t,o=i.position.y-e;return r*r+o*o<=n*n})}applyCrit(t,e){const n=.1+((e==null?void 0:e.critRateBonus)??0),i=Math.random()<n;return{damage:i?t*1.5:t,isCrit:i}}getSummons(){return this.summons}addProjectile(t){if(t.vx===0&&t.vy===0&&t.explodeRadius>0){this._explodeAt(t.x,t.y,t.explodeRadius,t.damage,t.slowDuration,t.slowFactor);return}const e=this.assetLoader.createSpriteMaterial("/assets/skills/mage_fireball.png",{width:24,height:24}),n=new Ke(e);n.scale.set(32,32,1),this.scene.add(n),t.mesh=n,this.projectiles.push(t)}async addSummon(t,e,n,{maxSummonLimit:i}={}){var l;const r=typeof t=="string"?Uo[t]:t;if(!r)return;const o=new r(e);o.setGame(this),o.position.x=n.x,o.position.y=n.y,o.spawnTime=this.time,o.orbitAngle=Math.random()*Math.PI*2,await o.createMesh(this.assetLoader);const a=i??3;if(this.summons.length>=a){let c=0,h=Number.POSITIVE_INFINITY;for(let d=0;d<this.summons.length;d++){const m=this.summons[d],_=(m==null?void 0:m.hp)??(m==null?void 0:m.maxHp)??0;_<h&&(h=_,c=d)}const u=this.summons[c];u!=null&&u.mesh&&this.scene.remove(u.mesh),(l=u==null?void 0:u.dispose)==null||l.call(u),this.summons.splice(c,1)}this.scene.add(o.mesh),this.summons.push(o)}_explodeAt(t,e,n,i,r,o){const a=this.getEnemiesInRadius(t,e,n);let l=!1;a.forEach(c=>{var h;if(c.isAlive()){const{damage:u,isCrit:d}=this.applyCrit(i,this.player);if(this._showDamageFloat&&this._showDamageFloat(c.position.x,c.position.y,u,d),c.takeDamage(u,t,e,!0),r>0&&c.speed!=null){const m=(((h=c.config)==null?void 0:h.speed)??1)*55;c.speed=m*(o??.5),setTimeout(()=>{c.speed=m},r*1e3)}l=!0}}),this._spawnParticles(t,e,12,16746564),l&&this.audio&&this.audio.playSound("assets/audio/sfx_hit_light.mp3",{volume:.9})}_spawnParticles(t,e,n,i){for(let r=0;r<n;r++){const o=Math.PI*2*r/n+Math.random(),a=80+Math.random()*120;this.particles.push({x:t,y:e,vx:Math.cos(o)*a,vy:Math.sin(o)*a,life:.4,maxLife:.4,color:i,size:4+Math.random()*6})}}onMeleeHit(t,e,n,i,r,o=!1){if(this._spawnParticles(t,e,8,16763904),this.screenShake=Math.min(.15,this.screenShake+.08),this.audio){const a=o?"assets/audio/sfx_hit_crit.mp3":"assets/audio/sfx_hit_light.mp3";this.audio.playSound(a,{volume:o?1:.85})}}onPlayerHit(){this.screenShake=.25,this.hurtFlashUntil=this.time+.35,this.audio&&this.audio.playSound("assets/audio/sfx_player_hurt.mp3",{volume:1})}onLevelUp(t){this.levelUpSlowMotionUntil=performance.now()/1e3+.3,this.pendingLevelUpPlayer=t,this.audio&&this.audio.playSound("assets/audio/sfx_level_up.mp3",{volume:1})}async start(t={}){var n;const e=t.onProgress;if(typeof e=="function"&&e(0),await this._preloadAssets(e),typeof e=="function"&&e(1),await this._setupBackground(),this._setupParticleSystem(),await this._setupPlayer(),this._setupHurtFlash(),this._setupFloatTexts(),this.audio&&this.audio.playMusic("assets/audio/bgm_main_loop.mp3",{loop:!0,volume:.6}),this.inputManager.start(this.container),(n=this.player.classInstance)==null||n.setGame(this),this.waveSystem.waveStartTime=this.time,this.spawnSystem.lastSpawnTime=this.time,this.lastChestDropTime=this.time,this.waveSystem.onWaveComplete=i=>{this.earnedCoins=(this.earnedCoins||0)+5;const r=this.waveSystem.getChapterWaveCount();if(this.chapterId&&r>0&&i<r){this.waveSystem.advanceWave(),this.waveSystem.isBetweenWaves=!1,this.waveSystem.waveStartTime=this.time;const a=this.waveSystem.getWaveConfig();this.spawnSystem.spawnWave(a);return}this.paused=!0,this.upgradeSystem.showWaveReward(this.player,i,()=>{if(this.paused=!1,this.chapterId&&r>0&&i>=r){this.waveSystem.advanceWave();return}this.waveSystem.advanceWave(),this.waveSystem.isBetweenWaves=!1,this.waveSystem.waveStartTime=this.time;const a=this.waveSystem.getWaveConfig();this.spawnSystem.spawnWave(a)})},this.chapterId){this.waveSystem.advanceWave();const i=this.waveSystem.getWaveConfig();await this.spawnSystem.spawnWave(i)}else if(this.waveSystem.isSurvivalMode()){this.waveSystem.advanceWave();const i=this.waveSystem.getWaveConfig();await this.spawnSystem.spawnWave(i)}else{const i={enemies:[{type:"basicZombie",count:6}]};await this.spawnSystem.spawnWave(i)}}update(t){var i,r,o,a,l;const e=performance.now()/1e3;if(this.levelUpSlowMotionUntil&&e>=this.levelUpSlowMotionUntil&&(this.levelUpSlowMotionUntil=null,this.paused=!0,this.pendingLevelUpPlayer&&(this.upgradeSystem.show(this.pendingLevelUpPlayer),this.pendingLevelUpPlayer=null)),this.paused)return;this.levelUpSlowMotionUntil&&e<this.levelUpSlowMotionUntil&&(t*=.3),this.time+=t,this.player.update(t,this.inputManager),this.enemies.forEach(c=>c.update(t)),this.enemies.forEach(c=>{c.poisonUntil>this.time&&this.time-(c.lastPoisonTick??0)>=.5&&(c.takeDamage(c.poisonStack??1),c.lastPoisonTick=this.time)});for(let c=this.projectiles.length-1;c>=0;c--){const h=this.projectiles[c];if(h.x+=h.vx*t,h.y+=h.vy*t,h.life-=t,h.life<=0){h.explodeRadius>0&&this._explodeAt(h.x,h.y,h.explodeRadius,h.damage,h.slowDuration,h.slowFactor),h.mesh&&(this.scene.remove(h.mesh),(r=(i=h.mesh.material)==null?void 0:i.map)==null||r.dispose(),(o=h.mesh.material)==null||o.dispose()),this.projectiles.splice(c,1);continue}h.mesh&&h.mesh.position.set(h.x,h.y,0),this.getEnemiesInRadius(h.x,h.y,h.radius).forEach(d=>{if(!d.isAlive()||h.hit.has(d))return;h.hit.add(d);const{damage:m,isCrit:_}=this.applyCrit(h.damage,this.player);if(this._showDamageFloat&&this._showDamageFloat(d.position.x,d.position.y,m,_),d.takeDamage(m,h.x,h.y,!0),this.audio){const g=_?"assets/audio/sfx_hit_crit.mp3":"assets/audio/sfx_hit_light.mp3";this.audio.playSound(g,{volume:_?1:.85})}h.explodeRadius>0&&(this._explodeAt(h.x,h.y,h.explodeRadius,0,h.slowDuration,h.slowFactor),h.life=0)})}const n=this.time;this.player;for(let c=this.summons.length-1;c>=0;c--){const h=this.summons[c];if(n-h.spawnTime>h.duration||!h.isAlive()){h.mesh&&this.scene.remove(h.mesh),(a=h.dispose)==null||a.call(h),this.summons.splice(c,1);continue}h.update(t)}this._enemiesAttackSummons(t);for(let c=this.particles.length-1;c>=0;c--){const h=this.particles[c];h.x+=h.vx*t,h.y+=h.vy*t,h.life-=t,h.life<=0&&this.particles.splice(c,1)}if(this._updateParticlePoints(),this.waveSystem.update(this.time),this._collisionUpdate(),!this.player.isAlive()&&!this.gameOver&&(this.gameOver=!0,this.paused=!0,(l=this.onGameOver)==null||l.call(this)),this._chestCollision(),this.time-this.lastChestDropTime>=this.chestDropInterval){this.lastChestDropTime=this.time;const c=Math.random()*Math.PI*2,h=120+Math.random()*80,u=this.player.position.x+Math.cos(c)*h,d=this.player.position.y+Math.sin(c)*h;Math.random()<(this.dropRateMultiplier??1)&&this._spawnChest(u,d,Math.random()<.15)}this.spawnSystem.trySpawn(this.time),this._cameraUpdate(t),this._backgroundUpdate(),this._updateUI(t)}_updateParticlePoints(){if(!this.particlePoints)return;const t=this.particlePoints.geometry.attributes.position.array,e=Math.min(this.particles.length,t.length/3);for(let n=0;n<e;n++){const i=this.particles[n];t[n*3]=i.x,t[n*3+1]=i.y,t[n*3+2]=0}this.particlePoints.geometry.attributes.position.needsUpdate=!0,this.particlePoints.geometry.setDrawRange(0,e)}_collisionUpdate(){var r,o,a,l;const t=this.player.getCollisionRadius(),e=this.player.position.x,n=this.player.position.y,i=this.time;this.enemies.forEach(c=>{var d,m;if(!c.isAlive())return;const h=c.getCollisionRadius();if(!wm.circleCircle(e,n,t,c.position.x,c.position.y,h))return;const u=c.attackCooldown??.6;if(i>=(c.lastAttackTime??-1e9)+u){let _=c.damage;const g=this.player;if(((m=(d=g.classInstance)==null?void 0:d.constructor)==null?void 0:m.name)==="Warrior"&&this.getEnemiesInRadius(e,n,85).length>=3&&(_*=.75),g.takeDamage(_),c.lastAttackTime=i,c.slowOnHit&&this.player.speed){const p=this.player.baseSpeed*(this.player.speedMultiplierFromClass??1);this.player.speed=p*(c.slowFactor??.5);const f=(c.slowDuration??1.5)*1e3;setTimeout(()=>{var E;(E=this.player)!=null&&E.baseSpeed&&(this.player.speed=this.player.baseSpeed*(this.player.speedMultiplierFromClass??1))},f)}}});for(let c=this.enemies.length-1;c>=0;c--){const h=this.enemies[c];if(!h.isAlive()){const u=h.position.x,d=h.position.y,m=45;if(this.enemies.forEach(p=>{if(p===h||!p.isAlive())return;const f=p.position.x-u,E=p.position.y-d,x=f*f+E*E;if(x>0&&x<m*m){const w=Math.sqrt(x),L=(m-w)/w;p.position.x+=f/w*L*25,p.position.y+=E/w*L*25,p.mesh.position.set(p.position.x,p.position.y,0)}}),this.audio){let p="assets/audio/sfx_enemy_die.mp3";h.type==="boss"?p="assets/audio/sfx_boss_die.mp3":(h.type==="eliteEnemy"||h.type==="fastRusher")&&(p="assets/audio/sfx_elite_die.mp3"),this.audio.playSound(p,{volume:h.type==="boss"?1:.9}),h.type==="boss"&&(this.enemies.some((E,x)=>x!==c&&E.type==="boss"&&E.isAlive())||this.audio.playMusic("assets/audio/bgm_main_loop.mp3",{loop:!0,volume:.6,fadeSeconds:.5}))}if(this.killCount++,this.earnedCoins=(this.earnedCoins||0)+1,this.player.addExp(h.expDrop),((o=(r=this.player.classInstance)==null?void 0:r.constructor)==null?void 0:o.name)==="Summoner"&&this.summons.length>0&&Math.random()<.1){let p=null,f=Number.POSITIVE_INFINITY;this.summons.forEach(E=>{const x=E&&E.maxHp>0?(E.hp??E.maxHp)/E.maxHp:1;x<f&&(f=x,p=E)}),p&&(p.hp=p.maxHp,p.spawnTime=this.time,(l=(a=p.healthBar)==null?void 0:a.update)==null||l.call(a,p.hp,p.maxHp))}const _=h.type==="fastRusher"||h.type==="eliteEnemy"?16:h.type==="boss"?24:10;this._spawnParticles(u,d,_,h.type==="boss"?11149858:8930304),this._showExpFloat(u,d,h.expDrop);const g=this.dropRateMultiplier??1;h.type==="eliteEnemy"&&Math.random()<.15*g&&this._spawnChest(u,d,Math.random()<.03*g),this.enemyPool.release(h),this.enemies.splice(c,1)}}}_spawnChest(t,e,n){const i=new Km(t,e,n);i.createMesh(this.assetLoader),this.scene.add(i.mesh),this.chests.push(i)}_chestCollision(){const t=this.player.getCollisionRadius(),e=this.player.position.x,n=this.player.position.y;for(let i=this.chests.length-1;i>=0;i--){const r=this.chests[i],o=r.position.x-e,a=r.position.y-n,l=o*o+a*a,c=r.getCollisionRadius()+t;l<=c*c&&(this.scene.remove(r.mesh),r.dispose(),this.chests.splice(i,1),this.audio&&this.audio.playSound("assets/audio/sfx_chest_open.mp3",{volume:1}),this.paused=!0,this.upgradeSystem.showChestReward(this.player,r.isGolden,()=>{this.paused=!1}))}}_showExpFloat(t,e,n){const i=document.createElement("div");i.textContent="+"+n,i.style.cssText="position:absolute;color:#8f8;font-weight:bold;font-size:18px;text-shadow:0 0 4px #000;white-space:nowrap;",this.floatTextContainer.appendChild(i),this.floatTexts.push({wx:t,wy:e,life:.9,el:i})}_showDamageFloat(t,e,n,i=!1){const r=document.createElement("div");r.textContent=i?"暴击! "+Math.floor(n):"-"+Math.floor(n),r.style.cssText="position:absolute;font-weight:bold;font-size:"+(i?18:16)+"px;text-shadow:0 0 4px #000;white-space:nowrap;",r.style.color=i?"#ffaa00":"#f88",this.floatTextContainer.appendChild(r),this.floatTexts.push({wx:t,wy:e,life:i?.7:.5,el:r})}_cameraUpdate(t){const e=this.player.position.x+this.cameraOffset.x,n=this.player.position.y+this.cameraOffset.y,i=this.screenShake>0?(Math.random()-.5)*20:0,r=this.screenShake>0?(Math.random()-.5)*20:0;this.screenShake=Math.max(0,this.screenShake-t*2);const o=Math.sin(this.time*8)*1.2,a=Math.cos(this.time*6)*1.2,l=this.baseZoom+this.time*.04,c=this.container.clientWidth/this.container.clientHeight*l;this.camera.left=-c,this.camera.right=c,this.camera.top=l,this.camera.bottom=-l,this.camera.updateProjectionMatrix(),this.camera.position.x+=(e-this.camera.position.x+i+o)*Math.min(1,t*8),this.camera.position.y+=(n-this.camera.position.y+r+a)*Math.min(1,t*8),this.camera.lookAt(e+i+o,n+r+a,0)}_backgroundUpdate(){this.parallaxBackground&&this.parallaxBackground.update(this.camera.position)}_enemiesAttackSummons(t){this.enemies.forEach(n=>{var o;if(!n.isAlive())return;let i=null,r=42*42;if(this.summons.forEach(a=>{if(!a.isAlive())return;const l=a.position.x-n.position.x,c=a.position.y-n.position.y,h=l*l+c*c;h<r&&(r=h,i=a)}),i&&n.attackSummonCooldown==null&&(n.attackSummonCooldown=0),i&&n.attackSummonCooldown<=0){const a=n.damage??((o=n.config)==null?void 0:o.damage)??5;i.takeDamage(a*.7),n.attackSummonCooldown=.6}n.attackSummonCooldown!=null&&(n.attackSummonCooldown-=t)})}_updateUI(t){const e=document.getElementById("hp-fill"),n=document.getElementById("xp-fill"),i=document.getElementById("level-num"),r=document.getElementById("kill-count"),o=document.getElementById("survival-timer");if(e&&(e.style.width=`${this.player.hp/this.player.maxHp*100}%`),n&&(n.style.width=`${this.player.exp/this.player.expToNext*100}%`),i&&(i.textContent=this.player.level),r&&(r.textContent=this.killCount),o){const u=Math.floor(this.time/60),d=Math.floor(this.time%60);o.textContent=`${u.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`}const a=this.player.maxHp>0?this.player.hp/this.player.maxHp:0;this.audio&&(a<.25&&!this.lowHpWarningActive?(this.lowHpWarningActive=!0,this.audio.playSound("assets/audio/sfx_low_hp_warning.mp3",{volume:1})):a>=.35&&this.lowHpWarningActive&&(this.lowHpWarningActive=!1));const l=document.getElementById("wave-num"),c=document.getElementById("wave-count");if(l&&c&&this.waveSystem){const u=this.waveSystem.getCurrentWave();l.style.display="",c.textContent=u}this.hurtFlashEl&&(this.hurtFlashEl.style.opacity=this.time<this.hurtFlashUntil?1:0);const h=new D;for(let u=this.floatTexts.length-1;u>=0;u--){const d=this.floatTexts[u];if(d.life-=t,d.life<=0){d.el.remove(),this.floatTexts.splice(u,1);continue}h.set(d.wx,d.wy,0),h.project(this.camera);const m=(h.x*.5+.5)*this.container.clientWidth,_=(-h.y*.5+.5)*this.container.clientHeight;d.el.style.left=m+"px",d.el.style.top=_+"px",d.el.style.opacity=Math.max(0,d.life/.9)}}hideUpgradePanel(){this.upgradeSystem.hide(),this.paused=!1}render(){this.composer.render()}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e),this.composer.setSize(t,e),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.bloomPass.resolution.set(t,e)}stop(){this.inputManager.stop(),this.upgradeSystem.hide(),this.paused=!0}dispose(){var t,e,n,i,r,o,a;this.stop(),(t=this.audio)==null||t.stop(),(e=this.vignetteEl)!=null&&e.parentNode&&this.vignetteEl.parentNode.removeChild(this.vignetteEl),(n=this.hurtFlashEl)!=null&&n.parentNode&&this.hurtFlashEl.parentNode.removeChild(this.hurtFlashEl),(i=this.floatTextContainer)!=null&&i.parentNode&&this.floatTextContainer.parentNode.removeChild(this.floatTextContainer),(o=(r=this.renderer)==null?void 0:r.domElement)!=null&&o.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.chests.forEach(l=>{this.scene.remove(l.mesh),l.dispose()}),this.chests=[],(a=this.parallaxBackground)==null||a.dispose(),this.summons.forEach(l=>{var c;return(c=l.dispose)==null?void 0:c.call(l)}),this.assetLoader.dispose(),this.player.dispose(),this.enemies.forEach(l=>l.dispose()),this.renderer.dispose()}}const xr={},cg=typeof import.meta<"u"&&(xr!=null&&xr.VITE_GAME_USER_API)?void 0:"https://fc-mp-9f563f1a-6c3a-4b50-a88f-3418f67174bd.next.bspapp.com/http/gameUser",Or="game_token";function un(){try{return localStorage.getItem(Or)}catch{return null}}function Is(s){try{s?localStorage.setItem(Or,s):localStorage.removeItem(Or)}catch{}}async function zi(s,t={},e=null){const n={"Content-Type":"application/json"};return e&&(n.Authorization=`Bearer ${e}`),await(await fetch(cg,{method:"POST",headers:n,body:JSON.stringify({action:s,...t})})).json().catch(()=>({}))}async function Fl(s,t){return zi("login",{username:s,password:t})}async function Ol(s,t){return zi("register",{username:s,password:t})}async function Ns(){const s=un();return s?zi("getProfile",{},s):{code:401,msg:"not logged in"}}async function Bl(s){const t=un();return t?zi("addCoins",{amount:s},t):{code:401,msg:"not logged in"}}async function hg(s,t){const e=un();return e?zi("spendCoins",{amount:s,cultivation:t},e):{code:401,msg:"not logged in"}}const ug=Object.freeze(Object.defineProperty({__proto__:null,addCoins:Bl,getProfile:Ns,getStoredToken:un,login:Fl,register:Ol,setStoredToken:Is,spendCoins:hg},Symbol.toStringTag,{value:"Module"})),kl=document.getElementById("game-container"),$e=document.getElementById("character-select"),kn=document.getElementById("difficulty-select"),vi=document.getElementById("login-panel"),xi=document.getElementById("cultivation-panel");if(!kl)throw new Error("No #game-container");if(!$e)throw new Error("No #character-select");let Pe=null,Br=performance.now(),Mr=0,Yr="classic",Kr=null;const dg=60,Sr=1/dg;function fg(){const s=document.getElementById("chapter-list");if(s){s.innerHTML="";try{const t=Dm(),e=t==null?void 0:t.chapters;if(!Array.isArray(e))return;e.forEach(n=>{const i=n.id,r=n.name||i||"关卡",o=document.createElement("button");o.type="button",o.className="diff-btn chapter-btn",o.setAttribute("data-chapter-id",i),o.style.cssText="padding:6px 16px;font-size:14px;",o.textContent=r,s.appendChild(o)})}catch{}}}const Hl="gecao_highscore";function zl(){try{const s=localStorage.getItem(Hl);return s?JSON.parse(s):{kills:0,time:0,wave:0}}catch{return{kills:0,time:0,wave:0}}}function pg(s,t,e){const n=zl(),i={kills:Math.max(n.kills,s),time:Math.max(n.time,t),wave:Math.max(n.wave,e||0)};try{localStorage.setItem(Hl,JSON.stringify(i))}catch{}}function Gl(s){if(!Pe)return;const t=(s-Br)/1e3;for(Br=s,Mr+=Math.min(t,.1);Mr>=Sr;)Pe.update(Sr),Mr-=Sr;Pe.render(),requestAnimationFrame(Gl)}async function mg(s){var n,i;const t=document.getElementById("game-over-panel"),e=document.getElementById("game-over-stats");if(t&&e){const r=Math.floor(s.time/60),o=Math.floor(s.time%60),a=((i=(n=s.waveSystem)==null?void 0:n.getCurrentWave)==null?void 0:i.call(n))??0;pg(s.killCount,Math.floor(s.time),a);const l=zl();let c="";const h=un(),u=s.earnedCoins??0;h&&u>0&&((await Bl(u)).code===0?c=`<br><span style="color:#daa520;font-size:16px;font-weight:bold;">本局获得金币 +${u}</span>`:c='<br><span style="color:#888;">金币同步失败</span>'),e.innerHTML=`击杀 ${s.killCount} | 存活 ${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}${a>0?" | 波次 "+a:""}${c}<br><small style="color:#6a6;">最高: 击杀 ${l.kills} | 存活 ${Math.floor(l.time/60)}:${String(l.time%60).padStart(2,"0")}${l.wave>0?" | 波次 "+l.wave:""}</small>`,t.classList.remove("game-over-hidden")}}function gg(){vi&&vi.classList.remove("hidden"),$e&&$e.classList.add("hidden"),xi&&xi.classList.remove("visible")}function Ei(){vi&&vi.classList.add("hidden"),$e&&$e.classList.remove("hidden"),xi&&xi.classList.remove("visible"),vg()}function _g(){vi&&vi.classList.add("hidden"),$e&&$e.classList.add("hidden"),xi&&xi.classList.add("visible"),Vl()}async function vg(){const s=document.getElementById("menu-top-bar"),t=document.getElementById("menu-coins"),e=document.getElementById("menu-guest-hint"),n=un();if(s&&s.classList.toggle("hidden",!n),e&&(e.textContent=n?"":"登录后可同步金币与人物培育"),!t)return;if(!n){t.textContent="";return}const i=await Ns();i.code===0&&i.data?t.textContent=`金币: ${i.data.coins??0}`:t.textContent=""}const xg=50;function Io(s){return xg*(s+1)}async function Vl(){const s=un(),t=document.getElementById("cult-list"),e=document.getElementById("cult-coins"),n=document.getElementById("cult-msg");if(!s){n&&(n.textContent="请先登录");return}n&&(n.textContent="");const i=await Ns();if(i.code!==0||!i.data){e&&(e.textContent="金币: 0"),t&&(t.innerHTML="");return}const{coins:r,cultivation:o}=i.data,a=o||{maxHpLevel:0,attackLevel:0,attackSpeedLevel:0};e&&(e.textContent=`金币: ${r??0}`);const l=[{key:"maxHpLevel",name:"生命上限",level:a.maxHpLevel??0},{key:"attackLevel",name:"攻击力",level:a.attackLevel??0},{key:"attackSpeedLevel",name:"攻速",level:a.attackSpeedLevel??0}];t&&(t.innerHTML=l.map(c=>{const h=Io(c.level),u=(r??0)>=h;return`<div class="cult-row">
      <span><span class="cult-name">${c.name}</span><span class="cult-level">Lv.${c.level}</span></span>
      <span><span class="cult-cost">下一级 ${h}</span>
      <button type="button" class="cult-upgrade-btn" data-key="${c.key}" ${u?"":"disabled"}>升级</button></span>
    </div>`}).join(""),t.querySelectorAll(".cult-upgrade-btn").forEach(c=>{c.addEventListener("click",async()=>{const h=c.getAttribute("data-key"),u={...a,[h]:(a[h]??0)+1},d=Io(a[h]??0),{spendCoins:m}=await Zl(async()=>{const{spendCoins:p}=await Promise.resolve().then(()=>ug);return{spendCoins:p}},void 0),_=await m(d,u),g=document.getElementById("cult-msg");_.code===0?(await Vl(),g&&(g.textContent="升级成功",g.style.color="#6a6",setTimeout(()=>{g.textContent="",g.style.color=""},1500))):g&&(g.textContent=_.msg||"升级失败",g.style.color="")})}))}async function No(s,t){var a;t=t||zm(),Il(t),Pe&&(Pe.dispose(),Pe=null);const e=document.getElementById("game-over-panel");e&&e.classList.add("game-over-hidden"),kn&&kn.classList.remove("visible"),$e.classList.add("hidden"),await Pl(),Hm(),Um(),jm();let n={};if(un()){const l=await Ns();if(l.code===0&&((a=l.data)!=null&&a.cultivation)){const c=l.data.cultivation,h=c.maxHpLevel??0,u=c.attackLevel??0,d=c.attackSpeedLevel??0;n={maxHp:h*10,attack:u*.02,attackSpeed:d*.05}}}Pe=new lg(kl,{class:s,difficulty:t,mode:Yr,player:{speed:180,maxHp:100},chapterId:Kr||null,playerBonus:n}),Pe.onGameOver=()=>mg(Pe);const r=document.getElementById("loading-overlay"),o=document.getElementById("loading-bar-fill");r&&r.classList.add("visible"),o&&(o.style.width="0%"),await Pe.start({onProgress(l){o&&(o.style.width=Math.round(l*100)+"%"),l>=1&&r&&r.classList.remove("visible")}}),r&&r.classList.remove("visible"),Br=performance.now(),requestAnimationFrame(Gl),window.addEventListener("resize",()=>Pe.resize()),window.game=Pe}var Fo;(Fo=document.getElementById("game-over-restart"))==null||Fo.addEventListener("click",()=>{const s=document.getElementById("game-over-panel");s&&s.classList.add("game-over-hidden"),Ei(),kn&&kn.classList.remove("visible")});var Oo;(Oo=document.getElementById("login-btn"))==null||Oo.addEventListener("click",async()=>{var i,r,o,a;const s=(r=(i=document.getElementById("login-username"))==null?void 0:i.value)==null?void 0:r.trim(),t=((o=document.getElementById("login-password"))==null?void 0:o.value)??"",e=document.getElementById("login-msg");if(!s){e&&(e.textContent="请输入用户名");return}if(t.length<6){e&&(e.textContent="密码至少6位");return}e&&(e.textContent="登录中…");const n=await Fl(s,t);n.code===0&&((a=n.data)!=null&&a.token)?(Is(n.data.token),e&&(e.textContent=""),Ei()):e&&(e.textContent=n.msg||"登录失败")});var Bo;(Bo=document.getElementById("register-btn"))==null||Bo.addEventListener("click",async()=>{var i,r,o,a;const s=(r=(i=document.getElementById("login-username"))==null?void 0:i.value)==null?void 0:r.trim(),t=((o=document.getElementById("login-password"))==null?void 0:o.value)??"",e=document.getElementById("login-msg");if(!s){e&&(e.textContent="请输入用户名");return}if(t.length<6){e&&(e.textContent="密码至少6位");return}e&&(e.textContent="注册中…");const n=await Ol(s,t);n.code===0&&((a=n.data)!=null&&a.token)?(Is(n.data.token),e&&(e.textContent=""),Ei()):e&&(e.textContent=n.msg||"注册失败")});var ko;(ko=document.getElementById("guest-btn"))==null||ko.addEventListener("click",()=>{Is(null),Ei()});var Ho;(Ho=document.getElementById("btn-cultivation"))==null||Ho.addEventListener("click",()=>{_g()});var zo;(zo=document.getElementById("cult-back"))==null||zo.addEventListener("click",()=>{Ei()});un()?Ei():gg();var Go;(Go=document.getElementById("mode-classic"))==null||Go.addEventListener("click",()=>{var s;Yr="classic",document.querySelectorAll('#character-select .diff-btn[id^="mode-"]').forEach(t=>t.classList.remove("selected")),(s=document.getElementById("mode-classic"))==null||s.classList.add("selected")});var Vo;(Vo=document.getElementById("mode-survival"))==null||Vo.addEventListener("click",()=>{var s;Yr="survival",document.querySelectorAll('#character-select .diff-btn[id^="mode-"]').forEach(t=>t.classList.remove("selected")),(s=document.getElementById("mode-survival"))==null||s.classList.add("selected")});var Wo;(Wo=document.getElementById("chapter-none"))==null||Wo.addEventListener("click",()=>{var s;Kr=null,document.querySelectorAll("#character-select .chapter-btn").forEach(t=>t.classList.remove("selected")),(s=document.getElementById("chapter-none"))==null||s.classList.add("selected")});var Xo;(Xo=document.getElementById("chapter-buttons-wrap"))==null||Xo.addEventListener("click",s=>{const t=s.target.closest(".chapter-btn");if(!t||t.id==="chapter-none")return;const e=t.getAttribute("data-chapter-id");e===""||e==null||(Kr=e,document.querySelectorAll("#character-select .chapter-btn").forEach(n=>n.classList.remove("selected")),t.classList.add("selected"))});Pl().then(()=>{fg()}).catch(()=>{});$e.querySelectorAll(".card").forEach(s=>{s.addEventListener("click",()=>{const t=s.getAttribute("data-class");t&&($e.classList.add("hidden"),kn?(kn.classList.add("visible"),kn.querySelectorAll(".diff-btn").forEach(e=>{e.onclick=()=>{const n=e.getAttribute("data-diff");Il(n),No(t,n)}})):No(t))})});
