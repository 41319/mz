(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[117],{372:function(e,t,a){"use strict";a.r(t);a(0);var c=a(450),n=a(446),r=a(23),o=a(433),i=a(434),l=a(494),s=a(10);t.default=function(){var e="Sidebar Menu",t="A secondary in page menu that blends into the mobile menu for smaller screens. Can be used with both horizontal and vertical menu types.";return Object(l.a)({placement:r.d.Horizontal,useSidebar:!0}),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,{title:e,description:t}),Object(s.jsx)(c.a,{children:Object(s.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(s.jsxs)("div",{className:"page-title-container",children:[Object(s.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(s.jsx)(i.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/content",text:"Content"},{to:"interface/content/menu",text:"Menu"}]})]}),Object(s.jsx)(n.a,{className:"mb-5",body:!0,children:Object(s.jsx)(n.a.Text,{children:t})})]})})]})}},433:function(e,t,a){"use strict";var c=a(139),n=(a(0),a(10));t.a=function(e){var t=e.title,a=void 0===t?"":t,r=e.description,o=void 0===r?"":r,i=e.children,l=void 0===i?null:i;return Object(n.jsxs)(c.a,{children:[a&&Object(n.jsx)("title",{children:a}),o&&Object(n.jsx)("meta",{name:"description",content:o}),l&&l]})}},434:function(e,t,a){"use strict";a(0);var c=a(957),n=a(87),r=a(2),o=a(10);t.a=function(e){var t=e.items,a=void 0===t?[{to:"/",text:"Home"}]:t,i=e.basePath,l=void 0===i?r.a.APP:i;return Object(o.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:a.map((function(e,t){return Object(o.jsx)(c.a.Item,{linkAs:n.b,linkProps:{to:"".concat(l).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},437:function(e,t,a){"use strict";var c=a(0),n=c.createContext(null);n.displayName="CardHeaderContext",t.a=n},446:function(e,t,a){"use strict";var c=a(5),n=a(428),r=a(427),o=a.n(r),i=a(0),l=a(429),s=a(436),b=a(444),d=a(10),u=["bsPrefix","className","variant","as"],j=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,s=e.as,b=void 0===s?"img":s,j=Object(n.a)(e,u),O=Object(l.c)(a,"card-img");return Object(d.jsx)(b,Object(c.a)({ref:t,className:o()(i?"".concat(O,"-").concat(i):O,r)},j))}));j.displayName="CardImg";var O=j,m=a(437),v=["bsPrefix","className","as"],f=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,b=void 0===s?"div":s,u=Object(n.a)(e,v),j=Object(l.c)(a,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(d.jsx)(m.a.Provider,{value:O,children:Object(d.jsx)(b,Object(c.a)(Object(c.a)({ref:t},u),{},{className:o()(r,j)}))})}));f.displayName="CardHeader";var p=f,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),y=Object(b.a)("h6"),N=Object(s.a)("card-body"),g=Object(s.a)("card-title",{Component:h}),C=Object(s.a)("card-subtitle",{Component:y}),k=Object(s.a)("card-link",{Component:"a"}),P=Object(s.a)("card-text",{Component:"p"}),w=Object(s.a)("card-footer"),E=Object(s.a)("card-img-overlay"),S=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.bg,s=e.text,b=e.border,u=e.body,j=void 0!==u&&u,O=e.children,m=e.as,v=void 0===m?"div":m,f=Object(n.a)(e,x),p=Object(l.c)(a,"card");return Object(d.jsx)(v,Object(c.a)(Object(c.a)({ref:t},f),{},{className:o()(r,p,i&&"bg-".concat(i),s&&"text-".concat(s),b&&"border-".concat(b)),children:j?Object(d.jsx)(N,{children:O}):O}))}));S.displayName="Card";t.a=Object.assign(S,{Img:O,Title:g,Subtitle:C,Body:N,Link:k,Text:P,Header:p,Footer:w,ImgOverlay:E})},450:function(e,t,a){"use strict";var c=a(5),n=a(428),r=a(427),o=a.n(r),i=a(0),l=a(429),s=a(10),b=["bsPrefix","className","as"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"div":i,u=Object(n.a)(e,b),j=Object(l.c)(a,"row"),O=Object(l.a)(),m=Object(l.b)(),v="".concat(j,"-cols"),f=[];return O.forEach((function(e){var t,a=u[e];delete u[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==m?"-".concat(e):"";null!=t&&f.push("".concat(v).concat(c,"-").concat(t))})),Object(s.jsx)(d,Object(c.a)(Object(c.a)({ref:t},u),{},{className:o.a.apply(void 0,[r,j].concat(f))}))}));d.displayName="Row",t.a=d},494:function(e,t,a){"use strict";var c=a(0),n=a(88),r=a(141),o=a(142);t.a=function(e){var t=e.placement,a=void 0===t?null:t,i=e.behaviour,l=void 0===i?null:i,s=e.layout,b=void 0===s?null:s,d=e.radius,u=void 0===d?null:d,j=e.color,O=void 0===j?null:j,m=e.navColor,v=void 0===m?null:m,f=e.useSidebar,p=void 0===f?null:f,x=e.pinEnable,h=void 0===x?null:x,y=e.fullpage,N=void 0===y?null:y,g=e.breakpoints,C=void 0===g?null:g,k=Object(n.b)(),P=Object(n.c)((function(e){return e.menu})),w=P.placement,E=P.behaviour,S=P.breakpoints,H=P.pinButtonEnable,A=P.useSidebar,I=Object(n.c)((function(e){return e.settings})),R=I.layout,B=I.radius,M=I.color,T=I.navColor,z={placement:a||w,behaviour:l||E,layout:b||R,radius:u||B,color:O||M,navColor:v||T,breakpoints:C||S,useSidebar:p||A};return Object(c.useEffect)((function(){var e={placement:!1,behaviour:!1,layout:!1,radius:!1,color:!1,navColor:!1,breakpoints:!1,pinEnable:!1,useSidebar:!1};return a&&(e.placement=!0,k(Object(r.k)(a))),l&&(e.behaviour=!0,k(Object(r.d)(l))),b&&(e.layout=!0,k(Object(o.d)(b))),u&&(e.radius=!0,k(Object(o.f)(u))),O&&(e.color=!0,k(Object(o.c)(O))),v&&(e.navColor=!0,k(Object(o.e)(v))),C&&(e.breakpoints=!0,k(Object(r.f)(C))),null!==h&&(e.pinEnable=!0,k(Object(r.j)(h))),null!==p&&(e.useSidebar=!0,k(Object(r.m)(p))),null!==N&&(e.fullpage=!0,document.documentElement.setAttribute("data-fullpage",N)),function(){e.placement&&k(Object(r.k)(w)),e.behaviour&&k(Object(r.d)(E)),e.layout&&k(Object(o.g)()),e.radius&&k(Object(o.f)(B)),e.color&&k(Object(o.c)(M)),e.navColor&&k(Object(o.e)(T)),e.breakpoints&&k(Object(r.n)()),e.pinEnable&&k(Object(r.j)(H)),e.useSidebar&&k(Object(r.o)()),e.fullpage&&document.documentElement.removeAttribute("data-fullpage")}}),[]),z}}}]);