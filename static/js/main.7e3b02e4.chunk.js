(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,a,t){e.exports=t(86)},60:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),m=t.n(r),s=(t(60),t(11)),c=t(42),o=t(43),d=t(53),i=t(44),u=t(54),h=t(7),E=t(45),p=t.n(E),b=function(e){return{type:"ADD_LIST",payload:e}},f=function(e){return{type:"FOR_UPDATED",payload:e}},y=t(94),v=t(89),g=t(90),C=t(49),O=t(91),N=t(92),w=t(93),x=(t(63),t(19)),j=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),A=/^[a-zA-Z ]*$/,k=/^[0]?[789]\d{9}$/,L=function(e){var a=!0;return Object.values(e).forEach(function(e){return e.length>0&&(a=!1)}),a},G=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(d.a)(this,Object(i.a)(a).call(this,e))).AddInfoHandler=function(){t.setState({Addcontactmodal:!t.state.Addcontactmodal})},t.modalClosehandle=function(e){t.setState({Addcontactmodal:!1,editcontactmodal:!1,viewcontactmodal:!1})},t.changehandler=function(e){var a=e.target,n=a.name,l=a.value,r=t.state.errors;switch(n){case"fullname":r.fullname=A.test(l)?"":"Only Accept Characters !";break;case"email":r.email=j.test(l)?"":"Email is not valid!";break;case"phonenumber":r.phonenumber=k.test(l)?"":"Phone Number is not valid!";break;case"companyname":r.companyname=l.length<0?"Enter Company Name":"";break;case"address":r.address=l.length<0?"enter Address":""}t.setState(Object(s.a)({errors:r},n,l))},t.Updatechangehandler=function(e){var a=e.target,n=a.name,l=a.value,r=t.state.errors;switch(n){case"fullname":r.fullname=A.test(l)?"":"Only Accept Characters !";break;case"email":r.email=j.test(l)?"":"Email is not valid!";break;case"phonenumber":r.phonenumber=k.test(l)?"":"Phone Number is not valid!";break;case"companyname":r.companyname=l.length<0?"Enter Company Name":"";break;case"address":r.address=l.length<0?"enter Address":""}t.setState(Object(s.a)({errors:r},n,l))},t.submithandler=function(e){if(e.preventDefault(),t.setState({Addcontactmodal:!t.state.Addcontactmodal}),L(t.state.errors)){if(""!==t.state){var a={};a.fullname=t.state.fullname,a.email=t.state.email,a.companyname=t.state.companyname,a.phonenumber=t.state.phonenumber,a.address=t.state.address,a.id=p.a.v4(),t.props.dispatch(b(a)),t.setState({fullname:"",email:"",phonenumber:"",companyname:"",address:""})}}else alert("Please Fill All Information"),t.setState({Addcontactmodal:!0})},t.Edithandler=function(e){var a=e.target.id,n=t.props.Listdata.find(function(e){return e.id===a});t.setState({editcontactmodal:!t.state.editcontactmodal,editid:a,fullname:n.fullname,email:n.email,phonenumber:n.phonenumber,companyname:n.companyname,address:n.address})},t.updated_submithandler=function(e){if(e.preventDefault(),t.setState({editcontactmodal:!t.state.editcontactmodal}),""!==t.state){var a={};a.id=t.state.editid,a.fullname=t.state.fullname,a.email=t.state.email,a.address=t.state.address,a.companyname=t.state.companyname,a.phonenumber=t.state.phonenumber,t.props.dispatch(f(a))}},t.Taskdataview=function(e){var a=t.props.Listdata.find(function(a){return a.id===e});t.setState({viewcontactmodal:!t.state.viewcontactmodal,fullname:a.fullname,email:a.email,companyname:a.companyname,phonenumber:a.phonenumber,address:a.address})},t.state={fullname:"",email:"",phonenumber:"",companyname:"",address:"",editid:"",errors:{fullname:"",email:"",phonenumber:"",companyname:"",address:""},Addcontactmodal:!1,editcontactmodal:!1,viewcontactmodal:!1},t.submithandler=t.submithandler.bind(Object(h.a)(Object(h.a)(t))),t.Edithandler=t.Edithandler.bind(Object(h.a)(Object(h.a)(t))),t.AddInfoHandler=t.AddInfoHandler.bind(Object(h.a)(Object(h.a)(t))),t.modalClosehandle=t.modalClosehandle.bind(Object(h.a)(Object(h.a)(t))),t.Taskdataview=t.Taskdataview.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.errors,t=this.props.Listdata;if(null!==t)var n=t.map(function(a){return l.a.createElement("tr",{key:a.id},l.a.createElement("td",null,l.a.createElement("span",{className:"username",onClick:function(){return e.Taskdataview(a.id)}},a.fullname)," ",l.a.createElement("br",null)," ",l.a.createElement("span",{className:"defalut"},a.email)),l.a.createElement("td",null,a.companyname),l.a.createElement("td",null,a.phonenumber),l.a.createElement("td",null,a.address),l.a.createElement("td",null,l.a.createElement(y.a,{variant:"primary mr-2 "}," ",l.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true",id:a.id,onClick:e.Edithandler}))," "))});return l.a.createElement("div",null,l.a.createElement(v.a,{fluid:!0},l.a.createElement(g.a,{className:"startrow"},l.a.createElement(C.a,Object(s.a)({sm:12,xs:12,className:"view"},"className","text-right"),l.a.createElement(y.a,{variant:"success",className:"themesflat-button ",onClick:this.AddInfoHandler},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Add Contact "))),l.a.createElement(g.a,null,l.a.createElement(C.a,{xs:12,sm:12},l.a.createElement("div",{className:"TaskList"},l.a.createElement(O.a,{striped:!0,hover:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",{className:"thead"},l.a.createElement("th",null,"Basic Info"),l.a.createElement("th",null,"Company Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,n))),l.a.createElement(N.a,{show:this.state.Addcontactmodal,onHide:this.modalClosehandle},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,"Add Contact")),l.a.createElement(N.a.Body,null,l.a.createElement(w.a,{onSubmit:this.submithandler},l.a.createElement(g.a,null,l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null,"Full name"),l.a.createElement(w.a.Control,{type:"text",onChange:this.changehandler,name:"fullname",required:!0}),a.fullname.length>0&&l.a.createElement("span",{className:"text-danger"},a.fullname))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Email"),l.a.createElement(w.a.Control,{type:"email",onChange:this.changehandler,name:"email",required:!0}),a.email.length>0&&l.a.createElement("span",{className:"text-danger"},a.email))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Phone number"),l.a.createElement(w.a.Control,{type:"text",onChange:this.changehandler,name:"phonenumber",required:!0}),a.phonenumber.length>0&&l.a.createElement("span",{className:"text-danger"},a.phonenumber))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Company Name"),l.a.createElement(w.a.Control,{type:"text",onChange:this.changehandler,name:"companyname",required:!0}),a.companyname.length>0&&l.a.createElement("span",{className:"text-danger"},a.companyname))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Address"),l.a.createElement(w.a.Control,{as:"textarea",rows:"5",placeholder:"Enter Address",onChange:this.changehandler,name:"address",required:!0}),a.address.length>0&&l.a.createElement("span",{className:"text-danger"},a.address))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{className:"text-right"},l.a.createElement(y.a,{variant:"secondary",type:"submit",className:"themesflat-button blue mr-2",onClick:this.modalClosehandle}," Cancel "),l.a.createElement(y.a,{variant:"success",type:"submit",className:"themesflat-button blue"},"  Save Changes "))))))),l.a.createElement(N.a,{show:this.state.editcontactmodal,onHide:this.modalClosehandle},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,"Edit Contact ")),l.a.createElement(N.a.Body,null,l.a.createElement(w.a,{onSubmit:this.updated_submithandler},l.a.createElement(g.a,null,l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Control,{type:"hidden",name:"id",value:this.state.edit_id}),l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null,"Full Name"),l.a.createElement(w.a.Control,{type:"text",onChange:this.Updatechangehandler,name:"fullname",value:this.state.fullname,required:!0}),a.fullname.length>0&&l.a.createElement("span",{className:"text-danger"},a.fullname))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Email"),l.a.createElement(w.a.Control,{type:"email",onChange:this.Updatechangehandler,name:"email",value:this.state.email,required:!0}),a.email.length>0&&l.a.createElement("span",{className:"text-danger"},a.email))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Company Name"),l.a.createElement(w.a.Control,{type:"text",onChange:this.Updatechangehandler,name:"companyname",value:this.state.companyname,required:!0}),a.companyname.length>0&&l.a.createElement("span",{className:"text-danger"},a.companyname))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Phone Number"),l.a.createElement(w.a.Control,{type:"text",onChange:this.Updatechangehandler,name:"phonenumber",value:this.state.phonenumber,required:!0}),a.phonenumber.length>0&&l.a.createElement("span",{className:"text-danger"},a.phonenumber))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null," Address"),l.a.createElement(w.a.Control,{as:"textarea",rows:"5",onChange:this.Updatechangehandler,name:"address",value:this.state.address,required:!0}),a.address.length>0&&l.a.createElement("span",{className:"text-danger"},a.address))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{className:"text-right"},l.a.createElement(y.a,{variant:"secondary",className:"themesflat-button blue mr-2",onClick:this.modalClosehandle}," Cancel "),l.a.createElement(y.a,{variant:"success",type:"submit",className:"themesflat-button blue"}," Save "))))))),l.a.createElement(N.a,{className:"viewmodal",show:this.state.viewcontactmodal,onHide:this.modalClosehandle},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{className:"view"},"View Contact Info")),l.a.createElement(N.a.Body,null,l.a.createElement(w.a,null,l.a.createElement(g.a,null,l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{as:g.a},l.a.createElement(w.a.Label,{column:!0,sm:"6"},"Fullname : "),l.a.createElement(C.a,{sm:"6"},l.a.createElement(w.a.Control,Object(s.a)({plaintext:!0,readOnly:!0,value:this.state.fullname},"readOnly",!0))))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{as:g.a},l.a.createElement(w.a.Label,{column:!0,sm:"6"},"Email :"),l.a.createElement(C.a,{sm:"6"},l.a.createElement(w.a.Control,Object(s.a)({plaintext:!0,readOnly:!0,value:this.state.email},"readOnly",!0))))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{as:g.a},l.a.createElement(w.a.Label,{column:!0,sm:"6"},"Company Name : "),l.a.createElement(C.a,{sm:"6"},l.a.createElement(w.a.Control,Object(s.a)({plaintext:!0,readOnly:!0,value:this.state.companyname},"readOnly",!0))))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{as:g.a},l.a.createElement(w.a.Label,{column:!0,sm:"6"},"Phone Number : "),l.a.createElement(C.a,{sm:"6"},l.a.createElement(w.a.Control,Object(s.a)({plaintext:!0,readOnly:!0,value:this.state.phonenumber},"readOnly",!0))))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{as:g.a},l.a.createElement(w.a.Label,{column:!0,sm:"6"},"Address : "),l.a.createElement(C.a,{sm:"6"},l.a.createElement(w.a.Control,Object(s.a)({plaintext:!0,readOnly:!0,value:this.state.address},"readOnly",!0))))),l.a.createElement(C.a,{sm:12},l.a.createElement(w.a.Group,{className:"text-right"},l.a.createElement(y.a,{variant:"secondary",className:"themesflat-button blue mr-2",onClick:this.modalClosehandle}," Cancel ")))))))))))}}]),a}(n.Component),S=Object(x.b)(function(e){return{Listdata:e.ContactInfo}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=t(14),T=t(52),q=t(26),D=[],H=Object(I.c)({ContactInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LIST":return[].concat(Object(q.a)(e),[a.payload]);case"FOR_UPDATED":var t=a.payload,n=e.find(function(e){return e.id===t.id});return n.fullname=t.fullname,n.email=t.email,n.phonenumber=t.phonenumber,n.companyname=t.companyname,n.address=t.address,Object(q.a)(e);default:return e}}}),B=Object(I.d)(H,Object(I.a)(T.a)),P=l.a.createElement(x.a,{store:B},l.a.createElement(S,null));m.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.7e3b02e4.chunk.js.map