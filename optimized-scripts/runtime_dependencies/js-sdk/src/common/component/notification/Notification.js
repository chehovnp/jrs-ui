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

define(["require","exports","module","underscore","jquery","backbone","bundle!CommonBundle","text!./template/notificationTemplate.htm"],function(e,t,n){var i,s=e("underscore"),a=e("jquery"),o=e("backbone"),r=e("bundle!CommonBundle"),l=e("text!./template/notificationTemplate.htm"),h={SUCCESS:"success",WARNING:"warning"},d={};d[h.WARNING]=h.WARNING;var u=o.View.extend({template:s.template(l),events:{"click .close a":"hide"},el:function(){return this.template({message:this.message,i18n:r})},initialize:function(){this.render()},render:function(){return a("body").append(this.$el),this.$el.hide(),this.$messageContainer=this.$(".notificationMessage > span:first-child"),this},show:function(e){return e=s.extend({type:h.WARNING,delay:2e3},e),this.$messageContainer.text(e.message),this.$messageContainer.removeClass().attr({class:d[e.type]}),this.$el.slideDown(),e.delay&&s.delay(s.bind(this.hide,this),e.delay),this},hide:function(){return arguments.length&&arguments[0].preventDefault&&arguments[0].preventDefault(),this.$el.slideUp(),this},remove:function(){o.View.prototype.remove.apply(this,arguments)}},{show:function(){return i||(i=new u),i.show.apply(i,arguments)},hide:function(){return i||(i=new u),i.hide.apply(i,arguments)}});n.exports=u});