"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{3905:function(e,t,r){r.r(t),r.d(t,{default:function(){return ea}});var a=r(5893),o=r(4902),n=r(7294),l=r(3967),i=r.n(l),s=r(9257),c=r(3124),d=r(2401),g=r(344),u=r(7293),h=r(4548),b=r(1945);let f=e=>{let{componentCls:t,bodyBg:r,lightSiderBg:a,lightTriggerBg:o,lightTriggerColor:n}=e;return{[`${t}-sider-light`]:{background:a,[`${t}-sider-trigger`]:{color:n,background:o},[`${t}-sider-zero-width-trigger`]:{color:n,background:o,border:`1px solid ${r}`,borderInlineStart:0}}}},m=e=>{let{antCls:t,componentCls:r,colorText:a,triggerColor:o,footerBg:n,triggerBg:l,headerHeight:i,headerPadding:s,headerColor:c,footerPadding:d,triggerHeight:g,zeroTriggerHeight:u,zeroTriggerWidth:b,motionDurationMid:m,motionDurationSlow:p,fontSize:y,borderRadius:k,bodyBg:x,headerBg:S,siderBg:v}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:x,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},[`${r}-sider`]:{position:"relative",minWidth:0,background:v,transition:`all ${m}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${t}-menu${t}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:g},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:g,color:o,lineHeight:(0,h.unit)(g),textAlign:"center",background:l,cursor:"pointer",transition:`all ${m}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:i,insetInlineEnd:e.calc(b).mul(-1).equal(),zIndex:1,width:b,height:u,color:o,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:v,borderStartStartRadius:0,borderStartEndRadius:k,borderEndEndRadius:k,borderEndStartRadius:0,cursor:"pointer",transition:`background ${p} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${p}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(b).mul(-1).equal(),borderStartStartRadius:k,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:k}}}}},f(e)),{"&-rtl":{direction:"rtl"}}),[`${r}-header`]:{height:i,padding:s,color:c,lineHeight:(0,h.unit)(i),background:S,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:d,color:a,fontSize:y,background:n},[`${r}-content`]:{flex:"auto",color:a,minHeight:0}}},p=e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:a,colorText:o,controlHeightSM:n,marginXXS:l,colorTextLightSolid:i,colorBgContainer:s}=e,c=1.25*a;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:`0 ${c}px`,headerColor:o,footerPadding:`${n}px ${c}px`,footerBg:t,siderBg:"#001529",triggerHeight:a+2*l,triggerBg:"#002140",triggerColor:i,zeroTriggerWidth:a,zeroTriggerHeight:a,lightSiderBg:s,lightTriggerBg:s,lightTriggerColor:o}};var y=(0,b.I$)("Layout",e=>[m(e)],p,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),k=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function x(e){let{suffixCls:t,tagName:r,displayName:a}=e;return e=>{let a=n.forwardRef((a,o)=>n.createElement(e,Object.assign({ref:o,suffixCls:t,tagName:r},a)));return a}}let S=n.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:a,className:o,tagName:l}=e,s=k(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=n.useContext(c.E_),g=d("layout",r),[u,h,b]=y(g),f=a?`${g}-${a}`:g;return u(n.createElement(l,Object.assign({className:i()(r||f,o,h,b),ref:t},s)))}),v=n.forwardRef((e,t)=>{let{direction:r}=n.useContext(c.E_),[a,l]=n.useState([]),{prefixCls:h,className:b,rootClassName:f,children:m,hasSider:p,tagName:x,style:S}=e,v=k(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),C=(0,s.Z)(v,["suffixCls"]),{getPrefixCls:j,layout:N}=n.useContext(c.E_),$=j("layout",h),O=function(e,t,r){if("boolean"==typeof r)return r;if(e.length)return!0;let a=(0,g.Z)(t);return a.some(e=>e.type===u.Z)}(a,m,p),[B,E,T]=y($),w=i()($,{[`${$}-has-sider`]:O,[`${$}-rtl`]:"rtl"===r},null==N?void 0:N.className,b,f,E,T),z=n.useMemo(()=>({siderHook:{addSider:e=>{l(t=>[].concat((0,o.Z)(t),[e]))},removeSider:e=>{l(t=>t.filter(t=>t!==e))}}}),[]);return B(n.createElement(d.V.Provider,{value:z},n.createElement(x,Object.assign({ref:t,className:w,style:Object.assign(Object.assign({},null==N?void 0:N.style),S)},C),m)))}),C=x({tagName:"div",displayName:"Layout"})(v),j=x({suffixCls:"header",tagName:"header",displayName:"Header"})(S),N=x({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(S),$=x({suffixCls:"content",tagName:"main",displayName:"Content"})(S),O=C;O.Header=j,O.Footer=N,O.Content=$,O.Sider=u.Z,O._InternalSiderContext=u.D;var B=r(7164),E=r(2790),T=r(1393);let w=e=>{let t=(null==e?void 0:e.algorithm)?(0,h.createTheme)(e.algorithm):(0,h.createTheme)(B.Z),r=Object.assign(Object.assign({},E.Z),null==e?void 0:e.token);return(0,h.getComputedToken)(r,{override:null==e?void 0:e.token},t,T.Z)};var z=r(5976),R=r(3083),H=r(372),Z=r(9594);let P=(e,t)=>{let r=null!=t?t:(0,B.Z)(e),a=r.fontSizeSM,o=r.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},r),function(e){let{sizeUnit:t,sizeStep:r}=e,a=r-2;return{sizeXXL:t*(a+10),sizeXL:t*(a+6),sizeLG:t*(a+2),sizeMD:t*(a+2),sizeMS:t*(a+1),size:t*a,sizeSM:t*a,sizeXS:t*(a-1),sizeXXS:t*(a-1)}}(null!=t?t:e)),(0,Z.Z)(a)),{controlHeight:o}),(0,H.Z)(Object.assign(Object.assign({},r),{controlHeight:o})))};var _=r(6397),A=r(57),I=r(274);let L=(e,t)=>new I.C(e).setAlpha(t).toRgbString(),M=(e,t)=>{let r=new I.C(e);return r.lighten(t).toHexString()},X=e=>{let t=(0,_.generate)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},F=(e,t)=>{let r=e||"#000",a=t||"#fff";return{colorBgBase:r,colorTextBase:a,colorText:L(a,.85),colorTextSecondary:L(a,.65),colorTextTertiary:L(a,.45),colorTextQuaternary:L(a,.25),colorFill:L(a,.18),colorFillSecondary:L(a,.12),colorFillTertiary:L(a,.08),colorFillQuaternary:L(a,.04),colorBgElevated:M(r,12),colorBgContainer:M(r,8),colorBgLayout:M(r,0),colorBgSpotlight:M(r,26),colorBgBlur:L(a,.04),colorBorder:M(r,26),colorBorderSecondary:M(r,19)}},D=(e,t)=>{let r=Object.keys(E.M).map(t=>{let r=(0,_.generate)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,a,o)=>(e[`${t}-${o+1}`]=r[o],e[`${t}${o+1}`]=r[o],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{}),a=null!=t?t:(0,B.Z)(e);return Object.assign(Object.assign(Object.assign({},a),r),(0,A.Z)(e,{generateColorPalettes:X,generateNeutralColorPalettes:F}))};var q={defaultConfig:R.u_,defaultSeed:R.u_.token,useToken:function(){let[e,t,r]=(0,z.ZP)();return{theme:e,token:t,hashId:r}},defaultAlgorithm:B.Z,darkAlgorithm:D,compactAlgorithm:P,getDesignToken:w},Q=r(8558),W=r(1163);let G={label:"Account",key:"account",children:[{className:"accounts",label:"Accounts",key:"/accounts"},{className:"approve",label:"Accounts to approve",key:"/accounts/approve"}]},K={label:"CERC",key:"cerc",children:[{className:"receivables",label:"Receivables",key:"/cerc/receivables"},{className:"calendar",label:"Calendar",key:"/cerc/calendar"}]},V={key:"payin",label:"Payin",children:[{className:"refunds",label:"Refunds",key:"/payins/refunds"},{className:"payins",label:"Payin`s",key:"/payins"}]},J={label:"Payout",key:"payout",children:[{className:"payee-merchants",label:"Payee Merchants",key:"/payouts/payee-merchants"},{className:"payouts",label:"Payout`s",key:"/payouts"}]},U={className:"customers",label:"Customers",key:"/customers"},Y={className:"reports",label:"Reports",key:"/reports"},{Content:ee,Sider:et}=O,er=e=>{let{children:t}=e,r=(0,W.useRouter)(),{token:{colorBgContainer:o}}=q.useToken();return(0,a.jsxs)(O,{hasSider:!0,children:[(0,a.jsxs)(et,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0},children:[(0,a.jsx)("div",{style:{height:32,margin:16,background:"rgba(255, 255, 255, 0.2)"}}),(0,a.jsx)(Q.Z,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:[G,K,V,J,U,Y],onClick:e=>{let{keyPath:t}=e;return r.push(t[0])}})]}),(0,a.jsx)(O,{className:"site-layout",style:{marginLeft:200},children:(0,a.jsx)(ee,{style:{margin:"16px 16px 16px",overflow:"initial"},children:(0,a.jsx)("div",{style:{padding:24,minHeight:"100vh",background:o},children:t})})})]})};var ea=er}}]);