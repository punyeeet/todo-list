(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(14),a(4)),s=a(1);a(16);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Todos List"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),e.searchbar?l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"no search bar")))}var i=function(){return l.a.createElement("footer",{className:"bg-dark text-light py-3",style:{position:"relative",bottom:"0",top:"40vh",width:"100%",height:"10vh"}},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 MyTodoList.com"))},u=function(e){var t=e.todo,a=e.onDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a({todo:t})}},"Delete")),l.a.createElement("hr",null))},d=function(e){return l.a.createElement("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"}},l.a.createElement("h3",null,"Todos List"),0===e.todo.length?"No Todos to display":e.todo.map(function(t){return console.log(t.sno),l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})}))};function b(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),i=m[0],u=m[1];return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"Add a todo"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),o&&i?(e.addTodo(o,i),u(""),r("")):alert("Title or Description cannot be blank")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),l.a.createElement("input",{type:"text",value:o,onChange:function(e){return r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Todo description"),l.a.createElement("input",{type:"text",className:"form-control",value:i,onChange:function(e){return u(e.target.value)},id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"Add Todo")))}var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(s.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(o))},[o]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"My Todos List",searchBar:!1}),l.a.createElement(b,{addTodo:function(e,t){console.log("I am adding this todo",e,t);var a={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};r([].concat(Object(c.a)(o),[a])),console.log(a)}}),l.a.createElement(d,{todo:o,onDelete:function(e){var t=e.todo;console.log("I am onDelete of todo",t),r(o.filter(function(e){return e!==t})),console.log("deleted",o),localStorage.setItem("todos",JSON.stringify(o))}}),l.a.createElement(i,null))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),v()},5:function(e,t,a){e.exports=a(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.4a282bb6.chunk.js.map