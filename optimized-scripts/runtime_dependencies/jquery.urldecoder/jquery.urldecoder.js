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

jQuery.url=function(r){function e(r){for(var e="",o=0,t=0,u=0;o<r.length;)t=r.charCodeAt(o),t<128?(e+=String.fromCharCode(t),o++):t>191&&t<224?(u=r.charCodeAt(o+1),e+=String.fromCharCode((31&t)<<6|63&u),o+=2):(u=r.charCodeAt(o+1),c3=r.charCodeAt(o+2),e+=String.fromCharCode((15&t)<<12|(63&u)<<6|63&c3),o+=3);return e}function o(e,o){var t={},u={true:!0,false:!1,null:null};return r.each(e.replace(/\+/g," ").split("&"),function(e,n){var a,i=n.split("="),p=s(i[0]),h=t,c=0,l=p.split("]["),f=l.length-1;if(/\[/.test(l[0])&&/\]$/.test(l[f])?(l[f]=l[f].replace(/\]$/,""),l=l.shift().split("[").concat(l),f=l.length-1):f=0,2===i.length)if(a=s(i[1]),o&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==u[a]?u[a]:a),f)for(;c<=f;c++)p=""===l[c]?h.length:l[c],h=h[p]=c<f?h[p]||(l[c+1]&&isNaN(l[c+1])?{}:[]):a;else r.isArray(t[p])?t[p].push(a):void 0!==t[p]?t[p]=[t[p],a]:t[p]=a;else p&&(t[p]=o?void 0:"")}),t}function t(r){r=r||window.location;for(var e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,t=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],u=e.exec(r),n={},s=t.length;s--;)n[t[s]]=u[s]||"";return n.query&&(n.params=o(n.query,!1)),n}function u(e){if(e.source)return encodeURI(e.source);var o=[];return e.protocol&&("file"==e.protocol?o.push("file:///"):"mailto"==e.protocol?o.push("mailto:"):o.push(e.protocol+"://")),e.authority?o.push(e.authority):(e.userInfo?o.push(e.userInfo+"@"):e.user&&(o.push(e.user),e.password&&o.push(":"+e.password),o.push("@")),e.host&&(o.push(e.host),e.port&&o.push(":"+e.port))),e.path?o.push(e.path):(e.directory&&o.push(e.directory),e.file&&o.push(e.file)),e.query?o.push("?"+e.query):e.params&&o.push("?"+r.param(e.params)),e.anchor&&o.push("#"+e.anchor),o.join("")}function n(r){return encodeURIComponent(r)}function s(r){return e(unescape(r.replace(/\+/g," ")))}return{encode:n,decode:s,parse:t,build:u}}(jQuery);