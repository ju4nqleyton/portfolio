(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{38:function(e,t,a){"use strict";a.r(t),a.d(t,"css",(function(){return f})),a.d(t,"extractCss",(function(){return i})),a.d(t,"glob",(function(){return h})),a.d(t,"keyframes",(function(){return x})),a.d(t,"setup",(function(){return v})),a.d(t,"styled",(function(){return j}));let r={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,i=e=>{let t=s(e),a=t.data;return t.data="",a},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?c(o,i):i+"{"+c(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=c(o,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},m=(e,t,a,r,s)=>{let i=u(e),m=d[i]||(d[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!d[m]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[m]=c(s?{["@keyframes "+m]:t}:t,a?"":"."+m)}let p=a&&d.g?d.g:null;return a&&(d.g=d[m]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[m],t,r,p),m},p=(e,t,a)=>e.reduce(((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function f(e){let t=this||{},a=e.call?e(t.p):e;return m(a.unshift?a.raw?p(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,s(t.target),t.g,t.o,t.k)}let b,g,y,h=f.bind({g:1}),x=f.bind({k:1});function v(e,t,a,r){c.p=t,b=e,g=a,y=r}function j(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:g&&g()},n),a.o=/ *go\d+/.test(l),n.className=f.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),y&&c[0]&&y(n),b(c,n)}return t?t(s):s}}},40:function(e,t,a){"use strict";var r=a(4);t.a=function(e){let{title:t}=e;return Object(r.jsx)("button",{children:t})}},42:function(e,t,a){"use strict";var r,s=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))!c.call(e,s)&&s!==a&&i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},u=(e,t,a)=>(a=null!=e?s(l(e)):{},d(!t&&e&&e.__esModule?a:i(a,"default",{value:e,enumerable:!0}),e)),m={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(m,{CheckmarkIcon:()=>B,ErrorIcon:()=>z,LoaderIcon:()=>R,ToastBar:()=>ae,ToastIcon:()=>X,Toaster:()=>ne,default:()=>le,resolveValue:()=>p,toast:()=>E,useToaster:()=>C,useToasterStore:()=>O}),e.exports=(r=m,d(i({},"__esModule",{value:!0}),r));var p=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,f=(()=>{let e=0;return()=>(++e).toString()})(),b=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),g=a(0),y=new Map,h=e=>{if(y.has(e))return;let t=setTimeout((()=>{y.delete(e),w({type:4,toastId:e})}),1e3);y.set(e,t)},x=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=y.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?x(e,{type:1,toast:a}):x(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?h(r):e.toasts.forEach((e=>{h(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},v=[],j={toasts:[],pausedAt:void 0},w=e=>{j=x(j,e),v.forEach((e=>{e(j)}))},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,g.useState)(j);(0,g.useEffect)((()=>(v.push(a),()=>{let e=v.indexOf(a);e>-1&&v.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||k[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}},N=e=>(t,a)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",a=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||f()}}(t,e,a);return w({type:2,toast:r}),r.id},E=(e,t)=>N("blank")(e,t);E.error=N("error"),E.success=N("success"),E.loading=N("loading"),E.custom=N("custom"),E.dismiss=e=>{w({type:3,toastId:e})},E.remove=e=>w({type:4,toastId:e}),E.promise=(e,t,a)=>{let r=E.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(E.success(p(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{E.error(p(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var T=a(0),_=(e,t)=>{w({type:1,toast:{id:e,height:t}})},I=()=>{w({type:5,time:Date.now()})},C=e=>{let{toasts:t,pausedAt:a}=O(e);(0,T.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>E.dismiss(t.id)),a);t.visible&&E.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let r=(0,T.useCallback)((()=>{a&&w({type:6,time:Date.now()})}),[a]),s=(0,T.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=a||{},o=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),n=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<n&&e.visible)).length;return o.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+s),0)}),[t]);return{toasts:t,handlers:{updateHeight:_,startPause:I,endPause:r,calculateOffset:s}}},$=u(a(0)),D=a(38),L=u(a(0)),F=a(38),M=a(38),P=M.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,S=M.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=M.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=(0,M.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,A=a(38),H=A.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=(0,A.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,V=a(38),J=V.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=V.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=(0,V.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=(0,F.styled)("div")`
  position: absolute;
`,Z=(0,F.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=F.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=(0,F.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=e=>{let{toast:t}=e,{icon:a,type:r,iconTheme:s}=t;return void 0!==a?"string"==typeof a?L.createElement(K,null,a):a:"blank"===r?null:L.createElement(Z,null,L.createElement(R,{...s}),"loading"!==r&&L.createElement(U,null,"error"===r?L.createElement(z,{...s}):L.createElement(B,{...s})))},Q=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,W=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ee=(0,D.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,te=(0,D.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ae=$.memo((e=>{let{toast:t,position:a,style:r,children:s}=e,i=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(a),W(a)];return{animation:t?`${(0,D.keyframes)(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,D.keyframes)(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||a||"top-center",t.visible):{opacity:0},o=$.createElement(X,{toast:t}),n=$.createElement(te,{...t.ariaProps},p(t.message,t));return $.createElement(ee,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof s?s({icon:o,message:n}):$.createElement($.Fragment,null,o,n))})),re=a(38),se=u(a(0));(0,re.setup)(se.createElement);var ie=e=>{let{id:t,className:a,style:r,onHeightUpdate:s,children:i}=e,o=se.useCallback((e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;s(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,s]);return se.createElement("div",{ref:o,className:a,style:r},i)},oe=re.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ne=e=>{let{reverseOrder:t,position:a="top-center",toastOptions:r,gutter:s,children:i,containerStyle:o,containerClassName:n}=e,{toasts:l,handlers:c}=C(r);return se.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((e=>{let r=e.position||a,o=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...s}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:s,defaultPosition:a}));return se.createElement(ie,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?oe:"",style:o},"custom"===e.type?p(e.message,e):i?i(e):se.createElement(ae,{toast:e,position:r}))})))},le=E},48:function(e,t,a){"use strict";a.r(t);var r=a(36),s=a(6),i=a(4);const o=[{id:1,name:"Ibagu\xe9, Colombia",icon:Object(i.jsx)(s.h,{})},{id:2,name:"ju4nqleyton@gmail.com",icon:Object(i.jsx)(s.g,{})}];var n=()=>Object(i.jsx)("div",{className:"w-full lg:w-1/2",children:Object(i.jsxs)("div",{className:"text-left max-w-xl px-6",children:[Object(i.jsx)("h2",{className:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",children:"Contact details"}),Object(i.jsx)("ul",{className:"font-general-regular",children:o.map((e=>Object(i.jsxs)("li",{className:"flex ",children:[Object(i.jsx)("i",{className:"text-2xl text-gray-500 dark:text-gray-400 mr-4",children:e.icon}),Object(i.jsx)("span",{className:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",children:e.name})]},e.id)))})]})}),l=a(0),c=a(40);var d=e=>{let{inputLabel:t,labelFor:a,inputType:r,inputId:s,inputName:o,placeholderText:n,ariaLabelName:l,value:c,onChange:d}=e;return Object(i.jsxs)("div",{className:"font-general-regular mb-4",children:[Object(i.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-1",htmlFor:a,children:t}),Object(i.jsx)("input",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",type:r,id:s,name:o,placeholder:n,"aria-label":l,value:c,onChange:d,required:!0})]})};const u={_origin:"https://api.emailjs.com"},m=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e.status,this.text=e.responseText}}const f=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",(e=>{let{target:t}=e;const a=new p(t);200===a.status||"OK"===a.text?r(a):s(a)})),i.addEventListener("error",(e=>{let{target:t}=e;s(new p(t))})),i.open("POST",u._origin+e,!0),Object.keys(a).forEach((e=>{i.setRequestHeader(e,a[e])})),i.send(t)}))};var b=(e,t,a,r)=>{const s=r||u._userID,i=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);m(s,e,t);const o=new FormData(i);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",s),f("/api/v1.0/email/send-form",o)},g=a(42),y=a.n(g);var h=()=>{const e=Object(l.useRef)(),[t,a]=Object(l.useState)({user_name:"",user_email:"",message:""}),r=e=>{let{target:{name:t,value:r}}=e;a((e=>({...e,[t]:r})))};return Object(i.jsx)("div",{className:"w-full lg:w-1/2",children:Object(i.jsxs)("div",{className:"leading-loose",children:[Object(i.jsx)(g.Toaster,{}),Object(i.jsxs)("form",{ref:e,onSubmit:async t=>{t.preventDefault();try{const r=await(async e=>{try{const t=await b("service_tclv9wb","template_vnai3xu",e.current,"oGepLHNgumrcZ8Joy");return y.a.success("Message sent successfully!"),t}catch(t){return console.error("FAILED...",t.text),y.a.error("Failed to send message. Please try again."),t}})(e);200===r.status&&((e,t)=>{t({user_name:"",user_email:"",message:""}),e.target.reset()})(t,a)}catch(r){console.error("Error sending email:",r)}},className:"max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left",children:[Object(i.jsx)("p",{className:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8",children:"Contact Form"}),Object(i.jsx)(d,{inputLabel:"Full Name",labelFor:"name",inputType:"text",inputId:"name",inputName:"user_name",placeholderText:"Your Name",ariaLabelName:"Name",value:t.user_name,onChange:r}),Object(i.jsx)(d,{inputLabel:"Email",labelFor:"email",inputType:"email",inputId:"email",inputName:"user_email",placeholderText:"Your email",ariaLabelName:"Email",value:t.user_email,onChange:r}),Object(i.jsxs)("div",{className:"mt-6",children:[Object(i.jsx)("label",{className:"block text-lg text-primary-dark dark:text-primary-light mb-2",htmlFor:"message",children:"Message"}),Object(i.jsx)("textarea",{className:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message",value:t.message,onChange:r,required:!0})]}),Object(i.jsx)("div",{className:"font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-amber-500 hover:bg-amber-600 focus:ring-1 focus:ring-amber-900 rounded-lg mt-6 duration-500",children:Object(i.jsx)(c.a,{title:"Send Message",type:"submit","aria-label":"Send Message"})})]})]})})};t.default=()=>Object(i.jsxs)(r.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.5,delay:.1},className:"container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10",children:[Object(i.jsx)(h,{}),Object(i.jsx)(n,{})]})}}]);
//# sourceMappingURL=4.a0b8ba36.chunk.js.map