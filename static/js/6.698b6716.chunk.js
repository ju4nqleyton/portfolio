(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[6],{43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(44);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return d((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},y=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==c(t,2)[1]}))),n=r.useMemo((function(){return s(s({},m),e)}),[t]),a=n.ref,o=n.startOnMount,l=n.enableReinitialize,p=n.delay,d=n.onEnd,y=n.onStart,g=n.onPauseResume,b=n.onReset,v=n.onUpdate,j=u(n,h),O=r.useRef(),w=r.useRef(),x=r.useRef(!1),V=f((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,p=e.separator,d=e.start,f=e.suffix,h=e.useEasing,m=e.useGrouping,y=e.useIndianSeparators,g=e.enableScrollSpy,b=e.scrollSpyDelay,v=e.scrollSpyOnce,j=e.plugin;return new i.CountUp(t,o,{startVal:d,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:p,prefix:c,suffix:f,plugin:j,useEasing:h,useIndianSeparators:y,useGrouping:m,enableScrollSpy:g,scrollSpyDelay:b,scrollSpyOnce:v})}("string"===typeof a?a:a.current,j)})),S=f((function(t){var e=O.current;if(e&&!t)return e;var n=V();return O.current=n,n})),E=f((function(){var t=function(){return S(!0).start((function(){null===d||void 0===d||d({pauseResume:F,reset:C,start:R,update:N})}))};p&&p>0?w.current=setTimeout(t,1e3*p):t(),null===y||void 0===y||y({pauseResume:F,reset:C,update:N})})),F=f((function(){S().pauseResume(),null===g||void 0===g||g({reset:C,start:R,update:N})})),C=f((function(){S().el&&(w.current&&clearTimeout(w.current),S().reset(),null===b||void 0===b||b({pauseResume:F,start:R,update:N}))})),N=f((function(t){S().update(t),null===v||void 0===v||v({pauseResume:F,reset:C,start:R})})),R=f((function(){C(),E()})),A=f((function(t){o&&(t&&C(),E())}));return r.useEffect((function(){x.current?l&&A(!0):(x.current=!0,A())}),[l,x,A,p,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){C()}}),[C]),{start:R,pauseResume:F,reset:C,update:N,getCountUp:S}},g=["className","redraw","containerProps","children","style"];e.default=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,c=u(t,g),p=r.useRef(null),d=r.useRef(!1),h=y(s(s({},c),{},{ref:p,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),m=h.start,b=h.reset,v=h.update,j=h.pauseResume,O=h.getCountUp,w=f((function(){m()})),x=f((function(e){t.preserveValue||b(),v(e)})),V=f((function(){"function"!==typeof t.children||p.current instanceof Element?O():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){V()}),[V]),r.useEffect((function(){d.current&&x(t.end)}),[t.end,x]);var S=n&&t;return r.useEffect((function(){n&&d.current&&w()}),[w,n,S]),r.useEffect((function(){!n&&d.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"===typeof a?a({countUpRef:p,start:m,reset:b,update:v,pauseResume:j,getCountUp:O}):r.createElement("span",l({className:e,ref:p,style:o},i),"undefined"!==typeof t.start?O().formattingFn(t.start):"")},e.useCountUp=y},44:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return i}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var l=3,u=0,c=0,p=n.length;c<p;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=i.options.separator+a),u++,a=n[p-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},50:function(t,e,n){"use strict";n.r(e);var r=n.p+"static/media/profile.c56fd94a.png",i=n(0);const a=[{id:1,bio:"I'm Juan Quintero, a 27-year-old technology enthusiast with a strong interest in Front-end development. Despite my History background, technology has always held a profound allure for me."},{id:2,bio:"Currently, I'm fully dedicated to honing my skills in Front-end development, focusing on JavaScript, React, Tailwind CSS, and TypeScript. I'm continually learning and enhancing my proficiency in these technologies, aiming to seamlessly merge my passion for technology with creative abilities to craft exceptional web experiences."},{id:3,bio:"Eagerly pursuing my first professional opportunity in the tech industry, I'm ready to contribute my knowledge and enthusiasm to Front-end development. My analytical skills, coupled with a unique historical perspective, complement my technical focus."},{id:4,bio:"Join me on this exciting journey where creativity and technology converge to shape extraordinary web experiences!"}];var s=n(3);const o=Object(i.createContext)(),l=t=>{let{children:e}=t;const[n,r]=Object(i.useState)(a);return Object(s.jsx)(o.Provider,{value:{aboutMe:n,setAboutMe:r},children:e})};var u=o;var c=()=>{const{aboutMe:t}=Object(i.useContext)(u);return Object(s.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[Object(s.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:Object(s.jsx)("img",{src:r,className:"rounded-lg w-96",alt:"Juan Quintero"})}),Object(s.jsx)("div",{className:"font-general-regular w-full sm:w-3/4 text-left",children:t.map((t=>Object(s.jsx)("p",{className:"mb-4 text-ternary-dark dark:text-ternary-light text-lg",children:t.bio},t.id)))})]})},p=n(43);var d=t=>{let{title:e,counter:n,measurement:r}=t;return Object(s.jsxs)("div",{className:"mb-20 sm:mb-0",children:[Object(s.jsx)("h2",{className:"text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2",children:e}),Object(s.jsxs)("span",{className:"font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light",children:[n,r]})]})};var f=()=>(Object(p.useCountUp)({ref:"javascriptCounter",end:120,duration:2}),Object(p.useCountUp)({ref:"reactCounter",end:80,duration:2}),Object(p.useCountUp)({ref:"tailwindCounter",end:40,duration:2}),Object(p.useCountUp)({ref:"typescript",end:40,duration:2}),Object(s.jsx)("div",{className:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",children:Object(s.jsxs)("div",{className:"font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center",children:[Object(s.jsx)(d,{title:"JavaScript",counter:Object(s.jsx)("span",{id:"javascriptCounter"}),measurement:"+ hours"}),Object(s.jsx)(d,{title:"React",counter:Object(s.jsx)("span",{id:"reactCounter"}),measurement:"+ hours"}),Object(s.jsx)(d,{title:"Tailwind CSS",counter:Object(s.jsx)("span",{id:"tailwindCounter"}),measurement:"+ hours"}),Object(s.jsx)(d,{title:"TypeScript",counter:Object(s.jsx)("span",{id:"typescript"}),measurement:"+ hours"})]})})),h=n(36);e.default=()=>Object(s.jsxs)(l,{children:[Object(s.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(s.jsx)(c,{})}),Object(s.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},children:Object(s.jsx)(f,{})}),Object(s.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto"})]})}}]);
//# sourceMappingURL=6.698b6716.chunk.js.map