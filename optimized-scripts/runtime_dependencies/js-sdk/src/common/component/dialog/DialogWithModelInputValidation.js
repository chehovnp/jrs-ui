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

define(["require","exports","module","jquery","underscore","./Dialog","../../extension/backboneValidationExtension"],function(e,t,i){var n=e("jquery"),a=e("underscore"),r=e("./Dialog"),o=e("../../extension/backboneValidationExtension");i.exports=r.extend({events:a.extend({"keyup input[type=text], textarea, select":"updateModelProperty","change input[type=text], input:checkbox, textarea, select":"updateModelProperty"},r.prototype.events),initialize:function(){this._bindEvents(),r.prototype.initialize.apply(this,arguments)},_bindEvents:function(){},_unbindEvents:function(){},updateModelProperty:function(e){var t={},i=n(e.target);"input"===i[0].tagName.toLowerCase()&&"text"===i.attr("type")||"select"===i[0].tagName.toLowerCase()&&"true"!==i.attr("multiple")||"textarea"===i[0].tagName.toLowerCase()?t[i.attr("name")]=n.trim(i.val()):"input"===i[0].tagName.toLowerCase()&&"checkbox"===i.attr("type")&&(t[i.attr("name")]=i.is(":checked")),this.beforeModelPropertySet&&this.beforeModelPropertySet(t),this.model.set(t),this.model.validate(t)},bindValidation:function(){o.bind(this,{valid:this.fieldIsValid,invalid:this.fieldIsInvalid,forceUpdate:!0,selector:"name"})},unbindValidation:function(){o.unbind(this)},fieldIsValid:function(e,t,i){var n=e.$("["+i+'="'+t+'"]').parent();n.removeClass("error"),n.find(".message.warning").text("")},fieldIsInvalid:function(e,t,i,n){var a=e.$("["+n+'="'+t+'"]').parent();a.addClass("error"),a.find(".message.warning").text(i.toString())},validField:function(e){var t=this.$(e).parent();t.removeClass("error"),t.find(".message.warning").text("")},invalidField:function(e,t){var i=this.$(e).parent();i.addClass("error"),i.find(".message.warning").text(t.toString())},clearValidationErrors:function(){this.$("label").removeClass("error"),this.$(".message.warning").text("")},remove:function(){this.unbindValidation(),this._unbindEvents(),r.prototype.remove.apply(this,arguments)}})});