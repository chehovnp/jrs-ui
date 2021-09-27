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

define(["require","exports","module","prototype","../util/utils.common","./resource.base","../components/components.pickers"],function(e,t,i){var s=e("prototype"),o=s.$,r=e("../util/utils.common"),n=r.ValidationModule,d=e("./resource.base"),a=e("../components/components.pickers"),l={LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"fileResource.description",FOLDER_TREE_DATA_PROVIDER:"repositoryExplorerTreeFoldersProvider",FOLDER_TREE_ID:"addFileTreeRepoLocation",FOLDER_RESOURCE_INPUT:"folderUri",NEXT_BUTTON_ID:"next",BROWSE_BUTTON_ID:"browser_button",_canGenerateId:!0,initialize:function(e){this._form=o(document.body).select("form")[0],this._label=o(this.LABEL_ID),this._resourceId=o(this.RESOURCE_ID_ID),this._description=o(this.DESCRIPTION_ID),this._nextButton=o(this.NEXT_BUTTON_ID),this._isEditMode=!!e&&e.isEditMode,this._label.validator=d.labelValidator.bind(this),this._resourceId.validator=d.resourceIdValidator.bind(this),this._description.validator=d.descriptionValidator.bind(this),this._initEvents(),e.isBrowseActive&&this._initFileSelector()},_initFileSelector:function(e){new a.FileSelector({treeId:this.FOLDER_TREE_ID,providerId:this.FOLDER_TREE_DATA_PROVIDER,uriTextboxId:this.FOLDER_RESOURCE_INPUT,browseButtonId:this.BROWSE_BUTTON_ID,title:d.messages["resource.Report.Title"]})},_initEvents:function(){this._nextButton.observe("click",function(e){this._isDataValid()||e.stop()}.bindAsEventListener(this)),this._form.observe("keyup",function(e){var t=e.element();[this._label,this._resourceId,this._description].include(t)&&(n.validate(d.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=d.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(d.generateResourceId(this._label.getValue())),n.validate(d.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},_isDataValid:function(){var e=[this._label,this._resourceId,this._description];return n.validate(d.getValidationEntries(e))}};void 0===e&&document.observe("dom:loaded",function(){l.initialize(window.localContext.initOptions)}),i.exports=l});