import{j as e}from"./jsx-runtime-ea7736fc.js";import{R}from"./index-6c164b11.js";import{C as v}from"./objectToCSS-aff350d4.js";import{u as p}from"./use-dom-ref-7c72e1a5.js";const E="_chip_pq4vk_4",N="_isErrored_pq4vk_22",b="_cdgChipContent_pq4vk_31",c={chip:E,isErrored:N,"close-icon-container":"_close-icon-container_pq4vk_27",cdgChipContent:b},h=R.forwardRef((C,f)=>{const{children:m,hasCloseButton:n=!1,isErrored:_=!1,css:x,className:u,tabIndex:g,onCloseClick:o,onClick:t,onKeyDown:i,...j}=C,r=p(f),a=p(null),k=s=>{var l,d;switch(i==null||i(s),s.code){case"Backspace":case"Delete":(l=a.current)==null||l.click();break;case"Escape":(d=r.current)==null||d.blur();break}},L=s=>{s.stopPropagation(),o==null||o(s)};return e.jsx(v,{css:x,childrenRef:r,children:e.jsxs("div",{ref:r,className:` ${u} ${c.chip} ${_?c.isErrored:""}`,tabIndex:n||t?g||0:-1,onClick:t,onKeyDown:k,...j,children:[e.jsx("div",{className:`${c.cdgChipContent}`,children:m}),n&&e.jsx("div",{className:`${c["close-icon-container"]}`,onClick:L,ref:a,children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:e.jsx("g",{clipPath:"url(#clip0_5299_13653)",children:e.jsx("path",{d:"M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z",fill:"currentColor"})})})})]})})});h.__docgenInfo={description:"",methods:[],displayName:"Chip"};h.displayName="Chip";export{h as C};
