(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),u=n(2),o=(n(14),n(15),n(1)),l=n.n(o),i=n(3),m=(n(17),n(18),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),p="https://mate-api.herokuapp.com";var f=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,0!==Number(t)){e.next=8;break}return e.abrupt("return",a.data);case 8:return r=a.data.filter((function(e){return e.userId===Number(t)})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function b(e){var t=e.selectedUser,n=e.setSelectedPostId,c=e.selectedPostId,s=Object(a.useState)([]),o=Object(u.a)(s,2),p=o[0],d=o[1],b=Object(a.useState)(!0),E=Object(u.a)(b,2),v=E[0],h=E[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),h(!1)}),[t]);return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),v?r.a.createElement(m,null):r.a.createElement("ul",{className:"PostsList__list"},p.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]:")),e.body),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void n((function(e){return e===t?"":t}));var t}},c!==e.id?"Open":"Close"))}))))}var E=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments/"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.data.filter((function(e){return e.postId===Number(t)})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return","Error");case 5:return a=n.json(),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments/").concat(t),{method:"DELETE"});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return","Error");case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=n(8),O=(n(19),function(e){var t=e.onAdd,n=e.postId,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),d=f[0],b=f[1],E=Object(a.useState)(""),h=Object(u.a)(E,2),O=h[0],N=h[1],_=Object(a.useState)(""),x=Object(u.a)(_,2),y=x[0],k=x[1],w=Object(a.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&d&&O){e.next=3;break}return e.abrupt("return");case 3:return r={name:o,body:O,email:d,postId:n},e.next=6,v(r);case 6:if("Error"!==(c=e.sent)){e.next=10;break}return k("Error"),e.abrupt("return");case 10:t((function(e){return[].concat(Object(j.a)(e),[c])})),m(""),b(""),N("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o,O,d,t,n]);return r.a.createElement("form",{className:"NewCommentForm",onSubmit:w},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__textarea",value:O,onChange:function(e){return N(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button",onClick:v},"Add a comment"),y&&r.a.createElement("p",{className:"errorText"},"Try again leter."))});O.defaultProps={postId:0};n(20);var N=function(e){var t=e.commentId,n=e.commentBody,a=e.deleteComment,c=e.commentErrorId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"PostDetails__list-item",key:t},r.a.createElement("button",{className:"button",type:"button",onClick:function(){return a(t)}},"X"),r.a.createElement("p",null,n)),c===t&&r.a.createElement("p",{className:"errorText"},"Error, please, try again later."))},_=function(e){var t=e.selectedPostId,n=Object(a.useState)(!0),c=Object(u.a)(n,2),s=c[0],o=c[1],p=Object(a.useState)({}),f=Object(u.a)(p,2),b=f[0],v=f[1],j=Object(a.useState)([]),_=Object(u.a)(j,2),x=_[0],y=_[1],k=Object(a.useState)(!0),w=Object(u.a)(k,2),C=w[0],P=w[1],S=Object(a.useState)(0),g=Object(u.a)(S,2),I=g[0],A=g[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(b.id);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),P(!1)}),[b.id]);var D=Object(a.useCallback)((function(){o((function(e){return!e}))}),[]),L=Object(a.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if("Error"!==e.sent){e.next=6;break}return A(t),e.abrupt("return");case 6:n=x.filter((function(e){return e.id!==t})),y(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x]);return r.a.createElement(r.a.Fragment,null,C?r.a.createElement(m,null):r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,b.body)),r.a.createElement("section",{className:"PostDetails__comments"},0===x.length?r.a.createElement("p",null,"No comments"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"button",onClick:D},s?"Show ".concat(x.length," comment(s)"):"Hide ".concat(x.length," comment(s)")),!s&&r.a.createElement("ul",{className:"PostDetails__list"},x.map((function(e){return r.a.createElement(N,{key:e.id,commentId:e.id,commentErrorId:I,deleteComment:L,commentBody:e.body})}))))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(O,{onAdd:y,postId:b.id})))))};var x=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),l=o[0],i=o[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{selectedUser:Number(n),setSelectedPostId:i,selectedPostId:Number(l)})),r.a.createElement("div",{className:"App__content"},l&&r.a.createElement(_,{selectedPostId:Number(l)}))))};s.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4944d586.chunk.js.map