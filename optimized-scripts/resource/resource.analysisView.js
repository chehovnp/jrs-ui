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

define(["require","exports","module","prototype","./resource.base","../util/utils.common"],function(t,e,i){var s=t("prototype"),o=s.$,n=t("./resource.base"),a=t("../util/utils.common"),r=a.ValidationModule,d={LABEL_ID:"labelID",RESOURCE_ID_ID:"nameID",DESCRIPTION_ID:"addFileInputDescription",NEXT_BUTTON_ID:"next",_canGenerateId:!0,initialize:function(t){this._form=o(document.body).select("form")[0],this._label=o(this.LABEL_ID),this._resourceId=o(this.RESOURCE_ID_ID),this._description=o(this.DESCRIPTION_ID),this._nextButton=o(this.NEXT_BUTTON_ID),this._isEditMode=t.isEditMode,this._label.validator=n.labelValidator.bind(this),this._resourceId.validator=n.resourceIdValidator.bind(this),this._description.validator=n.descriptionValidator.bind(this),this._initEvents()},_initEvents:function(){this._nextButton.observe("click",function(t){this._isDataValid()||t.stop()}.bindAsEventListener(this)),this._form.observe("keyup",function(t){var e=t.element();[this._label,this._resourceId,this._description].include(e)&&(r.validate(n.getValidationEntries([e])),e==this._resourceId&&this._resourceId.getValue()!=n.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),e==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(n.generateResourceId(this._label.getValue())),r.validate(n.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},_isDataValid:function(){var t=[this._label,this._resourceId,this._description];return r.validate(n.getValidationEntries(t))}};void 0===t&&document.observe("dom:loaded",function(){d.initialize(window.localContext.initOptions)}),i.exports=d});