(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1840e7d8"],{1102:function(e,t,r){},"640a":function(e,t,r){},8054:function(e,t,r){"use strict";r("afe5")},"8e18":function(e,t,r){"use strict";r("640a")},ad68:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={class:"container py-5"},s=Object(a["g"])("hr",null,null,-1);function c(e,t,r,c,i,o){var u=Object(a["w"])("Spinner"),b=Object(a["w"])("RestaurantDetail"),d=Object(a["w"])("RestaurantComments"),l=Object(a["w"])("CreateComment");return Object(a["p"])(),Object(a["d"])("div",n,[i.isLoading?(Object(a["p"])(),Object(a["d"])(u,{key:0})):(Object(a["p"])(),Object(a["d"])(a["a"],{key:1},[Object(a["g"])(b,{"initial-restaurant":i.restaurant},null,8,["initial-restaurant"]),s,Object(a["g"])(d,{"restaurant-comments":i.restaurantComments,onAfterDeleteComment:o.afterDeleteComment},null,8,["restaurant-comments","onAfterDeleteComment"]),Object(a["g"])(l,{"restaurant-id":i.restaurant.id,onAfterCreateComment:o.afterCreateComment},null,8,["restaurant-id","onAfterCreateComment"])],64))])}var i=r("1da1"),o=r("5530"),u=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),Object(a["H"])("data-v-ddb21160"));Object(a["s"])("data-v-ddb21160");var b={class:"row"},d={class:"col-md-12 mb-3"},l={class:"badge badge-secondary mt-1 mb-3"},m={class:"col-lg-4"},p={class:"contact-info-wrap"},j={class:"list-unstyled"},O=Object(a["g"])("strong",null,"Opening Hour:",-1),f=Object(a["g"])("strong",null,"Tel:",-1),g=Object(a["g"])("strong",null,"Address:",-1),v={class:"col-lg-8"},h=Object(a["f"])(" Dashboard ");Object(a["q"])();var k=u((function(e,t,r,n,s,c){var i=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",b,[Object(a["g"])("div",d,[Object(a["g"])("h1",null,Object(a["y"])(s.restaurant.name),1),Object(a["g"])("p",l,Object(a["y"])(s.restaurant.categoryName),1)]),Object(a["g"])("div",m,[Object(a["g"])("img",{class:"img-responsive center-block",src:s.restaurant.image,style:{width:"250px","margin-bottom":"25px"}},null,8,["src"]),Object(a["g"])("div",p,[Object(a["g"])("ul",j,[Object(a["g"])("li",null,[O,Object(a["f"])(" "+Object(a["y"])(s.restaurant.openingHours),1)]),Object(a["g"])("li",null,[f,Object(a["f"])(" "+Object(a["y"])(s.restaurant.tel),1)]),Object(a["g"])("li",null,[g,Object(a["f"])(" "+Object(a["y"])(s.restaurant.address),1)])])])]),Object(a["g"])("div",v,[Object(a["g"])("p",null,Object(a["y"])(s.restaurant.description),1),Object(a["g"])(i,{class:"btn btn-primary btn-border mr-2",to:{name:"restaurant-dashboard",params:{id:s.restaurant.id}}},{default:u((function(){return[h]})),_:1},8,["to"]),s.restaurant.isFavorited?(Object(a["p"])(),Object(a["d"])("button",{key:0,onClick:t[1]||(t[1]=Object(a["G"])((function(e){return c.deleteFavorite(s.restaurant.id)}),["stop","prevent"])),type:"button",class:"btn btn-danger btn-border mr-2"}," 移除最愛 ")):(Object(a["p"])(),Object(a["d"])("button",{key:1,onClick:t[2]||(t[2]=Object(a["G"])((function(e){return c.addFavorite(s.restaurant.id)}),["stop","prevent"])),type:"button",class:"btn btn-primary btn-border mr-2"}," 加到最愛 ")),s.restaurant.isLiked?(Object(a["p"])(),Object(a["d"])("button",{key:2,onClick:t[3]||(t[3]=Object(a["G"])((function(e){return c.deleteLike(s.restaurant.id)}),["stop","prevent"])),type:"button",class:"btn btn-danger like mr-2"}," Unlike ")):(Object(a["p"])(),Object(a["d"])("button",{key:3,onClick:t[4]||(t[4]=Object(a["G"])((function(e){return c.addLike(s.restaurant.id)}),["stop","prevent"])),type:"button",class:"btn btn-primary like mr-2"}," Like "))])])})),w=r("4cce"),x=r("2fa3"),y={name:"RestaurantDetail",props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(e){this.restaurant=Object(o["a"])(Object(o["a"])({},this.restaurant),e)}},methods:{addFavorite:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w["a"].addFavorite({restaurantId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),x["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorite:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w["a"].deleteFavorite({restaurantId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),x["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w["a"].addLike({restaurantId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),x["a"].fire({icon:"error",title:"無法按讚，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w["a"].deleteLike({restaurantId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),x["a"].fire({icon:"error",title:"無法取消按讚，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}};r("8054");y.render=k,y.__scopeId="data-v-ddb21160";var C=y,R=Object(a["H"])("data-v-7788337b");Object(a["s"])("data-v-7788337b");var I=Object(a["g"])("h2",{class:"my-4"}," 所有評論： ",-1),L={class:"blockquote mb-0"},D={class:"blockquote-footer"},F=Object(a["g"])("hr",null,null,-1);Object(a["q"])();var U=R((function(e,t,r,n,s,c){var i=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",null,[I,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.restaurantComments,(function(t){return Object(a["p"])(),Object(a["d"])("div",{key:t.id},[Object(a["g"])("blockquote",L,[e.currentUser.isAdmin?(Object(a["p"])(),Object(a["d"])("button",{key:0,onClick:Object(a["G"])((function(e){return c.handleDeleteButtonClick(t.id)}),["stop","prevent"]),type:"button",class:"btn btn-danger float-right"}," Delete ",8,["onClick"])):Object(a["e"])("",!0),Object(a["g"])("h3",null,[Object(a["g"])(i,{to:{name:"user",params:{id:t.User.id}}},{default:R((function(){return[Object(a["f"])(Object(a["y"])(t.User.name),1)]})),_:2},1032,["to"])]),Object(a["g"])("p",null,Object(a["y"])(t.text),1),Object(a["g"])("footer",D,Object(a["y"])(e.fromNow(t.createdAt)),1)]),F])})),128))])})),A=r("2708"),q=r("5502"),_={create:function(e){var t=e.restaurantId,r=e.text;return x["b"].post("/comments",{restaurantId:t,text:r})},delete:function(e){var t=e.commentId;return x["b"].delete("/comments/".concat(t))}},E={mixins:[A["a"]],name:"restaurantComments",props:{restaurantComments:{type:Array,required:!0}},computed:Object(o["a"])({},Object(q["b"])(["currentUser"])),methods:{handleDeleteButtonClick:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_.delete({commentId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:t.$emit("after-delete-comment",e),x["a"].fire({icon:"success",title:"移除評論成功"}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.error(r.t0.message),x["a"].fire({icon:"error",title:"無法移除評論，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}};r("be57");E.render=U,E.__scopeId="data-v-7788337b";var H=E,S=Object(a["H"])("data-v-631fa618");Object(a["s"])("data-v-631fa618");var G={class:"form-group mb-4"},N=Object(a["g"])("label",{for:"text"},"留下評論：",-1),P={class:"d-flex align-items-center justify-content-between"};Object(a["q"])();var $=S((function(e,t,r,n,s,c){return Object(a["p"])(),Object(a["d"])("form",{onSubmit:t[3]||(t[3]=Object(a["G"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent","stop"]))},[Object(a["g"])("div",G,[N,Object(a["F"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.text=e}),class:"form-control",rows:"3",name:"text"},null,512),[[a["B"],s.text]])]),Object(a["g"])("div",P,[Object(a["g"])("button",{type:"button",class:"btn btn-link",onClick:t[2]||(t[2]=function(t){return e.$router.back()})}," 回上一頁 "),Object(a["g"])("button",{type:"submit",class:"btn btn-primary mr-0",disable:s.isProcessing}," Submit ",8,["disable"])])],32)})),B=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.text){t.next=4;break}return x["a"].fire({icon:"warning",title:"您尚未填寫任何評論"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,_.create({restaurantId:e.restaurantId,text:e.text});case 7:if(r=t.sent,a=r.data,"error"!==a.status){t.next=11;break}throw new Error(a.message);case 11:e.$emit("after-create-comment",{commentId:a.commentId,restaurantId:e.restaurantId,text:e.text}),x["a"].fire({icon:"success",title:"已建立新評論！"}),e.isProcessing=!1,e.text="",t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](0),console.error(t.t0.message),e.isProcessing=!1,x["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 22:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}});r("8e18");B.render=$,B.__scopeId="data-v-631fa618";var J=B,T=r("c4c3"),V=r("2375"),z={name:"Resaurant",components:{RestaurantDetail:C,RestaurantComments:H,CreateComment:J,Spinner:V["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},computed:Object(o["a"])({},Object(q["b"])(["currentUser"])),beforeRouteUpdate:function(e,t,r){var a=e.params.id;this.fetchRestaurant(a),r()},created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s,c,i,o,u,b,d,l,m,p,j,O;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,T["a"].getRestaurant({restaurantId:e});case 4:if(a=r.sent,n=a.data,"error"!==n.status){r.next=8;break}throw new Error(n.message);case 8:s=n.restaurant,c=n.isFavorited,i=n.isLiked,o=s.id,u=s.name,b=s.Category,d=s.image,l=s.opening_hours,m=s.tel,p=s.address,j=s.description,O=s.Comments,t.restaurant={id:o,name:u,categoryName:b?b.name:"未分類",image:d,openingHours:l,tel:m,address:p,description:j,isFavorited:c,isLiked:i},t.restaurantComments=O,t.isLoading=!1,r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](0),console.log(r.t0.message),t.isLoading=!1,x["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 20:case"end":return r.stop()}}),r,null,[[0,15]])})))()},afterDeleteComment:function(e){this.restaurantComments=this.restaurantComments.filter((function(t){return t.id!==e}))},afterCreateComment:function(e){var t=e.commentId,r=e.restaurantId,a=e.text;this.restaurantComments.push({id:t,RestaurantId:r,User:{createdAt:new Date,email:this.currentUser.email,id:this.currentUser.id,name:this.currentUser.name,updatedAt:new Date},text:a,createdAt:new Date})}}};z.render=c;t["default"]=z},afe5:function(e,t,r){},be57:function(e,t,r){"use strict";r("1102")}}]);
//# sourceMappingURL=chunk-1840e7d8.b7532ac6.js.map