(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(58)},26:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,o,r,c,l,s,i,u=n(0),m=n.n(u),d=n(19),f=n.n(d),h=(n(26),n(2)),p=n(3),b=n(6),y=n(5),E=n(7),g=n(4),v=n(20),q=n.n(v),w=n(10),k=n.n(w);n(56);function j(e){return o.style.opacity=e,r.style.opacity=e,c.style.opacity=e,l.style.opacity=e}function N(e){return o=document.querySelector(".text"),r=document.querySelector(".author"),c=document.querySelector(".t-icon"),l=document.querySelector(".f-icon"),i=document.querySelector(".quote-symbol"),s=document.querySelector(".btn"),e=e[Math.floor(Math.random()*a.length)],s.style.backgroundColor=e,i.style.backgroundColor=e,function(e,t){e=document.getElementsByClassName(e);for(var n=0;n<e.length;n++)e[n].style.color=t}("fab",e)}a=["#293C56","#71a0a5","#6F5E76","#88A096","#71a0a5","#444444","#567568","#C9B1BD","#305f72","#30BCED","#73FBD3","#6b8c42"];var C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(y.a)(t).call(this))).getQuote=function(t){return q.a.get("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&timestap=".concat((new Date).getTime())).then((n=t,function(e){return new Promise(function(t){return setTimeout(function(){return t(e)},n)})})).then(function(t){var n=t.data[0],o=n.content,r=n.title;N(a),j(1),console.log(t.data[0]),e.setState({quotes:o.rendered,author:r.rendered,isLoading:!1})});var n},e.state={quotes:"",author:"",isLoading:!1},e.handleRequest=e.handleRequest.bind(Object(g.a)(e)),e}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"handleRequest",value:function(){j(0),this.getQuote(500)}},{key:"render",value:function(){return m.a.createElement("div",{style:{display:"flex",flexDirection:"column",positio:"relative"}},m.a.createElement("div",{id:"quote-box",className:"box-wrapper"},m.a.createElement("div",{className:"box"},m.a.createElement("div",{className:"quote-symbol"}),m.a.createElement("div",{className:"quote-content"},m.a.createElement("div",{id:"text",className:"text"},k()(this.state.quotes),m.a.createElement("p",{id:"author",className:"author"},k()(this.state.author)," "),m.a.createElement("div",{className:"mediaIcons"},m.a.createElement("a",{id:"tweet-quote",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet"},m.a.createElement("i",{className:"fab fa-twitter-square t-icon"})),m.a.createElement("a",{href:"http://facebook.com",target:"_blank",rel:"noopener noreferrer"},m.a.createElement("i",{className:"fab fa-facebook-square f-icon"})))),m.a.createElement("footer",null,m.a.createElement("div",null,m.a.createElement("button",{id:"new-quote",className:"btn btnQuote",onClick:this.handleRequest},"get new quote")))))),m.a.createElement("footer",{id:"statement"},m.a.createElement("p",null,"Random quote app, design and made by ",m.a.createElement("a",{href:"https://leonelmatos.com"},"Leonel Matos")," as part as his learning path to Web Developmetn from FCC."),m.a.createElement("p",null,m.a.createElement("em",null,"\u2014 Quotes data from ",m.a.createElement("a",{href:"https://quotesondesign.com/"},"Quotes Design")," \u2014"))))}}]),t}(m.a.Component),O=(n(57),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(C,null))}}]),t}(u.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(m.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.b380ec18.chunk.js.map