!function(){"use strict";var t="/Official-web/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"official-web","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.67e9b217.async.js",9],["nm__dumi__dist__client__pages__404.8bf60a3c.async.js",65],["docs__search.md.a0bd0111.async.js",95],["docs__about.md.7e011409.async.js",156],["260.2999f05e.async.js",260],["docs__assess.md.1719f065.async.js",265],["docs__new.md.c55c6618.async.js",341],["docs__identify.md.18cde231.async.js",374],["nm__dumi__theme-default__layouts__DocLayout__index.6a03aa9d.async.js",519],["dumi__tmp-production__dumi__theme__ContextWrapper.6669e058.async.js",923],["docs__index.md.eebc5f2d.async.js",935],["docs__guide.md.04b96a78.async.js",937]],"r":{"/*":[1,4,8,9],"/":[10,4,8,9],"/identify":[7,4,8,9],"/assess":[5,4,8,9],"/search":[2,4,8,9],"/about":[3,4,8,9],"/guide":[11,4,8,9],"/new":[6,4,8,9],"/~demos/:id":[0,9]}},{publicPath:"/Official-web/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();