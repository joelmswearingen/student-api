(function(t){function e(e){for(var r,u,d=e[0],i=e[1],o=e[2],l=0,p=[];l<d.length;l++)u=d[l],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&p.push(s[u][0]),s[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,d=1;d<n.length;d++){var i=n[d];0!==s[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},s={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var o=0;o<d.length;o++)e(d[o]);var c=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5054:function(t,e,n){"use strict";var r=n("7cf1"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NewStudentForm",{on:{"student-added":t.newStudentAdded}}),n("StudentTable",{attrs:{students:t.students},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("StudentMessage",{attrs:{message:t.message,name:t.name}})],1)},a=[],u=(n("a15b"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addStudent(e)}}},[t._v("Add")])])])}),d=[],i={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Name is required"),this.newStarID||this.errors.push("starID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},o=i,c=n("2877"),l=Object(c["a"])(o,u,d,!1,null,null,null),p=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,u=t._i(n,a);r.checked?u<0&&(t.editTable=n.concat([a])):u>-1&&(t.editTable=n.slice(0,u).concat(n.slice(u+1)))}else t.editTable=s}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit Table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,(function(e){return n("StudentRow",{key:e.starID,attrs:{student:e,edit:t.editTable},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}})}))],2)])])])},m=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{class:"present-"+t.student.present},[r("td",[t._v(t._s(t.student.name))]),r("td",[t._v(t._s(t.student.starID))]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.student.present,expression:"student.present"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.student.present)?t._i(t.student.present,null)>-1:t.student.present},on:{change:[function(e){var n=t.student.present,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,u=t._i(n,a);r.checked?u<0&&t.$set(t.student,"present",n.concat([a])):u>-1&&t.$set(t.student,"present",n.slice(0,u).concat(n.slice(u+1)))}else t.$set(t.student,"present",s)},function(e){return t.checked(t.student)}]}})]),r("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[r("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(e){return t.deleteStudent(t.student)}}})])])},v=[],b={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{checked:function(t){this.$emit("student-present",t)},deleteStudent:function(t){confirm("Delete ".concat(t.name,", are you sure?"))&&this.$emit("delete-student",t)}}},S=b,g=(n("5054"),Object(c["a"])(S,h,v,!1,null,null,null)),w=g.exports,_={name:"StudentTable",components:{StudentRow:w},data:function(){return{editTable:!1}},props:{students:Array},methods:{studentArrivedOrLeft:function(t){this.$emit("student-present",t)},studentDeleted:function(t){this.$emit("delete-student",t)}}},y=_,D=(n("b1d5"),Object(c["a"])(y,f,m,!1,null,null,null)),x=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[t.seeMessage?n("div",{staticClass:"alert alert-success"},[t._v(t._s(t.message)+" "+t._s(t.name))]):t._e()])],1)},O=[],T={name:"StudentMessage",data:function(){return{seeMessage:!1}},props:{message:String,name:String},watch:{message:function(){var t=this;this.seeMessage=!0,setTimeout((function(){t.seeMessage=!1}),3e3)}}},$=T,k=(n("e517"),Object(c["a"])($,N,O,!1,null,null,null)),A=k.exports,j={name:"App",components:{NewStudentForm:p,StudentTable:x,StudentMessage:A},data:function(){return{students:[],message:"",name:""}},mounted:function(){this.updateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(t){e.updateStudents()})).catch((function(t){var e=t.response.data.join(", ");alert("Error adding student.\n"+e)}))},studentArrivedOrLeft:function(t){var e=this;this.$student_api.updateStudent(t).then((function(){e.name=t.name,e.message=t.present?"Welcome, ":"Goodbye, ",e.updateStudents()}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t).then((function(){e.updateStudents()}))},updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e}))}}},C=j,I=Object(c["a"])(C,s,a,!1,null,null,null),P=I.exports,M=n("5f5b"),E=n("bc3a"),L=n.n(E),F="/api/students",R={getAllStudents:function(){return L.a.get(F).then((function(t){return t.data}))},addStudent:function(t){return L.a.post(F,t).then((function(t){return t.data}))},updateStudent:function(t){return L.a.patch("".concat(F,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return L.a.delete("".concat(F,"/").concat(t.id),t).then((function(t){return t.data}))}};n("f9e3"),n("2dd8");r["default"].use(M["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$student_api=R,new r["default"]({render:function(t){return t(P)}}).$mount("#app")},"70c1":function(t,e,n){},"7cf1":function(t,e,n){},b1d5:function(t,e,n){"use strict";var r=n("c2b6"),s=n.n(r);s.a},c2b6:function(t,e,n){},e517:function(t,e,n){"use strict";var r=n("70c1"),s=n.n(r);s.a},ed3a:function(t,e,n){t.exports=n.p+"img/delete.edc83ac4.png"}});
//# sourceMappingURL=app.8eac90fc.js.map