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

define(["require","exports","module","underscore","backbone","request","../../serverSettingsCommon/enum/serverSettingGroupsEnum"],function(e,t,n){var r=e("underscore"),i=e("backbone"),o=e("request"),u=e("../../serverSettingsCommon/enum/serverSettingGroupsEnum"),s=i.Collection.extend({initialize:function(e,t){this.urlPUTTemplate="rest_v2/attributes?_embedded=permission",this.urlGETTemplate=this.urlPUTTemplate+"&group="+u.CUSTOM_SERVER_SETTINGS},parse:function(e){return e&&e.attribute?e.attribute:[]},url:function(e){return"PUT"===e?this.urlPUTTemplate:this.urlGETTemplate},escapeLevelId:function(e){return encodeURIComponent(e).replace("'","%27")},save:function(e,t){var n=this._modelsToJSON(t);return o({url:this.url("PUT")+this._concatNames(e),type:"PUT",contentType:"application/hal+json",headers:{Accept:"application/hal+json"},data:JSON.stringify({attribute:n})})},_modelsToJSON:function(e){return r.map(e,function(e){return e.toJSON()})},_concatNames:function(e){e=r.isArray(e)?e:[e];var t="";return r.each(e,function(e){t+="&name="+this.escapeLevelId(e.get("name"))},this),t}});n.exports=s});