webpackJsonp([16],{"Qj/4":function(n,t,e){var a=e("mXAZ");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("FIqI")("1fc8c96c",a,!0,{})},mXAZ:function(n,t,e){t=n.exports=e("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},qPoY:function(n,t,e){"use strict";function a(n){e("Qj/4")}Object.defineProperty(t,"__esModule",{value:!0});var l=e("lcoF"),s=e("2sCs"),o=e.n(s),i=e("x1ym"),r={mixins:[l.a],data:function(){var n=i.a.required("此项必填");i.a.number("只能输入数字");return{params:{},rules:{field:[i.a.string("只能输入字母"),n],label:[n],dataType:[n],required:[n],single:[n]},checkRes:!1}},methods:{checkId:function(n){var t=this,e=this.$api;o.a.all([o.a.post(e.typeCheckId,{id:n})]).then(o.a.spread(function(n){n.body.result?t.checkRes=!0:t.checkRes=!1,t.loading=!1})).catch(function(n){t.loading=!1})},getDataInfo:function(n){var t=this,e=this.$api;o.a.post(e.itemGet,{id:n}).then(function(n){t.dataInfo=n.body,t.$refs.form.resetFields(),t.loading=!1}).catch(function(n){t.loading=!1})},update:function(){var n=this;this.dataInfo.channel=!1,this.$refs.form.validate(function(t){if(!t)return!1;n.loading=!0,o.a.post(n.$api.itemUpdate,n.dataInfo).then(function(t){n.loading=!1,"200"==t.code&&(n.successMessage("修改成功"),setTimeout(function(){n.routerLink("/contentModel/list","list",0,n.$route.query)},500))}).catch(function(t){n.loading=!1})})},add:function(n){var t=this;if(this.dataInfo.channel=!1,this.dataInfo.modelId=this.$route.query.modelId,n){this.$refs.form.validate(function(n){n&&(t.loading=!0,o.a.post(t.$api.itemSave,t.dataInfo).then(function(n){"200"==n.code&&(t.successMessage("添加成功"),setTimeout(function(){t.routerLink("/contentModel/list","list",0,t.$route.query)},500)),t.loading=!1}).catch(function(n){t.loading=!1}))})}},cmsBack:function(){var n=this;setTimeout(function(){n.routerLink("/channelModel/list","list",0,n.$route.query)},500)}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("a",{staticClass:"cms-back",attrs:{href:"javascript:void(0)"},on:{click:n.cmsBack}}),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"字段",prop:"field"}},[0==this.id?e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.field,callback:function(t){n.$set(n.dataInfo,"field",t)},expression:"dataInfo.field"}}):e("span",[n._v(n._s(n.dataInfo.field))])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"名称:",prop:"label"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.label,callback:function(t){n.$set(n.dataInfo,"label",t)},expression:"dataInfo.label"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"数据类型:",prop:"dataType"}},[e("el-select",{staticClass:"cms-width",attrs:{disabled:"update"==n.type},model:{value:n.dataInfo.dataType,callback:function(t){n.$set(n.dataInfo,"dataType",t)},expression:"dataInfo.dataType"}},[e("el-option",{attrs:{label:"字符串文本",value:1}}),n._v(" "),e("el-option",{attrs:{label:"整形文本",value:2}}),n._v(" "),e("el-option",{attrs:{label:"浮点形文本",value:3}}),n._v(" "),e("el-option",{attrs:{label:"文本区",value:4}}),n._v(" "),e("el-option",{attrs:{label:"日期",value:5}}),n._v(" "),e("el-option",{attrs:{label:"下拉列表",value:6}}),n._v(" "),e("el-option",{attrs:{label:"复选框",value:7}}),n._v(" "),e("el-option",{attrs:{label:"单选框",value:8}}),n._v(" "),e("el-option",{attrs:{label:"附件",value:9}}),n._v(" "),e("el-option",{attrs:{label:"图片",value:10}})],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"默认值:",prop:"defValue"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.defValue,callback:function(t){n.$set(n.dataInfo,"defValue",t)},expression:"dataInfo.defValue"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"可选项:",prop:"optValue"}},[e("el-input",{staticClass:"cms-width",attrs:{disabled:"update"==n.type},model:{value:n.dataInfo.optValue,callback:function(t){n.$set(n.dataInfo,"optValue",t)},expression:"dataInfo.optValue"}}),n._v(" "),e("span",{staticClass:"gray"},[n._v('多个值用","分开')])],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"帮助信息:",prop:"help"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.help,callback:function(t){n.$set(n.dataInfo,"help",t)},expression:"dataInfo.help"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"是否必填:",prop:"required"}},[e("el-radio-group",{model:{value:n.dataInfo.required,callback:function(t){n.$set(n.dataInfo,"required",t)},expression:"dataInfo.required"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"独占一行:",prop:"single"}},[e("el-radio-group",{model:{value:n.dataInfo.single,callback:function(t){n.$set(n.dataInfo,"single",t)},expression:"dataInfo.single"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("div",{staticClass:"form-footer"},[0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/add",expression:"'/contentModel/add'"}],attrs:{type:"warning"},on:{click:function(t){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/add",expression:"'/contentModel/add'"}],attrs:{type:"primary"},on:{click:function(t){n.add(!0)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentModel/update",expression:"'/contentModel/update'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},c=[],u={render:d,staticRenderFns:c},f=u,p=e("C7Lr"),v=a,m=p(r,f,!1,v,null,null);t.default=m.exports}});