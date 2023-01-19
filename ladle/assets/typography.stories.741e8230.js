import{C as c}from"./components.05873a2d.js";import{R as b,s as g,j as e,a as y}from"./index.2729102d.js";const p=l=>{const{css:d={},children:o,variant:a="body1",weight:t="none",component:r}=l,h=b.useMemo(()=>r||"p",[a]),m=g(h,{width:"100%",padding:0,margin:0,variants:{weight:{none:{},bold:{fontWeight:"$bold"},emphasis:{fontWeight:"$semibold"}},variant:{body1:{fontSize:"$body1",lineHeight:"1.875rem"},body2:{fontSize:"$body2",lineHeight:"1.5rem"},body3:{fontSize:"$body3",lineHeight:"1.3125rem"}}}});return e(m,{css:d,variant:a,weight:t,children:o})},v=p,f=l=>{const{css:d={},children:o,variant:a="display1",component:t}=l,r=b.useMemo(()=>{if(t)return t;switch(a){case"display1":return"h1";case"display2":return"h2";case"display3":return"h3"}},[a]),h=g(r,{width:"100%",padding:0,margin:0,variants:{variant:{display1:{fontSize:"$display1",fontWeight:"$bold",lineHeight:"5.25rem"},display2:{fontSize:"$display2",fontWeight:"$bold",lineHeight:"4.5rem"},display3:{fontSize:"$display3",fontWeight:"$bold",lineHeight:"3.75rem"}}}});return e(h,{css:d,variant:a,children:o})},$=f,u=l=>{const{css:d={},children:o,variant:a="header1",component:t}=l,r=b.useMemo(()=>{if(t)return t;switch(a){case"header0":return"h1";case"header1":return"h2";case"header2":return"h3";case"header3":return"h4";case"header4":return"h5";case"header5":return"h6";default:return"p"}},[a]),h=g(r,{width:"100%",padding:0,margin:0,variants:{variant:{header0:{fontSize:"$header0",fontWeight:"$semibold",lineHeight:"3.375rem"},header1:{fontSize:"$header1",fontWeight:"$semibold",lineHeight:"3rem"},header2:{fontSize:"$header2",fontWeight:"$semibold",lineHeight:"2.625rem"},header3:{fontSize:"$header3",fontWeight:"$semibold",lineHeight:"2.25rem"},header4:{fontSize:"$header4",fontWeight:"$semibold",lineHeight:"1.875rem"},header5:{fontSize:"$header5",fontWeight:"$semibold",lineHeight:"1.5rem"}}}});return e(h,{css:d,variant:a,children:o})},w=u,H=l=>{const{css:d={},children:o,variant:a="label1",weight:t="none",component:r}=l,h=b.useMemo(()=>r||"p",[a]),m=g(h,{width:"100%",padding:0,margin:0,variants:{weight:{none:{},bold:{fontWeight:"$bold"},emphasis:{fontWeight:"$semibold"},light:{fontWeight:"$light"}},variant:{label1:{fontSize:"$label1",lineHeight:"1.3125rem"},label2:{fontSize:"$label2",lineHeight:"1.125rem"},label3:{fontSize:"$label3",lineHeight:"0.9375rem"}}}});return e(m,{css:d,variant:a,weight:t,children:o})},L=H,S=l=>{const{css:d={},children:o,weight:a="none",variant:t="link1"}=l,r=g("a",{width:"100%",padding:0,margin:0,color:"#009EDA",textDecoration:"underline",variants:{weight:{none:{},emphasis:{fontWeight:"$bold"}},variant:{link1:{fontSize:"1.25rem",fontWeight:"$semibold",lineHeight:"1.875rem"},link2:{fontSize:"1rem",fontWeight:"$medium",lineHeight:"1.5rem"},link3:{fontSize:"0.875rem",fontWeight:"$medium",lineHeight:"1.3125rem"}}}});return e(r,{css:d,variant:t,weight:a,children:o})},k=S,s={Body:v,Display:$,Header:w,Label:L,Link:k};s.Body.displayName="Typography.Body";s.Display.displayName="Typography.Display";s.Header.displayName="Typography.Header";s.Label.displayName="Typography.Label";s.Link.displayName="Typography.Link";const i=s,n="The quick fox",B=()=>y(c,{children:[e(i.Display,{variant:"display1",children:n}),e(i.Display,{variant:"display2",children:n}),e(i.Display,{variant:"display3",children:n})]}),D=()=>y(c,{children:[e(i.Header,{variant:"header0",children:n}),e(i.Header,{variant:"header1",children:n}),e(i.Header,{variant:"header2",children:n}),e(i.Header,{variant:"header3",children:n}),e(i.Header,{variant:"header4",children:n}),e(i.Header,{variant:"header5",children:n})]}),T=()=>y(c,{children:[e(i.Body,{variant:"body1",children:n}),e(i.Body,{variant:"body1",weight:"emphasis",children:n}),e(i.Body,{variant:"body1",weight:"bold",children:n}),e(i.Body,{variant:"body2",children:n}),e(i.Body,{variant:"body2",weight:"emphasis",children:n}),e(i.Body,{variant:"body2",weight:"bold",children:n}),e(i.Body,{variant:"body3",children:n}),e(i.Body,{variant:"body3",weight:"emphasis",children:n}),e(i.Body,{variant:"body3",weight:"bold",children:n})]}),x=()=>y(c,{children:[e(i.Label,{variant:"label1",children:n}),e(i.Label,{variant:"label1",weight:"emphasis",children:n}),e(i.Label,{variant:"label1",weight:"bold",children:n}),e(i.Label,{variant:"label1",weight:"light",children:n}),e(i.Label,{variant:"label2",children:n}),e(i.Label,{variant:"label2",weight:"emphasis",children:n}),e(i.Label,{variant:"label2",weight:"bold",children:n}),e(i.Label,{variant:"label2",weight:"light",children:n}),e(i.Label,{variant:"label3",children:n}),e(i.Label,{variant:"label3",weight:"emphasis",children:n}),e(i.Label,{variant:"label3",weight:"bold",children:n}),e(i.Label,{variant:"label3",weight:"light",children:n})]}),N=()=>y(c,{children:[e(i.Link,{variant:"link1",children:n}),e(i.Link,{variant:"link2",children:n}),e(i.Link,{variant:"link3",children:n}),e(i.Link,{variant:"link3",weight:"emphasis",children:n})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Body,B as Display,D as Header,x as Label,N as Link};
