import{s as y,R as t,a as n,j as i}from"./index-f44380ee.js";import{C as l}from"./index-4f5638ab.js";import"./index-848668cb.js";import{D as v}from"./index-7b0f6ea6.js";import{T as S}from"./index-9ee51211.js";import{u as _}from"./use-dom-ref-586729b0.js";import{B as r}from"./button-75352c4c.js";import"./useCurrentTheme-ac0af65c.js";const H=y("div",{minWidth:"375px",padding:"$4_5",backgroundColor:"$background",borderRadius:"$xl $xl 0px 0px",display:"flex",flexDirection:"column",gap:"$4",".pu-point-label":{fontSize:"$label3",lineHeight:"16px",fontWeight:500,height:"$5","> div":{marginBottom:"5px"}},".pu-point-address":{backgroundColor:"$grayShades10",padding:"$3",display:"flex",justifyContent:"space-between",alignItems:"center"},".pu-point-address__name":{fontSize:"$label1",fontWeight:600,lineHeight:"20px",color:"$cdgBlue100"},".pu-point-address__address":{fontSize:"$label2",fontWeight:500,lineHeight:"18px",color:"$grayShades60"},".pu-point-address__icon":{cursor:"pointer",padding:0,width:"$6",height:"$6",border:"none",backgroundColor:"transparent"},".pu-point-location":{backgroundColor:"$blueShades10",height:"40px",padding:"$3",display:"flex",alignItems:"center",gap:"$3",color:"$blueShades120"}}),p=t.forwardRef(({pickupPoint:o,onConfirmPickup:e,onChangePUPoint:a,placeholder:h=""},g)=>{const u=_(g),{name:C,address:m,city:f,postalCode:P,specificPUPoint:d}=o,[s,x]=t.useState(o),b=t.useCallback(()=>{e&&e(s)},[s]),w=t.useCallback($=>{x(k=>({...k,specificPUPoint:$}))},[]);return n(H,{ref:u,children:[n("div",{className:"pu-point-address",children:[n("div",{children:[i("div",{className:"pu-point-address__name",children:C}),n("div",{className:"pu-point-address__address",children:[m,", ",f," ",P]})]}),i(r,{className:"pu-point-address__icon",onPress:()=>{a&&a()},children:i("svg",{width:"18",height:"21",viewBox:"0 0 18 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M3.414 14.5L13.556 4.35799L12.142 2.94399L2 13.086V14.5H3.414ZM4.243 16.5H0V12.257L11.435 0.821992C11.6225 0.634521 11.8768 0.529205 12.142 0.529205C12.4072 0.529205 12.6615 0.634521 12.849 0.821992L15.678 3.65099C15.8655 3.83852 15.9708 4.09283 15.9708 4.35799C15.9708 4.62316 15.8655 4.87746 15.678 5.06499L4.243 16.5ZM0 18.5H18V20.5H0V18.5Z",fill:"#008BF8"})})})]}),n("div",{className:"pu-point-label",children:[i("div",{children:"Set a specific pickup point"}),i(v,{})]}),d?n("div",{className:"pu-point-location",children:[i("svg",{width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M6.07416 14.3588C6.04885 14.3635 6.02299 14.365 5.99735 14.3625C5.8928 14.3524 5.79176 14.3199 5.7017 14.2672C4.09509 13.2699 2.69008 12.0009 1.55487 10.5217C0.595114 9.27986 0.0526721 7.78613 2.58066e-05 6.24014C-0.0030831 5.20954 0.274756 4.19614 0.805894 3.30076C1.33703 2.40538 2.10295 1.65926 3.02743 1.13663C3.94415 0.623425 4.98786 0.357022 6.0488 0.365427C7.10975 0.373833 8.14874 0.656736 9.05653 1.18439C9.96286 1.72763 10.7082 2.48606 11.2208 3.38655C11.7367 4.29343 12.0048 5.31122 11.9999 6.34473C11.8316 8.46416 10.8578 10.4501 9.26396 11.9242C8.4021 12.8039 7.43579 13.5834 6.38483 14.2466C6.28838 14.3003 6.18338 14.3382 6.07416 14.3588ZM5.99398 4.35751C5.72584 4.35717 5.46035 4.40844 5.21318 4.5083C4.966 4.60816 4.74216 4.75459 4.55485 4.93894C4.26736 5.21989 4.07197 5.57572 3.9929 5.96232C3.91383 6.34893 3.95454 6.74933 4.10999 7.11392C4.25928 7.47767 4.51887 7.78994 4.85512 8.01021C5.19136 8.23048 5.58873 8.3486 5.99569 8.34924H6.01027C6.27642 8.3496 6.53995 8.29879 6.78534 8.19978C7.03074 8.10077 7.25303 7.95558 7.43911 7.77275C7.67553 7.53895 7.8496 7.25369 7.94649 6.94129C8.04338 6.62888 8.06021 6.2986 7.99555 5.9786C7.93089 5.65859 7.78666 5.35836 7.57515 5.10348C7.36364 4.8486 7.09112 4.64664 6.78083 4.51481C6.53237 4.41164 6.26465 4.35813 5.99398 4.35751Z",fill:"#0142AF"})}),d]}):i(S,{placeholder:h,onChange:w,css:{fontWeight:400,fontSize:"$body3",lineHeight:"20px","&::placeholder":{fontWeight:400,fontSize:"$body3",lineHeight:"20px"}}}),i(r,{css:{height:"$12",maxWidth:"420px",minWidth:"345px",margin:"auto"},onPress:b,children:"Confirm pick up"})]})});p.displayName="ConfirmPUPoint";const c=p,Z=()=>i(l,{css:{backgroundColor:"lightgray",width:"400px",padding:"10px"},children:i(c,{pickupPoint:{name:"Comfort Building",address:"383 Sin Ming Drive",city:"Singapore",street:"",postalCode:"575717",specificPUPoint:"Comfort Transporation Lobby"},onConfirmPickup:e=>{console.log(e)},onChangePUPoint:()=>{}})}),j=()=>i(l,{css:{backgroundColor:"lightgray",width:"400px",padding:"10px"},children:i(c,{pickupPoint:{name:"Comfort Building",address:"383 Sin Ming Drive",city:"Singapore",street:"",postalCode:"575717",specificPUPoint:""},onConfirmPickup:e=>{console.log(e)},placeholder:"E.g. Lobby, side entrance, etc"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Z as Default,j as WithoutSpecificPUPoint};
