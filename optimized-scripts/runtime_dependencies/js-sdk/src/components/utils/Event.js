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

define(["require","exports","module","underscore"],function(e,t,n){var r=e("underscore"),i=function(e){e=e||{},this.name=e.name,this.data=e.data||{},this._isDefaultPrevented=!1};i.prototype=Object.create({get name(){return this._name},set name(e){if(!r.isString(e))throw new TypeError("'name' must be a 'string'");if(!e.length)throw new Error("'name' should't be an empty string");this._name=e},get data(){return this._data},set data(e){if(!r.isObject(e))throw new TypeError("'data' must be an 'object'");this._data=e},isDefaultPrevented:function(){return this._isDefaultPrevented},preventDefault:function(){this._isDefaultPrevented=!0}}),n.exports=i});