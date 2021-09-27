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

define(["require","exports","module","underscore","bundle!all","../fileDataSource/SimpleDomainView","./BaseSaveDialogView","text!./template/textDataSourceSaveDialogTemplate.htm"],function(e,t,o){var i=e("underscore"),a=(e("bundle!all"),e("../fileDataSource/SimpleDomainView")),s=e("./BaseSaveDialogView"),n=e("text!./template/textDataSourceSaveDialogTemplate.htm");o.exports=s.extend({saveDialogTemplate:n,constructor:function(e){e||(e={}),this.options=i.extend({},e),this.options.isEmbedded=!!this.options.saveFn,s.prototype.constructor.call(this,e)},initialize:function(){this.preSelectedFolder=this.options.model.options.parentFolderUri,s.prototype.initialize.apply(this,arguments)},extendModel:function(e){var t=s.prototype.extendModel.call(this,e);return t.set("prepareDataForReporting",!(this.options.isEmbedded||this.options.isEditMode)),t},_getLabelForSaveButton:function(e){return"resource.datasource.saveDialog.save"},_saveSuccessCallback:function(e,t){if(this.model.get("prepareDataForReporting")){new a({cancel:this.options.success,dataSource:this.model.toJSON()}).startDialog()}else i.isFunction(this.options.success)&&this.options.success();this._closeDialog()}})});