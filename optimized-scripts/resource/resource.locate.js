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

define(["require","exports","module","prototype","underscore","./resource.base","../components/components.pickers","jquery"],function(e,t,i){var r=e("prototype"),s=r.$,o=e("underscore"),n=e("./resource.base"),l=e("../components/components.pickers"),a=e("jquery"),c={CONTENT_REPOSITORY:"CONTENT_REPOSITORY",LOCAL:"LOCAL",NONE:"NONE",FILE_SYSTEM:"FILE_SYSTEM",LOCATE_EVENT:"resource:locate",ALLOWED_FILE_RESOURCE_EXTENSIONS:["css","ttf","jpg","jpeg","gif","bmp","png","jar","jrxml","properties","jrtx","xml","agxml","docx","doc","ppt","pptx","xls","xlsx","ods","odt","odp","pdf","rtf","html"],initialize:function(e){var t=function(e){return o.isObject(e)?e:s(e)};this.resourceUri=t(e.resourceInput),this.browseButton=t(e.browseButton),this.filePath=t(e.fileUploadInput),this.fakeFilePath=t(e.fakeFileUploadInput),this.fakeFileInput=t(e.fakeFileUploadInputText),this.newResourceLink=t(e.newResourceLink);try{this._initFileSelector(e)}catch(e){}finally{this._initEvents(e)}return this},_initEvents:function(e){a(document).on("click","#CONTENT_REPOSITORY, #FILE_SYSTEM, #NONE, #LOCAL",this._clickHandler),"fileResourceTreeDataProvider"===e.providerId&&(a("#next").on("click",c._nextClickHandler),a("#filePath").on("change",c._uploadChangeHandler))},_nextClickHandler:function(e){a("#fileUpload").hasClass("error")&&e.preventDefault()},_uploadChangeHandler:function(e){a("#fileUpload").removeClass("error");var t=!0;if(a("#filePath")[0].value){var i=a("#filePath")[0].value.match(/.*\.([^\.]+)$/);if(i){var r=i[1];o.indexOf(c.ALLOWED_FILE_RESOURCE_EXTENSIONS,r)<0&&(t=!1)}else t=!1}else t=!1;if(!t){var s=n.messages["resource.report.unsupportedFileType.error"]+" "+c.ALLOWED_FILE_RESOURCE_EXTENSIONS.join(", ");a("#fileUpload").addClass("error").find("span.warning").html(s)}},_clickHandler:function(e){c._updateResourceSelectorState(e.target.id)},_updateResourceSelectorState:function(e){n.switchButtonState(this.filePath,e===this.FILE_SYSTEM),n.switchButtonState(this.fakeFilePath,e===this.FILE_SYSTEM),n.switchButtonState(this.fakeFileInput,e===this.FILE_SYSTEM),n.switchButtonState(this.browseButton,e===this.CONTENT_REPOSITORY),n.switchDisableState(this.resourceUri,e!==this.CONTENT_REPOSITORY);var t=e===this.LOCAL?["disabled","launcher"]:[];this._switchElementClasses(this.newResourceLink,t)},_initFileSelector:function(e){this.fileSelector=new l.FileSelector(o.extend({},e,{uriTextboxId:this.resourceUri,browseButtonId:this.browseButton,title:e.dialogTitle}))},remove:function(e){this.fileSelector.remove()},_switchElementClasses:function(e,t){e&&t&&e.removeClassName(t[0]).addClassName(t[1])}};i.exports=c});