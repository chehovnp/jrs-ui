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

define(["require","exports","module","underscore","request","jquery"],function(e,r,t){function o(e){var r,t=null;return e.firstChild.innerText&&""!==e.firstChild.innerText&&e.body?(r=new window.ActiveXObject("Microsoft.XMLDOM"),r.async=!1,r.loadXML(e.firstChild.innerText.replace("\r\n-","\r\n"))):r=e,r.firstChild&&(t=r.firstChild.nodeName.toLowerCase()),t&&"html"!==t&&"#comment"!==t?n("xml"===r.firstChild.nodeName.toLowerCase()?r.firstChild.nextSibling:r.firstChild):{errorCode:"unexpected.error"}}function n(e){var r,t;if(e.children)r=e.children;else{r=[];for(var o=0,i=e.childNodes.length;o<i;o++)null===e.childNodes[o].nodeValue&&r.push(e.childNodes[o])}if(0===r.length&&1===e.childNodes.length)return e.childNodes[0].nodeValue;if(r.length>1&&r[0].nodeName===r[1].nodeName){t=[];for(var o=0,i=r.length;o<i;o++)t[o]=n(r[o])}else{t={};for(var o=0,i=r.length;o<i;o++)t[r[o].nodeName]=n(r[o])}return t}function i(e){var r=new l.Deferred;return e.submit(function(t){t.preventDefault(),s({url:e.attr("action"),type:e.attr("method"),data:new FormData(e[0]),cache:!1,contentType:!1,processData:!1,headers:{Accept:"application/json"}}).done(function(e){r.resolve(e)}).fail(function(e){e=e.responseJSON||e||{},d.defaults(e,{errorCode:"error.load.error"}),r.reject(e)}),e.off("submit")}),e.submit(),r}function a(e,r){var t=l.Deferred(),n=l("<iframe style='display:none' name='"+r+"'></iframe>");return e.append(n).attr("target",r),n.on("load",function(){try{t.resolve(o(this.contentWindow.document))}catch(e){t.reject({errorCode:"error.invalid.response"})}n.remove()}),n.on("abort",function(){t.reject({errorCode:"error.load.aborted"}),n.remove()}),n.on("error",function(){t.reject({errorCode:"error.load.error"}),n.remove()}),e.submit(),t}var d=e("underscore"),s=e("request"),l=e("jquery"),c=function(e,r,t,n){this.name=d.uniqueId("uploadTarget"),this.form=l(e),r&&this.form.attr("action",r),t&&this.form.attr("method",t),n&&this.form.attr("enctype",n),this.parceXmlDocToObject=o};c.prototype.submit=function(){return window.FormData?i(this.form):a(this.form,this.name)},t.exports=c});