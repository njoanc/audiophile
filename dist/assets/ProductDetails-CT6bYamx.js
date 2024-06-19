import{r as h,j as e,f as N,e as f,p,g as y,u as v,P as w}from"./index-CUqJ_sM4.js";import{u as I}from"./useDispatch-g-WFf2G1.js";const k=({product:t,setCartItems:a,setCartItemCount:i,getPrice:b})=>{const[l,m]=h.useState(1),x=I(),s=d=>{const r=parseInt(d.target.value);m(r);const c=JSON.parse(localStorage.getItem("cartItems"))||[],o=c.findIndex(j=>j.slug===t.slug);o!==-1&&(c[o].quantity=r,localStorage.setItem("cartItems",JSON.stringify(c)))},g=()=>{x(N({...t,quantity:l,cartImage:t.image.cart}));const d=JSON.parse(localStorage.getItem("cartItems"))||[],r=d.findIndex(c=>c.slug===t.slug);r!==-1?d[r].quantity+=l:d.push({...t,quantity:l,cartImage:t.image.cart}),localStorage.setItem("cartItems",JSON.stringify(d)),a(d),i(d.reduce((c,o)=>c+o.quantity,0))},n=()=>{m(l+1)},u=()=>{l>1&&m(l-1)};return e.jsxs("div",{className:"flex justify-between gap-4 max-w-[296px]",children:[e.jsxs("div",{className:"flex gap-[20px] place-items-center bg-paleSilver mx-auto px-6",children:[e.jsx("button",{type:"button",className:"opacity-25 py-4 focus:outline-none ",onClick:u,children:"-"}),e.jsx("input",{className:"bg-paleSilver py-4 w-4 text-center focus:outline-none text-subtitle",type:"number",min:"1",value:l,onChange:s}),e.jsx("button",{type:"button",className:"opacity-25 py-4 focus:outline-none ",onClick:n,children:"+"})]}),e.jsx("button",{className:"bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]",onClick:g,children:"Add To Cart"})]})},$=()=>{const t=[];for(;t.length<3;){const a=Math.floor(Math.random()*p.length),i=p[a];t.includes(i)||t.push(i)}return e.jsxs("section",{className:"container mx-auto text-center mb-[120px] lg:mb-[120px] lg:max-w-[1110px]",children:[e.jsx("h3",{className:"uppercase text-h5 md:text-h3 mb-8",children:"You May Also Like"}),e.jsx("div",{className:" flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-[11px]",children:t.map(a=>e.jsxs("div",{className:"flex flex-col gap-8 justify-between",children:[e.jsxs("div",{children:[e.jsx("img",{className:"rounded-lg mx-auto w-1/2 object-cover md:hidden",src:`../../../${a.image.mobile}`,alt:""}),e.jsx("img",{className:"rounded-lg mx-auto max-h-[318px] object-cover hidden md:block lg:hidden",src:`../../../${a.image.tablet}`,alt:""}),e.jsx("img",{className:"rounded-lg mx-auto object-cover hidden lg:block",src:`../../../${a.image.desktop}`,alt:""})]}),e.jsx("h5",{className:"text-h5",children:a.name}),e.jsx("div",{children:e.jsx(f,{to:`/products/${a.slug}`,children:"See Product"})})]},a.id))})]})},P=({setCartItemCount:t})=>{const{slug:a}=y(),i=v(),[b,l]=h.useState(1),[m,x]=h.useState([]),s=p.find(n=>n.slug===a),g=s.price*b;return s?e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50",children:e.jsx("a",{className:"cursor-pointer text-body hover:underline",onClick:()=>i(-1),children:"Go Back"})}),e.jsxs("div",{className:"container mx-auto flex flex-col gap-8 md:max-w-[689px] md:grid md:grid-cols-2 lg:max-w-[1110px] md:gap-[69px] lg:gap-32 md:items-center md:mb-[120px]",children:[e.jsxs("div",{children:[e.jsx("img",{className:"mx-auto rounded-lg md:hidden",src:`/${s.image.mobile}`,alt:""}),e.jsx("img",{className:"mx-auto w-full h-auto object-cover rounded-lg hidden md:block lg:hidden",src:`/${s.image.tablet}`,alt:""}),e.jsx("img",{className:"mx-auto rounded-lg hidden lg:block",src:`/${s.image.desktop}`,alt:""})]}),e.jsxs("div",{className:"mx-auto flex flex-col gap-6 mb-[88px] md:mb-0",children:[e.jsx("h6",{className:"text-newProduct uppercase text-brightOrange",children:s.new&&"New Product"}),e.jsx("h3",{className:"text-h4 md:text-h2 uppercase  lg:mx-0 lg:w-full",children:s.name}),e.jsx("p",{className:"text-body opacity-50 md:max-w-[572px]",children:s.description}),e.jsxs("h6",{className:"text-h6",children:["$",g]}),e.jsx(k,{product:s,cartItems:m,setCartItems:x,setCartItemCount:t})]})]}),e.jsxs("div",{className:"container mx-auto lg:flex lg:gap-[125px] lg:max-w-[1110px]",children:[e.jsxs("div",{className:"container mx-auto mb-[88px] md:max-w-[689px] lg:max-w-[1110px]",children:[e.jsx("h2",{className:"uppercase text-h5 md:text-h3 mb-6",children:"Features"}),e.jsx("p",{className:"text-body opacity-50",children:s.features})]}),e.jsxs("div",{className:"container mx-auto mb-[88px] md:mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-2 lg:flex lg:flex-col",children:[e.jsx("h3",{className:"uppercase text-h5 md:text-h3 mb-6",children:"In the box"}),e.jsx("ul",{className:"flex flex-col gap-2",children:s.includes.map((n,u)=>e.jsxs("li",{className:"flex items-center gap-6",children:[e.jsx("span",{className:"text-mobileMenu text-brightOrange",children:n.quantity}),e.jsx("span",{className:"text-body opacity-50",children:n.item})]},u))})]})]}),e.jsxs("div",{className:"container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5",children:[e.jsxs("div",{className:"flex flex-col justify-between gap-5",children:[e.jsxs("div",{children:[e.jsx("img",{className:"rounded-lg md:hidden",src:`/${s.gallery.first.mobile}`,alt:"mobile"}),e.jsx("img",{className:"rounded-lg hidden md:block lg:hidden",src:`/${s.gallery.first.tablet}`,alt:"tablet"}),e.jsx("img",{className:"rounded-lg hidden lg:block",src:`/${s.gallery.first.desktop}`,alt:"desktop"})]}),e.jsxs("div",{className:"img2",children:[e.jsx("img",{className:"rounded-lg md:hidden",src:`/${s.gallery.second.mobile}`,alt:"mobile"}),e.jsx("img",{className:"rounded-lg hidden md:block lg:hidden",src:`/${s.gallery.second.tablet}`,alt:"tablet"}),e.jsx("img",{className:"rounded-lg hidden lg:block",src:`/${s.gallery.second.desktop}`,alt:"desktop"})]})]}),e.jsxs("div",{children:[e.jsx("img",{className:"rounded-lg md:hidden",src:`/${s.gallery.third.mobile}`,alt:"mobile"}),e.jsx("img",{className:"rounded-lg hidden md:block lg:hidden",src:`/${s.gallery.third.tablet}`,alt:"tablet"}),e.jsx("img",{className:"rounded-lg hidden lg:block",src:`/${s.gallery.third.desktop}`,alt:"desktop"})]})]})]}),e.jsx($,{}),e.jsx(w,{})]}):e.jsx("div",{children:"Product not found"})};export{P as default};
