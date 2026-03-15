(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const su="170",Tp=0,ku=1,bp=2,yh=1,Ap=2,yi=3,sr=0,vn=1,bi=2,er=0,ps=1,ql=2,Hu=3,Vu=4,wp=5,Tr=100,Rp=101,Cp=102,Pp=103,Dp=104,Lp=200,Up=201,Ip=202,Np=203,Yl=204,$l=205,Fp=206,Op=207,Bp=208,zp=209,kp=210,Hp=211,Vp=212,Gp=213,Wp=214,Kl=0,Zl=1,jl=2,Es=3,Jl=4,Ql=5,ec=6,tc=7,Eh=0,Xp=1,qp=2,tr=0,Yp=1,$p=2,Kp=3,Zp=4,jp=5,Jp=6,Qp=7,Th=300,Ts=301,bs=302,nc=303,ic=304,qo=306,rc=1e3,Ar=1001,sc=1002,si=1003,em=1004,Ia=1005,fi=1006,tl=1007,wr=1008,Ui=1009,bh=1010,Ah=1011,ga=1012,au=1013,Br=1014,wi=1015,wa=1016,ou=1017,lu=1018,As=1020,wh=35902,Rh=1021,Ch=1022,ri=1023,Ph=1024,Dh=1025,ms=1026,ws=1027,Lh=1028,cu=1029,Uh=1030,uu=1031,fu=1033,vo=33776,xo=33777,Mo=33778,So=33779,ac=35840,oc=35841,lc=35842,cc=35843,uc=36196,fc=37492,hc=37496,dc=37808,pc=37809,mc=37810,_c=37811,gc=37812,vc=37813,xc=37814,Mc=37815,Sc=37816,yc=37817,Ec=37818,Tc=37819,bc=37820,Ac=37821,yo=36492,wc=36494,Rc=36495,Ih=36283,Cc=36284,Pc=36285,Dc=36286,tm=3200,nm=3201,im=0,rm=1,$i="",Xn="srgb",Fs="srgb-linear",Yo="linear",pt="srgb",Xr=7680,Gu=519,sm=512,am=513,om=514,Nh=515,lm=516,cm=517,um=518,fm=519,Wu=35044,Xu="300 es",Ri=2e3,Uo=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,Lc=180/Math.PI;function Ra(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function hm(r,e){return(r%e+e)%e}function il(r,e,t){return(1-t)*r+t*e}function Hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],E=i[4],v=i[7],R=i[2],w=i[5],b=i[8];return s[0]=a*_+o*y+l*R,s[3]=a*m+o*E+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*y+f*R,s[4]=c*m+u*E+f*w,s[7]=c*p+u*v+f*b,s[2]=h*_+d*y+g*R,s[5]=h*m+d*E+g*w,s[8]=h*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new Ye;function Fh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Io(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dm(){const r=Io("canvas");return r.style.display="block",r}const qu={};function Ks(r){r in qu||(qu[r]=!0,console.warn(r))}function pm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function mm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _m(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Yo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Yu=[.64,.33,.3,.6,.15,.06],$u=[.2126,.7152,.0722],Ku=[.3127,.329],Zu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Fs]:{primaries:Yu,whitePoint:Ku,transfer:Yo,toXYZ:Zu,fromXYZ:ju,luminanceCoefficients:$u,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:Yu,whitePoint:Ku,transfer:pt,toXYZ:Zu,fromXYZ:ju,luminanceCoefficients:$u,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}});let qr;class gm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Io("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vm=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sl(i[a].image)):s.push(sl(i[a]))}else s=sl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xm=0;class xn extends Os{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=Ar,i=Ar,s=fi,a=wr,o=ri,l=Ui,c=xn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ra(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Th;xn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(d+1)/2,R=(p+1)/2,w=(u+h)/4,b=(f+_)/4,C=(g+m)/4;return E>v&&E>R?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=b/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mm extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends Mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bh extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=si,this.minFilter=si,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=si,this.minFilter=si,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*y;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new q,Ju=new Ca;class Pa{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Fa.subVectors(this.max,Vs),Yr.subVectors(e.a,Vs),$r.subVectors(e.b,Vs),Kr.subVectors(e.c,Vs),Hi.subVectors($r,Yr),Vi.subVectors(Kr,$r),fr.subVectors(Yr,Kr);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-fr.z,fr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,fr.z,0,-fr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-fr.y,fr.x,0];return!ol(t,Yr,$r,Kr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,Yr,$r,Kr,Fa))?!1:(Oa.crossVectors(Hi,Vi),t=[Oa.x,Oa.y,Oa.z],ol(t,Yr,$r,Kr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new q,new q,new q,new q,new q,new q,new q,new q],Qn=new q,Na=new Pa,Yr=new q,$r=new q,Kr=new q,Hi=new q,Vi=new q,fr=new q,Vs=new q,Fa=new q,Oa=new q,hr=new q;function ol(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hr.fromArray(r,s);const o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ym=new Pa,Gs=new q,ll=new q;class $o{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(ll)),this.expandByPoint(Gs.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new q,cl=new q,Ba=new q,Gi=new q,ul=new q,za=new q,fl=new q;class zh{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cl.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(cl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=Gi.dot(this.direction),l=-Gi.dot(Ba),c=Gi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cl).addScaledVector(Ba,h),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,s){ul.subVectors(t,e),za.subVectors(n,e),fl.crossVectors(ul,za);let a=this.direction.dot(fl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(za.crossVectors(Gi,za));if(l<0)return null;const c=o*this.direction.dot(ul.cross(Gi));if(c<0||l+c>a)return null;const u=-o*Gi.dot(fl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Tm)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Wi.crossVectors(n,Rn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Wi.crossVectors(n,Rn)),Wi.normalize(),ka.crossVectors(Rn,Wi),i[0]=Wi.x,i[4]=ka.x,i[8]=Rn.x,i[1]=Wi.y,i[5]=ka.y,i[9]=Rn.y,i[2]=Wi.z,i[6]=ka.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],v=n[11],R=n[15],w=i[0],b=i[4],C=i[8],M=i[12],x=i[1],P=i[5],N=i[9],B=i[13],X=i[2],$=i[6],G=i[10],W=i[14],V=i[3],te=i[7],D=i[11],ue=i[15];return s[0]=a*w+o*x+l*X+c*V,s[4]=a*b+o*P+l*$+c*te,s[8]=a*C+o*N+l*G+c*D,s[12]=a*M+o*B+l*W+c*ue,s[1]=u*w+f*x+h*X+d*V,s[5]=u*b+f*P+h*$+d*te,s[9]=u*C+f*N+h*G+d*D,s[13]=u*M+f*B+h*W+d*ue,s[2]=g*w+_*x+m*X+p*V,s[6]=g*b+_*P+m*$+p*te,s[10]=g*C+_*N+m*G+p*D,s[14]=g*M+_*B+m*W+p*ue,s[3]=y*w+E*x+v*X+R*V,s[7]=y*b+E*P+v*$+R*te,s[11]=y*C+E*N+v*G+R*D,s[15]=y*M+E*B+v*W+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,E=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,v=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,R=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,w=t*y+n*E+i*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*b,e[4]=E*b,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*d+t*l*d)*b,e[8]=v*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*b,e[12]=R*b,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,y=l*c,E=l*u,v=l*f,R=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+v)*R,i[2]=(g-E)*R,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+E)*b,i[9]=(m-y)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zr.set(i[0],i[1],i[2]).length();const a=Zr.set(i[4],i[5],i[6]).length(),o=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/s,u=1/a,f=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(o===Ri)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Uo)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ri){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(o===Ri)g=(a+s)*f,_=-2*f;else if(o===Uo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new q,ei=new Ot,Em=new q(0,0,0),Tm=new q(1,1,1),Wi=new q,ka=new q,Rn=new q,Qu=new Ot,ef=new Ca;class Ii{constructor(e=0,t=0,n=0,i=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const tf=new q,jr=new Ca,xi=new Ot,Ha=new q,Ws=new q,Am=new q,wm=new Ca,nf=new q(1,0,0),rf=new q(0,1,0),sf=new q(0,0,1),af={type:"added"},Rm={type:"removed"},Jr={type:"childadded",child:null},hl={type:"childremoved",child:null};class Mn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new q,t=new Ii,n=new Ca,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ye}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ws,Ha,this.up):xi.lookAt(Ha,Ws,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(xi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new q,Mi=new q,dl=new q,Si=new q,Qr=new q,es=new q,of=new q,pl=new q,ml=new q,_l=new q,gl=new Nt,vl=new Nt,xl=new Nt;class ii{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ti.subVectors(i,t),Mi.subVectors(n,t),dl.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Mi),l=ti.dot(dl),c=Mi.dot(Mi),u=Mi.dot(dl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return gl.setScalar(0),vl.setScalar(0),xl.setScalar(0),gl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),xl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gl,s.x),a.addScaledVector(vl,s.y),a.addScaledVector(xl,s.z),a}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Mi.subVectors(e,t),ti.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ti.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Qr.subVectors(i,n),es.subVectors(s,n),pl.subVectors(e,n);const l=Qr.dot(pl),c=es.dot(pl);if(l<=0&&c<=0)return t.copy(n);ml.subVectors(e,i);const u=Qr.dot(ml),f=es.dot(ml);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Qr,a);_l.subVectors(e,s);const d=Qr.dot(_l),g=es.dot(_l);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(es,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return of.subVectors(s,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(of,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Ml(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=hm(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ml(a,s,e+1/3),this.g=Ml(a,s,e),this.b=Ml(a,s,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(gn(Qt.r*255,0,255))*65536+Math.round(gn(Qt.g*255,0,255))*256+Math.round(gn(Qt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,s=Qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Xn){st.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Va);const n=il(Xi.h,Va.h,t),i=il(Xi.s,Va.s,t),s=il(Xi.l,Va.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new dt;dt.NAMES=Hh;let Cm=0;class Da extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ra(),this.name="",this.blending=ps,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=$l,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vh extends Da{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new q,Ga=new Mt;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class Gh extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pr extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pm=0;const Gn=new Ot,Sl=new Mn,ts=new q,Cn=new Pa,Xs=new Pa,qt=new q;class Bi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Wh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pr(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Cn.min,Xs.min),Cn.expandByPoint(qt),qt.addVectors(Cn.max,Xs.max),Cn.expandByPoint(qt)):(Cn.expandByPoint(Xs.min),Cn.expandByPoint(Xs.max))}Cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),qt.add(ts)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new q,l[C]=new q;const c=new q,u=new q,f=new q,h=new Mt,d=new Mt,g=new Mt,_=new q,m=new q;function p(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[M].add(_),o[x].add(_),l[C].add(m),l[M].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const x=y[C],P=x.start,N=x.count;for(let B=P,X=P+N;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new q,v=new q,R=new q,w=new q;function b(C){R.fromBufferAttribute(i,C),w.copy(R);const M=o[C];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(w,M);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,M=y.length;C<M;++C){const x=y[C],P=x.start,N=x.count;for(let B=P,X=P+N;B<X;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Bn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new Ot,dr=new zh,Wa=new $o,cf=new q,Xa=new q,qa=new q,Ya=new q,yl=new q,$a=new q,uf=new q,Ka=new q;class Ci extends Mn{constructor(e=new Bi,t=new Vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(yl.fromBufferAttribute(f,e),a?$a.addScaledVector(yl,u):$a.addScaledVector(yl.sub(t),u))}t.add($a)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Wa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Wa,cf)===null||dr.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),dr.copy(e.ray).applyMatrix4(lf),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=E;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);i=Za(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=Za(this,a,e,n,c,u,f,y,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=E;v<R;v+=3){const w=v,b=v+1,C=v+2;i=Za(this,p,e,n,c,u,f,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,v=m+2;i=Za(this,a,e,n,c,u,f,y,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Dm(r,e,t,n,i,s,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===sr,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:r}}function Za(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Xa),r.getVertexPosition(l,qa),r.getVertexPosition(c,Ya);const u=Dm(r,e,t,n,Xa,qa,Ya,uf);if(u){const f=new q;ii.getBarycoord(uf,Xa,qa,Ya,f),i&&(u.uv=ii.getInterpolatedAttribute(i,o,l,c,f,new Mt)),s&&(u.uv1=ii.getInterpolatedAttribute(s,o,l,c,f,new Mt)),a&&(u.normal=ii.getInterpolatedAttribute(a,o,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};ii.getNormal(Xa,qa,Ya,h.normal),u.face=h,u.barycoord=f}return u}class La extends Bi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(f,2));function g(_,m,p,y,E,v,R,w,b,C,M){const x=v/b,P=R/C,N=v/2,B=R/2,X=w/2,$=b+1,G=C+1;let W=0,V=0;const te=new q;for(let D=0;D<G;D++){const ue=D*P-B;for(let Le=0;Le<$;Le++){const Ke=Le*x-N;te[_]=Ke*y,te[m]=ue*E,te[p]=X,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),f.push(Le/b),f.push(1-D/C),W+=1}}for(let D=0;D<C;D++)for(let ue=0;ue<b;ue++){const Le=h+ue+$*D,Ke=h+ue+$*(D+1),K=h+(ue+1)+$*(D+1),ee=h+(ue+1)+$*D;l.push(Le,Ke,ee),l.push(Ke,K,ee),V+=6}o.addGroup(d,V,M),d+=V,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(r){const e={};for(let t=0;t<r.length;t++){const n=Rs(r[t]);for(const i in n)e[i]=n[i]}return e}function Lm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Um={clone:Rs,merge:cn};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Da{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qh extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new q,ff=new Mt,hf=new Mt;class qn extends qh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,ff,hf),t.subVectors(hf,ff)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Fm extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qn(ns,is,e,t);i.layers=this.layers,this.add(i);const s=new qn(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new qn(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new qn(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new qn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new qn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends xn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Om extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new La(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:er});s.uniforms.tEquirect.value=t;const a=new Ci(i,s),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=fi),new Fm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const El=new q,Bm=new q,zm=new Ye;class xr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=El.subVectors(n,t).cross(Bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(El),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zm.getNormalMatrix(e),i=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new $o,ja=new q;class $h{constructor(e=new xr,t=new xr,n=new xr,i=new xr,s=new xr,a=new xr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],E=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-d,v-p).normalize(),n[1].setComponents(l+s,h+c,m+d,v+p).normalize(),n[2].setComponents(l+a,h+u,m+g,v+y).normalize(),n[3].setComponents(l-a,h-u,m-g,v-y).normalize(),n[4].setComponents(l-o,h-f,m-_,v-E).normalize(),t===Ri)n[5].setComponents(l+o,h+f,m+_,v+E).normalize();else if(t===Uo)n[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ja.x=i.normal.x>0?e.max.x:e.min.x,ja.y=i.normal.y>0?e.max.y:e.min.y,ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function km(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ko extends Bi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;d.push(E,v,w),d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Pr(g,3)),this.setAttribute("normal",new Pr(_,3)),this.setAttribute("uv",new Pr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,t_=`#ifdef USE_BUMPMAP
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,k_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Kg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,t0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,n0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,i0=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,r0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,s0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,a0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,o0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,c0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,u0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,f0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,h0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,d0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,p0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,m0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,g0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,x0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$e={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:$m,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:jm,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:a_,color_pars_fragment:o_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:h_,displacementmap_pars_vertex:d_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:__,colorspace_fragment:g_,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:U_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:b_,fog_fragment:A_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:C_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:D_,lights_pars_begin:L_,lights_toon_fragment:I_,lights_toon_pars_fragment:N_,lights_phong_fragment:F_,lights_phong_pars_fragment:O_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:k_,lights_fragment_maps:H_,lights_fragment_end:V_,logdepthbuf_fragment:G_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:q_,map_fragment:Y_,map_pars_fragment:$_,map_particle_fragment:K_,map_particle_pars_fragment:Z_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:J_,morphinstance_vertex:Q_,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:rg,normal_fragment_maps:sg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:dg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:_g,project_vertex:gg,dithering_fragment:vg,dithering_pars_fragment:xg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Tg,shadowmask_pars_fragment:bg,skinbase_vertex:Ag,skinning_pars_vertex:wg,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Dg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ug,transmission_fragment:Ig,transmission_pars_fragment:Ng,uv_pars_fragment:Fg,uv_pars_vertex:Og,uv_vertex:Bg,worldpos_vertex:zg,background_vert:kg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distanceRGBA_vert:$g,distanceRGBA_frag:Kg,equirect_vert:Zg,equirect_frag:jg,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:r0,meshmatcap_frag:s0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:u0,meshphysical_frag:f0,meshtoon_vert:h0,meshtoon_frag:d0,points_vert:p0,points_frag:m0,shadow_vert:_0,shadow_frag:g0,sprite_vert:v0,sprite_frag:x0},_e={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ci={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new dt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new dt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ja={r:0,b:0,g:0},mr=new Ii,M0=new Ot;function S0(r,e,t,n,i,s,a){const o=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function _(y){let E=!1;const v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===qo)?(u===void 0&&(u=new Ci(new La(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Rs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),mr.copy(E.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(mr)),u.material.toneMapped=st.getTransfer(v.colorSpace)!==pt,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ci(new Ko(2,2),new Ni({name:"BackgroundMaterial",uniforms:Rs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(Ja,Xh(r)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function y0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(x,P,N,B,X){let $=!1;const G=f(B,N,P);s!==G&&(s=G,c(s.object)),$=d(x,B,N,X),$&&g(x,B,N,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(x,P,N,B),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,P,N){const B=N.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let G=$[B];return G===void 0&&(G=h(l()),$[B]=G),G}function h(x){const P=[],N=[],B=[];for(let X=0;X<t;X++)P[X]=0,N[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:x,attributes:{},index:null}}function d(x,P,N,B){const X=s.attributes,$=P.attributes;let G=0;const W=N.getAttributes();for(const V in W)if(W[V].location>=0){const D=X[V];let ue=$[V];if(ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),D===void 0||D.attribute!==ue||ue&&D.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(x,P,N,B){const X={},$=P.attributes;let G=0;const W=N.getAttributes();for(const V in W)if(W[V].location>=0){let D=$[V];D===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ue={};ue.attribute=D,D&&D.data&&(ue.data=D.data),X[V]=ue,G++}s.attributes=X,s.attributesNum=G,s.index=B}function _(){const x=s.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const N=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;N[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),X[x]!==P&&(r.vertexAttribDivisor(x,P),X[x]=P)}function y(){const x=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==x[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function E(x,P,N,B,X,$,G){G===!0?r.vertexAttribIPointer(x,P,N,X,$):r.vertexAttribPointer(x,P,N,B,X,$)}function v(x,P,N,B){_();const X=B.attributes,$=N.getAttributes(),G=P.defaultAttributeValues;for(const W in $){const V=$[W];if(V.location>=0){let te=X[W];if(te===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const D=te.normalized,ue=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const Ke=Le.buffer,K=Le.type,ee=Le.bytesPerElement,ge=K===r.INT||K===r.UNSIGNED_INT||te.gpuType===au;if(te.isInterleavedBufferAttribute){const ne=te.data,Ee=ne.stride,we=te.offset;if(ne.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,ne.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let ke=0;ke<V.locationSize;ke++)E(V.location+ke,ue/V.locationSize,K,D,Ee*ee,(we+ue/V.locationSize*ke)*ee,ge)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,te.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let ne=0;ne<V.locationSize;ne++)E(V.location+ne,ue/V.locationSize,K,D,ue*ee,ue/V.locationSize*ne*ee,ge)}}else if(G!==void 0){const D=G[W];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}y()}function R(){C();for(const x in n){const P=n[x];for(const N in P){const B=P[N];for(const X in B)u(B[X].object),delete B[X];delete P[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const N in P){const B=P[N];for(const X in B)u(B[X].object),delete B[X];delete P[N]}delete n[x.id]}function b(x){for(const P in n){const N=n[P];if(N[x.id]===void 0)continue;const B=N[x.id];for(const X in B)u(B[X].object),delete B[X];delete N[x.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function E0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==ri&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ui&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==wi&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function b0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new xr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,E=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,E,d);for(let R=0;R!==E;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function A0(r){let e=new WeakMap;function t(a,o){return o===nc?a.mapping=Ts:o===ic&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===nc||o===ic)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Om(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class w0 extends qh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,df=[.125,.215,.35,.446,.526,.582],br=20,Tl=new w0,pf=new dt;let bl=null,Al=0,wl=0,Rl=!1;const Mr=(1+Math.sqrt(5))/2,rs=1/Mr,mf=[new q(-Mr,rs,0),new q(Mr,rs,0),new q(-rs,0,Mr),new q(rs,0,Mr),new q(0,Mr,-rs),new q(0,Mr,rs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Al,wl),this._renderer.xr.enabled=Rl,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:wa,format:ri,colorSpace:Fs,depthBuffer:!1},i=gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=C0(s,e,t)}return i}_compileMaterial(e){const t=new Ci(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,i){const o=new qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pf),u.toneMapping=tr,u.autoClear=!1;const d=new Vh({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ci(new La,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(pf),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Qa(i,y*E,p>2?E:0,E,E),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ts||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ci(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mf[(i-s-1)%mf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ci(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let y=0;for(let b=0;b<br;++b){const C=b/_,M=Math.exp(-C*C/2);p.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const v=this._sizeLods[i],R=3*v*(i>E-us?i-E+us:0),w=4*(this._cubeSize-v);Qa(t,R,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Tl)}}function R0(r){const e=[],t=[],n=[];let i=r;const s=r-us+1+df.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-us?l=df[a-r+us-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(M,_*g*w),E.set(h,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const R=new Bi;R.setAttribute("position",new Bn(y,_)),R.setAttribute("uv",new Bn(E,m)),R.setAttribute("faceIndex",new Bn(v,p)),e.push(R),i>us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gf(r,e,t){const n=new zr(r,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function C0(r,e,t){const n=new Float32Array(br),i=new q(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function vf(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function xf(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function P0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===nc||l===ic,u=l===Ts||l===bs;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new _f(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new _f(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let E=0,v=y.length;E<v;E+=3){const R=y[E+0],w=y[E+1],b=y[E+2];h.push(R,w,w,b,b,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const R=E+0,w=E+1,b=E+2;h.push(R,w,w,b,b,R)}}else return;const m=new(Fh(h)?Wh:Gh)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function U0(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function I0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function N0(r,e,t){const n=new WeakMap,i=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*w*4*f),C=new Bh(b,R,w,f);C.type=wi,C.needsUpdate=!0;const M=v*4;for(let P=0;P<f;P++){const N=p[P],B=y[P],X=E[P],$=R*w*4*P;for(let G=0;G<N.count;G++){const W=G*M;g===!0&&(i.fromBufferAttribute(N,G),b[$+W+0]=i.x,b[$+W+1]=i.y,b[$+W+2]=i.z,b[$+W+3]=0),_===!0&&(i.fromBufferAttribute(B,G),b[$+W+4]=i.x,b[$+W+5]=i.y,b[$+W+6]=i.z,b[$+W+7]=0),m===!0&&(i.fromBufferAttribute(X,G),b[$+W+8]=i.x,b[$+W+9]=i.y,b[$+W+10]=i.z,b[$+W+11]=X.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new Mt(R,w)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function F0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Zh extends xn{constructor(e,t,n,i,s,a,o,l,c,u=ms){if(u!==ms&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Br),n===void 0&&u===ws&&(n=As),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jh=new xn,Mf=new Zh(1,1),Jh=new Bh,Qh=new Sm,ed=new Yh,Sf=[],yf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),bf=new Float32Array(4);function Bs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sf[i];if(s===void 0&&(s=new Float32Array(i),Sf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zo(r,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function O0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function B0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function H0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;bf.set(n),r.uniformMatrix2fv(this.addr,!1,bf),Xt(t,n)}}function V0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Tf.set(n),r.uniformMatrix3fv(this.addr,!1,Tf),Xt(t,n)}}function G0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ef.set(n),r.uniformMatrix4fv(this.addr,!1,Ef),Xt(t,n)}}function W0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function $0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function J0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mf.compareFunction=Nh,s=Mf):s=jh,t.setTexture2D(e||s,i)}function Q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function nv(r){switch(r){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return $0;case 36294:return K0;case 36295:return Z0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(r,e){r.uniform1fv(this.addr,e)}function rv(r,e){const t=Bs(e,this.size,2);r.uniform2fv(this.addr,t)}function sv(r,e){const t=Bs(e,this.size,3);r.uniform3fv(this.addr,t)}function av(r,e){const t=Bs(e,this.size,4);r.uniform4fv(this.addr,t)}function ov(r,e){const t=Bs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lv(r,e){const t=Bs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cv(r,e){const t=Bs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uv(r,e){r.uniform1iv(this.addr,e)}function fv(r,e){r.uniform2iv(this.addr,e)}function hv(r,e){r.uniform3iv(this.addr,e)}function dv(r,e){r.uniform4iv(this.addr,e)}function pv(r,e){r.uniform1uiv(this.addr,e)}function mv(r,e){r.uniform2uiv(this.addr,e)}function _v(r,e){r.uniform3uiv(this.addr,e)}function gv(r,e){r.uniform4uiv(this.addr,e)}function vv(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jh,s[a])}function xv(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qh,s[a])}function Mv(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ed,s[a])}function Sv(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function yv(r){switch(r){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}}class bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function Af(r,e){r.seq.push(e),r.map[e.id]=e}function Av(r,e,t){const n=r.name,i=n.length;for(Cl.lastIndex=0;;){const s=Cl.exec(n),a=Cl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Af(t,c===void 0?new Ev(o,r,e):new Tv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new bv(o),Af(t,f)),t=f}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Av(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const wv=37297;let Rv=0;function Cv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rf=new Ye;function Pv(r){st._getMatrix(Rf,st.workingColorSpace,r);const e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Yo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cv(r.getShaderSource(e),a)}else return i}function Dv(r,e){const t=Pv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lv(r,e){let t;switch(e){case Yp:t="Linear";break;case $p:t="Reinhard";break;case Kp:t="Cineon";break;case Zp:t="ACESFilmic";break;case Jp:t="AgX";break;case Qp:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new q;function Uv(){st.getLuminanceCoefficients(eo);const r=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Nv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Zs(r){return r!==""}function Pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(r){return r.replace(Ov,zv)}const Bv=new Map;function zv(r,e){let t=$e[e];if(t===void 0){const n=Bv.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uc(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(r){return r.replace(kv,Hv)}function Hv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xp:e="ENVMAP_BLENDING_MIX";break;case qp:e="ENVMAP_BLENDING_ADD";break}return e}function qv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vv(t),c=Gv(t),u=Wv(t),f=Xv(t),h=qv(t),d=Iv(t),g=Nv(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?$e.tonemapping_pars_fragment:"",t.toneMapping!==tr?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Uc(a),a=Pf(a,t),a=Df(a,t),o=Uc(o),o=Pf(o,t),o=Df(o,t),a=Lf(a),o=Lf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,v=y+p+o,R=wf(i,i.VERTEX_SHADER,E),w=wf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(w).trim();let $=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const W=Cf(i,R,"vertex"),V=Cf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+W+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||X==="")&&(G=!1);G&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(R),i.deleteShader(w),C=new Eo(i,_),M=Fv(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,wv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let $v=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zv(e),t.set(e,n)),n}}class Zv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function jv(r,e,t,n,i,s,a){const o=new kh,l=new Kv,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,N,B){const X=N.fog,$=B.geometry,G=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=W&&W.mapping===qo?W.image.height:null,te=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=D!==void 0?D.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ke,K,ee,ge;if(te){const ve=ci[te];Ke=ve.vertexShader,K=ve.fragmentShader}else Ke=M.vertexShader,K=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const ne=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,Ze=!!M.map,Ie=!!M.matcap,Pe=!!W,U=!!M.aoMap,mt=!!M.lightMap,Fe=!!M.bumpMap,O=!!M.normalMap,Te=!!M.displacementMap,nt=!!M.emissiveMap,Re=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,fe=M.transmission>0,oe=S&&!!M.anisotropyMap,pe=k&&!!M.clearcoatMap,Ge=k&&!!M.clearcoatNormalMap,ie=k&&!!M.clearcoatRoughnessMap,ae=J&&!!M.iridescenceMap,Ue=J&&!!M.iridescenceThicknessMap,De=Z&&!!M.sheenColorMap,xe=Z&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Ne=!!M.specularColorMap,rt=!!M.specularIntensityMap,L=fe&&!!M.transmissionMap,ce=fe&&!!M.thicknessMap,Y=!!M.gradientMap,j=!!M.alphaMap,le=M.alphaTest>0,he=!!M.alphaHash,Oe=!!M.extensions;let at=tr;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=r.toneMapping);const Dt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:K,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fs,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:Ie,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:mt,bumpMap:Fe,normalMap:O,displacementMap:h&&Te,emissiveMap:nt,normalMapObjectSpace:O&&M.normalMapType===rm,normalMapTangentSpace:O&&M.normalMapType===im,metalnessMap:Re,roughnessMap:A,anisotropy:S,anisotropyMap:oe,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:ae,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:rt,transmission:fe,transmissionMap:L,thicknessMap:ce,gradientMap:Y,opaque:M.transparent===!1&&M.blending===ps&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:he,combine:M.combine,mapUv:Ze&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:mt&&_(M.lightMap.channel),bumpMapUv:Fe&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:nt&&_(M.emissiveMap.channel),metalnessMapUv:Re&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Xe&&_(M.specularMap.channel),specularColorMapUv:Ne&&_(M.specularColorMap.channel),specularIntensityMapUv:rt&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(O||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Ze||j),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(x,M),E(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=g[M.type];let P;if(x){const N=ci[x];P=Um.clone(N.uniforms)}else P=M.uniforms;return P}function R(M,x){let P;for(let N=0,B=u.length;N<B;N++){const X=u[N];if(X.cacheKey===x){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Yv(r,x,M,s),u.push(P)),P}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function Jv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function If(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Qv),n.length>1&&n.sort(h||If),i.length>1&&i.sort(h||If)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function ex(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Nf,r.set(n,[a])):i>=s.length?(a=new Nf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function tx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new dt};break;case"SpotLight":t={position:new q,direction:new q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function nx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ix=0;function rx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sx(r){const e=new tx,t=nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Ot,a=new Ot;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,E=0,v=0,R=0,w=0,b=0;c.sort(rx);for(let M=0,x=c.length;M<x;M++){const P=c[M],N=P.color,B=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*B,f+=N.g*B,h+=N.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);b++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,V=t.get(P);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const W=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,W.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const W=P.shadow,V=t.get(P);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,n.version=ix++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ff(r){const e=new sx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ax(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ff(r),e.set(i,[o])):s>=a.length?(o=new Ff(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class ox extends Da{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends Da{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function fx(r,e,t){let n=new $h;const i=new Mt,s=new Mt,a=new Nt,o=new ox({depthPacking:nm}),l=new lx,c={},u=t.maxTextureSize,f={[sr]:vn,[vn]:sr,[bi]:bi},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bi;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ci(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(er),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==yi&&this.type===yi,X=p===yi&&this.type!==yi;for(let $=0,G=w.length;$<G;$++){const W=w[$],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||B===!0||X===!0){const ue=this.type!==yi?{minFilter:si,magFilter:si}:{};V.map!==null&&V.map.dispose(),V.map=new zr(i.x,i.y,ue),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const D=V.getViewportCount();for(let ue=0;ue<D;ue++){const Le=V.getViewport(ue);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),N.viewport(a),V.updateMatrices(W,ue),n=V.getFrustum(),v(b,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===yi&&y(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function y(w,b){const C=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function E(w,b,C,M){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=x.uuid,B=b.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let $=X[B];$===void 0&&($=x.clone(),X[B]=$,b.addEventListener("dispose",R)),x=$}if(x.visible=b.visible,x.wireframe=b.wireframe,M===yi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=C}return x}function v(w,b,C,M,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===yi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),X=w.material;if(Array.isArray(X)){const $=B.groups;for(let G=0,W=$.length;G<W;G++){const V=$[G],te=X[V.materialIndex];if(te&&te.visible){const D=E(w,te,M,x);w.onBeforeShadow(r,w,b,C,B,D,V),r.renderBufferDirect(C,null,B,D,w,V),w.onAfterShadow(r,w,b,C,B,D,V)}}}else if(X.visible){const $=E(w,X,M,x);w.onBeforeShadow(r,w,b,C,B,$,null),r.renderBufferDirect(C,null,B,$,w,null),w.onAfterShadow(r,w,b,C,B,$,null)}}const N=w.children;for(let B=0,X=N.length;B<X;B++)v(N[B],b,C,M,x)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const M=c[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const hx={[Kl]:Zl,[jl]:ec,[Jl]:tc,[Es]:Ql,[Zl]:Kl,[ec]:jl,[tc]:Jl,[Ql]:Es};function dx(r,e){function t(){let L=!1;const ce=new Nt;let Y=null;const j=new Nt(0,0,0,0);return{setMask:function(le){Y!==le&&!L&&(r.colorMask(le,le,le,le),Y=le)},setLocked:function(le){L=le},setClear:function(le,he,Oe,at,Dt){Dt===!0&&(le*=at,he*=at,Oe*=at),ce.set(le,he,Oe,at),j.equals(ce)===!1&&(r.clearColor(le,he,Oe,at),j.copy(ce))},reset:function(){L=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,Y=null,j=null,le=null;return{setReversed:function(he){if(ce!==he){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const at=le;le=null,this.setClear(at)}ce=he},getReversed:function(){return ce},setTest:function(he){he?ne(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(he){Y!==he&&!L&&(r.depthMask(he),Y=he)},setFunc:function(he){if(ce&&(he=hx[he]),j!==he){switch(he){case Kl:r.depthFunc(r.NEVER);break;case Zl:r.depthFunc(r.ALWAYS);break;case jl:r.depthFunc(r.LESS);break;case Es:r.depthFunc(r.LEQUAL);break;case Jl:r.depthFunc(r.EQUAL);break;case Ql:r.depthFunc(r.GEQUAL);break;case ec:r.depthFunc(r.GREATER);break;case tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=he}},setLocked:function(he){L=he},setClear:function(he){le!==he&&(ce&&(he=1-he),r.clearDepth(he),le=he)},reset:function(){L=!1,Y=null,j=null,le=null,ce=!1}}}function i(){let L=!1,ce=null,Y=null,j=null,le=null,he=null,Oe=null,at=null,Dt=null;return{setTest:function(ve){L||(ve?ne(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(ve){ce!==ve&&!L&&(r.stencilMask(ve),ce=ve)},setFunc:function(ve,be,qe){(Y!==ve||j!==be||le!==qe)&&(r.stencilFunc(ve,be,qe),Y=ve,j=be,le=qe)},setOp:function(ve,be,qe){(he!==ve||Oe!==be||at!==qe)&&(r.stencilOp(ve,be,qe),he=ve,Oe=be,at=qe)},setLocked:function(ve){L=ve},setClear:function(ve){Dt!==ve&&(r.clearStencil(ve),Dt=ve)},reset:function(){L=!1,ce=null,Y=null,j=null,le=null,he=null,Oe=null,at=null,Dt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,R=null,w=null,b=new dt(0,0,0),C=0,M=!1,x=null,P=null,N=null,B=null,X=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=W>=2);let te=null,D={};const ue=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Ke=new Nt().fromArray(ue),K=new Nt().fromArray(Le);function ee(L,ce,Y,j){const le=new Uint8Array(4),he=r.createTexture();r.bindTexture(L,he),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Oe=0;Oe<Y;Oe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ce+Oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return he}const ge={};ge[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(Es),Fe(!1),O(ku),ne(r.CULL_FACE),U(er);function ne(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function we(L,ce){return f[L]!==ce?(r.bindFramebuffer(L,ce),f[L]=ce,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function ke(L,ce){let Y=d,j=!1;if(L){Y=h.get(ce),Y===void 0&&(Y=[],h.set(ce,Y));const le=L.textures;if(Y.length!==le.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Oe=le.length;he<Oe;he++)Y[he]=r.COLOR_ATTACHMENT0+he;Y.length=le.length,j=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,j=!0);j&&r.drawBuffers(Y)}function Ze(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Ie={[Tr]:r.FUNC_ADD,[Rp]:r.FUNC_SUBTRACT,[Cp]:r.FUNC_REVERSE_SUBTRACT};Ie[Pp]=r.MIN,Ie[Dp]=r.MAX;const Pe={[Lp]:r.ZERO,[Up]:r.ONE,[Ip]:r.SRC_COLOR,[Yl]:r.SRC_ALPHA,[kp]:r.SRC_ALPHA_SATURATE,[Bp]:r.DST_COLOR,[Fp]:r.DST_ALPHA,[Np]:r.ONE_MINUS_SRC_COLOR,[$l]:r.ONE_MINUS_SRC_ALPHA,[zp]:r.ONE_MINUS_DST_COLOR,[Op]:r.ONE_MINUS_DST_ALPHA,[Hp]:r.CONSTANT_COLOR,[Vp]:r.ONE_MINUS_CONSTANT_COLOR,[Gp]:r.CONSTANT_ALPHA,[Wp]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,ce,Y,j,le,he,Oe,at,Dt,ve){if(L===er){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(ne(r.BLEND),_=!0),L!==wp){if(L!==m||ve!==M){if((p!==Tr||v!==Tr)&&(r.blendEquation(r.FUNC_ADD),p=Tr,v=Tr),ve)switch(L){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.ONE,r.ONE);break;case Hu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,R=null,w=null,b.set(0,0,0),C=0,m=L,M=ve}return}le=le||ce,he=he||Y,Oe=Oe||j,(ce!==p||le!==v)&&(r.blendEquationSeparate(Ie[ce],Ie[le]),p=ce,v=le),(Y!==y||j!==E||he!==R||Oe!==w)&&(r.blendFuncSeparate(Pe[Y],Pe[j],Pe[he],Pe[Oe]),y=Y,E=j,R=he,w=Oe),(at.equals(b)===!1||Dt!==C)&&(r.blendColor(at.r,at.g,at.b,Dt),b.copy(at),C=Dt),m=L,M=!1}function mt(L,ce){L.side===bi?Ee(r.CULL_FACE):ne(r.CULL_FACE);let Y=L.side===vn;ce&&(Y=!Y),Fe(Y),L.blending===ps&&L.transparent===!1?U(er):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function O(L){L!==Tp?(ne(r.CULL_FACE),L!==P&&(L===ku?r.cullFace(r.BACK):L===bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),P=L}function Te(L){L!==N&&(G&&r.lineWidth(L),N=L)}function nt(L,ce,Y){L?(ne(r.POLYGON_OFFSET_FILL),(B!==ce||X!==Y)&&(r.polygonOffset(ce,Y),B=ce,X=Y)):Ee(r.POLYGON_OFFSET_FILL)}function Re(L){L?ne(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+$-1),te!==L&&(r.activeTexture(L),te=L)}function S(L,ce,Y){Y===void 0&&(te===null?Y=r.TEXTURE0+$-1:Y=te);let j=D[Y];j===void 0&&(j={type:void 0,texture:void 0},D[Y]=j),(j.type!==L||j.texture!==ce)&&(te!==Y&&(r.activeTexture(Y),te=Y),r.bindTexture(L,ce||ge[L]),j.type=L,j.texture=ce)}function k(){const L=D[te];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){Ke.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function xe(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Xe(L,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let j=Y.get(L);j===void 0&&(j=r.getUniformBlockIndex(ce,L.name),Y.set(L,j))}function Ne(L,ce){const j=c.get(ce).get(L);l.get(ce)!==j&&(r.uniformBlockBinding(ce,j,L.__bindingPointIndex),l.set(ce,j))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,D={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,R=null,w=null,b=new dt(0,0,0),C=0,M=!1,x=null,P=null,N=null,B=null,X=null,Ke.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:we,drawBuffers:ke,useProgram:Ze,setBlending:U,setMaterial:mt,setFlipSided:Fe,setCullFace:O,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:Re,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ae,texImage3D:Ue,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Ge,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:De,viewport:xe,reset:rt}}function Of(r,e,t,n){const i=px(n);switch(t){case Rh:return r*e;case Ph:return r*e;case Dh:return r*e*2;case Lh:return r*e/i.components*i.byteLength;case cu:return r*e/i.components*i.byteLength;case Uh:return r*e*2/i.components*i.byteLength;case uu:return r*e*2/i.components*i.byteLength;case Ch:return r*e*3/i.components*i.byteLength;case ri:return r*e*4/i.components*i.byteLength;case fu:return r*e*4/i.components*i.byteLength;case vo:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oc:case cc:return Math.max(r,16)*Math.max(e,8)/4;case ac:case lc:return Math.max(r,8)*Math.max(e,8)/2;case uc:case fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yo:case wc:case Rc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ih:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pc:case Dc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function px(r){switch(r){case Ui:case bh:return{byteLength:1,components:1};case ga:case Ah:case wa:return{byteLength:2,components:1};case ou:case lu:return{byteLength:2,components:4};case Br:case au:case wi:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function mx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Io("canvas")}function _(A,S,k){let Q=1;const J=Re(A);if((J.width>k||J.height>k)&&(Q=k/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*J.width),fe=Math.floor(Q*J.height);f===void 0&&(f=g(Z,fe));const oe=S?g(Z,fe):f;return oe.width=Z,oe.height=fe,oe.getContext("2d").drawImage(A,0,0,Z,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+fe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,S,k,Q,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===r.RED&&(k===r.FLOAT&&(Z=r.R32F),k===r.HALF_FLOAT&&(Z=r.R16F),k===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.R8UI),k===r.UNSIGNED_SHORT&&(Z=r.R16UI),k===r.UNSIGNED_INT&&(Z=r.R32UI),k===r.BYTE&&(Z=r.R8I),k===r.SHORT&&(Z=r.R16I),k===r.INT&&(Z=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Z=r.RG32F),k===r.HALF_FLOAT&&(Z=r.RG16F),k===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RG8UI),k===r.UNSIGNED_SHORT&&(Z=r.RG16UI),k===r.UNSIGNED_INT&&(Z=r.RG32UI),k===r.BYTE&&(Z=r.RG8I),k===r.SHORT&&(Z=r.RG16I),k===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),k===r.UNSIGNED_INT&&(Z=r.RGB32UI),k===r.BYTE&&(Z=r.RGB8I),k===r.SHORT&&(Z=r.RGB16I),k===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),k===r.UNSIGNED_INT&&(Z=r.RGBA32UI),k===r.BYTE&&(Z=r.RGBA8I),k===r.SHORT&&(Z=r.RGBA16I),k===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const fe=J?Yo:st.getTransfer(Q);k===r.FLOAT&&(Z=r.RGBA32F),k===r.HALF_FLOAT&&(Z=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Z=fe===pt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,S){let k;return A?S===null||S===Br||S===As?k=r.DEPTH24_STENCIL8:S===wi?k=r.DEPTH32F_STENCIL8:S===ga&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Br||S===As?k=r.DEPTH_COMPONENT24:S===wi?k=r.DEPTH_COMPONENT32F:S===ga&&(k=r.DEPTH_COMPONENT16),k}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==si&&A.minFilter!==fi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&u.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),x(S)}function C(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,Q=h.get(k);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(Q).length===0&&h.delete(k)}n.remove(A)}function M(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const k=A.source,Q=h.get(k);delete Q[S.__cacheKey],a.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let J=0;J<S.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let Q=0,J=k.length;Q<J;Q++){const Z=n.get(k[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[Q])}n.remove(A)}let P=0;function N(){P=0}function B(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function X(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const k=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,S);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function G(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function W(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function V(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ee(k,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const te={[rc]:r.REPEAT,[Ar]:r.CLAMP_TO_EDGE,[sc]:r.MIRRORED_REPEAT},D={[si]:r.NEAREST,[em]:r.NEAREST_MIPMAP_NEAREST,[Ia]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[tl]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},ue={[sm]:r.NEVER,[fm]:r.ALWAYS,[am]:r.LESS,[Nh]:r.LEQUAL,[om]:r.EQUAL,[um]:r.GEQUAL,[lm]:r.GREATER,[cm]:r.NOTEQUAL};function Le(A,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fi||S.magFilter===tl||S.magFilter===Ia||S.magFilter===wr||S.minFilter===fi||S.minFilter===tl||S.minFilter===Ia||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,te[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,te[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,te[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===si||S.minFilter!==Ia&&S.minFilter!==wr||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const Z=X(S);if(Z!==A.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Z].usedTimes++;const fe=J[A.__cacheKey];fe!==void 0&&(J[A.__cacheKey].usedTimes--,fe.usedTimes===0&&M(S)),A.__cacheKey=Z,A.__webglTexture=J[Z].texture}return k}function K(A,S,k){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Ke(A,S),Z=S.source;t.bindTexture(Q,A.__webglTexture,r.TEXTURE0+k);const fe=n.get(Z);if(Z.version!==fe.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const oe=st.getPrimaries(st.workingColorSpace),pe=S.colorSpace===$i?null:st.getPrimaries(S.colorSpace),Ge=S.colorSpace===$i||oe===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ie=_(S.image,!1,i.maxTextureSize);ie=nt(S,ie);const ae=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let De=E(S.internalFormat,ae,Ue,S.colorSpace,S.isVideoTexture);Le(Q,S);let xe;const Xe=S.mipmaps,Ne=S.isVideoTexture!==!0,rt=fe.__version===void 0||J===!0,L=Z.dataReady,ce=R(S,ie);if(S.isDepthTexture)De=v(S.format===ws,S.type),rt&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ue,null));else if(S.isDataTexture)if(Xe.length>0){Ne&&rt&&t.texStorage2D(r.TEXTURE_2D,ce,De,Xe[0].width,Xe[0].height);for(let Y=0,j=Xe.length;Y<j;Y++)xe=Xe[Y],Ne?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,xe.width,xe.height,ae,Ue,xe.data):t.texImage2D(r.TEXTURE_2D,Y,De,xe.width,xe.height,0,ae,Ue,xe.data);S.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(r.TEXTURE_2D,ce,De,ie.width,ie.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,ae,Ue,ie.data)):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ue,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,De,Xe[0].width,Xe[0].height,ie.depth);for(let Y=0,j=Xe.length;Y<j;Y++)if(xe=Xe[Y],S.format!==ri)if(ae!==null)if(Ne){if(L)if(S.layerUpdates.size>0){const le=Of(xe.width,xe.height,S.format,S.type);for(const he of S.layerUpdates){const Oe=xe.data.subarray(he*le/xe.data.BYTES_PER_ELEMENT,(he+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,he,xe.width,xe.height,1,ae,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ie.depth,ae,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,De,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ie.depth,ae,Ue,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,De,xe.width,xe.height,ie.depth,0,ae,Ue,xe.data)}else{Ne&&rt&&t.texStorage2D(r.TEXTURE_2D,ce,De,Xe[0].width,Xe[0].height);for(let Y=0,j=Xe.length;Y<j;Y++)xe=Xe[Y],S.format!==ri?ae!==null?Ne?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,xe.width,xe.height,ae,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,xe.width,xe.height,ae,Ue,xe.data):t.texImage2D(r.TEXTURE_2D,Y,De,xe.width,xe.height,0,ae,Ue,xe.data)}else if(S.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,De,ie.width,ie.height,ie.depth),L)if(S.layerUpdates.size>0){const Y=Of(ie.width,ie.height,S.format,S.type);for(const j of S.layerUpdates){const le=ie.data.subarray(j*Y/ie.data.BYTES_PER_ELEMENT,(j+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,ae,Ue,le)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ue,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ae,Ue,ie.data);else if(S.isData3DTexture)Ne?(rt&&t.texStorage3D(r.TEXTURE_3D,ce,De,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ue,ie.data)):t.texImage3D(r.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ae,Ue,ie.data);else if(S.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(r.TEXTURE_2D,ce,De,ie.width,ie.height);else{let Y=ie.width,j=ie.height;for(let le=0;le<ce;le++)t.texImage2D(r.TEXTURE_2D,le,De,Y,j,0,ae,Ue,null),Y>>=1,j>>=1}}else if(Xe.length>0){if(Ne&&rt){const Y=Re(Xe[0]);t.texStorage2D(r.TEXTURE_2D,ce,De,Y.width,Y.height)}for(let Y=0,j=Xe.length;Y<j;Y++)xe=Xe[Y],Ne?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ae,Ue,xe):t.texImage2D(r.TEXTURE_2D,Y,De,ae,Ue,xe);S.generateMipmaps=!1}else if(Ne){if(rt){const Y=Re(ie);t.texStorage2D(r.TEXTURE_2D,ce,De,Y.width,Y.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ue,ie)}else t.texImage2D(r.TEXTURE_2D,0,De,ae,Ue,ie);m(S)&&p(Q),fe.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ee(A,S,k){if(S.image.length!==6)return;const Q=Ke(A,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const fe=st.getPrimaries(st.workingColorSpace),oe=S.colorSpace===$i?null:st.getPrimaries(S.colorSpace),pe=S.colorSpace===$i||fe===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let j=0;j<6;j++)!Ge&&!ie?ae[j]=_(S.image[j],!0,i.maxCubemapSize):ae[j]=ie?S.image[j].image:S.image[j],ae[j]=nt(S,ae[j]);const Ue=ae[0],De=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Xe=E(S.internalFormat,De,xe,S.colorSpace),Ne=S.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,L=J.dataReady;let ce=R(S,Ue);Le(r.TEXTURE_CUBE_MAP,S);let Y;if(Ge){Ne&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Xe,Ue.width,Ue.height);for(let j=0;j<6;j++){Y=ae[j].mipmaps;for(let le=0;le<Y.length;le++){const he=Y[le];S.format!==ri?De!==null?Ne?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,he.width,he.height,De,xe,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Xe,he.width,he.height,0,De,xe,he.data)}}}else{if(Y=S.mipmaps,Ne&&rt){Y.length>0&&ce++;const j=Re(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Xe,j.width,j.height)}for(let j=0;j<6;j++)if(ie){Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ae[j].width,ae[j].height,De,xe,ae[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,ae[j].width,ae[j].height,0,De,xe,ae[j].data);for(let le=0;le<Y.length;le++){const Oe=Y[le].image[j].image;Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Oe.width,Oe.height,De,xe,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Xe,Oe.width,Oe.height,0,De,xe,Oe.data)}}else{Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,xe,ae[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,De,xe,ae[j]);for(let le=0;le<Y.length;le++){const he=Y[le];Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,De,xe,he.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Xe,De,xe,he.image[j])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ge(A,S,k,Q,J,Z){const fe=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),pe=E(k.internalFormat,fe,oe,k.colorSpace),Ge=n.get(S),ie=n.get(k);if(ie.__renderTarget=S,!Ge.__hasExternalTextures){const ae=Math.max(1,S.width>>Z),Ue=Math.max(1,S.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,pe,ae,Ue,S.depth,0,fe,oe,null):t.texImage2D(J,Z,pe,ae,Ue,0,fe,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ie.__webglTexture,0,Fe(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ie.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(S.stencilBuffer,J),fe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Fe(S);O(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Z,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,A)}else{const Q=S.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],fe=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),pe=E(Z.internalFormat,fe,oe,Z.colorSpace),Ge=Fe(S);k&&O(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,pe,S.width,S.height):O(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const J=Q.__webglTexture,Z=Fe(S);if(S.depthTexture.format===ms)O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===ws)O(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ee(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),ne(S.__webglDepthbuffer[Q],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ne(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(A,S,k){const Q=n.get(A);S!==void 0&&ge(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&we(A)}function Ze(A){const S=A.texture,k=n.get(A),Q=n.get(S);A.addEventListener("dispose",b);const J=A.textures,Z=A.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let pe=0;pe<S.mipmaps.length;pe++)k.__webglFramebuffer[oe][pe]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(fe)for(let oe=0,pe=J.length;oe<pe;oe++){const Ge=n.get(J[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&O(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const pe=J[oe];k.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const Ge=s.convert(pe.format,pe.colorSpace),ie=s.convert(pe.type),ae=E(pe.internalFormat,Ge,ie,pe.colorSpace,A.isXRRenderTarget===!0),Ue=Fe(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ae,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(r.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ge(k.__webglFramebuffer[oe][pe],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ge(k.__webglFramebuffer[oe],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,pe=J.length;oe<pe;oe++){const Ge=J[oe],ie=n.get(Ge);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Le(r.TEXTURE_2D,Ge),ge(k.__webglFramebuffer,A,Ge,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Le(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)ge(k.__webglFramebuffer[pe],A,S,r.COLOR_ATTACHMENT0,oe,pe);else ge(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,oe,0);m(S)&&p(oe),t.unbindTexture()}A.depthBuffer&&we(A)}function Ie(A){const S=A.textures;for(let k=0,Q=S.length;k<Q;k++){const J=S[k];if(m(J)){const Z=y(A),fe=n.get(J).__webglTexture;t.bindTexture(Z,fe),p(Z),t.unbindTexture()}}}const Pe=[],U=[];function mt(A){if(A.samples>0){if(O(A)===!1){const S=A.textures,k=A.width,Q=A.height;let J=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(A),oe=S.length>1;if(oe)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Ge=n.get(S[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,k,Q,0,0,k,Q,J,r.NEAREST),l===!0&&(Pe.length=0,U.length=0,Pe.push(r.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pe.push(Z),U.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Ge=n.get(S[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Fe(A){return Math.min(i.maxSamples,A.samples)}function O(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function nt(A,S){const k=A.colorSpace,Q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Fs&&k!==$i&&(st.getTransfer(k)===pt?(Q!==ri||J!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=O}function _x(r,e){function t(n,i=$i){let s;const a=st.getTransfer(i);if(n===Ui)return r.UNSIGNED_BYTE;if(n===ou)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return r.BYTE;if(n===Ah)return r.SHORT;if(n===ga)return r.UNSIGNED_SHORT;if(n===au)return r.INT;if(n===Br)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===Rh)return r.ALPHA;if(n===Ch)return r.RGB;if(n===ri)return r.RGBA;if(n===Ph)return r.LUMINANCE;if(n===Dh)return r.LUMINANCE_ALPHA;if(n===ms)return r.DEPTH_COMPONENT;if(n===ws)return r.DEPTH_STENCIL;if(n===Lh)return r.RED;if(n===cu)return r.RED_INTEGER;if(n===Uh)return r.RG;if(n===uu)return r.RG_INTEGER;if(n===fu)return r.RGBA_INTEGER;if(n===vo||n===xo||n===Mo||n===So)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===oc||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uc||n===fc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===pc||n===mc||n===_c||n===gc||n===vc||n===xc||n===Mc||n===Sc||n===yc||n===Ec||n===Tc||n===bc||n===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===wc||n===Rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Cc||n===Pc||n===Dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class gx extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class to extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new to;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ni({vertexShader:xx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ci(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends Os{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new Sx,m=t.getContextAttributes();let p=null,y=null;const E=[],v=[],R=new Mt;let w=null;const b=new qn;b.viewport=new Nt;const C=new qn;C.viewport=new Nt;const M=[b,C],x=new gx;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new Pl,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new Pl,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new Pl,E[K]=ee),ee.getHandSpace()};function B(K){const ee=v.indexOf(K.inputSource);if(ee===-1)return;const ge=E[ee];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let K=0;K<E.length;K++){const ee=v[K];ee!==null&&(v[K]=null,E[K].disconnect(ee))}P=null,N=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new zr(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ge=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ws:ms,ge=m.stencil?As:Br);const Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Ee),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zr(h.textureWidth,h.textureHeight,{format:ri,type:Ui,depthTexture:new Zh(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let ee=0;ee<K.removed.length;ee++){const ge=K.removed[ee],ne=v.indexOf(ge);ne>=0&&(v[ne]=null,E[ne].disconnect(ge))}for(let ee=0;ee<K.added.length;ee++){const ge=K.added[ee];let ne=v.indexOf(ge);if(ne===-1){for(let we=0;we<E.length;we++)if(we>=v.length){v.push(ge),ne=we;break}else if(v[we]===null){v[we]=ge,ne=we;break}if(ne===-1)break}const Ee=E[ne];Ee&&Ee.connect(ge)}}const G=new q,W=new q;function V(K,ee,ge){G.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(ge.matrixWorld);const ne=G.distanceTo(W),Ee=ee.projectionMatrix.elements,we=ge.projectionMatrix.elements,ke=Ee[14]/(Ee[10]-1),Ze=Ee[14]/(Ee[10]+1),Ie=(Ee[9]+1)/Ee[5],Pe=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],mt=(we[8]+1)/we[0],Fe=ke*U,O=ke*mt,Te=ne/(-U+mt),nt=Te*-U;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Re=ke+Te,A=Ze+Te,S=Fe-nt,k=O+(ne-nt),Q=Ie*Ze/A*Re,J=Pe*Ze/A*Re;K.projectionMatrix.makePerspective(S,k,Q,J,Re,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ee=K.near,ge=K.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),x.near=C.near=b.near=ee,x.far=C.far=b.far=ge,(P!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far),b.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const ne=K.parent,Ee=x.cameras;te(x,ne);for(let we=0;we<Ee.length;we++)te(Ee[we],ne);Ee.length===2?V(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),D(K,x,ne)};function D(K,ee,ge){ge===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ue=null;function Le(K,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ne=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let we=0;we<ge.length;we++){const ke=ge[we];let Ze=null;if(d!==null)Ze=d.getViewport(ke);else{const Pe=f.getViewSubImage(h,ke);Ze=Pe.viewport,we===0&&(e.setRenderTargetTextures(y,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(y))}let Ie=M[we];Ie===void 0&&(Ie=new qn,Ie.layers.enable(we),Ie.viewport=new Nt,M[we]=Ie),Ie.matrix.fromArray(ke.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ke.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(x.matrix.copy(Ie.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(Ie)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=f.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&_.init(e,we,i.renderState)}}for(let ge=0;ge<E.length;ge++){const ne=v[ge],Ee=E[ge];ne!==null&&Ee!==void 0&&Ee.update(ne,ee,c||a)}ue&&ue(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ke=new Kh;Ke.setAnimationLoop(Le),this.setAnimationLoop=function(K){ue=K},this.dispose=function(){}}}const _r=new Ii,Ex=new Ot;function Tx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,_r.copy(v),_r.x*=-1,_r.y*=-1,_r.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(_r)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(y,R);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const E=f();y.__bindingPointIndex=E;const v=r.createBuffer(),R=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=i[y.id],v=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const P=C[M];if(d(P,w,M,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<B.length;$++){const G=B[$],W=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,E,v,R){const w=y.value,b=E+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const E=y.uniforms;let v=0;const R=16;for(let b=0,C=E.length;b<C;b++){const M=Array.isArray(E[b])?E[b]:[E[b]];for(let x=0,P=M.length;x<P;x++){const N=M[x],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,$=B.length;X<$;X++){const G=B[X],W=_(G),V=v%R,te=V%W.boundary,D=V+te;v+=te,D!==0&&R-D<W.storage&&(v+=R-D),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=W.storage}}}const w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ax{constructor(e={}){const{canvas:t=dm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let R=!1,w=0,b=0,C=null,M=-1,x=null;const P=new Nt,N=new Nt;let B=null;const X=new dt(0);let $=0,G=t.width,W=t.height,V=1,te=null,D=null;const ue=new Nt(0,0,G,W),Le=new Nt(0,0,G,W);let Ke=!1;const K=new $h;let ee=!1,ge=!1;const ne=new Ot,Ee=new Ot,we=new q,ke=new Nt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Pe(){return C===null?V:1}let U=n;function mt(T,I){return t.getContext(T,I)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${su}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const I="webgl2";if(U=mt(I,T),U===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,O,Te,nt,Re,A,S,k,Q,J,Z,fe,oe,pe,Ge,ie,ae,Ue,De,xe,Xe,Ne,rt,L;function ce(){Fe=new D0(U),Fe.init(),Ne=new _x(U,Fe),O=new T0(U,Fe,e,Ne),Te=new dx(U,Fe),O.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),nt=new I0(U),Re=new Jv,A=new mx(U,Fe,Te,Re,O,Ne,nt),S=new A0(v),k=new P0(v),Q=new km(U),rt=new y0(U,Q),J=new L0(U,Q,nt,rt),Z=new F0(U,J,Q,nt),De=new N0(U,O,A),ie=new b0(Re),fe=new jv(v,S,k,Fe,O,rt,ie),oe=new Tx(v,Re),pe=new ex,Ge=new ax(Fe),Ue=new S0(v,S,k,Te,Z,d,l),ae=new fx(v,Z,O),L=new bx(U,nt,O,Te),xe=new E0(U,Fe,nt),Xe=new U0(U,Fe,nt),nt.programs=fe.programs,v.capabilities=O,v.extensions=Fe,v.properties=Re,v.renderLists=pe,v.shadowMap=ae,v.state=Te,v.info=nt}ce();const Y=new yx(v,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,W,!1))},this.getSize=function(T){return T.set(G,W)},this.setSize=function(T,I,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,W=I,t.width=Math.floor(T*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(G*V,W*V).floor()},this.setDrawingBufferSize=function(T,I,z){G=T,W=I,V=z,t.width=Math.floor(T*z),t.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,I,z,H){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,I,z,H),Te.viewport(P.copy(ue).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,I,z,H){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,I,z,H),Te.scissor(N.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){Te.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,I=!0,z=!0){let H=0;if(T){let F=!1;if(C!==null){const re=C.texture.format;F=re===fu||re===uu||re===cu}if(F){const re=C.texture.type,se=re===Ui||re===Br||re===ga||re===As||re===ou||re===lu,de=Ue.getClearColor(),Me=Ue.getClearAlpha(),Be=de.r,Ve=de.g,ye=de.b;se?(g[0]=Be,g[1]=Ve,g[2]=ye,g[3]=Me,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Be,_[1]=Ve,_[2]=ye,_[3]=Me,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}I&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),Ge.dispose(),Re.dispose(),S.dispose(),k.dispose(),Z.dispose(),rt.dispose(),L.dispose(),fe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",me),Y.removeEventListener("sessionend",He),Ae.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=nt.autoReset,I=ae.enabled,z=ae.autoUpdate,H=ae.needsUpdate,F=ae.type;ce(),nt.autoReset=T,ae.enabled=I,ae.autoUpdate=z,ae.needsUpdate=H,ae.type=F}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const I=T.target;I.removeEventListener("dispose",Oe),at(I)}function at(T){Dt(T),Re.remove(T)}function Dt(T){const I=Re.get(T).programs;I!==void 0&&(I.forEach(function(z){fe.releaseProgram(z)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,H,F,re){I===null&&(I=Ze);const se=F.isMesh&&F.matrixWorld.determinant()<0,de=An(T,I,z,H,F);Te.setMaterial(H,se);let Me=z.index,Be=1;if(H.wireframe===!0){if(Me=J.getWireframeAttribute(z),Me===void 0)return;Be=2}const Ve=z.drawRange,ye=z.attributes.position;let We=Ve.start*Be,ot=(Ve.start+Ve.count)*Be;re!==null&&(We=Math.max(We,re.start*Be),ot=Math.min(ot,(re.start+re.count)*Be)),Me!==null?(We=Math.max(We,0),ot=Math.min(ot,Me.count)):ye!=null&&(We=Math.max(We,0),ot=Math.min(ot,ye.count));const ct=ot-We;if(ct<0||ct===1/0)return;rt.setup(F,H,de,z,Me);let wt,ut=xe;if(Me!==null&&(wt=Q.get(Me),ut=Xe,ut.setIndex(wt)),F.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Pe()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(F.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),Te.setLineWidth(Ce*Pe()),F.isLineSegments?ut.setMode(U.LINES):F.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else F.isPoints?ut.setMode(U.POINTS):F.isSprite&&ut.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,_i=F._multiDrawCounts,ft=F._multiDrawCount,Jn=Me?Q.get(Me).bytesPerElement:1,Wr=Re.get(H).currentProgram.getUniforms();for(let wn=0;wn<ft;wn++)Wr.setValue(U,"_gl_DrawID",wn),ut.render(Ce[wn]/Jn,_i[wn])}else if(F.isInstancedMesh)ut.renderInstances(We,ct,F.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_i=Math.min(z.instanceCount,Ce);ut.renderInstances(We,ct,_i)}else ut.render(We,ct)};function ve(T,I,z){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,_t(T,I,z),T.side=sr,T.needsUpdate=!0,_t(T,I,z),T.side=bi):_t(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),p=Ge.get(z),p.init(I),E.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let se=0;se<re.length;se++){const de=re[se];ve(de,z,F),H.add(de)}else ve(re,z,F),H.add(re)}),E.pop(),p=null,H},this.compileAsync=function(T,I,z=null){const H=this.compile(T,I,z);return new Promise(F=>{function re(){if(H.forEach(function(se){Re.get(se).currentProgram.isReady()&&H.delete(se)}),H.size===0){F(T);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let be=null;function qe(T){be&&be(T)}function me(){Ae.stop()}function He(){Ae.start()}const Ae=new Kh;Ae.setAnimationLoop(qe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){be=T,Y.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},Y.addEventListener("sessionstart",me),Y.addEventListener("sessionend",He),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,C),p=Ge.get(T,E.length),p.init(I),E.push(p),Ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(Ee),ge=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,ge),m=pe.get(T,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&ze(re,I,-1/0,v.sortObjects)}ze(T,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,D),Ie=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ie&&Ue.addToRenderList(m,T),this.info.render.frame++,ee===!0&&ie.beginShadows();const z=p.state.shadowsArray;ae.render(z,T,I),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),I.isArrayCamera){const re=I.cameras;if(F.length>0)for(let se=0,de=re.length;se<de;se++){const Me=re[se];Je(H,F,T,Me)}Ie&&Ue.render(T);for(let se=0,de=re.length;se<de;se++){const Me=re[se];Ut(m,T,Me,Me.viewport)}}else F.length>0&&Je(H,F,T,I),Ie&&Ue.render(T),Ut(m,T,I);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,I),rt.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],ee===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ze(T,I,z,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){H&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const se=Z.update(T),de=T.material;de.visible&&m.push(T,se,de,z,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const se=Z.update(T),de=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),ke.copy(se.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(de)){const Me=se.groups;for(let Be=0,Ve=Me.length;Be<Ve;Be++){const ye=Me[Be],We=de[ye.materialIndex];We&&We.visible&&m.push(T,se,We,z,ke.z,ye)}}else de.visible&&m.push(T,se,de,z,ke.z,null)}}const re=T.children;for(let se=0,de=re.length;se<de;se++)ze(re[se],I,z,H)}function Ut(T,I,z,H){const F=T.opaque,re=T.transmissive,se=T.transparent;p.setupLightsView(z),ee===!0&&ie.setGlobalState(v.clippingPlanes,z),H&&Te.viewport(P.copy(H)),F.length>0&&St(F,I,z),re.length>0&&St(re,I,z),se.length>0&&St(se,I,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Je(T,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new zr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?wa:Ui,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],se=H.viewport||P;re.setSize(se.z,se.w);const de=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(X),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Ie&&Ue.render(z);const Me=v.toneMapping;v.toneMapping=tr;const Be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ee===!0&&ie.setGlobalState(v.clippingPlanes,H),St(T,z,H),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ye=0,We=I.length;ye<We;ye++){const ot=I[ye],ct=ot.object,wt=ot.geometry,ut=ot.material,Ce=ot.group;if(ut.side===bi&&ct.layers.test(H.layers)){const _i=ut.side;ut.side=vn,ut.needsUpdate=!0,Ht(ct,z,H,wt,ut,Ce),ut.side=_i,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(de),v.setClearColor(X,$),Be!==void 0&&(H.viewport=Be),v.toneMapping=Me}function St(T,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,re=T.length;F<re;F++){const se=T[F],de=se.object,Me=se.geometry,Be=H===null?se.material:H,Ve=se.group;de.layers.test(z.layers)&&Ht(de,I,z,Me,Be,Ve)}}function Ht(T,I,z,H,F,re){T.onBeforeRender(v,I,z,H,F,re),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,I,z,H,T,re),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=vn,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,T,re),F.side=sr,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,T,re),F.side=bi):v.renderBufferDirect(z,I,H,F,T,re),T.onAfterRender(v,I,z,H,F,re)}function _t(T,I,z){I.isScene!==!0&&(I=Ze);const H=Re.get(T),F=p.state.lights,re=p.state.shadowsArray,se=F.state.version,de=fe.getParameters(T,F.state,re,I,z),Me=fe.getProgramCacheKey(de);let Be=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Oe),Be=new Map,H.programs=Be);let Ve=Be.get(Me);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===se)return lt(T,de),Ve}else de.uniforms=fe.getUniforms(T),T.onBeforeCompile(de,v),Ve=fe.acquireProgram(de,Me),Be.set(Me,Ve),H.uniforms=de.uniforms;const ye=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ye.clippingPlanes=ie.uniform),lt(T,de),H.needsLights=an(T),H.lightsStateVersion=se,H.needsLights&&(ye.ambientLightColor.value=F.state.ambient,ye.lightProbe.value=F.state.probe,ye.directionalLights.value=F.state.directional,ye.directionalLightShadows.value=F.state.directionalShadow,ye.spotLights.value=F.state.spot,ye.spotLightShadows.value=F.state.spotShadow,ye.rectAreaLights.value=F.state.rectArea,ye.ltc_1.value=F.state.rectAreaLTC1,ye.ltc_2.value=F.state.rectAreaLTC2,ye.pointLights.value=F.state.point,ye.pointLightShadows.value=F.state.pointShadow,ye.hemisphereLights.value=F.state.hemi,ye.directionalShadowMap.value=F.state.directionalShadowMap,ye.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ye.spotShadowMap.value=F.state.spotShadowMap,ye.spotLightMatrix.value=F.state.spotLightMatrix,ye.spotLightMap.value=F.state.spotLightMap,ye.pointShadowMap.value=F.state.pointShadowMap,ye.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function gt(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Eo.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function lt(T,I){const z=Re.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function An(T,I,z,H,F){I.isScene!==!0&&(I=Ze),A.resetTextureUnits();const re=I.fog,se=H.isMeshStandardMaterial?I.environment:null,de=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fs,Me=(H.isMeshStandardMaterial?k:S).get(H.envMap||se),Be=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ve=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,ot=!!z.morphAttributes.color;let ct=tr;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=v.toneMapping);const wt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=wt!==void 0?wt.length:0,Ce=Re.get(H),_i=p.state.lights;if(ee===!0&&(ge===!0||T!==x)){const Vn=T===x&&H.id===M;ie.setState(H,T,Vn)}let ft=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==_i.state.version||Ce.outputColorSpace!==de||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Me||H.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==Ve||Ce.morphTargets!==ye||Ce.morphNormals!==We||Ce.morphColors!==ot||Ce.toneMapping!==ct||Ce.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Ce.__version=H.version);let Jn=Ce.currentProgram;ft===!0&&(Jn=_t(H,I,F));let Wr=!1,wn=!1,zs=!1;const Tt=Jn.getUniforms(),ai=Ce.uniforms;if(Te.useProgram(Jn.program)&&(Wr=!0,wn=!0,zs=!0),H.id!==M&&(M=H.id,wn=!0),Wr||x!==T){Te.buffers.depth.getReversed()?(ne.copy(T.projectionMatrix),mm(ne),_m(ne),Tt.setValue(U,"projectionMatrix",ne)):Tt.setValue(U,"projectionMatrix",T.projectionMatrix),Tt.setValue(U,"viewMatrix",T.matrixWorldInverse);const zi=Tt.map.cameraPosition;zi!==void 0&&zi.setValue(U,we.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,wn=!0,zs=!0)}if(F.isSkinnedMesh){Tt.setOptional(U,F,"bindMatrix"),Tt.setOptional(U,F,"bindMatrixInverse");const Vn=F.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Tt.setValue(U,"boneTexture",Vn.boneTexture,A))}F.isBatchedMesh&&(Tt.setOptional(U,F,"batchingTexture"),Tt.setValue(U,"batchingTexture",F._matricesTexture,A),Tt.setOptional(U,F,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",F._indirectTexture,A),Tt.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",F._colorsTexture,A));const ks=z.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&De.update(F,z,Jn),(wn||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,Tt.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ai.envMap.value=Me,ai.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(ai.envMapIntensity.value=I.environmentIntensity),wn&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Et(ai,zs),re&&H.fog===!0&&oe.refreshFogUniforms(ai,re),oe.refreshMaterialUniforms(ai,H,V,W,p.state.transmissionRenderTarget[T.id]),Eo.upload(U,gt(Ce),ai,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Eo.upload(U,gt(Ce),ai,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(U,"center",F.center),Tt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(U,"normalMatrix",F.normalMatrix),Tt.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vn=H.uniformsGroups;for(let zi=0,ki=Vn.length;zi<ki;zi++){const zu=Vn[zi];L.update(zu,Jn),L.bind(zu,Jn)}}return Jn}function Et(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function an(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,I,z){Re.get(T.texture).__webglTexture=I,Re.get(T.depthTexture).__webglTexture=z;const H=Re.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const z=Re.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){C=T,w=I,b=z;let H=!0,F=null,re=!1,se=!1;if(T){const Me=Re.get(T);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Me.__hasExternalTextures)A.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ye=T.depthTexture;if(Me.__boundDepthTexture!==ye){if(ye!==null&&Re.has(ye)&&(T.width!==ye.image.width||T.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(se=!0);const Ve=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[I])?F=Ve[I][z]:F=Ve[I],re=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?F=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[z]:F=Ve,P.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else P.copy(ue).multiplyScalar(V).floor(),N.copy(Le).multiplyScalar(V).floor(),B=Ke;if(Te.bindFramebuffer(U.FRAMEBUFFER,F)&&H&&Te.drawBuffers(T,F),Te.viewport(P),Te.scissor(N),Te.setScissorTest(B),re){const Me=Re.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,z)}else if(se){const Me=Re.get(T.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,Be)}M=-1},this.readRenderTargetPixels=function(T,I,z,H,F,re,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){Te.bindFramebuffer(U.FRAMEBUFFER,de);try{const Me=T.texture,Be=Me.format,Ve=Me.type;if(!O.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&z>=0&&z<=T.height-F&&U.readPixels(I,z,H,F,Ne.convert(Be),Ne.convert(Ve),re)}finally{const Me=C!==null?Re.get(C).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,I,z,H,F,re,se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(de=de[se]),de){const Me=T.texture,Be=Me.format,Ve=Me.type;if(!O.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-H&&z>=0&&z<=T.height-F){Te.bindFramebuffer(U.FRAMEBUFFER,de);const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(I,z,H,F,Ne.convert(Be),Ne.convert(Ve),0);const We=C!==null?Re.get(C).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,We);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pm(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(ye),U.deleteSync(ot),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,z=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(T.image.width*H),re=Math.floor(T.image.height*H),se=I!==null?I.x:0,de=I!==null?I.y:0;A.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,se,de,F,re),Te.unbindTexture()},this.copyTextureToTexture=function(T,I,z=null,H=null,F=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],I=arguments[2],F=arguments[3]||0,z=null);let re,se,de,Me,Be,Ve,ye,We,ot;const ct=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(re=z.max.x-z.min.x,se=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,Be=z.min.y,Ve=z.isBox3?z.min.z:0):(re=ct.width,se=ct.height,de=ct.depth||1,Me=0,Be=0,Ve=0),H!==null?(ye=H.x,We=H.y,ot=H.z):(ye=0,We=0,ot=0);const wt=Ne.convert(I.format),ut=Ne.convert(I.type);let Ce;I.isData3DTexture?(A.setTexture3D(I,0),Ce=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),Ce=U.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const _i=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jn=U.getParameter(U.UNPACK_SKIP_PIXELS),Wr=U.getParameter(U.UNPACK_SKIP_ROWS),wn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const zs=T.isDataArrayTexture||T.isData3DTexture,Tt=I.isDataArrayTexture||I.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ai=Re.get(T),ks=Re.get(I),Vn=Re.get(ai.__renderTarget),zi=Re.get(ks.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let ki=0;ki<de;ki++)zs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,F,Ve+ki),T.isDepthTexture?(Tt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,F,ot+ki),U.blitFramebuffer(Me,Be,re,se,ye,We,re,se,U.DEPTH_BUFFER_BIT,U.NEAREST)):Tt?U.copyTexSubImage3D(Ce,F,ye,We,ot+ki,Me,Be,re,se):U.copyTexSubImage2D(Ce,F,ye,We,ot+ki,Me,Be,re,se);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ce,F,ye,We,ot,re,se,de,wt,ut,ct.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,F,ye,We,ot,re,se,de,wt,ct.data):U.texSubImage3D(Ce,F,ye,We,ot,re,se,de,wt,ut,ct):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,ye,We,re,se,wt,ut,ct.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,ye,We,ct.width,ct.height,wt,ct.data):U.texSubImage2D(U.TEXTURE_2D,F,ye,We,re,se,wt,ut,ct);U.pixelStorei(U.UNPACK_ROW_LENGTH,_i),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wn),F===0&&I.generateMipmaps&&U.generateMipmap(Ce),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z=null,H=null,F=0){return T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],I=arguments[3],F=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,I,z,H,F)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class wx extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rx extends Da{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bf=new Ot,Ic=new zh,no=new $o,io=new q;class Cx extends Mn{constructor(e=new Bi,t=new Rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Bf.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);io.fromBufferAttribute(f,m),zf(io,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)io.fromBufferAttribute(f,g),zf(io,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zf(r,e,t,n,i,s,a){const o=Ic.distanceSqToPoint(r);if(o<t){const l=new q;Ic.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);function Px(){const r=document.getElementById("hero-canvas");if(!r)return;const e=new wx,t=new qn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=100;const n=new Ax({canvas:r,alpha:!0,antialias:!1});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const i=2e3,s=new Float32Array(i*3),a=new Float32Array(i),o=new Float32Array(i),l=new Float32Array(i);for(let y=0;y<i;y++){s[y*3]=(Math.random()-.5)*600,s[y*3+1]=(Math.random()-.5)*600,s[y*3+2]=(Math.random()-.5)*600;const E=(s[y*3+2]+300)/600;a[y]=.5+E*1.5,o[y]=.4+E*.6,l[y]=.05+Math.random()*.15}const c=new Bi;c.setAttribute("position",new Bn(s,3)),c.setAttribute("aSize",new Bn(a,1)),c.setAttribute("aOpacity",new Bn(o,1));const u=new Ni({transparent:!0,depthWrite:!1,blending:ql,uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float aSize;
      attribute float aOpacity;
      varying float vOpacity;
      uniform float uPixelRatio;

      void main() {
        vOpacity = aOpacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aSize * uPixelRatio * (200.0 / -mvPosition.z);
        gl_PointSize = max(gl_PointSize, 0.5);
      }
    `,fragmentShader:`
      varying float vOpacity;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float strength = 1.0 - (dist * 2.0);
        strength = pow(strength, 1.5);
        gl_FragColor = vec4(1.0, 1.0, 1.0, strength * vOpacity);
      }
    `}),f=new Cx(c,u);e.add(f);const h={x:0,y:0,targetX:0,targetY:0};let d=0,g=1;document.addEventListener("mousemove",y=>{h.targetX=(y.clientX/window.innerWidth-.5)*2,h.targetY=(y.clientY/window.innerHeight-.5)*2});let _=0;window.addEventListener("scroll",()=>{const y=window.scrollY||0;d=Math.abs(y-_),_=y},{passive:!0});const m=document.querySelector(".hero");m&&new IntersectionObserver(E=>{E.forEach(v=>{r.style.opacity=v.isIntersecting?"1":"0"})},{threshold:.05}).observe(m),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),u.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2)});function p(){requestAnimationFrame(p),h.x+=(h.targetX-h.x)*.05,h.y+=(h.targetY-h.y)*.05,t.position.x=h.x*15,t.position.y=-h.y*15,t.lookAt(e.position);const y=g+Math.min(d*.3,8);d*=.95;const E=c.attributes.position.array;for(let v=0;v<i;v++)E[v*3+2]+=l[v]*y,E[v*3+2]>300&&(E[v*3+2]=-300,E[v*3]=(Math.random()-.5)*600,E[v*3+1]=(Math.random()-.5)*600);c.attributes.position.needsUpdate=!0,f.rotation.z+=1e-4,n.render(e,t)}p()}function Dx(){const r=document.querySelector(".navbar"),e=document.querySelector(".hamburger"),t=document.querySelector(".mobile-nav");if(!r)return;let n=!1;window.addEventListener("scroll",()=>{n||(requestAnimationFrame(()=>{window.scrollY>40?r.classList.add("scrolled"):r.classList.remove("scrolled"),n=!1}),n=!0)},{passive:!0}),e&&t&&(e.addEventListener("click",()=>{const s=t.classList.toggle("is-open");e.classList.toggle("is-open"),e.setAttribute("aria-expanded",s),document.body.style.overflow=s?"hidden":""}),t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),document.body.style.overflow=""})})),document.querySelectorAll(".has-dropdown > button").forEach(s=>{s.addEventListener("keydown",a=>{const o=s.nextElementSibling;(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),o.classList.toggle("show")),a.key==="Escape"&&o.classList.remove("show")})}),document.addEventListener("click",s=>{s.target.closest(".has-dropdown")||document.querySelectorAll(".dropdown.show").forEach(a=>a.classList.remove("show"))});const i=window.location.pathname;document.querySelectorAll(".navbar__nav a").forEach(s=>{(s.getAttribute("href")===i||i==="/"&&s.getAttribute("href")==="/"||i.includes("index")&&s.getAttribute("href")==="/")&&s.classList.add("active")})}function Lx(){const r=document.querySelectorAll("[data-tilt]");r.length&&r.forEach(e=>{let t=null,n=0,i=0,s=0,a=0;e.addEventListener("mousemove",l=>{const c=e.getBoundingClientRect(),u=((l.clientX-c.left)/c.width-.5)*2,f=((l.clientY-c.top)/c.height-.5)*2;s=u,a=f;const h=(l.clientX-c.left)/c.width*100,d=(l.clientY-c.top)/c.height*100;e.style.setProperty("--shine-x",`${h}%`),e.style.setProperty("--shine-y",`${d}%`),t||(t=requestAnimationFrame(o))}),e.addEventListener("mouseleave",()=>{s=0,a=0,t&&(cancelAnimationFrame(t),t=null),e.style.transform="",e.style.transition="transform 500ms ease",setTimeout(()=>{e.style.transition=""},500)}),e.addEventListener("mouseenter",()=>{e.style.transition="none"});function o(){n+=(s-n)*.15,i+=(a-i)*.15,e.style.transform=`perspective(800px) rotateX(${-i*8}deg) rotateY(${n*8}deg) translateZ(8px)`,Math.abs(s-n)>.001||Math.abs(a-i)>.001?t=requestAnimationFrame(o):t=null}})}function Ux(){if(window.innerWidth<768)return;const r=document.querySelectorAll(".btn-magnetic");r.length&&(document.addEventListener("mousemove",e=>{r.forEach(t=>{const n=t.getBoundingClientRect(),i=n.left+n.width/2,s=n.top+n.height/2,a=Math.sqrt(Math.pow(e.clientX-i,2)+Math.pow(e.clientY-s,2)),o=80;if(a<o){const l=1-a/o,c=(e.clientX-i)*l*.4,u=(e.clientY-s)*l*.4;t.style.transform=`translate(${c}px, ${u}px)`,t.style.transition="transform 150ms ease";const f=t.querySelector(".btn-text");f&&(f.style.transform=`translate(${c*.2}px, ${u*.2}px)`,f.style.transition="transform 150ms ease")}else{t.style.transform="translate(0, 0)",t.style.transition="transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";const l=t.querySelector(".btn-text");l&&(l.style.transform="translate(0, 0)",l.style.transition="transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)")}})}),r.forEach(e=>{e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),i=(t.clientX-n.left)/n.width*100,s=(t.clientY-n.top)/n.height*100;e.style.setProperty("--ripple-x",`${i}%`),e.style.setProperty("--ripple-y",`${s}%`)})}))}function Ix(){window.innerWidth<768||document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",e=>{const t=r.getAttribute("href");if(t==="#")return;const n=document.querySelector(t);if(n){e.preventDefault();const i=n.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:i,behavior:"smooth"})}})})}function Nx(){const r=document.querySelector(".stats-section");if(!r)return;const e=r.querySelectorAll("[data-count]");function t(s){return 1-Math.pow(1-s,3)}function n(s,a,o=2200){if(s.dataset.animated==="true")return;s.dataset.animated="true";const l=performance.now();s.dataset.suffix;const c=a>=1e3;function u(h){return c?h.toLocaleString():h.toString()}function f(h){const d=h-l,g=Math.min(d/o,1),_=t(g),m=Math.floor(_*a);s.textContent=u(m),g<1?requestAnimationFrame(f):s.textContent=u(a)}requestAnimationFrame(f)}const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(e.forEach(o=>{const l=parseInt(o.dataset.count,10);n(o,l)}),i.unobserve(a.target))})},{threshold:.3});i.observe(r)}function Fx(){document.querySelectorAll(".carousel-wrapper").forEach(e=>{var _;const t=e.querySelector(".carousel-track"),n=e.querySelector(".carousel-prev"),i=e.querySelector(".carousel-next"),s=e.querySelector(".carousel-dots");if(!t)return;const a=t.querySelectorAll(".carousel-card"),o=((_=a[0])==null?void 0:_.offsetWidth)||380,l=24;let c=0;const u=Math.max(0,a.length-Math.floor(t.offsetWidth/(o+l)));s&&a.forEach((m,p)=>{if(p<=u){const y=document.createElement("button");y.classList.add("carousel-dot"),p===0&&y.classList.add("active"),y.setAttribute("aria-label",`Go to slide ${p+1}`),y.addEventListener("click",()=>f(p)),s.appendChild(y)}});function f(m){c=Math.max(0,Math.min(m,u)),t.scrollTo({left:c*(o+l),behavior:"smooth"}),h()}function h(){s&&s.querySelectorAll(".carousel-dot").forEach((m,p)=>{m.classList.toggle("active",p===c)})}n&&n.addEventListener("click",()=>f(c-1)),i&&i.addEventListener("click",()=>f(c+1));let d;t.addEventListener("scroll",()=>{clearTimeout(d),d=setTimeout(()=>{const m=t.scrollLeft,p=Math.round(m/(o+l));p!==c&&(c=p,h())},100)},{passive:!0});let g=setInterval(()=>{c>=u?f(0):f(c+1)},5e3);e.addEventListener("mouseenter",()=>clearInterval(g)),e.addEventListener("mouseleave",()=>{g=setInterval(()=>{c>=u?f(0):f(c+1)},5e3)})})}function Ox(){const r=document.querySelectorAll(".accordion-item");r.length&&r.forEach(e=>{const t=e.querySelector(".accordion-header"),n=e.querySelector(".accordion-body");!t||!n||t.addEventListener("click",()=>{const i=e.classList.contains("open");r.forEach(s=>{if(s!==e&&s.classList.contains("open")){s.classList.remove("open");const a=s.querySelector(".accordion-body");a&&(a.style.maxHeight="0")}}),i?(e.classList.remove("open"),n.style.maxHeight="0"):(e.classList.add("open"),n.style.maxHeight=n.scrollHeight+"px")})})}function Ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function td(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},du,jt,At,Kn=1e8,xt=1/Kn,Nc=Math.PI*2,Bx=Nc/4,zx=0,nd=Math.sqrt,kx=Math.cos,Hx=Math.sin,Kt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Fi=function(e){return typeof e=="number"},pu=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},mu=function(){return typeof window<"u"},ro=function(e){return Lt(e)||Kt(e)},id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Vx=/random\([^)]+\)/g,Gx=/,\s*/g,kf=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,Wx=/[^,'"\[\]\s]+/gi,Xx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,oi,Fc,_u,kn={},No={},ad,od=function(e){return(No=Ps(e,kn))&&bn},gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},ld=function(e,t){return e&&(kn[e]=t)&&No&&(No[e]=t)||kn},xa=function(){return 0},qx={suppressEvents:!0,isStart:!0,kill:!1},To={suppressEvents:!0,kill:!1},Yx={suppressEvents:!0},vu={},nr=[],Oc={},cd,Ln={},Ll={},Hf=30,bo=[],xu="",Mu=function(e){var t=e[0],n,i;if(mi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bo.length;i--&&!bo[i].targetTest(t););n=bo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ud(e[i],n)))||e.splice(i,1);return e},Dr=function(e){return e._gsap||Mu(Zn(e))[0]._gsap},ud=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():pu(n)&&e.getAttribute&&e.getAttribute(t)||n},yn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$x=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Fo=function(){var e=nr.length,t=nr.slice(0),n,i;for(Oc={},nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Su=function(e){return!!(e._initted||e._startAt||e.add)},fd=function(e,t,n,i){nr.length&&!jt&&Fo(),e.render(t,n,!!(jt&&t<0&&Su(e))),nr.length&&!jt&&Fo()},hd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wx).length<2?t:Kt(e)?e.trim():e},dd=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Kx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ps=function(e,t){for(var n in t)e[n]=t[n];return e},Vf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Oo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ra=function(e){var t=e.parent||Ct,n=e.keyframes?Kx(sn(e.keyframes)):Hn;if(Sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},jo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ar=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bc=function(e,t,n,i){return e._startAt&&(jt?e._startAt.revert(To):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Jx=function r(e){return!e||e._ts&&r(e.parent)},Gf=function(e){return e._repeat?Ds(e._tTime,e=e.duration()+e._rDelay)*e:0},Ds=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Bo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jo=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},Qo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jo(e),n._dirty||Lr(n,e)),e},md=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bo(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),Lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},ui=function(e,t,n,i){return t.parent&&ar(t),t._start=Rt((Fi(n)?n:n||e!==Ct?Wn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pd(e,t,"_first","_last",e._sort?"_start":0),zc(t)||(e._recent=t),i||md(e,t),e._ts<0&&Qo(e,e._tTime),e},_d=function(e,t){return(kn.ScrollTrigger||gu("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,s){if(Eu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cd!==In.frame)return nr.push(e),e._lazy=[s,i],1},Qx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},zc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Qx(e)&&!(!e._initted&&zc(e))||(e._ts<0||e._dp._ts<0)&&!zc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ua(0,e._tDur,t),u=Ds(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ds(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||jt||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Bc(e,t,n,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ar(e,1),!n&&!jt&&(Fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ls=function(e,t,n,i){var s=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Qo(e,e._tTime=e._tDur*o),e.parent&&Jo(e),n||Lr(e.parent,e),e},Wf=function(e){return e instanceof dn?Lr(e):Ls(e,e._dur)},nM={_start:0,endTime:xa,totalDuration:xa},Wn=function r(e,t,n){var i=e.labels,s=e._recent||nM,a=e.duration()>=Kn?s.endTime(!1):e._dur,o,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},sa=function(e,t,n){var i=Fi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;a.immediateRender=Sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new kt(t[0],a,t[s+1])},ur=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},nn=function(e,t){return!Kt(e)||!(t=Xx.exec(e))?"":t[1]},iM=function(e,t,n){return ur(n,function(i){return Ua(e,t,i)})},kc=[].slice,vd=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==oi},rM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Kt(i)&&!t||vd(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Kt(e)&&!n&&(Fc||!Us())?kc.call((t||_u).querySelectorAll(e),0):sn(e)?rM(e,n):vd(e)?kc.call(e,0):e?[e]:[]},Hc=function(e){return e=Zn(e)[0]||va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zn(t,n.querySelectorAll?n:n===e?va("Invalid scope")||_u.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},Md=function(e){if(Lt(e))return e;var t=mi(e)?e:{each:e},n=Ur(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return Kt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,y,E,v,R,w,b,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!M){for(b=-Kn;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===Kn?0:l?_*f/M-.5:i/M|0,b=0,C=Kn,w=0;w<_;w++)E=w%M-p,v=y-(w/M|0),m[w]=R=c?Math.abs(c==="y"?v:E):nd(E*E+v*v),R>b&&(b=R),R<C&&(C=R);i==="random"&&xd(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=nn(t.amount||t.each)||0,n=n&&_<0?Pd(n):n}return _=(m[h]-m.min)/m.max||0,Rt(m.b+(n?n(_):_)*m.v)+m.u}},Vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Fi(n)?0:nn(n))}},Sd=function(e,t){var n=sn(e),i,s;return!n&&mi(e)&&(i=n=e.radius||Kn,e.values?(e=Zn(e.values),(s=!Fi(e[0]))&&(i*=i)):e=Vc(e.increment)),ur(t,n?Lt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Kn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Fi(a)?u:u+nn(a)}:Vc(e))},yd=function(e,t,n,i){return ur(sn(e)?!t:n===!0?!!(n=0):!i,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},aM=function(e,t){return function(n){return e(parseFloat(n))+(t||nn(n))}},oM=function(e,t,n){return Td(e,t,0,1,n)},Ed=function(e,t,n){return ur(n,function(i){return e[~~t(i)]})},lM=function r(e,t,n){var i=t-e;return sn(e)?Ed(e,r(0,e.length),t):ur(n,function(s){return(i+(s-e)%i)%i+e})},cM=function r(e,t,n){var i=t-e,s=i*2;return sn(e)?Ed(e,r(0,e.length-1),t):ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ma=function(e){return e.replace(Vx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Gx);return yd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Td=function(e,t,n,i,s){var a=t-e,o=i-n;return ur(s,function(l){return n+((l-e)/a*o||0)})},uM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Kt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ps(sn(e)?[]:{},e));if(!u){for(l in t)yu.call(o,e,l,"get",t[l]);s=function(g){return Au(g,o)||(a?e.p:e)}}}return ur(n,s)},Xf=function(e,t,n){var i=e.labels,s=Kn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Fn=function(e,t,n){var i=e.vars,s=i[t],a=At,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&nr.length&&Fo(),o&&(At=o),u=l?s.apply(c,l):s.call(c),At=a,u},js=function(e){return ar(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&Fn(e,"onInterrupt"),e},hs,bd=[],Ad=function(e){if(e)if(e=!e.name&&e.default||e,mu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:xa,render:Au,add:yu,kill:AM,modifier:bM,rawVars:0},a={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(Us(),e!==i){if(Ln[t])return;Hn(i,Hn(Oo(e,s),a)),Ps(i.prototype,Ps(s,Oo(e,a))),Ln[i.prop=t]=i,e.targetTest&&(bo.push(i),vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ld(t,i),e.register&&e.register(bn,i,En)}else bd.push(e)},vt=255,Js={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},Ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},wd=function(e,t,n){var i=e?Fi(e)?[e>>16,e>>8&vt,e&vt]:0:Js.black,s,a,o,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Js[e])i=Js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(kf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ul(l+1/3,s,a),i[1]=Ul(l,s,a),i[2]=Ul(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(rd),n&&i.length<4&&(i[3]=1),i}else i=e.match(kf)||Js.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/vt,a=i[1]/vt,o=i[2]/vt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rd=function(e){var t=[],n=[],i=-1;return e.split(ir).forEach(function(s){var a=s.match(fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},qf=function(e,t,n){var i="",s=(e+i).match(ir),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=wd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Rd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ir,"1").split(fs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ir),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Js)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),fM=/hsl[a]?\(/,Cd=function(e){var t=e.join(" "),n;if(ir.lastIndex=0,ir.test(t))return n=fM.test(t),e[1]=qf(e[1],n),e[0]=qf(e[0],n,Rd(e[1])),!0},Sa,In=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,y=m===!0,E,v,R,w;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,E=R-a,(E>0||y)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,a+=E+(E>=s?4:s-E),v=1),y||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](R,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ad&&(!Fc&&mu()&&(oi=Fc=window,_u=oi.document||{},kn.gsap=bn,(oi.gsapVersions||(oi.gsapVersions=[])).push(bn.version),od(No||oi.GreenSockGlobals||!oi.gsap&&oi||{}),bd.forEach(Ad)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Sa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=xa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,y){var E=p?function(v,R,w,b){m(v,R,w,b),f.remove(E)}:m;return f.remove(m),o[y?"unshift":"push"](E),Us(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),Us=function(){return!Sa&&In.wake()},it={},hM=/^[\d.\-M][\d.\-,\s]/,dM=/["']/g,pM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(dM,"").trim():+c,i=l.substr(o+1).trim();return t},mM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_M=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[pM(t[1])]:mM(e).split(",").map(hd)):it._CE&&hM.test(e)?it._CE("",e):n},Pd=function(e){return function(t){return 1-e(1-t)}},Dd=function r(e,t){for(var n=e._first,i;n;)n instanceof dn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ur=function(e,t){return e&&(Lt(e)?e:it[e]||_M(e))||t},Gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return yn(e,function(o){it[o]=kn[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},Ld=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Nc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ld(o);return s=Nc/s,l.config=function(c,u){return r(e,c,u)},l},Nl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ld(n);return i.config=function(s){return r(e,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Gr("Elastic",Il("in"),Il("out"),Il());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gr("Circ",function(r){return-(nd(1-r*r)-1)});Gr("Sine",function(r){return r===1?1:-kx(r*Bx)+1});Gr("Back",Nl("in"),Nl("out"),Nl());it.SteppedEase=it.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-xt;return function(o){return((i*Ua(0,a,o)|0)+s)*n}}};Cs.ease=it["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xu+=r+","+r+"Params,"});var Ud=function(e,t){this.id=zx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ud,this.set=t?t.getSetter:bu},ya=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ls(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Sa||In.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Qo(this,n),!s._dp||s.parent||md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ds(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Jo(this),jx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Yx);var i=jt;return jt=n,Su(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Wn(this,n),Sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Lt(n)?n:dd,l=function(){var u=i.then;i.then=null,s&&s(),Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){js(this)},r})();Hn(ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var dn=(function(r){td(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Sn(n.sortChildren),Ct&&ui(n.parent||Ct,Ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_d(Ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return sa(0,arguments,this),this},t.from=function(i,s,a){return sa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return sa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,Wn(this,a),1),this},t.call=function(i,s,a){return ui(this,kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new kt(i,a,Wn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ra(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,ra(o).immediateRender=Sn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,y,E,v,R,w,b;if(this!==Ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,E=this._ts,p=!E,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Rt(u%m),u===l?(_=this._repeat,h=c):(R=Rt(u/m),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=Ds(this._tTime,m),!o&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(h=c-h,b=1),_!==R&&!this._lock){var C=w&&R&1,M=C===(w&&_&1);if(_<R&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Rt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,R=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Dd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=tM(this,Rt(o),Rt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(Fn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-xt);break}}d=g}else{d=this._last;for(var x=i<0?i:h;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||jt&&Su(d)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=x?-xt:xt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-xt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Jo(this),this.render(i,s,a);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ar(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Fi(s)||(s=Wn(this,s,i)),!(i instanceof ya)){if(sn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Kt(i))return this.addLabel(i,s);if(Lt(i))i=kt.delayedCall(0,i);else return this}return this!==i?ui(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Kn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Kt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(i.parent===this&&jo(this,i),i===this._recent&&(this._recent=this._last),Lr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(In.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Wn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=kt.delayedCall(0,s||xa,a);return o.data="isPause",this._hasPause=1,ui(this,o,Wn(this,i))},t.removePause=function(i){var s=this._first;for(i=Wn(this,i);s;)s._start===i&&s.data==="isPause"&&ar(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ki!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Zn(i),l=this._first,c=Fi(s),u;l;)l instanceof kt?$x(l._targets,o)&&(c?(!Ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Wn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=kt.to(a,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ls(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Hn({startAt:{time:Wn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xf(this,Wn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xf(this,Wn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Rt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Lr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Lr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Kn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ui(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Rt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ls(a,a===Ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ct._ts&&(fd(Ct,Bo(i,Ct)),cd=In.frame),In.frame>=Hf){Hf+=zn.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&zn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e})(ya);Hn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var gM=function(e,t,n,i,s,a,o){var l=new En(this._pt,e,t,0,1,zd,null,s),c=0,u=0,f,h,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ma(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),h=n.match(Dl)||[];f=Dl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?gs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Dl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sd.test(i)||p)&&(l.e=0),this._pt=l,l},yu=function(e,t,n,i,s,a,o,l,c,u){Lt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Lt(f)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Lt(f)?c?yM:Od:Tu,g;if(Kt(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(g=gs(h,i)+(nn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Gc)return!isNaN(h*i)&&i!==""?(g=new En(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?TM:Bd,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&gu(t,i),gM.call(this,e,t,h,i,d,l||zn.stringFilter,c))},vM=function(e,t,n,i,s){if(Lt(e)&&(e=aa(e,s,t,n,i)),!mi(e)||e.style&&e.nodeType||sn(e)||id(e))return Kt(e)?aa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=aa(e[o],s,t,n,i);return a},Id=function(e,t,n,i,s,a){var o,l,c,u;if(Ln[e]&&(o=new Ln[e]).init(s,o.rawVars?t[e]:vM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new En(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ki,Gc,Eu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!du,v=e.timeline,R,w,b,C,M,x,P,N,B,X,$,G,W;if(v&&(!h||!s)&&(s="none"),e._ease=Ur(s,Cs.ease),e._yEase=f?Pd(Ur(f===!0?s:f,Cs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!i.runBackwards,!v||h&&!i.stagger){if(N=m[0]?Dr(m[0]).harness:0,G=N&&i[N.prop],R=Oo(i,vu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?To:qx),_._lazy=0),a){if(ar(e._startAt=kt.set(m,Hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!o&&!d)&&e._startAt.revert(To),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=Hn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Sn(l),immediateRender:o,stagger:0,parent:p},R),G&&(b[N.prop]=G),ar(e._startAt=kt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(To):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Sn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],P=M._gsap||Mu(m)[w]._gsap,e._ptLookup[w]=X={},Oc[P.id]&&nr.length&&Fo(),$=y===m?w:y.indexOf(M),N&&(B=new N).init(M,G||R,e,$,y)!==!1&&(e._pt=C=new En(e._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){X[V]=C}),B.priority&&(x=1)),!N||G)for(b in R)Ln[b]&&(B=Id(b,R,e,$,M,y))?B.priority&&(x=1):X[b]=C=yu.call(e,M,b,"get",R[b],$,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),E&&e._pt&&(Ki=e,Ct.killTweensOf(M,X,e.globalTime(t)),W=!e.parent,Ki=0),e._pt&&l&&(Oc[P.id]=1)}x&&kd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,h&&t<=0&&v.render(Kn,!0,!0)},xM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gc=1,e.vars[t]="+=0",Eu(e,o),Gc=0,l?va(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=It(n)+nn(f.e)),f.b&&(f.b=u.s+nn(f.b))},MM=function(e,t){var n=e[0]?Dr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ps({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},SM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(sn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},aa=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):Kt(e)&&~e.indexOf("random(")?Ma(e):e},Nd=xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fd={};yn(Nd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Fd[r]=1});var kt=(function(r){td(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ra(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ct,E=(sn(n)||id(n)?Fi(n[0]):"length"in i)?[n]:Zn(n),v,R,w,b,C,M,x,P;if(o._targets=E.length?Mu(E):va("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||ro(c)||ro(u)){if(i=o.vars,v=o.timeline=new dn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:E}),v.kill(),v.parent=v._dp=Ei(o),v._start=0,h||ro(c)||ro(u)){if(b=E.length,x=h&&Md(h),mi(h))for(C in h)~Nd.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(R=0;R<b;R++)w=Oo(i,Fd),w.stagger=0,p&&(w.yoyoEase=p),P&&Ps(w,P),M=E[R],w.duration=+aa(c,Ei(o),R,M,E),w.delay=(+aa(u,Ei(o),R,M,E)||0)-o._delay,!h&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(M,w,x?x(R,M,E):0),v._ease=it.none;v.duration()?c=u=0:o.timeline=0}else if(g){ra(Hn(v.vars.defaults,{ease:"none"})),v._ease=Ur(g.ease||i.ease||"none");var N=0,B,X,$;if(sn(g))g.forEach(function(G){return v.to(E,G,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||SM(C,g[C],w,g.easeEach);for(C in w)for(B=w[C].sort(function(G,W){return G.t-W.t}),N=0,R=0;R<B.length;R++)X=B[R],$={ease:X.e,duration:(X.t-(R?B[R-1].t:0))/100*c},$[C]=X.v,v.to(E,$,N),N+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!du&&(Ki=Ei(o),Ct.killTweensOf(E),Ki=0),ui(y,Ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Rt(y._time)&&Sn(f)&&Jx(Ei(o))&&y.data!=="nested")&&(o._tTime=-xt,o.render(Math.max(0,-u)||0)),m&&_d(Ei(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-xt&&!u?l:i<xt?0:i,h,d,g,_,m,p,y,E,v;if(!c)eM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Rt(f%_),f===l?(g=this._repeat,h=c):(m=Rt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=Ds(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Dd(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Rt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(gd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!o&&f&&!s&&!m&&(Fn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Bc(this,i,s,a),Fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Bc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ar(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Sa||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Eu(this,c),u=this._ease(c/this._dur),xM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Qo(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ki&&Ki.vars.overwrite!==!0)._first||js(this),this.parent&&a!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Zn(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Zx(o,l))return s==="all"&&(this._pt=0),js(this);for(f=this._op=this._op||[],s!=="all"&&(Kt(s)&&(_={},yn(s,function(y){return _[y]=1}),s=_),s=MM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&jo(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&js(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return sa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ct.killTweensOf(i,s,a)},e})(ya);Hn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new dn,t=kc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Tu=function(e,t,n){return e[t]=n},Od=function(e,t,n){return e[t](n)},yM=function(e,t,n,i){return e[t](i.fp,n)},EM=function(e,t,n){return e.setAttribute(t,n)},bu=function(e,t){return Lt(e[t])?Od:pu(e[t])&&e.setAttribute?EM:Tu},Bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},TM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Au=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},AM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?jo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},En=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Bd,this.d=l||this,this.set=c||Tu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wM,this.m=n,this.mt=s,this.tween=i},r})();yn(xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vu[r]=1});kn.TweenMax=kn.TweenLite=kt;kn.TimelineLite=kn.TimelineMax=dn;Ct=new dn({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Cd;var Ir=[],Ao={},RM=[],Yf=0,CM=0,Fl=function(e){return(Ao[e]||RM).map(function(t){return t()})},Wc=function(){var e=Date.now(),t=[];e-Yf>2&&(Fl("matchMediaInit"),Ir.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=oi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yf=e,Fl("matchMedia"))},Hd=(function(){function r(t,n){this.selector=n&&Hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=CM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var a=this,o=function(){var c=At,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hc(s)),At=a,f=i.apply(a,arguments),Lt(f)&&a._r.push(f),At=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Lt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ir.length;a--;)Ir[a].id===this.id&&Ir.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),PM=(function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){mi(n)||(n={matches:n});var a=new Hd(0,s||this.scope),o=a.conditions={},l,c,u;At&&!a.selector&&(a.selector=At.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=oi.matchMedia(n[c]),l&&(Ir.indexOf(a)<0&&Ir.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wc):l.addEventListener("change",Wc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),zo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ad(i)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return Ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=Zn(e)[0]);var s=Dr(e||{}).get,a=n?dd:hd;return n==="native"&&(n=""),e&&(t?a((Ln[t]&&Ln[t].get||s)(e,t,n,i)):function(o,l,c){return a((Ln[o]&&Ln[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Zn(e),e.length>1){var i=e.map(function(u){return bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Ln[t],o=Dr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;hs._pt=0,f.init(e,n?u+n:u,hs,0,[e]),f.render(1,f),hs._pt&&Au(1,hs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=bn.to(e,Hn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ur(e.ease,Cs.ease)),Vf(Cs,e||{})},config:function(e){return Vf(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ln[o]&&!kn[o]&&va(t+" effect requires "+o+" plugin.")}),Ll[t]=function(o,l,c){return n(Zn(o),Hn(l||{},s),c)},a&&(dn.prototype[t]=function(o,l,c){return this.add(Ll[t](o,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Ur(t)},parseEase:function(e,t){return arguments.length?Ur(e,t):it},getById:function(e){return Ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),i,s;for(n.smoothChildTiming=Sn(e.smoothChildTiming),Ct.remove(n),n._dp=0,n._time=n._tTime=Ct._time,i=Ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=s;return ui(Ct,n,0),n},context:function(e,t){return e?new Hd(e,t):At},matchMedia:function(e){return new PM(e)},matchMediaRefresh:function(){return Ir.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wc()},addEventListener:function(e,t){var n=Ao[e]||(Ao[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ao[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lM,wrapYoyo:cM,distribute:Md,random:yd,snap:Sd,normalize:oM,getUnit:nn,clamp:iM,splitColor:wd,toArray:Zn,selector:Hc,mapRange:Td,pipe:sM,unitize:aM,interpolate:uM,shuffle:xd},install:od,effects:Ll,ticker:In,updateRoot:dn.updateRoot,plugins:Ln,globalTimeline:Ct,core:{PropTween:En,globals:ld,Tween:kt,Timeline:dn,Animation:ya,getCache:Dr,_removeLinkedListItem:jo,reverting:function(){return jt},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return du=e}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return zo[r]=kt[r]});In.add(dn.updateRoot);hs=zo.to({},{duration:0});var DM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},LM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=DM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ol=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Kt(s)&&(l={},yn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}LM(o,s)}}}},bn=zo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ol("roundProps",Vc),Ol("modifiers"),Ol("snap",Sd))||zo;kt.version=dn.version=bn.version="3.14.2";ad=1;mu()&&Us();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $f,Zi,vs,wu,Rr,Kf,Ru,UM=function(){return typeof window<"u"},Oi={},Sr=180/Math.PI,xs=Math.PI/180,ss=Math.atan2,Zf=1e8,Cu=/([A-Z])/g,IM=/(left|right|width|margin|padding|x)/i,NM=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kM=function(e,t,n){return e.style[t]=n},HM=function(e,t,n){return e.style.setProperty(t,n)},VM=function(e,t,n){return e._gsap[t]=n},GM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},XM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Pt="transform",Tn=Pt+"Origin",qM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Oi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ti(i,o)}):this.tfm[e]=a.x?a[e]:Ti(i,e),e===Tn&&(this.tfm.zOrigin=a.zOrigin);else return hi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Pt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},Wd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ru(),(!s||!s.isStart)&&!n[Pt]&&(Wd(n),i.zOrigin&&n[Tn]&&(n[Tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xd=function(e,t){var n={target:e,props:[],revert:YM,save:qM};return e._gsap||bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},qd,qc=function(e,t){var n=Zi.createElementNS?Zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zi.createElement(e);return n&&n.style?n:Zi.createElement(e)},On=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Is(t)||t,1)||""},jf="O,Moz,ms,Ms,Webkit".split(","),Is=function(e,t,n){var i=t||Rr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(jf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?jf[a]:"")+e},Yc=function(){UM()&&window.document&&($f=window,Zi=$f.document,vs=Zi.documentElement,Rr=qc("div")||{style:{}},qc("div"),Pt=Is(Pt),Tn=Pt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qd=!!Is("perspective"),Ru=bn.core.reverting,wu=1)},Jf=function(e){var t=e.ownerSVGElement,n=qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),vs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),vs.removeChild(n),s},Qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yd=function(e){var t,n;try{t=e.getBBox()}catch{t=Jf(e),n=1}return t&&(t.width||t.height)||n||(t=Jf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Qf(e,["x","cx","x1"])||0,y:+Qf(e,["y","cy","y1"])||0,width:0,height:0}:t},$d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yd(e))},or=function(e,t){if(t){var n=e.style,i;t in Oi&&t!==Tn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Cu,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,s,a){var o=new En(e._pt,t,n,0,1,a?Gd:Vd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},eh={deg:1,rad:1,turn:1},$M={grid:1,flex:1},lr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Rr.style,l=IM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||eh[i]||eh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&$d(e),(d||a==="%")&&(Oi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],It(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Zi||!_.appendChild)&&(_=Zi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===In.time&&!m.uncache)return It(s/m.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:or(e,t)}else(d||a==="%")&&!$M[On(_,"display")]&&(o.position=On(e,"position")),_===e&&(o.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),o.position="absolute";return l&&d&&(m=Dr(_),m.time=In.time,m.width=_[u]),It(h?g*s/f:g&&s?f/g*s:0)},Ti=function(e,t,n,i){var s;return wu||Yc(),t in hi&&t!=="transform"&&(t=hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Oi[t]&&t!=="transform"?(s=Ta(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ho(On(e,Tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ko[t]&&ko[t](e,t,n)||On(e,t)||ud(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?lr(e,t,s,n)+n:s},KM=function(e,t,n,i){if(!n||n==="none"){var s=Is(t,e,1),a=s&&On(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=On(e,"borderTopColor"))}var o=new En(this._pt,e.style,t,0,1,zd),l=0,c=0,u,f,h,d,g,_,m,p,y,E,v,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=On(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=On(e,t)||i,_?e.style[t]=_:or(e,t)),u=[n,i],Cd(u),n=u[0],i=u[1],h=n.match(fs)||[],R=i.match(fs)||[],R.length){for(;f=fs.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=gs(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=fs.lastIndex-E.length,E||(E=E||zn.units[t]||v,l===i.length&&(i+=E,o.e+=E)),v!==E&&(d=lr(e,t,_,E)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Gd:Vd;return sd.test(i)&&(o.e=0),this._pt=o,o},th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=th[n]||n,t[1]=th[i]||i,t.join(" ")},jM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Oi[o]&&(l=1,o=o==="transformOrigin"?Tn:Pt),or(n,o);l&&(or(n,Pt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ta(n,1),a.uncache=1,Wd(i)))}},ko={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new En(e._pt,t,n,0,0,jM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],Kd={},Zd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nh=function(e){var t=On(e,Pt);return Zd(t)?Ea:t.substr(7).match(rd).map(It)},Pu=function(e,t){var n=e._gsap||Dr(e),i=e.style,s=nh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ea:s):(s===Ea&&!e.offsetParent&&e!==vs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,vs.appendChild(e)),s=nh(e),l?i.display=l:or(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):vs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$c=function(e,t,n,i,s,a){var o=e._gsap,l=s||Pu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],E=t.split(" "),v=parseFloat(E[0])||0,R=parseFloat(E[1])||0,w,b,C,M;n?l!==Ea&&(b=d*m-g*_)&&(C=v*(m/b)+R*(-_/b)+(_*y-m*p)/b,M=v*(-g/b)+R*(d/b)-(d*y-g*p)/b,v=C,R=M):(w=Yd(e),v=w.x+(~E[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(E[1]||E[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(p=v-c,y=R-u,o.xOffset=f+(p*d+y*_)-p,o.yOffset=h+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Tn]="0px 0px",a&&(ji(a,o,"xOrigin",c,v),ji(a,o,"yOrigin",u,R),ji(a,o,"xOffset",f,o.xOffset),ji(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+R)},Ta=function(e,t){var n=e._gsap||new Ud(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=On(e,Tn)||"0",u,f,h,d,g,_,m,p,y,E,v,R,w,b,C,M,x,P,N,B,X,$,G,W,V,te,D,ue,Le,Ke,K,ee;return u=f=h=_=m=p=y=E=v=0,d=g=1,n.svg=!!(e.getCTM&&$d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),b=Pu(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),$c(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==Ea&&(P=b[0],N=b[1],B=b[2],X=b[3],u=$=b[4],f=G=b[5],b.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(X*X+B*B),_=P||N?ss(N,P)*Sr:0,y=B||X?ss(B,X)*Sr+_:0,y&&(g*=Math.abs(Math.cos(y*xs))),n.svg&&(u-=R-(R*P+w*B),f-=w-(R*N+w*X))):(ee=b[6],Ke=b[7],D=b[8],ue=b[9],Le=b[10],K=b[11],u=b[12],f=b[13],h=b[14],C=ss(ee,Le),m=C*Sr,C&&(M=Math.cos(-C),x=Math.sin(-C),W=$*M+D*x,V=G*M+ue*x,te=ee*M+Le*x,D=$*-x+D*M,ue=G*-x+ue*M,Le=ee*-x+Le*M,K=Ke*-x+K*M,$=W,G=V,ee=te),C=ss(-B,Le),p=C*Sr,C&&(M=Math.cos(-C),x=Math.sin(-C),W=P*M-D*x,V=N*M-ue*x,te=B*M-Le*x,K=X*x+K*M,P=W,N=V,B=te),C=ss(N,P),_=C*Sr,C&&(M=Math.cos(C),x=Math.sin(C),W=P*M+N*x,V=$*M+G*x,N=N*M-P*x,G=G*M-$*x,P=W,$=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=It(Math.sqrt(P*P+N*N+B*B)),g=It(Math.sqrt(G*G+ee*ee)),C=ss($,G),y=Math.abs(C)>2e-4?C*Sr:0,v=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zd(On(e,Pt)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=It(d),n.scaleY=It(g),n.rotation=It(_)+o,n.rotationX=It(m)+o,n.rotationY=It(p)+o,n.skewX=y+o,n.skewY=E+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Tn]=Ho(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?QM:qd?jd:JM,n.uncache=0,n},Ho=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bl=function(e,t,n){var i=nn(t);return It(parseFloat(t)+parseFloat(lr(e,"x",n+"px",i)))+i},JM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jd(e,t)},gr="0deg",qs="0px",vr=") ",jd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,E=n.zOrigin,v="",R=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==gr||u!==gr)){var w=parseFloat(u)*xs,b=Math.sin(w),C=Math.cos(w),M;w=parseFloat(f)*xs,M=Math.cos(w),a=Bl(y,a,b*M*-E),o=Bl(y,o,-Math.sin(w)*-E),l=Bl(y,l,C*M*-E+E)}m!==qs&&(v+="perspective("+m+vr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(R||a!==qs||o!==qs||l!==qs)&&(v+=l!==qs||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vr),c!==gr&&(v+="rotate("+c+vr),u!==gr&&(v+="rotateY("+u+vr),f!==gr&&(v+="rotateX("+f+vr),(h!==gr||d!==gr)&&(v+="skew("+h+", "+d+vr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+vr),y.style[Pt]=v||"translate(0, 0)"},QM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,E=parseFloat(a),v=parseFloat(o),R,w,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xs,c*=xs,R=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=xs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=It(R),w=It(w),b=It(b),C=It(C)):(R=f,C=h,w=b=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=lr(d,"x",a,"px"),v=lr(d,"y",o,"px")),(g||_||m||p)&&(E=It(E+g-(g*R+_*b)+m),v=It(v+_-(g*w+_*C)+p)),(i||s)&&(M=d.getBBox(),E=It(E+i/100*M.width),v=It(v+s/100*M.height)),M="matrix("+R+","+w+","+b+","+C+","+E+","+v+")",d.setAttribute("transform",M),y&&(d.style[Pt]=M)},eS=function(e,t,n,i,s){var a=360,o=Kt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Zf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Zf)%a-~~(c/a)*a)),e._pt=h=new En(e._pt,t,n,i,c,FM),h.e=u,h.u="deg",e._props.push(n),h},ih=function(e,t){for(var n in t)e[n]=t[n];return e},tS=function(e,t,n){var i=ih({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Pt]=t,o=Ta(n,1),or(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],a[Pt]=t,o=Ta(n,1),a[Pt]=c);for(l in Oi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=nn(c),g=nn(u),f=d!==g?lr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new En(e._pt,o,l,f,h-f,Xc),e._pt.u=g||0,e._props.push(l));ih(o,i)};yn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ko[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Ti(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var Jd={name:"css",register:Yc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,y,E,v,R,w,b,C,M;wu||Yc(),this.styles=this.styles||Xd(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ln[_]&&Id(_,t,n,i,e,s)))){if(d=typeof u,g=ko[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ma(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(m=nn(c),p=nn(u),p?m!==p&&(c=lr(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Kt(c)&&~c.indexOf("random(")&&(c=Ma(c)),nn(c+"")||c==="auto"||(c+=zn.units[_]||nn(Ti(e,_))||""),(c+"").charAt(1)==="="&&(c=Ti(e,_))):c=Ti(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in hi&&(_==="autoAlpha"&&(h===1&&Ti(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),ji(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=hi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Oi,E){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=On(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=On(e,"perspective"),x?e.style.perspective=x:or(e,"perspective")}f=parseFloat(u)}if(v||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ta(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,v=this._pt=new En(this._pt,o,Pt,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new En(this._pt,R,"scaleY",R.scaleY,(y?gs(R.scaleY,y+f):f)-R.scaleY||0,Xc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Tn,0,o[Tn]),u=ZM(u),R.svg?$c(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&ji(this,R,"zOrigin",R.zOrigin,p),ji(this,o,_,Ho(c),Ho(u)));continue}else if(_==="svgOrigin"){$c(e,u,1,w,0,this);continue}else if(_ in Kd){eS(this,R,_,h,y?gs(h,y+u):u);continue}else if(_==="smoothOrigin"){ji(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){tS(this,u,e);continue}}else _ in o||(_=Is(_)||_);if(E||(f||f===0)&&(h||h===0)&&!NM.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=nn(u)||(_ in zn.units?zn.units[_]:m),m!==p&&(h=lr(e,_,c,p)),this._pt=new En(this._pt,E?R:o,_,h,(y?gs(h,y+f):f)-h,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?zM:Xc),this._pt.u=p||0,E&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=BM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=OM);else if(_ in o)KM.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){gu(_,u);continue}E||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}b&&kd(this)},render:function(e,t){if(t.tween._time||!Ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ti,aliases:hi,getSetter:function(e,t,n){var i=hi[t];return i&&i.indexOf(",")<0&&(t=i),t in Oi&&t!==Tn&&(e._gsap.x||Ti(e,"x"))?n&&Kf===n?t==="scale"?GM:VM:(Kf=n||{})&&(t==="scale"?WM:XM):e.style&&!pu(e.style[t])?kM:~t.indexOf("-")?HM:bu(e,t)},core:{_removeProperty:or,_getMatrix:Pu}};bn.utils.checkPrefix=Is;bn.core.getStyleSaver=Xd;(function(r,e,t,n){var i=yn(r+","+e+","+t,function(s){Oi[s]=1});yn(e,function(s){zn.units[s]="deg",Kd[s]=1}),hi[i[13]]=r+","+e,yn(n,function(s){var a=s.split(":");hi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});bn.registerPlugin(Jd);var bt=bn.registerPlugin(Jd)||bn;bt.core.Tween;function nS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function iS(r,e,t){return e&&nS(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,wo,Nn,Ji,Qi,Ms,Qd,yr,oa,ep,Pi,ni,tp,np=function(){return Zt||typeof window<"u"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},ip=1,ds=[],et=[],pi=[],la=Date.now,Kc=function(e,t){return t},rS=function(){var e=oa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,pi),et=n,pi=i,Kc=function(a,o){return t[a](o)}},rr=function(e,t){return~pi.indexOf(e)&&pi[pi.indexOf(e)+1][t]},ca=function(e){return!!~ep.indexOf(e)},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},so="scrollLeft",ao="scrollTop",Zc=function(){return Pi&&Pi.isPressed||et.cache++},Vo=function(e,t){var n=function i(s){if(s||s===0){ip&&(Nn.history.scrollRestoration="manual");var a=Pi&&Pi.isPressed;s=i.v=Math.round(s)||(Pi&&Pi.iOS?1:0),e(s),i.cacheID=et.cache,a&&Kc("ss",s)}else(t||et.cache!==i.cacheID||Kc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:so,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vo(function(r){return arguments.length?Nn.scrollTo(r,Gt.sc()):Nn.pageXOffset||Ji[so]||Qi[so]||Ms[so]||0})},Gt={s:ao,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:Vo(function(r){return arguments.length?Nn.scrollTo(pn.sc(),r):Nn.pageYOffset||Ji[ao]||Qi[ao]||Ms[ao]||0})},_n=function(e,t){return(t&&t._ctx&&t._ctx.selector||Zt.utils.toArray)(e)[0]||(typeof e=="string"&&Zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cr=function(e,t){var n=t.s,i=t.sc;ca(e)&&(e=Ji.scrollingElement||Qi);var s=et.indexOf(e),a=i===Gt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+a]||ln(e,"scroll",Zc);var o=et[s+a],l=o||(et[s+a]=Vo(rr(e,n),!0)||(ca(e)?i:Vo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Zt.getProperty(e,"scrollBehavior")==="smooth"),l},jc=function(e,t,n){var i=e,s=e,a=la(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=la();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,m=s,p=la();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ys=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},rp=function(){oa=Zt.core.globals().ScrollTrigger,oa&&oa.core&&rS()},sp=function(e){return Zt=e||np(),!wo&&Zt&&typeof document<"u"&&document.body&&(Nn=window,Ji=document,Qi=Ji.documentElement,Ms=Ji.body,ep=[Nn,Ji,Qi,Ms],Zt.utils.clamp,tp=Zt.core.context||function(){},yr="onpointerenter"in Ms?"pointer":"mouse",Qd=Ft.isTouch=Nn.matchMedia&&Nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ni=Ft.eventTypes=("ontouchstart"in Qi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ip=0},500),rp(),wo=1),wo};pn.op=Gt;et.cache=0;var Ft=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){wo||sp(Zt)||console.warn("Please gsap.registerPlugin(Observer)"),oa||rp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,E=n.onPress,v=n.onRelease,R=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,X=n.onHover,$=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,V=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,ue=n.onWheel,Le=n.onEnable,Ke=n.onDisable,K=n.onClick,ee=n.scrollSpeed,ge=n.capture,ne=n.allowClicks,Ee=n.lockAxis,we=n.onLockAxis;this.target=o=_n(o)||Qi,this.vars=n,d&&(d=Zt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ee=ee||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nn.getComputedStyle(Ms).lineHeight)||22);var ke,Ze,Ie,Pe,U,mt,Fe,O=this,Te=0,nt=0,Re=n.passive||!u&&n.passive!==!1,A=cr(o,pn),S=cr(o,Gt),k=A(),Q=S(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ni[0]==="pointerdown",Z=ca(o),fe=o.ownerDocument||Ji,oe=[0,0,0],pe=[0,0,0],Ge=0,ie=function(){return Ge=la()},ae=function(be,qe){return(O.event=be)&&d&&sS(be.target,d)||qe&&J&&be.pointerType!=="touch"||W&&W(be,qe)},Ue=function(){O._vx.reset(),O._vy.reset(),Ze.pause(),f&&f(O)},De=function(){var be=O.deltaX=rh(oe),qe=O.deltaY=rh(pe),me=Math.abs(be)>=i,He=Math.abs(qe)>=i;P&&(me||He)&&P(O,be,qe,oe,pe),me&&(R&&O.deltaX>0&&R(O),w&&O.deltaX<0&&w(O),M&&M(O),N&&O.deltaX<0!=Te<0&&N(O),Te=O.deltaX,oe[0]=oe[1]=oe[2]=0),He&&(C&&O.deltaY>0&&C(O),b&&O.deltaY<0&&b(O),x&&x(O),B&&O.deltaY<0!=nt<0&&B(O),nt=O.deltaY,pe[0]=pe[1]=pe[2]=0),(Pe||Ie)&&(G&&G(O),Ie&&(m&&Ie===1&&m(O),y&&y(O),Ie=0),Pe=!1),mt&&!(mt=!1)&&we&&we(O),U&&(ue(O),U=!1),ke=0},xe=function(be,qe,me){oe[me]+=be,pe[me]+=qe,O._vx.update(be),O._vy.update(qe),c?ke||(ke=requestAnimationFrame(De)):De()},Xe=function(be,qe){Ee&&!Fe&&(O.axis=Fe=Math.abs(be)>Math.abs(qe)?"x":"y",mt=!0),Fe!=="y"&&(oe[2]+=be,O._vx.update(be,!0)),Fe!=="x"&&(pe[2]+=qe,O._vy.update(qe,!0)),c?ke||(ke=requestAnimationFrame(De)):De()},Ne=function(be){if(!ae(be,1)){be=Ys(be,u);var qe=be.clientX,me=be.clientY,He=qe-O.x,Ae=me-O.y,ze=O.isDragging;O.x=qe,O.y=me,(ze||(He||Ae)&&(Math.abs(O.startX-qe)>=s||Math.abs(O.startY-me)>=s))&&(Ie||(Ie=ze?2:1),ze||(O.isDragging=!0),Xe(He,Ae))}},rt=O.onPress=function(ve){ae(ve,1)||ve&&ve.button||(O.axis=Fe=null,Ze.pause(),O.isPressed=!0,ve=Ys(ve),Te=nt=0,O.startX=O.x=ve.clientX,O.startY=O.y=ve.clientY,O._vx.reset(),O._vy.reset(),ln(V?o:fe,ni[1],Ne,Re,!0),O.deltaX=O.deltaY=0,E&&E(O))},L=O.onRelease=function(ve){if(!ae(ve,1)){on(V?o:fe,ni[1],Ne,!0);var be=!isNaN(O.y-O.startY),qe=O.isDragging,me=qe&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),He=Ys(ve);!me&&be&&(O._vx.reset(),O._vy.reset(),u&&ne&&Zt.delayedCall(.08,function(){if(la()-Ge>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(fe.createEvent){var Ae=fe.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,Nn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ae)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&qe&&!V&&Ze.restart(!0),Ie&&De(),p&&qe&&p(O),v&&v(O,me)}},ce=function(be){return be.touches&&be.touches.length>1&&(O.isGesturing=!0)&&te(be,O.isDragging)},Y=function(){return(O.isGesturing=!1)||D(O)},j=function(be){if(!ae(be)){var qe=A(),me=S();xe((qe-k)*ee,(me-Q)*ee,1),k=qe,Q=me,f&&Ze.restart(!0)}},le=function(be){if(!ae(be)){be=Ys(be,u),ue&&(U=!0);var qe=(be.deltaMode===1?l:be.deltaMode===2?Nn.innerHeight:1)*g;xe(be.deltaX*qe,be.deltaY*qe,0),f&&!V&&Ze.restart(!0)}},he=function(be){if(!ae(be)){var qe=be.clientX,me=be.clientY,He=qe-O.x,Ae=me-O.y;O.x=qe,O.y=me,Pe=!0,f&&Ze.restart(!0),(He||Ae)&&Xe(He,Ae)}},Oe=function(be){O.event=be,X(O)},at=function(be){O.event=be,$(O)},Dt=function(be){return ae(be)||Ys(be,u)&&K(O)};Ze=O._dc=Zt.delayedCall(h||.25,Ue).pause(),O.deltaX=O.deltaY=0,O._vx=jc(0,50,!0),O._vy=jc(0,50,!0),O.scrollX=A,O.scrollY=S,O.isDragging=O.isGesturing=O.isPressed=!1,tp(this),O.enable=function(ve){return O.isEnabled||(ln(Z?fe:o,"scroll",Zc),a.indexOf("scroll")>=0&&ln(Z?fe:o,"scroll",j,Re,ge),a.indexOf("wheel")>=0&&ln(o,"wheel",le,Re,ge),(a.indexOf("touch")>=0&&Qd||a.indexOf("pointer")>=0)&&(ln(o,ni[0],rt,Re,ge),ln(fe,ni[2],L),ln(fe,ni[3],L),ne&&ln(o,"click",ie,!0,!0),K&&ln(o,"click",Dt),te&&ln(fe,"gesturestart",ce),D&&ln(fe,"gestureend",Y),X&&ln(o,yr+"enter",Oe),$&&ln(o,yr+"leave",at),G&&ln(o,yr+"move",he)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Pe=Ie=!1,O._vx.reset(),O._vy.reset(),k=A(),Q=S(),ve&&ve.type&&rt(ve),Le&&Le(O)),O},O.disable=function(){O.isEnabled&&(ds.filter(function(ve){return ve!==O&&ca(ve.target)}).length||on(Z?fe:o,"scroll",Zc),O.isPressed&&(O._vx.reset(),O._vy.reset(),on(V?o:fe,ni[1],Ne,!0)),on(Z?fe:o,"scroll",j,ge),on(o,"wheel",le,ge),on(o,ni[0],rt,ge),on(fe,ni[2],L),on(fe,ni[3],L),on(o,"click",ie,!0),on(o,"click",Dt),on(fe,"gesturestart",ce),on(fe,"gestureend",Y),on(o,yr+"enter",Oe),on(o,yr+"leave",at),on(o,yr+"move",he),O.isEnabled=O.isPressed=O.isDragging=!1,Ke&&Ke(O))},O.kill=O.revert=function(){O.disable();var ve=ds.indexOf(O);ve>=0&&ds.splice(ve,1),Pi===O&&(Pi=0)},ds.push(O),V&&ca(o)&&(Pi=O),O.enable(_)},iS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ft.version="3.14.2";Ft.create=function(r){return new Ft(r)};Ft.register=sp;Ft.getAll=function(){return ds.slice()};Ft.getById=function(r){return ds.filter(function(e){return e.vars.id===r})[0]};np()&&Zt.registerPlugin(Ft);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,ls,Qe,yt,Un,ht,Du,Go,ba,ua,Qs,oo,en,el,Jc,fn,sh,ah,cs,ap,zl,op,un,Qc,lp,cp,Yi,eu,Lu,Ss,Uu,fa,tu,kl,lo=1,tn=Date.now,Hl=tn(),jn=0,ea=0,oh=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},lh=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},aS=function r(){return ea&&requestAnimationFrame(r)},ch=function(){return el=1},uh=function(){return el=0},li=function(e){return e},ta=function(e){return Math.round(e*1e5)/1e5||0},up=function(){return typeof window<"u"},fp=function(){return Se||up()&&(Se=window.gsap)&&Se.registerPlugin&&Se},kr=function(e){return!!~Du.indexOf(e)},hp=function(e){return(e==="Height"?Uu:Qe["inner"+e])||Un["client"+e]||ht["client"+e]},dp=function(e){return rr(e,"getBoundingClientRect")||(kr(e)?function(){return Lo.width=Qe.innerWidth,Lo.height=Uu,Lo}:function(){return Ai(e)})},oS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=rr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?hp(s):e["client"+s])||0}},lS=function(e,t){return!t||~pi.indexOf(e)?dp(e):function(){return Lo}},di=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=rr(e,n))?a()-dp(e)()[s]:kr(e)?(Un[n]||ht[n])-hp(i):e[n]-e["offset"+i])},co=function(e,t){for(var n=0;n<cs.length;n+=3)(!t||~t.indexOf(cs[n+1]))&&e(cs[n],cs[n+1],cs[n+2])},Dn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},na=function(e){return typeof e=="number"},Er=function(e){return typeof e=="object"},$s=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Vl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},as=Math.abs,pp="left",mp="top",Iu="right",Nu="bottom",Nr="width",Fr="height",ha="Right",da="Left",pa="Top",ma="Bottom",zt="padding",Yn="margin",Ns="Width",Fu="Height",Vt="px",$n=function(e){return Qe.getComputedStyle(e)},cS=function(e){var t=$n(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ai=function(e,t){var n=t&&$n(e)[Jc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Wo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},_p=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},uS=function(e){return function(t){return Se.utils.snap(_p(e),t)}},Ou=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},fS=function(e){return function(t,n){return Ou(_p(e))(t,n.direction)}},uo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$t=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},hh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ho={toggleActions:"play",anticipatePin:0},Xo={top:0,left:0,center:.5,bottom:1,right:1},Ro=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Xo?Xo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},po=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=yt.createElement("div"),_=kr(n)||rr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?ht:n,y=e.indexOf("start")!==-1,E=y?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Gt?Iu:Nu)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Co(g,0,i,y),g},Co=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ns]=1,s["border"+o+Ns]=0,s[n.p]=t+"px",Se.set(e,s)},je=[],nu={},Aa,dh=function(){return tn()-jn>34&&(Aa||(Aa=requestAnimationFrame(Li)))},os=function(){(!un||!un.isPressed||un.startX>ht.clientWidth)&&(et.cache++,un?Aa||(Aa=requestAnimationFrame(Li)):Li(),jn||Vr("scrollStart"),jn=tn())},Gl=function(){cp=Qe.innerWidth,lp=Qe.innerHeight},ia=function(e){et.cache++,(e===!0||!en&&!op&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Qc||cp!==Qe.innerWidth||Math.abs(Qe.innerHeight-lp)>Qe.innerHeight*.25))&&Go.restart(!0)},Hr={},hS=[],gp=function r(){return Yt(tt,"scrollEnd",r)||Cr(!0)},Vr=function(e){return Hr[e]&&Hr[e].map(function(t){return t()})||hS},Pn=[],vp=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},xp=function(){return et.forEach(function(e){return rn(e)&&++e.cacheID&&(e.rec=e())})},Bu=function(e,t){var n;for(fn=0;fn<je.length;fn++)n=je[fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));fa=!0,t&&vp(t),t||Vr("revert")},Mp=function(e,t){et.cache++,(t||!hn)&&et.forEach(function(n){return rn(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(Qe.history.scrollRestoration=Lu=e)},hn,Or=0,ph,dS=function(){if(ph!==Or){var e=ph=Or;requestAnimationFrame(function(){return e===Or&&Cr(!0)})}},Sp=function(){ht.appendChild(Ss),Uu=!un&&Ss.offsetHeight||Qe.innerHeight,ht.removeChild(Ss)},mh=function(e){return ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Cr=function(e,t){if(Un=yt.documentElement,ht=yt.body,Du=[Qe,yt,Un,ht],jn&&!e&&!fa){$t(tt,"scrollEnd",gp);return}Sp(),hn=tt.isRefreshing=!0,fa||xp();var n=Vr("refreshInit");ap&&tt.sort(),t||Bu(),et.forEach(function(i){rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),je.slice(0).forEach(function(i){return i.refresh()}),fa=!1,je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),tu=1,mh(!0),je.forEach(function(i){var s=di(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),mh(!1),tu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Mp(Lu,1),Go.pause(),Or++,hn=2,Li(2),je.forEach(function(i){return rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),hn=tt.isRefreshing=!1,Vr("refresh")},iu=0,Po=1,_a,Li=function(e){if(e===2||!hn&&!fa){tt.isUpdating=!0,_a&&_a.update(0);var t=je.length,n=tn(),i=n-Hl>=50,s=t&&je[0].scroll();if(Po=iu>s?-1:1,hn||(iu=s),i&&(jn&&!el&&n-jn>200&&(jn=0,Vr("scrollEnd")),Qs=Hl,Hl=n),Po<0){for(fn=t;fn-- >0;)je[fn]&&je[fn].update(0,i);Po=1}else for(fn=0;fn<t;fn++)je[fn]&&je[fn].update(0,i);tt.isUpdating=!1}Aa=0},ru=[pp,mp,Nu,Iu,Yn+ma,Yn+ha,Yn+pa,Yn+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Do=ru.concat([Nr,Fr,"boxSizing","max"+Ns,"max"+Fu,"position",Yn,zt,zt+pa,zt+ha,zt+ma,zt+da]),pS=function(e,t,n){ys(n);var i=e._gsap;if(i.spacerIsNative)ys(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Wl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ru.length,a=t.style,o=e.style,l;s--;)l=ru[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Nu]=o[Iu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Nr]=Wo(e,pn)+Vt,a[Fr]=Wo(e,Gt)+Vt,a[zt]=o[Yn]=o[mp]=o[pp]="0",ys(i),o[Nr]=o["max"+Ns]=n[Nr],o[Fr]=o["max"+Fu]=n[Fr],o[zt]=n[zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mS=/([A-Z])/g,ys=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(mS,"-$1").toLowerCase())}},mo=function(e){for(var t=Do.length,n=e.style,i=[],s=0;s<t;s++)i.push(Do[s],n[Do[s]]);return i.t=e,i},_S=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Lo={left:0,top:0},_h=function(e,t,n,i,s,a,o,l,c,u,f,h,d,g){rn(e)&&(e=e(l)),Dn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ro("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),na(e))d&&(e=Se.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Co(o,n,i,!0);else{rn(t)&&(t=t(l));var E=(e||"0").split(" "),v,R,w,b;y=_n(t,l)||ht,v=Ai(y)||{},(!v||!v.left&&!v.top)&&$n(y).display==="none"&&(b=y.style.display,y.style.display="block",v=Ai(y),b?y.style.display=b:y.style.removeProperty("display")),R=Ro(E[0],v[i.d]),w=Ro(E[1]||"0",n),e=v[i.p]-c[i.p]-u+R+s-w,o&&Co(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var C=e+n,M=a._isStart;m="scroll"+i.d2,Co(a,C,i,M&&C>20||!M&&(f?Math.max(ht[m],Un[m]):a.parentNode[m])<=C+1),f&&(c=Ai(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Vt))}return d&&y&&(m=Ai(y),d.seek(h),p=Ai(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},gS=/(webkit|moz|length|cssText|inset)/i,gh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===ht){e._stOrig=s.cssText,o=$n(e);for(a in o)!+a&&!gS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},yp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},_o=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},vh=function(e,t){var n=cr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=yp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,a.tween&&Li()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Se.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$t(e,"wheel",n.wheelHandler),tt.isTouch&&$t(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){ls||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=li;return}n=fh(Dn(n)||na(n)||n.nodeType?{trigger:n}:n,ho);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,E=s.once,v=s.snap,R=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Gt,P=!f&&f!==0,N=_n(n.scroller||Qe),B=Se.core.getCache(N),X=kr(N),$=("pinType"in n?n.pinType:rr(N,"pinType")||X&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:ho.markers,te=X?0:parseFloat($n(N)["border"+x.p2+Ns])||0,D=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Le=oS(N,X,x),Ke=lS(N,X),K=0,ee=0,ge=0,ne=cr(N,x),Ee,we,ke,Ze,Ie,Pe,U,mt,Fe,O,Te,nt,Re,A,S,k,Q,J,Z,fe,oe,pe,Ge,ie,ae,Ue,De,xe,Xe,Ne,rt,L,ce,Y,j,le,he,Oe,at;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=N,D.scroll=b?b.time.bind(b):ne,Ze=ne(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(ap=1,n.refreshPriority===-9999&&(_a=D)),B.tweenScroll=B.tweenScroll||{top:vh(N,Gt),left:vh(N,pn)},D.tweenTo=Ee=B.tweenScroll[x.p],D.scrubDuration=function(me){ce=na(me)&&me,ce?L?L.duration(me):L=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Ne=0,l||(l=i.vars.id)),v&&((!Er(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ht.style&&Se.set(X?[ht,Un]:N,{scrollBehavior:"auto"}),et.forEach(function(me){return rn(me)&&me.target===(X?yt.scrollingElement||Un:N)&&(me.smooth=!1)}),ke=rn(v.snapTo)?v.snapTo:v.snapTo==="labels"?uS(i):v.snapTo==="labelsDirectional"?fS(i):v.directional!==!1?function(me,He){return Ou(v.snapTo)(me,tn()-ee<500?0:He.direction)}:Se.utils.snap(v.snapTo),Y=v.duration||{min:.1,max:2},Y=Er(Y)?ua(Y.min,Y.max):ua(Y,Y),j=Se.delayedCall(v.delay||ce/2||.1,function(){var me=ne(),He=tn()-ee<500,Ae=Ee.tween;if((He||Math.abs(D.getVelocity())<10)&&!Ae&&!el&&K!==me){var ze=(me-Pe)/A,Ut=i&&!P?i.totalProgress():ze,Je=He?0:(Ut-rt)/(tn()-Qs)*1e3||0,St=Se.utils.clamp(-ze,1-ze,as(Je/2)*Je/.185),Ht=ze+(v.inertia===!1?0:St),_t,gt,lt=v,An=lt.onStart,Et=lt.onInterrupt,an=lt.onComplete;if(_t=ke(Ht,D),na(_t)||(_t=Ht),gt=Math.max(0,Math.round(Pe+_t*A)),me<=U&&me>=Pe&&gt!==me){if(Ae&&!Ae._initted&&Ae.data<=as(gt-me))return;v.inertia===!1&&(St=_t-ze),Ee(gt,{duration:Y(as(Math.max(as(Ht-Ut),as(_t-Ut))*.185/Je/.05||0)),ease:v.ease||"power3",data:as(gt-me),onInterrupt:function(){return j.restart(!0)&&Et&&Et(D)},onComplete:function(){D.update(),K=ne(),i&&!P&&(L?L.resetTo("totalProgress",_t,i._tTime/i._tDur):i.progress(_t)),Ne=rt=i&&!P?i.totalProgress():D.progress,y&&y(D),an&&an(D)}},me,St*A,gt-me-St*A),An&&An(D,Ee.tween)}}else D.isActive&&K!==me&&j.restart(!0)}).pause()),l&&(nu[l]=D),h=D.trigger=_n(h||d!==!0&&d),at=h&&h._gsap&&h._gsap.stRevert,at&&(at=at(D)),d=d===!0?h:_n(d),Dn(o)&&(o={targets:h,className:o}),d&&(g===!1||g===Yn||(g=!g&&d.parentNode&&d.parentNode.style&&$n(d.parentNode).display==="flex"?!1:zt),D.pin=d,we=Se.core.getCache(d),we.spacer?S=we.pinState:(w&&(w=_n(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=mo(w))),we.spacer=J=w||yt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),we.pinState=S=mo(d)),n.force3D!==!1&&Se.set(d,{force3D:!0}),D.spacer=J=we.spacer,Xe=$n(d),ie=Xe[g+x.os2],fe=Se.getProperty(d),oe=Se.quickSetter(d,x.a,Vt),Wl(d,J,Xe),Q=mo(d)),V){nt=Er(V)?fh(V,hh):hh,O=po("scroller-start",l,N,x,nt,0),Te=po("scroller-end",l,N,x,nt,0,O),Z=O["offset"+x.op.d2];var Dt=_n(rr(N,"content")||N);mt=this.markerStart=po("start",l,Dt,x,nt,Z,0,b),Fe=this.markerEnd=po("end",l,Dt,x,nt,Z,0,b),b&&(Oe=Se.quickSetter([mt,Fe],x.a,Vt)),!$&&!(pi.length&&rr(N,"fixedMarkers")===!0)&&(cS(X?ht:N),Se.set([O,Te],{force3D:!0}),Ue=Se.quickSetter(O,x.a,Vt),xe=Se.quickSetter(Te,x.a,Vt))}if(b){var ve=b.vars.onUpdate,be=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),ve&&ve.apply(b,be||[])})}if(D.previous=function(){return je[je.indexOf(D)-1]},D.next=function(){return je[je.indexOf(D)+1]},D.revert=function(me,He){if(!He)return D.kill(!0);var Ae=me!==!1||!D.enabled,ze=en;Ae!==D.isReverted&&(Ae&&(le=Math.max(ne(),D.scroll.rec||0),ge=D.progress,he=i&&i.progress()),mt&&[mt,Fe,O,Te].forEach(function(Ut){return Ut.style.display=Ae?"none":"block"}),Ae&&(en=D,D.update(Ae)),d&&(!R||!D.isActive)&&(Ae?pS(d,J,S):Wl(d,J,$n(d),ae)),Ae||D.update(Ae),en=ze,D.isReverted=Ae)},D.refresh=function(me,He,Ae,ze){if(!((en||!D.enabled)&&!He)){if(d&&me&&jn){$t(r,"scrollEnd",gp);return}!hn&&ue&&ue(D),en=D,Ee.tween&&!Ae&&(Ee.tween.kill(),Ee.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(wt){return wt.vars.immediateRender&&wt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ut=Le(),Je=Ke(),St=b?b.duration():di(N,x),Ht=A<=.01||!A,_t=0,gt=ze||0,lt=Er(Ae)?Ae.end:n.end,An=n.endTrigger||h,Et=Er(Ae)?Ae.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),an=D.pinnedContainer=n.pinnedContainer&&_n(n.pinnedContainer,D),T=h&&Math.max(0,je.indexOf(D))||0,I=T,z,H,F,re,se,de,Me,Be,Ve,ye,We,ot,ct;for(V&&Er(Ae)&&(ot=Se.getProperty(O,x.p),ct=Se.getProperty(Te,x.p));I-- >0;)de=je[I],de.end||de.refresh(0,1)||(en=D),Me=de.pin,Me&&(Me===h||Me===d||Me===an)&&!de.isReverted&&(ye||(ye=[]),ye.unshift(de),de.revert(!0,!0)),de!==je[I]&&(T--,I--);for(rn(Et)&&(Et=Et(D)),Et=oh(Et,"start",D),Pe=_h(Et,h,Ut,x,ne(),mt,O,D,Je,te,$,St,b,D._startClamp&&"_startClamp")||(d?-.001:0),rn(lt)&&(lt=lt(D)),Dn(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(Dn(Et)?Et.split(" ")[0]:"")+lt:(_t=Ro(lt.substr(2),Ut),lt=Dn(Et)?Et:(b?Se.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Pe):Pe)+_t,An=h)),lt=oh(lt,"end",D),U=Math.max(Pe,_h(lt||(An?"100% 0":St),An,Ut,x,ne()+_t,Fe,Te,D,Je,te,$,St,b,D._endClamp&&"_endClamp"))||-.001,_t=0,I=T;I--;)de=je[I]||{},Me=de.pin,Me&&de.start-de._pinPush<=Pe&&!b&&de.end>0&&(z=de.end-(D._startClamp?Math.max(0,de.start):de.start),(Me===h&&de.start-de._pinPush<Pe||Me===an)&&isNaN(Et)&&(_t+=z*(1-de.progress)),Me===d&&(gt+=z));if(Pe+=_t,U+=_t,D._startClamp&&(D._startClamp+=_t),D._endClamp&&!hn&&(D._endClamp=U||-.001,U=Math.min(U,di(N,x))),A=U-Pe||(Pe-=.01)&&.001,Ht&&(ge=Se.utils.clamp(0,1,Se.utils.normalize(Pe,U,le))),D._pinPush=gt,mt&&_t&&(z={},z[x.a]="+="+_t,an&&(z[x.p]="-="+ne()),Se.set([mt,Fe],z)),d&&!(tu&&D.end>=di(N,x)))z=$n(d),re=x===Gt,F=ne(),pe=parseFloat(fe(x.a))+gt,!St&&U>1&&(We=(X?yt.scrollingElement||Un:N).style,We={style:We,value:We["overflow"+x.a.toUpperCase()]},X&&$n(ht)["overflow"+x.a.toUpperCase()]!=="scroll"&&(We.style["overflow"+x.a.toUpperCase()]="scroll")),Wl(d,J,z),Q=mo(d),H=Ai(d,!0),Be=$&&cr(N,re?pn:Gt)(),g?(ae=[g+x.os2,A+gt+Vt],ae.t=J,I=g===zt?Wo(d,x)+A+gt:0,I&&(ae.push(x.d,I+Vt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=I+Vt)),ys(ae),an&&je.forEach(function(wt){wt.pin===an&&wt.vars.pinSpacing!==!1&&(wt._subPinOffset=!0)}),$&&ne(le)):(I=Wo(d,x),I&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=I+Vt)),$&&(se={top:H.top+(re?F-Pe:Be)+Vt,left:H.left+(re?Be:F-Pe)+Vt,boxSizing:"border-box",position:"fixed"},se[Nr]=se["max"+Ns]=Math.ceil(H.width)+Vt,se[Fr]=se["max"+Fu]=Math.ceil(H.height)+Vt,se[Yn]=se[Yn+pa]=se[Yn+ha]=se[Yn+ma]=se[Yn+da]="0",se[zt]=z[zt],se[zt+pa]=z[zt+pa],se[zt+ha]=z[zt+ha],se[zt+ma]=z[zt+ma],se[zt+da]=z[zt+da],k=_S(S,se,R),hn&&ne(0)),i?(Ve=i._initted,zl(1),i.render(i.duration(),!0,!0),Ge=fe(x.a)-pe+A+gt,De=Math.abs(A-Ge)>1,$&&De&&k.splice(k.length-2,2),i.render(0,!0,!0),Ve||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zl(0)):Ge=A,We&&(We.value?We.style["overflow"+x.a.toUpperCase()]=We.value:We.style.removeProperty("overflow-"+x.a));else if(h&&ne()&&!b)for(H=h.parentNode;H&&H!==ht;)H._pinOffset&&(Pe-=H._pinOffset,U-=H._pinOffset),H=H.parentNode;ye&&ye.forEach(function(wt){return wt.revert(!1,!0)}),D.start=Pe,D.end=U,Ze=Ie=hn?le:ne(),!b&&!hn&&(Ze<le&&ne(le),D.scroll.rec=0),D.revert(!1,!0),ee=tn(),j&&(K=-1,j.restart(!0)),en=0,i&&P&&(i._initted||he)&&i.progress()!==he&&i.progress(he||0,!0).render(i.time(),!0,!0),(Ht||ge!==D.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||ge||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Pe<-.001&&!ge?Se.utils.normalize(Pe,U,0):ge,!0),D.progress=Ht||(Ze-Pe)/A===ge?0:ge),d&&g&&(J._pinOffset=Math.round(D.progress*Ge)),L&&L.invalidate(),isNaN(ot)||(ot-=Se.getProperty(O,x.p),ct-=Se.getProperty(Te,x.p),_o(O,x,ot),_o(mt,x,ot-(ze||0)),_o(Te,x,ct),_o(Fe,x,ct-(ze||0))),Ht&&!hn&&D.update(),u&&!hn&&!Re&&(Re=!0,u(D),Re=!1)}},D.getVelocity=function(){return(ne()-Ie)/(tn()-Qs)*1e3||0},D.endAnimation=function(){$s(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||$s(i,D.direction<0,1):$s(i,i.reversed()))},D.labelToScroll=function(me){return i&&i.labels&&(Pe||D.refresh()||Pe)+i.labels[me]/i.duration()*A||0},D.getTrailing=function(me){var He=je.indexOf(D),Ae=D.direction>0?je.slice(0,He).reverse():je.slice(He+1);return(Dn(me)?Ae.filter(function(ze){return ze.vars.preventOverlaps===me}):Ae).filter(function(ze){return D.direction>0?ze.end<=Pe:ze.start>=U})},D.update=function(me,He,Ae){if(!(b&&!Ae&&!me)){var ze=hn===!0?le:D.scroll(),Ut=me?0:(ze-Pe)/A,Je=Ut<0?0:Ut>1?1:Ut||0,St=D.progress,Ht,_t,gt,lt,An,Et,an,T;if(He&&(Ie=Ze,Ze=b?ne():ze,v&&(rt=Ne,Ne=i&&!P?i.totalProgress():Je)),m&&d&&!en&&!lo&&jn&&(!Je&&Pe<ze+(ze-Ie)/(tn()-Qs)*m?Je=1e-4:Je===1&&U>ze+(ze-Ie)/(tn()-Qs)*m&&(Je=.9999)),Je!==St&&D.enabled){if(Ht=D.isActive=!!Je&&Je<1,_t=!!St&&St<1,Et=Ht!==_t,An=Et||!!Je!=!!St,D.direction=Je>St?1:-1,D.progress=Je,An&&!en&&(gt=Je&&!St?0:Je===1?1:St===1?2:3,P&&(lt=!Et&&W[gt+1]!=="none"&&W[gt+1]||W[gt],T=i&&(lt==="complete"||lt==="reset"||lt in i))),M&&(Et||T)&&(T||f||!i)&&(rn(M)?M(D):D.getTrailing(M).forEach(function(F){return F.endAnimation()})),P||(L&&!en&&!lo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Je,i._tTime/i._tDur):(L.vars.totalProgress=Je,L.invalidate().restart())):i&&i.totalProgress(Je,!!(en&&(ee||me)))),d){if(me&&g&&(J.style[g+x.os2]=ie),!$)oe(ta(pe+Ge*Je));else if(An){if(an=!me&&Je>St&&U+1>ze&&ze+1>=di(N,x),R)if(!me&&(Ht||an)){var I=Ai(d,!0),z=ze-Pe;gh(d,ht,I.top+(x===Gt?z:0)+Vt,I.left+(x===Gt?0:z)+Vt)}else gh(d,J);ys(Ht||an?k:Q),De&&Je<1&&Ht||oe(pe+(Je===1&&!an?Ge:0))}}v&&!Ee.tween&&!en&&!lo&&j.restart(!0),o&&(Et||E&&Je&&(Je<1||!kl))&&ba(o.targets).forEach(function(F){return F.classList[Ht||E?"add":"remove"](o.className)}),a&&!P&&!me&&a(D),An&&!en?(P&&(T&&(lt==="complete"?i.pause().totalProgress(1):lt==="reset"?i.restart(!0).pause():lt==="restart"?i.restart(!0):i[lt]()),a&&a(D)),(Et||!kl)&&(c&&Et&&Vl(D,c),G[gt]&&Vl(D,G[gt]),E&&(Je===1?D.kill(!1,1):G[gt]=0),Et||(gt=Je===1?1:3,G[gt]&&Vl(D,G[gt]))),C&&!Ht&&Math.abs(D.getVelocity())>(na(C)?C:2500)&&($s(D.callbackAnimation),L?L.progress(1):$s(i,lt==="reverse"?1:!Je,1))):P&&a&&!en&&a(D)}if(xe){var H=b?ze/b.duration()*(b._caScrollDist||0):ze;Ue(H+(O._isFlipped?1:0)),xe(H)}Oe&&Oe(-ze/b.duration()*(b._caScrollDist||0))}},D.enable=function(me,He){D.enabled||(D.enabled=!0,$t(N,"resize",ia),X||$t(N,"scroll",os),ue&&$t(r,"refreshInit",ue),me!==!1&&(D.progress=ge=0,Ze=Ie=K=ne()),He!==!1&&D.refresh())},D.getTween=function(me){return me&&Ee?Ee.tween:L},D.setPositions=function(me,He,Ae,ze){if(b){var Ut=b.scrollTrigger,Je=b.duration(),St=Ut.end-Ut.start;me=Ut.start+St*me/Je,He=Ut.start+St*He/Je}D.refresh(!1,!1,{start:lh(me,Ae&&!!D._startClamp),end:lh(He,Ae&&!!D._endClamp)},ze),D.update()},D.adjustPinSpacing=function(me){if(ae&&me){var He=ae.indexOf(x.d)+1;ae[He]=parseFloat(ae[He])+me+Vt,ae[1]=parseFloat(ae[1])+me+Vt,ys(ae)}},D.disable=function(me,He){if(me!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,He||L&&L.pause(),le=0,we&&(we.uncache=1),ue&&Yt(r,"refreshInit",ue),j&&(j.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!X)){for(var Ae=je.length;Ae--;)if(je[Ae].scroller===N&&je[Ae]!==D)return;Yt(N,"resize",ia),X||Yt(N,"scroll",os)}},D.kill=function(me,He){D.disable(me,He),L&&!He&&L.kill(),l&&delete nu[l];var Ae=je.indexOf(D);Ae>=0&&je.splice(Ae,1),Ae===fn&&Po>0&&fn--,Ae=0,je.forEach(function(ze){return ze.scroller===D.scroller&&(Ae=1)}),Ae||hn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),He||i.kill()),mt&&[mt,Fe,O,Te].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),_a===D&&(_a=0),d&&(we&&(we.uncache=1),Ae=0,je.forEach(function(ze){return ze.pin===d&&Ae++}),Ae||(we.spacer=0)),n.onKill&&n.onKill(D)},je.push(D),D.enable(!1,!1),at&&at(D),i&&i.add&&!A){var qe=D.update;D.update=function(){D.update=qe,et.cache++,Pe||U||D.refresh()},Se.delayedCall(.01,D.update),A=.01,Pe=U=0}else D.refresh();d&&dS()},r.register=function(n){return ls||(Se=n||fp(),up()&&window.document&&r.enable(),ls=ea),ls},r.defaults=function(n){if(n)for(var i in n)ho[i]=n[i];return ho},r.disable=function(n,i){ea=0,je.forEach(function(a){return a[i?"kill":"disable"](n)}),Yt(Qe,"wheel",os),Yt(yt,"scroll",os),clearInterval(oo),Yt(yt,"touchcancel",li),Yt(ht,"touchstart",li),uo(Yt,yt,"pointerdown,touchstart,mousedown",ch),uo(Yt,yt,"pointerup,touchend,mouseup",uh),Go.kill(),co(Yt);for(var s=0;s<et.length;s+=3)fo(Yt,et[s],et[s+1]),fo(Yt,et[s],et[s+2])},r.enable=function(){if(Qe=window,yt=document,Un=yt.documentElement,ht=yt.body,Se&&(ba=Se.utils.toArray,ua=Se.utils.clamp,eu=Se.core.context||li,zl=Se.core.suppressOverwrites||li,Lu=Qe.history.scrollRestoration||"auto",iu=Qe.pageYOffset||0,Se.core.globals("ScrollTrigger",r),ht)){ea=1,Ss=document.createElement("div"),Ss.style.height="100vh",Ss.style.position="absolute",Sp(),aS(),Ft.register(Se),r.isTouch=Ft.isTouch,Yi=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qc=Ft.isTouch===1,$t(Qe,"wheel",os),Du=[Qe,yt,Un,ht],Se.matchMedia?(r.matchMedia=function(c){var u=Se.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Se.addEventListener("matchMediaInit",function(){xp(),Bu()}),Se.addEventListener("matchMediaRevert",function(){return vp()}),Se.addEventListener("matchMedia",function(){Cr(0,1),Vr("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return Gl(),Gl})):console.warn("Requires GSAP 3.11.0 or later"),Gl(),$t(yt,"scroll",os);var n=ht.hasAttribute("style"),i=ht.style,s=i.borderTopStyle,a=Se.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ai(ht),Gt.m=Math.round(o.top+Gt.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ht.setAttribute("style",""),ht.removeAttribute("style")),oo=setInterval(dh,250),Se.delayedCall(.5,function(){return lo=0}),$t(yt,"touchcancel",li),$t(ht,"touchstart",li),uo($t,yt,"pointerdown,touchstart,mousedown",ch),uo($t,yt,"pointerup,touchend,mouseup",uh),Jc=Se.utils.checkPrefix("transform"),Do.push(Jc),ls=tn(),Go=Se.delayedCall(.2,Cr).pause(),cs=[yt,"visibilitychange",function(){var c=Qe.innerWidth,u=Qe.innerHeight;yt.hidden?(sh=c,ah=u):(sh!==c||ah!==u)&&ia()},yt,"DOMContentLoaded",Cr,Qe,"load",Cr,Qe,"resize",ia],co($t),je.forEach(function(c){return c.enable(0,1)}),l=0;l<et.length;l+=3)fo(Yt,et[l],et[l+1]),fo(Yt,et[l],et[l+2])}},r.config=function(n){"limitCallbacks"in n&&(kl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(oo)||(oo=i)&&setInterval(dh,i),"ignoreMobileResize"in n&&(Qc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(co(Yt)||co($t,n.autoRefreshEvents||"none"),op=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=_n(n),a=et.indexOf(s),o=kr(s);~a&&et.splice(a,o?6:2),i&&(o?pi.unshift(Qe,i,ht,i,Un,i):pi.unshift(s,i))},r.clearMatchMedia=function(n){je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Dn(n)?_n(n):n).getBoundingClientRect(),o=a[s?Nr:Fr]*i||0;return s?a.right-o>0&&a.left+o<Qe.innerWidth:a.bottom-o>0&&a.top+o<Qe.innerHeight},r.positionInViewport=function(n,i,s){Dn(n)&&(n=_n(n));var a=n.getBoundingClientRect(),o=a[s?Nr:Fr],l=i==null?o/2:i in Xo?Xo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Qe.innerWidth:(a.top+l)/Qe.innerHeight},r.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hr.killAll||[];Hr={},i.forEach(function(s){return s()})}},r})();tt.version="3.14.2";tt.saveStyles=function(r){return r?ba(r).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),eu())}}):Pn};tt.revert=function(r,e){return Bu(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?ia(!0):(ls||tt.register())&&Cr(!0)};tt.update=function(r){return++et.cache&&Li(r===!0?2:0)};tt.clearScrollMemory=Mp;tt.maxScroll=function(r,e){return di(r,e?pn:Gt)};tt.getScrollFunc=function(r,e){return cr(_n(r),e?pn:Gt)};tt.getById=function(r){return nu[r]};tt.getAll=function(){return je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!jn};tt.snapDirectional=Ou;tt.addEventListener=function(r,e){var t=Hr[r]||(Hr[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Hr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Se.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&rn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return rn(s)&&(s=s(),$t(tt,"refresh",function(){return s=e.batchMax()})),ba(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var xh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Xl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===Un&&r(ht,t)},go={auto:1,scroll:1},vS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Se.core.getCache(s),o=tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(go[(l=$n(s)).overflowY]||go[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!kr(s)&&(go[(l=$n(s)).overflowY]||go[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ep=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&vS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$t(yt,Ft.eventTypes[0],Sh,!1,!0)},onDisable:function(){return Yt(yt,Ft.eventTypes[0],Sh,!0)}})},xS=/(input|label|select|textarea)/i,Mh,Sh=function(e){var t=xS.test(e.target.tagName);(t||Mh)&&(e._gsapAllow=!0,Mh=t)},MS=function(e){Er(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=_n(e.target)||Un,u=Se.core.globals().ScrollSmoother,f=u&&u.get(),h=Yi&&(e.content&&_n(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=cr(c,Gt),g=cr(c,pn),_=1,m=(Ft.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,p=0,y=rn(i)?function(){return i(o)}:function(){return i||2.8},E,v,R=Ep(c,e.type,!0,s),w=function(){return v=!1},b=li,C=li,M=function(){l=di(c,Gt),C=ua(Yi?1:0,l),n&&(b=ua(0,di(c,pn))),E=Or},x=function(){h._gsap.y=ta(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var V=ta(o.deltaY/2),te=C(d.v-V);if(h&&te!==d.v+d.offset){d.offset=te-d.v;var D=ta((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=et.cache,Li()}return!0}d.offset&&x(),v=!0},N,B,X,$,G=function(){M(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Se.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Yi&&W.type==="touchmove"&&P()||_>1.05&&W.type!=="touchstart"||o.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){v=!1;var W=_;_=ta((Qe.visualViewport&&Qe.visualViewport.scale||1)/m),N.pause(),W!==_&&Xl(c,_>1.01?!0:n?!1:"x"),B=g(),X=d(),M(),E=Or},e.onRelease=e.onGestureStart=function(W,V){if(d.offset&&x(),!V)$.restart(!0);else{et.cache++;var te=y(),D,ue;n&&(D=g(),ue=D+te*.05*-W.velocityX/.227,te*=xh(g,D,ue,di(c,pn)),N.vars.scrollX=b(ue)),D=d(),ue=D+te*.05*-W.velocityY/.227,te*=xh(d,D,ue,di(c,Gt)),N.vars.scrollY=C(ue),N.invalidate().duration(te).play(.01),(Yi&&N.vars.scrollY>=l||D>=l-1)&&Se.to({},{onUpdate:G,duration:te})}a&&a(W)},e.onWheel=function(){N._ts&&N.pause(),tn()-p>1e3&&(E=0,p=tn())},e.onChange=function(W,V,te,D,ue){if(Or!==E&&M(),V&&n&&g(b(D[2]===V?B+(W.startX-W.x):g()+V-D[1])),te){d.offset&&x();var Le=ue[2]===te,Ke=Le?X+W.startY-W.y:d()+te-ue[1],K=C(Ke);Le&&Ke!==K&&(X+=K-Ke),d(K)}(te||V)&&Li()},e.onEnable=function(){Xl(c,n?!1:"x"),tt.addEventListener("refresh",G),$t(Qe,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Xl(c,!0),Yt(Qe,"resize",G),tt.removeEventListener("refresh",G),R.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ft(e),o.iOS=Yi,Yi&&!d()&&d(1),Yi&&Se.ticker.add(li),$=o._dc,N=Se.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yp(d,d(),function(){return N.pause()})},onUpdate:Li,onComplete:$.vars.onComplete}),o};tt.sort=function(r){if(rn(r))return je.sort(r);var e=Qe.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Qe.innerHeight}),je.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ft(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return un;if(r===!0&&un)return un.enable();if(r===!1){un&&un.kill(),un=r;return}var e=r instanceof Ft?r:MS(r);return un&&un.target===e.target&&un.kill(),kr(e.target)&&(un=e),e};tt.core={_getVelocityProp:jc,_inputObserver:Ep,_scrollers:et,_proxies:pi,bridge:{ss:function(){jn||Vr("scrollStart"),jn=tn()},ref:function(){return en}}};fp()&&Se.registerPlugin(tt);bt.registerPlugin(tt);function SS(){bt.config({nullTargetWarn:!1}),tt.create({trigger:".hero",start:"top top",end:"+=150",pin:!0,pinSpacing:!1}),bt.utils.toArray(".section-heading").forEach(o=>{bt.from(o,{opacity:0,y:40,duration:.8,ease:"power2.out",scrollTrigger:{trigger:o,start:"top 85%",once:!0}})});const r=bt.utils.toArray(".service-card");r.length&&bt.from(r,{opacity:0,y:60,scale:.95,duration:.7,stagger:.1,ease:"back.out(1.4)",scrollTrigger:{trigger:".services-grid",start:"top 75%",once:!0}}),bt.utils.toArray(".case-study-card").forEach((o,l)=>{bt.from(o,{opacity:0,x:l%2===0?-60:60,duration:.9,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 80%",once:!0}})}),document.querySelector(".stats-section")&&bt.from(".stat-block",{opacity:0,y:40,duration:.8,stagger:.15,ease:"power2.out",scrollTrigger:{trigger:".stats-section",start:"top 75%",once:!0}}),document.querySelector(".innovation-grid")&&(bt.from(".innovation-text",{opacity:0,x:-50,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".innovation-grid",start:"top 75%",once:!0}}),bt.from(".innovation-visual",{opacity:0,x:50,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".innovation-grid",start:"top 75%",once:!0}})),document.querySelector(".about-grid")&&(bt.from(".about-text",{opacity:0,x:-50,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".about-grid",start:"top 75%",once:!0}}),bt.from(".about-image",{opacity:0,x:50,scale:.95,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".about-grid",start:"top 75%",once:!0}})),bt.utils.toArray(".testimonial-card").forEach(o=>{bt.from(o,{opacity:0,scale:.9,duration:.7,ease:"power2.out",scrollTrigger:{trigger:o,start:"top 85%",once:!0}})});const i=bt.utils.toArray(".blog-card");i.length&&bt.from(i,{opacity:0,y:40,duration:.7,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:".blog-grid",start:"top 80%",once:!0}}),bt.utils.toArray(".accordion-item").forEach((o,l)=>{bt.from(o,{opacity:0,y:20,duration:.5,delay:l*.08,ease:"power2.out",scrollTrigger:{trigger:".faq-list",start:"top 80%",once:!0}})});const s=bt.utils.toArray(".footer__col");s.length&&bt.from(s,{opacity:0,y:40,duration:.7,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:".footer",start:"top 90%",once:!0}}),document.querySelector(".cta-banner")&&bt.from(".cta-banner h2, .cta-banner p, .cta-banner .btn",{opacity:0,y:30,duration:.7,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:".cta-banner",start:"top 80%",once:!0}}),bt.utils.toArray(".reveal").forEach(o=>{bt.from(o,{opacity:0,y:40,duration:.8,ease:"power2.out",scrollTrigger:{trigger:o,start:"top 85%",once:!0}})})}document.addEventListener("DOMContentLoaded",()=>{Dx(),Ix(),Px(),Lx(),Ux(),Nx(),Fx(),Ox(),requestAnimationFrame(()=>{SS()})});
