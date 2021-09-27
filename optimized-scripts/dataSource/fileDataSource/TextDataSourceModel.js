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

define(["require","exports","module","underscore","bundle!jasperserver_messages","runtime_dependencies/js-sdk/src/jrs.configs","request","./enum/characterEncodings","./enum/delimitersTextDataSource","./FileDataSourceModel"],function(e,i,r){var t=e("underscore"),l=e("bundle!jasperserver_messages"),n=e("runtime_dependencies/js-sdk/src/jrs.configs"),o=e("request"),d=e("./enum/characterEncodings"),s=e("./enum/delimitersTextDataSource"),u=e("./FileDataSourceModel");r.exports=u.extend({fileTypes:["txt","csv"],validation:function(){var e={};return t.extend(e,u.prototype.validation,{fieldDelimiterOther:[{fn:function(e,i,r){return"other"===r.fieldDelimiter&&(t.isNull(e)||t.isUndefined(e)||t.isString(e)&&""===e)?l["fillParameters.error.enter.field.delimiter"]:null}}],rowDelimiterOther:[{fn:function(e,i,r){return"other"===r.rowDelimiter&&(t.isNull(e)||t.isUndefined(e)||t.isString(e)&&""===e)?l["fillParameters.error.enter.row.delimiter"]:null}}]}),e}(),constructor:function(e,i){this.defaults=t.extend({},this.defaults,{fileSourceType:"repository",ftpsPort:"990",fieldDelimiter:"comma",rowDelimiter:"newLineWin",encodingType:"utf8",useFirstRowAsHeader:!0,prepareDataForReporting:!0}),u.prototype.constructor.apply(this,[e,i])},parse:function(){var e,i=u.prototype.parse.apply(this,arguments);return i.fieldDelimiterRegex="",i.fieldDelimiterPlugin="",i.fieldDelimiterOther="",e=t.find(s,function(e){return e.dbValue===i.fieldDelimiter}),t.isUndefined(e)?i.fieldDelimiter?(i.fieldDelimiterOther=i.fieldDelimiter,i.fieldDelimiter="other"):i.fieldDelimiter=this.defaults.fieldDelimiter:i.fieldDelimiter=e.value,i.rowDelimiterRegex="",i.rowDelimiterPlugin="",i.rowDelimiterOther="",e=t.find(s,function(e){return e.dbValue===i.recordDelimiter}),t.isUndefined(e)?i.fieldDelimiter?(i.rowDelimiterOther=i.recordDelimiter,i.rowDelimiter="other"):i.rowDelimiter=this.defaults.rowDelimiter:i.rowDelimiter=e.value,delete i.recordDelimiter,e=t.find(d,function(e){return e.dbValue===i.encoding}),i.encodingType=e?e.value:this.defaults.encodingType,delete i.encoding,i},customFieldsToJSON:function(e,i){return"other"===e.fieldDelimiter?e.fieldDelimiter=e.fieldDelimiterOther:e.fieldDelimiter=t.find(s,function(i){return i.value===e.fieldDelimiter}).dbValue,delete e.fieldDelimiterRegex,delete e.fieldDelimiterPlugin,delete e.fieldDelimiterOther,"other"===e.rowDelimiter?e.recordDelimiter=e.rowDelimiterOther:e.recordDelimiter=t.find(s,function(i){return i.value===e.rowDelimiter}).dbValue,delete e.rowDelimiter,delete e.rowDelimiterRegex,delete e.rowDelimiterPlugin,delete e.rowDelimiterOther,e.encoding=t.find(d,function(i){return i.value===e.encodingType}).dbValue,delete e.encodingType,u.prototype.customFieldsToJSON.call(this,e,i)},validationMethodOnSaveClick:function(e){var i=this,r=JSON.stringify(t.extend({},this.toJSON(),{uri:"/ignore"}));o({type:"POST",url:n.contextPath+"/rest_v2/connections",dataType:"json",data:r,headers:{"Content-Type":"application/repository.customDataSource+json",Accept:"application/table.metadata+json"}}).done(function(){i.trigger("sourceFileIsOK"),t.isFunction(e)&&e()}).fail(function(){i.trigger("sourceFileCantBeParsed")})}})});