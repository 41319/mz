(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[128],{358:function(e,a,t){"use strict";t.r(a);t(0);var c=t(448),s=t(450),r=t(444),n=t(87),i=t(431),l=t(432),o=t(429),d=t(9);a.default=function(){var e="Datatables",a="Lightweight and extensible data tables for React";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{title:e,description:a}),Object(d.jsx)(c.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(d.jsxs)("div",{className:"page-title-container",children:[Object(d.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(d.jsx)(l.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/plugins",text:"Plugins"}]})]}),Object(d.jsx)(r.a,{className:"mb-5",body:!0,children:Object(d.jsx)(r.a.Text,{children:a})})]})})}),Object(d.jsxs)(c.a,{xs:"1",sm:"2",xl:"3",className:"g-2",children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(o.a,{icon:"layout-3",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/interface/plugins/datatables/boxed-variations",className:"heading stretched-link d-block",children:"Boxed Variations"}),Object(d.jsx)("div",{className:"text-muted",children:"Various boxed version implementations."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(o.a,{icon:"layout-3",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/interface/plugins/datatables/editable-boxed",className:"heading stretched-link d-block",children:"Editable Boxed"}),Object(d.jsx)("div",{className:"text-muted",children:"Boxed version with edit, delete and add."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(o.a,{icon:"layout-3",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/interface/plugins/datatables/editable-rows",className:"heading stretched-link d-block",children:"Editable Rows"}),Object(d.jsx)("div",{className:"text-muted",children:"Separate rows with edit, delete and add."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(o.a,{icon:"layout-3",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/interface/plugins/datatables/server-side",className:"heading stretched-link d-block",children:"Server Side"}),Object(d.jsx)("div",{className:"text-muted",children:"Server side api implementation."})]})]})})})]})]})}},431:function(e,a,t){"use strict";var c=t(139),s=(t(0),t(9));a.a=function(e){var a=e.title,t=void 0===a?"":a,r=e.description,n=void 0===r?"":r,i=e.children,l=void 0===i?null:i;return Object(s.jsxs)(c.a,{children:[t&&Object(s.jsx)("title",{children:t}),n&&Object(s.jsx)("meta",{name:"description",content:n}),l&&l]})}},432:function(e,a,t){"use strict";t(0);var c=t(953),s=t(87),r=t(2),n=t(9);a.a=function(e){var a=e.items,t=void 0===a?[{to:"/",text:"Home"}]:a,i=e.basePath,l=void 0===i?r.a.APP:i;return Object(n.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:t.map((function(e,a){return Object(n.jsx)(c.a.Item,{linkAs:s.b,linkProps:{to:"".concat(l).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(a))}))})}},435:function(e,a,t){"use strict";var c=t(0),s=c.createContext(null);s.displayName="CardHeaderContext",a.a=s},444:function(e,a,t){"use strict";var c=t(5),s=t(426),r=t(425),n=t.n(r),i=t(0),l=t(427),o=t(434),d=t(442),b=t(9),j=["bsPrefix","className","variant","as"],x=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.variant,o=e.as,d=void 0===o?"img":o,x=Object(s.a)(e,j),O=Object(l.c)(t,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:a,className:n()(i?"".concat(O,"-").concat(i):O,r)},x))}));x.displayName="CardImg";var O=x,m=t(435),h=["bsPrefix","className","as"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,d=void 0===o?"div":o,j=Object(s.a)(e,h),x=Object(l.c)(t,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return Object(b.jsx)(m.a.Provider,{value:O,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:a},j),{},{className:n()(r,x)}))})}));u.displayName="CardHeader";var f=u,v=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(d.a)("h5"),N=Object(d.a)("h6"),g=Object(o.a)("card-body"),y=Object(o.a)("card-title",{Component:p}),w=Object(o.a)("card-subtitle",{Component:N}),P=Object(o.a)("card-link",{Component:"a"}),k=Object(o.a)("card-text",{Component:"p"}),C=Object(o.a)("card-footer"),B=Object(o.a)("card-img-overlay"),R=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.bg,o=e.text,d=e.border,j=e.body,x=void 0!==j&&j,O=e.children,m=e.as,h=void 0===m?"div":m,u=Object(s.a)(e,v),f=Object(l.c)(t,"card");return Object(b.jsx)(h,Object(c.a)(Object(c.a)({ref:a},u),{},{className:n()(r,f,i&&"bg-".concat(i),o&&"text-".concat(o),d&&"border-".concat(d)),children:x?Object(b.jsx)(g,{children:O}):O}))}));R.displayName="Card";a.a=Object.assign(R,{Img:O,Title:y,Subtitle:w,Body:g,Link:P,Text:k,Header:f,Footer:C,ImgOverlay:B})},448:function(e,a,t){"use strict";var c=t(5),s=t(426),r=t(425),n=t.n(r),i=t(0),l=t(427),o=t(9),d=["bsPrefix","className","as"],b=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,b=void 0===i?"div":i,j=Object(s.a)(e,d),x=Object(l.c)(t,"row"),O=Object(l.a)(),m=Object(l.b)(),h="".concat(x,"-cols"),u=[];return O.forEach((function(e){var a,t=j[e];delete j[e],a=null!=t&&"object"===typeof t?t.cols:t;var c=e!==m?"-".concat(e):"";null!=a&&u.push("".concat(h).concat(c,"-").concat(a))})),Object(o.jsx)(b,Object(c.a)(Object(c.a)({ref:a},j),{},{className:n.a.apply(void 0,[r,x].concat(u))}))}));b.displayName="Row",a.a=b},450:function(e,a,t){"use strict";var c=t(111),s=t(5),r=t(426),n=t(425),i=t.n(n),l=t(0),o=t(427),d=t(9),b=["as","bsPrefix","className"],j=["className"];var x=l.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,n=Object(r.a)(e,b);t=Object(o.c)(t,"col");var l=Object(o.a)(),d=Object(o.b)(),j=[],x=[];return l.forEach((function(e){var a,c,s,r=n[e];delete n[e],"object"===typeof r&&null!=r?(a=r.span,c=r.offset,s=r.order):a=r;var i=e!==d?"-".concat(e):"";a&&j.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=s&&x.push("order".concat(i,"-").concat(s)),null!=c&&x.push("offset".concat(i,"-").concat(c))})),[Object(s.a)(Object(s.a)({},n),{},{className:i.a.apply(void 0,[c].concat(j,x))}),{as:a,bsPrefix:t,spans:j}]}(e),n=Object(c.a)(t,2),l=n[0],x=l.className,O=Object(r.a)(l,j),m=n[1],h=m.as,u=void 0===h?"div":h,f=m.bsPrefix,v=m.spans;return Object(d.jsx)(u,Object(s.a)(Object(s.a)({},O),{},{ref:a,className:i()(x,!v.length&&f)}))}));x.displayName="Col",a.a=x}}]);