(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),s=(n(10),n(2)),o=n(5),i=n.n(o),b=n(0),u=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)("button",{className:i.a.feedback__buttons,onClick:function(){return n(e)},children:e},e)}))})},j=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",r]}),Object(b.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},d=function(e){var t=e.title,n=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),n]})},l=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})};function O(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),o=Object(s.a)(a,2),i=o[0],O=o[1],h=Object(c.useState)(0),f=Object(s.a)(h,2),x=f[0],k=f[1],p=Object(c.useState)(!1),v=Object(s.a)(p,2),g=v[0],m=v[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{title:"Please leave feedback",children:Object(b.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":r((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":k((function(e){return e+1}));break;default:return}m(!0)}})}),Object(b.jsxs)(d,{title:"Statistics",children:[!g&&Object(b.jsx)(l,{message:"No feedback given"}),g&&Object(b.jsx)(j,{good:n,neutral:i,bad:x,total:function(){var e=n+i+x;return console.log(e),e}(),positivePercentage:function(){var e=0;return 0===n&&0===x||(e=n/(x+n)*100),Math.round(e)}()})]})]})}a.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={feedback__buttons:"Feedback_feedback__buttons__3iBXe"}}},[[12,1,2]]]);
//# sourceMappingURL=main.2298ddc5.chunk.js.map