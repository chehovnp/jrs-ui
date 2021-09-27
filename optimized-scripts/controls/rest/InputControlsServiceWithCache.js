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

define(["require","exports","module","jquery","underscore"],function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=e("jquery"),c=e("underscore"),l=function(e,t){return c.sortBy(t,"name").reduce(function(e,t){var n=t.name,r=t.offset,o=t.limit,a=[n,r,o].concat(t.criteria||[]).concat(t.value||[]).concat(t.select||[]);return"".concat(e," ").concat(JSON.stringify(a))},"".concat(e))},s=function(){function e(t){r(this,e),u(this,"inputControlsService",void 0),u(this,"cache",void 0),this.cache={},this.inputControlsService=t.inputControlsService}return a(e,[{key:"getInputControlsSelectedValues",value:function(e){return this.inputControlsService.getInputControlsSelectedValues(e)}},{key:"getInputControlsMetadata",value:function(e){return this.inputControlsService.getInputControlsMetadata(e)}},{key:"getInputControlsValues",value:function(e,t){return this.inputControlsService.getInputControlsValues(e,t)}},{key:"getInputControlsPaginatedValues",value:function(e,t){var n=this,r=l(e,t),o=this.cache[r],a=i.Deferred();return o?a.resolve(o):this.inputControlsService.getInputControlsPaginatedValues(e,t).then(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u=t[0];n.cache[r]=u,a.resolve(u)},function(){a.reject.apply(a,arguments)}),a}},{key:"setCacheValueForControlPaginatedValues",value:function(e,t,n){var r=l(e,t);this.cache[r]=n}},{key:"clearCache",value:function(){this.cache={}}}]),e}();n.exports=s});