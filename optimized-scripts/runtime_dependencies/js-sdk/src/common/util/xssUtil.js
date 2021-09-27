/*
 * Copyright (C) 2005 - 2020 TIBCO Software Inc. All rights reserved.
 * http://www.jaspersoft.com.
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft,
 * the following license terms apply:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

define(["require","exports","module","../../jrs.configs"],function(e,t,r){function n(e){e=null==e?"":e,e=w.test(e)?e.replace(w,function(e){return E[e]}):e;var t=document.createElement("textarea");return t.innerHTML=e,e=t.value,e=T.test(e)?e.replace(T,function(e){return R[e]}):e}function a(){if(!g.xssNonce)throw new Error("xssNonce is not set. No render is allowed without xssNonce.");return g.xssNonce}function i(){if(void 0===i.noncePrefix){var e=a();if(!e)return null;i.noncePrefix="\x3c!--@"+e+"@--\x3e"}return i.noncePrefix}function o(){var e=g.xssHtmlTagWhiteList;return e="string"==typeof e?e:"",e=e.replace(/\s/g,"")}function s(){var e=o();return e.length>0&&!s.whitelistInitialized&&(u=e.startsWith("+")?u+","+e.substr(1):e,s.whitelistInitialized=!0),u}function f(){if(void 0!==f.leftTagRegexp)return f.leftTagRegexp;var e=s(),t=e.replace(/,/g,"\\b|");return f.leftTagRegexp=RegExp("<(?!/|"+t+"\\b|!--)","ig"),f.leftTagRegexp}function l(){if(void 0!==l.rightTagRegexp)return l.rightTagRegexp;var e=s(),t=e.replace(/,/g,"\\b|");return l.rightTagRegexp=RegExp("</(?!"+t+"\\b)","ig"),l.rightTagRegexp}function c(){return g.xssAttribSoftHtmlEscapeMap}function p(){if(void 0!==p.attribSoftEscapeArr)return p.attribSoftEscapeArr;var e=c();if(!e)return p.attribSoftEscapeArr=O,p.attribSoftEscapeArr;try{var t=[],r=[];for(var n in e)e.hasOwnProperty(n)&&(t.push(RegExp(n,"ig")),r.push(e[n]));return p.attribSoftEscapeArr={regex:t,replacement:r},p.attribSoftEscapeArr}catch(e){return console.warn("Unable to parse xss.soft.html.escape.attrib.map.  Using _defaultAttribSoftEscapeMap."),p.attribSoftEscapeArr}}var g=e("../../jrs.configs"),u="a,abbr,acronym,address,animate,animateMotion,animateTransform,area,article,aside,b,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,circle,cite,clipPath,code,col,colgroup,color-profile,dd,defs,desc,details,dfn,discard,div,dl,dt,ellipse,em,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,fieldset,filter,font,footer,form,h1,h2,h3,h4,h5,h6,head,header,hr,html,i,g,iframe,image,img,input,js-templateNonce,label,legend,li,line,linearGradient,main,map,mark,marker,mask,menu,menuitem,meta,metadata,mpath,nav,ol,option,p,path,pattern,polygon,polyline,pre,radialGradient,rect,section,select,set,small,span,stop,strike,strong,style,sub,summary,sup,svg,switch,symbol,table,tbody,td,text,textPath,textarea,tfoot,th,thead,title,tr,tspan,u,ul,use,view",d={"(":"&#40;",")":"&#41;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=function(e){return null==e?"":e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},x=function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(h(r));return t},b=function(){var e,t={"&#111;":"o","&#110;":"n","&#115;":"s","&#114;":"r","&#99;":"c","&#100;":"d","&amp;":"&"};for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[d[e]]=e);return t}(),v=RegExp("(?:"+x(d).join("|")+")","g"),m=function(e){return("string"==typeof e||e instanceof String)&&!(e.indexOf("<")<0&&e.indexOf(">")<0)},y=function(e,t){for(var r=t,n=0;n<e.length;++n)r+=e.charAt(n),r+=t;return r},E=function(){var e,t={};for(e in d)if(Object.prototype.hasOwnProperty.call(d,e)){var r=d[e];t[r]=y(r,"*")}for(var n=["<textarea","</textarea>"],a=0;a<n.length;++a){var i=n[a];t[i]=y(i,"*")}return t}(),R=function(){var e,t={};for(e in E)Object.prototype.hasOwnProperty.call(E,e)&&(t[E[e]]=e);return t}(),w=RegExp("(?:"+x(E).join("|")+")","g"),T=RegExp("(?:"+x(R).join("|")+")","g"),O={regex:[/\bjavascript:/gi,/\bon(\w+?)\s*=/gi,/\bsrcdoc\s*=/gi],replacement:["","&#111;&#110;$1=","&#115;&#114;&#99;doc="]},S=function(e,t){if(e=null==e?"":e,t=t||{},!m(e))return e;var r=i();if(r&&0===e.indexOf(r))return e.substring(r.length);var o=a();if(o&&e.indexOf(o)>0)return e;if(e=n(e),t.whiteList&&t.whiteList instanceof Array&&t.whiteList.length>0){var c=t.whiteList.join("\\b|"),g=RegExp("<(?!/|"+c+"\\b|!--)","ig");e=g.test(e)?e.replace(g,"&lt;"):e;var u=RegExp("</(?!"+c+"\\b)","ig");e=u.test(e)?e.replace(u,"&lt;/"):e,e=r+e}else{var d=f(),h=l();if(d.lastIndex=0,h.lastIndex=0,t.escapeTags&&t.escapeTags instanceof Array){for(var x=s(),b=0;b<t.escapeTags.length;++b)x=x.replace(t.escapeTags[b]+",","");d=RegExp("<(?!/|"+x.replace(/,/g,"\\b|")+"\\b|!--)","ig"),h=RegExp("</(?!"+x.replace(/,/g,"\\b|")+"\\b)","ig")}e=d.test(e)?e.replace(d,"&lt;"):e,e=h.test(e)?e.replace(h,"&lt;/"):e}for(var v=p(),y=v.regex,E=v.replacement,R=0;R<y.length;++R){var w=y[R];w.lastIndex=0;var T=E[R];e=w.test(e)?e.replace(w,T):e}return e},j=function(e){if(!("string"==typeof(e=null==e?"":e)||e instanceof String))return e;var t=i();return t&&0===e.indexOf(t)&&(e=e.substring(t.length)),v.lastIndex=0,e=v.test(e)?e.replace(v,function(e){return d[e]}):e},A=function(e){if(!("string"==typeof(e=null==e?"":e)||e instanceof String))return e;var t=i();t&&0===e.indexOf(t)&&(e=e.substring(t.length));var r=a();if(r&&e.indexOf(r)>=0)return e;var n=RegExp("(?:"+x(b).join("|")+")","ig");return n.test(e)?e.replace(n,function(e){return b[e]}):e};r.exports={softHtmlEscape:S,hardEscape:j,unescape:A}});