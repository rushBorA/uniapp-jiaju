(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"13c0":function(t,n,e){},"44c6":function(t,n,e){"use strict";e.r(n);var a=e("ff33"),i=e("8b67");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("f943");var o,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"07ae1ac2",null,!1,a["a"],o);n["default"]=u.exports},7008:function(t,n,e){"use strict";(function(t){e("16cf");a(e("66fd"));var n=a(e("44c6"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"8b67":function(t,n,e){"use strict";e.r(n);var a=e("b65c"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},b65c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("8d7c"));function i(t){return t&&t.__esModule?t:{default:t}}var c={name:"Mine",mixins:[a.default],data:function(){return{user:{avatar:""},userInfo:{},isLogin:!1,baseUrl:"http://bufantec.com",gridList:[{url:"/pages/my/goodscollect/goodscollect",img:"../../static/icons/save.png",text:"商品收藏"},{url:"",img:"../../static/icons/brand.png",text:"品牌"},{url:"/pages/my/articleList/articleList",img:"../../static/icons/article.png",text:"文章收藏"},{url:"./address/address",img:"../../static/icons/address.png",text:"地址"},{url:"",img:"../../static/icons/card.png",text:"卡包"},{url:"/pages/my/shoppingcart/shoppingcart",img:"/static/icons/cart2.png",text:"购物车"}]}},onShow:function(){this.checkHasLogined()?this.init():(console.log(1111111),this.userInfo={})},methods:{tel:function(){t.makePhoneCall({phoneNumber:"110"})},init:function(){var n=t.getStorageSync("leju_user");console.log(n),this.userInfo=n},navigateTo:function(n,e){n?t.navigateTo({url:n}):t.showToast({image:"/static/icons/sorry.png",title:e+"功能暂未开通 !"})},goUserCenter:function(){t.navigateTo({url:"updatainfomation/updatainfomation"})}}};n.default=c}).call(this,e("543d")["default"])},f943:function(t,n,e){"use strict";var a=e("13c0"),i=e.n(a);i.a},ff33:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]}},[["7008","common/runtime","common/vendor"]]]);