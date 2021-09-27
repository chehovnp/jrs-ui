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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/jrs.configs","../../../enum/olapConnectionTypesEnum","../../../enum/repositoryResourceTypes","bundle!CommonBundle"],function(e,r,s){function o(e){switch(e.value.resourceType){case i.REPORT_UNIT:e.cssClass="report";break;case i.DOMAIN_TOPIC:e.cssClass="domain topic";break;case i.SEMANTIC_LAYER_DATA_SOURCE:e.cssClass="domain";break;case i.OLAP_CUBE:e.cssClass="olap"}return e}function n(e){return a[e]}var u=e("underscore"),c=e("runtime_dependencies/js-sdk/src/jrs.configs"),t=e("../../../enum/olapConnectionTypesEnum"),i=e("../../../enum/repositoryResourceTypes"),l=e("bundle!CommonBundle"),a={folderTreeProcessor:{processItem:function(e){return e._readonly=!(1==e.value.permissionMask||4&e.value.permissionMask),e}},treeNodeProcessor:{processItem:function(e){return e._node=u.contains(u.union([i.FOLDER],t),e.value.resourceType),e}},i18nItemProcessor:{processItem:function(e){return e.i18n=l,e}},filterPublicFolderProcessor:{processItem:function(e){if(e.value.uri!=="/root"+c.publicFolderUri&&e.value.uri!=="/root"+c.tempFolderUri)return e}},filterEmptyFoldersProcessor:{processItem:function(e){if("folder"!==e.value.resourceType||""!==e.value._links.content)return e}},cssClassItemProcessor:{processItem:o},fakeUriProcessor:{processItem:function(e){return e.value.uri&&e.value.uri.match(/^\/root/)&&(e.value.uri=e.value.uri.replace("/root","")),e}}};s.exports=n});