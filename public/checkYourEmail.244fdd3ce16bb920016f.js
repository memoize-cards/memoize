"use strict";(self.webpackChunkmemoize=self.webpackChunkmemoize||[]).push([[518],{301:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(395),r=t(634);const i=t.p+"memoize.675d6c1b3b0d51f32588dcab51fcfb4f.svg";const a=t(917).Z`
  .logo {
    aspect-ratio: 1 / 1;
    cursor: pointer;
    object-fit: cover;
    width: 80px;
  }
`;const c=function component(){return(0,r.ZP)("img",{className:a.logo,src:i,alt:"Memoize",loading:"auto",onClick:()=>location.assign((0,o.uH)("home"))})}},950:(n,e,t)=>{t.d(e,{Z:()=>s});const o=["complete","danger","info","master","menu","primary","success","warning"];const r=function background(n){const e=o.find((e=>n[e]));return e?`var(--color-${e})`:"var(--color-pure-white)"},i=["complete","danger","info","master","menu","primary","success","warning"];const a=function border(n){const e=i.find((e=>n[e]));return e?`var(--color-${e})`:"var(--color-master)"},c=["complete","danger","info","master","menu","primary","success","warning"];const l=function color_border(n){return c.some((e=>n[e]))?"var(--color-pure-white)":"var(--color-master)"};const s=t(177).Z.button`
  align-items: center;
  background-color: ${r};
  border: var(--border-width-hairline) solid ${a};
  border-radius: var(--border-radius-sm);
  color: ${l};
  cursor: pointer;
  display: flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-medium);
  gap: var(--spacing_inset-nano);
  height: 42px;
  justify-content: center;
  line-height: var(--line-height-default);
  padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
`},672:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(634),r=t(485);const i=function validity(n){return Array.from(n.target.querySelectorAll("input")).every((n=>!!n.validity.valid||(n.dispatchEvent(new Event("invalid")),!1)))};const a=function component(n,e){return(0,o.ZP)(r.Z.Form,Object.assign({},n,{onSubmit:e=>{var t;return i(e)&&(null===(t=n.onSubmit)||void 0===t?void 0:t.call(n,e))},column:!0,sm:!0,novalidate:!0}),e)}},485:(n,e,t)=>{t.d(e,{Z:()=>p});const o=["top","middle","bottom"],r={top:"start",middle:"center",bottom:"end"};const i=function align(n){var e;return null!==(e=r[o.find((e=>n[e]))])&&void 0!==e?e:r.top},a=["start","center","end"];const c=function content(n){var e;return null!==(e=a.find((e=>n[e])))&&void 0!==e?e:"start"},l=["row","column"];const s=function direction(n){var e;return null!==(e=l.find((e=>n[e])))&&void 0!==e?e:"row"},u=["quarck","nano","xs","sm","md","lg","huge","giant"];const d=function gap(n){var e;return`var(--spacing_inset-${null!==(e=u.find((e=>n[e])))&&void 0!==e?e:"xs"})`};var m=t(177);const p=new Proxy({},{get:(n,e)=>m.Z[e]`
      align-items: ${i};
      display: flex;
      flex-direction: ${s};
      gap: ${d};
      justify-content: ${c};
      width: 100%;
    `})},282:(n,e,t)=>{t.d(e,{Z:()=>g});const o=["left","center","right"];const r=function align(n){var e;return null!==(e=o.find((e=>n[e])))&&void 0!==e?e:"inherit"},i=["complete","danger","info","master","menu","primary","success","warning"],a=["darkest","darker","dark","light","lighter","lightest"];const c=function color(n){var e;return`var(--color-${[null!==(e=i.find((e=>n[e])))&&void 0!==e?e:"master",a.find((e=>n[e]))].filter(Boolean).join("-")})`},l=["base","highlight"];const s=function family(n){var e;return`var(--font-family-${null!==(e=l.find((e=>n[e])))&&void 0!==e?e:"base"})`},u=["xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl","display","giant"];const d=function size(n){var e;return`var(--font-size-${null!==(e=u.find((e=>n[e])))&&void 0!==e?e:"xs"})`};var m=t(177);const p=["bold","medium","regular"];const f=function weight(n){var e;return`var(--font-weight-${null!==(e=p.find((e=>n[e])))&&void 0!==e?e:"regular"})`},g=new Proxy({},{get:(n,e)=>m.Z[e]`
      color: ${c};
      font-family: ${s};
      font-size: ${d};
      font-weight: ${f};
      line-height: var(--line-height-sm);
      text-align: ${r};
    `})},861:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(917),r=t(634);const i=function component(n,e){return(0,r.ZP)(r.HY,null,(0,r.ZP)(o.b,null),e)}},196:(n,e,t)=>{t.r(e),t.d(e,{default:()=>E});var o=t(634),r=t(395),i=t(282),a=t(768),c=t(318);const l={clickToResend:{[c.Z.EN]:"Click to resend",[c.Z.ES]:"Click to resend",[c.Z.PT]:"Click to resend"},description:{[c.Z.EN]:"We sent a password reset link to",[c.Z.ES]:"We sent a password reset link to",[c.Z.PT]:"We sent a password reset link to"},footer:{[c.Z.EN]:"Didn't receive the email?",[c.Z.ES]:"Didn't receive the email?",[c.Z.PT]:"Didn't receive the email?"},logIn:{[c.Z.EN]:"Back to log in",[c.Z.ES]:"Back to log in",[c.Z.PT]:"Back to log in"},openEmailApp:{[c.Z.EN]:"Open email app",[c.Z.ES]:"Open email app",[c.Z.PT]:"Open email app"},title:{[c.Z.EN]:"Check your email?",[c.Z.ES]:"Check your email?",[c.Z.PT]:"Check your email?"}},s=(0,a.Z)(l);const u=function component(){return(0,o.ZP)(i.Z.A,{href:(0,r.uH)("checkYourEmail"),primary:!0,xxs:!0,medium:!0},s.clickToResend)};const d=function logIn_component(){return(0,o.ZP)(i.Z.A,{href:(0,r.uH)("logIn"),primary:!0,xxs:!0,medium:!0},s.logIn)};var m=t(485);const p=function footer_component(){return(0,o.ZP)(m.Z.Footer,{column:!0},(0,o.ZP)(m.Z.Div,{center:!0,nano:!0},(0,o.ZP)(i.Z.Span,{master:!0,xxs:!0},s.footer),(0,o.ZP)(u,null)),(0,o.ZP)(m.Z.Div,{center:!0},(0,o.ZP)(d,null)))};var f=t(672);const g=function email_component(){return(0,o.ZP)(i.Z.Strong,{master:!0,dark:!0,xxs:!0,medium:!0},r.WC.email)};var v=t(301);const Z=function header_component(){return(0,o.ZP)(m.Z.Header,{column:!0,middle:!0,giant:!0},(0,o.ZP)(v.Z,null),(0,o.ZP)(m.Z.HGroup,{column:!0,middle:!0,quarck:!0},(0,o.ZP)(i.Z.H1,{master:!0,dark:!0,highlight:!0,md:!0,bold:!0},s.title),(0,o.ZP)(i.Z.H2,{master:!0,dark:!0,xxs:!0,center:!0},s.description,(0,o.ZP)("br",null),(0,o.ZP)(g,null))))};var h=t(861);const x=t(917).Z`
  .checkYourEmail__main {
    height: 100vh;
    margin: 0 auto;
    max-width: 408px;
    padding: var(--spacing_inset-xs);
  }

  .checkYourEmail__openEmailApp {
    width: 100%;
  }
`;const P=function main_component(n,e){return(0,o.ZP)(h.Z,null,(0,o.ZP)(m.Z.Main,{className:x.checkYourEmail__main,column:!0,middle:!0,center:!0,giant:!0},e))};var k=t(950);const y=function openEmailApp_component(){return(0,o.ZP)(k.Z,{className:x.checkYourEmail__openEmailApp,primary:!0},s.openEmailApp)};const b=function component_component(){return(0,o.ZP)(P,null,(0,o.ZP)(Z,null),(0,o.ZP)(f.Z,null,(0,o.ZP)(y,null)),(0,o.ZP)(p,null))};var __decorate=function(n,e,t,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(a=(i<3?r(a):i>3?r(e,t,a):r(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a};let w=class Auth{};w=__decorate([(0,o.Kf)(b)],w);const E=w},453:(n,e,t)=>{t.d(e,{Z:()=>a});const o=new Blob(["self.addEventListener('message', e => self.postMessage(e.data))"],{type:"application/javascript"}),r=new Worker(window.URL.createObjectURL(o));const i={emit:function emit(n,e){r.postMessage({channel:n,message:e})},on:function on(n,e){r.addEventListener("message",(t=>{var o,r;return n===(null===(o=t.data)||void 0===o?void 0:o.channel)&&e(null===(r=t.data)||void 0===r?void 0:r.message)}))}},a=new Proxy({},{get(n,e){var t;return null===(t=document.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`))||void 0===t?void 0:t.pop()},set:(n,e,t)=>(document.cookie=`${e}=${t};domain=localhost;expires=;path=/`,i.emit(`cookie:${e}`,t),i.emit("cookie:",{key:e,value:t}),!0)})},768:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(318);const r=function i18n(n){return new Proxy({},{get:(e,t)=>n[t][o.Z.value]})}},318:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(395),r=t(453);const i={EN:"en-US",ES:"es",PT:"pt-BR",get value(){return r.Z.lang||o.WC.lang||navigator.language||i.EN},set value(n){r.Z.lang=n}},a=i},177:(n,e,t)=>{t.d(e,{Z:()=>l});const o=function executeInterpolations(n,e){return n.map((n=>null==n?void 0:n(e)))};var r=t(634);const i=/[\s]{2,}|[\r\n\t]+/g;const a=function minifyCSS(n){return n.replace(i," ").trim()};const c=function zip(n,e){return Array(Math.max(n.length,e.length)).fill().map(((t,o)=>[n[o],e[o]])).flat(1/0).join("")},l=new Proxy({},{get:(n,e)=>function(n,...t){return function(i,l){const s=a(c(n,o(t,i)));return(0,r.ZP)(e,Object.assign({style:s},i),...l)}}})}}]);