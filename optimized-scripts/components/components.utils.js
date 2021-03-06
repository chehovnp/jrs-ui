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

define(["require","exports","module","prototype","../namespace/namespace","underscore","./components.dialogs","../core/core.ajax","jquery"],function(e,t,n){var i=e("prototype"),o=i.$,r=e("../namespace/namespace"),a=r.jaspersoft,s=e("underscore"),u=e("./components.dialogs"),l=e("../core/core.ajax"),c=l.ajax,d=e("jquery");a.components.utils=function(e,t,n,i){var r=navigator.userAgent.toLowerCase().indexOf("msie")>-1;return{LOADING_DIALOG_DELAY:800,isElementInDom:function(e){var t=e.nextSibling,n=e.parentNode&&11!==e.parentNode.nodeType;return t||n},setInnerHtml:function(n,i,o){var a,s,u;if(this.isElementInDom(n)&&(a=n.nextSibling,s=n.parentNode,u=n.style.display,n.style.display="none",s.removeChild(n)),e(n).html(""),r&&"SELECT"==n.tagName){var l=document.createDocumentFragment();t.each(o.data,function(n){var i=document.createElement("OPTION");i.value=t.isUndefined(n.value)?n.id:n.value,e(i).html(n.label),n.selected&&i.setAttribute("selected","selected"),l.appendChild(i)}),n.appendChild(l)}else e(n).html(i(o));if(a?s.insertBefore(n,a):s.appendChild(n),n.style.display=u,r&&"SELECT"==n.tagName){var c=n.getAttribute("style");n.removeAttribute("style"),n.setAttribute("style",c)}},wait:function(t){return e.Deferred(function(e){setTimeout(e.resolve,t)})},showLoadingDialogOn:function(r,a,s){this.wait(a||this.LOADING_DIALOG_DELAY).then(t.bind(function(){"pending"==r.state()&&(n.popup.show(o(i.LOADING_ID),s),e.when(r).always(t.bind(function(){this.wait(500).then(function(){n.popup.hide(o(i.LOADING_ID))})},this)))},this))},createTimer:function(t){var n=new e.Deferred;return n.done(function(e){var n=(new Date).getTime(),i=n-e;console.log(t+" took time: "+i+" msec.")}),{start:function(){return this.startTime=(new Date).getTime(),this},stop:function(){return n.resolve(this.startTime),this}}}}}(d,s,u,c),n.exports=a.components.utils});