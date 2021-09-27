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

define(["require","exports","module","underscore","../model/CustomDataSourceModel","./enum/fileSourceTypes","runtime_dependencies/js-sdk/src/jrs.configs","bundle!jasperserver_messages"],function(e,r,i){var n=e("underscore"),s=e("../model/CustomDataSourceModel"),l=e("./enum/fileSourceTypes"),t=e("runtime_dependencies/js-sdk/src/jrs.configs"),o=e("bundle!jasperserver_messages"),a=s.extend({fileTypes:[],validation:function(){var e={};return n.extend(e,s.prototype.validation,{repositoryFileName:[{fn:function(e,r,i){return"repository"===i.fileSourceType&&(n.isNull(e)||n.isUndefined(e)||n.isString(e)&&""===e)?o["fillParameters.error.mandatoryField"]:null}},{fn:function(e,r,i){return"repository"!==i.fileSourceType||n.isString(e)&&""!==e&&-1!==e.lastIndexOf(".")&&-1!==n.indexOf(this.fileTypes,e.substr(e.lastIndexOf(".")+1))?null:o["resource.file.extension"]}}],serverFileName:[{fn:function(e,r,i){return"serverFileSystem"===i.fileSourceType&&(n.isNull(e)||n.isUndefined(e)||n.isString(e)&&""===e)?o["fillParameters.error.mandatoryField"]:null}}],serverAddress:[{fn:function(e,r,i){return"ftpServer"===i.fileSourceType&&(n.isNull(e)||n.isUndefined(e)||n.isString(e)&&""===e)?o["fillParameters.error.mandatoryField"]:null}}],serverPath:[{fn:function(e,r,i){return"ftpServer"===i.fileSourceType&&(n.isNull(e)||n.isUndefined(e)||n.isString(e)&&""===e)?o["fillParameters.error.mandatoryField"]:null}}],ftpsPort:[{fn:function(e,r,i){return"ftpServer"===i.fileSourceType&&(n.isNull(e)||n.isUndefined(e)||n.isString(e)&&""===e)?o["fillParameters.error.mandatoryField"]:null}}]}),e}(),parse:function(){var e=s.prototype.parse.apply(this,arguments);if(n.isString(e.fileName)){if(-1!==e.fileName.indexOf("repo:")){var r=e.fileName.split(":");e.fileSourceType=l.REPOSITORY.name,e.repositoryFileName=r[1]}else e.fileSourceType=l.SERVER_FILE_SYSTEM.name,e.serverFileName=e.fileName;delete e.fileName}return e.useFirstRowAsHeader="true"===e.useFirstRowAsHeader,e},customFieldsToJSON:function(e,r){return e.fileSourceType===l.REPOSITORY.name?e.fileName="repo:"+e.repositoryFileName+(t.organizationId?"|"+t.organizationId:""):e.fileSourceType===l.SERVER_FILE_SYSTEM.name&&(e.fileName=e.serverFileName),delete e.repositoryFileName,delete e.serverFileName,s.prototype.customFieldsToJSON.call(this,e,r)},resetValidation:function(){this.validation=n.clone(a.prototype.validation)}});i.exports=a});