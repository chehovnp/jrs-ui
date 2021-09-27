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

define(["require","exports","module","prototype","./resource.base","../util/utils.common","../components/components.pickers","../core/core.ajax","../core/core.ajax.utils","../components/components.dialogs","jquery"],function(t,e,i){var o=t("prototype"),s=o.$,a=t("./resource.base"),n=t("../util/utils.common"),r=n.ValidationModule,_=t("../components/components.pickers"),l=t("../core/core.ajax"),c=l.ajaxTargettedUpdate,d=t("../core/core.ajax.utils"),h=d.baseErrorHandler,u=t("../components/components.dialogs"),I=t("jquery"),m={TYPE_ID:"analysisConnection.type",LABEL_ID:"connectionLabel",RESOURCE_ID_ID:"connectionName",DESCRIPTION_ID:"connectionDescription",RESOURCE_INPUT_ID:"resourceUri",BROWSE_BUTTON_ID:"browser_button",TREE_ID:"folderTreeRepoLocation",FOLDERS_TREE_DATA_PROVIDER_ID:"repositoryExplorerTreeFoldersProvider",XMLA_CATALOG_ID:"xmlaCatalog",XMLA_DATA_SOURCE_ID:"xmlaDatasource",XMLA_CONNECTION_URI_ID:"xmlaConnectionUri",TEST_BUTTON_ID:"testXMLAConnection",NEXT_BUTTON_ID:"next",DONE_BUTTON_ID:"done",CHANGE_TYPE_BUTTON_ID:"changeCombo",_canGenerateId:!0,initialize:function(t){this._form=s(document.body).select("form")[0],this._type=s(this.TYPE_ID),this._label=s(this.LABEL_ID),this._resourceId=s(this.RESOURCE_ID_ID),this._description=s(this.DESCRIPTION_ID);var e=this._type.getValue();"olapXmlaCon"==e&&(this._xmlaCatalog=s(this.XMLA_CATALOG_ID),this._xmlaDataSource=s(this.XMLA_DATA_SOURCE_ID),this._xmlaConnectionUri=s(this.XMLA_CONNECTION_URI_ID)),this._nextButton=s(this.NEXT_BUTTON_ID),this._doneButton=s(this.DONE_BUTTON_ID),this._testButton=s(this.TEST_BUTTON_ID),this._changeTypeButton=s(this.CHANGE_TYPE_BUTTON_ID),this._isEditMode=t.isEditMode,this._label.validator=a.labelValidator.bind(this),this._resourceId.validator=a.resourceIdValidator.bind(this),this._description.validator=a.descriptionValidator.bind(this),"olapXmlaCon"==e&&(this._xmlaCatalog.validator=this._xmlaCatalogValidator.bind(this),this._xmlaDataSource.validator=this._xmlaDataSourceValidator.bind(this),this._xmlaConnectionUri.validator=this._xmlaConnectionUriValidator.bind(this)),this._initResourcePicker(),this._initEvents()},_initResourcePicker:function(){new _.FileSelector({treeId:this.TREE_ID,providerId:this.FOLDERS_TREE_DATA_PROVIDER_ID,uriTextboxId:this.RESOURCE_INPUT_ID,browseButtonId:this.BROWSE_BUTTON_ID,title:a.messages["resource.SaveToFolder.Title"]})},_initEvents:function(){this._type.observe("change",function(){this._changeTypeButton.click()}.bindAsEventListener(this));var t=function(t){this._isDataValid()||t.stop()}.bindAsEventListener(this),e=function(t){this._isDataValid()?this.testXMLAConnection():t.stop()}.bindAsEventListener(this);this._nextButton.observe("click",t),this._doneButton.observe("click",t),this._testButton&&this._testButton.observe("click",e),this._form.observe("keyup",function(t){var e=t.element();[this._label,this._resourceId,this._description,this._xmlaCatalog,this._xmlaDataSource,this._xmlaConnectionUri].include(e)&&(r.validate(a.getValidationEntries([e])),e==this._resourceId&&this._resourceId.getValue()!=a.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),e==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(a.generateResourceId(this._label.getValue())),r.validate(a.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},testXMLAConnection:function(){var t=this._testButton,e=I(this._form),i=e.serializeArray();i.push({name:"_eventId_testXMLAConnection",value:""}),c(e.attr("action"),{postData:I.param(i),fillLocation:"ajaxbuffer",callback:function(e){var i=I(e).text();try{var o=JSON.parse(i);"OK"==o.status?r.showSuccess(t,a.messages.connectionStatePassed):r.showError(t,o.message,o.details)}catch(t){u.systemConfirm.show(i)}},errorHandler:h,hideLoader:!1})},_isDataValid:function(){var t=[this._label,this._resourceId,this._description];return"olapXmlaCon"==this._type.getValue()&&(t.push(this._xmlaCatalog),t.push(this._xmlaDataSource),t.push(this._xmlaConnectionUri)),r.validate(a.getValidationEntries(t))},_xmlaCatalogValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.messages.catalogIsEmpty,e=!1),{isValid:e,errorMessage:i}},_xmlaDataSourceValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.messages.dataSourceIsEmpty,e=!1),{isValid:e,errorMessage:i}},_xmlaConnectionUriValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.messages.uriIsEmpty,e=!1),{isValid:e,errorMessage:i}}};void 0===t&&document.observe("dom:loaded",function(){m.initialize(window.localContext.initOptions)}),i.exports=m});