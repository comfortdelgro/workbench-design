import{j as i}from"./jsx-runtime-9ef10904.js";import{c as g,C as $}from"./objectToCSS-e90bd687.js";import{r as f,R as B}from"./index-6c164b11.js";import{u as O}from"./use-dom-ref-7c72e1a5.js";import{S as D}from"./index-074620d7.js";const V="_pagination_fyl47_7",L="_paginationItemCounting_fyl47_16",Z="_paginationRowsCounting_fyl47_20",z="_paginationItem_fyl47_16",F="_ellipsis_fyl47_52",G="_paginationItemSvg_fyl47_60",H="_paginationItemActive_fyl47_66",J="_paginationItemDisabled_fyl47_75",r={pagination:V,paginationItemCounting:L,paginationRowsCounting:Z,paginationItem:z,ellipsis:F,paginationItemSvg:G,paginationItemActive:H,paginationItemDisabled:J},w=({count:e,page:a,rowsPerPage:n})=>{const s=(a-1)*n+1,o=Math.min(a*n,e);return i.jsx("div",{className:g(r.paginationItemCounting,"cdg-pagination-item-counting"),children:`${s} - ${o} of ${e}`})};w.__docgenInfo={description:"",methods:[],displayName:"ItemCounting",props:{count:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"number"},description:""},rowsPerPage:{required:!0,tsType:{name:"number"},description:""}}};const P=({...e})=>{const a=i.jsx("svg",{width:"18",height:"4",viewBox:"0 0 18 4",fill:"none",children:i.jsx("path",{d:"M2.04298 3.098C1.68832 3.098 1.39432 2.99067 1.16098 2.776C0.936984 2.552 0.824984 2.27667 0.824984 1.95C0.824984 1.62333 0.936984 1.35267 1.16098 1.138C1.39432 0.914 1.68832 0.802 2.04298 0.802C2.38832 0.802 2.67298 0.914 2.89698 1.138C3.12098 1.35267 3.23298 1.62333 3.23298 1.95C3.23298 2.27667 3.12098 2.552 2.89698 2.776C2.67298 2.99067 2.38832 3.098 2.04298 3.098ZM9.01564 3.098C8.66097 3.098 8.36697 2.99067 8.13364 2.776C7.90964 2.552 7.79764 2.27667 7.79764 1.95C7.79764 1.62333 7.90964 1.35267 8.13364 1.138C8.36697 0.914 8.66097 0.802 9.01564 0.802C9.36097 0.802 9.64564 0.914 9.86964 1.138C10.0936 1.35267 10.2056 1.62333 10.2056 1.95C10.2056 2.27667 10.0936 2.552 9.86964 2.776C9.64564 2.99067 9.36097 3.098 9.01564 3.098ZM15.9883 3.098C15.6336 3.098 15.3396 2.99067 15.1063 2.776C14.8823 2.552 14.7703 2.27667 14.7703 1.95C14.7703 1.62333 14.8823 1.35267 15.1063 1.138C15.3396 0.914 15.6336 0.802 15.9883 0.802C16.3336 0.802 16.6183 0.914 16.8423 1.138C17.0663 1.35267 17.1783 1.62333 17.1783 1.95C17.1783 2.27667 17.0663 2.552 16.8423 2.776C16.6183 2.99067 16.3336 3.098 15.9883 3.098Z",fill:"#333333"})});return i.jsx("div",{...e,className:g(r.paginationItem,r.ellipsis,"cdg-pagination-item"),children:a})};P.__docgenInfo={description:"",methods:[],displayName:"Ellipsis"};const M=({rowsPerPage:e,onRowsPerPageChange:a,rowsOptions:n})=>i.jsxs("div",{className:g(r.paginationRowsCounting,"cdg-pagination-row-counting"),children:[i.jsx("span",{children:"Rows per page:"}),i.jsx(D.Select,{style:{width:"138px",gap:"4px"},defaultValue:e.toString(),onValueChange:s=>a==null?void 0:a(Number(s)),children:n.map((s,o)=>i.jsx(D.Item,{value:s.toString(),children:`${s} rows`},o))})]});M.__docgenInfo={description:"",methods:[],displayName:"RowsCounting",props:{rowsPerPage:{required:!0,tsType:{name:"number"},description:""},rowsOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onRowsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(newValue: number) => void | undefined",signature:{arguments:[{type:{name:"number"},name:"newValue"}],return:{name:"union",raw:"void | undefined",elements:[{name:"void"},{name:"undefined"}]}}},description:""}}};const x=(e,a)=>Array.from({length:a-e+1},(n,s)=>s+e),K=({page:e,initialPage:a,total:n,onChange:s})=>{const[o,C]=f.useState(e??a);f.useEffect(()=>{e&&C(e)},[e]);const c=f.useCallback(l=>{C(l),s==null||s(l)},[s]),p=f.useCallback(l=>{l<=0?c(1):l>n?c(n):c(l)},[n,c]),I=()=>{o<n&&p(o+1)},h=()=>{o>1&&p(o-1)},_=()=>p(1),y=()=>p(n);return{items:f.useMemo(()=>{if(7>=n)return x(1,n);const u=Math.max(o-1,1),t=Math.min(o+1,n-1),d=u>3,v=t<n-2;return!d&&v?[...x(1,5),"dots",n]:d&&!v?[1,"dots",...x(n-4,n)]:[1,"dots",...x(u,t),"dots",n]},[n,o]),active:o,setPage:p,next:I,previous:h,first:_,last:y}},N=B.forwardRef((e,a)=>{const{count:n,css:s={},className:o,page:C=1,total:c=1,initialPage:p=1,rowsPerPage:I,rowsOptions:h=[5,10,15,20,25],onChange:_,onRowsPerPageChange:y,...S}=e,l=O(a),{items:u,active:t,setPage:d,next:v,previous:b}=K({page:C,total:c,initialPage:p,onChange:_}),E=f.useCallback((m,j)=>{if(m==="dots"){const R=j<u.indexOf(t);return i.jsx(P,{"aria-label":R?"previous 5 items":"next 5 items",onClick:()=>{d(R?t-5>=1?t-5:1:t+5<=c?t+5:c)}},j)}const T=m.toString().length>3?{padding:"0 4px"}:void 0;return i.jsx("div",{className:g(r.paginationItem,m===t&&r.paginationItemActive,"cdg-pagination-item"),style:T,onClick:()=>m!==t&&d(m),"aria-label":`page ${m}`,"aria-current":m===t,children:m},j)},[t,u,d,c]),A=g(r.pagination,o,"cdg-pagination"),k=g(r.paginationItem,t===1&&r.paginationItemDisabled,"cdg-pagination-item"),q=g(r.paginationItem,t===c&&r.paginationItemDisabled,"cdg-pagination-item");return i.jsx($,{css:s,childrenRef:l,children:i.jsxs("div",{...S,role:"navigation",ref:l,"aria-label":"pagination",className:A,children:[I&&i.jsx(M,{rowsOptions:h,rowsPerPage:I,onRowsPerPageChange:y}),n&&i.jsx(w,{count:n,page:C,rowsPerPage:I??0}),i.jsx("div",{onClick:b,"aria-label":"previous page",className:k,children:i.jsx("svg",{viewBox:"0 0 320 512",className:g(r.paginationItemSvg,"cdg-pagination-item-svg"),children:i.jsx("path",{fill:t===1?"#D2D0CE":"#201F1E",d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),u.map(E),i.jsx("div",{onClick:v,"aria-label":"next page",className:q,children:i.jsx("svg",{viewBox:"0 0 320 512",className:g(r.paginationItemSvg,"cdg-pagination-item-svg"),children:i.jsx("path",{fill:t===c?"#D2D0CE":"#201F1E",d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]})})});N.__docgenInfo={description:"",methods:[],displayName:"Pagination"};N.displayName="Pagination";N.ItemCounting=w;export{N as P};
