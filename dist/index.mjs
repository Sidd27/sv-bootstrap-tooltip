function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function s(e,t,n,r,o,i,s){const c=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,i);if(c){const o=a(t,n,r,s);e.p(o,c)}}function c(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function d(){return l("")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e){return Array.from(e.childNodes)}function g(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const i=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||i.push(e.name)}for(let e=0;e<i.length;e++)o.removeAttribute(i[e]);return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function v(e){return function(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return l(t)}(e," ")}let b;function y(e){b=e}function x(){if(!b)throw new Error("Function called outside component initialization");return b}const w=[],O=[],j=[],E=[],$=Promise.resolve();let D=!1;function M(){D||(D=!0,$.then(B))}function k(){return M(),$}function L(e){j.push(e)}let A=!1;const P=new Set;function B(){if(!A){A=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];y(t),_(t.$$)}for(w.length=0;O.length;)O.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];P.has(t)||(P.add(t),t())}j.length=0}while(w.length);for(;E.length;)E.pop()();D=!1,A=!1,P.clear()}}function _(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const W=new Set;let T;function C(e,t){e&&e.i&&(W.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),T.c.push(()=>{W.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function N(i,a,s,c,f,p,l=[-1]){const d=b;y(i);const m=a.props||{},g=i.$$={fragment:null,ctx:null,props:p,update:e,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l};let v=!1;if(g.ctx=s?s(i,m,(e,t,...n)=>{const r=n.length?n[0]:t;return g.ctx&&f(g.ctx[e],g.ctx[e]=r)&&(g.bound[e]&&g.bound[e](r),v&&function(e,t){-1===e.$$.dirty[0]&&(w.push(e),M(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(i,e)),t}):[],g.update(),v=!0,r(g.before_update),g.fragment=!!c&&c(g.ctx),a.target){if(a.hydrate){const e=h(a.target);g.fragment&&g.fragment.l(e),e.forEach(u)}else g.fragment&&g.fragment.c();a.intro&&C(i.$$.fragment),function(e,n,i){const{fragment:a,on_mount:s,on_destroy:c,after_update:f}=e.$$;a&&a.m(n,i),L(()=>{const n=s.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]}),f.forEach(L)}(i,a.target,a.anchor),B()}y(d)}function S(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function q(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function R(e){var t=q(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(e){return e instanceof q(e).Element||e instanceof Element}function I(e){return e instanceof q(e).HTMLElement||e instanceof HTMLElement}function z(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){return(V(e)?e.ownerDocument:e.document).documentElement}function F(e){return S(U(e)).left+R(e).scrollLeft}function X(e){return q(e).getComputedStyle(e)}function Y(e){var t=X(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function G(e,t,n){void 0===n&&(n=!1);var r,o=U(t),i=S(e),a=I(t),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!n)&&(("body"!==z(t)||Y(o))&&(s=(r=t)!==q(r)&&I(r)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(r):R(r)),I(t)?((c=S(t)).x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=F(o))),{x:i.left+s.scrollLeft-c.x,y:i.top+s.scrollTop-c.y,width:i.width,height:i.height}}function J(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function K(e){return"html"===z(e)?e:e.assignedSlot||e.parentNode||e.host||U(e)}function Q(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(z(t))>=0?t.ownerDocument.body:I(t)&&Y(t)?t:e(K(t))}(e),r="body"===z(n),o=q(n),i=r?[o].concat(o.visualViewport||[],Y(n)?n:[]):n,a=t.concat(i);return r?a:a.concat(Q(K(i)))}function Z(e){return["table","td","th"].indexOf(z(e))>=0}function ee(e){return I(e)&&"fixed"!==X(e).position?e.offsetParent:null}function te(e){for(var t=q(e),n=ee(e);n&&Z(n)&&"static"===X(n).position;)n=ee(n);return n&&"body"===z(n)&&"static"===X(n).position?t:n||function(e){for(var t=K(e);I(t)&&["html","body"].indexOf(z(t))<0;){var n=X(t);if("none"!==n.transform||"none"!==n.perspective||"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var ne="top",re="bottom",oe="right",ie="left",ae=[ne,re,oe,ie],se=ae.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),ce=[].concat(ae,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),fe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ue(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}function pe(e){return e.split("-")[0]}var le={placement:"bottom",modifiers:[],strategy:"absolute"};function de(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function me(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?le:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},le),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,u={state:s,setOptions:function(n){p(),s.options=Object.assign(Object.assign(Object.assign({},i),s.options),n),s.scrollParents={reference:V(e)?Q(e):e.contextElement?Q(e.contextElement):[],popper:Q(t)};var o,a,f=function(e){var t=ue(e);return fe.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(r,s.options.modifiers),a=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=f.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,n=e.popper;if(de(t,n)){s.rects={reference:G(t,te(n),"fixed"===s.options.strategy),popper:J(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:p,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),f=!0}};if(!de(e,t))return u;function p(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var he={passive:!0};function ge(e){return e.split("-")[1]}function ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function be(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?pe(o):null,a=o?ge(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case ne:t={x:s,y:n.y-r.height};break;case re:t={x:s,y:n.y+n.height};break;case oe:t={x:n.x+n.width,y:c};break;case ie:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?ve(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case"start":t[f]=Math.floor(t[f])-Math.floor(n[u]/2-r[u]/2);break;case"end":t[f]=Math.floor(t[f])+Math.ceil(n[u]/2-r[u]/2)}}return t}var ye={top:"auto",right:"auto",bottom:"auto",left:"auto"};function xe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,f=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(i),u=f.x,p=f.y,l=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),m=ie,h=ne,g=window;if(c){var v=te(n);v===q(n)&&(v=U(n)),o===ne&&(h=re,p-=v.clientHeight-r.height,p*=s?1:-1),o===ie&&(m=oe,u-=v.clientWidth-r.width,u*=s?1:-1)}var b,y=Object.assign({position:a},c&&ye);return s?Object.assign(Object.assign({},y),{},((b={})[h]=d?"0":"",b[m]=l?"0":"",b.transform=(g.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",b)):Object.assign(Object.assign({},y),{},((t={})[h]=d?p+"px":"",t[m]=l?u+"px":"",t.transform="",t))}var we={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return we[e]}))}var je={start:"end",end:"start"};function Ee(e){return e.replace(/start|end/g,(function(e){return je[e]}))}function $e(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function De(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Me(e,t){return"viewport"===t?De(function(e){var t=q(e),n=U(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+F(e),y:s}}(e)):I(t)?function(e){var t=S(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):De(function(e){var t=U(e),n=R(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+F(e),s=-n.scrollTop;return"rtl"===X(r||t).direction&&(a+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:a,y:s}}(U(e)))}function ke(e,t,n){var r="clippingParents"===t?function(e){var t=Q(e),n=["absolute","fixed"].indexOf(X(e).position)>=0&&I(e)?te(e):e;return V(n)?t.filter((function(e){return V(e)&&$e(e,n)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Me(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),Me(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Le(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function Ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?"viewport":s,f=n.elementContext,u=void 0===f?"popper":f,p=n.altBoundary,l=void 0!==p&&p,d=n.padding,m=void 0===d?0:d,h=Le("number"!=typeof m?m:Ae(m,ae)),g="popper"===u?"reference":"popper",v=e.elements.reference,b=e.rects.popper,y=e.elements[l?g:u],x=ke(V(y)?y:y.contextElement||U(e.elements.popper),a,c),w=S(v),O=be({reference:w,element:b,strategy:"absolute",placement:o}),j=De(Object.assign(Object.assign({},b),O)),E="popper"===u?j:w,$={top:x.top-E.top+h.top,bottom:E.bottom-x.bottom+h.bottom,left:x.left-E.left+h.left,right:E.right-x.right+h.right},D=e.modifiersData.offset;if("popper"===u&&D){var M=D[o];Object.keys($).forEach((function(e){var t=[oe,re].indexOf(e)>=0?1:-1,n=[ne,re].indexOf(e)>=0?"y":"x";$[e]+=M[n]*t}))}return $}function Be(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?ce:c,u=ge(r),p=(u?s?se:se.filter((function(e){return ge(e)===u})):ae).filter((function(e){return f.indexOf(e)>=0})).reduce((function(t,n){return t[n]=Pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[pe(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function _e(e,t,n){return Math.max(e,Math.min(t,n))}function We(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Te(e){return[ne,oe,re,ie].some((function(t){return e[t]>=0}))}var Ce=me({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=q(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,he)})),s&&c.addEventListener("resize",n.update,he),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),s&&c.removeEventListener("resize",n.update,he)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=be({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:pe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),xe(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),xe(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];I(o)&&z(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});I(r)&&z(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=ce.reduce((function(e,n){return e[n]=function(e,t,n){var r=pe(e),o=[ie,ne].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ie,oe].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,g=t.options.placement,v=pe(g),b=c||(v===g||!m?[Oe(g)]:function(e){if("auto"===pe(e))return[];var t=Oe(e);return[Ee(e),t,Ee(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat("auto"===pe(n)?Be(t,{placement:n,boundary:u,rootBoundary:p,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,E=y[0],$=0;$<y.length;$++){var D=y[$],M=pe(D),k="start"===ge(D),L=[ne,re].indexOf(M)>=0,A=L?"width":"height",P=Pe(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:l,padding:f}),B=L?k?oe:ie:k?re:ne;x[A]>w[A]&&(B=Oe(B));var _=Oe(B),W=[];if(i&&W.push(P[M]<=0),s&&W.push(P[B]<=0,P[_]<=0),W.every((function(e){return e}))){E=D,j=!1;break}O.set(D,W)}if(j)for(var T=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},C=m?3:1;C>0;C--){if("break"===T(C))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,g=Pe(t,{boundary:c,rootBoundary:f,padding:p,altBoundary:u}),v=pe(t.placement),b=ge(t.placement),y=!b,x=ve(v),w="x"===x?"y":"x",O=t.modifiersData.popperOffsets,j=t.rects.reference,E=t.rects.popper,$="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,D={x:0,y:0};if(O){if(i){var M="y"===x?ne:ie,k="y"===x?re:oe,L="y"===x?"height":"width",A=O[x],P=O[x]+g[M],B=O[x]-g[k],_=d?-E[L]/2:0,W="start"===b?j[L]:E[L],T="start"===b?-E[L]:-j[L],C=t.elements.arrow,H=d&&C?J(C):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},S=N[M],q=N[k],R=_e(0,j[L],H[L]),V=y?j[L]/2-_-R-S-$:W-R-S-$,I=y?-j[L]/2+_+R+q+$:T+R+q+$,z=t.elements.arrow&&te(t.elements.arrow),U=z?"y"===x?z.clientTop||0:z.clientLeft||0:0,F=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,X=O[x]+V-F-U,Y=O[x]+I-F,G=_e(d?Math.min(P,X):P,A,d?Math.max(B,Y):B);O[x]=G,D[x]=G-A}if(s){var K="x"===x?ne:ie,Q="x"===x?re:oe,Z=O[w],ee=_e(Z+g[K],Z,Z-g[Q]);O[w]=ee,D[w]=ee-Z}t.modifiersData[r]=D}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=pe(n.placement),s=ve(a),c=[ie,oe].indexOf(a)>=0?"height":"width";if(o&&i){var f=n.modifiersData[r+"#persistent"].padding,u=J(o),p="y"===s?ne:ie,l="y"===s?re:oe,d=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],m=i[s]-n.rects.reference[s],h=te(o),g=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,v=d/2-m/2,b=f[p],y=g-u[c]-f[l],x=g/2-u[c]/2+v,w=_e(b,x,y),O=s;n.modifiersData[r]=((t={})[O]=w,t.centerOffset=w-x,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&$e(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:Le("number"!=typeof s?s:Ae(s,ae))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pe(t,{elementContext:"reference"}),s=Pe(t,{altBoundary:!0}),c=We(a,r),f=We(s,o,i),u=Te(c),p=Te(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]});function He(e){let t,n,r,o,i,d;const b=e[11].default,y=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(b,e,e[10],null);return{c(){t=p("div"),n=p("div"),r=l(" "),o=p("div"),y&&y.c(),this.h()},l(e){t=g(e,"DIV",{class:!0,role:!0});var i=h(t);n=g(i,"DIV",{class:!0}),h(n).forEach(u),r=v(i),o=g(i,"DIV",{class:!0});var a=h(o);y&&y.l(a),a.forEach(u),i.forEach(u),this.h()},h(){m(n,"class","arrow"),m(o,"class","tooltip-inner"),m(t,"class",i="tooltip fade bs-tooltip-"+e[1]+" show"),m(t,"role","tooltip")},m(i,a){f(i,t,a),c(t,n),e[12](n),c(t,r),c(t,o),y&&y.m(o,null),e[13](t),d=!0},p(e,n){y&&y.p&&1024&n[0]&&s(y,b,e,e[10],n,null,null),(!d||2&n[0]&&i!==(i="tooltip fade bs-tooltip-"+e[1]+" show"))&&m(t,"class",i)},i(e){d||(C(y,e),d=!0)},o(e){H(y,e),d=!1},d(n){n&&u(t),e[12](null),y&&y.d(n),e[13](null)}}}function Ne(e){let t,n,o=e[0]&&He(e);return{c(){o&&o.c(),t=d()},l(e){o&&o.l(e),t=d()},m(e,r){o&&o.m(e,r),f(e,t,r),n=!0},p(e,n){e[0]?o?(o.p(e,n),1&n[0]&&C(o,1)):(o=He(e),o.c(),C(o,1),o.m(t.parentNode,t)):o&&(T={r:0,c:[],p:T},H(o,1,1,()=>{o=null}),T.r||r(T.c),T=T.p)},i(e){n||(C(o),n=!0)},o(e){H(o),n=!1},d(e){o&&o.d(e),e&&u(t)}}}function Se(e,...t){return e.addEventListener(...t),{remove:()=>e.removeEventListener(...t)}}function qe(e,t,n){const r=()=>{};let o,i,a,s,c,f,{open:u=!1}=t,{triggerElement:p}=t,{flip:l=!0}=t,{placement:d="top"}=t,{trigger:m="hover|focus"}=t,{offset:h=[0,4]}=t,{onOpened:g=r}=t,{onClosed:v=r}=t,b=[];function y(e){b.push(e)}function w(){!async function(){await k(),a=Ce(p,o,{placement:d,modifiers:[{name:"arrow",options:{element:i}},{name:"flip",enabled:l},{name:"offset",options:{offset:h}},{name:"preventOverflow",options:{altBoundary:!0}}]})}(),g()}function j(){s&&function(){const e=Se(p,"mouseenter",e=>{n(0,u=!0)}),t=Se(p,"mouseleave",e=>{n(0,u=!1)});y(e),y(t)}(),f&&y(Se(p,"click",e=>{n(0,u=!u)})),c&&function(){const e=Se(p,"focus",e=>{n(0,u=!0)}),t=Se(p,"blur",e=>{n(0,u=!1)});y(e),y(t)}()}function E(){a&&(a.destroy(),a=null)}var $;$=async()=>{!function(){const e=m.split("|");s=e.includes("hover"),c=e.includes("focus"),f=e.includes("click")}(),await k(),j()},x().$$.on_mount.push($),function(e){x().$$.on_destroy.push(e)}(()=>{b.forEach(e=>e.remove()),E()});let{$$slots:D={},$$scope:M}=t;return e.$set=e=>{"open"in e&&n(0,u=e.open),"triggerElement"in e&&n(4,p=e.triggerElement),"flip"in e&&n(5,l=e.flip),"placement"in e&&n(1,d=e.placement),"trigger"in e&&n(6,m=e.trigger),"offset"in e&&n(7,h=e.offset),"onOpened"in e&&n(8,g=e.onOpened),"onClosed"in e&&n(9,v=e.onClosed),"$$scope"in e&&n(10,M=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty[0]&&(u?w():(E(),v()))},[u,d,o,i,p,l,m,h,g,v,M,D,function(e){O[e?"unshift":"push"](()=>{i=e,n(3,i)})},function(e){O[e?"unshift":"push"](()=>{o=e,n(2,o)})}]}export default class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}{constructor(e){super(),N(this,e,qe,Ne,i,{open:0,triggerElement:4,flip:5,placement:1,trigger:6,offset:7,onOpened:8,onClosed:9},[-1,-1])}}
//# sourceMappingURL=index.mjs.map