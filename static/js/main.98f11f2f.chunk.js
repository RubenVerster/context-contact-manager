(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{43:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(33),o=a.n(s),i=a(8),l=a(9),u=a(11),d=a(10),h=(a(43),a(15)),j=a(2),p=function(e){var t=e.branding;return Object(n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(h.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(h.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-plus"})," Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(h.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-question"})," About"]})})]})})]})})};p.defaultProps={branding:"My App"};var b=p,m=a(4),O=a.n(m),f=a(13),x=a(36),v=a(17),y=a(14),N=a.n(y),g=c.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:[t.payload].concat(Object(x.a)(e.contacts))});case"UPDATE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return C(e,t)}))}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(g.Provider,{value:this.state,children:this.props.children})}}]),a}(r.Component),E=g.Consumer,w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.showDetails=function(){e.setState({showContactInfo:!e.state.showContactInfo})},e.onClickDelete=function(){var e=Object(f.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,r=t.name,c=t.email,s=t.phone,o=this.state.showContactInfo;return Object(n.jsx)(E,{children:function(t){var i=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h4",{children:[r," ",Object(n.jsx)("i",{onClick:e.showDetails,className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(n.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onClickDelete.bind(e,a,i)}),Object(n.jsx)(h.b,{to:"contact/edit/".concat(a),children:Object(n.jsx)("i",{className:"fas fa-pencil-alt ",style:{cursos:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",c]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Number: ",s]})]}):null]})}})}}]),a}(r.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(E,{children:function(e){var t=e.contacts;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("h1",{className:"display-4 mb-2",children:[Object(n.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(n.jsx)(w,{contact:e},e.id)}))]})}})}}]),a}(r.Component),S=a(18),T=a(35),D=a.n(T),P=function(e){var t=e.label,a=e.name,r=e.value,c=e.placeholder,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:s,className:D()("form-control form-control-lg",{"is-invalid":i}),placeholder:c,name:a,value:r,onChange:o,required:!0,error:!0}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};P.defaultProps={type:"text"};var q=P,F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(f.a)(O.a.mark((function t(a,n){var r,c,s,o,i,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone number is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(E,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",placeholder:"Enter Name",name:"name",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",placeholder:"Enter Email",name:"email",value:r,onChange:e.onChange,type:"email",errors:s.email}),Object(n.jsx)(q,{label:"Phone",placeholder:"Enter Name",name:"phone",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(r.Component),_=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"About"}),Object(n.jsx)("p",{className:"lead",children:"Simple App to manage contacts"}),Object(n.jsx)("p",{className:"text-secondary",children:"v1.0.0"})]})},I=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"display-4",children:[Object(n.jsx)("span",{className:"text-danger",children:"404"})," Page Not Found"]}),Object(n.jsx)("p",{className:"lead",children:"Sorry, this page does not exist"})]})},L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(f.a)(O.a.mark((function t(a,n){var r,c,s,o,i,l,u;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone number is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,r=n.name,c=n.email,s=n.phone,this.setState({name:r,email:c,phone:s});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(E,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",placeholder:"Enter Name",name:"name",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",placeholder:"Enter Email",name:"email",value:r,onChange:e.onChange,type:"email",errors:s.email}),Object(n.jsx)(q,{label:"Phone",placeholder:"Enter Name",name:"phone",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(r.Component),M=(a(67),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(k,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{branding:"Contact Manager"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:A}),Object(n.jsx)(j.a,{exact:!0,path:"/contact/add",component:F}),Object(n.jsx)(j.a,{exact:!0,path:"/contact/edit/:id",component:L}),Object(n.jsx)(j.a,{exact:!0,path:"/about",component:_}),Object(n.jsx)(j.a,{component:I})]})})]})})})}}]),a}(r.Component)),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),U()}},[[68,1,2]]]);
//# sourceMappingURL=main.98f11f2f.chunk.js.map