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

define(["require","exports","module","underscore","./CustomDataSourceModel","../enum/mongoJdbcFileSourceTypes","restResource!hypermedia/workflows?parentName=admin","bundle!jasperserver_messages"],function(e,r,i){var o=e("underscore"),t=e("./CustomDataSourceModel"),n=e("../enum/mongoJdbcFileSourceTypes"),a=e("restResource!hypermedia/workflows?parentName=admin"),l=e("bundle!jasperserver_messages"),s=t.extend({fileTypes:["pdf","config"],defaults:function(){var e={};return o.extend(e,t.prototype.defaults,{dataSourceName:"mongoDbJDBCDataSource",fileSourceType:"repository",timeZone:""}),e}(),validation:function(){var e={};return o.extend(e,t.prototype.validation,{serverAddress:[{required:!0,msg:l["ReportDataSourceValidator.error.not.empty.host"]}],portNumber:[{required:!0,msg:l["ReportDataSourceValidator.error.not.empty.server.port"]}],repositoryFileName:[{fn:function(e,r,i){return!i.autoSchemaDefinition&&"repository"===i.fileSourceType&&(o.isNull(e)||o.isUndefined(e)||o.isString(e)&&""===e)?l["fillParameters.error.mandatoryField"]:null}},{fn:function(e,r,i){return i.autoSchemaDefinition||"repository"!==i.fileSourceType||o.isString(e)&&""!==e&&0===e.indexOf("/")?null:l["resource.file.invalid.path"]}}],serverFileName:[{fn:function(e,r,i){return!i.autoSchemaDefinition&&"serverFileSystem"===i.fileSourceType&&(o.isNull(e)||o.isUndefined(e)||o.isString(e)&&""===e)?l["fillParameters.error.mandatoryField"]:null}}]}),e}(),isLocalFileSystemAccessAllowed:function(){return a&&a._embedded&&a._embedded.workflow&&o.find(a._embedded.workflow,function(e){return"serverSettings"===e.name})},parse:function(){var e=t.prototype.parse.apply(this,arguments);if(o.isString(e.fileName)){if(-1!==e.fileName.indexOf("repo:")){var r=e.fileName.split(":");e.fileSourceType=n.REPOSITORY.name,e.repositoryFileName=r[1]}else e.fileSourceType=n.SERVER_FILE_SYSTEM.name,e.serverFileName=e.fileName;delete e.fileName,e.autoSchemaDefinition=!1}else e.autoSchemaDefinition=!0;return e.timezone=e.timeZone,delete e.timeZone,e},toJSON:function(){var e=t.prototype.toJSON.apply(this,arguments);return e.fileName=e.serverFileName,e},customFieldsToJSON:function(e,r){return e.fileSourceType===n.REPOSITORY.name?e.fileName="repo:"+e.repositoryFileName:e.fileSourceType===n.SERVER_FILE_SYSTEM.name&&(e.fileName=e.serverFileName),delete e.repositoryFileName,delete e.serverFileName,e.autoSchemaDefinition&&(delete e.fileName,delete e.fileSourceType),delete e.autoSchemaDefinition,e.timeZone=e.timezone,delete e.timezone,e=t.prototype.customFieldsToJSON.call(this,e,r)},resetValidation:function(){this.validation=o.clone(s.prototype.validation)}});i.exports=s});