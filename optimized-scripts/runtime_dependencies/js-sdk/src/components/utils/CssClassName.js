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

define(["require","exports","module","underscore","underscore.string"],function(e,t,r){var n=e("underscore"),o=e("underscore.string"),i=function(e){e=e||{},this.type=e.type,this.name=e.name};i.prototype=Object.create({get name(){return this._name},set name(e){if(!n.isString(e))throw new TypeError("'name' should be a string");if(0===e.length)throw new Error("'name' shouldn't be an empty string");var t=o.chars(e);t[0]=t[0].toUpperCase(),this._name=t.join("")},get type(){return this._type},set type(e){if(!n.isString(e))throw new TypeError("'type' should be a string");if(0===e.length)throw new Error("'type' shouldn't be an empty string");if(!Object.keys(i.TYPES).some(function(t){return i.TYPES[t]===e}))throw new Error("'type' should be one of available types");this._type=e},toString:function(){return i.MAIN_PREFIX+"-"+i.TYPE_PEFIXES[this.type]+this.name}}),i.TYPES={MODULE:"module",LAYOUT:"layout",UTIL:"util",STATE:"state",JSHOOK:"jshook"},i.TYPE_PEFIXES={module:"m",layout:"l",state:"is",util:"u",jshook:"j"},i.MAIN_PREFIX="jr",r.exports=i});