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

define(["require","exports","module","underscore","./classUtil"],function(e,r,t){var n=e("underscore"),o=e("./classUtil"),i={INDEX:"index",KEY_VALUE:"keyValue"},s=o.extend({constructor:function(e){this.code=e,this.args=Array.prototype.slice.call(arguments,1)},bundle:{}});s.prototype.toString=function(){var e=this.bundle[this.code];if(!e)return this.code;var r=this._getArgsType(this.args);return r===i.INDEX?e=this._interpolateIndexArgs(this.args,e):r===i.KEY_VALUE&&(e=this._interpolateObjectArgs(this.args,e)),e},s.prototype._getArgsType=function(e){if(e&&e.length){var r=n.first(e);return n.isObject(r)?i.KEY_VALUE:i.INDEX}},s.prototype._interpolateObjectArgs=function(e,r){var t=e[0].separator||", ",o=e.reduce(function(e,r){var n=r.key,o=r.value;return e[n]?e[n]=e[n]+t:e[n]="",e[n]=e[n]+o,e},{});return r=n.keys(o).reduce(function(e,r){var t=o[r],n="\\{"+r+"\\}";return e.replace(new RegExp(n,"g"),t)},r)},s.prototype._interpolateIndexArgs=function(e,r){for(var t=0,n=e.length;t<n;t++){var o=e[t],i="\\{"+t+"\\}";r=r.replace(new RegExp(i,"g"),o)}return r},s.create=function(e){return function(r){var t=Object.create(s.prototype);return t=n.extend(t,{bundle:e,code:r,args:Array.prototype.slice.call(arguments,1)}),t.toString(t)}},t.exports=s});