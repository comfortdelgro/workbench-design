import{f as v,r as _e,j as U,s as Le,R as ie,a as J}from"./index-5e72961f.js";import{C as le,R as ce}from"./components-985c45bd.js";import{u as oe}from"./use-dom-ref-efd20e6c.js";var x={},w={};(function(u){Object.defineProperty(u,"__esModule",{value:!0}),u.BLOCKS=void 0,function(d){d.DOCUMENT="document",d.PARAGRAPH="paragraph",d.HEADING_1="heading-1",d.HEADING_2="heading-2",d.HEADING_3="heading-3",d.HEADING_4="heading-4",d.HEADING_5="heading-5",d.HEADING_6="heading-6",d.OL_LIST="ordered-list",d.UL_LIST="unordered-list",d.LIST_ITEM="list-item",d.HR="hr",d.QUOTE="blockquote",d.EMBEDDED_ENTRY="embedded-entry-block",d.EMBEDDED_ASSET="embedded-asset-block",d.EMBEDDED_RESOURCE="embedded-resource-block",d.TABLE="table",d.TABLE_ROW="table-row",d.TABLE_CELL="table-cell",d.TABLE_HEADER_CELL="table-header-cell"}(u.BLOCKS||(u.BLOCKS={}))})(w);var Q={};(function(u){Object.defineProperty(u,"__esModule",{value:!0}),u.INLINES=void 0,function(d){d.HYPERLINK="hyperlink",d.ENTRY_HYPERLINK="entry-hyperlink",d.ASSET_HYPERLINK="asset-hyperlink",d.EMBEDDED_ENTRY="embedded-entry-inline"}(u.INLINES||(u.INLINES={}))})(Q);var W={};Object.defineProperty(W,"__esModule",{value:!0});var F;(function(u){u.BOLD="bold",u.ITALIC="italic",u.UNDERLINE="underline",u.CODE="code",u.SUPERSCRIPT="superscript",u.SUBSCRIPT="subscript"})(F||(F={}));W.default=F;var ee={};(function(u){var d=v&&v.__spreadArray||function(D,t,K){if(K||arguments.length===2)for(var y=0,c=t.length,I;y<c;y++)(I||!(y in t))&&(I||(I=Array.prototype.slice.call(t,0,y)),I[y]=t[y]);return D.concat(I||Array.prototype.slice.call(t))},P=v&&v.__importDefault||function(D){return D&&D.__esModule?D:{default:D}},_;Object.defineProperty(u,"__esModule",{value:!0}),u.V1_MARKS=u.V1_NODE_TYPES=u.TEXT_CONTAINERS=u.HEADINGS=u.CONTAINERS=u.VOID_BLOCKS=u.TABLE_BLOCKS=u.LIST_ITEM_BLOCKS=u.TOP_LEVEL_BLOCKS=void 0;var E=w,S=Q,B=P(W);u.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE,E.BLOCKS.TABLE],u.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],u.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],u.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],u.CONTAINERS=(_={},_[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],_[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],_[E.BLOCKS.LIST_ITEM]=u.LIST_ITEM_BLOCKS,_[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],_[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],_[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],_[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],_[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],_),u.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],u.TEXT_CONTAINERS=d([E.BLOCKS.PARAGRAPH],u.HEADINGS,!0),u.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,S.INLINES.HYPERLINK,S.INLINES.ENTRY_HYPERLINK,S.INLINES.ASSET_HYPERLINK,S.INLINES.EMBEDDED_ENTRY,"text"],u.V1_MARKS=[B.default.BOLD,B.default.CODE,B.default.ITALIC,B.default.UNDERLINE]})(ee);var ne={};Object.defineProperty(ne,"__esModule",{value:!0});var te={};Object.defineProperty(te,"__esModule",{value:!0});var z={};Object.defineProperty(z,"__esModule",{value:!0});var Z=w,de={nodeType:Z.BLOCKS.DOCUMENT,data:{},content:[{nodeType:Z.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};z.default=de;var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.isText=Y.isBlock=Y.isInline=void 0;var Se=w,Oe=Q;function re(u,d){for(var P=0,_=Object.keys(u);P<_.length;P++){var E=_[P];if(d===u[E])return!0}return!1}function Te(u){return re(Oe.INLINES,u.nodeType)}Y.isInline=Te;function fe(u){return re(Se.BLOCKS,u.nodeType)}Y.isBlock=fe;function Be(u){return u.nodeType==="text"}Y.isText=Be;(function(u){var d=v&&v.__createBinding||(Object.create?function(c,I,H,b){b===void 0&&(b=H);var s=Object.getOwnPropertyDescriptor(I,H);(!s||("get"in s?!I.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return I[H]}}),Object.defineProperty(c,b,s)}:function(c,I,H,b){b===void 0&&(b=H),c[b]=I[H]}),P=v&&v.__setModuleDefault||(Object.create?function(c,I){Object.defineProperty(c,"default",{enumerable:!0,value:I})}:function(c,I){c.default=I}),_=v&&v.__exportStar||function(c,I){for(var H in c)H!=="default"&&!Object.prototype.hasOwnProperty.call(I,H)&&d(I,c,H)},E=v&&v.__importStar||function(c){if(c&&c.__esModule)return c;var I={};if(c!=null)for(var H in c)H!=="default"&&Object.prototype.hasOwnProperty.call(c,H)&&d(I,c,H);return P(I,c),I},S=v&&v.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(u,"__esModule",{value:!0}),u.helpers=u.EMPTY_DOCUMENT=u.MARKS=u.INLINES=u.BLOCKS=void 0;var B=w;Object.defineProperty(u,"BLOCKS",{enumerable:!0,get:function(){return B.BLOCKS}});var D=Q;Object.defineProperty(u,"INLINES",{enumerable:!0,get:function(){return D.INLINES}});var t=W;Object.defineProperty(u,"MARKS",{enumerable:!0,get:function(){return S(t).default}}),_(ee,u),_(ne,u),_(te,u);var K=z;Object.defineProperty(u,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return S(K).default}});var y=E(Y);u.helpers=y})(x);var Ee={};(function(u){Object.defineProperty(u,"__esModule",{value:!0});/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var d=function(){return d=Object.assign||function(e){for(var r,i=1,o=arguments.length;i<o;i++){r=arguments[i];for(var O in r)Object.prototype.hasOwnProperty.call(r,O)&&(e[O]=r[O])}return e},d.apply(this,arguments)};/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var P=/["'&<>]/,_=E;function E(n){var e=""+n,r=P.exec(e);if(!r)return e;var i,o="",O=0,l=0;for(O=r.index;O<e.length;O++){switch(e.charCodeAt(O)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 39:i="&#39;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}l!==O&&(o+=e.substring(l,O)),l=O+1,o+=i}return l!==O?o+e.substring(l,O):o}var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof v<"u"?v:typeof self<"u"?self:{};function B(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function D(n,e){return e={exports:{}},n(e,e.exports),e.exports}var t=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.BLOCKS=void 0,function(r){r.DOCUMENT="document",r.PARAGRAPH="paragraph",r.HEADING_1="heading-1",r.HEADING_2="heading-2",r.HEADING_3="heading-3",r.HEADING_4="heading-4",r.HEADING_5="heading-5",r.HEADING_6="heading-6",r.OL_LIST="ordered-list",r.UL_LIST="unordered-list",r.LIST_ITEM="list-item",r.HR="hr",r.QUOTE="blockquote",r.EMBEDDED_ENTRY="embedded-entry-block",r.EMBEDDED_ASSET="embedded-asset-block",r.EMBEDDED_RESOURCE="embedded-resource-block",r.TABLE="table",r.TABLE_ROW="table-row",r.TABLE_CELL="table-cell",r.TABLE_HEADER_CELL="table-header-cell"}(e.BLOCKS||(e.BLOCKS={}))});B(t),t.BLOCKS;var K=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.INLINES=void 0,function(r){r.HYPERLINK="hyperlink",r.ENTRY_HYPERLINK="entry-hyperlink",r.ASSET_HYPERLINK="asset-hyperlink",r.EMBEDDED_ENTRY="embedded-entry-inline"}(e.INLINES||(e.INLINES={}))});B(K),K.INLINES;var y=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r;(function(i){i.BOLD="bold",i.ITALIC="italic",i.UNDERLINE="underline",i.CODE="code",i.SUPERSCRIPT="superscript",i.SUBSCRIPT="subscript"})(r||(r={})),e.default=r});B(y);var c=D(function(n,e){var r=S&&S.__spreadArray||function(l,R,a){if(a||arguments.length===2)for(var L=0,T=R.length,C;L<T;L++)(C||!(L in R))&&(C||(C=Array.prototype.slice.call(R,0,L)),C[L]=R[L]);return l.concat(C||Array.prototype.slice.call(R))},i=S&&S.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},o;Object.defineProperty(e,"__esModule",{value:!0}),e.V1_MARKS=e.V1_NODE_TYPES=e.TEXT_CONTAINERS=e.HEADINGS=e.CONTAINERS=e.VOID_BLOCKS=e.TABLE_BLOCKS=e.LIST_ITEM_BLOCKS=e.TOP_LEVEL_BLOCKS=void 0;var O=i(y);e.TOP_LEVEL_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE,t.BLOCKS.TABLE],e.LIST_ITEM_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.TABLE_BLOCKS=[t.BLOCKS.TABLE,t.BLOCKS.TABLE_ROW,t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],e.VOID_BLOCKS=[t.BLOCKS.HR,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.CONTAINERS=(o={},o[t.BLOCKS.OL_LIST]=[t.BLOCKS.LIST_ITEM],o[t.BLOCKS.UL_LIST]=[t.BLOCKS.LIST_ITEM],o[t.BLOCKS.LIST_ITEM]=e.LIST_ITEM_BLOCKS,o[t.BLOCKS.QUOTE]=[t.BLOCKS.PARAGRAPH],o[t.BLOCKS.TABLE]=[t.BLOCKS.TABLE_ROW],o[t.BLOCKS.TABLE_ROW]=[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],o[t.BLOCKS.TABLE_CELL]=[t.BLOCKS.PARAGRAPH],o[t.BLOCKS.TABLE_HEADER_CELL]=[t.BLOCKS.PARAGRAPH],o),e.HEADINGS=[t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6],e.TEXT_CONTAINERS=r([t.BLOCKS.PARAGRAPH],e.HEADINGS,!0),e.V1_NODE_TYPES=[t.BLOCKS.DOCUMENT,t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.LIST_ITEM,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,K.INLINES.HYPERLINK,K.INLINES.ENTRY_HYPERLINK,K.INLINES.ASSET_HYPERLINK,K.INLINES.EMBEDDED_ENTRY,"text"],e.V1_MARKS=[O.default.BOLD,O.default.CODE,O.default.ITALIC,O.default.UNDERLINE]});B(c),c.V1_MARKS,c.V1_NODE_TYPES,c.TEXT_CONTAINERS,c.HEADINGS,c.CONTAINERS,c.VOID_BLOCKS,c.TABLE_BLOCKS,c.LIST_ITEM_BLOCKS,c.TOP_LEVEL_BLOCKS;var I=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0})});B(I);var H=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0})});B(H);var b=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r={nodeType:t.BLOCKS.DOCUMENT,data:{},content:[{nodeType:t.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};e.default=r});B(b);var s=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isText=e.isBlock=e.isInline=void 0;function r(l,R){for(var a=0,L=Object.keys(l);a<L.length;a++){var T=L[a];if(R===l[T])return!0}return!1}function i(l){return r(K.INLINES,l.nodeType)}e.isInline=i;function o(l){return r(t.BLOCKS,l.nodeType)}e.isBlock=o;function O(l){return l.nodeType==="text"}e.isText=O});B(s),s.isText,s.isBlock,s.isInline;var G=D(function(n,e){var r=S&&S.__createBinding||(Object.create?function(a,L,T,C){C===void 0&&(C=T);var p=Object.getOwnPropertyDescriptor(L,T);(!p||("get"in p?!L.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return L[T]}}),Object.defineProperty(a,C,p)}:function(a,L,T,C){C===void 0&&(C=T),a[C]=L[T]}),i=S&&S.__setModuleDefault||(Object.create?function(a,L){Object.defineProperty(a,"default",{enumerable:!0,value:L})}:function(a,L){a.default=L}),o=S&&S.__exportStar||function(a,L){for(var T in a)T!=="default"&&!Object.prototype.hasOwnProperty.call(L,T)&&r(L,a,T)},O=S&&S.__importStar||function(a){if(a&&a.__esModule)return a;var L={};if(a!=null)for(var T in a)T!=="default"&&Object.prototype.hasOwnProperty.call(a,T)&&r(L,a,T);return i(L,a),L},l=S&&S.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.helpers=e.EMPTY_DOCUMENT=e.MARKS=e.INLINES=e.BLOCKS=void 0,Object.defineProperty(e,"BLOCKS",{enumerable:!0,get:function(){return t.BLOCKS}}),Object.defineProperty(e,"INLINES",{enumerable:!0,get:function(){return K.INLINES}}),Object.defineProperty(e,"MARKS",{enumerable:!0,get:function(){return l(y).default}}),o(c,e),o(I,e),o(H,e),Object.defineProperty(e,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(b).default}});var R=O(s);e.helpers=R});B(G);var q=G.helpers;G.EMPTY_DOCUMENT;var h=G.MARKS,M=G.INLINES,f=G.BLOCKS,N,m,V=function(n){return'"'.concat(n.replace(/"/g,"&quot;"),'"')},A=(N={},N[f.PARAGRAPH]=function(n,e){return"<p>".concat(e(n.content),"</p>")},N[f.HEADING_1]=function(n,e){return"<h1>".concat(e(n.content),"</h1>")},N[f.HEADING_2]=function(n,e){return"<h2>".concat(e(n.content),"</h2>")},N[f.HEADING_3]=function(n,e){return"<h3>".concat(e(n.content),"</h3>")},N[f.HEADING_4]=function(n,e){return"<h4>".concat(e(n.content),"</h4>")},N[f.HEADING_5]=function(n,e){return"<h5>".concat(e(n.content),"</h5>")},N[f.HEADING_6]=function(n,e){return"<h6>".concat(e(n.content),"</h6>")},N[f.EMBEDDED_ENTRY]=function(n,e){return"<div>".concat(e(n.content),"</div>")},N[f.UL_LIST]=function(n,e){return"<ul>".concat(e(n.content),"</ul>")},N[f.OL_LIST]=function(n,e){return"<ol>".concat(e(n.content),"</ol>")},N[f.LIST_ITEM]=function(n,e){return"<li>".concat(e(n.content),"</li>")},N[f.QUOTE]=function(n,e){return"<blockquote>".concat(e(n.content),"</blockquote>")},N[f.HR]=function(){return"<hr/>"},N[f.TABLE]=function(n,e){return"<table>".concat(e(n.content),"</table>")},N[f.TABLE_ROW]=function(n,e){return"<tr>".concat(e(n.content),"</tr>")},N[f.TABLE_HEADER_CELL]=function(n,e){return"<th>".concat(e(n.content),"</th>")},N[f.TABLE_CELL]=function(n,e){return"<td>".concat(e(n.content),"</td>")},N[M.ASSET_HYPERLINK]=function(n){return k(M.ASSET_HYPERLINK,n)},N[M.ENTRY_HYPERLINK]=function(n){return k(M.ENTRY_HYPERLINK,n)},N[M.EMBEDDED_ENTRY]=function(n){return k(M.EMBEDDED_ENTRY,n)},N[M.HYPERLINK]=function(n,e){var r=typeof n.data.uri=="string"?n.data.uri:"";return"<a href=".concat(V(r),">").concat(e(n.content),"</a>")},N),g=(m={},m[h.BOLD]=function(n){return"<b>".concat(n,"</b>")},m[h.ITALIC]=function(n){return"<i>".concat(n,"</i>")},m[h.UNDERLINE]=function(n){return"<u>".concat(n,"</u>")},m[h.CODE]=function(n){return"<code>".concat(n,"</code>")},m[h.SUPERSCRIPT]=function(n){return"<sup>".concat(n,"</sup>")},m[h.SUBSCRIPT]=function(n){return"<sub>".concat(n,"</sub>")},m),k=function(n,e){return"<span>type: ".concat(_(n)," id: ").concat(_(e.data.target.sys.id),"</span>")};function X(n,e){return e===void 0&&(e={}),!n||!n.content?"":j(n.content,{renderNode:d(d({},A),e.renderNode),renderMark:d(d({},g),e.renderMark)})}function j(n,e){var r=e.renderNode,i=e.renderMark;return n.map(function(o){return $(o,{renderNode:r,renderMark:i})}).join("")}function $(n,e){var r=e.renderNode,i=e.renderMark;if(q.isText(n)){var o=_(n.value);return n.marks.length>0?n.marks.reduce(function(l,R){return i[R.type]?i[R.type](l):l},o):o}else{var O=function(l){return j(l,{renderMark:i,renderNode:r})};return!n.nodeType||!r[n.nodeType]?"":r[n.nodeType](n,O)}}u.documentToHtmlString=X})(Ee);var ue={};(function(u){Object.defineProperty(u,"__esModule",{value:!0});function d(n){return n&&typeof n=="object"&&"default"in n?n.default:n}var P=_e,_=d(P);/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var E=function(){return E=Object.assign||function(e){for(var r,i=1,o=arguments.length;i<o;i++){r=arguments[i];for(var O in r)Object.prototype.hasOwnProperty.call(r,O)&&(e[O]=r[O])}return e},E.apply(this,arguments)},S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof v<"u"?v:typeof self<"u"?self:{};function B(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function D(n,e){return e={exports:{}},n(e,e.exports),e.exports}var t=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.BLOCKS=void 0,function(r){r.DOCUMENT="document",r.PARAGRAPH="paragraph",r.HEADING_1="heading-1",r.HEADING_2="heading-2",r.HEADING_3="heading-3",r.HEADING_4="heading-4",r.HEADING_5="heading-5",r.HEADING_6="heading-6",r.OL_LIST="ordered-list",r.UL_LIST="unordered-list",r.LIST_ITEM="list-item",r.HR="hr",r.QUOTE="blockquote",r.EMBEDDED_ENTRY="embedded-entry-block",r.EMBEDDED_ASSET="embedded-asset-block",r.EMBEDDED_RESOURCE="embedded-resource-block",r.TABLE="table",r.TABLE_ROW="table-row",r.TABLE_CELL="table-cell",r.TABLE_HEADER_CELL="table-header-cell"}(e.BLOCKS||(e.BLOCKS={}))});B(t),t.BLOCKS;var K=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.INLINES=void 0,function(r){r.HYPERLINK="hyperlink",r.ENTRY_HYPERLINK="entry-hyperlink",r.ASSET_HYPERLINK="asset-hyperlink",r.EMBEDDED_ENTRY="embedded-entry-inline"}(e.INLINES||(e.INLINES={}))});B(K),K.INLINES;var y=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r;(function(i){i.BOLD="bold",i.ITALIC="italic",i.UNDERLINE="underline",i.CODE="code",i.SUPERSCRIPT="superscript",i.SUBSCRIPT="subscript"})(r||(r={})),e.default=r});B(y);var c=D(function(n,e){var r=S&&S.__spreadArray||function(l,R,a){if(a||arguments.length===2)for(var L=0,T=R.length,C;L<T;L++)(C||!(L in R))&&(C||(C=Array.prototype.slice.call(R,0,L)),C[L]=R[L]);return l.concat(C||Array.prototype.slice.call(R))},i=S&&S.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},o;Object.defineProperty(e,"__esModule",{value:!0}),e.V1_MARKS=e.V1_NODE_TYPES=e.TEXT_CONTAINERS=e.HEADINGS=e.CONTAINERS=e.VOID_BLOCKS=e.TABLE_BLOCKS=e.LIST_ITEM_BLOCKS=e.TOP_LEVEL_BLOCKS=void 0;var O=i(y);e.TOP_LEVEL_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE,t.BLOCKS.TABLE],e.LIST_ITEM_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.TABLE_BLOCKS=[t.BLOCKS.TABLE,t.BLOCKS.TABLE_ROW,t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],e.VOID_BLOCKS=[t.BLOCKS.HR,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.CONTAINERS=(o={},o[t.BLOCKS.OL_LIST]=[t.BLOCKS.LIST_ITEM],o[t.BLOCKS.UL_LIST]=[t.BLOCKS.LIST_ITEM],o[t.BLOCKS.LIST_ITEM]=e.LIST_ITEM_BLOCKS,o[t.BLOCKS.QUOTE]=[t.BLOCKS.PARAGRAPH],o[t.BLOCKS.TABLE]=[t.BLOCKS.TABLE_ROW],o[t.BLOCKS.TABLE_ROW]=[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],o[t.BLOCKS.TABLE_CELL]=[t.BLOCKS.PARAGRAPH],o[t.BLOCKS.TABLE_HEADER_CELL]=[t.BLOCKS.PARAGRAPH],o),e.HEADINGS=[t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6],e.TEXT_CONTAINERS=r([t.BLOCKS.PARAGRAPH],e.HEADINGS,!0),e.V1_NODE_TYPES=[t.BLOCKS.DOCUMENT,t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.LIST_ITEM,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,K.INLINES.HYPERLINK,K.INLINES.ENTRY_HYPERLINK,K.INLINES.ASSET_HYPERLINK,K.INLINES.EMBEDDED_ENTRY,"text"],e.V1_MARKS=[O.default.BOLD,O.default.CODE,O.default.ITALIC,O.default.UNDERLINE]});B(c),c.V1_MARKS,c.V1_NODE_TYPES,c.TEXT_CONTAINERS,c.HEADINGS,c.CONTAINERS,c.VOID_BLOCKS,c.TABLE_BLOCKS,c.LIST_ITEM_BLOCKS,c.TOP_LEVEL_BLOCKS;var I=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0})});B(I);var H=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0})});B(H);var b=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r={nodeType:t.BLOCKS.DOCUMENT,data:{},content:[{nodeType:t.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};e.default=r});B(b);var s=D(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isText=e.isBlock=e.isInline=void 0;function r(l,R){for(var a=0,L=Object.keys(l);a<L.length;a++){var T=L[a];if(R===l[T])return!0}return!1}function i(l){return r(K.INLINES,l.nodeType)}e.isInline=i;function o(l){return r(t.BLOCKS,l.nodeType)}e.isBlock=o;function O(l){return l.nodeType==="text"}e.isText=O});B(s),s.isText,s.isBlock,s.isInline;var G=D(function(n,e){var r=S&&S.__createBinding||(Object.create?function(a,L,T,C){C===void 0&&(C=T);var p=Object.getOwnPropertyDescriptor(L,T);(!p||("get"in p?!L.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return L[T]}}),Object.defineProperty(a,C,p)}:function(a,L,T,C){C===void 0&&(C=T),a[C]=L[T]}),i=S&&S.__setModuleDefault||(Object.create?function(a,L){Object.defineProperty(a,"default",{enumerable:!0,value:L})}:function(a,L){a.default=L}),o=S&&S.__exportStar||function(a,L){for(var T in a)T!=="default"&&!Object.prototype.hasOwnProperty.call(L,T)&&r(L,a,T)},O=S&&S.__importStar||function(a){if(a&&a.__esModule)return a;var L={};if(a!=null)for(var T in a)T!=="default"&&Object.prototype.hasOwnProperty.call(a,T)&&r(L,a,T);return i(L,a),L},l=S&&S.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.helpers=e.EMPTY_DOCUMENT=e.MARKS=e.INLINES=e.BLOCKS=void 0,Object.defineProperty(e,"BLOCKS",{enumerable:!0,get:function(){return t.BLOCKS}}),Object.defineProperty(e,"INLINES",{enumerable:!0,get:function(){return K.INLINES}}),Object.defineProperty(e,"MARKS",{enumerable:!0,get:function(){return l(y).default}}),o(c,e),o(I,e),o(H,e),Object.defineProperty(e,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(b).default}});var R=O(s);e.helpers=R});B(G);var q=G.helpers;G.EMPTY_DOCUMENT;var h=G.MARKS,M=G.INLINES,f=G.BLOCKS;function N(n,e){return P.isValidElement(n)&&n.key===null?P.cloneElement(n,{key:e}):n}function m(n,e){return n.map(function(r,i){return N(V(r,e),i)})}function V(n,e){var r=e.renderNode,i=e.renderMark,o=e.renderText;if(q.isText(n))return n.marks.reduce(function(l,R){return i[R.type]?i[R.type](l):l},o?o(n.value):n.value);var O=m(n.content,e);return!n.nodeType||!r[n.nodeType]?_.createElement(_.Fragment,null,O):r[n.nodeType](n,O)}var A,g,k=(A={},A[f.DOCUMENT]=function(n,e){return e},A[f.PARAGRAPH]=function(n,e){return _.createElement("p",null,e)},A[f.HEADING_1]=function(n,e){return _.createElement("h1",null,e)},A[f.HEADING_2]=function(n,e){return _.createElement("h2",null,e)},A[f.HEADING_3]=function(n,e){return _.createElement("h3",null,e)},A[f.HEADING_4]=function(n,e){return _.createElement("h4",null,e)},A[f.HEADING_5]=function(n,e){return _.createElement("h5",null,e)},A[f.HEADING_6]=function(n,e){return _.createElement("h6",null,e)},A[f.EMBEDDED_ENTRY]=function(n,e){return _.createElement("div",null,e)},A[f.UL_LIST]=function(n,e){return _.createElement("ul",null,e)},A[f.OL_LIST]=function(n,e){return _.createElement("ol",null,e)},A[f.LIST_ITEM]=function(n,e){return _.createElement("li",null,e)},A[f.QUOTE]=function(n,e){return _.createElement("blockquote",null,e)},A[f.HR]=function(){return _.createElement("hr",null)},A[f.TABLE]=function(n,e){return _.createElement("table",null,_.createElement("tbody",null,e))},A[f.TABLE_ROW]=function(n,e){return _.createElement("tr",null,e)},A[f.TABLE_HEADER_CELL]=function(n,e){return _.createElement("th",null,e)},A[f.TABLE_CELL]=function(n,e){return _.createElement("td",null,e)},A[M.ASSET_HYPERLINK]=function(n){return j(M.ASSET_HYPERLINK,n)},A[M.ENTRY_HYPERLINK]=function(n){return j(M.ENTRY_HYPERLINK,n)},A[M.EMBEDDED_ENTRY]=function(n){return j(M.EMBEDDED_ENTRY,n)},A[M.HYPERLINK]=function(n,e){return _.createElement("a",{href:n.data.uri},e)},A),X=(g={},g[h.BOLD]=function(n){return _.createElement("b",null,n)},g[h.ITALIC]=function(n){return _.createElement("i",null,n)},g[h.UNDERLINE]=function(n){return _.createElement("u",null,n)},g[h.CODE]=function(n){return _.createElement("code",null,n)},g[h.SUPERSCRIPT]=function(n){return _.createElement("sup",null,n)},g[h.SUBSCRIPT]=function(n){return _.createElement("sub",null,n)},g);function j(n,e){return _.createElement("span",{key:e.data.target.sys.id},"type: ",e.nodeType," id: ",e.data.target.sys.id)}function $(n,e){return e===void 0&&(e={}),n?V(n,{renderNode:E(E({},k),e.renderNode),renderMark:E(E({},X),e.renderMark),renderText:e.renderText}):null}u.documentToReactComponents=$})(ue);const De=(u,d="react",P=void 0)=>{const _=({children:S})=>U("p",{children:S}),E=P??{renderNode:{[x.BLOCKS.PARAGRAPH]:(S,B)=>U(_,{children:B})},renderText:S=>S.split(`
`).flatMap((B,D)=>[D>0&&U("br",{}),B])};return d==="react"?ue.documentToReactComponents(u,E):Ee.documentToHtmlString(u,E)},Ie=De,Ce=Le("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",lineHeight:"1em"}),Ae=ie.forwardRef((u,d)=>{const{css:P={},document:_,...E}=u,S=oe(d);return U(Ce,{css:P,ref:S,...E,children:_?Ie(_):null})}),ae=Ae;ae.displayName="RichTextRender";const Ne={nodeType:"document",data:{},content:[{nodeType:"paragraph",content:[{nodeType:"text",value:"First ",marks:[],data:{}},{nodeType:"text",value:"paragraph",marks:[{type:"bold"}],data:{}},{nodeType:"text",value:` with
a line break.`,marks:[],data:{}}],data:{}},{nodeType:"paragraph",content:[{nodeType:"text",value:"Second",marks:[{type:"italic"}],data:{}},{nodeType:"text",value:` paragraph and
a line break and another
line break.`,marks:[],data:{}}],data:{}}]},se=()=>J(le,{children:[J("p",{children:[U("h3",{children:"Richtext renderer"}),"This component converts rich text content from Contentful into HTML."]}),U("h3",{children:"Example: "}),U(ce,{children:U(ae,{document:Ne})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{se as Default};
