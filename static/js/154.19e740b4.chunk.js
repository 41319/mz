(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[154],{408:function(t,e,c){"use strict";c.r(e);var i=c(0),a=c(450),s=c(452),n=c(446),l=c(434),r=c(433),o=c(443),d=c(111),j=c(779),u=c(10),b=function(){var t=Object(i.useState)([{title:"Drag\xe9e carrot cake chupa",id:1},{title:"Bear claw sweet icing",id:2},{title:"Chocolate cake halvah candy",id:3},{title:"Cake brownie oat cake",id:4}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"ul",className:"list-group",animation:300,children:c.map((function(t){return Object(u.jsx)("li",{className:"list-group-item cursor-default",children:t.title},"sortable_animation_".concat(t.id))}))})},m=function(){var t=Object(i.useState)([{title:"Drag\xe9e carrot cake chupa",id:1},{title:"Bear claw sweet icing",id:2},{title:"Chocolate cake halvah candy",id:3},{title:"Cake brownie oat cake",id:4}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"ul",className:"list-group",children:c.map((function(t){return Object(u.jsx)("li",{className:"list-group-item cursor-default",children:t.title},"sortable_basic_".concat(t.id))}))})},h=c(431),x=function(){var t=Object(i.useState)([{icon:"pepper",title:"Pepper",id:1},{icon:"banana",title:"Banana",id:2},{icon:"pear",title:"Pear",id:3},{icon:"radish",title:"Radish",id:4}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"div",className:"row g-2",children:c.map((function(t){return Object(u.jsx)("div",{className:"col-12 col-sm-3",children:Object(u.jsx)("div",{className:"card sh-16",children:Object(u.jsxs)("div",{className:"card-body text-center d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsx)(h.a,{icon:t.icon,width:"20",height:"20",className:"cs-icon icon text-primary mb-3"}),Object(u.jsx)("p",{className:"mb-0 text-muted",children:t.title})]})})},"sortable_column_".concat(t.id))}))})},O=function(){var t=Object(i.useState)([{title:"Drag\xe9e carrot cake chupa",id:1},{title:"Bear claw sweet icing",id:2},{title:"Chocolate cake halvah candy",id:3},{title:"Cake brownie oat cake",id:4}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"ul",className:"list-group",group:{name:"groupFirst",put:["groupSecond"]},children:c.map((function(t){return Object(u.jsx)("li",{className:"list-group-item cursor-default",children:t.title},"sortable_first_".concat(t.id))}))})},p=function(){var t=Object(i.useState)([{title:"Gingerbread topping cookie cotton candy",id:5}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"ul",className:"list-group",group:{name:"groupSecond",put:["groupFirst"]},children:c.map((function(t){return Object(u.jsx)("li",{className:"list-group-item cursor-default",children:t.title},"sortable_second_".concat(t.id))}))})},f=function(){var t=Object(i.useState)([{title:"1. Drag\xe9e carrot cake chupa",id:1},{title:"2. Bear claw sweet icing",id:2},{title:"3. Chocolate cake halvah candy",id:3},{title:"4. Cake brownie oat cake",id:4}]),e=Object(d.a)(t,2),c=e[0],a=e[1];return Object(u.jsx)(j.ReactSortable,{list:c,setList:function(t){return a(t)},tag:"ul",className:"list-group",store:{get:function(t){var e=localStorage.getItem(t.options.group.name);return e?e.split("|"):[]},set:function(t){var e=t.toArray();localStorage.setItem(t.options.group.name,e.join("|"))}},children:c.map((function(t){return Object(u.jsx)("li",{className:"list-group-item cursor-default",children:t.title},"sortable_store_".concat(t.id))}))})};e.default=function(){var t="Sortable",e="Sortable is a JavaScript library for reorderable drag-and-drop lists.";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{title:t,description:e}),Object(u.jsxs)(a.a,{children:[Object(u.jsxs)(s.a,{children:[Object(u.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(u.jsxs)("div",{className:"page-title-container",children:[Object(u.jsx)("h1",{className:"mb-0 pb-0 display-4",children:t}),Object(u.jsx)(l.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/plugins",title:"Plugins"}]})]}),Object(u.jsx)(n.a,{className:"mb-5",body:!0,children:Object(u.jsx)(n.a.Text,{children:e})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"basic",children:[Object(u.jsx)("h2",{className:"small-title",children:"Basic"}),Object(u.jsx)(n.a,{body:!0,className:"mb-5",children:Object(u.jsx)(m,{})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"animation",children:[Object(u.jsx)("h2",{className:"small-title",children:"Animation"}),Object(u.jsx)(n.a,{body:!0,className:"mb-5",children:Object(u.jsx)(b,{})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"columns",children:[Object(u.jsx)("h2",{className:"small-title",children:"Columns"}),Object(u.jsx)("div",{className:"mb-5",children:Object(u.jsx)(x,{})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"moving",children:[Object(u.jsx)("h2",{className:"small-title",children:"Moving"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)(s.a,{children:Object(u.jsx)(n.a,{body:!0,className:"mb-5",children:Object(u.jsx)(O,{})})}),Object(u.jsx)(s.a,{children:Object(u.jsx)(n.a,{body:!0,className:"mb-5",children:Object(u.jsx)(p,{})})})]})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"store",children:[Object(u.jsx)("h2",{className:"small-title",children:"Store"}),Object(u.jsx)(n.a,{body:!0,children:Object(u.jsx)(f,{})})]})]}),Object(u.jsx)(o.a,{items:[{id:"title",text:"Title"},{id:"basic",text:"Basic"},{id:"animation",text:"Animation"},{id:"columns",text:"Columns"},{id:"moving",text:"Moving"},{id:"store",text:"Store"}]})]})]})}},433:function(t,e,c){"use strict";var i=c(139),a=(c(0),c(10));e.a=function(t){var e=t.title,c=void 0===e?"":e,s=t.description,n=void 0===s?"":s,l=t.children,r=void 0===l?null:l;return Object(a.jsxs)(i.a,{children:[c&&Object(a.jsx)("title",{children:c}),n&&Object(a.jsx)("meta",{name:"description",content:n}),r&&r]})}},434:function(t,e,c){"use strict";c(0);var i=c(957),a=c(87),s=c(2),n=c(10);e.a=function(t){var e=t.items,c=void 0===e?[{to:"/",text:"Home"}]:e,l=t.basePath,r=void 0===l?s.a.APP:l;return Object(n.jsx)(i.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(t,e){return Object(n.jsx)(i.a.Item,{linkAs:a.b,linkProps:{to:"".concat(r).concat(t.to)},children:t.title||t.text},"breadCrumb.".concat(e))}))})}},442:function(t,e,c){"use strict";var i=c(0),a=c.n(i),s=c(431),n=c(10),l=a.a.memo((function(t){var e=t.items;return Object(n.jsx)("ul",{className:"nav flex-column",children:e.map((function(t,e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{className:"nav-link",href:"#".concat(t.id),children:[Object(n.jsx)(s.a,{icon:"chevron-right"}),Object(n.jsx)("span",{className:"align-middle",children:t.text})]}),t.subs&&Object(n.jsx)("ul",{className:"nav flex-column",children:t.subs.map((function(t,e){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"nav-link",href:"#".concat(t.id),children:t.text})},e)}))})]},e)}))})}));l.displayName="ScrollspyContent",e.a=l},443:function(t,e,c){"use strict";var i=c(0),a=c.n(i),s=c(452),n=c(88),l=c(18),r=c(140),o=c(442),d=c(10),j=function(t){var e=t.items,c=void 0===e?[]:e,a=t.width,j=void 0===a?"":a,u=Object(n.b)(),b=Object(l.h)().hash;return Object(i.useEffect)((function(){return document.documentElement.setAttribute("data-scrollspy","true"),b&&setTimeout((function(){try{document.querySelector(b).scrollIntoView()}catch(t){console.info("[".concat(b,"] element not found."))}}),30),function(){document.documentElement.removeAttribute("data-scrollspy")}}),[b]),Object(i.useEffect)((function(){return u(Object(r.b)(c)),function(){u(Object(r.b)([]))}}),[c,u]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{md:"auto",className:"d-none d-lg-block",id:"scrollSpyMenu",style:{width:j},children:Object(d.jsx)(o.a,{items:c})})})};e.a=a.a.memo(j)}}]);