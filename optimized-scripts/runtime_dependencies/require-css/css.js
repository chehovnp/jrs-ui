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

define([],function(){if("undefined"==typeof window)return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,n=!1,r=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]||"WebkitAppearance"in document.documentElement.style?r=!1:t[4]&&(n=parseInt(t[4])<18);var o={};o.pluginBuilder="./css-builder";var i,a,l,s=function(){i=document.createElement("style"),e.appendChild(i),a=i.styleSheet||i.sheet},u=0,c=[],d=function(e){a.addImport(e),i.onload=function(){f()},31==++u&&(s(),u=0)},f=function(){l();var e=c.shift();if(!e)return void(l=null);l=e[1],d(e[0])},p=function(e,t){if(a&&a.addImport||s(),a&&a.addImport)l?c.push([e,t]):(d(e),l=t);else{i.textContent='@import "'+e+'";';var n=setInterval(function(){try{i.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},h=function(t,n){var o=document.createElement("link");if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},setTimeout(n,7)};else var i=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){if(document.styleSheets[e].href==o.href)return clearInterval(i),n()}},10);o.href=t,e.appendChild(o)};return o.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},o.load=function(e,t,r,o){(n?p:h)(t.toUrl(e+".css"),r)},o});