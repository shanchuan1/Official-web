"use strict";(self.webpackChunkofficial_web=self.webpackChunkofficial_web||[]).push([[9],{95993:function(M,u,e){e.r(u);var o=e(85956),n=e(67294),D=e(52289),L=e(34661),_=function(){var p=(0,o.useParams)(),a=p.id,t=(0,o.useDemo)(a),O=(0,D.m)({id:a,component:t.component,renderOpts:t.renderOpts}),P=O.canvasRef,m=t||{},v=m.component,d=m.renderOpts,r=(0,o.useLiveDemo)(a),s=r.node,f=r.setSource,i=r.error,l=r.loading,R=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var c=function(E){E.data.type==="dumi.liveDemo.setSource"&&f(E.data.value)};return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}},[f]),(0,n.useEffect)(function(){!l&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,l]),R};u.default=_}}]);
