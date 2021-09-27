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

define(["require","exports","module","backbone","underscore","xregexp","settings!dataSourcePatterns","../util/settingsUtility"],function(e,t,r){var a=e("backbone"),n=e("underscore"),u=e("xregexp"),i=e("settings!dataSourcePatterns"),s=e("../util/settingsUtility"),c=a.Model.extend({idAttribute:"jdbcDriverClass",defaults:{defaultValues:{},jdbcDriverClass:"",label:"",available:!1,isDefault:!1,jdbcUrl:"",uploaded:!1},initialize:function(e,t){var r=s.deepDefaults(t,{dataSourcePatterns:i});c.DYNAMIC_URL_PART_PATTERN=r.dataSourcePatterns.dynamicUrlPartPattern,c.DYNAMIC_Address_PATTERN=r.dataSourcePatterns.dynamicServerAddressPattern,c.OAUTH_SERVICE_EMAIL_PATTERN=r.dataSourcePatterns.dynamicServiceAcctEmailPattern,c.OAUTH_PVTKEY_PATH_PATTERN=r.dataSourcePatterns.dynamicPvtKeyPathPattern,c.VALIDATION_PATTERNS=n.reduce(r.dataSourcePatterns,function(e,t,r){return e[r]=u(t),e},{})},isOtherDriver:function(){return this.get("jdbcDriverClass")===c.OTHER_DRIVER},isUploadedDriver:function(){return!0===this.get("uploaded")},getCustomAttributes:function(){if(this.isOtherDriver())return[];var e=this._getRegExpFieldGroupsFromConnectionUrlTemplate(),t=[];return n.each(e,function(e){return t.push(e[1])}),t},convertUrlTemplateToRegex:function(){var e,t=this.get("jdbcUrl");t=t.replace(/\?/g,"\\?"),t=t.replace(/\[TMPDIR\/\]/g,"\\[TMPDIR/\\]");var r={serverAddress:function(t){return t.replace(e,c.DYNAMIC_Address_PATTERN)},oAuthServiceAcctEmail:function(t){return t.replace(e,c.OAUTH_SERVICE_EMAIL_PATTERN)},oAuthPvtKeyPath:function(t){return t.replace(e,c.OAUTH_PVTKEY_PATH_PATTERN)}};for(var a in c.VALIDATION_PATTERNS){e=new RegExp("\\$\\["+a+"\\]","g");var n=r[a];t=n?n(t):t.replace(e,c.DYNAMIC_URL_PART_PATTERN)}return"^"+t},parse:function(e){return e.isDefault=!!e.isDefault,e.defaultValues&&(e.defaultValues=n.reduce(e.defaultValues,function(e,t){return e[t.key]=t.value,e},{})),e},_getRegExpFieldGroupsFromConnectionUrlTemplate:function(){for(var e,t=[],r=[];!n.isNull(e=c.FIELD_TEMPLATE_REGEXP.exec(this.get("jdbcUrl")));)n.isArray(e)&&2===e.length&&-1===r.indexOf(e[0])&&(t.push(e),r.push(e[0]));return t}},{FIELD_TEMPLATE_REGEXP:/\$\[([^\]]+)\]/g,OTHER_DRIVER:"other"});r.exports=c});