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

define(["require","exports","module","runtime_dependencies/js-sdk/src/jrs.configs","request"],function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=e("runtime_dependencies/js-sdk/src/jrs.configs"),c=e("request"),i=function(){function e(t){r(this,e),s(this,"request",void 0),this.request=t.request||c}return a(e,[{key:"getInputControlsSelectedValues",value:function(e){return this.request({type:"GET",url:"".concat(u.urlContext,"/rest_v2/reports").concat(e,"/inputControls/selectedValues"),headers:{Accept:"application/json"}})}},{key:"getInputControlsMetadata",value:function(e){return this.request({type:"GET",url:"".concat(u.urlContext,"/rest_v2/reports").concat(e,"/inputControls?exclude=state"),headers:{Accept:"application/json"}})}},{key:"getInputControlsValues",value:function(e,t){return this.request({type:"GET",url:"".concat(u.urlContext,"/rest_v2/reports").concat(e,"/inputControls/").concat(t.join(";"),"/values"),headers:{Accept:"application/json"}})}},{key:"getInputControlsPaginatedValues",value:function(e,t){var n=t.map(function(e){return e.name}).join(";");return this.request({type:"POST",url:"".concat(u.urlContext,"/rest_v2/reports").concat(e,"/inputControls/").concat(n,"/values/pagination"),data:JSON.stringify({reportParameter:t}),headers:{Accept:"application/json","Content-Type":"application/json"}})}}]),e}();n.exports=i});