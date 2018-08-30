webpackJsonp([4],{"Cw/C":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("fZjL"),a=n.n(i),s=n("Dd8w"),r=n.n(s),o=n("NYxO"),l=n("woOf"),m=n.n(l),u={name:"ItemForm",props:{itemList:{type:Array,default:function(){return[]}}},data:function(){return{collections:[],area_show:!1,exist_alert:!1,itemList_fields:[{key:"name",label:"名稱"},{key:"price",label:"價格"},{key:"action",label:""}],new_item:{name:{inputType:"text",prepend:"名稱",value:null,special_temp:null,special:[]},price:{inputType:"number",prepend:"價錢",value:null,special_temp:null,special:[]}}}},methods:{addToList:function(){var e=this;""!==this.new_item.name.value&&(-1===this.itemList.findIndex(function(t){return t.name===e.new_item.name.value})?(this.exist_alert=!1,this.itemList.push(m()({},{name:this.new_item.name.value,price:this.new_item.price.value}))):this.exist_alert=!0);this.$emit("set-item-result",this.itemList),this.clearInput()},clearInput:function(){this.new_item.name.value=null,this.new_item.price.value=null},removeFromList:function(e){var t=this.itemList.findIndex(function(t){return t.name===e.name});-1!==t&&this.itemList.splice(t,1)},ifDisabled:function(e,t){for(var n=a()(e),i=!1,s=0;s<n.length;s+=1)t?e[n[s]][t]||(i=!0):e[n[s]]||(i=!0);return i}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-alert",{attrs:{show:""}},[n("p",[e._v("\n      客製清單"),!1===e.area_show?n("span",[e._v("( "+e._s(e.itemList.length)+" 項)")]):e._e()]),e._v(" "),n("b-button",{on:{click:function(t){e.area_show=!e.area_show}}},[e._v(e._s(e.area_show?"收合":"展開"))])],1),e._v(" "),!0===e.area_show?n("div",[e.itemList.length>0?n("div",[n("b-table",{attrs:{items:e.itemList,fields:e.itemList_fields},scopedSlots:e._u([{key:"action",fn:function(t){return[n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){n.stopPropagation(),e.removeFromList(t.item)}}},[e._v("\n            刪除\n          ")])]}}])})],1):n("div",[n("p",[e._v("沒有客製項目")])]),e._v(" "),n("div",[n("b-card",{attrs:{"no-body":""}},[n("b-alert",{attrs:{variant:"danger",dismissible:"",show:e.exist_alert},on:{dismissed:function(t){e.exist_alert=!1}}},[e._v("已在清單上")])],1),e._v(" "),e._l(Object.keys(e.new_item),function(t,i){return n("b-input-group",{key:i,attrs:{prepend:e.new_item[t].prepend}},["checkbox"===e.new_item[t].inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.new_item[t].value)?e._i(e.new_item[t].value,null)>-1:e.new_item[t].value},on:{change:function(n){var i=e.new_item[t].value,a=n.target,s=!!a.checked;if(Array.isArray(i)){var r=e._i(i,null);a.checked?r<0&&e.$set(e.new_item[t],"value",i.concat([null])):r>-1&&e.$set(e.new_item[t],"value",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.new_item[t],"value",s)}}}):"radio"===e.new_item[t].inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:"radio"},domProps:{checked:e._q(e.new_item[t].value,null)},on:{change:function(n){e.$set(e.new_item[t],"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:e.new_item[t].inputType},domProps:{value:e.new_item[t].value},on:{input:function(n){n.target.composing||e.$set(e.new_item[t],"value",n.target.value)}}})])}),e._v(" "),n("b-button",{attrs:{disabled:e.ifDisabled(e.new_item,"value"),variant:"success"},on:{click:function(t){e.addToList()}}},[e._v("確定")]),e._v(" "),n("b-button",{on:{click:function(t){e.clearInput()}}},[e._v("重填")])],2)]):e._e()],1)},staticRenderFns:[]},p={name:"ItemTable",components:{ItemForm:n("VU/8")(u,c,!1,null,null,null).exports},data:function(){return{fields:{name:{label:"名稱"},specials:{label:"客製"},price:{label:"價格"},actions:{label:"修改"}},new_item:{name:{inputType:"text",prepend:"名稱",value:null},price:{inputType:"number",prepend:"價錢",value:null}},specials:[]}},mounted:function(){this.init()},props:{manage:!1},computed:r()({},Object(o.d)(["items","userInformation"]),{fetched:function(){return!!this.items}}),methods:r()({},Object(o.b)(["fbGet","fbPost","fbUpdate","fbDelete"]),{init:function(){this.getShopItem()},addItem:function(e){var t=this;this.fbPost(["shops/"+this.userInformation.shopId+"/items",{name:e.name.value,price:"string"==typeof e.price.value?parseInt(e.price.value,10):e.price.value,specials:this.specials}]).then(function(e){e.id&&(a()(t.new_item).forEach(function(e){t.new_item[e].value=null,t.specials=[]}),t.getShopItem())})},getShopItem:function(){this.fbGet(["shops/"+this.userInformation.shopId+"/items","items"])},deleteItem:function(e,t){var n=this;this.fbDelete(["shops/"+this.userInformation.shopId+"/items/"+e.id]).then(function(){n.items.splice(t,1),delete n.$store.state.items[e.name]})},updateItem:function(e){e.specials.forEach(function(e){return e.price=parseInt(e.price,10)}),this.fbUpdate(["shops/"+this.userInformation.shopId+"/items/"+e.id,{name:e.name,price:e.price,specials:e.specials}])},ifDisabled:function(e,t){for(var n=a()(e),i=!1,s=0;s<n.length;s+=1)t?e[n[s]][t]||(i=!0):e[n[s]]||(i=!0);return i}})},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.fetched?e._e():n("b-button",{on:{click:e.getShopItem}},[e._v("取得清單")]),e._v(" "),0===e.items.length?n("div",[e.manage?n("h5",[e._v("沒有商品記錄，請新增一項商品")]):n("h5",[e._v("這間店空空的，叫你老闆拿東西出來賣")])]):n("div",[n("b-table",{attrs:{responsive:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"specials",fn:function(t){return e._l(t.unformatted,function(t,i){return n("b-list-group-item",{key:i},[n("p",{staticClass:"name"},[e._v(e._s(t.name)),n("span",{staticClass:"name-tag"},[e._v("$ "+e._s(t.price))])])])})}},{key:"actions",fn:function(t){return e.manage?[n("b-button",{attrs:{size:"sm"},on:{click:function(e){return e.stopPropagation(),t.toggleDetails(e)}}},[e._v("\n          "+e._s(t.detailsShowing?"關閉":"修改")+"\n        ")])]:void 0}},{key:"name",fn:function(t){return[n("p",{staticClass:"name"},[e._v(e._s(t.item.name))])]}},{key:"row-details",fn:function(t){return e.manage?[n("b-card",{attrs:{"bg-variant":"secondary"}},[n("b-input-group",{attrs:{prepend:"名稱"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"row.item.name"}],staticClass:"form-control",domProps:{value:t.item.name},on:{input:function(n){n.target.composing||e.$set(t.item,"name",n.target.value)}}})]),e._v(" "),n("b-input-group",{attrs:{prepend:"價格"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.price,expression:"row.item.price"}],staticClass:"form-control",attrs:{min:"0",type:"number"},domProps:{value:t.item.price},on:{input:function(n){n.target.composing||e.$set(t.item,"price",n.target.value)}}})]),e._v(" "),e._l(t.item.specials,function(t,i){return n("div",{key:i},[n("b-input-group",{attrs:{prepend:"客製"+(i+1)+"名稱"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"special.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]),e._v(" "),n("b-input-group",{attrs:{prepend:"客製"+(i+1)+"價格"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"special.price"}],staticClass:"form-control",attrs:{type:"number",min:"0"},domProps:{value:t.price},on:{input:function(n){n.target.composing||e.$set(t,"price",n.target.value)}}})])],1)}),e._v(" "),n("b-button",{attrs:{disabled:!0===e.ifDisabled(t.item),variant:e.ifDisabled(t.item)?"":"success"},on:{click:function(n){e.updateItem(t.item)}}},[e._v("更新商品")]),e._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(n){n.stopPropagation(),e.deleteItem(t.item,t.index)}}},[e._v("刪除商品")])],2)]:void 0}}])})],1),e._v(" "),e.manage?n("b-card-group",[n("b-card",[e._l(Object.keys(e.new_item),function(t,i){return n("b-input-group",{key:i,attrs:{prepend:e.new_item[t].prepend}},["checkbox"===e.new_item[t].inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.new_item[t].value)?e._i(e.new_item[t].value,null)>-1:e.new_item[t].value},on:{change:function(n){var i=e.new_item[t].value,a=n.target,s=!!a.checked;if(Array.isArray(i)){var r=e._i(i,null);a.checked?r<0&&e.$set(e.new_item[t],"value",i.concat([null])):r>-1&&e.$set(e.new_item[t],"value",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.new_item[t],"value",s)}}}):"radio"===e.new_item[t].inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:"radio"},domProps:{checked:e._q(e.new_item[t].value,null)},on:{change:function(n){e.$set(e.new_item[t],"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_item[t].value,expression:"new_item[key].value"}],staticClass:"form-control",attrs:{min:"0",type:e.new_item[t].inputType},domProps:{value:e.new_item[t].value},on:{input:function(n){n.target.composing||e.$set(e.new_item[t],"value",n.target.value)}}})])}),e._v(" "),n("b-button",{attrs:{disabled:!0===e.ifDisabled(e.new_item,"value"),variant:e.ifDisabled(e.new_item,"value")?"":"success"},on:{click:function(t){e.addItem(e.new_item),e.flipCustom=!0}}},[e._v("新增商品")])],2),e._v(" "),n("b-card",[n("item-form",{attrs:{"item-list":e.specials},on:{"set-item-result":function(t){e.specials=t}}})],1)],1):e._e()],1)},staticRenderFns:[]};var d=n("VU/8")(p,v,!1,function(e){n("Ugkx")},"data-v-6b06aaa8",null);t.default=d.exports},Ugkx:function(e,t){}});
//# sourceMappingURL=4.83f1e87582864675704d.js.map