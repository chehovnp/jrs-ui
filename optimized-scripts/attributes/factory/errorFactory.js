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

define(["require","exports","module","bundle!AttributesBundle","underscore"],function(e,r,t){function s(e,r){var t={};return n.each(e,function(e,s){n.isObject(e)?t[e.field]=e.fn(r[s]):t[e]=r[s]}),t}function i(e){return a["attributes.attribute.permissionMask."+e]}var a=e("bundle!AttributesBundle"),n=e("underscore"),u={},o=[a["attributes.error.message.unknown.error"]];u["access.denied"]=[a["attributes.error.message.access.denied"],["name"]],u[401]=[a["attributes.error.message.not.authenticated"]],u["illegal.parameter.value.error"]=[a["attributes.illegal.parameter.value.error"]],u["attribute.invalid.permission.order"]=[a["attributes.error.message.invalid.permission.order"],["name",{field:"strongerPermission",fn:i},{field:"inheritedPermission",fn:i}]],u["attribute.duplicate.server.level"]=[a["attributes.error.message.duplicate.server.level"],["name"]],t.exports=function(e){var r=e.responseJSON||{},t=r.errorCode,i=r.parameters,a=e.status,l=u[t||a]||o;return n.template(l[0])(l[1]?s(l[1],i):{})}});