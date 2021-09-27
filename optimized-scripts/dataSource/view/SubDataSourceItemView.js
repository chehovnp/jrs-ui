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

define(["require","exports","module","backbone","jquery","../../core/core.layout","../../components/list.base","text!../template/subDataSourceItemTemplate.htm","runtime_dependencies/js-sdk/src/common/extension/backboneValidationExtension"],function(e,t,i){var n=e("backbone"),a=e("jquery"),s=e("../../core/core.layout"),o=e("../../components/list.base"),r=o.dynamicList,d=e("text!../template/subDataSourceItemTemplate.htm"),l=e("runtime_dependencies/js-sdk/src/common/extension/backboneValidationExtension");i.exports=n.View.extend({events:{"keyup input[type='text']":"updateDataSourceId","change input[type='text']":"updateDataSourceId"},initialize:function(e){var t=this.model.toJSON();this._listItem=new r.UnderscoreTemplatedListItem({template:d,cssClassName:s.LEAF_CLASS,value:t,tooltipText:this.model.get("uri")}),l.bind(this,{valid:this.fieldIsValid,invalid:this.fieldIsInvalid,forceUpdate:!0})},updateDataSourceId:function(e){var t=this.$("input[type='text']"),i={};i.id=a.trim(t.val()),this.model.set(i),this.model.validate(i),this._listItem.setValue(this.model.toJSON())},getListItem:function(){return this._listItem},setRootElement:function(){this.setElement(this._listItem._getElement())},fieldIsValid:function(e,t,i){var n=e.$("input[type='text']").parent();n.removeClass("error"),n.find(".validatorMessageContainer").removeClass("error"),n.find(".message.warning").text("")},fieldIsInvalid:function(e,t,i,n){var a=e.$("input[type='text']").parent();a.addClass("error"),a.find(".validatorMessageContainer").addClass("error"),a.find(".message.warning").text(i)}})});