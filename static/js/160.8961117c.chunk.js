(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[160],{1227:function(t,e,a){"use strict";a.r(e);a(0);var c=a(87),i=a(535),s=a(429),r=a(431),n=a(9);e.default=function(){var t=Object(n.jsx)("div",{className:"sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border",children:Object(n.jsxs)("div",{className:"sw-lg-60 px-5",children:[Object(n.jsx)("div",{className:"sh-11",children:Object(n.jsx)(c.c,{to:"/",children:Object(n.jsx)("div",{className:"logo-default"})})}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("h2",{className:"cta-1 mb-0 text-primary",children:"Ooops, it looks like an error!"}),Object(n.jsx)("h2",{className:"display-2 text-primary",children:"Invalid Access"})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("p",{className:"h6",children:"It looks like the page you are looking for is not available."}),Object(n.jsxs)("p",{className:"h6",children:["If you think that is a mistake, please ",Object(n.jsx)(c.c,{to:"/",children:"contact"})," us."]})]}),Object(n.jsx)("div",{children:Object(n.jsxs)(c.c,{to:"/",className:"btn btn-icon btn-icon-start btn-primary",children:[Object(n.jsx)(s.a,{icon:"arrow-left"})," ",Object(n.jsx)("span",{children:"Back to Home"})]})})]})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.a,{title:"Invalid Access",description:"Invalid Access Page"}),Object(n.jsx)(i.a,{right:t})]})}},431:function(t,e,a){"use strict";var c=a(139),i=(a(0),a(9));e.a=function(t){var e=t.title,a=void 0===e?"":e,s=t.description,r=void 0===s?"":s,n=t.children,o=void 0===n?null:n;return Object(i.jsxs)(c.a,{children:[a&&Object(i.jsx)("title",{children:a}),r&&Object(i.jsx)("meta",{name:"description",content:r}),o&&o]})}},528:function(t,e,a){"use strict";var c=a(0),i=a(88),s=a(142),r=a(141),n=a(111),o={config:{attributes:!0,childList:!1,subtree:!1}},u=function(){var t=Object(i.b)(),e=Object(c.useCallback)((function(e){Array.isArray(e)&&e.map((function(e){"attributes"===e.type&&"style"===e.attributeName&&t(Object(r.h)(e.target.style.paddingRight.indexOf("px")>-1?parseInt(e.target.style.paddingRight.replace("px",""),10):""))}))}),[t]);return function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=Object(c.useState)(null),s=Object(n.a)(i,2),r=s[0],u=s[1];Object(c.useEffect)((function(){var t=new MutationObserver(e);u(t)}),[e,a,u]),Object(c.useEffect)((function(){if(r){var e=a.config;return r.observe(t,e),function(){r&&r.disconnect()}}}),[r,t,a])}(document.body,e),!0};e.a=function(){var t=Object(i.c)((function(t){return t.settings})),e=t.color,a=t.layout,r=t.radius,n=t.navColor,o=Object(i.b)(),l=Object(i.c)((function(t){return t.menu})),d=l.attrMenuAnimate,b=l.attrMobile,j=l.placementStatus,m=j.placementHtmlData,f=j.dimensionHtmlData,h=l.behaviourStatus.behaviourHtmlData;u();var v=document.documentElement;return Object(c.useEffect)((function(){return setTimeout((function(){o(Object(s.b)()),v.setAttribute("data-show","true")}),30),v.setAttribute("data-color",e),v.setAttribute("data-layout",a),v.setAttribute("data-radius",r),v.setAttribute("data-navcolor",n),v.setAttribute("data-placement",m),v.setAttribute("data-dimension",f),v.setAttribute("data-behaviour",h),function(){v.removeAttribute("data-color"),v.removeAttribute("data-layout"),v.removeAttribute("data-radius"),v.removeAttribute("data-navcolor"),v.removeAttribute("data-show"),v.removeAttribute("data-placement"),v.removeAttribute("data-behaviour"),v.removeAttribute("data-dimension")}}),[]),Object(c.useEffect)((function(){v.setAttribute("data-placement",m),v.setAttribute("data-dimension",f),v.setAttribute("data-behaviour",h),v.setAttribute("data-navcolor",n),v.setAttribute("data-radius",r),v.setAttribute("data-color",e),v.setAttribute("data-layout",a)}),[v,m,f,h,n,r,e,a]),Object(c.useEffect)((function(){d?v.setAttribute("data-menu-animate",d):v.removeAttribute("data-menu-animate")}),[v,d]),Object(c.useEffect)((function(){b?v.setAttribute("data-mobile",b):v.removeAttribute("data-mobile")}),[v,b]),!0}},535:function(t,e,a){"use strict";var c=a(0),i=a(528),s=a(9);e.a=function(t){var e=t.left,a=t.right;return Object(i.a)(),Object(c.useEffect)((function(){document.body.classList.add("h-100");var t=document.getElementById("root");return t&&t.classList.add("h-100"),function(){document.body.classList.remove("h-100"),t&&t.classList.remove("h-100")}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"fixed-background"}),Object(s.jsx)("div",{className:"container-fluid p-0 h-100 position-relative",children:Object(s.jsxs)("div",{className:"row g-0 h-100",children:[Object(s.jsx)("div",{className:"offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100",children:e}),Object(s.jsx)("div",{className:"col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0",children:a})]})})]})}}}]);