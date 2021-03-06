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

define(["require","exports","module","prototype","../util/utils.common","../util/touch.controller","../components/components.webHelp"],function(e,n,t){function o(){for(m=0;m<document.forms.length;m++)for(g=document.forms[m].getElementsByTagName("INPUT"),f=0;f<g.length;f++)for(w=g.item(f),h=w.attributes,s=0;s<h.length;s++)if(v=h.item(s),"name"==v.nodeName){if(v.nodeValue!=N)break;for(b=w.attributes,p=0;p<b.length;p++)k=b.item(p),"onclick"!=k.nodeName&&"ondblclick"!=k.nodeName||(k.nodeValue=null);w.click()}}function i(e){for(m=0;m<document.forms.length;m++)for(g=document.forms[m].getElementsByTagName("INPUT"),f=0;f<g.length;f++)for(w=g.item(f),h=w.attributes,s=0;s<h.length;s++)if(v=h.item(s),"name"==v.nodeName){if(v.nodeValue!=e)break;for(w=g.item(++f),b=w.attributes,p=0;p<b.length;p++)if(k=b.item(p),"disabled"==k.nodeName){k.nodeValue=!1;break}w.click(),document.forms[m].submit()}}function l(e){null==H||H.closed?H=r(e,"center",700,1100):(H.close(),H=r(e,"center",700,1100)),H.focus()}function r(e,n,t,o){var i="height="+t+",innerHeight="+t;if(i+=",width="+o+",innerWidth="+o,window.screen){var l=screen.availHeight-30,r=screen.availWidth-10,c=(r-o)/2,a=(l-t)/2;i+=",left="+c+",screenX="+c,i+=",top="+a+",screenY="+a,i+=",channelmode=0,dependent=1,directories=0,fullscreen=0,location=0,menubar=0,resizable=1,scrollbars=1,status=1,toolbar=0"}return window.open(e,n,i)}function c(e){return l("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=x")}function a(e){return location.replace("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=y")}function u(){F=document.body.offsetWidth,R=document.body.offsetHeight,d=document.getElementById("displayFormTable"),d&&(S=d.offsetWidth,q=d.offsetHeight,z=(F-S)/2,X=(R-q)/2),I=document.getElementById("viewName"),I&&""==I.value&&(I.value="${olapSession.olapUnit.label}_<%=copyString%>"),T=A("img");for(var e=0;e<T.length;e++)T[e].onclick=function(e){window.pageAlert=!1};x=A("a");for(var e=0;e<x.length;e++)x[e].onclick=function(e){window.pageAlert=!1};P=W("help"),P&&(P.onclick=C.displayWebHelp),U=A("input.corner");for(var e=0;e<U.length;e++)U[e].onclick=function(e){window.pageAlert=!1};U=A("input.nav");for(var e=0;e<U.length;e++)U[e].onclick=function(n){return window.pageAlert=!1,y=setTimeout(function(){o()},250),N=U[e].id,!1},U[e].ondblclick=function(n){return clearTimeout(y),i(U[e].id),!1}}var d,m,f,s,p,g,h,b,w,v,k,y,N,H,I,T,x,P,U,V=e("prototype"),W=V.$,A=V.$$,B=e("../util/utils.common"),E=B.isIPad,$=e("../util/touch.controller"),C=e("../components/components.webHelp"),F=1,R=1,S=0,q=0,z=0,X=0;document.observe("dom:loaded",function(){if(u(),C.setCurrentContext("analysis"),E()){var e=W("olapViewForm");new $(e,e.up(),{absolute:!0})}}),window.ld=c,window.lc=a});