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

define("jpivot/jpivot.jaPro",["require","exports","module","prototype","../util/utils.common","../util/touch.controller","../components/components.webHelp"],function(e,o,n){function t(){for(m=0;m<document.forms.length;m++)for(g=document.forms[m].getElementsByTagName("INPUT"),f=0;f<g.length;f++)for(b=g.item(f),h=b.attributes,s=0;s<h.length;s++)if(v=h.item(s),"name"==v.nodeName){if(v.nodeValue!=N)break;for(w=b.attributes,p=0;p<w.length;p++)k=w.item(p),"onclick"!=k.nodeName&&"ondblclick"!=k.nodeName||(k.nodeValue=null);b.click()}}function i(e){for(m=0;m<document.forms.length;m++)for(g=document.forms[m].getElementsByTagName("INPUT"),f=0;f<g.length;f++)for(b=g.item(f),h=b.attributes,s=0;s<h.length;s++)if(v=h.item(s),"name"==v.nodeName){if(v.nodeValue!=e)break;for(b=g.item(++f),w=b.attributes,p=0;p<w.length;p++)if(k=w.item(p),"disabled"==k.nodeName){k.nodeValue=!1;break}b.click(),document.forms[m].submit()}}function l(e){null==j||j.closed?j=r(e,"center",700,1100):(j.close(),j=r(e,"center",700,1100)),j.focus()}function r(e,o,n,t){var i="height="+n+",innerHeight="+n;if(i+=",width="+t+",innerWidth="+t,window.screen){var l=screen.availHeight-30,r=screen.availWidth-10,a=(r-t)/2,c=(l-n)/2;i+=",left="+a+",screenX="+a,i+=",top="+c+",screenY="+c,i+=",channelmode=0,dependent=1,directories=0,fullscreen=0,location=0,menubar=0,resizable=1,scrollbars=1,status=1,toolbar=0"}return window.open(e,o,i)}function a(e){return l("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=x")}function c(e){return location.replace("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=y")}function u(){q=document.body.offsetWidth,C=document.body.offsetHeight,d=document.getElementById("displayFormTable"),d&&(F=d.offsetWidth,R=d.offsetHeight,S=(q-F)/2,z=(C-R)/2),P=document.getElementById("viewName"),P&&""==P.value&&(P.value="${olapSession.olapUnit.label}_<%=copyString%>"),H=W("img");for(var e=0;e<H.length;e++)H[e].onclick=function(e){window.pageAlert=!1};I=W("a");for(var e=0;e<I.length;e++)I[e].onclick=function(e){window.pageAlert=!1};T=U("help"),T&&(T.onclick=$.displayWebHelp),V=W("input.corner");for(var e=0;e<V.length;e++)V[e].onclick=function(e){window.pageAlert=!1};V=W("input.nav");for(var e=0;e<V.length;e++)V[e].onclick=function(o){return window.pageAlert=!1,y=setTimeout(function(){t()},250),N=V[e].id,!1},V[e].ondblclick=function(o){return clearTimeout(y),i(V[e].id),!1}}var d,m,f,s,p,g,h,w,b,v,k,y,N,j,P,H,I,T,V,x=e("prototype"),U=x.$,W=x.$$,A=e("../util/utils.common"),B=A.isIPad,E=e("../util/touch.controller"),$=e("../components/components.webHelp"),q=1,C=1,F=0,R=0,S=0,z=0;document.observe("dom:loaded",function(){if(u(),$.setCurrentContext("analysis"),B()){var e=U("olapViewForm");new E(e,e.up(),{absolute:!0})}}),window.ld=a,window.lc=c}),define("olapView/olapViewMain",["require","exports","module","../jpivot/jpivot.jaPro"],function(e,o,n){e("../jpivot/jpivot.jaPro")});