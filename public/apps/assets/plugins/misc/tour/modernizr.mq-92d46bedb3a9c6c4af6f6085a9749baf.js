window.Modernizr=function(e,t,n){function r(e){f.cssText=e}function o(e,t){return typeof e===t}var i,a,u,c="2.6.1",l={},d=t.documentElement,s="modernizr",p=t.createElement(s),f=p.style,y=({}.toString,{}),m=[],h=m.slice,v=function(e,n,r,o){var i,a,u,c=t.createElement("div"),l=t.body,p=l?l:t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:s+(r+1),c.appendChild(u);return i=["&#173;",'<style id="s',s,'">',e,"</style>"].join(""),c.id=s,(l?c:p).innerHTML+=i,p.appendChild(c),l||(p.style.background="",d.appendChild(p)),a=n(c,e),l?c.parentNode.removeChild(c):p.parentNode.removeChild(p),!!a},b=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return v("@media "+t+" { #"+s+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},C={}.hasOwnProperty;u=o(C,"undefined")||o(C.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=h.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(h.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(h.call(arguments)))};return r});for(var w in y)u(y,w)&&(a=w.toLowerCase(),l[a]=y[w](),m.push((l[a]?"":"no-")+a));return l.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&l.addTest(r,e[r]);else{if(e=e.toLowerCase(),l[e]!==n)return l;t="function"==typeof t?t():t,enableClasses&&(d.className+=" "+(t?"":"no-")+e),l[e]=t}return l},r(""),p=i=null,l._version=c,l.mq=b,l.testStyles=v,l}(this,this.document);