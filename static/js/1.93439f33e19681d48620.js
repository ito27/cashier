webpackJsonp([1,5,6],{"3gIu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),c=n("NYxO"),i=n("n7mW"),r=n("COBD"),u=n("N4Va"),o={name:"ItemOrder",components:{ItemCard:i.default,Cart:r.default,checkout:u.default},data:function(){return{menu_stat:!0}},computed:a()({},Object(c.d)(["cart","items"]))},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.menu_stat?n("Item-card"):t._e(),t._v(" "),t.items.length>0?n("Cart",{attrs:{cart:t.cart}}):t._e(),t._v(" "),t.cart.length>0&&t.menu_stat?n("b-button",{on:{click:function(e){t.menu_stat=!1}}},[t._v("\n    結帳\n  ")]):t._e(),t._v(" "),t.menu_stat?t._e():n("b-button",{on:{click:function(e){t.menu_stat=!0}}},[t._v("\n    回菜單\n  ")]),t._v(" "),t.menu_stat?t._e():n("checkout",{attrs:{cart:t.cart},on:{checkout:function(e){t.menu_stat=!0}}})],1)},staticRenderFns:[]},d=n("VU/8")(o,l,!1,null,null,null);e.default=d.exports},N4Va:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),a=n.n(s),c=n("fZjL"),i=n.n(c),r=n("exGp"),u=n.n(r),o=n("Dd8w"),l=n.n(o),d=n("NYxO"),_={name:"checkout",components:{NumPad:n("RZGl").default},props:{cart:{type:Array,default:function(){return[]}},btnStats:{type:Array,default:function(){return["外帶","內用"]}}},data:function(){return{key_type:"int",price:null,cash:0,stat:null,cash_mode:!1}},computed:l()({},Object(d.d)(["userInformation"]),{summary:function(){var t=this.cart.reduce(function(t,e){return t.items.push(e),t.price+=e.price*e.number,t},{items:[],price:0,cash:this.cash,stat:this.stat});return this.price=t.price,t},checkoutDisable:function(){var t=this.stat||0===this.btnStats.length,e=this.cart.length>0,n=this.cash-this.price>=0,s=this.cash-this.price<1e3;return!(t&&e&&n&&s)}}),methods:l()({},Object(d.c)(["CHECKOUT_CART"]),Object(d.b)(["fbPost"]),{setStat:function(t){this.stat=t},checkoutCart:function(){var t=u()(a.a.mark(function t(e){var n=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fbPost(["shops/"+this.userInformation.shopId+"/carts",e]);case 2:t.sent.id&&(i()(this.$data).forEach(function(t){return n.$data[t]=null}),this.CHECKOUT_CART());case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.cash_mode?n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"name"},[t._v("總價")]),t._v(" "),n("div",{staticClass:"value"},[t._v(t._s(t.summary.price))]),t._v(" "),n("div",{staticClass:"name"},[t._v("現金")]),t._v(" "),n("div",{staticClass:"value",staticStyle:{background:"pink"},on:{click:function(e){t.cash_mode=!0}}},[t._v(t._s(t.cash))]),t._v(" "),n("b-button",{attrs:{variant:"ten"===t.key_type?"success":"light"},on:{click:function(e){t.key_type="ten"}}},[t._v("數字鍵盤")]),t._v(" "),n("b-button",{attrs:{variant:"int"===t.key_type?"success":"light"},on:{click:function(e){t.key_type="int"}}},[t._v("整數")])],1),t._v(" "),n("b-card",[n("Num-pad",{attrs:{keyType:t.key_type},on:{touchBtn:function(e){t.cash=e},confrim:function(e){t.cash_mode=!1},equal:function(e){t.cash=t.price}}})],1)],1):t._e(),t._v(" "),t.cash_mode?t._e():n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"name"},[t._v("總價")]),t._v(" "),n("div",{staticClass:"value"},[t._v(t._s(t.summary.price))]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n        現金\n      ")]),t._v(" "),n("b-button",{staticClass:"value",attrs:{variant:"outline-danger"},on:{click:function(e){t.cash_mode=!0}}},[t._v("\n        "+t._s(t.cash)+"\n      ")])],1),t._v(" "),t.cash-t.summary.price>0?n("div",{staticClass:"container"},[n("div",{staticClass:"name"},[t._v("找零")]),t._v(" "),n("div",{staticClass:"value",style:t.cash-t.summary.price<1e3?"color: blue":"background: red"},[t._v(t._s(t.cash-t.summary.price))])]):t._e(),t._v(" "),n("div",{staticClass:"container"},[n("div",t._l(t.btnStats,function(e,s){return n("b-button",{key:s,staticClass:"value",attrs:{variant:t.stat===e?"danger":"light"},on:{click:function(n){t.setStat(e)}}},[t._v(t._s(e))])})),t._v(" "),n("b-button",{staticClass:"value",attrs:{disabled:t.checkoutDisable,variant:t.checkoutDisable?"light":"success"},on:{click:function(e){t.checkoutCart(t.summary),t.$emit("checkout")}}},[t._v("結帳")])],1)])])},staticRenderFns:[]};var h=n("VU/8")(_,p,!1,function(t){n("bllY")},"data-v-491120c9",null);e.default=h.exports},bllY:function(t,e){},kxQV:function(t,e){},n7mW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("woOf"),a=n.n(s),c=n("fZjL"),i=n.n(c),r=n("Dd8w"),u=n.n(r),o=n("NYxO"),l={name:"ItemCard",components:{CustomList:n("RFjD").default},data:function(){return{selected:null,products:null}},mounted:function(){this.init()},computed:u()({},Object(o.d)(["userInformation","items"]),{fetched:function(){return!!this.items&&(this.feedProducts(),!0)}}),methods:u()({},Object(o.b)(["fbGet"]),Object(o.c)(["CHECKOUT_ITEM"]),{feedProducts:function(){var t={};this.items.forEach(function(e){void 0!==e.specials&&e.specials.forEach(function(t){return t.price=parseInt(t.price,10)}),t[e.name]={id:e.id,name:e.name,price:parseInt(e.price,10),price_total:0,specials:e.specials,specials_price_total:0,specials_selected:[],number:0,is_selected:!1}}),this.products=t;for(var e=i()(this.products),n=0;n<e.length;n+=1)void 0!==this.products[e[n]].specials&&this.products[e[n]].specials.forEach(function(t){a()(t,{is_selected:!1})})},specialAdd:function(t){var e=t.specials.reduce(function(t,e){if(e.is_selected){var n={name:e.name,price:e.price};t.arr.push(n),t.num+=e.price}return t},{arr:[],num:0});t.specials_selected=e.arr,t.specials_price_total=e.num,this.calculatePriceTotal(t)},init:function(){this.getShopItem()},getShopItem:function(){this.fbGet(["shops/"+this.userInformation.shopId+"/items","items"])},select:function(t){var e=this;i()(this.products).forEach(function(t){return e.products[t].is_selected=!1}),this.products[t].is_selected=!0,this.selected=t},changeNumber:function(t,e){switch(t){case"plus":e.number+=1;break;case"minus":e.number>0&&(e.number-=1)}this.calculatePriceTotal(e)},calculatePriceTotal:function(t){t.price_total=t.specials_price_total+t.price},addToCart:function(t){var e="";t.specials_selected.length>0&&t.specials_selected.forEach(function(t){e+=t.name});var n={name:t.name,specials_id:e,specials:t.specials_selected,number:t.number,price:t.price_total};this.CHECKOUT_ITEM(n),this.feedProducts()}})},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.fetched?n("div",[Object.keys(t.products).length?t._l(t.products,function(e,s){return n("b-card",{key:s,attrs:{"body-bg-variant":e.is_selected?"light":"white","text-variant":e.is_selected?"primary":"dark"},on:{click:function(n){t.select(e.name)}}},[n("p",{staticClass:"name"},[t._v("\n        "+t._s(e.name)+": "+t._s(e.price)+"$"),e.specials_price_total>0?n("span",{staticClass:"name-tag"},[t._v("+"+t._s(e.specials_price_total))]):t._e()]),t._v(" "),n("h2",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){t.changeNumber("plus",e)}}},[t._v("＋")]),t._v("\n          "+t._s(e.number)+"\n        "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){t.changeNumber("minus",e)}}},[t._v("－")]),t._v(" "),n("b-button",{attrs:{disabled:!Boolean(e.number),variant:Boolean(e.number)?"danger":"outline-danger"},on:{click:function(n){t.addToCart(e)}}},[t._v("🛒")])],1),t._v(" "),n("Custom-list",{attrs:{item:e}},[t._v("i am here to help child re-render when props change but never show up")])],1)}):n("b-card",[n("h1",[t._v("沒有商品，請至設定頁面確認")]),n("b-link",{attrs:{to:"Settings"}},[t._v("點我")])],1)],2):n("div",[n("b-button",{on:{click:t.getShopItem}},[t._v("取得商品清單")])],1)])},staticRenderFns:[]};var _=n("VU/8")(l,d,!1,function(t){n("kxQV")},"data-v-502da4ce",null);e.default=_.exports}});