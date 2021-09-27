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

define(["require","exports","module","backbone","text!./template/paginationContentTemplate.htm","text!./template/paginationContainerTemplate.htm","./model/PaginationModel","bundle!CommonBundle","underscore"],function(t,e,i){var n=t("backbone"),o=t("text!./template/paginationContentTemplate.htm"),r=t("text!./template/paginationContainerTemplate.htm"),s=t("./model/PaginationModel"),a=t("bundle!CommonBundle"),l=t("underscore"),h={silent:!1,validate:!0};i.exports=n.View.extend({template:l.template(o),el:r,events:{"click button.toLeft.first":"firstPage","click button.left.prev":"prevPage","change input.current":"currentPage","click button.right.next":"nextPage","click button.toRight.last":"lastPage"},constructor:function(t){var t=t||{};this.options=l.extend({},h,l.pick(t,["silent","validate"])),this.model=new s(t,this.options),this.listenTo(this.model,"validated:invalid",this.onError),this.listenTo(this.model,"change",this.render),n.View.apply(this,arguments)},firstPage:function(){this.model.set("current",1,this.options),this.trigger("pagination:change",this.model.get("current"))},prevPage:function(){var t=this.model.get("current"),e=this.model.get("step");this.model.set("current",t-e,this.options),this.trigger("pagination:change",this.model.get("current"))},currentPage:function(){this.model.set("current",parseInt(this.$el.find(".current").val())||this.model.get("current"),this.options),this.trigger("pagination:change",this.model.get("current"))},nextPage:function(){var t=this.model.get("current"),e=this.model.get("step");this.model.set("current",t+e,this.options),this.trigger("pagination:change",this.model.get("current"))},lastPage:function(){var t=this.model.get("total");this.model.set("current",t,this.options),this.trigger("pagination:change",this.model.get("current"))},onError:function(t,e){this.trigger("pagination:error",e)},hide:function(){this.$el.hide()},show:function(){this.$el.show()},resetSetOptions:function(t){this.options=t?l.extend({},h,l.pick(t,["silent","validate"])):h},render:function(){return this.$el.html(this.template(l.extend({i18n:a},this.model.toJSON()))),this},remove:function(){n.View.prototype.remove.apply(this,arguments)}})});