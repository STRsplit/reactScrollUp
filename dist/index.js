!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"==typeof e&&n.test(e)};var n=/-webkit-|-moz-|-ms-/;e.exports=t.default},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7));e.exports=t.default},function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";var n=r(6);function o(){}e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=/[A-Z]/g,o=/^ms-/,i={};e.exports=function(e){return e in i?i[e]:i[e]=e.replace(n,"-$&").toLowerCase().replace(o,"-ms-")}},function(e,t,r){"use strict";r.r(t);var n=r(1),o=(r(4),r(2));function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t,r){if(e.hasOwnProperty(t)){for(var n={},o=e[t],s=i(t),a=Object.keys(r),l=0;l<a.length;l++){var c=a[l];if(c===t)for(var u=0;u<o.length;u++)n[o[u]+s]=r[t];n[c]=r[c]}return n}return r}function a(e,t,r,n,o){for(var i=0,s=e.length;i<s;++i){var a=e[i](t,r,n,o);if(a)return a}}function l(e,t){-1===e.indexOf(t)&&e.push(t)}function c(e,t){if(Array.isArray(t))for(var r=0,n=t.length;r<n;++r)l(e,t[r]);else l(e,t)}function u(e){return e instanceof Object&&!Array.isArray(e)}var p=["Webkit"],f=["ms"],d=["Webkit","ms"],m={plugins:[],prefixMap:{appearance:["Webkit","Moz"],textEmphasisPosition:p,textEmphasis:p,textEmphasisStyle:p,textEmphasisColor:p,boxDecorationBreak:p,maskImage:p,maskMode:p,maskRepeat:p,maskPosition:p,maskClip:p,maskOrigin:p,maskSize:p,maskComposite:p,mask:p,maskBorderSource:p,maskBorderMode:p,maskBorderSlice:p,maskBorderWidth:p,maskBorderOutset:p,maskBorderRepeat:p,maskBorder:p,maskType:p,textDecorationStyle:p,textDecorationSkip:p,textDecorationLine:p,textDecorationColor:p,userSelect:["Webkit","Moz","ms"],backdropFilter:p,fontKerning:p,scrollSnapType:d,scrollSnapPointsX:d,scrollSnapPointsY:d,scrollSnapDestination:d,scrollSnapCoordinate:d,clipPath:p,shapeImageThreshold:p,shapeImageMargin:p,shapeImageOutside:p,filter:p,hyphens:d,flowInto:d,flowFrom:d,breakBefore:d,breakAfter:d,breakInside:d,regionFragment:d,writingMode:d,textOrientation:p,tabSize:["Moz"],fontFeatureSettings:p,columnCount:p,columnFill:p,columnGap:p,columnRule:p,columnRuleColor:p,columnRuleStyle:p,columnRuleWidth:p,columns:p,columnSpan:p,columnWidth:p,wrapFlow:f,wrapThrough:f,wrapMargin:f,gridTemplateColumns:f,gridTemplateRows:f,gridTemplateAreas:f,gridTemplate:f,gridAutoColumns:f,gridAutoRows:f,gridAutoFlow:f,grid:f,gridRowStart:f,gridColumnStart:f,gridRowEnd:f,gridRow:f,gridColumn:f,gridColumnEnd:f,gridColumnGap:f,gridRowGap:f,gridArea:f,gridGap:f,textSizeAdjust:d}};var h=["-webkit-","-moz-",""],g={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};var b=r(0),y=r.n(b),x=["-webkit-",""];var v=["-webkit-",""];var k={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]};var O={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},w={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"};var S=["-webkit-","-moz-",""],P=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;var M=["-webkit-",""];var T=["-webkit-","-moz-",""],j={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},C={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};var W=r(3),z=r.n(W),E={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},_={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};var B=function(e){var t=e.prefixMap,r=e.plugins;return function e(n){for(var o in n){var i=n[o];if(u(i))n[o]=e(i);else if(Array.isArray(i)){for(var l=[],p=0,f=i.length;p<f;++p)c(l,a(r,o,i[p],n,t)||i[p]);l.length>0&&(n[o]=l)}else{var d=a(r,o,i,n,t);d&&(n[o]=d),n=s(t,o,n)}}return n}}({prefixMap:m.prefixMap,plugins:[function(e,t){if("string"==typeof t&&"text"===t)return["-webkit-text","text"]},function(e,t){if("string"==typeof t&&!y()(t)&&t.indexOf("cross-fade(")>-1)return x.map(function(e){return t.replace(/cross-fade\(/g,e+"cross-fade(")})},function(e,t){if("cursor"===e&&g.hasOwnProperty(t))return h.map(function(e){return e+t})},function(e,t){if("string"==typeof t&&!y()(t)&&t.indexOf("filter(")>-1)return v.map(function(e){return t.replace(/filter\(/g,e+"filter(")})},function(e,t,r){"flexDirection"===e&&"string"==typeof t&&(t.indexOf("column")>-1?r.WebkitBoxOrient="vertical":r.WebkitBoxOrient="horizontal",t.indexOf("reverse")>-1?r.WebkitBoxDirection="reverse":r.WebkitBoxDirection="normal"),w.hasOwnProperty(e)&&(r[w[e]]=O[t]||t)},function(e,t){if("string"==typeof t&&!y()(t)&&P.test(t))return S.map(function(e){return t.replace(P,function(t){return e+t})})},function(e,t){if("string"==typeof t&&!y()(t)&&t.indexOf("image-set(")>-1)return M.map(function(e){return t.replace(/image-set\(/g,e+"image-set(")})},function(e,t){if("position"===e&&"sticky"===t)return["-webkit-sticky","sticky"]},function(e,t){if(j.hasOwnProperty(e)&&C.hasOwnProperty(t))return T.map(function(e){return e+t})},function(e,t,r,n){if("string"==typeof t&&E.hasOwnProperty(e)){var o=function(e,t){if(y()(e))return e;for(var r=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g),n=0,o=r.length;n<o;++n){var i=r[n],s=[i];for(var a in t){var l=z()(a);if(i.indexOf(l)>-1&&"order"!==l)for(var c=t[a],u=0,p=c.length;u<p;++u)s.unshift(i.replace(l,_[c[u]]+l))}r[n]=s.join(",")}return r.join(",")}(t,n),s=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-moz-|-ms-/.test(e)}).join(",");if(e.indexOf("Webkit")>-1)return s;var a=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-webkit-|-ms-/.test(e)}).join(",");return e.indexOf("Moz")>-1?a:(r["Webkit"+i(e)]=s,r["Moz"+i(e)]=a,o)}},function(e,t){if("display"===e&&k.hasOwnProperty(t))return k[t]}]});let R={backgroundColor:"rgba(255, 255, 255, .8)",color:"#000"},A={backgroundColor:"rgba(0, 0, 0, 1)",color:"#FFF"},D={defaultStyle:{boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.5)",borderRadius:"50%",size:"6vw",minWidth:"80px",minHeight:"80px",padding:"5px",position:"fixed",right:"5vw",visibility:"visible",textTransform:"uppercase",cursor:"pointer",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, .8)",color:"#000"},delay:15,placement:"bottom",scrollOffset:20,size:"80px",text:"top"};function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){I(e,t,r[t])})}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class U extends n.Component{constructor(...e){super(...e),this.state={listenerOn:!1,show:!1},this.checkProps=(()=>{const{defaultStyle:e}=this.props;let t=new Set([...Object.keys(D)],[...Object.keys(e)]),r=[!0,[]];(()=>{for(let e in this.props)t.has(e)||(r=[r[0],r[1].concat(e)])})(),r[1].forEach(e=>{o(!e,`This component does not support the prop: ${e}`)})}),this.createStyle=(()=>{this.checkProps();const{children:e,defaultStyle:t,placement:r,size:n,styles:o}=this.props;if(e){const{position:e,right:n}=t;return{height:"auto",width:"auto",[r]:"2vh",position:e,right:n,display:this.state.show?"flex":"none"}}for(let e in o)void 0!==t[e]&&(t[e]=o[e]);return _setScrollerDefault(t),Object.assign({},F({},B(t)),{height:n,width:n,[r]:"2vh",display:this.state.show?"flex":"none"})}),this.handleMouseOut=(e=>{const{backgroundColor:t,color:r}=R;e.target.style.backgroundColor=t,e.target.style.color=r}),this.handleMouseOver=(e=>{const{scrollerHover:t=A}=this.props,{backgroundColor:r,color:n}=t;e.target.style.backgroundColor=r,e.target.style.color=n}),this.handleScrollEvent=(()=>{const{scrollOffset:e}=this.props,t=document.documentElement;(window.pageYOffset||t.scrollTop)-(t.clientTop||0)>e?this.reconcileScroll(!0):this.reconcileScroll(!1)}),this.reconcileScroll=(e=>{this.setState({show:e})}),this.scrollUp=(()=>{const{delay:e}=this.props,t=document.documentElement;let r=(window.pageYOffset||t.scrollTop)-(t.clientTop||0);r>0&&(window.scrollTo(0,r-15),setTimeout(this.scrollUp,e))}),this.componentDidMount=(()=>{document.addEventListener("scroll",this.handleScrollEvent)}),this.componentWillUnmount=(()=>{document.removeEventListener("scroll",this.handleScrollEvent)})}render(){return this.props.children?n.createElement("div",{style:this.createStyle(),onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,className:"move-top",onClick:this.scrollUp},this.props.children):n.createElement("button",{style:this.createStyle(),onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,className:"move-top",onClick:this.scrollUp},this.props.text)}}U.defaultProps=F({},D);var L=U;r.d(t,"ScrollUp",function(){return L})}]));