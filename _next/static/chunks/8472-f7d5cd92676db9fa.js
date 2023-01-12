"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8472],{55803:function(e,t,l){l.r(t),l.d(t,{Item:function(){return s},Section:function(){return o},getItemCount:function(){return function e(t){let l=y.get(t);if(null!=l)return l;for(let i of(l=0,t))"section"===i.type?l+=e(i.childNodes):l++;return y.set(t,l),l}},useCollection:function(){return h}});var i=l(52983);function n(e){return null}n.getCollectionNode=function*(e,t){var l;let{childItems:n,title:s,children:r}=e,o=e.title||e.children,a=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";a||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:a,"aria-label":e["aria-label"],hasChildNodes:(l=e,null!=l.hasChildItems?l.hasChildItems:!!(l.childItems||l.title&&i.Children.count(l.children)>0)),*childNodes(){if(n)for(let e of n)yield{type:"item",value:e};else if(s){let t=[];i.Children.forEach(r,e=>{t.push({type:"item",element:e})}),yield*t}}}};let s=n;function r(e){return null}r.getCollectionNode=function*(e){let{children:t,title:l,items:n}=e;yield{type:"section",props:e,hasChildNodes:!0,rendered:l,"aria-label":e["aria-label"],*childNodes(){if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let e of n)yield{type:"item",value:e,renderer:t}}else{let l=[];i.Children.forEach(t,e=>{l.push({type:"item",element:e})}),yield*l}}}};let o=r;class a{build(e,t){return this.context=t,u(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let s=[];i.Children.forEach(t,e=>{s.push(e)});let r=0;for(let o of s){let a=this.getFullNode({element:o,index:r},{});for(let u of a)r++,yield u}}}getKey(e,t,l,i){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${i}${t.key}`;let n=t.value;if(null!=n){var s;let r=null!==(s=n.key)&&void 0!==s?s:n.id;if(null==r)throw Error("No key found for item");return r}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,n){let s=e.element;if(!s&&e.value&&t&&t.renderer){let r=this.cache.get(e.value);if(r&&(!r.shouldInvalidate||!r.shouldInvalidate(this.context))){r.index=e.index,r.parentKey=n?n.key:null,yield r;return}s=t.renderer(e.value)}if(i.isValidElement(s)){let o=s.type;if("function"!=typeof o&&"function"!=typeof o.getCollectionNode)throw Error(`Unknown element <${"function"==typeof s.type?s.type.name:s.type}> in collection.`);let a=o.getCollectionNode(s.props,this.context),h=e.index,y=a.next();for(;!y.done&&y.value;){let f=y.value;e.index=h;let p=f.key;p||(p=f.element?null:this.getKey(s,e,t,l));let g=[...this.getFullNode({...f,key:p,index:h,wrapper:c(e.wrapper,f.wrapper)},this.getChildState(t,f),l?`${l}${s.key}`:s.key,n)];for(let K of g){if(K.value=f.value||e.value,K.value&&this.cache.set(K.value,K),e.type&&K.type!==e.type)throw Error(`Unsupported type <${d(K.type)}> in <${d(n.type)}>. Only <${d(e.type)}> is supported.`);h++,yield K}y=a.next(g)}return}if(null==e.key)return;let m=this,S={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:u(function*(){if(!e.hasChildNodes)return;let l=0;for(let i of e.childNodes()){null!=i.key&&(i.key=`${S.key}${i.key}`),i.index=l;let n=m.getFullNode(i,m.getChildState(t,i),S.key,S);for(let s of n)l++,yield s}})};yield S}constructor(){this.cache=new WeakMap}}function u(e){let t=[],l=null;return{*[Symbol.iterator](){for(let i of t)yield i;for(let n of(l||(l=e()),l))t.push(n),yield n}}}function c(e,t){return e&&t?l=>e(t(l)):e||t||void 0}function d(e){return e[0].toUpperCase()+e.slice(1)}function h(e,t,l,n=[]){let s=(0,i.useMemo)(()=>new a,[]),r=(0,i.useRef)(null);return(0,i.useMemo)(()=>{let i=s.build(e,l);return r.current=t(i,r.current),r.current},[s,e.children,e.items,l,...n])}let y=new WeakMap},76798:function(e,t,l){l.d(t,{Kx:function(){return d},is:function(){return function e(t){let l=h.get(t);if(null!=l)return l;for(let i of(l=0,t))"section"===i.type?l+=e(i.childNodes):l++;return h.set(t,l),l}}});var i=l(52983),n=l(37705);function s(e){return null}function r(e){return null}s.getCollectionNode=function*(e,t){var l;let{childItems:n,title:s,children:r}=e,o=e.title||e.children,a=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";a||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:a,"aria-label":e["aria-label"],hasChildNodes:(l=e,null!=l.hasChildItems?l.hasChildItems:!!(l.childItems||l.title&&i.Children.count(l.children)>0)),*childNodes(){if(n)for(let e of n)yield{type:"item",value:e};else if(s){let t=[];i.Children.forEach(r,e=>{t.push({type:"item",element:e})}),yield*t}}}},r.getCollectionNode=function*(e){let{children:t,title:l,items:n}=e;yield{type:"section",props:e,hasChildNodes:!0,rendered:l,"aria-label":e["aria-label"],*childNodes(){if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let e of n)yield{type:"item",value:e,renderer:t}}else{let l=[];i.Children.forEach(t,e=>{l.push({type:"item",element:e})}),yield*l}}}};class o{build(e,t){return this.context=t,a(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let s=[];i.Children.forEach(t,e=>{s.push(e)});let r=0;for(let o of s){let a=this.getFullNode({element:o,index:r},{});for(let u of a)r++,yield u}}}getKey(e,t,l,i){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${i}${t.key}`;let n=t.value;if(null!=n){var s;let r=null!==(s=n.key)&&void 0!==s?s:n.id;if(null==r)throw Error("No key found for item");return r}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,n){let s=e.element;if(!s&&e.value&&t&&t.renderer){let r=this.cache.get(e.value);if(r&&(!r.shouldInvalidate||!r.shouldInvalidate(this.context))){r.index=e.index,r.parentKey=n?n.key:null,yield r;return}s=t.renderer(e.value)}if(i.isValidElement(s)){let o=s.type;if("function"!=typeof o&&"function"!=typeof o.getCollectionNode)throw Error(`Unknown element <${"function"==typeof s.type?s.type.name:s.type}> in collection.`);let d=o.getCollectionNode(s.props,this.context),h=e.index,y=d.next();for(;!y.done&&y.value;){let f=y.value;e.index=h;let p=f.key;p||(p=f.element?null:this.getKey(s,e,t,l));let g=[...this.getFullNode({...f,key:p,index:h,wrapper:u(e.wrapper,f.wrapper)},this.getChildState(t,f),l?`${l}${s.key}`:s.key,n)];for(let K of g){if(K.value=f.value||e.value,K.value&&this.cache.set(K.value,K),e.type&&K.type!==e.type)throw Error(`Unsupported type <${c(K.type)}> in <${c(n.type)}>. Only <${c(e.type)}> is supported.`);h++,yield K}y=d.next(g)}return}if(null==e.key)return;let m=this,S={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:a(function*(){if(!e.hasChildNodes)return;let l=0;for(let i of e.childNodes()){null!=i.key&&(i.key=`${S.key}${i.key}`),i.index=l;let n=m.getFullNode(i,m.getChildState(t,i),S.key,S);for(let s of n)l++,yield s}})};yield S}constructor(){(0,n.Z)(this,"cache",new WeakMap)}}function a(e){let t=[],l=null;return{*[Symbol.iterator](){for(let i of t)yield i;for(let n of(l||(l=e()),l))t.push(n),yield n}}}function u(e,t){return e&&t?l=>e(t(l)):e||t||void 0}function c(e){return e[0].toUpperCase()+e.slice(1)}function d(e,t,l,n=[]){let s=(0,i.useMemo)(()=>new o,[]),r=(0,i.useRef)(null);return(0,i.useMemo)(()=>{let i=s.build(e,l);return r.current=t(i,r.current),r.current},[s,e.children,e.items,l,...n])}let h=new WeakMap},560:function(e,t,l){l.d(t,{DC:function(){return d},BA:function(){return h}});var i=l(52983),n=l(44022);class s extends Set{constructor(e,t,l){super(e),e instanceof s?(this.anchorKey=t||e.anchorKey,this.currentKey=l||e.currentKey):(this.anchorKey=t,this.currentKey=l)}}function r(e,t){return e?"all"===e?"all":new s(e):t}class o{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||(null==l?void 0:l.index)<e.index)&&(e=l)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||(null==l?void 0:l.index)>e.index)&&(e=l)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode){this.replaceSelection(e);return}e=this.getKey(e);let t;if("all"===this.state.selectedKeys)t=new s([e],e,e);else{let l=this.state.selectedKeys,i=l.anchorKey||e;for(let n of(t=new s(l,i,e),this.getKeyRange(i,l.currentKey||e)))t.delete(n);for(let r of this.getKeyRange(e,i))this.canSelectItem(r)&&t.add(r)}this.state.setSelectedKeys(t)}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?l.index<=i.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],i=e;for(;i;){let n=this.collection.getItem(i);if((n&&"item"===n.type||"cell"===n.type&&this.allowsCellSelection)&&l.push(i),i===t)return l;i=this.collection.getKeyAfter(i)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new s("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new s([e],e,e):new s;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new s;for(let l of e)if(null!=(l=this.getKey(l))&&(t.add(l),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l;){if(this.canSelectItem(l)){let i=this.collection.getItem(l);"item"===i.type&&e.push(l),i.hasChildNodes&&(this.allowsCellSelection||"item"!==i.type)&&t([...i.childNodes][0].key)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){"multiple"===this.selectionMode&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new s)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let i of t)if(!e.has(i))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let t=this.collection.getItem(e);return!!t&&("cell"!==t.type||!!this.allowsCellSelection)}isDisabled(e){return this.state.disabledKeys.has(e)&&"all"===this.state.disabledBehavior}constructor(e,t,l){var i;this.collection=e,this.state=t,this.allowsCellSelection=null!==(i=null==l?void 0:l.allowsCellSelection)&&void 0!==i&&i,this._isSelectAll=null}}var a=l(76798),u=l(37705);let c=Symbol.iterator;class d{*[c](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}constructor(e){(0,u.Z)(this,"keyMap",new Map),this.iterable=e;let t=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let l of e.childNodes)t(l)};for(let l of e)t(l);let i,n=0;for(let[s,r]of this.keyMap)i?(i.nextKey=s,r.prevKey=i.key):(this.firstKey=s,r.prevKey=void 0),"item"===r.type&&(r.index=n++),(i=r).nextKey=void 0;this.lastKey=null==i?void 0:i.key}}function h(e){var t;let[l,u]=(0,n.zk)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),c=(0,i.useMemo)(()=>null!=l?[l]:[],[l]),{collection:h,disabledKeys:y,selectionManager:f}=function e(t){let{filter:l}=t,u=function e(t){let{selectionMode:l="none",disallowEmptySelection:o,allowDuplicateSelectionEvents:a,selectionBehavior:u="toggle",disabledBehavior:c="all"}=t,d=(0,i.useRef)(!1),[,h]=(0,i.useState)(!1),y=(0,i.useRef)(null),f=(0,i.useRef)(null),[,p]=(0,i.useState)(null),g=(0,i.useMemo)(()=>r(t.selectedKeys),[t.selectedKeys]),K=(0,i.useMemo)(()=>r(t.defaultSelectedKeys,new s),[t.defaultSelectedKeys]),[m,S]=(0,n.zk)(g,K,t.onSelectionChange),v=(0,i.useMemo)(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),[w,k]=(0,i.useState)(u);"replace"===u&&"toggle"===w&&"object"==typeof m&&0===m.size&&k("replace");let x=(0,i.useRef)(u);return(0,i.useEffect)(()=>{u!==x.current&&(k(u),x.current=u)},[u]),{selectionMode:l,disallowEmptySelection:o,selectionBehavior:w,setSelectionBehavior:k,get isFocused(){return d.current},setFocused(e){d.current=e,h(e)},get focusedKey(){return y.current},get childFocusStrategy(){return f.current},setFocusedKey(e,t="first"){y.current=e,f.current=t,p(e)},selectedKeys:m,setSelectedKeys(e){(a||!function(e,t){if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;return!0}(e,m))&&S(e)},disabledKeys:v,disabledBehavior:c}}(t),c=(0,i.useMemo)(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),h=e=>new d(l?l(e):e),y=(0,i.useMemo)(()=>({suppressTextValueWarning:t.suppressTextValueWarning}),[t.suppressTextValueWarning]),f=(0,a.Kx)(t,h,y,[l]);return(0,i.useEffect)(()=>{null==u.focusedKey||f.getItem(u.focusedKey)||u.setFocusedKey(null)},[f,u.focusedKey]),{collection:f,disabledKeys:c,selectionManager:new o(f,u)}}({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:c,onSelectionChange(t){let i=t.values().next().value;i===l&&e.onSelectionChange&&e.onSelectionChange(i),u(i)}}),p=null!=l?h.getItem(l):null;return{collection:h,disabledKeys:y,selectionManager:f,selectedKey:l,setSelectedKey:u,selectedItem:p}}}}]);