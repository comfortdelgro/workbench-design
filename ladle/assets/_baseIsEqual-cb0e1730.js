import{_ as M,a as m,i as H,b as J}from"./_getTag-831c42c2.js";import{_ as N,a as Q}from"./_equalByTag-6cd86198.js";import{a as U}from"./_getAllKeys-5d98cf22.js";import{i as X}from"./isArray-5ac9c87d.js";import{i as Y}from"./isObjectLike-c4ff7b99.js";var L=U,Z=1,F=Object.prototype,b=F.hasOwnProperty;function W(a,r,s,i,l,n){var _=s&Z,g=L(a),e=g.length,p=L(r),A=p.length;if(e!=A&&!_)return!1;for(var v=e;v--;){var f=g[v];if(!(_?f in r:b.call(r,f)))return!1}var O=n.get(a),y=n.get(r);if(O&&y)return O==r&&y==a;var u=!0;n.set(a,r),n.set(r,a);for(var T=_;++v<e;){f=g[v];var P=a[f],w=r[f];if(i)var E=_?i(w,P,f,r,a,n):i(P,w,f,a,r,n);if(!(E===void 0?P===w||l(P,w,s,i,n):E)){u=!1;break}T||(T=f=="constructor")}if(u&&!T){var q=a.constructor,I=r.constructor;q!=I&&"constructor"in a&&"constructor"in r&&!(typeof q=="function"&&q instanceof q&&typeof I=="function"&&I instanceof I)&&(u=!1)}return n.delete(a),n.delete(r),u}var C=W,t=M,j=N,z=Q,V=C,S=m,$=X,B=H,o=J,c=1,R="[object Arguments]",x="[object Array]",d="[object Object]",h=Object.prototype,D=h.hasOwnProperty;function k(a,r,s,i,l,n){var _=$(a),g=$(r),e=_?x:S(a),p=g?x:S(r);e=e==R?d:e,p=p==R?d:p;var A=e==d,v=p==d,f=e==p;if(f&&B(a)){if(!B(r))return!1;_=!0,A=!1}if(f&&!A)return n||(n=new t),_||o(a)?j(a,r,s,i,l,n):z(a,r,e,s,i,l,n);if(!(s&c)){var O=A&&D.call(a,"__wrapped__"),y=v&&D.call(r,"__wrapped__");if(O||y){var u=O?a.value():a,T=y?r.value():r;return n||(n=new t),l(u,T,s,i,n)}}return f?(n||(n=new t),V(a,r,s,i,l,n)):!1}var rr=k,ar=rr,G=Y;function K(a,r,s,i,l){return a===r?!0:a==null||r==null||!G(a)&&!G(r)?a!==a&&r!==r:ar(a,r,s,i,K,l)}var lr=K;export{lr as _};
