(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{63606:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(87462),o=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=n(42135),s=o.forwardRef(function(e,t){return o.createElement(c.Z,(0,a.Z)({},e,{ref:t,icon:r}))})},49867:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});let a=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}})},20640:function(e,t,n){"use strict";var a=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,c,s,i,u,E,l,N=!1;t||(t={}),c=t.debug||!1;try{if(i=a(),u=document.createRange(),E=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(l),u.selectNodeContents(l),E.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");N=!0}catch(a){c&&console.error("unable to copy using execCommand: ",a),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),N=!0}catch(a){c&&console.error("unable to copy using clipboardData: ",a),c&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=n.replace(/#{\s*key\s*}/g,r),window.prompt(s,e)}}finally{E&&("function"==typeof E.removeRange?E.removeRange(u):E.removeAllRanges()),l&&document.body.removeChild(l),i()}return N}},48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(70085)}])},51450:function(e,t,n){"use strict";var a=n(85893),o=n(11163),r=n(5040),c=n(67294);let s=e=>{let t=t=>{let n=(0,o.useRouter)(),s=(0,r.LP)();return(0,c.useEffect)(()=>{s||n.push("/login")},[s,n]),s?(0,a.jsx)(e,{...t}):null};return t};t.Z=s},70085:function(e,t,n){"use strict";n.r(t);var a=n(85893),o=n(14271),r=n(51450);let{Title:c}=o.Z,s=()=>(0,a.jsx)(c,{children:"Welcome!!"});t.default=(0,r.Z)(s)},11163:function(e,t,n){e.exports=n(96885)},79370:function(e,t,n){"use strict";n.d(t,{G:function(){return c}});var a=n(98924),o=function(e){if((0,a.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some(function(e){return e in n.style})}return!1},r=function(e,t){if(!o(e))return!1;var n=document.createElement("div"),a=n.style[e];return n.style[e]=t,n.style[e]!==a};function c(e,t){return Array.isArray(e)||void 0===t?o(e):r(e,t)}},15105:function(e,t){"use strict";var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=n.F1&&t<=n.F12)return!1;switch(t){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=n.ZERO&&e<=n.NINE||e>=n.NUM_ZERO&&e<=n.NUM_MULTIPLY||e>=n.A&&e<=n.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.Z=n},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[193,392,783,271,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);