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

define(["require","exports","module","prototype","./resource.base","../util/utils.common"],function(t,e,i){var s=t("prototype"),n=s.$,o=t("./resource.base"),d=t("../util/utils.common"),a=d.ValidationModule,r={PAGE_ID:"addResource_inputControl",LABEL_ID:"label",RESOURCE_ID_ID:"name",DESCRIPTION_ID:"description",NEXT_BUTTON_ID:"next",NEXT_AND_SUBMIT_BUTTON_ID:"nextAndSubmit",TYPE_ID:"dataTypeKind",_canGenerateId:!0,initialize:function(t){this._form=n(this.PAGE_ID).select("form")[0],this._label=n(this.LABEL_ID),this._resourceId=n(this.RESOURCE_ID_ID),this._description=n(this.DESCRIPTION_ID),this._nextButton=n(this.NEXT_BUTTON_ID),this._nextAndSubmitButton=n(this.NEXT_AND_SUBMIT_BUTTON_ID),this._typeId=n(this.TYPE_ID),this._isEditMode=t.isEditMode,this._label.validator=o.labelValidator.bind(this),this._resourceId.validator=o.resourceIdValidator.bind(this),this._description.validator=o.descriptionValidator.bind(this),this._initEvents()},_initEvents:function(){var t=function(t){this._isDataValid()||t.stop()}.bindAsEventListener(this);this._nextButton.observe("click",t),this._nextAndSubmitButton.observe("click",t),this._form.observe("keyup",function(t){var e=t.element();[this._label,this._resourceId,this._description].include(e)&&(a.validate(o.getValidationEntries([e])),e==this._resourceId&&this._resourceId.getValue()!=o.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),e==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(o.generateResourceId(this._label.getValue())),a.validate(o.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this)),this._typeId.observe("change",function(t){1==t.element().value?(this._nextButton.addClassName("hidden"),this._nextAndSubmitButton.removeClassName("hidden")):(this._nextButton.removeClassName("hidden"),this._nextAndSubmitButton.addClassName("hidden"))}.bindAsEventListener(this))},_isDataValid:function(){var t=[this._label,this._resourceId,this._description];return a.validate(o.getValidationEntries(t))}};void 0===t&&document.observe("dom:loaded",function(){r.initialize(window.localContext.initOptions)}),i.exports=r});