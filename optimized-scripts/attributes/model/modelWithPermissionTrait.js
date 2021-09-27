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

define(["require","exports","module","underscore","../../attributes/enum/roleEnum"],function(e,i,s){var t=e("underscore"),n=e("../../attributes/enum/roleEnum");s.exports={computeds:{permissionEmbedded:{deps:["_embedded","permissionMask"],get:function(e,i){var s=this.getPermission(e);return s?s.mask:i},set:function(e){var i=t.cloneDeep(this.get("_embedded")),s=this.getPermission(i);return s?s.mask=e:i.permission.push({mask:e,recipient:n.ROLE_ADMINISTRATOR}),{_embedded:i}}}},_initModelWithPermissionDefaults:function(){this.defaults=t.extend({},this.defaults,{_embedded:{permission:[{recipient:n.ROLE_ADMINISTRATOR,mask:"1"}]}})},getPermission:function(e){if(e=e||this.get("_embedded"))return t.find(e.permission,function(e){return e.recipient===n.ROLE_ADMINISTRATOR})}}});