(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7154],{55754:function(e,t,i){i(4268),e.exports=i(67626).Number.isFinite},4268:function(e,t,i){var r=i(62805),n=i(73951).isFinite;r(r.S,"Number",{isFinite:function(e){return"number"==typeof e&&n(e)}})},44934:function(e,t,i){"use strict";var r=i(35178).default;i(27593).default;var n=i(38388).default,o=i(96365).default,a=i(75007).default,l=i(71727).default,u=i(25327),s=i(25137),c=i(21915),d=i(65050),f=i(97358),g=i(28339),h=i(27328);i(20281);var m=["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"],p=["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],v=["config"];u(t,"__esModule",{value:!0}),u(t,"default",{enumerable:!0,get:function(){return P}});var y=i(60005),w=i(39805)._(i(44194)),b=y._(i(36430)),S=i(22111),z=i(81421),C=i(90498);i(70923);var E=y._(i(35148)),_={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/compass-design/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function x(e){return void 0!==e.default}function R(e){return void 0===e?e:"number"==typeof e?f(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?c(e,10):NaN}function I(e,t,i,r,n,o,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():g.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===i&&o(!0),null==r?void 0:r.current){var t=new Event("load");u(t,"target",{writable:!1,value:e});var l=!1,s=!1;r.current(a(a({},t),{},{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return s},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){s=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function L(e){var t=o(w.version.split("."),2),i=t[0],r=t[1],n=c(i,10),a=c(r,10);return n>18||18===n&&a>=3?{fetchPriority:e}:{fetchpriority:e}}new s;var j=(0,w.forwardRef)(function(e,t){var i=e.imgAttributes,r=e.heightInt,o=e.widthInt,l=(e.qualityInt,e.className),u=e.imgStyle,s=e.blurStyle,c=e.isLazy,d=e.fetchPriority,f=e.fill,g=e.placeholder,h=e.loading,p=e.srcString,v=(e.config,e.unoptimized),y=(e.loader,e.onLoadRef),b=e.onLoadingCompleteRef,S=e.setBlurComplete,z=e.setShowAltText,C=(e.onLoad,e.onError),E=n(e,m);return h=c?"lazy":h,w.default.createElement("img",a(a(a(a({},E),L(d)),{},{loading:h,width:o,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,style:a(a({},u),s)},i),{},{ref:(0,w.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&I(e,p,g,y,b,S,v))},[p,g,y,b,S,C,v,t]),onLoad:function(e){I(e.currentTarget,p,g,y,b,S,v)},onError:function(e){z(!0),"blur"===g&&S(!0),C&&C(e)}}))}),P=(0,w.forwardRef)(function(e,t){var i,u,s,f=e.src,g=e.sizes,m=e.unoptimized,y=void 0!==m&&m,I=e.priority,P=void 0!==I&&I,k=e.loading,A=e.className,M=e.quality,N=e.width,F=e.height,q=e.fill,B=e.style,D=e.onLoad,W=e.onLoadingComplete,T=e.placeholder,U=void 0===T?"empty":T,G=e.blurDataURL,H=e.fetchPriority,V=e.layout,O=e.objectFit,Y=e.objectPosition,$=(e.lazyBoundary,e.lazyRoot,n(e,p)),J=(0,w.useContext)(C.ImageConfigContext),K=(0,w.useMemo)(function(){var e=_||J||z.imageConfigDefault,t=[].concat(l(e.deviceSizes),l(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a(a({},e),{},{allSizes:t,deviceSizes:i})},[J]),Q=$.loader||E.default;delete $.loader;var X="__next_img_default"in Q;if(X){if("custom"===K.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var Z=Q;Q=function(e){return e.config,Z(n(e,v))}}if(V){"fill"===V&&(q=!0);var ee={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[V];ee&&(B=a(a({},B),ee));var et={responsive:"100vw",fill:"100vw"}[V];et&&!g&&(g=et)}var ei="",er=R(N),en=R(F);if("object"==typeof(i=f)&&(x(i)||void 0!==i.src)){var eo=x(f)?f.default:f;if(!eo.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+h(eo));if(!eo.height||!eo.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+h(eo));if(u=eo.blurWidth,s=eo.blurHeight,G=G||eo.blurDataURL,ei=eo.src,!q){if(er||en){if(er&&!en){var ea=er/eo.width;en=Math.round(eo.height*ea)}else if(!er&&en){var el=en/eo.height;er=Math.round(eo.width*el)}}else er=eo.width,en=eo.height}}var eu=!P&&("lazy"===k||void 0===k);(!(f="string"==typeof f?f:ei)||f.startsWith("data:")||f.startsWith("blob:"))&&(y=!0,eu=!1),K.unoptimized&&(y=!0),X&&f.endsWith(".svg")&&!K.dangerouslyAllowSVG&&(y=!0),P&&(H="high");var es=o((0,w.useState)(!1),2),ec=es[0],ed=es[1],ef=o((0,w.useState)(!1),2),eg=ef[0],eh=ef[1],em=R(M),ep=r(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:Y}:{},eg?{}:{color:"transparent"},B),ev="blur"===U&&G&&!ec?{backgroundSize:ep.objectFit||"cover",backgroundPosition:ep.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,S.getImageBlurSvg)({widthInt:er,heightInt:en,blurWidth:u,blurHeight:s,blurDataURL:G,objectFit:ep.objectFit})+'")'}:{},ey=function(e){var t=e.config,i=e.src,r=e.unoptimized,n=e.width,o=e.quality,a=e.sizes,u=e.loader;if(r)return{src:i,srcSet:void 0,sizes:void 0};var s=function(e,t,i){var r=e.deviceSizes,n=e.allSizes;if(i){for(var o,a=/(^|\s)(1?\d?\d)vw/g,u=[];o=a.exec(i);o)u.push(c(o[2]));if(u.length){var s=.01*Math.min.apply(Math,u);return{widths:n.filter(function(e){return e>=r[0]*s}),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:l(new d([t,2*t].map(function(e){return n.find(function(t){return t>=e})||n[n.length-1]}))),kind:"x"}}(t,n,a),f=s.widths,g=s.kind,h=f.length-1;return{sizes:a||"w"!==g?a:"100vw",srcSet:f.map(function(e,r){return u({config:t,src:i,quality:o,width:e})+" "+("w"===g?e:r+1)+g}).join(", "),src:u({config:t,src:i,quality:o,width:f[h]})}}({config:K,src:f,unoptimized:y,width:er,quality:em,sizes:g,loader:Q}),ew=f,eb=(0,w.useRef)(D);(0,w.useEffect)(function(){eb.current=D},[D]);var eS=(0,w.useRef)(W);(0,w.useEffect)(function(){eS.current=W},[W]);var ez=a({isLazy:eu,imgAttributes:ey,heightInt:en,widthInt:er,qualityInt:em,className:A,imgStyle:ep,blurStyle:ev,loading:k,config:K,fetchPriority:H,fill:q,unoptimized:y,placeholder:U,loader:Q,srcString:ew,onLoadRef:eb,onLoadingCompleteRef:eS,setBlurComplete:ed,setShowAltText:eh},$);return w.default.createElement(w.default.Fragment,null,w.default.createElement(j,a(a({},ez),{},{ref:t})),P?w.default.createElement(b.default,null,w.default.createElement("link",a({key:"__nimg-"+ey.src+ey.srcSet+ey.sizes,rel:"preload",as:"image",href:ey.srcSet?void 0:ey.src,imageSrcSet:ey.srcSet,imageSizes:ey.sizes,crossOrigin:$.crossOrigin,referrerPolicy:$.referrerPolicy},L(H)))):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(u(t.default,"__esModule",{value:!0}),r(t.default,t),e.exports=t.default)},22111:function(e,t,i){"use strict";var r=i(25327);function n(e){var t=e.widthInt,i=e.heightInt,r=e.blurWidth,n=e.blurHeight,o=e.blurDataURL,a=e.objectFit,l=r||t,u=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&n?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}r(t,"__esModule",{value:!0}),r(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},35148:function(e,t,i){"use strict";var r=i(25327);function n(e){var t=e.config,i=e.src,r=e.width,n=e.quality;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}i(27328),r(t,"__esModule",{value:!0}),r(t,"default",{enumerable:!0,get:function(){return o}}),n.__next_img_default=!0;var o=n},37154:function(e,t,i){e.exports=i(44934)},97358:function(e,t,i){e.exports=i(55754)}}]);