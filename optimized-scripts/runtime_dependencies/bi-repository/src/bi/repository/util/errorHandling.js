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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/logging/logger","bundle!RepositoryResourceBundle"],function(e,r,n){function s(e,r){var n=r[e.status]||r.unknown;return o.isString(n)?r[e.status]:o.isFunction(n)?n(e):void 0}var o=e("underscore"),u=e("runtime_dependencies/js-sdk/src/common/logging/logger"),t=e("bundle!RepositoryResourceBundle"),i=u.register("ResourceErrors");n.exports={mapXhrErrorToMessage:function(e,r){var n,o=e&&e.responseJSON&&e.responseJSON.message,u=e&&e.responseJSON&&e.responseJSON.errorCode;return n=s(e,r)||o||t["error.unknown.error"],i.warn(e.status,u,o),n}}});