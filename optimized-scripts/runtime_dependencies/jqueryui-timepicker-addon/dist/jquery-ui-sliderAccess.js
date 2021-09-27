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

!function(t){t.fn.extend({sliderAccess:function(e){return e=e||{},e.touchonly=void 0===e.touchonly||e.touchonly,!0!==e.touchonly||"ontouchend"in document?t(this).each(function(n,o){var i=t(this),s=t.extend({},{where:"after",step:i.slider("option","step"),upIcon:"ui-icon-plus",downIcon:"ui-icon-minus",text:!1,upText:"+",downText:"-",buttonset:!0,buttonsetTag:"span",isRTL:!1},e),u=t("<"+s.buttonsetTag+' class="ui-slider-access"><button data-icon="'+s.downIcon+'" data-step="'+(s.isRTL?s.step:-1*s.step)+'">'+s.downText+'</button><button data-icon="'+s.upIcon+'" data-step="'+(s.isRTL?-1*s.step:s.step)+'">'+s.upText+"</button></"+s.buttonsetTag+">");u.children("button").each(function(e,n){var o=t(this);o.button({text:s.text,icons:{primary:o.data("icon")}}).click(function(t){var e=o.data("step"),n=i.slider("value"),s=n+=1*e,u=i.slider("option","min"),r=i.slider("option","max"),a=i.slider("option","slide")||function(){},c=i.slider("option","stop")||function(){};t.preventDefault(),s<u||s>r||(i.slider("value",s),a.call(i,null,{value:s}),c.call(i,null,{value:s}))})}),i[s.where](u),s.buttonset&&(u.removeClass("ui-corner-right").removeClass("ui-corner-left").buttonset(),u.eq(0).addClass("ui-corner-left"),u.eq(1).addClass("ui-corner-right"));var r=u.css({marginLeft:"after"===s.where&&!s.isRTL||"before"===s.where&&s.isRTL?10:0,marginRight:"before"===s.where&&!s.isRTL||"after"===s.where&&s.isRTL?10:0}).outerWidth(!0)+5,a=i.outerWidth(!0);i.css("display","inline-block").width(a-r)}):t(this)}})}(jQuery);