(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[88],{343:function(e,t,a){"use strict";a.r(t);a(0);var c=a(448),s=a(450),n=a(444),r=a(507),o=a(431),i=a(432),l=a(441),b=a(9);t.default=function(){var e="Close Button",t="A generic close button for dismissing content like modals and alerts.";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{title:e,description:t}),Object(b.jsxs)(c.a,{children:[Object(b.jsxs)(s.a,{children:[Object(b.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(b.jsxs)("div",{className:"page-title-container",children:[Object(b.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(b.jsx)(i.a,{items:[{to:"",text:"Home"},{to:"interface",title:"Interface"},{to:"interface/components",title:"Components"}]})]}),Object(b.jsx)(n.a,{className:"mb-5",body:!0,children:Object(b.jsx)(n.a.Text,{children:t})})]}),Object(b.jsxs)("section",{className:"scroll-section",id:"default",children:[Object(b.jsx)("h2",{className:"small-title",children:"Default"}),Object(b.jsx)(n.a,{body:!0,className:"mb-5",children:Object(b.jsx)(r.a,{})})]}),Object(b.jsxs)("section",{className:"scroll-section",id:"colors",children:[Object(b.jsx)("h2",{className:"small-title",children:"Colors"}),Object(b.jsxs)(n.a,{body:!0,className:"mb-5",children:[Object(b.jsx)(r.a,{className:"text-primary"})," ",Object(b.jsx)(r.a,{className:"text-secondary"})," ",Object(b.jsx)(r.a,{className:"text-tertiary"})," ",Object(b.jsx)(r.a,{className:"text-quaternary"})," ",Object(b.jsx)(r.a,{className:"text-body"})," ",Object(b.jsx)(r.a,{className:"text-alternate"})," ",Object(b.jsx)(r.a,{className:"text-muted"})," ",Object(b.jsx)(r.a,{className:"text-separator"})]})]})]}),Object(b.jsx)(l.a,{items:[{id:"title",text:"Title"},{id:"default",text:"Default"},{id:"colors",text:"Colors"}]})]})]})}},431:function(e,t,a){"use strict";var c=a(139),s=(a(0),a(9));t.a=function(e){var t=e.title,a=void 0===t?"":t,n=e.description,r=void 0===n?"":n,o=e.children,i=void 0===o?null:o;return Object(s.jsxs)(c.a,{children:[a&&Object(s.jsx)("title",{children:a}),r&&Object(s.jsx)("meta",{name:"description",content:r}),i&&i]})}},432:function(e,t,a){"use strict";a(0);var c=a(953),s=a(87),n=a(2),r=a(9);t.a=function(e){var t=e.items,a=void 0===t?[{to:"/",text:"Home"}]:t,o=e.basePath,i=void 0===o?n.a.APP:o;return Object(r.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:a.map((function(e,t){return Object(r.jsx)(c.a.Item,{linkAs:s.b,linkProps:{to:"".concat(i).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},435:function(e,t,a){"use strict";var c=a(0),s=c.createContext(null);s.displayName="CardHeaderContext",t.a=s},440:function(e,t,a){"use strict";var c=a(0),s=a.n(c),n=a(429),r=a(9),o=s.a.memo((function(e){var t=e.items;return Object(r.jsx)("ul",{className:"nav flex-column",children:t.map((function(e,t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("a",{className:"nav-link",href:"#".concat(e.id),children:[Object(r.jsx)(n.a,{icon:"chevron-right"}),Object(r.jsx)("span",{className:"align-middle",children:e.text})]}),e.subs&&Object(r.jsx)("ul",{className:"nav flex-column",children:e.subs.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"nav-link",href:"#".concat(e.id),children:e.text})},t)}))})]},t)}))})}));o.displayName="ScrollspyContent",t.a=o},441:function(e,t,a){"use strict";var c=a(0),s=a.n(c),n=a(450),r=a(88),o=a(18),i=a(140),l=a(440),b=a(9),j=function(e){var t=e.items,a=void 0===t?[]:t,s=e.width,j=void 0===s?"":s,d=Object(r.b)(),m=Object(o.h)().hash;return Object(c.useEffect)((function(){return document.documentElement.setAttribute("data-scrollspy","true"),m&&setTimeout((function(){try{document.querySelector(m).scrollIntoView()}catch(e){console.info("[".concat(m,"] element not found."))}}),30),function(){document.documentElement.removeAttribute("data-scrollspy")}}),[m]),Object(c.useEffect)((function(){return d(Object(i.b)(a)),function(){d(Object(i.b)([]))}}),[a,d]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(n.a,{md:"auto",className:"d-none d-lg-block",id:"scrollSpyMenu",style:{width:j},children:Object(b.jsx)(l.a,{items:a})})})};t.a=s.a.memo(j)},444:function(e,t,a){"use strict";var c=a(5),s=a(426),n=a(425),r=a.n(n),o=a(0),i=a(427),l=a(434),b=a(442),j=a(9),d=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.variant,l=e.as,b=void 0===l?"img":l,m=Object(s.a)(e,d),u=Object(i.c)(a,"card-img");return Object(j.jsx)(b,Object(c.a)({ref:t,className:r()(o?"".concat(u,"-").concat(o):u,n)},m))}));m.displayName="CardImg";var u=m,O=a(435),f=["bsPrefix","className","as"],x=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,b=void 0===l?"div":l,d=Object(s.a)(e,f),m=Object(i.c)(a,"card-header"),u=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return Object(j.jsx)(O.a.Provider,{value:u,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:t},d),{},{className:r()(n,m)}))})}));x.displayName="CardHeader";var v=x,h=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(b.a)("h5"),N=Object(b.a)("h6"),y=Object(l.a)("card-body"),g=Object(l.a)("card-title",{Component:p}),C=Object(l.a)("card-subtitle",{Component:N}),P=Object(l.a)("card-link",{Component:"a"}),w=Object(l.a)("card-text",{Component:"p"}),k=Object(l.a)("card-footer"),R=Object(l.a)("card-img-overlay"),E=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.bg,l=e.text,b=e.border,d=e.body,m=void 0!==d&&d,u=e.children,O=e.as,f=void 0===O?"div":O,x=Object(s.a)(e,h),v=Object(i.c)(a,"card");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:t},x),{},{className:r()(n,v,o&&"bg-".concat(o),l&&"text-".concat(l),b&&"border-".concat(b)),children:m?Object(j.jsx)(y,{children:u}):u}))}));E.displayName="Card";t.a=Object.assign(E,{Img:u,Title:g,Subtitle:C,Body:y,Link:P,Text:w,Header:v,Footer:k,ImgOverlay:R})},448:function(e,t,a){"use strict";var c=a(5),s=a(426),n=a(425),r=a.n(n),o=a(0),i=a(427),l=a(9),b=["bsPrefix","className","as"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,j=void 0===o?"div":o,d=Object(s.a)(e,b),m=Object(i.c)(a,"row"),u=Object(i.a)(),O=Object(i.b)(),f="".concat(m,"-cols"),x=[];return u.forEach((function(e){var t,a=d[e];delete d[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==O?"-".concat(e):"";null!=t&&x.push("".concat(f).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},d),{},{className:r.a.apply(void 0,[n,m].concat(x))}))}));j.displayName="Row",t.a=j},450:function(e,t,a){"use strict";var c=a(111),s=a(5),n=a(426),r=a(425),o=a.n(r),i=a(0),l=a(427),b=a(9),j=["as","bsPrefix","className"],d=["className"];var m=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,r=Object(n.a)(e,j);a=Object(l.c)(a,"col");var i=Object(l.a)(),b=Object(l.b)(),d=[],m=[];return i.forEach((function(e){var t,c,s,n=r[e];delete r[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,s=n.order):t=n;var o=e!==b?"-".concat(e):"";t&&d.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=s&&m.push("order".concat(o,"-").concat(s)),null!=c&&m.push("offset".concat(o,"-").concat(c))})),[Object(s.a)(Object(s.a)({},r),{},{className:o.a.apply(void 0,[c].concat(d,m))}),{as:t,bsPrefix:a,spans:d}]}(e),r=Object(c.a)(a,2),i=r[0],m=i.className,u=Object(n.a)(i,d),O=r[1],f=O.as,x=void 0===f?"div":f,v=O.bsPrefix,h=O.spans;return Object(b.jsx)(x,Object(s.a)(Object(s.a)({},u),{},{ref:t,className:o()(m,!h.length&&v)}))}));m.displayName="Col",t.a=m},507:function(e,t,a){"use strict";var c=a(5),s=a(426),n=a(8),r=a.n(n),o=a(0),i=a(425),l=a.n(i),b=a(9),j=["className","variant","aria-label"],d={"aria-label":r.a.string,onClick:r.a.func,variant:r.a.oneOf(["white"])},m=o.forwardRef((function(e,t){var a=e.className,n=e.variant,r=e["aria-label"],o=void 0===r?"Close":r,i=Object(s.a)(e,j);return Object(b.jsx)("button",Object(c.a)({ref:t,type:"button",className:l()("btn-close",n&&"btn-close-".concat(n),a),"aria-label":o},i))}));m.displayName="CloseButton",m.propTypes=d,t.a=m}}]);