(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{73700:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(77431)}])},77431:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return v}});var t=r(85893),i=r(96074),n=r(23323),a=r(18370),o=r(10932),l=r(25675),c=r.n(l),u=r(11163),d=r.n(u),m=r(62110);let h=e=>{let{message:s,hidden:r,type:i}=e;return r?(0,t.jsx)(m.Z,{style:{marginTop:"10px"},message:s,type:i,closable:!0}):(0,t.jsx)(t.Fragment,{})};var p=r(48186);class g extends p.Z{constructor(...e){super(...e),this.loginWithEmailAndPassword=async e=>{let{email:s,password:r}=e,{data:t}=await this.api.post("".concat("https://auth.development.llpaybr.com","/user/login"),JSON.stringify({email:s,password:r}),{headers:{"Content-Type":"application/json"}});return t}}}var f=r(5040),x=r(87547),y=r(94149),w=r(29204),E=r(67294),j={src:"/backoffice/_next/static/media/logo.815af36e.svg",height:60,width:451,blurWidth:0,blurHeight:0};let Z=()=>{let[e,s]=(0,E.useState)({isError:!1,messageError:""}),[r,l]=(0,E.useState)(!1),u=async e=>{let{email:r,password:t}=e;try{l(!0);let{token:e,expiresIn:s}=await new g().loginWithEmailAndPassword({email:r,password:t});(0,f.o4)(e,s),d().push("/")}catch(e){if((0,w.IZ)(e)){var i;if((null===(i=e.response)||void 0===i?void 0:i.status)==w.WE.BadRequest){s({isError:!0,messageError:"Invalid credentials."}),l(!1);return}}s({isError:!0,messageError:"Some thing wrong happened."}),l(!1)}},m=async e=>{await u(e)};return(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column",backgroundColor:"#1E4CF5"},children:(0,t.jsxs)("div",{style:{backgroundColor:"#FFFFFF",padding:"50px",minWidth:400},children:[(0,t.jsx)(c(),{src:j,style:{width:"100%",height:"auto"},alt:""}),(0,t.jsx)(i.Z,{}),(0,t.jsxs)(n.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:m,style:{minWidth:400},size:"large",children:[(0,t.jsx)(n.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,t.jsx)(a.Z,{prefix:(0,t.jsx)(x.Z,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,t.jsx)(n.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,t.jsx)(a.Z,{prefix:(0,t.jsx)(y.Z,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,t.jsx)(n.Z.Item,{style:{margin:"0px"},children:(0,t.jsx)(o.ZP,{type:"primary",loading:r,htmlType:"submit",className:"login-form-button",style:{minWidth:"400px"},children:"Sign In"})})]}),(0,t.jsx)(h,{message:e.messageError,hidden:e.isError,type:"error"})]})})};var v=Z},48186:function(e,s,r){"use strict";var t=r(5040),i=r(87066);s.Z=class{constructor(e){this.api=i.Z.create();let s=(0,t.LP)(e);s&&(this.api.defaults.headers.Authorization="Bearer ".concat(s))}}}},function(e){e.O(0,[193,392,783,932,756,143,323,356,774,888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);