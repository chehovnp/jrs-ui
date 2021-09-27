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

define(["require","exports","module","underscore"],function(r,t,n){var e=r("underscore"),o={mixin:function(){var r,t,n=Array.prototype,e=n.shift.call(arguments);for(r=0;r<arguments.length;r+=1)if(arguments[r])for(t in arguments[r])arguments[r].hasOwnProperty(t)&&(e[t]=arguments[r][t]);return e},inherit:function(r,t){var n;n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)};var i=function(){};return i.prototype=r.prototype,n.prototype=new i,t&&e.extend(n.prototype,t),n.prototype.constructor=n,n.parent=r.prototype,n.extend=function(r){return o.inherit(n,r)},n},extend:function(r){return o.inherit(function(){},r)}};n.exports=o});