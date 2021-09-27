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

define(["require","exports","module","prototype","./resource.base","../util/utils.common","../util/utils.common"],function(t,e,i){var s=t("prototype"),a=s.$,_=t("./resource.base"),r=t("../util/utils.common"),n=r.matchAny,o=t("../util/utils.common"),l=o.ValidationModule,d={LABEL_ID:"labelID",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"description",ITEM_NAME_ID:"name",ITEM_VALUE_ID:"value",SUBMIT_EVENT_ID:"submitEvent",ITEM_TO_DELETE_ID:"itemToDelete",SAVE_BUTTON_PATTERN:"#save",CANCEL_BUTTON_PATTERN:"#cancel",ADD_LINK_ID:"add",LINK_PATTERN:"a.launcher",_canGenerateId:!0,initialize:function(t){this._form=a(document.body).select("form")[0],this._label=a(this.LABEL_ID),this._resourceId=a(this.RESOURCE_ID_ID),this._description=a(this.DESCRIPTION_ID),this._itemName=a(this.ITEM_NAME_ID),this._itemValue=a(this.ITEM_VALUE_ID),this._submitEvent=a(this.SUBMIT_EVENT_ID),this._itemToDelete=a(this.ITEM_TO_DELETE_ID),this._addLink=a(this.ADD_LINK_ID),this._isEditMode=t.isEditMode,this._label.validator=_.labelValidator.bind(this),this._resourceId.validator=_.resourceIdValidator.bind(this),this._description.validator=_.descriptionValidator.bind(this),this._itemName.validator=this._itemNameValidator.bind(this),this._itemValue.validator=this._itemValueValidator.bind(this),this._initEvents()},_initEvents:function(){this._form.observe("click",function(t){var e=t.element();if(t.stop(),n(e,[this.SAVE_BUTTON_PATTERN],!0))this._isDataValid()&&(this._submitEvent.writeAttribute("name","_eventId_save"),this._form.submit());else if(e==this._addLink)this._isValueDataValid()&&this._isDataValid()&&(this._submitEvent.writeAttribute("name","_eventId_addItem"),this._form.submit());else if(n(e,[this.LINK_PATTERN],!0)&&e!=this._addLink){var i=e.identify();this._itemToDelete.setValue(i),this._submitEvent.writeAttribute("name","_eventId_removeItem"),this._form.submit()}else n(e,[this.CANCEL_BUTTON_PATTERN],!0)&&(this._submitEvent.writeAttribute("name","_eventId_cancel"),this._form.submit())}.bindAsEventListener(this)),this._form.observe("keyup",function(t){var e=t.element();[this._label,this._resourceId,this._description,this._itemName,this._itemValue].include(e)&&(l.validate(_.getValidationEntries([e])),e==this._resourceId&&this._resourceId.getValue()!=_.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),e==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(_.generateResourceId(this._label.getValue())),l.validate(_.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},_isDataValid:function(){var t=[this._label,this._resourceId,this._description];return l.validate(_.getValidationEntries(t))},_isValueDataValid:function(){var t=[this._itemName,this._itemValue];return l.validate(_.getValidationEntries(t))},_itemNameValidator:function(t){var e=!0,i="";return t.blank()&&(i=_.messages.itemNameIsEmpty,e=!1),{isValid:e,errorMessage:i}},_itemValueValidator:function(t){var e=!0,i="";return t.blank()&&(i=_.messages.itemValueIsEmpty,e=!1),{isValid:e,errorMessage:i}}};void 0===t&&document.observe("dom:loaded",function(){d.initialize(window.localContext.initOptions)}),i.exports=d});