import{p as i,j as e,P as o}from"./index-CUqJ_sM4.js";import{P as a,a as d}from"./ProductPreviewCard-tCijJiy9.js";const m=()=>{const t=i.filter(s=>s.category==="headphones");return e.jsxs("div",{children:[e.jsx(a,{title:"Headphones"}),e.jsx("div",{className:"flex flex-col gap-[120px] lg:mb-[120px]",children:t.sort((s,r)=>r.new-s.new||s.id-r.id).map((s,r)=>e.jsx(d,{image:s.categoryImage,name:s.name,description:s.description,newProduct:s.new,id:s.id,slug:s.slug,isReversed:r%2===1},s.id))}),e.jsx(o,{})]})};export{m as default};