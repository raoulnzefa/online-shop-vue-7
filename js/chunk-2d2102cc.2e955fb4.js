(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102cc"],{b789:function(t,c,a){"use strict";a.r(c);var e=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{attrs:{id:"cart"}},[e("h1",[t._v("Корзина")]),t.cart.length?e("div",[t._l(t.cart,(function(c,i){return e("div",{key:c.id,staticClass:"cart-item"},[e("div",{staticClass:"cart-item__image"},[e("img",{attrs:{src:a("7584")("./"+c.category+"/"+c.image),alt:"Image"}}),e("p",{},[t._v(" "+t._s(c.name)+" ")])]),e("p",{staticClass:"cart-item__price"},[t._v(t._s(c.price)+" ₽")]),e("div",{staticClass:"cart-item__quantity"},[e("div",{staticClass:"decrement",on:{click:function(c){return t.quantityDecrement(i)}}},[e("span",[t._v("−")])]),e("div",{staticClass:"quantity"},[t._v(t._s(c.quantity))]),e("div",{staticClass:"increment",on:{click:function(c){return t.quantityIncrement(i)}}},[e("span",[t._v("+")])])]),e("p",{staticClass:"cart-item__sum"},[t._v(t._s(c.price*c.quantity)+" ₽")]),e("img",{staticClass:"deleted-product",attrs:{src:a("1f60"),alt:"Close icon"},on:{click:function(c){return t.deleteProduct(i)}}})])})),e("div",{staticClass:"cart__total"},[e("p",[t._v(" Итого: "+t._s(t.cartTotal)+" ₽ ")])])],2):e("p",{staticClass:"cart__null"},[t._v("Ваша корзина пуста.")])])},i=[],n=a("5530"),s=a("2f62"),r={name:"cart",methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["DELETE_FROM_CART","QUANTITY_INCREMENT","QUANTITY_DECREMENT"])),{},{deleteProduct:function(t){this.DELETE_FROM_CART(t)},quantityDecrement:function(t){this.QUANTITY_DECREMENT(t)},quantityIncrement:function(t){this.QUANTITY_INCREMENT(t)}}),computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(s["d"])(["cart"])),Object(s["c"])(["CART_TOTAL"])),{},{cartTotal:function(){return this.CART_TOTAL}})},_=r,u=a("2877"),l=Object(u["a"])(_,e,i,!1,null,null,null);c["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2102cc.2e955fb4.js.map