(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[162],{1226:function(t,e,a){"use strict";a.r(e);a(0);var i=a(87),c=a(535),r=a(429),n=a(431),s=a(9);e.default=function(){var t=Object(s.jsx)("div",{className:"sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border",children:Object(s.jsxs)("div",{className:"sw-lg-60 px-5",children:[Object(s.jsx)("div",{className:"sh-11",children:Object(s.jsx)(i.c,{to:"/",children:Object(s.jsx)("div",{className:"logo-default"})})}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h2",{className:"cta-1 mb-0 text-primary",children:"Ooops, it looks like an error!"}),Object(s.jsx)("h2",{className:"display-2 text-primary",children:"Unauthorized"})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("p",{className:"h6",children:"It looks like the page you are looking for is not available."}),Object(s.jsxs)("p",{className:"h6",children:["If you think that is a mistake, please ",Object(s.jsx)(i.c,{to:"/",children:"contact"})," us."]})]}),Object(s.jsx)("div",{children:Object(s.jsxs)(i.c,{to:"/",className:"btn btn-icon btn-icon-start btn-primary",children:[Object(s.jsx)(r.a,{icon:"arrow-left"})," ",Object(s.jsx)("span",{children:"Back to Home"})]})})]})});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(n.a,{title:"Unauthorized",description:"Unauthorized Page"}),Object(s.jsx)(c.a,{right:t})]})}},431:function(t,e,a){"use strict";var i=a(139),c=(a(0),a(9));e.a=function(t){var e=t.title,a=void 0===e?"":e,r=t.description,n=void 0===r?"":r,s=t.children,o=void 0===s?null:s;return Object(c.jsxs)(i.a,{children:[a&&Object(c.jsx)("title",{children:a}),n&&Object(c.jsx)("meta",{name:"description",content:n}),o&&o]})}},528:function(t,e,a){"use strict";var i=a(0),c=a(88),r=a(142),n=a(141),s=a(111),o={config:{attributes:!0,childList:!1,subtree:!1}},u=function(){var t=Object(c.b)(),e=Object(i.useCallback)((function(e){Array.isArray(e)&&e.map((function(e){"attributes"===e.type&&"style"===e.attributeName&&t(Object(n.h)(e.target.style.paddingRight.indexOf("px")>-1?parseInt(e.target.style.paddingRight.replace("px",""),10):""))}))}),[t]);return function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,c=Object(i.useState)(null),r=Object(s.a)(c,2),n=r[0],u=r[1];Object(i.useEffect)((function(){var t=new MutationObserver(e);u(t)}),[e,a,u]),Object(i.useEffect)((function(){if(n){var e=a.config;return n.observe(t,e),function(){n&&n.disconnect()}}}),[n,t,a])}(document.body,e),!0};e.a=function(){var t=Object(c.c)((function(t){return t.settings})),e=t.color,a=t.layout,n=t.radius,s=t.navColor,o=Object(c.b)(),d=Object(c.c)((function(t){return t.menu})),l=d.attrMenuAnimate,b=d.attrMobile,j=d.placementStatus,m=j.placementHtmlData,h=j.dimensionHtmlData,f=d.behaviourStatus.behaviourHtmlData;u();var v=document.documentElement;return Object(i.useEffect)((function(){return setTimeout((function(){o(Object(r.b)()),v.setAttribute("data-show","true")}),30),v.setAttribute("data-color",e),v.setAttribute("data-layout",a),v.setAttribute("data-radius",n),v.setAttribute("data-navcolor",s),v.setAttribute("data-placement",m),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),function(){v.removeAttribute("data-color"),v.removeAttribute("data-layout"),v.removeAttribute("data-radius"),v.removeAttribute("data-navcolor"),v.removeAttribute("data-show"),v.removeAttribute("data-placement"),v.removeAttribute("data-behaviour"),v.removeAttribute("data-dimension")}}),[]),Object(i.useEffect)((function(){v.setAttribute("data-placement",m),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),v.setAttribute("data-navcolor",s),v.setAttribute("data-radius",n),v.setAttribute("data-color",e),v.setAttribute("data-layout",a)}),[v,m,h,f,s,n,e,a]),Object(i.useEffect)((function(){l?v.setAttribute("data-menu-animate",l):v.removeAttribute("data-menu-animate")}),[v,l]),Object(i.useEffect)((function(){b?v.setAttribute("data-mobile",b):v.removeAttribute("data-mobile")}),[v,b]),!0}},535:function(t,e,a){"use strict";var i=a(0),c=a(528),r=a(9);e.a=function(t){var e=t.left,a=t.right;return Object(c.a)(),Object(i.useEffect)((function(){document.body.classList.add("h-100");var t=document.getElementById("root");return t&&t.classList.add("h-100"),function(){document.body.classList.remove("h-100"),t&&t.classList.remove("h-100")}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"fixed-background"}),Object(r.jsx)("div",{className:"container-fluid p-0 h-100 position-relative",children:Object(r.jsxs)("div",{className:"row g-0 h-100",children:[Object(r.jsx)("div",{className:"offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100",children:e}),Object(r.jsx)("div",{className:"col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0",children:a})]})})]})}}}]);