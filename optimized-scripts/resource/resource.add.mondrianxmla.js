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

define(["require","exports","module","prototype","./resource.base","../util/utils.common","../components/components.pickers"],function(e,t,i){var s=e("prototype"),o=s.$,a=e("./resource.base"),r=e("../util/utils.common"),n=r.ValidationModule,d=e("../components/components.pickers"),l={LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"description",CATALOG_ID:"catalog",SAVE_BUTTON_ID:"save",_canGenerateId:!0,initialize:function(e){this._form=o(document.body).select("form")[0],this._label=o(this.LABEL_ID),this._resourceId=o(this.RESOURCE_ID_ID),this._description=o(this.DESCRIPTION_ID),this._catalog=o(this.CATALOG_ID),this._saveButton=o(this.SAVE_BUTTON_ID),this._isEditMode=e.isEditMode,this._label.validator=a.labelValidator.bind(this),this._resourceId.validator=a.resourceIdValidator.bind(this),this._description.validator=a.descriptionValidator.bind(this),this._catalog.validator=this._catalogValidator.bind(this),new d.FileSelector({treeId:"resourceTreeRepoLocation",providerId:"mondrianTreeDataProvider",uriTextboxId:"mondrianConnectionReference",browseButtonId:"browser_button",title:a.messages["resource.Add.Files.Title"],selectLeavesOnly:!0}),this._initEvents()},_initEvents:function(){this._saveButton.observe("click",function(e){this._isDataValid()||e.stop()}.bindAsEventListener(this)),this._form.observe("keyup",function(e){var t=e.element();[this._label,this._resourceId,this._description,this._catalog].include(t)&&(n.validate(a.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=a.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(a.generateResourceId(this._label.getValue())),n.validate(a.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},_isDataValid:function(){var e=[this._label,this._resourceId,this._description,this._catalog];return n.validate(a.getValidationEntries(e))},_catalogValidator:function(e){var t=!0,i="";return e.blank()&&(i=a.messages.catalogIsEmpty,t=!1),{isValid:t,errorMessage:i}}};void 0===e&&document.observe("dom:loaded",function(){l.initialize(window.localContext.initOptions)}),i.exports=l});