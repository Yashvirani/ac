(this.webpackJsonpac=this.webpackJsonpac||[]).push([[0],{47:function(e,a,t){e.exports=t(78)},52:function(e,a,t){},53:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(37),l=t.n(r),i=(t(52),t(38)),o=t(8),s=t(14),m=t(4),u=(t(53),t(39)),d=t.n(u),E=t(43),p=t.n(E),g=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},h=function(){return Object(n.useContext)(g)},v=t(29),f=t.n(v),b=(f.a.initializeApp({apiKey:"AIzaSyBwyA-1LOkjBtplTDki0gQFAs7ZBO3430c",authDomain:"amazo-cloned.firebaseapp.com",databaseURL:"https://amazo-cloned.firebaseio.com",projectId:"amazo-cloned",storageBucket:"amazo-cloned.appspot.com",messagingSenderId:"313229619794",appId:"1:313229619794:web:e1586ad9f2949f5e51a58b",measurementId:"G-3DHF5VW5H5"}).firestore(),f.a.auth()),k=t(44),N=t.n(k);var S=function(){var e=h(),a=Object(o.a)(e,1)[0],t=a.basket,n=a.user;return console.log(t),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(d.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(s.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",n?n.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),c.a.createElement(s.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"Orders"))),c.a.createElement(s.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(s.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length))))),c.a.createElement("div",{className:"navbar"},c.a.createElement(N.a,{className:"icon"})))};t(69),t(70);var O=function(e){var a=e.id,t=e.title,n=e.price,r=e.image,l=e.rating,i=h(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:r,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:r,price:n,rating:l}})}},"Add to Cart"))};var j=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{src:"https://i.computer-bild.de/imgs/6/3/7/5/8/7/7/f19043122733add5.jpg",alt:"",className:"home__image"}),c.a.createElement("div",{className:"home__row__2"},c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"}),c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"})),c.a.createElement("div",{className:"home__row__3"},c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"}),c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"}),c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"})),c.a.createElement("div",{className:"home__row__1"},c.a.createElement(O,{id:"1",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:11.11,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"})))};t(71),t(72);var w=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=h(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove From Cart")))},A=(t(73),t(45)),B=t.n(A),y=t(33),C=t(18),I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},L=function(e,a){switch(a.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(y.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant remove item with ID ".concat(a.id)),Object(C.a)(Object(C.a)({},e),{},{basket:t});default:return e}};var T=function(){var e=h(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(B.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:I(t),displayType:"text",thousandSeperator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))};var z=function(){var e=h(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your Shopping Cart is Empty."),c.a.createElement("p",null,"You have no items in your cart. Add some items to your cart.")):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Cart"),t.map((function(e){return c.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),t.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))};t(75);var x=function(){var e=Object(m.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),d=u[0],E=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"email"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:d,onChange:function(e){return E(e.target.value)},type:"password"}),c.a.createElement("button",{className:"login__signInButton",onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit"},"Sign In")),c.a.createElement("p",{className:"p"},"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__RegisterButton"},"Create Your Amazon Account")))};t(76);var D=function(){var e=h(),a=Object(o.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(s.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/checkout"},c.a.createElement(S,null),c.a.createElement(z,null)),c.a.createElement(m.a,{path:"/login"},c.a.createElement(x,null)),c.a.createElement(m.a,{path:"/login"}),c.a.createElement(m.a,{path:"/"},c.a.createElement(S,null),c.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:L},c.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d744ac43.chunk.js.map