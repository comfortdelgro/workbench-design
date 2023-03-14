import{m as n}from"./index-c5a2327f.js";import{a as r,j as e,R as c}from"./index-7edb77fa.js";import{a as o}from"./index-0357f7e1.js";import{C as i}from"./components-93d0bf0d.js";import{D as a}from"./index-38763df2.js";import"./module-3f95a012.js";import"./module-fd4388ac.js";import"./_define_property-1764bf98.js";import"./module-f4aada32.js";import"./module-a56e2f8c.js";import"./real-module-e3e6000d.js";import"./module-19b13009.js";import"./module-8a8221e0.js";import"./module-a04ef237.js";import"./module-986c7f6a.js";import"./module-0f8eb9c0.js";import"./module-f9f145c5.js";import"./module-3ff31c3b.js";import"./module-57ed0816.js";import"./module-84219573.js";import"./use-dom-ref-2d1a83ce.js";import"./module-9e43f3ec.js";const w=()=>r(i,{children:[e("h3",{children:"Flag"}),e(a.Flag,{isRequired:!0,label:"List of country",placeholder:"Choose a country",onPhoneChange:d=>console.log(d)})]}),B=()=>{const[d,l]=c.useState("cat");return r(i,{children:[e("h3",{children:"Controlled"}),r(a.Select,{isRequired:!0,label:"Favorite Animal",placeholder:"Choose an animal",isDisabled:!0,selectedKey:d,onSelectionChange:t=>l(t),children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda Red Panda Red Panda Red Panda Red Panda"},"red panda"),e(a.Item,{leftIcon:e(o,{icon:n}),type:"color",rightColor:"red",children:"Cat Red Panda Red Panda Red Panda Red Panda Red Panda"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"UnControlled"}),r(a.Select,{label:"Favorite Animal",placeholder:"Choose an animal",defaultSelectedKey:"cat",children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda"},"red panda"),e(a.Item,{type:"color",rightColor:"red",children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"Erorr"}),r(a.Select,{label:"Favorite Animal",placeholder:"Choose an animal",isErrored:!0,errorMessage:"Error Message",children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda"},"red panda"),e(a.Item,{type:"color",rightColor:"red",children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"With Header"}),r(a.Select,{label:"Favorite Animal",placeholder:"Choose an animal",headerTitle:"Filter title",children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"Loading"}),r(a.Select,{label:"Favorite Animal",placeholder:"Choose an animal",isLoading:!0,children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"With Icon"}),r(a.Select,{label:"Favorite Animal",placeholder:"Choose an animal",icon:e(o,{icon:n}),children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]})]})},L=()=>{const[d,l]=c.useState("cat");return r(i,{children:[e("h3",{children:"Controlled"}),r(a.ComboBox,{isRequired:!0,label:"Favorite Animal",placeholder:"Choose an animal",selectedKey:d,onSelectionChange:t=>l(t),children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda"},"red panda"),e(a.Item,{type:"color",rightColor:"red",children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"UnControlled"}),r(a.ComboBox,{label:"Favorite Animal",placeholder:"Choose an animal",children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda"},"red panda"),e(a.Item,{type:"color",rightColor:"red",children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"Erorr"}),r(a.ComboBox,{label:"Favorite Animal",placeholder:"Choose an animal",isErrored:!0,errorMessage:"Error Message",children:[e(a.Item,{leftIcon:e(o,{icon:n}),children:"Red Panda"},"red panda"),e(a.Item,{type:"color",rightColor:"red",children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"With Header"}),r(a.ComboBox,{label:"Favorite Animal",placeholder:"Choose an animal",headerTitle:"Filter title",children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"Loading"}),r(a.ComboBox,{label:"Favorite Animal",placeholder:"Choose an animal",isLoading:!0,children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]}),e("h3",{children:"With Icon"}),r(a.ComboBox,{label:"Favorite Animal",placeholder:"Choose an animal",icon:e(o,{icon:n}),children:[e(a.Item,{children:"Red Panda"},"red panda"),e(a.Item,{children:"Cat"},"cat"),e(a.Item,{children:"Dog"},"dog"),e(a.Item,{children:"Aardvark"},"aardvark"),e(a.Item,{children:"Kangaroo"},"kangaroo"),e(a.Item,{children:"Snake"},"snake")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{L as ComboBox,w as Flag,B as Select};
